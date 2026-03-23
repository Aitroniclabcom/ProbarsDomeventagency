import { notFound } from "next/navigation";
import { getPage } from "@/lib/payload";
import { RenderBlocks } from "@/components/blocks/RenderBlocks";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = await getPage(slug);
  if (!page) return {};
  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description,
  };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = await getPage(slug);
  if (!page) notFound();

  return <RenderBlocks blocks={page.layout ?? []} />;
}
