'use client'

import Link from 'next/link'
import { useState } from 'react'
import { X, MapPin, ChevronDown, Bot, Search, Sparkles, Zap } from 'lucide-react'
import AISearchBar from './AISearchBar'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [showAISearch, setShowAISearch] = useState(false)

  const mainNavItems = [
    { href: '/', label: 'Home' },
    { href: '/recommendations', label: 'Recommendations' },
    { href: '/restaurants', label: 'Restaurants' },
    { href: '/places', label: 'Places to Visit' },
    { href: '/accommodation', label: 'Hotels & Stays' },
    { href: '/blog', label: 'Blog' },
  ]

  const dropdownGroups = [
    {
      title: 'Living Essentials',
      items: [
        { href: '/transport', label: 'Getting Around' },
        { href: '/housing', label: 'Housing & Rentals' },
        { href: '/medical', label: 'Healthcare & Medical' },
        { href: '/currency', label: 'Currency & Banking' },
      ]
    },
    {
      title: 'Culture & Activities',
      items: [
        { href: '/culture', label: 'Georgian Culture' },
        { href: '/language', label: 'Learn Georgian' },
        { href: '/arts', label: 'Arts & Museums' },
        { href: '/activities', label: 'Adventures & Activities' },
        { href: '/sports', label: 'Sports & Fitness' },
      ]
    }
  ]

  return (
    <nav className="bg-gradient-to-r from-white/95 via-red-50/40 to-white/95 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-900/95 shadow-xl sticky top-0 z-50 border-b border-red-100/50 dark:border-gray-700/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 animate-logo-glow">
                  <MapPin className="h-6 w-6 text-white group-hover:animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl bg-gradient-to-r from-gray-900 via-red-700 to-gray-900 dark:from-white dark:via-red-400 dark:to-white bg-clip-text text-transparent group-hover:from-red-600 group-hover:via-red-500 group-hover:to-red-600 transition-all duration-300">
                  Stew's Guide To Tbilisi
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 dark:hover:from-red-900/20 dark:hover:to-pink-900/20 group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* AI Search Button */}
            <button
              onClick={() => setShowAISearch(!showAISearch)}
              className="flex items-center text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Search className="h-4 w-4 mr-2 relative z-10 group-hover:scale-110 transition-transform duration-200" />
              <span className="relative z-10">Stew's AI Search</span>
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse shadow-sm">
                <Sparkles className="h-2.5 w-2.5" />
              </div>
            </button>

            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 dark:hover:from-red-900/20 dark:hover:to-pink-900/20 group relative overflow-hidden">
                <span className="relative z-10">More</span>
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 relative z-10 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <div className={`absolute right-0 mt-2 w-80 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-red-100/50 dark:border-red-800/30 transition-all duration-300 ${
                isDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <div className="py-3">
                  {/* AI Features Section */}
                  <div className="px-4 py-3 border-b border-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800/30 dark:to-purple-800/30 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20">
                    <h3 className="text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider mb-3 flex items-center">
                      <Bot className="h-4 w-4 mr-2 text-blue-500" />
                      🤖 AI-Powered Features
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="/recommendations"
                        className="flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200 group"
                      >
                        <Sparkles className="h-4 w-4 mr-3 text-blue-500" />
                        Smart Recommendations
                        <span className="ml-auto text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full">New</span>
                      </Link>
                      <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200 group">
                        <Bot className="h-4 w-4 mr-3 text-purple-500" />
                        Stew's AI Assistant
                        <span className="ml-auto text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-0.5 rounded-full">24/7</span>
                      </button>
                      <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200 group">
                        <Zap className="h-4 w-4 mr-3 text-yellow-500" />
                        Personalized Content
                        <span className="ml-auto text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-0.5 rounded-full">AI</span>
                      </button>
                    </div>
                  </div>

                  {dropdownGroups.map((group) => (
                    <div key={group.title} className="border-t border-gray-100 dark:border-gray-700 pt-3">
                      <div className="px-4 py-2">
                        <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                          {group.title}
                        </h3>
                        <div className="space-y-1">
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 dark:hover:from-red-900/20 dark:hover:to-pink-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-all duration-200 group"
                            >
                              <span className="w-2 h-2 bg-red-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                              {item.label}
                              {/* AI Enhancement Badges */}
                              {item.href === '/language' && (
                                <span className="ml-auto text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-1.5 py-0.5 rounded">AI</span>
                              )}
                              {item.href === '/culture' && (
                                <span className="ml-auto text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-1.5 py-0.5 rounded">Enhanced</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setShowAISearch(!showAISearch)}
              className="text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 p-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 relative"
            >
              <Search className="h-4 w-4" />
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs rounded-full h-3 w-3 flex items-center justify-center">
                <Sparkles className="h-1.5 w-1.5" />
              </div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 p-2 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 dark:hover:from-red-900/20 dark:hover:to-pink-900/20 transition-all duration-200"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-6 bg-gradient-to-b from-white/95 via-red-50/30 to-gray-50/95 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-800/95 border-t border-red-100/50 dark:border-gray-700/80 backdrop-blur-xl">
            {/* Main Navigation Items */}
            <div className="space-y-1 mb-4">
              {mainNavItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 dark:hover:from-red-900/20 dark:hover:to-pink-900/20 rounded-lg transition-all duration-200 group"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Grouped Dropdown Items */}
            {dropdownGroups.map((group, groupIndex) => (
              <div key={group.title} className="mb-4">
                <h3 className="px-4 py-2 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {group.title}
                </h3>
                <div className="space-y-1">
                  {group.items.map((item, itemIndex) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center px-6 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 dark:hover:from-red-900/20 dark:hover:to-pink-900/20 rounded-lg transition-all duration-200 group ml-2"
                      onClick={() => setIsOpen(false)}
                      style={{ animationDelay: `${(mainNavItems.length + groupIndex * 3 + itemIndex) * 50}ms` }}
                    >
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Search Overlay */}
      {showAISearch && (
        <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-white/98 via-blue-50/40 to-white/98 dark:from-gray-900/98 dark:via-gray-800/98 dark:to-gray-900/98 backdrop-blur-xl backdrop-saturate-150 border-b border-blue-200/50 dark:border-gray-700/80 shadow-2xl z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-lg opacity-20"></div>
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-full shadow-lg">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Stew's AI-Powered Search
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ask anything about living in Tbilisi</p>
                </div>
                <span className="ml-3 text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full shadow-sm animate-pulse">
                  🚀 Beta
                </span>
              </div>
              <button
                onClick={() => setShowAISearch(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <AISearchBar />
            <div className="mt-6 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-3">
              <Sparkles className="h-4 w-4 mr-2 text-blue-500" />
              <span>🧠 Powered by advanced AI • Understands context and provides personalized results • Available 24/7</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation