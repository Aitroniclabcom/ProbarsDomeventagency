import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/db/storage";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const post = await storage.getBlogPostBySlug(slug);
    if (!post || !post.isPublished) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(post);
  } catch {
    return NextResponse.json({ error: "Failed to fetch blog post" }, { status: 500 });
  }
}
