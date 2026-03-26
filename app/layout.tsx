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
  title: {
    default: 'KADAM | İnşaat',
    template: '%s | KADAM İnşaat',
  },
  description: 'KADAM - Güvenle Yükselen Yapılar. İnşaat, mühendislik ve proje geliştirme alanlarında güvenilir çözümler sunuyoruz.',
  keywords: [
    'kadam inşaat',
    'kadam',
    'inşaat firması',
    'inşaat şirketi',
    'mühendislik',
    'mimarlık',
    'proje geliştirme',
    'yapı müteahhidi',
    'konut projeleri',
    'ticari yapılar',
    'kentsel dönüşüm',
    'anahtar teslim inşaat',
    'construction',
    'engineering',
    'Turkey construction',
  ],
  authors: [{ name: 'KADAM İnşaat', url: 'https://kadaminsaat.com' }],
  creator: 'KADAM İnşaat',
  publisher: 'KADAM İnşaat',
  metadataBase: new URL('https://kadaminsaat.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/tr',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'KADAM | İnşaat',
    description: 'KADAM - Güvenle Yükselen Yapılar. İnşaat, mühendislik ve proje geliştirme alanlarında güvenilir çözümler.',
    url: 'https://kadaminsaat.com',
    siteName: 'KADAM İnşaat',
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
    images: [
      {
        url: '/KADAM Logo.png',
        width: 1200,
        height: 630,
        alt: 'KADAM İnşaat - Güvenle Yükselen Yapılar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KADAM | İnşaat',
    description: 'KADAM - Güvenle Yükselen Yapılar.',
    images: ['/KADAM Logo.png'],
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
    verification: {
      google: 'google-site-verification=U5vindEdPj5ZtgcyQTowO5xEztTG3pukXnn4u93CfZg',
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
