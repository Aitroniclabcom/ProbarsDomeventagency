// ─── WooCommerce Store API Response Types ──────────────────────────────────

/** Current Store API shape (prices in minor units) + legacy flat fields */
export type WCStoreProduct = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  /** Present on newer Store API responses */
  summary?: string;
  /** Legacy flat prices (strings, major units) */
  price?: string;
  regular_price?: string;
  sale_price?: string;
  /** Current Store API nested prices (minor units, e.g. "1105" = 11.05 with minor_unit 2) */
  prices?: {
    currency_code: string;
    currency_minor_unit: number;
    price: string;
    regular_price: string;
    sale_price: string;
  };
  on_sale?: boolean;
  stock_status?: "instock" | "outofstock" | "onbackorder";
  is_in_stock?: boolean;
  stock_quantity?: number | null;
  images?: Array<{ src: string; alt?: string }>;
  categories?: Array<{ id: number; name: string; slug: string }>;
  meta_data?: Array<{ key: string; value: unknown }> | unknown;
  sku?: string;
  /** "simple" | "variable" | … (WooCommerce product type) */
  type?: string;
  /** Variable products: Store API returns variation refs (ids + attribute pairs) */
  variations?: Array<{ id: number; attributes?: Array<{ name?: string; value?: string }> }>;
};

export type WCStoreCartItem = {
  key: string;
  id: number;
  quantity: number;
  name: string;
  price: string;
  prices: {
    price: string;
    regular_price: string;
    sale_price: string;
    currency_code: string;
    currency_symbol: string;
    currency_minor_unit: number;
    currency_decimal_separator: string;
    currency_thousand_separator: string;
  };
  totals: {
    line_subtotal: string;
    line_subtotal_tax: string;
    line_total: string;
    line_total_tax: string;
  };
  item_data: Array<{ key: string; value: string }>;
  short_description: string;
  description: string;
  sku: string;
  low_stock_remaining: number | null;
  backorders_allowed: boolean;
  show_backorder_badge: boolean;
  sold_individually: boolean;
  permalink: string;
  images: Array<{ id: number; src: string; thumbnail: string; srcset: string; sizes: string; name: string; alt: string }>;
  variation: Record<string, string>;
  type: string;
};

export type WCStoreCart = {
  coupons: any[];
  items: WCStoreCartItem[];
  items_count: number;
  items_weight: number;
  needs_payment: boolean;
  needs_shipping: boolean;
  shipping_address: Record<string, any>;
  billing_address: Record<string, any>;
  totals: {
    currency_code: string;
    currency_symbol: string;
    currency_minor_unit: number;
    currency_decimal_separator: string;
    currency_thousand_separator: string;
    total_items: string;
    total_items_tax: string;
    total_fees: string;
    total_fees_tax: string;
    total_discount: string;
    total_discount_tax: string;
    total_shipping: string;
    total_shipping_tax: string;
    total_price: string;
    total_price_with_tax: string;
    total_tax: string;
  };
};

// ─── Frontend Model Types ──────────────────────────────────────────────────

/** A single selectable option of a variable product (e.g. a gift-card nominal). */
export type FrontendVariation = {
  id: string;
  /** Human label built from the variation's attribute value(s), e.g. "50 €". */
  label: string;
  attributes: Record<string, string>;
  price: number;
  regularPrice: number;
  salePrice: number | null;
  image: string | null;
  stockStatus: "instock" | "outofstock" | "onbackorder";
};

export type FrontendProduct = {
  id: string;
  slug: string;
  sku: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  regularPrice: number;
  salePrice: number | null;
  currencyCode: string;
  stockStatus: "instock" | "outofstock" | "onbackorder";
  isOnSale: boolean;
  isFeatured: boolean;
  image: string | null;
  gallery: string[];
  categoryIds: number[];
  categoryNames: string[];
  categorySlugs: string[];
  meta: Record<string, string>;
  /** "simple" (default) or "variable". */
  type: "simple" | "variable";
  /** For variable products: min/max across variations. null for simple. */
  priceRange: { min: number; max: number } | null;
  /** Selectable options for variable products; empty for simple. */
  variations: FrontendVariation[];
};

