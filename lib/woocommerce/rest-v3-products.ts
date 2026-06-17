import { getWooCommerceStoreRootCandidates } from "./config";
import type { WCStoreProduct } from "./mappers";

function adaptRestV3Product(raw: Record<string, unknown>): WCStoreProduct {
  const images = Array.isArray(raw.images)
    ? (raw.images as { src?: string }[]).map((i) => ({ src: String(i?.src ?? "") }))
    : [];
  const categories = Array.isArray(raw.categories)
    ? (raw.categories as { id?: number; name?: string; slug?: string }[]).map((c) => ({
        id: Number(c.id),
        name: String(c.name ?? ""),
        slug: String(c.slug ?? ""),
      }))
    : [];
  const meta_data = Array.isArray(raw.meta_data)
    ? (raw.meta_data as { key: string; value: unknown }[])
    : [];

  return {
    id: Number(raw.id),
    name: String(raw.name ?? ""),
    slug: String(raw.slug ?? ""),
    description: String(raw.description ?? ""),
    short_description: String(raw.short_description ?? ""),
    sku: String(raw.sku ?? ""),
    price: raw.price != null ? String(raw.price) : undefined,
    regular_price: raw.regular_price != null ? String(raw.regular_price) : undefined,
    sale_price:
      raw.sale_price != null && String(raw.sale_price).trim() !== ""
        ? String(raw.sale_price)
        : undefined,
    stock_status: (raw.stock_status as WCStoreProduct["stock_status"]) || "instock",
    images,
    categories,
    meta_data,
    type: typeof raw.type === "string" ? (raw.type as string) : undefined,
  };
}

/**
 * Published products via WooCommerce REST v3 — fallback when Store API (Blocks) is unavailable
 * or returns HTML from a wrong NEXT_PUBLIC / WOOCOMMERCE host mismatch.
 */
export async function fetchProductsViaWooRestV3(params: {
  per_page: number;
  page: number;
  search?: string;
}): Promise<WCStoreProduct[]> {
  const key = process.env.WOOCOMMERCE_CONSUMER_KEY?.trim();
  const secret = process.env.WOOCOMMERCE_CONSUMER_SECRET?.trim();
  if (!key || !secret) {
    throw new Error("WOOCOMMERCE_CONSUMER_KEY / WOOCOMMERCE_CONSUMER_SECRET required for REST v3 fallback");
  }

  const errors: string[] = [];
  for (const root of getWooCommerceStoreRootCandidates()) {
    const url = new URL(`${root}/wp-json/wc/v3/products`);
    url.searchParams.set("consumer_key", key);
    url.searchParams.set("consumer_secret", secret);
    url.searchParams.set("per_page", String(params.per_page));
    url.searchParams.set("page", String(params.page));
    url.searchParams.set("status", "publish");
    if (params.search) url.searchParams.set("search", params.search);

    try {
      const res = await fetch(url.toString(), {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      const body = (await res.text()).replace(/^\uFEFF/, "").trim();
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${body.slice(0, 280).replace(/\s+/g, " ")}`);
      }
      if (!body || body.startsWith("<") || body.startsWith("<!")) {
        throw new Error("Non-JSON / HTML response");
      }
      const parsed = JSON.parse(body) as unknown;
      if (!Array.isArray(parsed)) {
        throw new Error("Expected JSON array from /wc/v3/products");
      }
      return parsed.map((item) => adaptRestV3Product(item as Record<string, unknown>));
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      errors.push(`${root}: ${msg}`);
      console.error("[WooCommerce REST v3] products failed for", root, msg);
    }
  }

  throw new Error(`WooCommerce REST v3 /products failed for every URL. ${errors.join(" | ")}`);
}

/**
 * Variations of a variable product via WooCommerce REST v3.
 * Returns raw variation objects (price/image/attributes); mapped by mapWCVariationToFrontend.
 * Returns [] if creds are missing or every candidate URL fails (caller degrades gracefully).
 */
export async function fetchVariationsViaWooRestV3(
  parentId: string | number,
): Promise<Record<string, unknown>[]> {
  const key = process.env.WOOCOMMERCE_CONSUMER_KEY?.trim();
  const secret = process.env.WOOCOMMERCE_CONSUMER_SECRET?.trim();
  if (!key || !secret) return [];

  for (const root of getWooCommerceStoreRootCandidates()) {
    const url = new URL(`${root}/wp-json/wc/v3/products/${parentId}/variations`);
    url.searchParams.set("consumer_key", key);
    url.searchParams.set("consumer_secret", secret);
    url.searchParams.set("per_page", "100");

    try {
      const res = await fetch(url.toString(), {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      const body = (await res.text()).replace(/^﻿/, "").trim();
      if (!res.ok || !body || body.startsWith("<")) continue;
      const parsed = JSON.parse(body) as unknown;
      if (!Array.isArray(parsed)) continue;
      return parsed as Record<string, unknown>[];
    } catch {
      continue;
    }
  }
  return [];
}

export async function fetchProductBySlugViaWooRestV3(slug: string): Promise<WCStoreProduct | null> {
  const key = process.env.WOOCOMMERCE_CONSUMER_KEY?.trim();
  const secret = process.env.WOOCOMMERCE_CONSUMER_SECRET?.trim();
  if (!key || !secret) return null;

  for (const root of getWooCommerceStoreRootCandidates()) {
    const url = new URL(`${root}/wp-json/wc/v3/products`);
    url.searchParams.set("consumer_key", key);
    url.searchParams.set("consumer_secret", secret);
    url.searchParams.set("slug", slug);
    url.searchParams.set("status", "publish");
    url.searchParams.set("per_page", "1");

    try {
      const res = await fetch(url.toString(), {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      const body = (await res.text()).replace(/^\uFEFF/, "").trim();
      if (!res.ok || !body || body.startsWith("<")) continue;
      const parsed = JSON.parse(body) as unknown;
      if (!Array.isArray(parsed) || !parsed.length) continue;
      return adaptRestV3Product(parsed[0] as Record<string, unknown>);
    } catch {
      continue;
    }
  }
  return null;
}
