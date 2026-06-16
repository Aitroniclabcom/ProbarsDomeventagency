import { NextResponse } from "next/server";

/** Runtime Stripe config — avoids relying on NEXT_PUBLIC_* baked in at build time only. */
export async function GET() {
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim() || null;
  const configured = Boolean(
    process.env.STRIPE_SECRET_KEY?.trim() && publishableKey
  );

  return NextResponse.json({ publishableKey, configured });
}
