import { NextRequest, NextResponse } from "next/server";
import { fetchProductBySlug } from "@/lib/woocommerce/store-api";
import type { Locale } from "@/context/LanguageContext";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const locale = (_req.nextUrl.searchParams.get("locale") ?? "en") as Locale;
    const product = await fetchProductBySlug(id, locale);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (error: any) {
    console.error("[WooCommerce] GET /api/products/[id]:", error.message);
    return NextResponse.json({ error: error.message ?? "Failed to fetch product" }, { status: 500 });
  }
}
