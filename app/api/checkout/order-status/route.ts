import { NextRequest, NextResponse } from "next/server";
import { wooRestOrderByIdUrl } from "@/lib/woocommerce/order-rest";

type WooOrder = {
  id?: number;
  order_key?: string;
  status?: string;
  total?: string;
  currency?: string;
  date_paid?: string | null;
};

const PAID_STATUSES = new Set(["processing", "completed"]);

export async function GET(req: NextRequest) {
  const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY;
  const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET;
  if (!consumerKey || !consumerSecret) {
    return NextResponse.json({ error: "WooCommerce not configured" }, { status: 500 });
  }

  const orderIdRaw = req.nextUrl.searchParams.get("order_id");
  const key = req.nextUrl.searchParams.get("key")?.trim() ?? "";
  const orderId = orderIdRaw ? Number.parseInt(orderIdRaw, 10) : NaN;

  if (!Number.isFinite(orderId) || orderId <= 0 || !key) {
    return NextResponse.json({ error: "Missing order_id or key" }, { status: 400 });
  }

  const url = wooRestOrderByIdUrl(orderId, consumerKey, consumerSecret);
  const res = await fetch(url, { cache: "no-store" });
  const bodyText = (await res.text()).replace(/^\uFEFF/, "").trim();

  let order: WooOrder = {};
  try {
    order = JSON.parse(bodyText) as WooOrder;
  } catch {
    return NextResponse.json({ error: "Invalid response from WooCommerce" }, { status: 502 });
  }

  if (!res.ok) {
    return NextResponse.json(
      { error: (order as { message?: string }).message || "Order not found" },
      { status: res.status === 404 ? 404 : 502 }
    );
  }

  if (order.order_key !== key) {
    return NextResponse.json({ error: "Invalid order key" }, { status: 403 });
  }

  const status = order.status ?? "unknown";
  const isPaid = PAID_STATUSES.has(status) || Boolean(order.date_paid);

  return NextResponse.json({
    orderId: order.id ?? orderId,
    total: order.total ?? "0.00",
    currency: order.currency ?? "EUR",
    status,
    isPaid,
  });
}
