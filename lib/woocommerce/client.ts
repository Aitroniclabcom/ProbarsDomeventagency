import { getWooCommerceBaseUrl } from "./config";

export class WooCommerceStoreAPI {
  private baseUrl: string;

  constructor() {
    const root = getWooCommerceBaseUrl();
    this.baseUrl = `${root}/wp-json/wc/store/v1`;
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    });
    if (options?.headers) {
      new Headers(options.headers).forEach((value, key) => headers.set(key, value));
    }

    const response = await fetch(url, {
      ...options,
      headers,
      credentials: "omit",
      cache: "no-store",
    });

    const body = (await response.text()).replace(/^\uFEFF/, "").trim();

    if (!response.ok) {
      const preview = body.slice(0, 400).replace(/\s+/g, " ");
      const hint =
        body.startsWith("<") || body.startsWith("<!")
          ? " (response is HTML — wrong WOOCOMMERCE_URL or REST blocked?)"
          : "";
      throw new Error(`WooCommerce HTTP ${response.status}${hint}: ${preview || "(empty)"}`);
    }

    if (!body) {
      throw new Error(`WooCommerce empty response (HTTP ${response.status}) from ${url}`);
    }

    if (body.startsWith("<") || body.startsWith("<!")) {
      throw new Error(
        `WooCommerce returned HTML instead of JSON (requested ${url}). Set WOOCOMMERCE_URL / NEXT_PUBLIC_WOOCOMMERCE_URL to the WordPress site that hosts the shop — the URL whose /wp-json/wc/store/v1/products opens as JSON in a browser — not the Next.js marketing domain unless WordPress runs there.`
      );
    }

    try {
      return JSON.parse(body) as T;
    } catch (e) {
      const msg = e instanceof Error ? e.message : "parse error";
      throw new Error(`WooCommerce invalid JSON from ${url} (HTTP ${response.status}): ${msg}`);
    }
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
