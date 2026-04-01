'use client'

import { useState } from 'react'
import { Phone, X, ChevronDown, ChevronUp } from 'lucide-react'

const EmergencyBanner = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const emergencyContacts = [
    { name: 'Emergency', number: '112', description: 'Police, Fire, Ambulance' },
    { name: 'Police', number: '022', description: 'Direct police line' },
    { name: 'Ambulance', number: '113', description: 'Medical emergency' },
    { name: 'Fire', number: '111', description: 'Fire emergency' },
    { name: 'Tourist Police', number: '+995 322 2 72 72 72', description: 'English-speaking' },
  ]

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-400">Emergency:</span>
            <a href="tel:112" className="font-semibold text-red-400 hover:text-red-300 transition-colors flex items-center gap-1">
              <Phone className="h-3 w-3" /> 112
            </a>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-gray-400 hover:text-white px-2 py-1 rounded transition-colors flex items-center gap-1"
            >
              {isExpanded ? 'Less' : 'All contacts'}
              {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-300 p-1 rounded transition-colors"
              aria-label="Close emergency banner"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="pb-3 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 pt-3">
              {emergencyContacts.map((contact, i) => (
                <a
                  key={i}
                  href={`tel:${contact.number.replace(/\s/g, '')}`}
                  className="bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-2 transition-colors text-center"
                >
                  <div className="text-xs text-gray-400">{contact.name}</div>
                  <div className="font-semibold text-sm">{contact.number}</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EmergencyBanner
