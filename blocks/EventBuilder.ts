import type { Block } from 'payload'

export const EventBuilderBlock: Block = {
  slug: 'eventBuilder',
  labels: { singular: 'Event Builder', plural: 'Event Builder sadaļas' },
  fields: [
    { name: 'heading', type: 'text', label: 'Virsraksts', localized: true },
    { name: 'subheading', type: 'text', label: 'Apakšvirsraksts', localized: true },
    { name: 'submitButtonText', type: 'text', label: 'Pogas teksts', localized: true },
    { name: 'emptyStateText', type: 'text', label: 'Tukšā stāvokļa teksts', localized: true },
    {
      name: 'services',
      type: 'array',
      label: 'Pakalpojumi',
      fields: [
        { name: 'key', type: 'text', required: true, label: 'Atslēga (nemainīt!)' },
        { name: 'title', type: 'text', required: true, label: 'Nosaukums', localized: true },
        { name: 'description', type: 'textarea', label: 'Apraksts', localized: true },
        { name: 'price', type: 'number', label: 'Cena (€)' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
