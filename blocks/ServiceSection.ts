import type { Block } from 'payload'

export const ServiceSectionBlock: Block = {
  slug: 'serviceSection',
  labels: {
    singular: 'Pakalpojumu sadaļa (Catering, DJ u.c.)',
    plural: 'Pakalpojumu sadaļas',
  },
  fields: [
    {
      name: 'adminLabel',
      type: 'text',
      label: 'Iekršējā atzīme (tikai admin)',
      admin: { description: 'Piemēram: Catering, DJ — lai vieglāk sakārtot bloku sarakstu.' },
    },
    {
      name: 'imagePosition',
      type: 'select',
      label: 'Attēla puse',
      defaultValue: 'right',
      options: [
        { label: 'Pa labi (teksts pa kreisi)', value: 'right' },
        { label: 'Pa kreisi (teksts pa labi)', value: 'left' },
      ],
    },
    {
      name: 'panelStyle',
      type: 'select',
      label: 'Fona tonis',
      defaultValue: 'dark',
      options: [
        { label: 'Tumšāks (#1a1a1a)', value: 'dark' },
        { label: 'Vēl tumšāks (#151515)', value: 'charcoal' },
      ],
    },
    {
      name: 'icon',
      type: 'select',
      label: 'Ikona',
      required: true,
      defaultValue: 'wine',
      options: [
        { label: 'Vīns / catering', value: 'wine' },
        { label: 'Disks / mūzika', value: 'disc' },
        { label: 'Pildspalva / dizains', value: 'penTool' },
        { label: 'Spuldze / dekors', value: 'lightbulb' },
        { label: 'Cilvēki / konsultācijas', value: 'users' },
      ],
    },
    { name: 'title', type: 'text', label: 'Virsraksts', required: true, localized: true },
    { name: 'description', type: 'textarea', label: 'Ievadleļa', localized: true },
    {
      name: 'bullets',
      type: 'array',
      label: 'Saraksta rindas',
      fields: [{ name: 'text', type: 'textarea', label: 'Teksts', localized: true }],
    },
    {
      name: 'fallbackImage',
      type: 'text',
      label: 'Rezerves attēla ceļš',
      admin: {
        description: 'Ja nav augšupielādēts attēls, izmantot publisko ceļu (piem. /assets/gallery/buffet.jpg).',
      },
    },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Attēls' },
    {
      name: 'howTitle',
      type: 'text',
      label: 'Detalizēti — apakšvirsraksts «Kā mēs to darām»',
      localized: true,
    },
    {
      name: 'howItems',
      type: 'array',
      label: 'Detalizēti — punksti (Kā)',
      fields: [{ name: 'text', type: 'textarea', label: 'Teksts', localized: true }],
    },
    {
      name: 'advTitle',
      type: 'text',
      label: 'Detalizēti — apakšvirsraksts «Priekšrocības»',
      localized: true,
    },
    {
      name: 'advItems',
      type: 'array',
      label: 'Detalizēti — punksti (Priekšrocības)',
      fields: [{ name: 'text', type: 'textarea', label: 'Teksts', localized: true }],
    },
    {
      name: 'moreLabel',
      type: 'text',
      label: 'Poga «Uzzināt vairāk»',
      localized: true,
    },
    {
      name: 'closeLabel',
      type: 'text',
      label: 'Poga «Aizvērt» (kad atvērts)',
      localized: true,
    },
    {
      name: 'addLabel',
      type: 'text',
      label: 'Poga «Pievienot / pieteikties»',
      localized: true,
    },
  ],
}
