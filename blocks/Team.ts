import type { Block } from 'payload'

export const TeamBlock: Block = {
  slug: 'team',
  labels: { singular: 'Komanda', plural: 'Komandas sadaļas' },
  fields: [
    { name: 'heading', type: 'text', localized: true },
    {
      name: 'members',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', localized: true },
        { name: 'bio', type: 'textarea', label: 'Īsais bio', localized: true },
        { name: 'fullBio', type: 'textarea', label: 'Pilnais bio', localized: true },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
