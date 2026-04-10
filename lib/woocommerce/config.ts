/**
 * WordPress site root where WooCommerce lives (wp-admin → Settings → General → WordPress Address).
 * Used for Store API (/wp-json/wc/store/v1) and checkout REST (/wp-json/wc/v3).
 *
 * Prefer WOOCOMMERCE_URL on the server: NEXT_PUBLIC_* is often the marketing domain (e.g. domeventagency.com)
 * while the real store lives on another host or subdomain.
 */
export function getWooCommerceBaseUrl(): string {
  const raw =
    process.env.WOOCOMMERCE_URL?.trim() ||
    process.env.NEXT_PUBLIC_WOOCOMMERCE_URL?.trim();
  if (!raw) {
    throw new Error(
      "Set WOOCOMMERCE_URL (recommended on Vercel) or NEXT_PUBLIC_WOOCOMMERCE_URL to your WordPress store URL."
    );
  }
  return raw.replace(/\/+$/, "");
}
