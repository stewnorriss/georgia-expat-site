'use client'

import { useState } from 'react'
import { Calculator, MapPin, TrendingUp, Users, Zap, Bot, Sparkles, Home, Calendar, Cloud } from 'lucide-react'
import CostCalculator from '../components/CostCalculator'
import NeighborhoodComparison from '../components/NeighborhoodComparison'
import EventCalendar from '../components/EventCalendar'
import WeatherWidget from '../components/WeatherWidget'
import ExpatCommunityFinder from '../components/ExpatCommunityFinder'

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState('cost-calculator')

  const tools = [
    {
      id: 'cost-calculator',
      name: 'Cost of Living Calculator',
      description: 'Calculate your monthly expenses in Tbilisi',
      icon: Calculator,
      color: 'blue'
    },
    {
      id: 'neighborhood-comparison',
      name: 'Neighborhood Comparison',
      description: 'Compare different areas to find your perfect home',
      icon: MapPin,
      color: 'green'
    },
    {
      id: 'events',
      name: 'Event Calendar',
      description: 'Discover upcoming expat events and meetups',
      icon: Calendar,
      color: 'purple'
    },
    {
      id: 'community',
      name: 'Community Finder',
      description: 'Connect with expat groups and communities',
      icon: Users,
      color: 'pink'
    },
    {
      id: 'weather',
      name: 'Weather Widget',
      description: 'Real-time Tbilisi weather information',
      icon: Cloud,
      color: 'cyan'
    }
  ]

  const getTabColor = (color: string, active: boolean) => {
    const colors = {
      blue: active ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700 hover:bg-blue-200',
      green: active ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700 hover:bg-green-200',
      purple: active ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700 hover:bg-purple-200',
      pink: active ? 'bg-pink-600 text-white' : 'bg-pink-100 text-pink-700 hover:bg-pink-200',
      cyan: active ? 'bg-cyan-600 text-white' : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'cost-calculator':
        return <CostCalculator />
      case 'neighborhood-comparison':
        return <NeighborhoodComparison />
      case 'events':
        return <EventCalendar />
      case 'community':
        return <ExpatCommunityFinder />
      case 'weather':
        return <WeatherWidget />
      default:
        return <CostCalculator />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white py-16 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-6 p-4 bg-white/10 rounded-full backdrop-blur-sm animate-bounce-in">
              <Sparkles className="h-12 w-12 animate-pulse-glow" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">
              Interactive Tools & Resources
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              AI-powered tools to help you plan your life in Tbilisi. Calculate costs, compare neighborhoods, check weather, find events, and connect with the community.
            </p>

            {/* Tool Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover-lift animate-fade-in-scale" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl font-bold mb-1">{tools.length}+</div>
                <div className="text-blue-100 text-sm">Interactive Tools</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover-lift animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold mb-1">Real-time</div>
                <div className="text-blue-100 text-sm">Data Updates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover-lift animate-fade-in-scale" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold mb-1">AI-Powered</div>
                <div className="text-blue-100 text-sm">Recommendations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover-lift animate-fade-in-scale" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-blue-100 text-sm">Free to Use</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tool Selection Tabs */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Choose Your Tool</h2>
              <p className="text-gray-600">Select from our collection of helpful resources</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Bot className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">AI-Enhanced</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              const isActive = activeTab === tool.id
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`p-4 rounded-xl transition-all duration-300 text-left hover-lift ${getTabColor(tool.color, isActive)} animate-fade-in-scale`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-2">
                    <Icon className={`h-6 w-6 mr-2 ${isActive ? '' : 'opacity-70'}`} />
                    {isActive && <Zap className="h-4 w-4 text-yellow-300 animate-pulse" />}
                  </div>
                  <h3 className="font-bold text-sm mb-1">{tool.name}</h3>
                  <p className={`text-xs ${isActive ? 'text-white/90' : 'opacity-70'}`}>
                    {tool.description}
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Tool Component */}
        <div className="animate-fade-in-scale">
          {renderActiveComponent()}
        </div>

        {/* Additional Features Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 hover-lift">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Real-Time Data</h3>
            </div>
            <p className="text-gray-600 text-sm">
              All our tools use the latest data to provide accurate and up-to-date information for your planning needs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover-lift">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Bot className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">AI-Powered</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Intelligent algorithms analyze your preferences to provide personalized recommendations and insights.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover-lift">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Community Driven</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Built with feedback from thousands of expats to ensure we provide the most useful tools for your journey.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Need More Help?</h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Explore our comprehensive guides, connect with the expat community, or chat with Stew's AI assistant for personalized advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center hover-lift"
            >
              <Home className="h-5 w-5 mr-2" />
              Read Our Guides
            </a>
            <a
              href="/community"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all inline-flex items-center justify-center hover-lift"
            >
              <Users className="h-5 w-5 mr-2" />
              Join Community
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