export type FrontendCartItem = {
  key: string;
  productId: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  lineTotal: number;
};

export type FrontendCart = {
  items: FrontendCartItem[];
  itemCount: number;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  currencyCode: string;
};

// ─── Mapper Functions ──────────────────────────────────────────────────────

/** Store API may omit meta_data or send a non-array; Woo is single-language here — no title_lv / short_desc_ru etc. */
function normalizeMetaData(raw: WCStoreProduct["meta_data"]): Array<{ key: string; value: unknown }> {
  if (!Array.isArray(raw)) return [];
  return raw.filter((m): m is { key: string; value: unknown } => m != null && typeof (m as { key?: string }).key === "string");
}

function getMetaString(metaData: Array<{ key: string; value: unknown }>, key: string): string | null {
  const raw = metaData.find((m) => m.key === key || m.key === `_${key}`)?.value;
  if (raw == null) return null;
  if (typeof raw === "string") return raw;
  if (typeof raw === "number" || typeof raw === "boolean") return String(raw);
  return null;
}

function metaToRecord(metaData: Array<{ key: string; value: unknown }>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const m of metaData) {
    const v = m.value;
    if (v == null) out[m.key] = "";
    else if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") out[m.key] = String(v);
    else {
      try {
        out[m.key] = JSON.stringify(v);
      } catch {
        out[m.key] = "";
      }
    }
  }
  return out;
}

function minorUnitToMajor(amount: string, minorUnit: number): number {
  const n = parseInt(String(amount), 10);
  if (Number.isNaN(n)) return 0;
  return n / 10 ** minorUnit;
}

export function mapWCProductToFrontend(product: WCStoreProduct): FrontendProduct {
  const metaData = normalizeMetaData(product.meta_data);

  let price: number;
  let regularPrice: number;
  let salePrice: number | null;
  let currencyCode = "EUR";

  if (product.prices) {
    const mu = product.prices.currency_minor_unit ?? 2;
    currencyCode = product.prices.currency_code || currencyCode;
    price = minorUnitToMajor(product.prices.price, mu);
    regularPrice = minorUnitToMajor(product.prices.regular_price, mu);
    const sp = product.prices.sale_price;
    const rp = product.prices.regular_price;
    salePrice = sp && sp !== rp ? minorUnitToMajor(sp, mu) : null;
  } else {
    price = parseFloat(product.price || product.regular_price || "0");
    regularPrice = parseFloat(product.regular_price || "0");
    salePrice = product.sale_price ? parseFloat(product.sale_price) : null;
  }

  const shortSource = product.short_description ?? product.summary ?? "";
  const descSource = product.description ?? "";

  let stockStatus: FrontendProduct["stockStatus"] = "instock";
  if (product.stock_status) {
    stockStatus = product.stock_status;
  } else if (product.is_in_stock === false) {
    stockStatus = "outofstock";
  }

  const isOnSale =
    product.on_sale === true || (salePrice !== null && salePrice < regularPrice && regularPrice > 0);

  return {
    id: String(product.id ?? ""),
    slug: product.slug ?? String(product.id ?? ""),
    sku: product.sku ?? "",
    name: String(product.name ?? ""),
    shortDescription: String(shortSource),
    description: String(descSource),
    price,
    regularPrice,
    salePrice,
    currencyCode,
    stockStatus,
    isOnSale,
    isFeatured:
      getMetaString(metaData, "featured") === "yes" || getMetaString(metaData, "_featured") === "yes",
    image: product.images?.[0]?.src || null,
    gallery: (product.images ?? []).map((img) => img.src).filter((src): src is string => Boolean(src)),
    categoryIds: product.categories?.map((cat) => cat.id) || [],
    categoryNames: product.categories?.map((cat) => String(cat.name ?? "")) || [],
    categorySlugs: product.categories?.map((cat) => String(cat.slug ?? "")) || [],
    meta: metaToRecord(metaData),
    type: product.type === "variable" ? "variable" : "simple",
    // priceRange + variations are filled in by the data layer (store-api) for variable products.
    priceRange: null,
    variations: [],
  };
}

