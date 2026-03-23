import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Users } from './collections/Users'

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-in-production',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  editor: lexicalEditor({}),
  collections: [Users],
  globals: [],
  typescript: {
    outputFile: './payload-types.ts',
  },
})
