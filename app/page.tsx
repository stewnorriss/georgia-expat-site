'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Utensils, MapPin, Car, Home, Users, MessageCircle, Mountain,
  Bed, Dumbbell, Stethoscope, Palette, BookOpen, Search, Sparkles,
  ArrowRight, Zap, Globe, Target, ShoppingBag, ArrowUpRight,
  Sun, Wine, Music
} from 'lucide-react'
import ClientOnlyWrapper from './components/ClientOnlyWrapper'
import WeatherWidget from './components/WeatherWidget'
import CurrencyConverter from './components/CurrencyConverter'

const HomePage = () => {
  const [heroSearchQuery, setHeroSearchQuery] = useState('')
  const [searchFeedback, setSearchFeedback] = useState('')

  const performHeroSearch = (searchQuery: string) => {
    const lowerQuery = searchQuery.toLowerCase()
    const routes: Record<string, string[]> = {
      '/restaurants': ['restaurant', 'food', 'eat', 'dining', 'khachapuri', 'khinkali'],
      '/transport': ['metro', 'transport', 'bus', 'taxi', 'bolt', 'drive'],
      '/culture': ['culture', 'tradition', 'custom', 'etiquette', 'supra'],
      '/language': ['language', 'georgian', 'learn', 'speak', 'alphabet'],
      '/activities': ['activity', 'activities', 'adventure', 'hiking', 'outdoor'],
      '/housing': ['house', 'housing', 'apartment', 'neighborhood', 'rent'],
      '/medical': ['medical', 'doctor', 'hospital', 'health', 'pharmacy'],
      '/places': ['place', 'visit', 'tourist', 'attraction', 'sightseeing'],
      '/accommodation': ['hotel', 'accommodation', 'stay', 'hostel'],
      '/sports': ['sport', 'gym', 'fitness', 'yoga', 'swimming'],
      '/arts': ['art', 'museum', 'gallery', 'theater', 'opera'],
      '/nightlife': ['nightlife', 'bar', 'club', 'party', 'wine'],
      '/shopping': ['shop', 'shopping', 'market', 'bazaar', 'mall'],
      '/jobs': ['job', 'work', 'remote', 'freelance', 'nomad'],
      '/banking': ['bank', 'money', 'atm', 'transfer', 'currency'],
      '/emergency': ['emergency', 'police', 'ambulance', 'embassy', 'safety'],
    }
    let targetRoute = '/blog'
    for (const [route, keywords] of Object.entries(routes)) {
      if (keywords.some(kw => lowerQuery.includes(kw))) {
        targetRoute = route
        break
      }
    }
    setSearchFeedback('Taking you there...')
    setTimeout(() => { window.location.href = targetRoute }, 400)
  }

  const handleHeroSearch = () => {
    if (heroSearchQuery.trim()) performHeroSearch(heroSearchQuery)
  }

  const quickLinks = [
    { icon: <Utensils className="h-5 w-5" />, label: 'Restaurants', href: '/restaurants', color: 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400' },
    { icon: <Home className="h-5 w-5" />, label: 'Housing', href: '/housing', color: 'bg-violet-50 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400' },
    { icon: <Car className="h-5 w-5" />, label: 'Transport', href: '/transport', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400' },
    { icon: <MessageCircle className="h-5 w-5" />, label: 'Language', href: '/language', color: 'bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400' },
  ]

  const features = [
    { icon: <Utensils className="h-6 w-6" />, title: 'Restaurants & Dining', description: 'Curated dining guide with filters, dietary options, and delivery info', href: '/restaurants', accent: 'group-hover:text-orange-500' },
    { icon: <MapPin className="h-6 w-6" />, title: 'Day Trips', description: 'Weekend adventures from Batumi to Kazbegi with travel guides', href: '/daytrips', accent: 'group-hover:text-sky-500' },
    { icon: <Car className="h-6 w-6" />, title: 'Getting Around', description: 'Metro, buses, taxis, and everything about Tbilisi transport', href: '/transport', accent: 'group-hover:text-emerald-500' },
    { icon: <Home className="h-6 w-6" />, title: 'Housing & Rentals', description: 'Neighborhoods, apartments, and tips for finding your home', href: '/housing', accent: 'group-hover:text-violet-500' },
    { icon: <Users className="h-6 w-6" />, title: 'Georgian Culture', description: 'Traditions, customs, and cultural insights for expats', href: '/culture', accent: 'group-hover:text-amber-500' },
    { icon: <MessageCircle className="h-6 w-6" />, title: 'Learn Georgian', description: 'Interactive language lessons with pronunciation guides', href: '/language', accent: 'group-hover:text-pink-500', badge: 'Popular' },
    { icon: <Mountain className="h-6 w-6" />, title: 'Activities', description: 'Adventures and outdoor activities across Georgia', href: '/activities', accent: 'group-hover:text-teal-500' },
    { icon: <Bed className="h-6 w-6" />, title: 'Accommodation', description: 'Hotels, hostels, and short-term stays for new arrivals', href: '/accommodation', accent: 'group-hover:text-indigo-500' },
    { icon: <Dumbbell className="h-6 w-6" />, title: 'Sports & Fitness', description: 'Gyms, fitness centers, and sports clubs in Tbilisi', href: '/sports', accent: 'group-hover:text-yellow-500' },
    { icon: <Stethoscope className="h-6 w-6" />, title: 'Healthcare', description: 'Medical facilities, pharmacies, and health services', href: '/medical', accent: 'group-hover:text-red-500' },
    { icon: <Palette className="h-6 w-6" />, title: 'Arts & Museums', description: 'Galleries, theaters, and cultural venues', href: '/arts', accent: 'group-hover:text-cyan-500' },
    { icon: <BookOpen className="h-6 w-6" />, title: 'Expat Blog', description: 'In-depth guides covering all aspects of expat life', href: '/blog', accent: 'group-hover:text-gray-500' },
    { icon: <Zap className="h-6 w-6" />, title: 'Interactive Tools', description: 'Cost calculator, neighborhood comparison, and more', href: '/tools', accent: 'group-hover:text-purple-500', badge: 'New' },
    { icon: <Target className="h-6 w-6" />, title: 'Emergency & Safety', description: 'Emergency contacts, safety tips, and embassy info', href: '/emergency', accent: 'group-hover:text-red-600' },
    { icon: <Globe className="h-6 w-6" />, title: 'Legal & Visas', description: 'Visa requirements, taxes, and official procedures', href: '/legal', accent: 'group-hover:text-blue-600' },
    { icon: <ShoppingBag className="h-6 w-6" />, title: 'Shopping', description: 'Markets, malls, tech stores, and specialty shops', href: '/shopping', accent: 'group-hover:text-rose-500', badge: 'New' },
  ]

  const highlights = [
    { icon: <Wine className="h-5 w-5" />, stat: '8,000+', label: 'Years of winemaking tradition' },
    { icon: <Sun className="h-5 w-5" />, stat: '250+', label: 'Sunny days per year' },
    { icon: <Music className="h-5 w-5" />, stat: 'UNESCO', label: 'Polyphonic singing heritage' },
    { icon: <MapPin className="h-5 w-5" />, stat: '#1', label: 'Digital nomad destination' },
  ]

  return (
    <div className="min-h-screen">
      {searchFeedback && (
        <div className="fixed top-20 right-4 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl z-[100] animate-fade-in text-sm" role="status" aria-live="polite">
          {searchFeedback}
        </div>
      )}

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 georgian-pattern opacity-[0.03]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <p className="font-georgian text-2xl md:text-3xl text-red-300/80 mb-4 animate-fade-in">
            მოგესალმებით თბილისში
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-in-up">
            Your guide to life in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-300 to-yellow-300">
              Tbilisi
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.15s' }}>
            Everything you need for moving to Georgia — restaurants, housing, language, culture, and the things nobody tells you.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-10 animate-slide-in-up" style={{ animationDelay: '0.25s' }}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={heroSearchQuery}
                onChange={(e) => setHeroSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleHeroSearch()}
                className="w-full pl-12 pr-28 py-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400/50 focus:border-red-400/50 text-base transition-all"
                placeholder="Search anything — restaurants, visas, neighborhoods..."
                aria-label="Search the expat guide"
              />
              <button
                onClick={handleHeroSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
              >
                Search
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {['Restaurants', 'Metro guide', 'Neighborhoods', 'Learn Georgian', 'Visa info'].map((s) => (
                <button
                  key={s}
                  onClick={() => { setHeroSearchQuery(s); performHeroSearch(s) }}
                  className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-3 justify-center animate-slide-in-up" style={{ animationDelay: '0.35s' }}>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm px-5 py-3 rounded-xl transition-all group"
              >
                <span className={`p-1.5 rounded-lg ${link.color}`}>{link.icon}</span>
                <span className="text-sm font-medium text-gray-200 group-hover:text-white">{link.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-gray-500 group-hover:text-gray-300 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlights strip ── */}
      <section className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-red-50 text-red-500 dark:bg-red-900/20 dark:text-red-400">
                  {h.icon}
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{h.stat}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{h.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Widgets ── */}
      <section className="py-10 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <ClientOnlyWrapper fallback={<div className="h-64 shimmer rounded-2xl" />}>
              <WeatherWidget />
            </ClientOnlyWrapper>
            <ClientOnlyWrapper fallback={<div className="h-64 shimmer rounded-2xl" />}>
              <CurrencyConverter />
            </ClientOnlyWrapper>
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Everything you need</h2>
            <p className="section-subheading">
              From your first day to feeling at home — guides, tools, and local knowledge.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <Link
                key={i}
                href={feature.href}
                className="group card card-hover p-5 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between">
                  <div className={`p-2.5 rounded-xl bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 transition-colors ${feature.accent}`}>
                    {feature.icon}
                  </div>
                  {'badge' in feature && feature.badge && (
                    <span className="badge bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-auto pt-2">
                  <span className="text-sm font-medium text-gray-400 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors flex items-center gap-1">
                    Explore <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 badge bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Built by an expat, for expats
          </div>
          <h2 className="section-heading mb-4">Ready to make Tbilisi home?</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Start with the essentials — find a neighborhood, learn some Georgian, and discover your new favorite restaurant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/moving-checklist" className="btn-accent">
              <Target className="h-4 w-4" />
              Moving checklist
            </Link>
            <Link href="/neighborhoods" className="btn-secondary">
              <MapPin className="h-4 w-4" />
              Explore neighborhoods
            </Link>
            <Link href="/blog" className="btn-secondary">
              <BookOpen className="h-4 w-4" />
              Read the blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
