"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Calendar, ArrowLeft } from "lucide-react";
import type { SerializedEditorState } from "lexical";
import { RichText } from "@payloadcms/richtext-lexical/react";

export type BlogPostView = {
  title: string;
  slug: string;
  featuredImageUrl: string | null;
  publishedAt: string | null;
  content: SerializedEditorState | null;
};

function hasLexicalRoot(data: unknown): data is SerializedEditorState {
  return Boolean(data && typeof data === "object" && "root" in (data as object));
}

export function BlogPostClient({ post }: { post: BlogPostView }) {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#111111]">
      <Navigation />
      <CartDrawer />

      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#C0A07B] hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t("blog.backToList")}
          </Link>

          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {post.featuredImageUrl && (
              <div className="aspect-video overflow-hidden mb-8">
                <img src={post.featuredImageUrl} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-serif text-[#C0A07B] mb-4">{post.title}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Calendar className="w-4 h-4" />
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString(language === "lv" ? "lv-LV" : language === "ru" ? "ru-RU" : "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : ""}
            </div>
            {hasLexicalRoot(post.content) ? (
              <div className="prose prose-invert max-w-none text-gray-300 [&_a]:text-[#C0A07B]">
                <RichText data={post.content} />
              </div>
            ) : null}
          </motion.article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
