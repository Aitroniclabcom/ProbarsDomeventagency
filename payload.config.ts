import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Users } from './collections/Users'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { SiteSettings } from './globals/SiteSettings'

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  localization: {
    locales: [
      { label: 'Latviešu', code: 'lv' },
      { label: 'Русский', code: 'ru' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'lv',
    fallback: true,
  },
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-in-production',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  editor: lexicalEditor({}),
  collections: [Users, Pages, Media, Posts],
  globals: [SiteSettings],
  typescript: {
    outputFile: './payload-types.ts',
  },
})
