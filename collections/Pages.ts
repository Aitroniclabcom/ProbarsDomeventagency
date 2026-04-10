import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/Hero'
import { RichTextBlock } from '../blocks/RichText'
import { TeamBlock } from '../blocks/Team'
import { GalleryBlock } from '../blocks/Gallery'
import { CTABlock } from '../blocks/Cta'
import { PartnersBlock } from '../blocks/Partners'
import { EventBuilderBlock } from '../blocks/EventBuilder'
import { ServiceSectionBlock } from '../blocks/ServiceSection'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'layout',
      type: 'blocks',
      localized: true,
      blocks: [
        HeroBlock,
        RichTextBlock,
        TeamBlock,
        GalleryBlock,
        CTABlock,
        PartnersBlock,
        EventBuilderBlock,
        ServiceSectionBlock,
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'description', type: 'textarea', localized: true },
      ],
    },
  ],
}
