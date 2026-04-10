"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { usePayloadSettings } from "@/components/PayloadDataProvider";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { itemCount, setIsCartOpen } = useCart();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const pathname = usePathname();
  const payloadSettings = usePayloadSettings();
  const navLinks = payloadSettings?.header?.navLinks;

  const { data: publicSettings } = useQuery({
    queryKey: ["public-settings"],
    queryFn: async () => {
      const res = await fetch("/api/settings/public");
      if (!res.ok) return { blogInMenu: false };
      return res.json();
    },
  });

  const showBlog = publicSettings?.blogInMenu || false;
  const isHome = pathname === "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const toggleLanguage = (lang: "lv" | "ru" | "en") => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  const isExternalHref = (href: string) =>
    /^https?:\/\//i.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav-overlay"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-[#111] text-2xl font-serif lg:hidden"
            style={{ width: "100%", maxWidth: "100dvw", left: 0, right: 0 }}
          >
            <button type="button" className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X size={32} />
            </button>
            {navLinks?.length ? (
              navLinks.map((link: { label?: string; href?: string }, i: number) => {
                const href = link.href ?? "#";
                const label = link.label ?? "";
                if (isExternalHref(href)) {
                  return (
                    <a
                      key={i}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-[#C0A07B] transition-colors"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {label}
                    </a>
                  );
                }
                return (
                  <Link key={i} href={href} onClick={() => setIsOpen(false)} className="hover:text-[#C0A07B] transition-colors">
                    {label}
                  </Link>
                );
              })
            ) : (
              <>
                <a href={isHome ? "#about" : "/#about"} onClick={() => setIsOpen(false)} className="hover:text-[#C0A07B] transition-colors">
                  {t("nav.about")}
                </a>
                <a href={isHome ? "#team" : "/#team"} onClick={() => setIsOpen(false)} className="hover:text-[#C0A07B] transition-colors">
                  {t("nav.team")}
                </a>
                <a href={isHome ? "#services" : "/#services"} onClick={() => setIsOpen(false)} className="hover:text-[#C0A07B] transition-colors">
                  {t("nav.services")}
                </a>
                <Link href="/shop" onClick={() => setIsOpen(false)} className="hover:text-[#C0A07B] transition-colors">
                  {t("nav.shop")}
                </Link>
                {showBlog && (
                  <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-[#C0A07B] transition-colors">
                    {t("nav.blog")}
                  </Link>
                )}
                <a href={isHome ? "#contacts" : "/#contacts"} onClick={() => setIsOpen(false)} className="hover:text-[#C0A07B] transition-colors">
                  {t("nav.contacts")}
                </a>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full max-w-[100dvw] transition-all duration-300 ${scrolled ? "py-4" : "bg-transparent py-6"}`}
      >
        {scrolled ? <div className="pointer-events-none absolute inset-0 -z-10 bg-[#222222]/90 backdrop-blur-md" aria-hidden /> : null}
        <div className="container relative mx-auto flex min-w-0 max-w-full items-center justify-between px-6">
        <Link href="/" className="z-50 shrink-0 min-w-0">
          <Image src="/assets/logo-full.png" alt="D.O.M. Event Agency" width={140} height={48} className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center font-sans font-light text-sm tracking-widest text-white">
          {navLinks?.length ? (
            navLinks.map((link: { label?: string; href?: string }, i: number) => {
              const href = link.href ?? "#";
              const label = link.label ?? "";
              if (isExternalHref(href)) {
                return (
                  <a
                    key={i}
                    href={href}
                    className="text-xs tracking-[0.15em] hover:text-[#C0A07B] transition-colors"
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {label}
                  </a>
                );
              }
              return (
                <Link key={i} href={href} className="text-xs tracking-[0.15em] hover:text-[#C0A07B] transition-colors">
                  {label}
                </Link>
              );
            })
          ) : (
            <>
              <a href={isHome ? "#about" : "/#about"} className="hover:text-[#C0A07B] transition-colors">{t("nav.about")}</a>
              <a href={isHome ? "#team" : "/#team"} className="hover:text-[#C0A07B] transition-colors">{t("nav.team")}</a>
              <a href={isHome ? "#services" : "/#services"} className="hover:text-[#C0A07B] transition-colors">{t("nav.services")}</a>
              <Link href="/shop" className={`hover:text-[#C0A07B] transition-colors ${pathname === "/shop" ? "text-[#C0A07B]" : ""}`}>{t("nav.shop")}</Link>
              {showBlog && (
                <Link href="/blog" className={`hover:text-[#C0A07B] transition-colors ${pathname === "/blog" || pathname?.startsWith("/blog/") ? "text-[#C0A07B]" : ""}`}>{t("nav.blog")}</Link>
              )}
              <a href={isHome ? "#contacts" : "/#contacts"} className="hover:text-[#C0A07B] transition-colors">{t("nav.contacts")}</a>
            </>
          )}

          <button onClick={() => setIsCartOpen(true)} className="relative hover:text-[#C0A07B] transition-colors ml-4">
            <ShoppingBag size={18} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#8C080C] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">{itemCount}</span>
            )}
          </button>

          <div className="relative">
            <button onClick={() => setLangMenuOpen(!langMenuOpen)} className="flex items-center gap-1 hover:text-[#C0A07B] transition-colors uppercase">
              {language} <Globe size={14} />
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 bg-[#1a1a1a] border border-white/10 py-2 min-w-[60px] flex flex-col"
                >
                  {(["lv", "ru", "en"] as const).map((lang) => (
                    <button key={lang} onClick={() => toggleLanguage(lang)} className={`px-4 py-2 text-xs hover:text-[#C0A07B] uppercase text-left ${language === lang ? "text-[#C0A07B]" : "text-gray-400"}`}>
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="z-50 flex shrink-0 items-center gap-4 lg:hidden">
          <button onClick={() => setIsCartOpen(true)} className="relative text-white hover:text-[#C0A07B]">
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#8C080C] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">{itemCount}</span>
            )}
          </button>
          <button onClick={() => {
            const nextLang = language === "lv" ? "ru" : language === "ru" ? "en" : "lv";
            setLanguage(nextLang);
          }} className="text-white text-sm uppercase font-light tracking-widest hover:text-[#C0A07B]">
            {language}
          </button>
          <button type="button" className="text-white" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
      {mobileMenu}
    </>
  );
}
