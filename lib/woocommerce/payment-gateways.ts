import { getWooCommerceBaseUrl } from "@/lib/woocommerce/config";

type WcGateway = {
  id: string;
  title?: string;
  enabled?: boolean;
};

const STRIPE_GATEWAY_CANDIDATES = [
  "stripe",
  "stripe_cc",
  "stripe_applepay",
  "stripe_googlepay",
  "woocommerce_payments",
] as const;

function gatewaysUrl(consumerKey: string, consumerSecret: string) {
  const url = new URL(`${getWooCommerceBaseUrl()}/wp-json/wc/v3/payment_gateways`);
  url.searchParams.set("consumer_key", consumerKey);
  url.searchParams.set("consumer_secret", consumerSecret);
  return url.toString();
}

export async function resolveWooStripeGatewayId(
  consumerKey: string,
  consumerSecret: string
): Promise<string | null> {
  const override = process.env.WOOCOMMERCE_STRIPE_GATEWAY_ID?.trim();
  if (override) return override;

  try {
    const res = await fetch(gatewaysUrl(consumerKey, consumerSecret), { cache: "no-store" });
    if (!res.ok) return "stripe";

    const gateways = (await res.json()) as WcGateway[];
    if (!Array.isArray(gateways)) return "stripe";

    const enabled = gateways.filter((g) => g.enabled);

    for (const id of STRIPE_GATEWAY_CANDIDATES) {
      if (enabled.some((g) => g.id === id)) return id;
    }

    const fuzzy = enabled.find((g) => /stripe|woocommerce_payments/i.test(g.id));
    return fuzzy?.id ?? null;
  } catch (e) {
    console.warn("[WooCommerce] payment_gateways lookup failed:", e);
    return "stripe";
  }
}

export async function isWooCardPaymentAvailable(
  consumerKey: string,
  consumerSecret: string
): Promise<boolean> {
  const id = await resolveWooStripeGatewayId(consumerKey, consumerSecret);
  return Boolean(id);
}
