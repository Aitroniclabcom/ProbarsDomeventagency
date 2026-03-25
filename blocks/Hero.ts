import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Heroes' },
  fields: [
    { name: 'heading', type: 'text', required: true, localized: true },
    { name: 'subheading', type: 'text', localized: true },
    { name: 'buttonText', type: 'text', localized: true },
    { name: 'buttonLink', type: 'text' },
    { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
  ],
}
