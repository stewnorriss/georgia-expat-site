'use client'

import { useState, useRef, useEffect } from 'react'
import { Bot, Send, X, Minimize2, Maximize2, MessageCircle, Sparkles, Clock, Star, User, MapPin, Heart, Bookmark, Share2, ThumbsUp, ThumbsDown, RefreshCw, Mic, MicOff, Volume2, VolumeX } from 'lucide-react'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  confidence?: number
  suggestions?: string[]
  liked?: boolean
  bookmarked?: boolean
  category?: string
  relatedLinks?: { title: string; url: string }[]
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Stew's AI assistant for Tbilisi. I can help you with restaurants, transport, culture, activities, and more. I have access to real-time information and can provide personalized recommendations based on your preferences. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
      confidence: 100,
      category: 'greeting',
      suggestions: [
        "Best Georgian restaurants near me",
        "How to use Tbilisi metro system",
        "Cultural etiquette and customs",
        "Weekend activities and events",
        "Housing recommendations",
        "Emergency contacts and info"
      ],
      relatedLinks: [
        { title: "Stew's Restaurant Guide", url: "/restaurants" },
        { title: "Transport Guide", url: "/transport" },
        { title: "Cultural Tips", url: "/culture" }
      ]
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [userPreferences, setUserPreferences] = useState({
    language: 'en',
    interests: [] as string[],
    location: 'Tbilisi',
    budget: 'medium'
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognition = useRef<any>(null)
  const synthesis = useRef<any>(null)

  useEffect(() => {
    setIsClient(true)
    
    // Initialize speech recognition
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      recognition.current = new (window as any).webkitSpeechRecognition()
      recognition.current.continuous = false
      recognition.current.interimResults = false
      recognition.current.lang = 'en-US'
      
      recognition.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInputText(transcript)
        setIsListening(false)
      }
      
      recognition.current.onerror = () => {
        setIsListening(false)
      }
    }
    
    // Initialize speech synthesis
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthesis.current = window.speechSynthesis
    }
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Enhanced AI responses with personalization
  const getAIResponse = (userMessage: string): Message => {
    const responses = {
      restaurant: {
        text: "🍽️ Based on your location and preferences, I recommend these top spots: **Shavi Lomi** (traditional Georgian, ₾₾), **Cafe Littera** (upscale, ₾₾₾), or **Funicular Restaurant Complex** (international, ₾₾). I can provide real-time availability, reviews, and even help you make reservations. What's your preferred cuisine type and budget?",
        confidence: 95,
        category: 'restaurants',
        suggestions: ["Vegetarian Georgian food", "Budget under ₾20", "Fine dining experiences", "Traditional supra restaurants", "Romantic dinner spots", "Family-friendly places"],
        relatedLinks: [
          { title: "Full Restaurant Guide", url: "/restaurants" },
          { title: "Georgian Food Culture", url: "/culture" }
        ]
      },
      metro: {
        text: "🚇 **Tbilisi Metro Guide**: Get a transport card (₾2) at any station - rides cost ₾1. **Two lines**: Red (Akhmeteli-Varketili) & Blue (Saburtalo). **Key stations**: Rustaveli (city center), Freedom Square (old town), Marjanishvili (transport hub). **Hours**: 6 AM - 12 AM. **Real-time tip**: Current delays on Red line due to maintenance. Use Tbilisi Transport app for live updates!",
        confidence: 98,
        category: 'transport',
        suggestions: ["Where to buy transport cards", "Interactive metro map", "Bus route connections", "Airport transport options", "Night transport alternatives", "Accessibility features"],
        relatedLinks: [
          { title: "Complete Transport Guide", url: "/transport" },
          { title: "Getting Around Tbilisi", url: "/activities" }
        ]
      },
      culture: {
        text: "🇬🇪 **Georgian Hospitality Culture**: Georgians take pride in their legendary hospitality! **Essential etiquette**: Always accept food/drink offers (refusing is considered rude), participate in toasts at supra feasts, dress modestly in churches, show deep respect to elders. **Pro tip**: Learning just 'gamarjoba' (hello) and 'madloba' (thank you) will earn you instant smiles and respect!",
        confidence: 92,
        category: 'culture',
        suggestions: ["Supra feast etiquette", "Orthodox church customs", "Basic Georgian phrases", "Gift giving traditions", "Business meeting culture", "Dating and social customs"],
        relatedLinks: [
          { title: "Georgian Culture Guide", url: "/culture" },
          { title: "Learn Georgian Language", url: "/language" }
        ]
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

    // Simulate AI thinking time with more realistic delay
    setTimeout(() => {
      const aiResponse = getAIResponse(inputText)
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
      
      // Auto-speak response if speech is enabled
      if (synthesis.current && !synthesis.current.speaking) {
        speakMessage(aiResponse.text)
      }
    }, Math.random() * 1000 + 800) // 0.8-1.8s delay
  }

  const handleVoiceInput = () => {
    if (!recognition.current) return
    
    if (isListening) {
      recognition.current.stop()
      setIsListening(false)
    } else {
      recognition.current.start()
      setIsListening(true)
    }
  }

  const speakMessage = (text: string) => {
    if (!synthesis.current) return
    
    // Clean text for speech (remove emojis and markdown)
    const cleanText = text.replace(/[🍽️🚇🇬🇪🏔️🏠🗣️🏥👋]/g, '').replace(/\*\*/g, '')
    
    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.rate = 0.9
    utterance.pitch = 1
    utterance.volume = 0.8
    
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    
    synthesis.current.speak(utterance)
  }

  const toggleSpeech = () => {
    if (synthesis.current) {
      if (isSpeaking) {
        synthesis.current.cancel()
        setIsSpeaking(false)
      }
    }
  }

  const handleMessageAction = (messageId: string, action: 'like' | 'bookmark' | 'share') => {
    setMessages(prev => prev.map(msg => {
      if (msg.id === messageId) {
        switch (action) {
          case 'like':
            return { ...msg, liked: !msg.liked }
          case 'bookmark':
            return { ...msg, bookmarked: !msg.bookmarked }
          case 'share':
            // In a real app, this would open share dialog
            navigator.clipboard.writeText(msg.text)
            return msg
          default:
            return msg
        }
      }
      return msg
    }))
  }

  const regenerateResponse = (userMessage: string) => {
    setIsTyping(true)
    setTimeout(() => {
      const newResponse = getAIResponse(userMessage)
      newResponse.id = `ai-regen-${Date.now()}`
      setMessages(prev => [...prev, newResponse])
      setIsTyping(false)
    }, 1200)
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
            {messages.map((message, index) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className="max-w-xs lg:max-w-md">
                  <div className={`px-4 py-3 rounded-2xl ${
                    message.isBot 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        {message.isBot ? (
                          <Bot className="h-4 w-4 mr-2 text-blue-600" />
                        ) : (
                          <User className="h-4 w-4 mr-2 text-white" />
                        )}
                        <span className="text-xs font-semibold">
                          {message.isBot ? 'Stew\'s AI' : 'You'}
                        </span>
                      </div>
                      {message.category && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                          {message.category}
                        </span>
                      )}
                    </div>
                    
                    <div className="text-sm leading-relaxed" dangerouslySetInnerHTML={{
                      __html: message.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    }} />
                    
                    {message.isBot && (
                      <>
                        {/* AI Message Actions */}
                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-200">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => handleMessageAction(message.id, 'like')}
                              className={`flex items-center text-xs transition-colors ${
                                message.liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                              }`}
                            >
                              <Heart className={`h-3 w-3 mr-1 ${message.liked ? 'fill-current' : ''}`} />
                              {message.liked ? 'Liked' : 'Like'}
                            </button>
                            
                            <button
                              onClick={() => handleMessageAction(message.id, 'bookmark')}
                              className={`flex items-center text-xs transition-colors ${
                                message.bookmarked ? 'text-yellow-500' : 'text-gray-500 hover:text-yellow-500'
                              }`}
                            >
                              <Bookmark className={`h-3 w-3 mr-1 ${message.bookmarked ? 'fill-current' : ''}`} />
                              {message.bookmarked ? 'Saved' : 'Save'}
                            </button>
                            
                            <button
                              onClick={() => handleMessageAction(message.id, 'share')}
                              className="flex items-center text-xs text-gray-500 hover:text-blue-500 transition-colors"
                            >
                              <Share2 className="h-3 w-3 mr-1" />
                              Share
                            </button>
                            
                            <button
                              onClick={() => speakMessage(message.text)}
                              className="flex items-center text-xs text-gray-500 hover:text-green-500 transition-colors"
                            >
                              <Volume2 className="h-3 w-3 mr-1" />
                              Speak
                            </button>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            {message.confidence && (
                              <div className="flex items-center text-xs text-gray-500">
                                <Star className="h-3 w-3 mr-1" />
                                <span>{message.confidence}%</span>
                              </div>
                            )}
                            <button
                              onClick={() => regenerateResponse(messages[index - 1]?.text || '')}
                              className="text-xs text-gray-500 hover:text-blue-500 transition-colors"
                            >
                              <RefreshCw className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Related Links */}
                        {message.relatedLinks && (
                          <div className="mt-3 space-y-1">
                            <p className="text-xs text-gray-600 font-semibold">Related:</p>
                            {message.relatedLinks.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.url}
                                className="block text-xs text-blue-600 hover:text-blue-800 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                📖 {link.title}
                              </a>
                            ))}
                          </div>
                        )}
                        
                        {/* Suggestions */}
                        {message.suggestions && (
                          <div className="mt-3 space-y-1">
                            <p className="text-xs text-gray-600 font-semibold">Quick actions:</p>
                            <div className="grid grid-cols-2 gap-1">
                              {message.suggestions.slice(0, 4).map((suggestion, suggestionIndex) => (
                                <button
                                  key={suggestionIndex}
                                  onClick={() => handleSuggestionClick(suggestion)}
                                  className="text-left text-xs bg-white/50 hover:bg-white/70 px-2 py-1 rounded transition-colors border border-gray-200"
                                >
                                  {suggestion}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                    
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                      <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                  </div>
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
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={isListening ? "Listening..." : "Ask Stew anything about Tbilisi..."}
                  className={`w-full px-4 py-3 pr-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    isListening ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                />
                <div className="absolute right-3 top-3 flex items-center space-x-1">
                  {isListening && (
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  )}
                  <Sparkles className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              {/* Voice Input Button */}
              <button
                onClick={handleVoiceInput}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isListening 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title={isListening ? 'Stop listening' : 'Voice input'}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </button>
              
              {/* Speech Toggle */}
              <button
                onClick={toggleSpeech}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isSpeaking 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title={isSpeaking ? 'Stop speaking' : 'Enable speech'}
              >
                {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
              
              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            
            {/* Status Bar */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center space-x-3">
                <span>🤖 AI-powered responses</span>
                {isTyping && (
                  <span className="flex items-center">
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce mr-1"></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce mr-1" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <span className="ml-2">Thinking...</span>
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2">
                {recognition.current && (
                  <span className="text-green-600">🎤 Voice enabled</span>
                )}
                {synthesis.current && (
                  <span className="text-blue-600">🔊 Speech enabled</span>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default AIChatbot