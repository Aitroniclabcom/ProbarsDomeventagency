import { getWooCommerceBaseUrl } from "./config";

export class WooCommerceStoreAPI {
  private baseUrl: string;

  constructor() {
    const root = getWooCommerceBaseUrl();
    this.baseUrl = `${root}/wp-json/wc/store/v1`;
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = new Headers({ "Content-Type": "application/json" });
    if (options?.headers) {
      new Headers(options.headers).forEach((value, key) => headers.set(key, value));
    }

    const response = await fetch(url, {
      ...options,
      headers,
      // Server-side calls to another host: no cookies; avoid Next data cache stale/empty Woo responses
      credentials: "omit",
      cache: "no-store",
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`WooCommerce API error ${response.status}: ${error}`);
    }

    return response.json() as Promise<T>;
  }

  // Products
  async getProducts(params?: { per_page?: number; page?: number; search?: string }) {
    const searchParams = new URLSearchParams({
      per_page: String(params?.per_page ?? 20),
      page: String(params?.page ?? 1),
      ...(params?.search ? { search: params.search } : {}),
    });
    return this.fetch(`/products?${searchParams}`);
  }

  async getProduct(id: string) {
    return this.fetch(`/products/${id}`);
  }

  // Categories
  async getCategories() {
    return this.fetch("/products/categories");
  }

  // Cart
  async getCart() {
    return this.fetch("/cart");
  }

  async addToCart(productId: number, quantity: number) {
    return this.fetch("/cart/add-item", {
      method: "POST",
      body: JSON.stringify({ id: productId, quantity }),
    });
  }

  async updateCartItem(key: string, quantity: number) {
    return this.fetch(`/cart/update-item/${key}`, {
      method: "POST",
      body: JSON.stringify({ quantity }),
    });
  }

  async removeFromCart(key: string) {
    return this.fetch(`/cart/remove-item/${key}`, { method: "POST" });
  }

  async clearCart() {
    return this.fetch("/cart/items", { method: "DELETE" });
  }

  // Checkout
  async getCheckout() {
    return this.fetch("/checkout");
  }

  async submitCheckout(data: Record<string, any>) {
    return this.fetch("/checkout", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}

export const wcAPI = new WooCommerceStoreAPI();
