import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/db/storage";

export async function POST(req: NextRequest) {
  // Placeholder for Stripe checkout session creation
  // Implement when STRIPE_SECRET_KEY is configured
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({
    message: "Stripe integration placeholder - configure STRIPE_SECRET_KEY to enable",
    requiredFields: ["orderId", "items", "successUrl", "cancelUrl"],
  });
}
