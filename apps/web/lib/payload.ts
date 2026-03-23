import { getPayload } from 'payload'
import config from '@/payload.config'

let payloadInstance: Awaited<ReturnType<typeof getPayload>> | null = null

export async function getPayloadClient() {
  if (!payloadInstance) {
    payloadInstance = await getPayload({ config })
  }
  return payloadInstance
}

export async function getPageBySlug(slug: string) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slug },
    },
  })
  return result.docs[0] || null
}

export async function getAllPages() {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'pages',
  })
  return result.docs
}

export async function getNavigation() {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'navigation',
    limit: 1000,
  })
  return result.docs
}

export async function getSiteSettings() {
  const payload = await getPayloadClient()
  const result = await payload.findGlobal({
    slug: 'siteSettings',
  })
  return result
}
