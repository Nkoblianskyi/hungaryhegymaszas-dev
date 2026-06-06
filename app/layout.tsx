import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Cormorant_Garamond, Geist_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hungaryhegymaszas.com'),
  title: {
    default: 'Hungary Hegymászás — Alpinizmus és hegyiturizmus',
    template: '%s | Hungary Hegymászás',
  },
  description:
    'Magyarország alpinizmus és hegyiturizmus portálja. Technikák, történelem, felszerelés és tippek hegymászóknak.',
  keywords: [
    'hegymászás',
    'alpinizmus',
    'hegyiturizmus',
    'Magyarország',
    'sziklamászás',
    'via ferrata',
    'trekking',
    'mountain climbing Hungary',
  ],
  authors: [{ name: 'hungaryhegymaszas.com' }],
  creator: 'hungaryhegymaszas.com',
  publisher: 'hungaryhegymaszas.com',
  alternates: {
    canonical: 'https://hungaryhegymaszas.com',
    languages: { 'hu-HU': 'https://hungaryhegymaszas.com' },
  },
  openGraph: {
    title: 'Hungary Hegymászás — Alpinizmus és hegyiturizmus',
    description:
      'Magyarország alpinizmus és hegyiturizmus portálja. Technikák, történelem, felszerelés és tippek hegymászóknak.',
    url: 'https://hungaryhegymaszas.com',
    siteName: 'Hungary Hegymászás',
    locale: 'hu_HU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hungary Hegymászás — Alpinizmus és hegyiturizmus',
    description:
      'Magyarország alpinizmus és hegyiturizmus portálja. Technikák, történelem és tippek hegymászóknak.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0f14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="hu"
      className={`${spaceGrotesk.variable} ${cormorant.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
