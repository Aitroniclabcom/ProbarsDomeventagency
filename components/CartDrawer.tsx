"use client";
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart, getLineId } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, total, isCartOpen, setIsCartOpen } = useCart();
  const { language, t } = useLanguage();
  const router = useRouter();

  // Mirror checkout: flat courier fee for physical carts, digital-only ships free.
  const DELIVERY_FEE = 6;
  const needsDelivery = items.some((i) => !i.isDigital);
  const deliveryFee = needsDelivery ? DELIVERY_FEE : 0;
  const grandTotal = total + deliveryFee;

  const getItemName = (item: typeof items[0]) => {
    if (language === "lv" && item.nameLv) return item.nameLv;
    if (language === "ru" && item.nameRu) return item.nameRu;
    if (language === "en" && item.nameEn) return item.nameEn;
    return item.name;
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-md bg-[#1a1a1a] border-l border-white/10 shadow-2xl flex flex-col h-full"
      >
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#222222]">
          <h2 className="text-xl font-serif text-white flex items-center gap-3">
            <ShoppingBag className="text-[#C0A07B]" />
            {t("shop.cart.title")}
          </h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white transition-colors" data-testid="button-close-cart">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center text-gray-400 py-12 flex flex-col items-center gap-4">
              <ShoppingBag size={48} className="opacity-20" />
              <p>{t("shop.cart.empty")}</p>
            </div>
          ) : (
            items.map((item) => {
              const displayPrice = item.discountPrice ?? item.price;
              const hasDiscount = item.discountPrice && item.discountPrice < item.price;
              const lineId = getLineId(item);
              return (
                <div key={lineId} className="flex gap-4 bg-[#222222] p-4 border border-white/5" data-testid={`cart-item-${lineId}`}>
                  <div className="w-20 h-20 bg-black/20 overflow-hidden flex items-center justify-center">
                    {item.image ? (
                      <img src={item.image} alt={getItemName(item)} className="w-full h-full object-cover" />
                    ) : (
                      <ShoppingBag className="w-8 h-8 text-gray-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <h3 className="text-white font-medium mb-1 flex-1">{getItemName(item)}</h3>
                      {item.isDigital && <span className="text-blue-400 text-xs flex items-center gap-1"><Download size={10} /></span>}
                    </div>
                    {item.variationLabel && (
                      <p className="text-gray-400 text-xs tracking-wide mb-1">{item.variationLabel}</p>
                    )}
                    <div className="flex items-center gap-2 mb-3">
                      <p className="text-[#C0A07B]">€{displayPrice.toFixed(2)}</p>
                      {hasDiscount && <p className="text-gray-500 text-sm line-through">€{item.price.toFixed(2)}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 border border-white/10 px-2 py-1 bg-black/20">
                        <button onClick={() => updateQuantity(lineId, item.quantity - 1)} className="text-gray-400 hover:text-white" data-testid={`button-decrease-${lineId}`}><Minus size={14} /></button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(lineId, item.quantity + 1)} className="text-gray-400 hover:text-white" data-testid={`button-increase-${lineId}`}><Plus size={14} /></button>
                      </div>
                      <button onClick={() => removeFromCart(lineId)} className="text-gray-500 hover:text-[#8C080C] transition-colors" data-testid={`button-remove-${lineId}`}><Trash2 size={16} /></button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-[#222222] border-t border-white/10 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">{t("checkout.subtotal") || "Subtotal"}</span>
              <span className="text-gray-300">€{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">
                {t("checkout.delivery") || "Delivery"}
                {needsDelivery ? ` · ${t("checkout.courier") || "Courier"}` : ""}
              </span>
              <span className="text-gray-300">
                {needsDelivery ? `€${deliveryFee.toFixed(2)}` : t("checkout.deliveryFree") || "—"}
              </span>
            </div>
            <div className="flex justify-between items-center text-lg font-medium pt-1">
              <span className="text-gray-400">{t("shop.cart.total")}</span>
              <span className="text-[#C0A07B]">€{grandTotal.toFixed(2)}</span>
            </div>
            <Button
              onClick={() => { setIsCartOpen(false); router.push("/checkout"); }}
              className="w-full bg-[#8C080C] hover:bg-[#a0090e] text-white py-6 rounded-none tracking-widest text-sm font-medium border border-[#8C080C] flex items-center justify-center gap-2"
              data-testid="button-checkout"
            >
              {t("shop.cart.checkout")} <ArrowRight size={16} />
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
