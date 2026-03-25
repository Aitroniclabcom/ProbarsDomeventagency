import type { Language } from "@/i18n/translations";

// ─── WooCommerce Store API Response Types ──────────────────────────────────

export type WCStoreProduct = {
  id: number;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  stock_status: "instock" | "outofstock" | "onbackorder";
  stock_quantity: number | null;
  images: Array<{ src: string; alt?: string }>;
  categories: Array<{ id: number; name: string; slug: string }>;
  meta_data?: Array<{ key: string; value: string }>;
  sku: string;
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
  meta: Record<string, string>;
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

function getMetaValue(metaData: Array<{ key: string; value: string }> | undefined, key: string): string | null {
  return metaData?.find((m) => m.key === key || m.key === `_${key}`)?.value ?? null;
}

function getLocalizedField(
  defaultValue: string,
  metaData: Array<{ key: string; value: string }> | undefined,
  fieldName: string,
  locale: Language
): string {
  const localeKey = `${fieldName}_${locale}`;
  return getMetaValue(metaData, localeKey) || defaultValue;
}

export function mapWCProductToFrontend(product: WCStoreProduct, locale: Language = "en"): FrontendProduct {
  const metaData = product.meta_data || [];
  const price = parseFloat(product.price || product.regular_price || "0");
  const regularPrice = parseFloat(product.regular_price || "0");
  const salePrice = product.sale_price ? parseFloat(product.sale_price) : null;

  return {
    id: String(product.id),
    slug: product.slug,
    sku: product.sku,
    name: getLocalizedField(product.name, metaData, "title", locale),
    shortDescription: getLocalizedField(product.short_description, metaData, "short_desc", locale),
    description: getLocalizedField(product.description, metaData, "long_desc", locale),
    price,
    regularPrice,
    salePrice,
    currencyCode: "EUR", // WooCommerce Store API should include this
    stockStatus: product.stock_status,
    isOnSale: salePrice !== null && salePrice < regularPrice,
    isFeatured: getMetaValue(metaData, "featured") === "yes" || getMetaValue(metaData, "_featured") === "yes",
    image: product.images?.[0]?.src || null,
    gallery: product.images?.map((img) => img.src) || [],
    categoryIds: product.categories?.map((cat) => cat.id) || [],
    categoryNames: product.categories?.map((cat) => getLocalizedField(cat.name, metaData, `cat_${cat.id}`, locale)) || [],
    meta: Object.fromEntries(metaData.map((m) => [m.key, m.value])),
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
