/** Public site URL (Next.js frontend), e.g. https://domeventagency.com */
export function getPublicSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.VERCEL_URL?.trim() ||
    "";
  if (!raw) {
    throw new Error("Set NEXT_PUBLIC_SITE_URL to your main site URL (e.g. https://domeventagency.com).");
  }
  const withProto = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return withProto.replace(/\/+$/, "");
}

export function checkoutThankYouUrl(): string {
  return `${getPublicSiteUrl()}/checkout/thank-you`;
}
