import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import AIChatbot from './components/AIChatbot'
import { ThemeProvider } from './contexts/ThemeContext'
import PWAInstaller from './components/PWAInstaller'

export const metadata: Metadata = {
  metadataBase: new URL('https://stewsguide.com'),
  title: "Stew's Guide To Tbilisi - Your Personal AI-Powered Guide to Living in Georgia",
  description: "Stew's AI-enhanced comprehensive guide for English expats living in Tbilisi, Georgia. Personal recommendations, smart insights, and 24/7 AI assistance for restaurants, places, transport, housing, culture, and more.",
  keywords: 'Stew, Tbilisi, Georgia, expat guide, AI assistant, personal recommendations, Georgian culture, restaurants, transport, housing',
  authors: [{ name: 'Stew Norriss' }],
  creator: 'Stew Norriss',
  publisher: 'Stew\'s Guide To Tbilisi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Stew\'s Tbilisi',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Stew\'s Guide To Tbilisi',
    title: 'Stew\'s Guide To Tbilisi - AI-Powered Expat Guide',
    description: 'Your personal AI assistant for living in Tbilisi, Georgia. Get smart recommendations for restaurants, transport, culture, and more.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stew\'s Guide To Tbilisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stew\'s Guide To Tbilisi - AI-Powered Expat Guide',
    description: 'Your personal AI assistant for living in Tbilisi, Georgia.',
    images: ['/og-image.png'],
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#dc2626" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <AIChatbot />
          <PWAInstaller />
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}