import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/db/storage";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const order = await storage.getOrder(id);
    if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 });
    const items = await storage.getOrderItems(order.id);
    return NextResponse.json({ ...order, items });
  } catch {
    return NextResponse.json({ error: "Failed to fetch order" }, { status: 500 });
  }
}
