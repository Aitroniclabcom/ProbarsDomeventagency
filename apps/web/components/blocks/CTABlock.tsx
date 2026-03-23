"use client";
import { motion } from "framer-motion";

type CTABlock = {
  blockType: "cta";
  heading: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CTABlock({ heading, description, buttonLabel, buttonHref }: CTABlock) {
  return (
    <section className="py-20 px-6 bg-[#0f0f0f] border-y border-white/5">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl text-white mb-4 text-balance"
        >
          {heading}
        </motion.h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mb-8 leading-relaxed"
          >
            {description}
          </motion.p>
        )}
        {buttonLabel && buttonHref && (
          <motion.a
            href={buttonHref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block border border-[#C0A07B] text-[#C0A07B] px-10 py-4 text-xs tracking-widest uppercase hover:bg-[#C0A07B] hover:text-[#111111] transition-all"
          >
            {buttonLabel}
          </motion.a>
        )}
      </div>
    </section>
  );
}
