"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { useCart, Product } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { ShoppingBag, Loader2, Search, Tag } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { FrontendProduct } from "@/lib/woocommerce/mappers";

export default function ShopPage() {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const { data: products = [], isLoading, isError } = useQuery<FrontendProduct[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    },
    staleTime: 60_000,
  });

  // Derive unique categories from the full product list
  const allCategories = Array.from(
    new Map(
      products.flatMap((p) => p.categoryIds.map((id, idx) => ({ id: String(id), slug: p.categorySlugs?.[idx] || "", name: p.categoryNames[idx] || `Category ${id}` })))
        .map((c) => [c.id, c])
    ).values()
  );

  // Translate a category by slug, falling back to the WooCommerce name.
  const catLabel = (slug: string, fallback: string) => {
    const key = `shop.categories.${slug}`;
    const tr = t(key);
    return tr === key ? fallback : tr;
  };

  const filtered = products
    .filter((p) => {
      const name = p.name.toLowerCase();
      const matchSearch = !search || name.includes(search.toLowerCase());
      const matchCat = !activeCategory || p.categoryIds.includes(Number(activeCategory));
      return matchSearch && matchCat;
    })
    .sort((a, b) => a.price - b.price); // default: cheapest first (few products, no sort UI needed)

  function handleAddToCart(p: FrontendProduct) {
    const product: Product = {
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
    addToCart(product);
  }

  return (
    <div className="bg-[#222222] min-h-screen max-w-full overflow-x-hidden text-white font-sans selection:bg-[#8C080C] selection:text-white">
      <Navigation />
      <CartDrawer />

      {/* Header */}
      <div className="pt-32 pb-12 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">{t("shop.title")}</h1>
          <div className="w-20 h-[1px] bg-[#C0A07B] mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">{t("shop.subtitle")}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-[#1a1a1a] border-b border-white/5 sticky top-[72px] z-10">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("shop.search") || "Search…"}
              className="w-full bg-white/5 border border-white/10 text-white text-sm pl-9 pr-4 py-2 placeholder-gray-600 focus:outline-none focus:border-[#C0A07B] transition-colors"
            />
          </div>

          {/* Category pills */}
          {allCategories.length > 0 && (
            <div className="flex gap-2 flex-wrap items-center">
              <Tag size={13} className="text-gray-500" />
              <button
                onClick={() => setActiveCategory(null)}
                className={`text-xs px-3 py-1 border transition-colors tracking-wider uppercase ${
                  activeCategory === null
                    ? "border-[#C0A07B] text-[#C0A07B]"
                    : "border-white/10 text-gray-500 hover:border-white/30"
                }`}
              >
                {t("shop.all") || "All"}
              </button>
              {allCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(String(cat.id))}
                  className={`text-xs px-3 py-1 border transition-colors tracking-wider uppercase ${
                    activeCategory === String(cat.id)
                      ? "border-[#C0A07B] text-[#C0A07B]"
                      : "border-white/10 text-gray-500 hover:border-white/30"
                  }`}
                >
                  {catLabel(cat.slug, cat.name)}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product grid */}
      <div className="container mx-auto px-6 py-16">
        {isLoading ? (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="w-8 h-8 animate-spin text-[#C0A07B]" />
          </div>
        ) : isError ? (
          <div className="text-center py-24 text-gray-500">
            <p className="text-lg">Could not connect to the shop. Please try again later.</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-500">
            <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" />
            <p className="text-lg">{t("shop.empty") || "No products found"}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filtered.map((product, i) => {
              const outOfStock = product.stockStatus === "outofstock";
              const isOnSale = product.isOnSale && product.salePrice !== null;
              const displayPrice = isOnSale ? product.salePrice! : product.price;
              const isVariable = product.type === "variable";
              const loc = (base: string, key: string) =>
                language !== "lv" && product.meta?.[`${key}_${language}`]
                  ? product.meta[`${key}_${language}`]
                  : base;
              const displayName = loc(product.name, "name");
              const displayShort = loc(product.shortDescription, "short_description");

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-[#1a1a1a] border border-white/5 overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <Link
                    href={`/shop/${product.slug || product.id}`}
                    className="block relative aspect-square overflow-hidden bg-black/20"
                  >
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={displayName}
                        className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#2a2a2a]">
                        <ShoppingBag className="w-16 h-16 text-gray-700" />
                      </div>
                    )}

                    {/* Price badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                      {isOnSale && (
                        <span className="bg-white/10 text-gray-400 text-xs px-2 py-1 font-medium tracking-widest line-through">
                          €{product.regularPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="bg-[#8C080C] text-white text-xs px-2 py-1 font-medium tracking-widest">
                        {isVariable ? `${t("shop.from") || "No"} ` : ""}€{displayPrice.toFixed(2)}
                      </span>
                    </div>

                    {outOfStock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-xs tracking-widest uppercase text-gray-300 border border-gray-600 px-3 py-1">
                          {t("shop.outOfStock") || "Out of Stock"}
                        </span>
                      </div>
                    )}
                  </Link>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    {product.categoryNames.length > 0 && (
                      <p className="text-[10px] tracking-widest uppercase text-[#C0A07B] mb-1">
                        {product.categoryNames[0]}
                      </p>
                    )}
                    <h3 className="text-lg font-serif mb-2 group-hover:text-[#C0A07B] transition-colors">
                      <Link
                        href={`/shop/${product.slug || product.id}`}
                        className="hover:text-[#C0A07B] transition-colors"
                      >
                        {displayName}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 mb-6 font-light clamp-3">
                      {(displayShort || product.description || "")
                        .replace(/<[^>]+>/g, " ")
                        .replace(/\s+/g, " ")
                        .trim()}
                    </p>
                    {isVariable ? (
                      <Link
                        href={`/shop/${product.slug || product.id}`}
                        className="mt-auto w-full bg-white/5 hover:bg-[#C0A07B] hover:text-[#222222] text-white border border-white/10 py-3 text-xs tracking-widest transition-all uppercase flex items-center justify-center gap-2"
                      >
                        <ShoppingBag size={14} /> {t("shop.selectOption") || "Izvēlēties"}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={outOfStock}
                        className="mt-auto w-full bg-white/5 hover:bg-[#C0A07B] hover:text-[#222222] text-white border border-white/10 py-3 text-xs tracking-widest transition-all uppercase flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <ShoppingBag size={14} /> {t("shop.add")}
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
