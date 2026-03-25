import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { getPostBySlug } from "@/lib/posts";
import { BlogPostClient, type BlogPostView } from "./blog-post-client";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const locale = (cookieStore.get("language")?.value ?? "lv") as "lv" | "ru" | "en";
  const doc = await getPostBySlug(slug, locale);

  if (!doc) {
    notFound();
  }

  const cover = doc.coverImage;
  const featuredImageUrl =
    cover && typeof cover === "object" && "url" in cover && typeof (cover as { url?: string }).url === "string"
      ? (cover as { url: string }).url
      : null;

  const publishedRaw = doc.publishedAt;
  const publishedAt =
    publishedRaw == null
      ? null
      : typeof publishedRaw === "string"
        ? publishedRaw
        : new Date(publishedRaw as Date).toISOString();

  const content = doc.content;
  const lexicalContent = content && typeof content === "object" && "root" in (content as object) ? (content as BlogPostView["content"]) : null;

  const post: BlogPostView = {
    title: typeof doc.title === "string" ? doc.title : "",
    slug: typeof doc.slug === "string" ? doc.slug : slug,
    featuredImageUrl,
    publishedAt,
    content: lexicalContent,
  };

  return <BlogPostClient post={post} />;
}
