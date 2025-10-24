'use client'

import { useState, useRef, useEffect } from 'react'
import { Bot, Send, X, Minimize2, Maximize2, MessageCircle, Sparkles, Clock, Star } from 'lucide-react'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  confidence?: number
  suggestions?: string[]
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Stew's AI assistant for Tbilisi. I can help you with restaurants, transport, culture, activities, and more. What would you like to know?",
      isBot: true,
      timestamp: new Date('2024-01-01'),
      confidence: 100,
      suggestions: [
        "Best Georgian restaurants",
        "How to use metro",
        "Cultural etiquette tips",
        "Weekend activities"
      ]
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Simulated AI responses
  const getAIResponse = (userMessage: string): Message => {
    const responses = {
      restaurant: {
        text: "🍽️ For Georgian cuisine, I highly recommend Shavi Lomi for traditional dishes, or Cafe Littera for upscale dining. For international food, try Funicular Restaurant Complex. I can also suggest places based on your budget, dietary needs, or preferred atmosphere. What type of dining experience are you looking for?",
        confidence: 95,
        suggestions: ["Vegetarian options", "Budget restaurants", "Fine dining", "Traditional Georgian", "Romantic dinner spots", "Family-friendly places"]
      },
      metro: {
        text: "🚇 Tbilisi metro is easy to use! Buy a transport card for 2 GEL, then rides cost 1 GEL each. There are 2 lines: Akhmeteli-Varketili (red) and Saburtalo (blue). Key stations include Rustaveli, Freedom Square, and Marjanishvili. Operating hours: 6 AM - 12 AM. Pro tip: Download the Tbilisi Transport app for real-time updates!",
        confidence: 98,
        suggestions: ["Transport card locations", "Metro map", "Bus connections", "Airport transport", "Night transport options", "Accessibility features"]
      },
      culture: {
        text: "🇬🇪 Georgian culture values hospitality highly! Key tips: always accept food/drink offers, participate in toasts at supra (feasts), dress modestly in churches, and show respect to elders. Georgians are very welcoming to foreigners who show interest in their culture. Learning even basic Georgian phrases will earn you instant respect!",
        confidence: 92,
        suggestions: ["Supra etiquette", "Religious customs", "Language basics", "Gift giving", "Business culture", "Dating customs"]
      },
      activities: {
        text: "🏔️ Tbilisi offers amazing activities! Try hiking Mtatsminda or Turtle Lake, visit Narikala Fortress, explore the sulfur baths, take a day trip to Mtskheta, or enjoy wine tasting in Kakheti region. For adventure seekers, there's paragliding, white-water rafting, and skiing in winter. What type of activities interest you most?",
        confidence: 90,
        suggestions: ["Outdoor activities", "Cultural sites", "Day trips", "Nightlife", "Adventure sports", "Seasonal activities"]
      },
      default: {
        text: "👋 I can help you with information about restaurants, transport, culture, activities, housing, language learning, healthcare, banking, and much more in Tbilisi! I'm here 24/7 to make your expat journey smoother. Could you be more specific about what you'd like to know?",
        confidence: 85,
        suggestions: ["Restaurants", "Transport", "Culture", "Activities", "Housing", "Language", "Healthcare", "Banking", "Emergency info", "Weather"]
      },
      housing: {
        text: "🏠 For housing in Tbilisi, popular expat areas include Vake (upscale, quiet), Saburtalo (modern, affordable), and Old Town (historic, central). Rent ranges from $300-800/month for 1-2 bedrooms. I recommend using ss.ge, myhome.ge, or Facebook groups. Always visit in person before signing!",
        confidence: 93,
        suggestions: ["Best neighborhoods", "Rental websites", "Lease agreements", "Utilities setup", "Furniture shopping", "Real estate agents"]
      },
      language: {
        text: "🗣️ Learning Georgian is challenging but rewarding! Start with basic phrases, learn the unique alphabet (33 letters), and practice with locals who are very patient with learners. Try language exchange meetups, online apps like Ling or Drops, or formal classes at TLG or universities.",
        confidence: 88,
        suggestions: ["Basic phrases", "Georgian alphabet", "Language schools", "Language exchange", "Online resources", "Practice tips"]
      },
      healthcare: {
        text: "🏥 Georgia has good healthcare! Get insurance (local or international). Major hospitals: Aversi Clinic, New Hospitals, Acad. Kipshidze. Emergency: 112. Many doctors speak English. Pharmacies (Aversi, PSP) are everywhere. Dental care is excellent and affordable.",
        confidence: 91,
        suggestions: ["Health insurance", "English-speaking doctors", "Emergency contacts", "Pharmacies", "Dental care", "Vaccinations"]
      }
    }

    const lowerMessage = userMessage.toLowerCase()
    let response = responses.default

    if (lowerMessage.includes('restaurant') || lowerMessage.includes('food') || lowerMessage.includes('eat') || lowerMessage.includes('dining') || lowerMessage.includes('meal')) {
      response = responses.restaurant
    } else if (lowerMessage.includes('metro') || lowerMessage.includes('transport') || lowerMessage.includes('bus') || lowerMessage.includes('taxi') || lowerMessage.includes('travel')) {
      response = responses.metro
    } else if (lowerMessage.includes('culture') || lowerMessage.includes('tradition') || lowerMessage.includes('custom') || lowerMessage.includes('etiquette') || lowerMessage.includes('supra')) {
      response = responses.culture
    } else if (lowerMessage.includes('activity') || lowerMessage.includes('do') || lowerMessage.includes('visit') || lowerMessage.includes('fun') || lowerMessage.includes('adventure')) {
      response = responses.activities
    } else if (lowerMessage.includes('house') || lowerMessage.includes('housing') || lowerMessage.includes('apartment') || lowerMessage.includes('rent') || lowerMessage.includes('neighborhood')) {
      response = responses.housing
    } else if (lowerMessage.includes('language') || lowerMessage.includes('georgian') || lowerMessage.includes('learn') || lowerMessage.includes('speak') || lowerMessage.includes('alphabet')) {
      response = responses.language
    } else if (lowerMessage.includes('health') || lowerMessage.includes('medical') || lowerMessage.includes('doctor') || lowerMessage.includes('hospital') || lowerMessage.includes('insurance')) {
      response = responses.healthcare
    }

    return {
      id: `ai-${Date.now()}`,
      text: response.text,
      isBot: true,
      timestamp: new Date(),
      confidence: response.confidence,
      suggestions: response.suggestions
    }
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = getAIResponse(inputText)
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isClient) {
    return null
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          S
        </div>
      </button>
    )
  }

  return (
    <div className={`fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
    }`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-white/20 p-2 rounded-lg mr-3">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold">Stew's Tbilisi Assistant</h3>
            <div className="flex items-center text-xs text-blue-100">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
              Online • Avg response &lt;2s
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white/80 hover:text-white transition-colors"
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.isBot 
                    ? 'bg-gray-100 text-gray-800' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  {message.isBot && message.confidence && (
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <Star className="h-3 w-3 mr-1" />
                      <span>{message.confidence}% confidence</span>
                      <Clock className="h-3 w-3 ml-2 mr-1" />
                      <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                  )}
                  {message.suggestions && (
                    <div className="mt-3 space-y-1">
                      {message.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="block w-full text-left text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask Stew anything about Tbilisi..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute right-3 top-2">
                  <Sparkles className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              🤖 Stew's AI-powered responses • Available 24/7
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default AIChatbot