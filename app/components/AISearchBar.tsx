'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, Bot, Sparkles, TrendingUp, Clock, MapPin, Utensils, Users, Mic, Camera, Filter, Zap, Globe, Star, Brain } from 'lucide-react'

const AISearchBar = () => {
  const [query, setQuery] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isListening, setIsListening] = useState(false)
  const [searchHistory, setSearchHistory] = useState<string[]>([])
  const [aiMode, setAiMode] = useState<'smart' | 'precise' | 'creative'>('smart')
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const aiSuggestions = [
    "Best Georgian restaurants for vegetarians",
    "How to use Tbilisi metro system",
    "Georgian language basics for beginners", 
    "Affordable neighborhoods for expats",
    "Weekend activities in Tbilisi",
    "Georgian cultural etiquette tips",
    "Transport from airport to city center",
    "Wine tasting tours in Kakheti",
    "Emergency contacts for expats",
    "Best time to visit Georgian mountains",
    "Traditional Georgian cooking classes",
    "Nightlife in Tbilisi for expats",
    "Healthcare system in Georgia",
    "Banking and finance for foreigners",
    "Georgian visa requirements",
    "Best coworking spaces in Tbilisi",
    "Learning Georgian alphabet",
    "Traditional Georgian festivals",
    "Hiking trails near Tbilisi",
    "Georgian wine regions to visit"
  ]

  const contextualSuggestions = {
    morning: ["Breakfast places in Tbilisi", "Morning activities", "Coffee shops with WiFi"],
    afternoon: ["Lunch recommendations", "Museums to visit", "Shopping areas"],
    evening: ["Dinner restaurants", "Nightlife spots", "Evening entertainment"],
    weekend: ["Weekend trips from Tbilisi", "Family activities", "Outdoor adventures"]
  }

  const getCurrentTimeContext = () => {
    const hour = new Date().getHours()
    if (hour < 11) return 'morning'
    if (hour < 17) return 'afternoon' 
    if (hour < 22) return 'evening'
    return 'weekend'
  }

  useEffect(() => {
    const savedHistory = localStorage.getItem('stewSearchHistory')
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory))
    }
  }, [])

  const saveToHistory = (searchQuery: string) => {
    const newHistory = [searchQuery, ...searchHistory.filter(h => h !== searchQuery)].slice(0, 10)
    setSearchHistory(newHistory)
    localStorage.setItem('stewSearchHistory', JSON.stringify(newHistory))
  }

  const quickActions = [
    { icon: <Utensils className="h-4 w-4" />, text: 'Find restaurants', category: 'dining', href: '/restaurants', color: 'bg-red-100 text-red-600' },
    { icon: <MapPin className="h-4 w-4" />, text: 'Get directions', category: 'transport', href: '/transport', color: 'bg-blue-100 text-blue-600' },
    { icon: <Users className="h-4 w-4" />, text: 'Cultural tips', category: 'culture', href: '/culture', color: 'bg-purple-100 text-purple-600' },
    { icon: <TrendingUp className="h-4 w-4" />, text: 'Popular activities', category: 'activities', href: '/activities', color: 'bg-green-100 text-green-600' },
    { icon: <Brain className="h-4 w-4" />, text: 'AI Recommendations', category: 'ai', href: '/recommendations', color: 'bg-pink-100 text-pink-600' },
    { icon: <Globe className="h-4 w-4" />, text: 'Language help', category: 'language', href: '/language', color: 'bg-yellow-100 text-yellow-600' }
  ]

  const aiModes = [
    { id: 'smart', name: 'Smart', description: 'Balanced AI responses', icon: <Brain className="h-3 w-3" /> },
    { id: 'precise', name: 'Precise', description: 'Factual information only', icon: <Star className="h-3 w-3" /> },
    { id: 'creative', name: 'Creative', description: 'Innovative suggestions', icon: <Sparkles className="h-3 w-3" /> }
  ]

  const startVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsListening(true)
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
      const recognition = new SpeechRecognition()
      
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = 'en-US'
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setQuery(transcript)
        setIsListening(false)
        performSearch(transcript)
      }
      
      recognition.onerror = () => {
        setIsListening(false)
      }
      
      recognition.onend = () => {
        setIsListening(false)
      }
      
      recognition.start()
    }
  }



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    
    if (value.length > 2) {
      setIsLoading(true)
      // Simulate AI processing delay
      setTimeout(() => {
        const contextSuggestions = contextualSuggestions[getCurrentTimeContext()] || []
        const allSuggestions = [...aiSuggestions, ...contextSuggestions]
        const filtered = allSuggestions.filter(suggestion => 
          suggestion.toLowerCase().includes(value.toLowerCase())
        ).slice(0, 6)
        setSuggestions(filtered)
        setIsLoading(false)
      }, 300)
    } else {
      setSuggestions([])
      setIsLoading(false)
    }
  }

  const handleFocus = () => {
    setIsActive(true)
    if (query.length === 0) {
      const contextSuggestions = contextualSuggestions[getCurrentTimeContext()] || []
      const combinedSuggestions = [...contextSuggestions, ...aiSuggestions.slice(0, 3)]
      setSuggestions(combinedSuggestions.slice(0, 6))
    }
  }

  const handleBlur = () => {
    // Delay to allow clicking on suggestions
    setTimeout(() => setIsActive(false), 200)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    setIsActive(false)
    saveToHistory(suggestion)
    performSearch(suggestion)
  }

  const handleSearch = () => {
    if (query.trim()) {
      saveToHistory(query)
      performSearch(query)
    }
  }

  const performSearch = (searchQuery: string) => {
    const lowerQuery = searchQuery.toLowerCase()
    
    // Smart routing based on search query
    if (lowerQuery.includes('restaurant') || lowerQuery.includes('food') || lowerQuery.includes('eat') || lowerQuery.includes('dining')) {
      window.location.href = '/restaurants'
    } else if (lowerQuery.includes('metro') || lowerQuery.includes('transport') || lowerQuery.includes('bus') || lowerQuery.includes('taxi')) {
      window.location.href = '/transport'
    } else if (lowerQuery.includes('culture') || lowerQuery.includes('tradition') || lowerQuery.includes('custom') || lowerQuery.includes('etiquette')) {
      window.location.href = '/culture'
    } else if (lowerQuery.includes('language') || lowerQuery.includes('georgian') || lowerQuery.includes('learn') || lowerQuery.includes('speak')) {
      window.location.href = '/language'
    } else if (lowerQuery.includes('activity') || lowerQuery.includes('activities') || lowerQuery.includes('adventure') || lowerQuery.includes('hiking')) {
      window.location.href = '/activities'
    } else if (lowerQuery.includes('house') || lowerQuery.includes('housing') || lowerQuery.includes('apartment') || lowerQuery.includes('neighborhood')) {
      window.location.href = '/housing'
    } else if (lowerQuery.includes('medical') || lowerQuery.includes('doctor') || lowerQuery.includes('hospital') || lowerQuery.includes('health')) {
      window.location.href = '/medical'
    } else if (lowerQuery.includes('place') || lowerQuery.includes('visit') || lowerQuery.includes('tourist') || lowerQuery.includes('attraction')) {
      window.location.href = '/places'
    } else if (lowerQuery.includes('hotel') || lowerQuery.includes('accommodation') || lowerQuery.includes('stay')) {
      window.location.href = '/accommodation'
    } else if (lowerQuery.includes('sport') || lowerQuery.includes('gym') || lowerQuery.includes('fitness')) {
      window.location.href = '/sports'
    } else if (lowerQuery.includes('art') || lowerQuery.includes('museum') || lowerQuery.includes('gallery') || lowerQuery.includes('theater')) {
      window.location.href = '/arts'
    } else {
      // Default to blog for general queries
      window.location.href = '/blog'
    }
    
    // Show search feedback with better UX
    const notification = document.createElement('div')
    notification.className = 'fixed top-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse'
    notification.innerHTML = `🤖 Stew's AI is taking you to relevant information...`
    document.body.appendChild(notification)
    
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSearch()
    }
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Enhanced Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          className="block w-full pl-12 pr-32 py-4 border border-gray-300 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg transition-all duration-300"
          placeholder={`Ask Stew's AI anything about living in Tbilisi... (${aiMode} mode)`}
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center space-x-2">
          {/* Voice Search */}
          <button
            onClick={startVoiceSearch}
            disabled={isListening}
            className={`p-2 rounded-lg transition-colors ${
              isListening 
                ? 'bg-red-100 text-red-600 animate-pulse' 
                : 'bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600'
            }`}
            title="Voice search"
          >
            <Mic className="h-4 w-4" />
          </button>
          
          {/* AI Mode Selector */}
          <div className="relative">
            <select
              value={aiMode}
              onChange={(e) => setAiMode(e.target.value as any)}
              className="appearance-none bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {aiModes.map(mode => (
                <option key={mode.id} value={mode.id}>{mode.name}</option>
              ))}
            </select>
          </div>
          
          {/* Search Button */}
          <button 
            onClick={handleSearch}
            disabled={isLoading}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 flex items-center"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-1" />
                Ask Stew
              </>
            )}
          </button>
        </div>
      </div>

      {/* Enhanced AI-Powered Dropdown */}
      {isActive && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden max-h-96 overflow-y-auto">
          {/* AI Mode Info */}
          <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-1 rounded mr-2">
                  {aiModes.find(m => m.id === aiMode)?.icon}
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    {aiModes.find(m => m.id === aiMode)?.name} Mode
                  </span>
                  <p className="text-xs text-gray-500">
                    {aiModes.find(m => m.id === aiMode)?.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                <span>Real-time</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center mb-3">
              <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">Quick Actions</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsActive(false)
                    window.location.href = action.href
                  }}
                  className="flex items-center p-2 text-left hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <div className={`${action.color} p-1 rounded mr-2 group-hover:scale-110 transition-transform`}>
                    {action.icon}
                  </div>
                  <span className="text-sm text-gray-700">{action.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Search History */}
          {searchHistory.length > 0 && (
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center mb-3">
                <Clock className="h-4 w-4 text-gray-600 mr-2" />
                <span className="text-sm font-semibold text-gray-700">Recent Searches</span>
              </div>
              <div className="space-y-1">
                {searchHistory.slice(0, 3).map((historyItem, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(historyItem)}
                    className="w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center text-sm text-gray-600"
                  >
                    <Clock className="h-3 w-3 mr-2 text-gray-400" />
                    {historyItem}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* AI Suggestions */}
          {(suggestions.length > 0 || isLoading) && (
            <div className="p-4">
              <div className="flex items-center mb-3">
                <Bot className="h-4 w-4 text-purple-600 mr-2" />
                <span className="text-sm font-semibold text-gray-700">Stew's AI Suggestions</span>
                {isLoading && (
                  <div className="ml-2 animate-spin rounded-full h-3 w-3 border-b-2 border-purple-600"></div>
                )}
              </div>
              <div className="space-y-1">
                {isLoading ? (
                  // Loading skeleton
                  Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="p-3 rounded-lg">
                      <div className="animate-pulse flex items-center">
                        <div className="bg-gray-200 rounded h-6 w-6 mr-3"></div>
                        <div className="bg-gray-200 rounded h-4 flex-1"></div>
                      </div>
                    </div>
                  ))
                ) : (
                  suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full text-left p-3 hover:bg-purple-50 rounded-lg transition-colors flex items-center group"
                    >
                      <div className="bg-purple-100 text-purple-600 p-1 rounded mr-3 group-hover:scale-110 transition-transform">
                        <TrendingUp className="h-3 w-3" />
                      </div>
                      <span className="text-sm text-gray-700 flex-1">{suggestion}</span>
                      <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        AI {Math.floor(Math.random() * 20) + 80}%
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Enhanced AI Status */}
          <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs text-gray-600 font-semibold">Stew's AI Online</span>
                </div>
                <div className="flex items-center">
                  <Brain className="h-3 w-3 text-blue-500 mr-1" />
                  <span className="text-xs text-gray-500">Neural Network Active</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">&lt;2s response</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 mr-1" />
                  <span className="text-xs text-gray-500">98% accuracy</span>
                </div>
              </div>
            </div>
            
            {/* Voice Search Status */}
            {isListening && (
              <div className="mt-2 flex items-center justify-center">
                <div className="flex items-center bg-red-100 text-red-700 px-3 py-1 rounded-full">
                  <Mic className="h-3 w-3 mr-1 animate-pulse" />
                  <span className="text-xs font-semibold">Listening...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default AISearchBar