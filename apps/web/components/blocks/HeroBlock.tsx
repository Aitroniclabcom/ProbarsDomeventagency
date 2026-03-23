"use client";
import { motion } from "framer-motion";

type HeroBlock = {
  blockType: "hero";
  heading: string;
  subheading?: string;
  backgroundImage?: { url: string; alt?: string };
  ctaButton?: { label?: string; url?: string };
};

export function HeroBlock({ heading, subheading, backgroundImage, ctaButton }: HeroBlock) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage.url}
            alt={backgroundImage.alt || "Hero"}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/60 via-transparent to-[#111111]" />
        </div>
      )}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight text-balance"
        >
          {heading}
        </motion.h1>
        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed text-pretty"
          >
            {subheading}
          </motion.p>
        )}
        {ctaButton?.label && ctaButton?.url && (
          <motion.a
            href={ctaButton.url}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block border border-[#C0A07B] text-[#C0A07B] px-10 py-4 text-xs tracking-widest uppercase hover:bg-[#C0A07B] hover:text-[#111111] transition-all"
          >
            {ctaButton.label}
          </motion.a>
        )}
      </div>
    </section>
  );
}
