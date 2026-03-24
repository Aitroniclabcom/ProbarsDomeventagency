import type { CollectionConfig } from 'payload'
import { Hero } from '../blocks/Hero'
import { RichText } from '../blocks/RichText'
import { Team } from '../blocks/Team'
import { Gallery } from '../blocks/Gallery'
import { Partners } from '../blocks/Partners'
import { Cta } from '../blocks/Cta'
import { EventBuilder } from '../blocks/EventBuilder'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Hero, RichText, Team, Gallery, Cta, Partners, EventBuilder],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
}
