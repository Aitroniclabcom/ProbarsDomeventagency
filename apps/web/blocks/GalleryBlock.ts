import { Block } from 'payload'

export const GalleryBlock: Block = {
  slug: 'gallery',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      required: true,
    },
  ],
}
