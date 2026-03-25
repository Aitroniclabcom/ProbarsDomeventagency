import { resolve, join, extname, basename } from 'path'
import { readdirSync, statSync, readFileSync } from 'fs'

process.loadEnvFile?.(resolve(process.cwd(), '.env.local'))

import { getPayload } from 'payload'
import payloadConfig from '../payload.config'

const ASSETS_DIR = resolve(process.cwd(), 'public/assets')

function getAllFiles(dir: string): string[] {
  const files: string[] = []
  try {
    const items = readdirSync(dir)
    for (const item of items) {
      const fullPath = join(dir, item)
      const stat = statSync(fullPath)
      if (stat.isDirectory()) {
        files.push(...getAllFiles(fullPath))
      } else {
        const ext = extname(item).toLowerCase()
        if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
          files.push(fullPath)
        }
      }
    }
  } catch {}
  return files
}

async function uploadMedia() {
  const payload = await getPayload({ config: payloadConfig })

  const files = getAllFiles(ASSETS_DIR)
  console.log(`Found ${files.length} image files`)

  for (const filePath of files) {
    const filename = basename(filePath)

    try {
      const existing = await payload.find({
        collection: 'media',
        where: { filename: { equals: filename } },
        limit: 1,
      })

      if (existing.docs.length > 0) {
        console.log(`Skipping (already exists): ${filename}`)
        continue
      }

      const fileBuffer = readFileSync(filePath)
      const ext = extname(filename).toLowerCase()
      const mimeTypes: Record<string, string> = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.webp': 'image/webp',
        '.svg': 'image/svg+xml',
      }
      const mimeType = mimeTypes[ext] ?? 'image/jpeg'

      await payload.create({
        collection: 'media',
        data: {
          alt: filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
        },
        file: {
          data: fileBuffer,
          mimetype: mimeType,
          name: filename,
          size: fileBuffer.length,
        },
      })

      console.log(`Uploaded: ${filename}`)
    } catch (err: any) {
      console.error(`Failed: ${filename} — ${err.message}`)
    }
  }

  console.log('Done!')
  process.exit(0)
}

uploadMedia().catch(err => {
  console.error(err)
  process.exit(1)
})
