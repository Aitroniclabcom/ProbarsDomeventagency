import type { Block } from 'payload'

export const Team: Block = {
  slug: 'team',
  labels: { singular: 'Komanda', plural: 'Komandas sadaļas' },
  fields: [
    { name: 'heading', type: 'text' },
    {
      name: 'members',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text' },
        { name: 'bio', type: 'textarea', label: 'Īsais bio' },
        { name: 'fullBio', type: 'textarea', label: 'Pilnais bio' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
