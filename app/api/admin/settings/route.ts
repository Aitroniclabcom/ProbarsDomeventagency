import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/db/storage";
import { isAdmin } from "@/lib/auth";
import { z } from "zod";

export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const settings = await storage.getAllSettings();
    const settingsMap: Record<string, string> = {};
    settings.forEach((s) => { if (s.value) settingsMap[s.key] = s.value; });
    return NextResponse.json(settingsMap);
  } catch {
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const body = await req.json();
    const validated = z.record(z.string()).parse(body);
    for (const [key, value] of Object.entries(validated)) {
      await storage.setSetting(key, value);
    }
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to update settings" }, { status: 400 });
  }
}
