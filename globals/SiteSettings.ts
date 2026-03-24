import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Vietnes iestatījumi',
  fields: [
    {
      name: 'general',
      type: 'group',
      label: 'Vispārīgi',
      fields: [
        { name: 'siteName', type: 'text' },
        { name: 'logo', type: 'upload', relationTo: 'media' },
        { name: 'contactEmail', type: 'email' },
        { name: 'phone', type: 'text' },
        { name: 'address', type: 'textarea' },
      ],
    },
    {
      name: 'header',
      type: 'group',
      label: 'Header navigācija',
      fields: [
        {
          name: 'navLinks',
          type: 'array',
          label: 'Navigācijas saites',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Footer',
      fields: [
        { name: 'tagline', type: 'text', label: 'Apakšvirsraksts' },
        { name: 'copyrightText', type: 'text', label: 'Copyright teksts' },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Sociālie tīkli',
          fields: [
            { name: 'platform', type: 'text', required: true },
            { name: 'url', type: 'text', required: true },
            { name: 'icon', type: 'text', label: 'Ikona (lucide nosaukums)' },
          ],
        },
        {
          name: 'footerLinks',
          type: 'array',
          label: 'Footer saites',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
}
