import 'server-only'
import { getPayloadClient } from './payload'

export async function getPosts(locale = 'lv', limit = 10) {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      where: { status: { equals: 'published' } },
      sort: '-publishedAt',
      locale: locale as 'lv' | 'ru' | 'en',
      limit,
      depth: 2,
    })
    return result.docs
  } catch {
    return []
  }
}

export async function getPostBySlug(slug: string, locale = 'lv') {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      where: {
        and: [{ slug: { equals: slug } }, { status: { equals: 'published' } }],
      },
      locale: locale as 'lv' | 'ru' | 'en',
      limit: 1,
      depth: 2,
    })
    return result.docs[0] ?? null
  } catch {
    return null
  }
}
