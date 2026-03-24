import type { Block } from 'payload'

export const Gallery: Block = {
  slug: 'gallery',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
  ],
}
