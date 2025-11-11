import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'
import { BlogProvider } from './contexts/BlogContext'
import ThemeToggle from './components/ThemeToggle'
import PWAInstaller from './components/PWAInstaller'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tbilisi Expat Guide | Stew\'s Complete Guide to Living in Georgia',
  description: 'Comprehensive expat guide to Tbilisi, Georgia. Discover restaurants, housing, culture, language lessons, day trips, emergency contacts, and AI-powered recommendations for expat life.',
  keywords: 'Tbilisi, Georgia, expat guide, living in Tbilisi, Georgian restaurants, housing Tbilisi, learn Georgian, expat community, digital nomad Georgia, Tbilisi travel',
  authors: [{ name: 'Stew' }],
  creator: 'Stew',
  publisher: 'Tbilisi Expat Guide',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tbilisi-expat-guide.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tbilisi Expat Guide | Complete Guide to Living in Georgia',
    description: 'AI-powered expat guide with restaurants, housing, culture, language lessons, and community resources for living in Tbilisi, Georgia',
    url: 'https://tbilisi-expat-guide.com',
    siteName: 'Tbilisi Expat Guide',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tbilisi Expat Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tbilisi Expat Guide | Living in Georgia',
    description: 'Complete AI-powered guide for expats in Tbilisi, Georgia',
    images: ['/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        
        <ThemeProvider>
          <BlogProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <ThemeToggle />
              <PWAInstaller />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </BlogProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
