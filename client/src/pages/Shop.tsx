import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useCart, Product } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { ShoppingBag, Loader2, Download } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

type ApiProduct = {
  id: string;
  name: string;
  nameLv: string | null;
  nameRu: string | null;
  nameEn: string | null;
  description: string | null;
  descriptionLv: string | null;
  descriptionRu: string | null;
  descriptionEn: string | null;
  price: string;
  discountPrice: string | null;
  imageUrl: string | null;
  isDigital: boolean | null;
  stock: number | null;
};

export default function Shop() {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();

  const { data: apiProducts = [], isLoading } = useQuery<ApiProduct[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    },
  });

  const getProductName = (product: ApiProduct) => {
    if (language === "lv" && product.nameLv) return product.nameLv;
    if (language === "ru" && product.nameRu) return product.nameRu;
    if (language === "en" && product.nameEn) return product.nameEn;
    return product.name;
  };

  const getProductDescription = (product: ApiProduct) => {
    if (language === "lv" && product.descriptionLv) return product.descriptionLv;
    if (language === "ru" && product.descriptionRu) return product.descriptionRu;
    if (language === "en" && product.descriptionEn) return product.descriptionEn;
    return product.description || "";
  };

  const handleAddToCart = (apiProduct: ApiProduct) => {
    const product: Product = {
      id: apiProduct.id,
      name: getProductName(apiProduct),
      nameLv: apiProduct.nameLv,
      nameRu: apiProduct.nameRu,
      nameEn: apiProduct.nameEn,
      description: apiProduct.description,
      descriptionLv: apiProduct.descriptionLv,
      descriptionRu: apiProduct.descriptionRu,
      descriptionEn: apiProduct.descriptionEn,
      price: parseFloat(apiProduct.price),
      discountPrice: apiProduct.discountPrice ? parseFloat(apiProduct.discountPrice) : null,
      image: apiProduct.imageUrl,
      isDigital: apiProduct.isDigital,
    };
    addToCart(product);
  };

  return (
    <div className="bg-[#222222] min-h-screen text-white font-sans selection:bg-[#8C080C] selection:text-white">
      <Navigation />

      <div className="pt-32 pb-12 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">{t("shop.title")}</h1>
          <div className="w-20 h-[1px] bg-[#C0A07B] mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {t("shop.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {isLoading ? (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="w-8 h-8 animate-spin text-[#C0A07B]" />
          </div>
        ) : apiProducts.length === 0 ? (
          <div className="text-center py-24 text-gray-500">
            <p className="text-lg">{t("shop.empty") || "No products available"}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {apiProducts.map((product, i) => {
              const hasDiscount = product.discountPrice && parseFloat(product.discountPrice) < parseFloat(product.price);
              const displayPrice = hasDiscount ? parseFloat(product.discountPrice!) : parseFloat(product.price);
              const originalPrice = parseFloat(product.price);

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-[#1a1a1a] border border-white/5 overflow-hidden flex flex-col"
                  data-testid={`card-product-${product.id}`}
                >
                  <div className="relative aspect-video overflow-hidden bg-black/20">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={getProductName(product)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#2a2a2a]">
                        <ShoppingBag className="w-16 h-16 text-gray-600" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                      {hasDiscount && (
                        <span className="bg-[#C0A07B] text-black text-xs px-2 py-1 font-medium tracking-widest line-through">
                          €{originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="bg-[#8C080C] text-white text-xs px-2 py-1 font-medium tracking-widest">
                        €{displayPrice.toFixed(2)}
                      </span>
                    </div>
                    {product.isDigital && (
                      <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 font-medium tracking-widest flex items-center gap-1">
                        <Download size={12} /> Digital
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-serif mb-2 group-hover:text-[#C0A07B] transition-colors">
                      {getProductName(product)}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6 flex-grow font-light line-clamp-3">
                      {getProductDescription(product)}
                    </p>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-white/5 hover:bg-[#C0A07B] hover:text-[#222222] text-white border border-white/10 py-3 text-xs tracking-widest transition-all uppercase flex items-center justify-center gap-2"
                      data-testid={`button-add-to-cart-${product.id}`}
                    >
                      <ShoppingBag size={14} />
                      {t("shop.add")}
                    </button>
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
