import { NextResponse } from "next/server";
import { isWooCardPaymentAvailable } from "@/lib/woocommerce/payment-gateways";

/** Whether WooCommerce has an enabled Stripe/card gateway (payment stays on the WP store). */
export async function GET() {
  const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY;
  const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET;

  if (!consumerKey || !consumerSecret) {
    return NextResponse.json({ cardEnabled: false });
  }

  const cardEnabled = await isWooCardPaymentAvailable(consumerKey, consumerSecret);
  return NextResponse.json({ cardEnabled });
}
