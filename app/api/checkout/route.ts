import { NextRequest, NextResponse } from "next/server";
import { submitCheckout } from "@/lib/woocommerce/store-api";

export async function POST(req: NextRequest) {
  try {
    const { billing, lineItems } = await req.json();

    if (!billing || !billing.email || !lineItems?.length) {
      return NextResponse.json({ error: "Missing billing info or items" }, { status: 400 });
    }

    // WooCommerce Store API checkout payload
    const payload = {
      billing_address: {
        first_name: billing.first_name || "",
        last_name: billing.last_name || "",
        email: billing.email,
        phone: billing.phone || "",
        address_1: billing.address_1 || "",
        city: billing.city || "",
        country: billing.country || "LV",
      },
      shipping_address: {
        first_name: billing.first_name || "",
        last_name: billing.last_name || "",
        address_1: billing.address_1 || "",
        city: billing.city || "",
        country: billing.country || "LV",
      },
      line_items: lineItems.map((item: any) => ({
        id: parseInt(item.id),
        quantity: item.quantity,
      })),
    };

    const order = await submitCheckout(payload);
    return NextResponse.json(order);
  } catch (error: any) {
    console.error("[WooCommerce] POST /api/checkout:", error.message);
    return NextResponse.json({ error: error.message || "Failed to create order" }, { status: 500 });
  }
}
