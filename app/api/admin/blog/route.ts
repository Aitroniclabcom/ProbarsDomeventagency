import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/db/storage";
import { isAdmin } from "@/lib/auth";
import { insertBlogPostSchema } from "@/lib/db/schema";

export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const posts = await storage.getBlogPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await req.json();
    const validated = insertBlogPostSchema.parse(body);
    const post = await storage.createBlogPost(validated);
    return NextResponse.json(post, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Invalid data" }, { status: 400 });
  }
}
