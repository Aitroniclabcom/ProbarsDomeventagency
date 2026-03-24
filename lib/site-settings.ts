import 'server-only'
import { getPayloadClient } from './payload'

export async function getSiteSettings() {
  try {
    const payload = await getPayloadClient()
    return await payload.findGlobal({ slug: 'site-settings' })
  } catch {
    return null
  }
}
