/**
 * WordPress site root where WooCommerce lives (same value as in wp-admin Site URL).
 * Used for Store API (/wp-json/wc/store/v1) and checkout REST (/wp-json/wc/v3).
 */
export function getWooCommerceBaseUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_WOOCOMMERCE_URL?.trim() ||
    process.env.WOOCOMMERCE_URL?.trim();
  if (!raw) {
    throw new Error(
      "Set NEXT_PUBLIC_WOOCOMMERCE_URL or WOOCOMMERCE_URL to your WordPress site URL (e.g. https://shop.example.com)."
    );
  }
  return raw.replace(/\/+$/, "");
}
