"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItem = { question: string; answer: any };
type FAQBlock = { blockType: "faq"; title?: string; items: FAQItem[] };

function FAQItem({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);
  const text = Array.isArray(answer)
    ? answer.map((n: any) => n.children?.map((c: any) => c.text).join("") ?? "").join(" ")
    : "";
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left text-white hover:text-[#C0A07B] transition-colors"
      >
        <span className="font-medium tracking-wide">{question}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 pb-5 leading-relaxed">{text}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQBlock({ title, items }: FAQBlock) {
  if (!items?.length) return null;
  return (
    <section className="py-16 px-6 bg-[#111111]">
      <div className="max-w-3xl mx-auto">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl text-white mb-10 text-center"
          >
            {title}
          </motion.h2>
        )}
        {items.map((item, i) => (
          <FAQItem key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
