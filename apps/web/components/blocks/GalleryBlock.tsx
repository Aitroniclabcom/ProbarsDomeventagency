"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type GalleryImage = { image: { url: string; alt: string }; caption?: string };
type GalleryBlock = { blockType: "gallery"; title?: string; images: GalleryImage[] };

export function GalleryBlock({ title, images }: GalleryBlock) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  if (!images?.length) return null;
  return (
    <section className="py-16 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-white mb-10 text-center"
          >
            {title}
          </motion.h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {images.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => setSelected(item)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square overflow-hidden group"
            >
              <img
                src={item.image.url}
                alt={item.image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-white/70 hover:text-white">
              <X size={28} />
            </button>
            <img src={selected.image.url} alt={selected.image.alt} className="max-w-full max-h-[85vh] object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
