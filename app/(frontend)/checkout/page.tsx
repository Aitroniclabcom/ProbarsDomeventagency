"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { Loader2, CheckCircle, ShoppingBag, ArrowLeft } from "lucide-react";

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address_1: string;
  city: string;
  country: string;
};

const EMPTY_FORM: FormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  address_1: "",
  city: "",
  country: "LV",
};

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const { t, language } = useLanguage();
  const router = useRouter();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<number | null>(null);

  function getItemName(item: typeof items[0]) {
    if (language === "lv" && item.nameLv) return item.nameLv;
    if (language === "ru" && item.nameRu) return item.nameRu;
    if (language === "en" && item.nameEn) return item.nameEn;
    return item.name;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!items.length) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          billing: form,
          lineItems: items.map((item) => ({
            id: Number(item.id),
            quantity: item.quantity,
          })),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to place order");
      }

      const order = await res.json();
      setOrderId(order.id);
      clearCart();
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function field(
    key: keyof FormData,
    label: string,
    type = "text",
    required = true
  ) {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-xs tracking-widest uppercase text-gray-400">
          {label} {required && <span className="text-[#8C080C]">*</span>}
        </label>
        <input
          type={type}
          required={required}
          value={form[key]}
          onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
          className="bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C0A07B] transition-colors placeholder-gray-700"
        />
      </div>
    );
  }

  // ── Success state ──────────────────────────────────────────────────────────
  if (orderId) {
    return (
      <div className="bg-[#222222] min-h-screen max-w-full overflow-x-hidden text-white font-sans">
        <Navigation />
        <div className="container mx-auto px-6 pt-40 pb-24 flex flex-col items-center text-center max-w-lg">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
            <CheckCircle className="w-20 h-20 text-[#C0A07B] mb-6" />
          </motion.div>
          <h1 className="text-3xl font-serif mb-4">{t("checkout.success.title") || "Order placed!"}</h1>
          <p className="text-gray-400 mb-2">
            {t("checkout.success.body") || "Thank you for your order. We will contact you shortly."}
          </p>
          <p className="text-[#C0A07B] text-sm mb-10">
            {t("checkout.success.order") || "Order"} #{orderId}
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-[#8C080C] hover:bg-[#a0090e] text-white px-8 py-3 text-xs tracking-widest uppercase transition-colors"
          >
            {t("checkout.success.back") || "Back to Home"}
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // ── Empty cart redirect ────────────────────────────────────────────────────
  if (!items.length) {
    return (
      <div className="bg-[#222222] min-h-screen max-w-full overflow-x-hidden text-white font-sans">
        <Navigation />
        <div className="container mx-auto px-6 pt-40 pb-24 flex flex-col items-center text-center max-w-lg">
          <ShoppingBag className="w-16 h-16 text-gray-600 mb-6" />
          <p className="text-gray-400 mb-8">{t("shop.cart.empty")}</p>
          <button
            onClick={() => router.push("/shop")}
            className="flex items-center gap-2 border border-white/20 hover:border-[#C0A07B] text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors"
          >
            <ArrowLeft size={14} /> {t("shop.title")}
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#222222] min-h-screen max-w-full overflow-x-hidden text-white font-sans">
      <Navigation />

      <div className="pt-32 pb-12 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            {t("checkout.title") || "Checkout"}
          </h1>
          <div className="w-20 h-[1px] bg-[#C0A07B] mx-auto" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Billing form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <h2 className="text-xl font-serif mb-2 text-[#C0A07B]">
              {t("checkout.billing") || "Billing details"}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {field("first_name", t("checkout.firstName") || "First name")}
              {field("last_name", t("checkout.lastName") || "Last name")}
            </div>
            {field("email", t("checkout.email") || "Email", "email")}
            {field("phone", t("checkout.phone") || "Phone", "tel")}
            {field("address_1", t("checkout.address") || "Address")}
            <div className="grid grid-cols-2 gap-4">
              {field("city", t("checkout.city") || "City")}
              <div className="flex flex-col gap-1">
                <label className="text-xs tracking-widest uppercase text-gray-400">
                  {t("checkout.country") || "Country"}{" "}
                  <span className="text-[#8C080C]">*</span>
                </label>
                <select
                  required
                  value={form.country}
                  onChange={(e) => setForm((prev) => ({ ...prev, country: e.target.value }))}
                  className="bg-white/5 border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C0A07B] transition-colors"
                >
                  <option value="LV">Latvia</option>
                  <option value="LT">Lithuania</option>
                  <option value="EE">Estonia</option>
                  <option value="DE">Germany</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {error && (
              <p className="text-[#8C080C] text-sm border border-[#8C080C]/30 bg-[#8C080C]/10 px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-[#8C080C] hover:bg-[#a0090e] text-white py-4 text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <><Loader2 size={16} className="animate-spin" /> {t("checkout.processing") || "Processing…"}</>
              ) : (
                t("checkout.placeOrder") || "Place Order"
              )}
            </button>
          </form>

          {/* Order summary */}
          <div>
            <h2 className="text-xl font-serif mb-6 text-[#C0A07B]">
              {t("checkout.summary") || "Order summary"}
            </h2>
            <div className="bg-[#1a1a1a] border border-white/5 divide-y divide-white/5">
              {items.map((item) => {
                const price = (item.discountPrice ?? item.price) * item.quantity;
                return (
                  <div key={item.id} className="flex gap-4 p-4 items-center">
                    <div className="w-16 h-16 bg-black/20 overflow-hidden shrink-0">
                      {item.image ? (
                        <img src={item.image} alt={getItemName(item)} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ShoppingBag className="w-6 h-6 text-gray-700" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{getItemName(item)}</p>
                      <p className="text-xs text-gray-500 mt-0.5">x{item.quantity}</p>
                    </div>
                    <p className="text-[#C0A07B] text-sm shrink-0">€{price.toFixed(2)}</p>
                  </div>
                );
              })}
              <div className="px-4 py-5 flex justify-between items-center">
                <span className="text-gray-400 tracking-wider text-sm">
                  {t("shop.cart.total")}
                </span>
                <span className="text-xl font-serif text-[#C0A07B]">€{total.toFixed(2)}</span>
              </div>
            </div>

            <p className="text-xs text-gray-600 mt-4 leading-relaxed">
              {t("checkout.note") ||
                "After placing your order, we will send a payment confirmation to your email with bank transfer details."}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
