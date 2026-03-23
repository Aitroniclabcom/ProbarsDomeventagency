import { NextRequest, NextResponse } from "next/server";
import { submitCheckout } from "@/lib/woocommerce/store-api";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { billing_address, shipping_address, line_items } = body;

    if (!billing_address?.email || !line_items?.length) {
      return NextResponse.json({ error: "billing_address and line_items are required" }, { status: 400 });
    }

    const order = await submitCheckout({ billing_address, shipping_address, line_items });
    return NextResponse.json(order, { status: 201 });
  } catch (error: any) {
    console.error("[WooCommerce] POST /api/orders:", error.message);
    return NextResponse.json({ error: error.message ?? "Failed to create order" }, { status: 500 });
  }
}
