import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { Navigation } from './collections/Navigation'
import { SiteSettings } from './globals/SiteSettings'
import { HeroBlock } from './blocks/HeroBlock'
import { RichTextBlock } from './blocks/RichTextBlock'
import { GalleryBlock } from './blocks/GalleryBlock'
import { CTABlock } from './blocks/CTABlock'
import { FAQBlock } from './blocks/FAQBlock'
import { TeamBlock } from './blocks/TeamBlock'

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [Pages, Media, Navigation],
  globals: [SiteSettings],
  editor: lexicalEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI!,
  }),
  secret: process.env.PAYLOAD_SECRET!,
  typescript: {
    outputFile: './payload-types.ts',
  },
  blocks: [HeroBlock, RichTextBlock, GalleryBlock, CTABlock, FAQBlock, TeamBlock],
})
