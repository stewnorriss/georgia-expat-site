'use client'

import { Users, Calendar, MessageCircle, Heart, Globe, Sparkles } from 'lucide-react'
import EventCalendar from '../components/EventCalendar'
import ExpatCommunityFinder from '../components/ExpatCommunityFinder'
import WeatherWidget from '../components/WeatherWidget'

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-6 p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Users className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Expat Community & Events
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow expats, join exciting events, and build your social network in Tbilisi
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">15K+</div>
                <div className="text-pink-100 text-sm">Community Members</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-pink-100 text-sm">Monthly Events</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">10+</div>
                <div className="text-pink-100 text-sm">Active Groups</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-pink-100 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Events & Communities */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Calendar */}
            <EventCalendar />

            {/* Community Finder */}
            <ExpatCommunityFinder />

            {/* Community Guidelines */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-red-600 mr-3" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Community Guidelines</h2>
                  <p className="text-gray-600 text-sm">Making Tbilisi welcoming for everyone</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full p-2 mr-4 mt-1">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Be Respectful</h3>
                    <p className="text-gray-600 text-sm">
                      Treat all community members with kindness and respect, regardless of background or experience level
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4 mt-1">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Share Knowledge</h3>
                    <p className="text-gray-600 text-sm">
                      Help newcomers by sharing your experiences, tips, and local insights
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 text-purple-800 rounded-full p-2 mr-4 mt-1">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Embrace Diversity</h3>
                    <p className="text-gray-600 text-sm">
                      Celebrate the multicultural nature of our expat community and Georgian hospitality
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 text-yellow-800 rounded-full p-2 mr-4 mt-1">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Stay Positive</h3>
                    <p className="text-gray-600 text-sm">
                      Focus on constructive discussions and solutions rather than complaints
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Weather Widget */}
            <WeatherWidget />

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="/emergency" className="block p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  <div className="font-semibold text-red-900">Emergency Contacts</div>
                  <div className="text-sm text-red-700">Essential numbers & safety info</div>
                </a>
                <a href="/legal" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="font-semibold text-blue-900">Visa & Legal Info</div>
                  <div className="text-sm text-blue-700">Requirements & procedures</div>
                </a>
                <a href="/housing" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <div className="font-semibold text-green-900">Housing Guide</div>
                  <div className="text-sm text-green-700">Find your perfect home</div>
                </a>
                <a href="/language" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <div className="font-semibold text-purple-900">Learn Georgian</div>
                  <div className="text-sm text-purple-700">20 interactive lessons</div>
                </a>
              </div>
            </div>

            {/* Featured Community */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Featured This Week</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <div className="font-bold mb-2">🎉 Tbilisi Expat Meetup</div>
                <div className="text-sm text-orange-100 mb-3">
                  Join 50+ expats for networking, food, and fun at Fabrika Hostel
                </div>
                <div className="text-xs text-orange-200">
                  📅 Every Friday at 7 PM
                </div>
              </div>
              <button className="w-full bg-white text-red-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>

            {/* Support */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our community moderators are here to help you connect and settle in
              </p>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
