"use client";

import { useEffect, useState } from "react";
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
  const { t, language } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariationId, setSelectedVariationId] = useState<string | null>(null);

  const { data: product, isLoading, isError } = useQuery<FrontendProduct | null>({
    queryKey: ["product", slug],
    queryFn: async () => {
      if (!slug) return null;
      const res = await fetch(`/api/products/${encodeURIComponent(slug)}`);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch product");
      return res.json();
    },
    enabled: Boolean(slug),
    staleTime: 60_000,
  });

  const isVariable = product?.type === "variable";
  const selectedVariation =
    isVariable && product
      ? product.variations.find((v) => v.id === selectedVariationId) ?? null
      : null;

  function buildCartProduct(p: FrontendProduct): Product {
    const v = selectedVariation;
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
      price: v ? v.price : p.price,
      discountPrice: v ? v.salePrice : p.salePrice,
      image: v?.image ?? p.image,
      isDigital: false,
      variationId: v ? v.id : null,
      variationLabel: v ? v.label : null,
    };
  }

  function handleAddToCart(p: FrontendProduct) {
    if (isVariable && !selectedVariation) return;
    const cartProduct = buildCartProduct(p);
    for (let i = 0; i < quantity; i++) {
      addToCart(cartProduct);
    }
  }

  const variationOutOfStock = selectedVariation?.stockStatus === "outofstock";
  const outOfStock = product?.stockStatus === "outofstock" || variationOutOfStock;
  const needsVariation = Boolean(isVariable && !selectedVariation);

  const isOnSale = selectedVariation
    ? selectedVariation.salePrice !== null
    : product
      ? product.isOnSale && product.salePrice !== null
      : false;
  const baseRegularPrice = selectedVariation ? selectedVariation.regularPrice : product?.regularPrice ?? 0;
  const displayPrice = selectedVariation
    ? selectedVariation.salePrice ?? selectedVariation.price
    : isOnSale
      ? product!.salePrice!
      : product?.price ?? 0;

  const gallery = product?.gallery?.length
    ? product.gallery
    : product?.image
      ? [product.image]
      : [];
  const mainImage = selectedVariation?.image ?? gallery[selectedImage] ?? product?.image ?? null;

  // Localized name/descriptions: WooCommerce holds the LV defaults; EN/RU come from
  // ACF meta (name_en, short_description_ru, …), falling back to the default when empty.
  const pickLocalized = (base: string, key: string) =>
    language !== "lv" && product?.meta?.[`${key}_${language}`]
      ? product.meta[`${key}_${language}`]
      : base;
  const displayName = product ? pickLocalized(product.name, "name") : "";
  const displayShort = product ? pickLocalized(product.shortDescription, "short_description") : "";
  const displayDesc = product ? pickLocalized(product.description, "description") : "";
  const catLabel = (slug: string, fallback: string) => {
    const key = `shop.categories.${slug}`;
    const tr = t(key);
    return tr === key ? fallback : tr;
  };

  useEffect(() => {
    setSelectedImage(0);
    setSelectedVariationId(null);
  }, [product?.id]);

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
            {t("shop.backToShop") || "Back to shop"}
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
            className="grid md:grid-cols-[1.15fr_1fr] gap-8 lg:gap-14 max-w-7xl mx-auto"
          >
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square overflow-hidden bg-black/20 border border-white/5">
                {mainImage ? (
                  <img
                    src={mainImage}
                    alt={product.name}
                    className="w-full h-full object-contain p-3"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#2a2a2a]">
                    <ShoppingBag className="w-24 h-24 text-gray-700" />
                  </div>
                )}

                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                  {isOnSale && (
                    <span className="bg-white/10 text-gray-400 text-xs px-2 py-1 font-medium tracking-widest line-through">
                      €{baseRegularPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="bg-[#8C080C] text-white text-xs px-2 py-1 font-medium tracking-widest">
                    {needsVariation ? `${t("shop.from") || "No"} ` : ""}€{displayPrice.toFixed(2)}
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

              {gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {gallery.map((src, i) => (
                    <button
                      key={`${src}-${i}`}
                      type="button"
                      aria-label={`${product.name} – image ${i + 1}`}
                      onClick={() => setSelectedImage(i)}
                      className={`relative w-20 h-20 flex-shrink-0 overflow-hidden border bg-black/20 transition-colors ${
                        selectedImage === i ? "border-[#C0A07B]" : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <img src={src} alt="" className="w-full h-full object-contain p-1" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              {product.categoryNames.length > 0 && (
                <p className="text-[10px] tracking-widest uppercase text-[#C0A07B] mb-2">
                  {catLabel(product.categorySlugs?.[0] || "", product.categoryNames[0])}
                </p>
              )}
              <h1 className="text-3xl md:text-4xl font-serif mb-6 text-white">{displayName}</h1>
              <div
                className="product-description mb-8"
                dangerouslySetInnerHTML={{
                  __html: displayDesc || displayShort || "",
                }}
              />

              {isVariable && product.variations.length > 0 && (
                <div className="mb-8">
                  <span className="text-xs tracking-widest uppercase text-gray-500 block mb-3">
                    {product.variations[0]?.attributes &&
                      Object.keys(product.variations[0].attributes)[0]}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.variations.map((v) => {
                      const disabled = v.stockStatus === "outofstock";
                      const active = v.id === selectedVariationId;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          disabled={disabled}
                          aria-pressed={active}
                          onClick={() => setSelectedVariationId(v.id)}
                          className={`min-w-[64px] px-4 py-2 text-sm tracking-wide border transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                            active
                              ? "border-[#C0A07B] bg-[#C0A07B] text-[#222222]"
                              : "border-white/15 bg-white/5 text-white hover:border-[#C0A07B]/60"
                          }`}
                        >
                          {v.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs tracking-widest uppercase text-gray-500">{t("shop.qty") || "Qty"}</span>
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
                disabled={outOfStock || needsVariation}
                className="w-full md:w-auto min-w-[240px] bg-white/5 hover:bg-[#C0A07B] hover:text-[#222222] text-white border border-white/10 py-3 px-8 text-xs tracking-widest transition-all uppercase flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ShoppingBag size={14} />{" "}
                {needsVariation ? t("shop.selectOption") || "Izvēlieties opciju" : t("shop.add")}
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
