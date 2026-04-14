import { getWooCommerceBaseUrl } from "@/lib/woocommerce/config";

export function wooRestOrdersCreateUrl(consumerKey: string, consumerSecret: string) {
  const url = new URL(`${getWooCommerceBaseUrl()}/wp-json/wc/v3/orders`);
  url.searchParams.set("consumer_key", consumerKey);
  url.searchParams.set("consumer_secret", consumerSecret);
  return url.toString();
}

export function wooRestOrderByIdUrl(
  orderId: number,
  consumerKey: string,
  consumerSecret: string
) {
  const url = new URL(`${getWooCommerceBaseUrl()}/wp-json/wc/v3/orders/${orderId}`);
  url.searchParams.set("consumer_key", consumerKey);
  url.searchParams.set("consumer_secret", consumerSecret);
  return url.toString();
}
