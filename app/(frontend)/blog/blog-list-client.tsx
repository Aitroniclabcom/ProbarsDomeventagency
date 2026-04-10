"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Calendar, ArrowRight } from "lucide-react";

export type BlogListPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImageUrl: string | null;
  publishedAt: string | null;
};

export function BlogListClient({ posts }: { posts: BlogListPost[] }) {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden bg-[#111111]">
      <Navigation />
      <CartDrawer />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-serif text-[#C0A07B] mb-12 text-center">
            {t("blog.title")}
          </motion.h1>

          {posts.length === 0 ? (
            <div className="text-center text-gray-400">{t("blog.empty")}</div>
          ) : (
            <div className="grid gap-8">
              {posts.map((post, index) => (
                <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-[#1a1a1a] overflow-hidden hover:bg-[#222] transition-colors group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="flex flex-col md:flex-row">
                      {post.featuredImageUrl && (
                        <div className="md:w-1/3 aspect-video md:aspect-[4/3]">
                          <img src={post.featuredImageUrl} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className={`p-6 flex flex-col justify-center ${post.featuredImageUrl ? "md:w-2/3" : "w-full"}`}>
                        <h2 className="text-xl md:text-2xl font-serif text-white mb-3 group-hover:text-[#C0A07B] transition-colors">{post.title}</h2>
                        <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString(language === "lv" ? "lv-LV" : language === "ru" ? "ru-RU" : "en-US") : ""}
                          </div>
                          <span className="text-[#C0A07B] flex items-center gap-1 text-sm group-hover:gap-2 transition-all">
                            {t("blog.readMore")} <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
