import type { Block } from 'payload'

export const EventBuilder: Block = {
  slug: 'eventBuilder',
  labels: { singular: 'Event Builder', plural: 'Event Builder sadaļas' },
  fields: [
    { name: 'heading', type: 'text', label: 'Virsraksts' },
    { name: 'subheading', type: 'text', label: 'Apakšvirsraksts' },
    { name: 'submitButtonText', type: 'text', label: 'Pogas teksts' },
    { name: 'emptyStateText', type: 'text', label: 'Tukšā stāvokļa teksts' },
    {
      name: 'services',
      type: 'array',
      label: 'Pakalpojumi',
      fields: [
        { name: 'key', type: 'text', required: true, label: 'Atslēga (nemainīt!)' },
        { name: 'title', type: 'text', required: true, label: 'Nosaukums' },
        { name: 'description', type: 'textarea', label: 'Apraksts' },
        { name: 'price', type: 'number', label: 'Cena (€)' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
