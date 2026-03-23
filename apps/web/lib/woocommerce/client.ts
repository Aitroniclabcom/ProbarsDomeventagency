const WC_URL = (process.env.NEXT_PUBLIC_WOOCOMMERCE_URL || process.env.WOOCOMMERCE_URL)?.replace(/\/$/, '')

if (!WC_URL) {
  throw new Error('NEXT_PUBLIC_WOOCOMMERCE_URL or WOOCOMMERCE_URL environment variable is not set')
}

const WC_KEY = process.env.WOOCOMMERCE_CONSUMER_KEY
const WC_SECRET = process.env.WOOCOMMERCE_CONSUMER_SECRET

export async function fetchWooCommerceAPI(endpoint: string, options?: RequestInit) {
  const url = `${WC_URL}/wp-json/wc/store/v1${endpoint}`
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options?.headers,
  }

  if (WC_KEY && WC_SECRET) {
    const auth = Buffer.from(`${WC_KEY}:${WC_SECRET}`).toString('base64')
    headers['Authorization'] = `Basic ${auth}`
  }

  const response = await fetch(url, {
    ...options,
    headers,
  })

  if (!response.ok) {
    throw new Error(`WooCommerce API error: ${response.statusText}`)
  }

  return response.json()
}

export async function getProducts(params?: { per_page?: number; page?: number; search?: string }) {
  const searchParams = new URLSearchParams()
  if (params?.per_page) searchParams.set('per_page', String(params.per_page))
  if (params?.page) searchParams.set('page', String(params.page))
  if (params?.search) searchParams.set('search', params.search)

  const query = searchParams.toString() ? `?${searchParams}` : ''
  return fetchWooCommerceAPI(`/products${query}`)
}

export async function getProduct(id: string) {
  return fetchWooCommerceAPI(`/products/${id}`)
}

export async function createOrder(data: any) {
  return fetchWooCommerceAPI('/orders', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
