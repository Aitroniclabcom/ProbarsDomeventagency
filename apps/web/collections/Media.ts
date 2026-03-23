import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: async () => true,
    create: async ({ req }) => req.user?.role === 'admin',
    update: async ({ req }) => req.user?.role === 'admin',
    delete: async ({ req }) => req.user?.role === 'admin',
  },
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*', 'application/pdf'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
