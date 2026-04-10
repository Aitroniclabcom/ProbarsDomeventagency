import { wcAPI } from "./client";
import {
  mapWCProductToFrontend,
  mapWCCartToFrontend,
  type FrontendProduct,
  type FrontendCart,
  type WCStoreProduct,
  type WCStoreCart,
} from "./mappers";

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
  const response = await wcAPI.getProducts(params);
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
  try {
    const product = (await wcAPI.getProduct(slug)) as WCStoreProduct;
    return mapWCProductToFrontend(product);
  } catch (error) {
    console.error(`Failed to fetch product ${slug}:`, error);
    return null;
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
