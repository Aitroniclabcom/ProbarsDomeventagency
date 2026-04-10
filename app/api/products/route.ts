import { NextRequest, NextResponse } from "next/server";
import { fetchProducts } from "@/lib/woocommerce/store-api";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") ?? undefined;
    const per_page = Number(searchParams.get("per_page") ?? 20);
    const page = Number(searchParams.get("page") ?? 1);

    // `locale` query is ignored: WooCommerce has a single default catalog language.
    const products = await fetchProducts({ per_page, page, search });
    return NextResponse.json(products);
  } catch (error: any) {
    console.error("[WooCommerce] GET /api/products:", error.message);
    return NextResponse.json({ error: error.message ?? "Failed to fetch products" }, { status: 500 });
  }
}
