const WC_URL = (process.env.NEXT_PUBLIC_WOOCOMMERCE_URL || process.env.WOOCOMMERCE_URL)?.replace(/\/$/, "");

if (!WC_URL) {
  throw new Error("NEXT_PUBLIC_WOOCOMMERCE_URL or WOOCOMMERCE_URL environment variable is not set");
}

export class WooCommerceStoreAPI {
  private baseUrl: string;

  constructor() {
    this.baseUrl = `${WC_URL}/wp-json/wc/store/v1`;
  }

  private async fetch<T>(
    endpoint: string,
    options?: RequestInit & { headers?: Record<string, string> }
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...options?.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
      credentials: "include", // Include cookies for cart/session
      next: { revalidate: 60 },
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
