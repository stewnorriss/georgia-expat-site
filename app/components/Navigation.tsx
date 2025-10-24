'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, MapPin, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const mainNavItems = [
    { href: '/', label: 'Home' },
    { href: '/restaurants', label: 'Restaurants' },
    { href: '/places', label: 'Places' },
    { href: '/transport', label: 'Transport' },
    { href: '/housing', label: 'Housing' },
    { href: '/blog', label: 'Blog' },
  ]

  const dropdownGroups = [
    {
      title: 'Culture & Language',
      items: [
        { href: '/culture', label: 'Georgian Culture' },
        { href: '/language', label: 'Learn Georgian' },
        { href: '/arts', label: 'Arts & Museums' },
      ]
    },
    {
      title: 'Activities & Lifestyle',
      items: [
        { href: '/activities', label: 'Adventures' },
        { href: '/sports', label: 'Sports & Fitness' },
        { href: '/accommodation', label: 'Hotels & Stays' },
      ]
    },
    {
      title: 'Essential Services',
      items: [
        { href: '/medical', label: 'Healthcare' },
      ]
    }
  ]

  // Flatten for mobile menu
  const allNavItems = [
    ...mainNavItems,
    ...dropdownGroups.flatMap(group => group.items)
  ]

  return (
    <nav className="bg-gradient-to-r from-white via-gray-50 to-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <MapPin className="h-10 w-10 text-red-600 group-hover:text-red-700 transition-colors duration-200" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                  Tbilisi Expat Guide
                </span>
                <span className="text-xs text-gray-500 font-medium">Your Gateway to Georgia</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-700 hover:text-red-600 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg hover:bg-red-50 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
            ))}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-red-600 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg hover:bg-red-50 group">
                More
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${
                isDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <div className="py-3">
                  {dropdownGroups.map((group, groupIndex) => (
                    <div key={group.title} className={`${groupIndex > 0 ? 'border-t border-gray-100 pt-3' : ''}`}>
                      <div className="px-4 py-2">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                          {group.title}
                        </h3>
                        <div className="space-y-1">
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-red-600 rounded-lg transition-all duration-200 group"
                            >
                              <span className="w-2 h-2 bg-red-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                              {item.label}
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
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-gray-700 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all duration-200"
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
          <div className="px-2 pt-2 pb-6 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
            {/* Main Navigation Items */}
            <div className="space-y-1 mb-4">
              {mainNavItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-lg transition-all duration-200 group"
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
                <h3 className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {group.title}
                </h3>
                <div className="space-y-1">
                  {group.items.map((item, itemIndex) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center px-6 py-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-lg transition-all duration-200 group ml-2"
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
    </nav>
  )
}

export default Navigation