import 'server-only'
import { getPayloadClient } from './payload'

export async function getPageBySlug(slug: string) {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return result.docs[0] ?? null
  } catch {
    return null
  }
}
