import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/db/storage";
import { isAdmin } from "@/lib/auth";
import { insertDeliveryOptionSchema } from "@/lib/db/schema";

export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const options = await storage.getDeliveryOptions();
    return NextResponse.json(options);
  } catch {
    return NextResponse.json({ error: "Failed to fetch delivery options" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await req.json();
    const validated = insertDeliveryOptionSchema.parse(body);
    const option = await storage.createDeliveryOption(validated);
    return NextResponse.json(option, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Invalid data" }, { status: 400 });
  }
}
