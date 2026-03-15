import type { Metadata, Viewport } from 'next'
import { Open_Sans, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/contexts/language-context'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-open-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KADAM | İnşaat',
  description: 'KADAM - Güvenle Yükselen Yapılar',
  keywords: ['kadam', 'inşaat', 'mühendislik', 'mimarlık', 'proje geliştirme', 'construction', 'engineering'],
  authors: [{ name: 'KADAM' }],
  openGraph: {
    title: 'KADAM | İnşaat',
    description: 'Structures That Rise with Confidence.',
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#8C1D18',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${openSans.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
