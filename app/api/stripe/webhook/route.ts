import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe } from "@/lib/stripe/server";
import { wooRestOrderByIdUrl } from "@/lib/woocommerce/order-rest";

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
  if (!stripe || !secret) {
    return NextResponse.json({ error: "Stripe webhook is not configured" }, { status: 503 });
  }

  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid signature";
    console.error("[Stripe webhook]", msg);
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  if (event.type === "payment_intent.succeeded") {
    const pi = event.data.object as Stripe.PaymentIntent;
    const orderIdRaw = pi.metadata?.woo_order_id;
    const orderId = orderIdRaw ? Number.parseInt(orderIdRaw, 10) : NaN;
    if (!Number.isFinite(orderId) || orderId <= 0) {
      console.warn("[Stripe webhook] payment_intent.succeeded without woo_order_id metadata");
      return NextResponse.json({ received: true });
    }

    const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY;
    const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET;
    if (!consumerKey || !consumerSecret) {
      console.error("[Stripe webhook] WooCommerce credentials missing; cannot mark order paid");
      return NextResponse.json({ received: true });
    }

    const url = wooRestOrderByIdUrl(orderId, consumerKey, consumerSecret);
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        set_paid: true,
        transaction_id: pi.id,
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[Stripe webhook] WooCommerce PUT order failed", res.status, text.slice(0, 400));
    }
  }

  return NextResponse.json({ received: true });
}
