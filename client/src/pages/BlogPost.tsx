import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowLeft } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  titleLv: string | null;
  titleRu: string | null;
  titleEn: string | null;
  content: string;
  contentLv: string | null;
  contentRu: string | null;
  contentEn: string | null;
  slug: string;
  featuredImageUrl: string | null;
  isPublished: boolean | null;
  publishedAt: string | null;
  createdAt: string | null;
};

function parseMarkdown(text: string): string {
  return text
    .replace(/^#### (.+)$/gm, '<h4 class="text-lg font-semibold text-white mt-6 mb-3">$1</h4>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold text-white mt-8 mb-4">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-serif text-[#C0A07B] mt-10 mb-4">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-serif text-[#C0A07B] mt-12 mb-6">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p class="text-gray-300 mb-4 leading-relaxed">')
    .replace(/\n/g, '<br />');
}

export default function BlogPostPage() {
  const { language, t } = useLanguage();
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const res = await fetch(`/api/blog/${slug}`);
      if (!res.ok) throw new Error("Not found");
      return res.json();
    },
    enabled: !!slug,
  });

  const getLocalizedTitle = (post: BlogPost) => {
    if (language === "lv" && post.titleLv) return post.titleLv;
    if (language === "ru" && post.titleRu) return post.titleRu;
    if (language === "en" && post.titleEn) return post.titleEn;
    return post.title;
  };

  const getLocalizedContent = (post: BlogPost) => {
    if (language === "lv" && post.contentLv) return post.contentLv;
    if (language === "ru" && post.contentRu) return post.contentRu;
    if (language === "en" && post.contentEn) return post.contentEn;
    return post.content;
  };

  return (
    <div className="min-h-screen bg-[#111111]">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#C0A07B] hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t("blog.backToList")}
          </Link>

          {isLoading ? (
            <div className="text-center text-gray-400">{t("blog.loading")}</div>
          ) : error || !post ? (
            <div className="text-center text-gray-400">{t("blog.notFound")}</div>
          ) : (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {post.featuredImageUrl && (
                <div className="aspect-video rounded-lg overflow-hidden mb-8">
                  <img 
                    src={post.featuredImageUrl} 
                    alt={getLocalizedTitle(post)}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <h1 className="text-3xl md:text-4xl font-serif text-[#C0A07B] mb-4">
                {getLocalizedTitle(post)}
              </h1>

              <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                <Calendar className="w-4 h-4" />
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString(language === "lv" ? "lv-LV" : language === "ru" ? "ru-RU" : "en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                }) : ""}
              </div>

              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: `<p class="text-gray-300 mb-4 leading-relaxed">${parseMarkdown(getLocalizedContent(post))}</p>` 
                }}
              />
            </motion.article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
