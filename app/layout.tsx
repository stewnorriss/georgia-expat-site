import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import AIChatbot from './components/AIChatbot'

export const metadata: Metadata = {
  title: "Stew's Guide To Tbilisi - Your Personal AI-Powered Guide to Living in Georgia",
  description: "Stew's AI-enhanced comprehensive guide for English expats living in Tbilisi, Georgia. Personal recommendations, smart insights, and 24/7 AI assistance for restaurants, places, transport, housing, culture, and more.",
  keywords: 'Stew, Tbilisi, Georgia, expat guide, AI assistant, personal recommendations, Georgian culture, restaurants, transport, housing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  )
}