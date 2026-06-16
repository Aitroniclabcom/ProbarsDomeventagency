"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

type OrderStatus = {
  orderId: number;
  total: string;
  currency: string;
  status: string;
  isPaid: boolean;
};

function ThankYouContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { clearCart } = useCart();
  const { t } = useLanguage();
  const [state, setState] = useState<"loading" | "paid" | "pending" | "error">("loading");
  const [order, setOrder] = useState<OrderStatus | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const orderId = searchParams.get("order_id");
  const key = searchParams.get("key");

  useEffect(() => {
    if (!orderId || !key) {
      setState("error");
      setErrorMsg(t("checkout.thankYou.invalidLink"));
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        const params = new URLSearchParams({ order_id: orderId!, key: key! });
        const res = await fetch(`/api/checkout/order-status?${params}`);
        const data = await res.json();

        if (cancelled) return;

        if (!res.ok) {
          setState("error");
          setErrorMsg(data.error || t("checkout.thankYou.notFound"));
          return;
        }

        setOrder(data as OrderStatus);
        if (data.isPaid) {
          clearCart();
          setState("paid");
        } else {
          setState("pending");
        }
      } catch {
        if (!cancelled) {
          setState("error");
          setErrorMsg(t("checkout.thankYou.loadError"));
        }
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, [orderId, key, clearCart, t]);

  return (
    <div className="bg-[#222222] min-h-screen max-w-full overflow-x-hidden text-white font-sans">
      <Navigation />
      <CartDrawer />

      <div className="container mx-auto px-6 pt-40 pb-24 flex flex-col items-center text-center max-w-lg">
        {state === "loading" && (
          <>
            <Loader2 className="w-12 h-12 text-[#C0A07B] animate-spin mb-6" />
            <p className="text-gray-400">{t("checkout.thankYou.verifying")}</p>
          </>
        )}

        {state === "paid" && order && (
          <>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
              <CheckCircle className="w-20 h-20 text-[#C0A07B] mb-6" />
            </motion.div>
            <h1 className="text-3xl font-serif mb-4">{t("checkout.successCard.title")}</h1>
            <p className="text-[#C0A07B] text-lg mb-6">
              {t("checkout.successCard.order")} #{order.orderId}
            </p>
            <p className="text-gray-400 text-sm mb-10">{t("checkout.successCard.body")}</p>
            <p className="text-sm text-gray-500 mb-10">
              <span className="text-gray-500">{t("checkout.amount")}: </span>
              <span className="text-[#C0A07B]">€{order.total}</span>
            </p>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="bg-[#8C080C] hover:bg-[#a0090e] text-white px-8 py-3 text-xs tracking-widest uppercase transition-colors"
            >
              {t("checkout.successCard.back")}
            </button>
          </>
        )}

        {state === "pending" && order && (
          <>
            <AlertCircle className="w-16 h-16 text-[#C0A07B] mb-6" />
            <h1 className="text-2xl font-serif mb-4">{t("checkout.thankYou.pendingTitle")}</h1>
            <p className="text-gray-400 text-sm mb-6">{t("checkout.thankYou.pendingBody")}</p>
            <p className="text-[#C0A07B] mb-8">
              {t("checkout.successCard.order")} #{order.orderId}
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="border border-white/20 hover:border-[#C0A07B] text-white px-6 py-3 text-xs tracking-widest uppercase transition-colors"
            >
              {t("checkout.thankYou.refresh")}
            </button>
          </>
        )}

        {state === "error" && (
          <>
            <AlertCircle className="w-16 h-16 text-[#8C080C] mb-6" />
            <h1 className="text-2xl font-serif mb-4">{t("checkout.thankYou.errorTitle")}</h1>
            <p className="text-gray-400 text-sm mb-8">{errorMsg}</p>
            <button
              type="button"
              onClick={() => router.push("/shop")}
              className="bg-[#8C080C] hover:bg-[#a0090e] text-white px-8 py-3 text-xs tracking-widest uppercase transition-colors"
            >
              {t("shop.title")}
            </button>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-[#222222] min-h-screen flex items-center justify-center text-[#C0A07B]">
          <Loader2 className="w-10 h-10 animate-spin" />
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
