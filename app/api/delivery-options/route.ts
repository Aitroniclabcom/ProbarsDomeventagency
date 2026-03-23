import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/db/storage";

export async function GET() {
  try {
    const options = await storage.getActiveDeliveryOptions();
    return NextResponse.json(options);
  } catch {
    return NextResponse.json({ error: "Failed to fetch delivery options" }, { status: 500 });
  }
}
