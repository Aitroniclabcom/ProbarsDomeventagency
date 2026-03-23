"use client";
import { motion } from "framer-motion";

type RichTextBlock = {
  blockType: "richText";
  content: any; // Slate JSON
  alignment?: "left" | "center";
};

function renderSlateNode(node: any, idx: number): React.ReactNode {
  if (node.text !== undefined) {
    let el: React.ReactNode = node.text;
    if (node.bold) el = <strong key={idx}>{el}</strong>;
    if (node.italic) el = <em key={idx}>{el}</em>;
    if (node.underline) el = <u key={idx}>{el}</u>;
    return el;
  }
  const children = node.children?.map(renderSlateNode) ?? [];
  switch (node.type) {
    case "h1": return <h1 key={idx} className="font-serif text-4xl md:text-5xl text-white mb-6">{children}</h1>;
    case "h2": return <h2 key={idx} className="font-serif text-3xl md:text-4xl text-white mb-4">{children}</h2>;
    case "h3": return <h3 key={idx} className="font-serif text-2xl text-white mb-3">{children}</h3>;
    case "blockquote": return <blockquote key={idx} className="border-l-2 border-[#C0A07B] pl-6 italic text-gray-400 my-6">{children}</blockquote>;
    case "ul": return <ul key={idx} className="list-disc list-inside text-gray-400 space-y-1 mb-4">{children}</ul>;
    case "ol": return <ol key={idx} className="list-decimal list-inside text-gray-400 space-y-1 mb-4">{children}</ol>;
    case "li": return <li key={idx}>{children}</li>;
    case "link": return <a key={idx} href={node.url} className="text-[#C0A07B] underline underline-offset-2">{children}</a>;
    default: return <p key={idx} className="text-gray-400 leading-relaxed mb-4">{children}</p>;
  }
}

export function RichTextBlock({ content, alignment = "left" }: RichTextBlock) {
  if (!content) return null;
  const nodes: any[] = Array.isArray(content) ? content : content.root?.children ?? [];
  return (
    <section className="py-16 px-6 bg-[#111111]">
      <div className={`max-w-3xl mx-auto ${alignment === "center" ? "text-center" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {nodes.map(renderSlateNode)}
        </motion.div>
      </div>
    </section>
  );
}
