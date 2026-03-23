import { HeroBlock } from "./HeroBlock";
import { RichTextBlock } from "./RichTextBlock";
import { GalleryBlock } from "./GalleryBlock";
import { TeamBlock } from "./TeamBlock";
import { FAQBlock } from "./FAQBlock";
import { CTABlock } from "./CTABlock";

type Block = { blockType: string; id?: string; [key: string]: any };

const blockMap: Record<string, React.ComponentType<any>> = {
  hero: HeroBlock,
  richText: RichTextBlock,
  gallery: GalleryBlock,
  team: TeamBlock,
  faq: FAQBlock,
  cta: CTABlock,
};

export function RenderBlocks({ blocks }: { blocks: Block[] }) {
  if (!blocks?.length) return null;
  return (
    <>
      {blocks.map((block, i) => {
        const Component = blockMap[block.blockType];
        if (!Component) {
          console.warn(`[RenderBlocks] Unknown block type: ${block.blockType}`);
          return null;
        }
        return <Component key={block.id ?? i} {...block} />;
      })}
    </>
  );
}
