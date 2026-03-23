import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Placeholder for Stripe webhook handling
  return NextResponse.json({ received: true });
}
