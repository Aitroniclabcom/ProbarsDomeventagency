import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const { collection, slug } = body as { collection?: string; slug?: string };

  try {
    if (collection === "pages" && slug) {
      revalidateTag(`page-${slug}`);
    } else if (collection === "blog-posts" && slug) {
      revalidateTag(`blog-${slug}`);
      revalidateTag("blog");
    } else if (collection === "navigation") {
      revalidateTag("navigation");
    } else if (collection === "site-settings") {
      revalidateTag("site-settings");
    } else {
      // Revalidate everything
      revalidateTag("page-home");
      revalidateTag("blog");
      revalidateTag("navigation");
      revalidateTag("site-settings");
    }

    return NextResponse.json({ revalidated: true, timestamp: Date.now() });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
