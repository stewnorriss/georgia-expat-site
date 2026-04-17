'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { X, MapPin, ChevronDown, Search } from 'lucide-react'
import AISearchBar from './AISearchBar'
import ThemeToggle from './ThemeToggle'

const CategoryDropdown = ({ category }: { category: any }) => {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [isOpen])

  const open = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const scheduleClose = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150)
  }

  return (
    <div 
      ref={dropdownRef}
      className="relative"
      onMouseEnter={open}
      onMouseLeave={scheduleClose}
    >
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(!isOpen)
          }
          if (e.key === 'Escape') setIsOpen(false)
        }}
        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-2 py-2 text-sm font-medium transition-colors"
      >
        <span className="mr-1.5" aria-hidden="true">{category.icon}</span>
        <span>{category.title}</span>
        <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform text-gray-400 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      {/* Invisible bridge to prevent gap-close */}
      {isOpen && <div className="absolute left-0 right-0 h-2 top-full" />}
      <div
        role="menu"
        aria-label={`${category.title} submenu`}
        onMouseEnter={open}
        onMouseLeave={scheduleClose}
        className={`absolute left-0 top-full mt-1 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 transition-all duration-150 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
        }`}
      >
        <div className="p-2">
          <div className="space-y-0.5">
            {category.items.map((item: any) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setIsOpen(false)
                }}
              >
                <div className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-red-600 dark:group-hover:text-red-400 text-sm">
                  {item.label}
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                  {item.description}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showAISearch, setShowAISearch] = useState(false)

  const mainNavItems = [
    { href: '/', label: 'Home' },
    { href: '/neighborhoods', label: 'Neighborhoods' },
    { href: '/events', label: 'Events' },
    { href: '/blog', label: 'Blog' },
  ]

  const navigationCategories = [
    {
      title: 'Explore & Eat',
      icon: '🍽️',
      items: [
        { href: '/restaurants', label: 'Restaurants & Dining', description: 'Best places to eat in Tbilisi' },
        { href: '/places', label: 'Places to Visit', description: 'Tourist attractions & hidden gems' },
        { href: '/nightlife', label: 'Nightlife & Entertainment', description: 'Bars, clubs, live music & karaoke' },
        { href: '/accommodation', label: 'Hotels & Stays', description: 'Where to stay in the city' },
        { href: '/activities', label: 'Adventures & Activities', description: 'Things to do and experiences' },
        { href: '/daytrips', label: 'Day Trips & Getaways', description: 'Weekend adventures from Tbilisi' },
        { href: '/shopping', label: 'Shopping & Retail', description: 'Supermarkets, tech, books & specialty stores' },
      ]
    },
    {
      title: 'Living Essentials',
      icon: '🏠',
      items: [
        { href: '/housing', label: 'Housing & Rentals', description: 'Find your perfect home' },
        { href: '/jobs', label: 'Jobs & Remote Work', description: 'Remote work, freelancing & digital nomad visa' },
        { href: '/transport', label: 'Getting Around', description: 'Transportation options' },
        { href: '/medical', label: 'Healthcare & Medical', description: 'Medical services & hospitals' },
        { href: '/banking', label: 'Banking & Finance', description: 'Banks, transfers & money management' },
        { href: '/internet', label: 'Internet & Mobile', description: 'WiFi, SIM cards & connectivity' },
        { href: '/legal', label: 'Legal & Bureaucracy', description: 'Visas, taxes & official procedures' },
      ]
    },
    {
      title: 'Culture & Learning',
      icon: '🎭',
      items: [
        { href: '/culture', label: 'Georgian Culture', description: 'Traditions, customs & history' },
        { href: '/language', label: 'Learn Georgian', description: 'Interactive language lessons' },
        { href: '/arts', label: 'Arts & Museums', description: 'Cultural venues & exhibitions' },
        { href: '/sports', label: 'Sports & Fitness', description: 'Gyms, sports & outdoor activities' },
      ]
    },
    {
      title: 'Tools & Resources',
      icon: '🛠️',
      items: [
        { href: '/cost-calculator', label: 'Cost Calculator', description: 'Estimate your monthly budget' },
        { href: '/currency', label: 'Currency Converter', description: 'Live GEL exchange rates' },
        { href: '/moving-checklist', label: 'Moving Checklist', description: 'Step-by-step relocation guide' },
        { href: '/videos', label: 'Video Guides', description: 'Visual tours and tutorials' },
        { href: '/faq', label: 'FAQ', description: 'Frequently asked questions' },
        { href: '/emergency', label: 'Emergency & Safety', description: 'Emergency contacts & safety tips' },
      ]
    }
  ]

  return (
    <nav aria-label="Main navigation" className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl fixed top-10 left-0 right-0 z-50 border-b border-gray-200/60 dark:border-gray-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="bg-red-600 p-1.5 rounded-lg">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-base tracking-tight">
                Tbilisi <span className="font-normal text-gray-500 dark:text-gray-400">Expat Guide</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                {item.label}
              </Link>
            ))}

            {/* Category Dropdowns */}
            {navigationCategories.map((category) => (
              <CategoryDropdown 
                key={category.title}
                category={category}
              />
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Search Button */}
            <button
              onClick={() => setShowAISearch(!showAISearch)}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-1.5 text-sm font-medium transition-colors rounded-lg ml-2"
            >
              <Search className="h-4 w-4 mr-1.5" />
              <span>Search</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setShowAISearch(!showAISearch)}
              aria-label="Search"
              className="text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 p-2 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5" aria-hidden="true">
                <span className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-6 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            {/* Main Navigation Items */}
            <div className="space-y-1 mb-4">
              {mainNavItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Category Groups */}
            {navigationCategories.map((category, groupIndex) => (
              <div key={category.title} className="mb-4">
                <div className="flex items-center px-4 py-2">
                  <span className="text-lg mr-2">{category.icon}</span>
                  <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-start px-6 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors ml-2"
                      onClick={() => setIsOpen(false)}
                      style={{ animationDelay: `${(mainNavItems.length + groupIndex * 3 + itemIndex) * 50}ms` }}
                    >
                      <div className="flex-1">
                        <div className="font-semibold">{item.label}</div>
                        <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {showAISearch && (
        <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 shadow-xl z-40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                Search the guide
              </h3>
              <button
                onClick={() => setShowAISearch(false)}
                aria-label="Close search"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <AISearchBar />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation