import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Roboto } from 'next/font/google'
import { cookies } from 'next/headers'
import '../globals.css'
import { Providers } from '../providers'
import { getSiteSettings, getPageBySlug } from '@/lib/payload'
import { PayloadSettingsProvider, PayloadPageProvider } from '@/components/PayloadDataProvider'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'D.O.M. Event Agency',
  description: 'Premium event management agency. We are not for everyone, we are for you.',
  keywords: ['event agency', 'catering', 'DJ', 'decor', 'event planning', 'Latvia'],
  openGraph: {
    title: 'D.O.M. Event Agency',
    description: 'Premium event management agency.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#222222',
}

export default async function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const locale = (cookieStore.get('language')?.value ?? 'lv') as 'lv' | 'ru' | 'en'

  const [settings, page] = await Promise.all([
    getSiteSettings(locale),
    getPageBySlug('home', locale),
  ])

  return (
    <div className={`${playfairDisplay.variable} ${roboto.variable}`}>
      <PayloadPageProvider data={page}>
        <PayloadSettingsProvider data={settings}>
          <Providers>
            {children}
          </Providers>
        </PayloadSettingsProvider>
      </PayloadPageProvider>
    </div>
  )
}
