import { wcAPI } from "./client";
import {
  mapWCProductToFrontend,
  mapWCVariationToFrontend,
  mapWCCartToFrontend,
  type FrontendProduct,
  type FrontendCart,
  type WCStoreProduct,
  type WCStoreCart,
} from "./mappers";
import {
  fetchProductsViaWooRestV3,
  fetchProductBySlugViaWooRestV3,
  fetchVariationsViaWooRestV3,
} from "./rest-v3-products";

function normalizeProductListResponse(response: unknown): unknown[] {
  if (Array.isArray(response)) return response;
  if (response && typeof response === "object") {
    const o = response as Record<string, unknown>;
    if (Array.isArray(o.products)) return o.products;
    if (Array.isArray(o.data)) return o.data;
  }
  return [];
}

export async function fetchProducts(params?: { per_page?: number; page?: number; search?: string }) {
  let response: unknown;
  try {
    response = await wcAPI.getProducts(params);
  } catch (e) {
    console.warn("[WooCommerce] Store API unavailable, using REST v3 /products:", e);
    const v3List = await fetchProductsViaWooRestV3({
      per_page: params?.per_page ?? 20,
      page: params?.page ?? 1,
      search: params?.search,
    });
    return v3List.flatMap((p) => {
      try {
        return [mapWCProductToFrontend(p)];
      } catch (err) {
        console.error("[WooCommerce] map product skipped:", err);
        return [];
      }
    });
  }

  const products = normalizeProductListResponse(response);
  return products.flatMap((p) => {
    try {
      return [mapWCProductToFrontend(p as WCStoreProduct)];
    } catch (err) {
      console.error("[WooCommerce] map product skipped:", err);
      return [];
    }
  });
}

export async function fetchProductBySlug(slug: string): Promise<FrontendProduct | null> {
  let mapped: FrontendProduct | null = null;
  try {
    const product = (await wcAPI.getProduct(slug)) as WCStoreProduct;
    mapped = mapWCProductToFrontend(product);
  } catch (error) {
    console.warn(`[WooCommerce] Store API product ${slug} failed, trying REST v3:`, error);
    const v3 = await fetchProductBySlugViaWooRestV3(slug);
    if (v3) mapped = mapWCProductToFrontend(v3);
  }
  if (!mapped) return null;
  if (mapped.type === "variable") {
    mapped = await attachVariations(mapped);
  }
  return mapped;
}

/** Fetch a variable product's variations and derive its price range. Degrades to the bare product on failure. */
async function attachVariations(product: FrontendProduct): Promise<FrontendProduct> {
  try {
    const raw = await fetchVariationsViaWooRestV3(product.id);
    const variations = raw.map(mapWCVariationToFrontend).filter((v) => v.id);
    if (!variations.length) return product;
    const prices = variations
      .map((v) => v.salePrice ?? v.price)
      .filter((n) => Number.isFinite(n) && n > 0);
    const priceRange = prices.length
      ? { min: Math.min(...prices), max: Math.max(...prices) }
      : null;
    return {
      ...product,
      variations,
      priceRange,
      price: priceRange ? priceRange.min : product.price,
    };
  } catch (e) {
    console.error(`[WooCommerce] variations fetch failed for ${product.id}:`, e);
    return product;
  }
}

export async function fetchCategories() {
  return wcAPI.getCategories();
}

export async function fetchCart(): Promise<FrontendCart | null> {
  try {
    const cart = (await wcAPI.getCart()) as WCStoreCart;
    return mapWCCartToFrontend(cart);
  } catch (error) {
    console.error("Failed to fetch cart:", error);
    return null;
  }
}

export async function addProductToCart(productId: number, quantity: number = 1) {
  try {
    return await wcAPI.addToCart(productId, quantity);
  } catch (error) {
    console.error(`Failed to add product ${productId} to cart:`, error);
    throw error;
  }
}

export async function updateCartItemQuantity(key: string, quantity: number) {
  try {
    return await wcAPI.updateCartItem(key, quantity);
  } catch (error) {
    console.error(`Failed to update cart item ${key}:`, error);
    throw error;
  }
}

export async function removeCartItem(key: string) {
  try {
    return await wcAPI.removeFromCart(key);
  } catch (error) {
    console.error(`Failed to remove cart item ${key}:`, error);
    throw error;
  }
}

export async function clearUserCart() {
  try {
    return await wcAPI.clearCart();
  } catch (error) {
    console.error("Failed to clear cart:", error);
    throw error;
  }
}

export async function fetchCheckout() {
  try {
    return await wcAPI.getCheckout();
  } catch (error) {
    console.error("Failed to fetch checkout:", error);
    return null;
  }
}

export async function submitCheckout(data: Record<string, any>) {
  try {
    return await wcAPI.submitCheckout(data);
  } catch (error) {
    console.error("Failed to submit checkout:", error);
    throw error;
  }
}
