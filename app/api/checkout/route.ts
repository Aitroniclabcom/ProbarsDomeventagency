import { NextRequest, NextResponse } from "next/server";

const WC_PAYMENT: Record<string, string> = {
  bacs: "Direct bank transfer",
  stripe: "Credit / Debit Card",
};

function normalizeBaseUrl(url: string) {
  return url.replace(/\/+$/, "");
}

export async function POST(req: NextRequest) {
  try {
    const baseUrl = process.env.WOOCOMMERCE_URL;
    const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY;
    const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET;

    if (!baseUrl || !consumerKey || !consumerSecret) {
      return NextResponse.json(
        { error: "WooCommerce REST credentials are not configured" },
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

    const apiBase = normalizeBaseUrl(baseUrl);
    const endpoint = `${apiBase}/wp-json/wc/v3/orders`;
    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify(payload),
    });

    const bodyText = await res.text();
    let order: { id?: number; order_key?: string; total?: string; message?: string } = {};
    try {
      order = JSON.parse(bodyText) as typeof order;
    } catch {
      return NextResponse.json(
        { error: "Invalid response from WooCommerce" },
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
