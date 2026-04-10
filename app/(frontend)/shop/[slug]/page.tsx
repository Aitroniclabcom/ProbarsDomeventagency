"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { useCart, Product } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { ShoppingBag, Loader2, Minus, Plus } from "lucide-react";
import type { FrontendProduct } from "@/lib/woocommerce/mappers";

export default function ShopProductPage() {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = typeof slugParam === "string" ? slugParam : Array.isArray(slugParam) ? slugParam[0] : "";

  const { addToCart } = useCart();
  const { language, t } = useLanguage();
  const [quantity, setQuantity] = useState(1);

  const { data: product, isLoading, isError } = useQuery<FrontendProduct | null>({
    queryKey: ["product", slug, language],
    queryFn: async () => {
      if (!slug) return null;
      const res = await fetch(`/api/products/${encodeURIComponent(slug)}?locale=${language}`);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch product");
      return res.json();
    },
    enabled: Boolean(slug),
    staleTime: 60_000,
  });

  function buildCartProduct(p: FrontendProduct): Product {
    return {
      id: p.id,
      name: p.name,
      nameLv: null,
      nameRu: null,
      nameEn: null,
      description: p.description,
      descriptionLv: null,
      descriptionRu: null,
      descriptionEn: null,
      price: p.price,
      discountPrice: p.salePrice,
      image: p.image,
      isDigital: false,
    };
  }

  function handleAddToCart(p: FrontendProduct) {
    const cartProduct = buildCartProduct(p);
    for (let i = 0; i < quantity; i++) {
      addToCart(cartProduct);
    }
  }

  const outOfStock = product?.stockStatus === "outofstock";
  const isOnSale = product ? product.isOnSale && product.salePrice !== null : false;
  const displayPrice = product && isOnSale ? product.salePrice! : product?.price ?? 0;

  return (
    <div className="bg-[#222222] min-h-screen max-w-full overflow-x-hidden text-white font-sans selection:bg-[#8C080C] selection:text-white">
      <Navigation />
      <CartDrawer />

      <div className="pt-28 pb-8 bg-[#1a1a1a] border-b border-white/5">
        <div className="container mx-auto px-6">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gray-400 hover:text-[#C0A07B] transition-colors border border-white/10 px-4 py-2 hover:border-[#C0A07B]/50"
          >
            Back to shop
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {!slug ? (
          <div className="text-center py-24 text-gray-500">
            <p className="text-lg">{t("blog.notFound")}</p>
          </div>
        ) : isLoading ? (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="w-8 h-8 animate-spin text-[#C0A07B]" />
          </div>
        ) : isError ? (
          <div className="text-center py-24 text-gray-500">
            <p className="text-lg">Could not connect to the shop. Please try again later.</p>
          </div>
        ) : product == null ? (
          <div className="text-center py-24 text-gray-500">
            <p className="text-lg">{t("blog.notFound")}</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto"
          >
            <div className="relative aspect-video md:aspect-square overflow-hidden bg-black/20 border border-white/5">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#2a2a2a]">
                  <ShoppingBag className="w-24 h-24 text-gray-700" />
                </div>
              )}

              <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                {isOnSale && (
                  <span className="bg-white/10 text-gray-400 text-xs px-2 py-1 font-medium tracking-widest line-through">
                    €{product.regularPrice.toFixed(2)}
                  </span>
                )}
                <span className="bg-[#8C080C] text-white text-xs px-2 py-1 font-medium tracking-widest">
                  €{displayPrice.toFixed(2)}
                </span>
              </div>

              {outOfStock && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-xs tracking-widest uppercase text-gray-300 border border-gray-600 px-3 py-1">
                    {t("shop.outOfStock") || "Out of Stock"}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col">
              {product.categoryNames.length > 0 && (
                <p className="text-[10px] tracking-widest uppercase text-[#C0A07B] mb-2">
                  {product.categoryNames[0]}
                </p>
              )}
              <h1 className="text-3xl md:text-4xl font-serif mb-6 text-white">{product.name}</h1>
              <div
                className="text-sm text-gray-500 mb-8 font-light leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: product.description || product.shortDescription || "",
                }}
              />

              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs tracking-widest uppercase text-gray-500">Qty</span>
                <div className="flex items-center border border-white/10 bg-white/5">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 text-gray-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-sm tabular-nums">{quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleAddToCart(product)}
                disabled={outOfStock}
                className="w-full md:w-auto min-w-[240px] bg-white/5 hover:bg-[#C0A07B] hover:text-[#222222] text-white border border-white/10 py-3 px-8 text-xs tracking-widest transition-all uppercase flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ShoppingBag size={14} /> {t("shop.add")}
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
