import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe/server";
import { markWooOrderPaid } from "@/lib/woocommerce/mark-order-paid";

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ error: "Stripe is not configured" }, { status: 503 });
  }

  const body = await req.json();
  const orderId = Number(body?.orderId);
  const paymentIntentId =
    typeof body?.paymentIntentId === "string" ? body.paymentIntentId.trim() : "";

  if (!Number.isFinite(orderId) || orderId <= 0 || !paymentIntentId) {
    return NextResponse.json({ error: "Missing orderId or paymentIntentId" }, { status: 400 });
  }

  let pi;
  try {
    pi = await stripe.paymentIntents.retrieve(paymentIntentId);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid payment";
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  if (pi.status !== "succeeded") {
    return NextResponse.json(
      { error: `Payment status is ${pi.status}, not succeeded` },
      { status: 400 }
    );
  }

  const metaOrderId = pi.metadata?.woo_order_id;
  const metaParsed = metaOrderId ? Number.parseInt(metaOrderId, 10) : NaN;
  if (!Number.isFinite(metaParsed) || metaParsed !== orderId) {
    return NextResponse.json({ error: "Payment does not match this order" }, { status: 400 });
  }

  const result = await markWooOrderPaid(orderId, paymentIntentId);
  if (!result.ok) {
    console.error("[checkout/confirm] mark paid failed:", result.error);
    return NextResponse.json(
      { error: "Payment received but order could not be updated. Contact support." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, orderId });
}
