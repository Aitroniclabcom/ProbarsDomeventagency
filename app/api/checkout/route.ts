import { NextRequest, NextResponse } from "next/server";
import { getWooCommerceBaseUrl } from "@/lib/woocommerce/config";
import { wooRestOrdersCreateUrl } from "@/lib/woocommerce/order-rest";
import { resolveWooStripeGatewayId } from "@/lib/woocommerce/payment-gateways";
import { checkoutThankYouUrl } from "@/lib/site-url";

const HEADLESS_RETURN_META = "_headless_return_url";

const WC_PAYMENT_TITLE: Record<string, string> = {
  bacs: "Direct bank transfer",
  stripe: "Credit / Debit Card",
};

export async function POST(req: NextRequest) {
  try {
    const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY;
    const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET;

    if (!consumerKey || !consumerSecret) {
      return NextResponse.json(
        { error: "WooCommerce REST credentials are not configured" },
        { status: 500 }
      );
    }

    let apiBase: string;
    try {
      apiBase = getWooCommerceBaseUrl();
    } catch {
      return NextResponse.json(
        { error: "WOOCOMMERCE_URL / NEXT_PUBLIC_WOOCOMMERCE_URL is not set" },
        { status: 500 }
      );
    }

    const { billing, shipping, lineItems, paymentMethod, deliveryFee } = await req.json();
    const shippingTotal = Math.max(0, Number(deliveryFee) || 0);

    if (!billing || !billing.email || !lineItems?.length) {
      return NextResponse.json({ error: "Missing billing info or items" }, { status: 400 });
    }

    if (paymentMethod !== "bacs" && paymentMethod !== "stripe") {
      return NextResponse.json({ error: "Invalid payment method" }, { status: 400 });
    }

    let wooPaymentMethod = paymentMethod;
    if (paymentMethod === "stripe") {
      const gatewayId = await resolveWooStripeGatewayId(consumerKey, consumerSecret);
      if (!gatewayId) {
        return NextResponse.json(
          { error: "Card payments are not enabled in WooCommerce. Enable Stripe in the store admin." },
          { status: 503 }
        );
      }
      wooPaymentMethod = gatewayId;
    }

    const normCountry = (c: unknown) => {
      const s = (c || "LV").toString();
      return s === "other" || s.length !== 2 ? "LV" : s;
    };
    const country = normCountry(billing.country);
    const ship = shipping || {};
    const shipCountry = normCountry(ship.country ?? billing.country);

    const line_items = lineItems.map(
      (item: { id: number; quantity: number; variationId?: number }) => ({
        product_id: Number(item.id),
        quantity: Math.max(1, Number(item.quantity) || 1),
        ...(item.variationId ? { variation_id: Number(item.variationId) } : {}),
      })
    );

    let thankYouBase: string | undefined;
    if (paymentMethod === "stripe") {
      try {
        thankYouBase = checkoutThankYouUrl();
      } catch (e) {
        console.warn("[checkout] NEXT_PUBLIC_SITE_URL missing — post-payment redirect may not work:", e);
      }
    }

    const payload = {
      payment_method: wooPaymentMethod,
      payment_method_title: WC_PAYMENT_TITLE[paymentMethod] ?? wooPaymentMethod,
      set_paid: false,
      billing: {
        first_name: billing.first_name || "",
        last_name: billing.last_name || "",
        email: billing.email,
        phone: billing.phone || "",
        address_1: billing.address_1 || "",
        city: billing.city || "",
        country,
      },
      shipping: {
        first_name: ship.first_name || billing.first_name || "",
        last_name: ship.last_name || billing.last_name || "",
        address_1: ship.address_1 || billing.address_1 || "",
        city: ship.city || billing.city || "",
        postcode: ship.postcode || "",
        country: shipCountry,
      },
      line_items,
      ...(shippingTotal > 0
        ? {
            shipping_lines: [
              {
                method_id: "flat_rate",
                method_title: "Kurjers",
                total: shippingTotal.toFixed(2),
              },
            ],
          }
        : {}),
      ...(thankYouBase
        ? { meta_data: [{ key: HEADLESS_RETURN_META, value: thankYouBase }] }
        : {}),
    };

    const endpoint = wooRestOrdersCreateUrl(consumerKey, consumerSecret);

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const rawText = await res.text();
    const bodyText = rawText.replace(/^\uFEFF/, "").trim();

    let order: {
      id?: number;
      order_key?: string;
      total?: string;
      message?: string;
      code?: string;
    } = {};
    try {
      order = JSON.parse(bodyText) as typeof order;
    } catch {
      const preview = bodyText.slice(0, 280).replace(/\s+/g, " ");
      console.error("[WooCommerce] Non-JSON response", res.status, preview || "(empty body)");
      const looksHtml = /<!DOCTYPE|<html[\s>]/i.test(bodyText);
      const hint = looksHtml
        ? "Received HTML instead of JSON — check WOOCOMMERCE_URL (include /shop if WordPress is in a subdirectory), permalinks, and that the REST API is not blocked."
        : "WooCommerce did not return JSON — check store URL, SSL, and API credentials (Read/Write).";
      return NextResponse.json({ error: `${hint} (HTTP ${res.status})` }, { status: 502 });
    }

    if (!res.ok) {
      const msg =
        (order as { message?: string }).message ||
        (typeof bodyText === "string" && bodyText.slice(0, 200)) ||
        "Failed to create order";
      console.error("[WooCommerce] POST order:", res.status, msg);
      return NextResponse.json({ error: msg }, { status: res.status >= 400 ? res.status : 502 });
    }

    const orderId = order.id;
    const orderKey = order.order_key;
    if (orderId == null || !orderKey) {
      return NextResponse.json({ error: "Order created but missing id or key" }, { status: 502 });
    }

    const paymentUrl = `${apiBase}/checkout/order-pay/${orderId}/?pay_for_order=true&key=${encodeURIComponent(orderKey)}`;
    const total = order.total ?? "0.00";

    return NextResponse.json({
      orderId,
      total,
      paymentMethod,
      paymentUrl,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create order";
    console.error("[WooCommerce] POST /api/checkout:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