/** Map a WooCommerce REST v3 product variation to the frontend model. */
export function mapWCVariationToFrontend(raw: Record<string, unknown>): FrontendVariation {
  const attrsRaw = Array.isArray(raw.attributes)
    ? (raw.attributes as Array<{ name?: string; option?: string }>)
    : [];
  const attributes: Record<string, string> = {};
  for (const a of attrsRaw) {
    if (a && a.name) attributes[String(a.name)] = String(a.option ?? "");
  }
  const label = attrsRaw
    .map((a) => String(a?.option ?? "").trim())
    .filter(Boolean)
    .join(" / ");

  const regularPrice = parseFloat(String(raw.regular_price ?? raw.price ?? "0")) || 0;
  const price = parseFloat(String(raw.price ?? raw.regular_price ?? "0")) || 0;
  const saleRaw =
    raw.sale_price != null && String(raw.sale_price).trim() !== ""
      ? parseFloat(String(raw.sale_price))
      : null;
  const salePrice = saleRaw != null && saleRaw > 0 && saleRaw < regularPrice ? saleRaw : null;

  const imgSrc =
    raw.image && typeof raw.image === "object"
      ? String((raw.image as { src?: string }).src ?? "")
      : "";

  let stockStatus: FrontendVariation["stockStatus"] = "instock";
  if (raw.stock_status === "outofstock" || raw.stock_status === "onbackorder") {
    stockStatus = raw.stock_status;
  }

  return {
    id: String(raw.id ?? ""),
    label,
    attributes,
    price,
    regularPrice,
    salePrice,
    image: imgSrc || null,
    stockStatus,
  };
}

export function mapWCCartToFrontend(cart: WCStoreCart): FrontendCart {
  const totals = cart.totals;
  return {
    items: cart.items.map((item) => ({
      key: item.key,
      productId: item.id,
      name: item.name,
      quantity: item.quantity,
      price: parseFloat(item.prices.price),
      image: item.images?.[0]?.src || "",
      lineTotal: parseFloat(item.totals.line_total),
    })),
    itemCount: cart.items_count,
    subtotal: parseFloat(totals.total_items),
    tax: parseFloat(totals.total_tax),
    shipping: parseFloat(totals.total_shipping),
    total: parseFloat(totals.total_price),
    currencyCode: totals.currency_code,
  };
}

export function mapFrontendProductToWCCartItem(product: FrontendProduct, quantity: number): WCStoreCartItem {
  // This is a helper to structure add-to-cart requests
  return {
    key: `${product.id}-${Date.now()}`,
    id: parseInt(product.id),
    quantity,
    name: product.name,
    price: String(product.price),
    prices: {
      price: String(product.price),
      regular_price: String(product.regularPrice),
      sale_price: product.salePrice ? String(product.salePrice) : "",
      currency_code: product.currencyCode,
      currency_symbol: "€",
      currency_minor_unit: 2,
      currency_decimal_separator: ".",
      currency_thousand_separator: ",",
    },
    totals: {
      line_subtotal: String(product.price * quantity),
      line_subtotal_tax: "0",
      line_total: String(product.price * quantity),
      line_total_tax: "0",
    },
    item_data: [],
    short_description: product.shortDescription,
    description: product.description,
    sku: product.sku,
    low_stock_remaining: null,
    backorders_allowed: false,
    show_backorder_badge: false,
    sold_individually: false,
    permalink: `/shop/${product.slug}`,
    images: product.gallery.map((src, idx) => ({
      id: idx,
      src,
      thumbnail: src,
      srcset: src,
      sizes: "",
      name: `Image ${idx + 1}`,
      alt: product.name,
    })),
    variation: {},
    type: "simple",
  };
}
