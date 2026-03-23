import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/db/storage";

export async function GET() {
  try {
    const posts = await storage.getPublishedBlogPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 });
  }
}
