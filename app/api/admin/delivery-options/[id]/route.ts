import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/db/storage";
import { isAdmin } from "@/lib/auth";
import { insertDeliveryOptionSchema } from "@/lib/db/schema";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { id } = await params;
    const body = await req.json();
    const validated = insertDeliveryOptionSchema.partial().parse(body);
    const option = await storage.updateDeliveryOption(id, validated);
    if (!option) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(option);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to update" }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { id } = await params;
    await storage.deleteDeliveryOption(id);
    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
