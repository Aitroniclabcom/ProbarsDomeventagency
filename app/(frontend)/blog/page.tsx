import { cookies } from "next/headers";
import { getPosts } from "@/lib/posts";
import { BlogListClient, type BlogListPost } from "./blog-list-client";

export default async function BlogPage() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("language")?.value ?? "lv") as "lv" | "ru" | "en";
  const docs = await getPosts(locale);

  const posts: BlogListPost[] = docs.map((p) => {
    const cover = p.coverImage;
    const imageUrl =
      cover && typeof cover === "object" && "url" in cover && typeof (cover as { url?: string }).url === "string"
        ? (cover as { url: string }).url
        : null;
    return {
      id: String(p.id),
      title: typeof p.title === "string" ? p.title : "",
      slug: typeof p.slug === "string" ? p.slug : "",
      excerpt: typeof p.excerpt === "string" ? p.excerpt : "",
      featuredImageUrl: imageUrl,
      publishedAt: p.publishedAt ? (typeof p.publishedAt === "string" ? p.publishedAt : new Date(p.publishedAt as Date).toISOString()) : null,
    };
  });

  return <BlogListClient posts={posts} />;
}
