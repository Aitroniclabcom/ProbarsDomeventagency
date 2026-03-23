import { wcAPI } from "./client";
import { mapWCProductToFrontend, mapWCCartToFrontend, type FrontendProduct, type FrontendCart } from "./mappers";
import type { Locale } from "@/context/LanguageContext";

export async function fetchProducts(locale: Locale = "en", params?: { per_page?: number; page?: number; search?: string }) {
  const response = await wcAPI.getProducts(params);
  const products = Array.isArray(response) ? response : response.products || [];
  return products.map((p: any) => mapWCProductToFrontend(p, locale));
}

export async function fetchProductBySlug(slug: string, locale: Locale = "en"): Promise<FrontendProduct | null> {
  try {
    const product = await wcAPI.getProduct(slug);
    return mapWCProductToFrontend(product, locale);
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
    const cart = await wcAPI.getCart();
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
