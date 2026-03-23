import { NextResponse } from "next/server";
import { storage } from "@/lib/db/storage";

export async function GET() {
  try {
    const blogInMenu = await storage.getSetting("blog_in_menu");
    return NextResponse.json({ blogInMenu: blogInMenu === "true" });
  } catch {
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}
