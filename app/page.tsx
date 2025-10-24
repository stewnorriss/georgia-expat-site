'use client'

import Link from 'next/link'
import { useState } from 'react'
import { 
  Utensils, 
  MapPin, 
  Car, 
  Home, 
  Users, 
  MessageCircle, 
  Mountain, 
  Bed, 
  Dumbbell, 
  Stethoscope, 
  Palette, 
  BookOpen,
  Bot,
  Search,
  Sparkles,
  TrendingUp,
  Clock,
  Star,
  Brain,
  Zap,
  Globe,
  Target,
  Filter
} from 'lucide-react'

const HomePage = () => {
  const [heroSearchQuery, setHeroSearchQuery] = useState('')

  const performHeroSearch = (searchQuery: string) => {
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

  const handleHeroSearch = () => {
    if (heroSearchQuery.trim()) {
      performHeroSearch(heroSearchQuery)
    }
  }

  const handleHeroKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleHeroSearch()
    }
  }





  // AI-powered quick actions
  const aiQuickActions = [
    {
      title: 'Smart Restaurant Finder',
      description: 'AI matches restaurants to your preferences and dietary needs',
      action: 'Find Restaurants',
      icon: <Utensils className="h-5 w-5" />,
      color: 'bg-red-500',
      href: '/restaurants'
    },
    {
      title: 'Intelligent Route Planner',
      description: 'AI optimizes your daily commute and travel routes',
      action: 'Plan Route',
      icon: <MapPin className="h-5 w-5" />,
      color: 'bg-blue-500',
      href: '/transport'
    },
    {
      title: 'Personalized Learning',
      description: 'AI adapts Georgian lessons to your learning style',
      action: 'Start Learning',
      icon: <Brain className="h-5 w-5" />,
      color: 'bg-pink-500',
      href: '/language'
    },
    {
      title: 'Cultural Assistant',
      description: 'AI helps navigate Georgian customs and etiquette',
      action: 'Get Guidance',
      icon: <Users className="h-5 w-5" />,
      color: 'bg-orange-500',
      href: '/culture'
    }
  ]

  const handleQuickAction = (action: any) => {
    // Show AI feedback
    const notification = document.createElement('div')
    notification.className = 'fixed top-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse'
    notification.innerHTML = `🤖 Stew's AI is taking you to ${action.title}...`
    document.body.appendChild(notification)
    
    setTimeout(() => {
      document.body.removeChild(notification)
      window.location.href = action.href
    }, 1500)
  }

  const features = [
    {
      icon: <Utensils className="h-8 w-8" />,
      title: 'Restaurants',
      description: '21 featured dining establishments from traditional Georgian cuisine to international favorites',
      href: '/restaurants',
      color: 'bg-red-500'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Places to Visit',
      description: '28 tourist destinations and attractions in and around Tbilisi',
      href: '/places',
      color: 'bg-blue-500'
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: 'Transport',
      description: 'Comprehensive guides for getting around Tbilisi - metro, buses, taxis, and more',
      href: '/transport',
      color: 'bg-green-500'
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Housing',
      description: 'Living arrangements, neighborhoods, and tips for finding your perfect home',
      href: '/housing',
      color: 'bg-purple-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Culture',
      description: 'Georgian traditions, customs, and cultural insights for expats',
      href: '/culture',
      color: 'bg-orange-500'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Language',
      description: '29 Georgian language lessons to help you communicate with locals',
      href: '/language',
      color: 'bg-pink-500'
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      title: 'Activities',
      description: 'Adventures and outdoor activities in Georgia\'s stunning landscapes',
      href: '/activities',
      color: 'bg-teal-500'
    },
    {
      icon: <Bed className="h-8 w-8" />,
      title: 'Accommodation',
      description: 'Hotels, hostels, and short-term stays for visitors and new arrivals',
      href: '/accommodation',
      color: 'bg-indigo-500'
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: 'Sports & Fitness',
      description: 'Gyms, fitness centers, and sports clubs throughout Tbilisi',
      href: '/sports',
      color: 'bg-yellow-500'
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: 'Medical',
      description: 'Healthcare facilities, services, and medical information for expats',
      href: '/medical',
      color: 'bg-red-600'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Arts & Culture',
      description: 'Museums, theaters, galleries, and cultural venues in Tbilisi',
      href: '/arts',
      color: 'bg-cyan-500'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Expat Blog',
      description: '30 comprehensive guides covering all aspects of expat life in Georgia',
      href: '/blog',
      color: 'bg-gray-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* AI-Enhanced Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-12 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-800/90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="inline-block p-3 bg-white/10 rounded-full mb-4 relative">
              <MapPin className="h-12 w-12 text-white" />
              <div className="absolute -top-1 -right-1 bg-yellow-400 text-yellow-900 p-1 rounded-full">
                <Sparkles className="h-3 w-3" />
              </div>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to Stew's Guide To Tbilisi
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Your personal AI-powered companion for expat life in Georgia's capital. 
            Stew's curated recommendations, personalized insights, and smart assistance for your Tbilisi journey.
          </p>
          
          {/* AI-Powered Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={heroSearchQuery}
                onChange={(e) => setHeroSearchQuery(e.target.value)}
                onKeyPress={handleHeroKeyPress}
                className="block w-full pl-10 pr-12 py-4 border border-transparent rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                placeholder="Ask Stew's AI: 'Best Georgian restaurants for vegetarians' or 'How to use Tbilisi metro?'"
              />
              <button 
                onClick={handleHeroSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center hover:scale-110 transition-transform"
              >
                <Bot className="h-5 w-5 text-white/70 hover:text-white" />
              </button>
            </div>
            <p className="text-sm text-white/60 mt-2">
              🤖 Stew's AI Assistant ready to help with personalized recommendations
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/recommendations" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Stew's AI Recommendations
            </Link>
            <Link 
              href="/restaurants" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center"
            >
              <Brain className="h-4 w-4 mr-2" />
              Find Restaurants
            </Link>
            <Link 
              href="/blog" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center"
            >
              <Globe className="h-4 w-4 mr-2" />
              Expat Guides
            </Link>
          </div>
        </div>
      </section>


      {/* AI Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-yellow-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Stew's AI-Powered Quick Actions</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Intelligent tools that learn from your preferences and provide personalized assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiQuickActions.map((action, index) => (
              <div 
                key={index} 
                onClick={() => handleQuickAction(action)}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 border border-gray-100 cursor-pointer"
              >
                <div className={`h-16 bg-gradient-to-r ${action.color} bg-opacity-10 relative overflow-hidden flex items-center justify-center`}>
                  <div className={`${action.color} bg-opacity-20 text-gray-800 p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                    {action.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {action.description}
                  </p>
                  <div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 mr-2" />
                    {action.action}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* AI-Enhanced Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Filter className="h-8 w-8 text-gray-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                AI-Curated Expat Resources
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Intelligent content organization with personalized recommendations and real-time updates
            </p>
            
            {/* AI Filter Controls */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors flex items-center">
                <Brain className="h-3 w-3 mr-1" />
                For New Arrivals
              </button>
              <button className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-200 transition-colors flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                Most Popular
              </button>
              <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-200 transition-colors flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                Recently Updated
              </button>
              <button className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-200 transition-colors flex items-center">
                <Sparkles className="h-3 w-3 mr-1" />
                AI Recommended
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 relative"
              >
                {/* AI Enhancement Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-1 rounded-full">
                    <Sparkles className="h-3 w-3" />
                  </div>
                </div>

                {/* Image Header */}
                <div className={`h-32 bg-gradient-to-br ${feature.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white p-3 rounded-full bg-white/20 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  {/* AI Pattern Overlay */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Cpath d='M20 10 L25 15 L20 20 L15 15 Z'/%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  ></div>
                  
                  {/* AI Confidence Score */}
                  <div className="absolute bottom-2 left-2">
                    <div className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-semibold">
                      95% relevant
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                      {feature.title}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-xs text-gray-500 ml-1">AI</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {/* AI-powered tags */}
                  <div className="flex flex-wrap gap-1">
                    {index % 3 === 0 && <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Popular</span>}
                    {index % 3 === 1 && <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Essential</span>}
                    {index % 3 === 2 && <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Trending</span>}
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">AI Enhanced</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Enhanced Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-Time AI Analytics</h2>
            <p className="text-gray-600">Live data powered by machine learning algorithms</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:bg-red-50 p-4 rounded-lg transition-colors">
              <div className="flex items-center justify-center mb-2">
                <div className="text-3xl font-bold text-red-600 mr-2">21</div>
                <div className="bg-red-100 text-red-600 p-1 rounded">
                  <TrendingUp className="h-4 w-4" />
                </div>
              </div>
              <div className="text-gray-600 mb-1">AI-Curated Restaurants</div>
              <div className="text-xs text-green-600 font-semibold">+3 this week</div>
              <div className="text-xs text-gray-500">95% satisfaction rate</div>
            </div>
            
            <div className="text-center group hover:bg-blue-50 p-4 rounded-lg transition-colors">
              <div className="flex items-center justify-center mb-2">
                <div className="text-3xl font-bold text-red-600 mr-2">28</div>
                <div className="bg-blue-100 text-blue-600 p-1 rounded">
                  <MapPin className="h-4 w-4" />
                </div>
              </div>
              <div className="text-gray-600 mb-1">Smart Destinations</div>
              <div className="text-xs text-green-600 font-semibold">+5 updated</div>
              <div className="text-xs text-gray-500">AI-verified info</div>
            </div>
            
            <div className="text-center group hover:bg-pink-50 p-4 rounded-lg transition-colors">
              <div className="flex items-center justify-center mb-2">
                <div className="text-3xl font-bold text-red-600 mr-2">29</div>
                <div className="bg-pink-100 text-pink-600 p-1 rounded">
                  <Brain className="h-4 w-4" />
                </div>
              </div>
              <div className="text-gray-600 mb-1">Adaptive Lessons</div>
              <div className="text-xs text-green-600 font-semibold">AI-personalized</div>
              <div className="text-xs text-gray-500">92% completion rate</div>
            </div>
            
            <div className="text-center group hover:bg-purple-50 p-4 rounded-lg transition-colors">
              <div className="flex items-center justify-center mb-2">
                <div className="text-3xl font-bold text-red-600 mr-2">30</div>
                <div className="bg-purple-100 text-purple-600 p-1 rounded">
                  <Sparkles className="h-4 w-4" />
                </div>
              </div>
              <div className="text-gray-600 mb-1">AI-Enhanced Guides</div>
              <div className="text-xs text-green-600 font-semibold">Real-time updates</div>
              <div className="text-xs text-gray-500">98% accuracy</div>
            </div>
          </div>
          
          {/* AI Assistant CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-center justify-center mb-4">
                <Bot className="h-12 w-12 mr-4" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold">Meet Stew's AI Expat Assistant</h3>
                  <p className="text-blue-100">24/7 intelligent support for your Tbilisi journey</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <MessageCircle className="h-6 w-6 mb-2" />
                  <div className="text-sm font-semibold">Instant Answers</div>
                  <div className="text-xs text-blue-100">Get immediate responses to any question</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Target className="h-6 w-6 mb-2" />
                  <div className="text-sm font-semibold">Personalized Tips</div>
                  <div className="text-xs text-blue-100">Recommendations based on your preferences</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Globe className="h-6 w-6 mb-2" />
                  <div className="text-sm font-semibold">Multi-Language</div>
                  <div className="text-xs text-blue-100">Communicate in 12+ languages</div>
                </div>
              </div>
              
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center mx-auto">
                <Bot className="h-5 w-5 mr-2" />
                Start Chatting with Stew's Assistant
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage