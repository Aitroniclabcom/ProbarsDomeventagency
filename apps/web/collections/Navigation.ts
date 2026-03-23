import { CollectionConfig } from 'payload'

export const Navigation: CollectionConfig = {
  slug: 'navigation',
  access: {
    read: async () => true,
    create: async ({ req }) => req.user?.role === 'admin',
    update: async ({ req }) => req.user?.role === 'admin',
    delete: async ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
        },
      ],
    },
  ],
}
