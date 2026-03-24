import type { Block } from 'payload'

export const Partners: Block = {
  slug: 'partners',
  labels: { singular: 'Partneri', plural: 'Partneru sadaļas' },
  fields: [
    { name: 'heading', type: 'text' },
    {
      name: 'partners',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'logo', type: 'upload', relationTo: 'media' },
        { name: 'url', type: 'text' },
      ],
    },
  ],
}
