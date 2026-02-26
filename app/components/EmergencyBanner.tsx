'use client'

import { useState } from 'react'
import { Phone, X, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react'

const EmergencyBanner = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const emergencyContacts = [
    { name: 'Emergency Services', number: '112', description: 'Police, Fire, Ambulance' },
    { name: 'Police', number: '022', description: 'Direct police line' },
    { name: 'Ambulance', number: '113', description: 'Medical emergency' },
    { name: 'Fire Department', number: '111', description: 'Fire emergency' },
    { name: 'Tourist Police', number: '+995 322 2 72 72 72', description: 'English-speaking support' }
  ]

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-3">
            <AlertCircle className="h-5 w-5 animate-pulse" />
            <span className="font-semibold text-sm">Emergency Contacts</span>
            {!isExpanded && (
              <a 
                href="tel:112" 
                className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold hover:bg-red-50 transition-colors"
              >
                📞 112
              </a>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-1 bg-red-800 hover:bg-red-900 px-3 py-1 rounded-lg transition-colors text-sm"
            >
              <span>{isExpanded ? 'Hide' : 'Show All'}</span>
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="hover:bg-red-800 p-1 rounded transition-colors"
              aria-label="Close emergency banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="pb-4 pt-2 border-t border-red-500">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {emergencyContacts.map((contact, index) => (
                <a
                  key={index}
                  href={`tel:${contact.number.replace(/\s/g, '')}`}
                  className="bg-red-800 hover:bg-red-900 rounded-lg p-3 transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-bold text-sm mb-1">{contact.name}</div>
                      <div className="text-xs text-red-200 mb-2">{contact.description}</div>
                      <div className="flex items-center text-white font-bold">
                        <Phone className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                        {contact.number}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-3 text-xs text-red-200 text-center">
              💡 Tip: Save these numbers in your phone. Tourist Police speaks English!
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EmergencyBanner
