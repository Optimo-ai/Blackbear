import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'

import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Are You In Love With Me Or The Idea?',
  description:
    'Late nights. Loud thoughts. No apologies. The official site of an independent alternative R&B and pop artist.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Are You In Love With Me Or The Idea?',
    description: 'Late nights. Loud thoughts. No apologies.',
    siteName: 'Artist',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Are You In Love With Me Or The Idea?',
    description: 'Late nights. Loud thoughts. No apologies.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0B0B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <body className="font-mono antialiased grain-overlay">
        {children}
      </body>
    </html>
  )
}
