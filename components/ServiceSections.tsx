'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wine, Disc, PenTool, Lightbulb, Users, type LucideIcon } from 'lucide-react'

export type ServiceSectionResolved = {
  imagePosition: 'left' | 'right'
  panelClass: string
  icon: string
  title: string
  description: string
  bullets: string[]
  imageUrl: string
  howTitle: string
  howItems: string[]
  advTitle: string
  advItems: string[]
  moreLabel: string
  closeLabel: string
  addLabel: string
}

const iconMap: Record<string, LucideIcon> = {
  wine: Wine,
  disc: Disc,
  penTool: PenTool,
  lightbulb: Lightbulb,
  users: Users,
}

function ServiceSectionItem({
  section,
  onAdd,
}: {
  section: ServiceSectionResolved
  onAdd: () => void
}) {
  const [open, setOpen] = useState(false)
  const Icon = iconMap[section.icon] ?? Wine
  const hasDetails = section.howItems.length > 0 || section.advItems.length > 0
  const imageOnLeft = section.imagePosition === 'left'

  const imageEl = (
    <div
      className={`relative h-[400px] md:h-auto ${imageOnLeft ? 'order-2 md:order-1' : ''}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: section.imageUrl ? `url(${section.imageUrl})` : undefined,
          backgroundColor: section.imageUrl ? undefined : '#111',
        }}
      >
        <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-700" />
      </div>
    </div>
  )

  const textEl = (
    <div
      className={`${section.panelClass} p-12 md:p-24 flex flex-col justify-center ${imageOnLeft ? 'order-1 md:order-2' : ''}`}
    >
      <Icon className="w-12 h-12 text-[#C0A07B] mb-8" />
      <h2 className="text-4xl font-serif mb-6">{section.title}</h2>
      {section.description ? (
        <p className="text-gray-400 font-light mb-8 leading-relaxed">{section.description}</p>
      ) : null}
      {section.bullets.length > 0 ? (
        <ul className="space-y-4 mb-10 text-sm font-light text-gray-300">
          {section.bullets.map((line, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1 h-1 bg-[#C0A07B] mt-2 shrink-0" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <AnimatePresence>
        {open && hasDetails ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden mb-8"
          >
            <div className="pt-4 pb-8 space-y-8 border-t border-white/10">
              {section.howItems.length > 0 ? (
                <div>
                  <h3 className="text-[#C0A07B] font-serif mb-4">{section.howTitle}</h3>
                  <ul className="space-y-3 text-sm text-gray-400 font-light">
                    {section.howItems.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {section.advItems.length > 0 ? (
                <div>
                  <h3 className="text-[#C0A07B] font-serif mb-4">{section.advTitle}</h3>
                  <ul className="space-y-3 text-sm text-gray-400 font-light list-disc pl-4">
                    {section.advItems.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="flex gap-4 items-center flex-wrap">
        {hasDetails ? (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-xs tracking-[0.2em] border border-white/30 px-6 py-3 hover:text-[#C0A07B] hover:border-[#C0A07B] transition-colors uppercase"
          >
            {open ? section.closeLabel : section.moreLabel}
          </button>
        ) : null}
        <button
          type="button"
          onClick={onAdd}
          className="bg-[#8C080C] text-white px-8 py-3 text-xs tracking-widest hover:bg-[#a0090e] transition-colors font-medium border border-[#8C080C]"
        >
          {section.addLabel}
        </button>
      </div>
    </div>
  )

  return (
    <section className="grid md:grid-cols-2 min-h-[600px] border-b border-white/5">
      {imageOnLeft ? (
        <>
          {imageEl}
          {textEl}
        </>
      ) : (
        <>
          {textEl}
          {imageEl}
        </>
      )}
    </section>
  )
}

export function ServiceSections({
  sections,
  onAddToBuilder,
}: {
  sections: ServiceSectionResolved[]
  onAddToBuilder: () => void
}) {
  return (
    <>
      {sections.map((section, i) => (
        <ServiceSectionItem key={i} section={section} onAdd={onAddToBuilder} />
      ))}
    </>
  )
}
