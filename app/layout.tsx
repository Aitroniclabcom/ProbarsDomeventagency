import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'D.O.M. Event Agency',
  description: 'Premium event management agency. We are not for everyone, we are for you.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
