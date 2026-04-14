import { NextRequest, NextResponse } from "next/server";
import { getWooCommerceBaseUrl } from "@/lib/woocommerce/config";
import { wooRestOrdersCreateUrl } from "@/lib/woocommerce/order-rest";
import { getStripe, stripePublishableConfigured } from "@/lib/stripe/server";

const WC_PAYMENT: Record<string, string> = {
  bacs: "Direct bank transfer",
  stripe: "Credit / Debit Card",
};

function toStripeMinorUnits(totalStr: string): number | null {
  const n = Number.parseFloat(String(totalStr).replace(",", "."));
  if (!Number.isFinite(n) || n <= 0) return null;
  return Math.round(n * 100);
}

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

    const { billing, lineItems, paymentMethod } = await req.json();

    if (!billing || !billing.email || !lineItems?.length) {
      return NextResponse.json({ error: "Missing billing info or items" }, { status: 400 });
    }

    if (paymentMethod !== "bacs" && paymentMethod !== "stripe") {
      return NextResponse.json({ error: "Invalid payment method" }, { status: 400 });
    }

    let country = (billing.country || "LV").toString();
    if (country === "other" || country.length !== 2) {
      country = "LV";
    }

    const line_items = lineItems.map((item: { id: number; quantity: number }) => ({
      product_id: Number(item.id),
      quantity: Math.max(1, Number(item.quantity) || 1),
    }));

    const payload = {
      payment_method: paymentMethod,
      payment_method_title: WC_PAYMENT[paymentMethod] ?? paymentMethod,
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
        first_name: billing.first_name || "",
        last_name: billing.last_name || "",
        address_1: billing.address_1 || "",
        city: billing.city || "",
        country,
      },
      line_items,
    };

    // Query-string auth: many PHP / reverse-proxy setups strip Authorization: Basic.
    const endpoint = wooRestOrdersCreateUrl(consumerKey, consumerSecret);

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const rawText = await res.text();
    const bodyText = rawText.replace(/^\uFEFF/, "").trim();

    let order: {
      id?: number;
      order_key?: string;
      total?: string;
      currency?: string;
      message?: string;
      code?: string;
    } = {};
    try {
      order = JSON.parse(bodyText) as typeof order;
    } catch {
      const preview = bodyText.slice(0, 280).replace(/\s+/g, " ");
      console.error(
        "[WooCommerce] Non-JSON response",
        res.status,
        preview || "(empty body)"
      );
      const looksHtml = /<!DOCTYPE|<html[\s>]/i.test(bodyText);
      const hint = looksHtml
        ? "Received HTML instead of JSON — check WOOCOMMERCE_URL (include /shop if WordPress is in a subdirectory), permalinks, and that the REST API is not blocked."
        : "WooCommerce did not return JSON — check store URL, SSL, and API credentials (Read/Write).";
      return NextResponse.json(
        { error: `${hint} (HTTP ${res.status})` },
        { status: 502 }
      );
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

    let stripeClientSecret: string | undefined;
    if (paymentMethod === "stripe") {
      const stripe = getStripe();
      const minor = toStripeMinorUnits(total);
      const currency = (order.currency || "EUR").toLowerCase();
      if (stripe && stripePublishableConfigured() && minor != null && minor >= 50) {
        try {
          const pi = await stripe.paymentIntents.create({
            amount: minor,
            currency,
            automatic_payment_methods: { enabled: true },
            metadata: {
              woo_order_id: String(orderId),
              woo_order_key: String(orderKey),
            },
          });
          stripeClientSecret = pi.client_secret ?? undefined;
        } catch (e) {
          console.error("[Stripe] payment_intents.create failed:", e);
        }
      } else if (minor != null && minor < 50) {
        console.warn("[Stripe] Order total below Stripe minimum (0.50); using WooCommerce pay URL only.");
      }
    }

    return NextResponse.json({
      orderId,
      total,
      paymentMethod,
      paymentUrl,
      ...(stripeClientSecret ? { stripeClientSecret } : {}),
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create order";
    console.error("[WooCommerce] POST /api/checkout:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
