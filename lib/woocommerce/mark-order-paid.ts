import { wooRestOrderByIdUrl } from "@/lib/woocommerce/order-rest";

export async function markWooOrderPaid(
  orderId: number,
  transactionId: string
): Promise<{ ok: boolean; error?: string }> {
  const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY;
  const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET;
  if (!consumerKey || !consumerSecret) {
    return { ok: false, error: "WooCommerce credentials missing" };
  }

  const url = wooRestOrderByIdUrl(orderId, consumerKey, consumerSecret);
  const res = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      set_paid: true,
      transaction_id: transactionId,
      payment_method: "stripe",
      payment_method_title: "Credit / Debit Card",
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    return { ok: false, error: text.slice(0, 400) || `HTTP ${res.status}` };
  }

  return { ok: true };
}
