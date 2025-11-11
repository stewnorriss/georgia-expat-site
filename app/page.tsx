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
  Filter,
  ArrowRight,
  Heart,
  Award,
  ShoppingBag
} from 'lucide-react'
import { TbilisiSkyline, GeorgianWineBottle, Khachapuri, GeorgianPattern } from './components/GeorgianIllustrations'
import ClientOnlyWrapper from './components/ClientOnlyWrapper'

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
      title: 'Live Currency Converter',
      description: 'Real-time GEL to GBP exchange rates with banking tips',
      action: 'Convert Currency',
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'bg-green-500',
      href: '/currency'
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
      description: 'Enhanced dining guide with filters, dietary options, and delivery apps',
      href: '/restaurants',
      color: 'bg-red-500',
      badge: 'Enhanced'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Day Trips & Getaways',
      description: 'Weekend adventures from Batumi to Kazbegi with detailed travel guides',
      href: '/daytrips',
      color: 'bg-blue-500',
      badge: 'New'
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
      description: '20 Georgian language lessons with interactive features and AI insights',
      href: '/language',
      color: 'bg-pink-500',
      badge: 'Enhanced'
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
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Interactive Tools',
      description: 'Cost calculator, neighborhood comparison, and AI-powered recommendations',
      href: '/tools',
      color: 'bg-purple-600',
      badge: 'New'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Emergency & Safety',
      description: 'Essential emergency contacts, safety tips, and embassy information',
      href: '/emergency',
      color: 'bg-red-700',
      badge: 'New'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Legal & Bureaucracy',
      description: 'Visa requirements, tax information, and official procedures guide',
      href: '/legal',
      color: 'bg-blue-700',
      badge: 'New'
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: 'Shopping & Retail',
      description: 'Supermarkets, technology stores, bookshops, music stores, and specialty markets',
      href: '/shopping',
      color: 'bg-pink-600',
      badge: 'New'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Georgian Visuals */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white py-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 georgian-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-full">
          <TbilisiSkyline className="w-full h-32 opacity-30" />
        </div>
        
        {/* Floating Georgian Elements */}
        <ClientOnlyWrapper>
          <div className="absolute top-20 left-10 animate-float">
            <GeorgianWineBottle className="w-12 h-12 opacity-40" />
          </div>
          <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
            <Khachapuri className="w-16 h-16 opacity-40" />
          </div>
          <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}>
            <GeorgianWineBottle className="w-10 h-10 opacity-30" />
          </div>
        </ClientOnlyWrapper>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <ClientOnlyWrapper fallback={
              <div className="inline-block p-4 bg-white/10 rounded-full mb-6 relative">
                <MapPin className="h-16 w-16 text-white" />
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 p-2 rounded-full">
                  <Sparkles className="h-4 w-4" />
                </div>
              </div>
            }>
              <div className="inline-block p-4 glass-morphism rounded-full mb-6 relative animate-glow">
                <MapPin className="h-16 w-16 text-white" />
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 p-2 rounded-full animate-pulse">
                  <Sparkles className="h-4 w-4" />
                </div>
              </div>
            </ClientOnlyWrapper>
          </div>
          
          <ClientOnlyWrapper fallback={
            <>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-georgian">
                მოგესალმებით თბილისში
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                Your Complete Expat Guide to Tbilisi
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
                Moving to Tbilisi in 2026. This is everything I hope I need or anyone else might need - 
                from finding the <span className="text-yellow-300 font-semibold">best khachapuri</span> to 
                navigating <span className="text-yellow-300 font-semibold">Georgian bureaucracy</span>, 
                learning the <span className="text-yellow-300 font-semibold">language</span>, and 
                discovering why this city becomes home.
              </p>
            </>
          }>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-up text-gradient-georgian font-georgian">
              მოგესალმებით თბილისში
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              Your Complete Expat Guide to Tbilisi
            </h2>
            
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto animate-slide-in-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
              Your complete guide to moving to Tbilisi in 2025-2026. Everything you need - 
              from finding the <span className="text-yellow-300 font-semibold">best khachapuri</span> to 
              navigating <span className="text-yellow-300 font-semibold">Georgian bureaucracy</span>, 
              learning the <span className="text-yellow-300 font-semibold">language</span>, and 
              discovering why this city becomes home.
            </p>
          </ClientOnlyWrapper>
          
          {/* Enhanced AI-Powered Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-white/60 group-focus-within:text-white transition-colors" />
              </div>
              <input
                type="text"
                value={heroSearchQuery}
                onChange={(e) => setHeroSearchQuery(e.target.value)}
                onKeyPress={handleHeroKeyPress}
                className="block w-full pl-14 pr-16 py-5 border-2 border-white/20 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-lg transition-all"
                placeholder="Ask Stew's AI: 'Best khachapuri in Old Town' or 'Safest neighborhoods for expats'"
              />
              <button 
                onClick={handleHeroSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-6 rounded-r-xl hover:from-red-700 hover:to-red-800 transition-all"
              >
                <Bot className="h-6 w-6 mr-2" />
                <span className="hidden sm:inline">Ask AI</span>
              </button>
            </div>
            
            {/* Quick Search Suggestions */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {['Georgian restaurants', 'Metro guide', 'Best neighborhoods', 'Cultural tips', 'Language help'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setHeroSearchQuery(suggestion)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-all border border-white/20 hover:border-white/40"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            
            <div className="flex items-center justify-center mt-4 space-x-4 text-white/70">
              <div className="flex items-center">
                <Bot className="h-4 w-4 mr-2" />
                <span className="text-sm">AI-Powered Responses</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-4 w-4 mr-2 text-red-300" />
                <span className="text-sm">Stew's Personal Touch</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-yellow-300" />
                <span className="text-sm">Local Expertise</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/recommendations" 
              className="group bg-gradient-to-r from-white to-gray-100 text-red-600 px-10 py-4 rounded-xl font-bold hover:from-yellow-100 hover:to-white transition-all shadow-2xl flex items-center justify-center transform hover:scale-105"
            >
              <Sparkles className="h-5 w-5 mr-3" />
              Stew's AI Recommendations
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/restaurants" 
              className="group border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-red-600 transition-all shadow-2xl flex items-center justify-center"
            >
              <Utensils className="h-5 w-5 mr-3" />
              Explore Restaurants
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/blog" 
              className="group border-2 border-yellow-300/80 bg-yellow-300/10 backdrop-blur-sm text-yellow-100 px-10 py-4 rounded-xl font-bold hover:bg-yellow-300 hover:text-red-600 transition-all shadow-2xl flex items-center justify-center"
            >
              <BookOpen className="h-5 w-5 mr-3" />
              Stew's Blog
              <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Georgian Pattern Divider */}
      <div className="relative">
        <GeorgianPattern className="w-full h-12 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* Enhanced AI Quick Actions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <ClientOnlyWrapper>
          <div className="absolute top-10 right-10 opacity-10">
            <GeorgianWineBottle className="w-32 h-32" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-10">
            <Khachapuri className="w-28 h-28" />
          </div>
        </ClientOnlyWrapper>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6 p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stew's AI-Powered Quick Actions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Intelligent tools that learn from your preferences and provide 
              <span className="text-blue-600 font-semibold"> personalized assistance</span> for your Tbilisi journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiQuickActions.map((action, index) => (
              <div 
                key={index} 
                onClick={() => handleQuickAction(action)}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
              >
                <div className={`h-20 bg-gradient-to-r ${action.color.replace('bg-', 'from-')} to-transparent relative overflow-hidden flex items-center justify-center rounded-t-xl`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm text-white p-3 rounded-full group-hover:scale-110 transition-all duration-300">
                    {action.icon}
                  </div>
                  <div className="absolute top-2 right-2">
                    <Bot className="h-4 w-4 text-white/70" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {action.description}
                  </p>
                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-lg font-semibold w-full text-center group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 mr-2" />
                    {action.action}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* AI Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">AI Responses Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Expats</div>
            </div>
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