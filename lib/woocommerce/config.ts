/**
 * All WordPress roots to try for Store API (and REST v3 fallback).
 * Order: WOOCOMMERCE_URL first (server), then NEXT_PUBLIC_* if different — avoids a bad server-only
 * env hiding a correct public URL (or vice versa on misconfigured Vercel).
 */
export function getWooCommerceStoreRootCandidates(): string[] {
  const norm = (s: string | undefined) => (s?.trim().replace(/\/+$/, "") || "");
  const server = norm(process.env.WOOCOMMERCE_URL);
  const pub = norm(process.env.NEXT_PUBLIC_WOOCOMMERCE_URL);
  const out: string[] = [];
  if (server) out.push(server);
  if (pub && !out.includes(pub)) out.push(pub);
  if (!out.length) {
    throw new Error(
      "Set WOOCOMMERCE_URL or NEXT_PUBLIC_WOOCOMMERCE_URL to your WordPress store URL."
    );
  }
  return out;
}

/** Host used for checkout REST (first candidate = server URL when set). */
export function getWooCommerceBaseUrl(): string {
  return getWooCommerceStoreRootCandidates()[0];
}
