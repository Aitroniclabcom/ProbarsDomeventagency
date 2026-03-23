const PAYLOAD_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001";

type FetchOptions = {
  revalidate?: number | false;
  tags?: string[];
};

export async function payloadFetch<T>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const { revalidate = 60, tags } = options;

  const res = await fetch(`${PAYLOAD_URL}/api${path}`, {
    headers: { "Content-Type": "application/json" },
    next: {
      revalidate: revalidate === false ? undefined : revalidate,
      ...(tags ? { tags } : {}),
    },
  });

  if (!res.ok) {
    throw new Error(`Payload fetch failed: ${res.status} ${path}`);
  }

  return res.json();
}

export async function getPage(slug: string) {
  const data = await payloadFetch<{ docs: any[] }>(
    `/pages?where[slug][equals]=${slug}&depth=3`,
    { tags: [`page-${slug}`], revalidate: 300 }
  );
  return data.docs[0] ?? null;
}

export async function getNavigation() {
  return payloadFetch<any>("/globals/navigation?depth=2", {
    tags: ["navigation"],
    revalidate: 600,
  });
}

export async function getSiteSettings() {
  return payloadFetch<any>("/globals/site-settings", {
    tags: ["site-settings"],
    revalidate: 600,
  });
}

export async function getBlogPosts(options?: {
  limit?: number;
  page?: number;
  locale?: string;
}) {
  const params = new URLSearchParams();
  params.set("where[status][equals]", "published");
  params.set("sort", "-publishedAt");
  if (options?.limit) params.set("limit", String(options.limit));
  if (options?.page) params.set("page", String(options.page));
  params.set("depth", "1");

  return payloadFetch<{ docs: any[]; totalDocs: number; totalPages: number }>(
    `/blog-posts?${params.toString()}`,
    { tags: ["blog"], revalidate: 120 }
  );
}

export async function getBlogPost(slug: string) {
  const data = await payloadFetch<{ docs: any[] }>(
    `/blog-posts?where[slug][equals]=${slug}&depth=2`,
    { tags: [`blog-${slug}`], revalidate: 120 }
  );
  return data.docs[0] ?? null;
}
