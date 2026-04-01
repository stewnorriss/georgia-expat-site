'use client'

import { useState } from 'react'
import VideoContent from '../components/VideoContent'
import { Play, MapPin, ChefHat, MessageCircle, Users } from 'lucide-react'
import PageHero from '../components/PageHero'

const VideosPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'neighborhood' | 'cooking' | 'language' | 'interview'>('all')

  const categories = [
    {
      id: 'all' as const,
      name: 'All Videos',
      icon: <Play className="h-5 w-5" />,
      color: 'from-gray-500 to-gray-600',
      count: 12
    },
    {
      id: 'neighborhood' as const,
      name: 'Neighborhood Tours',
      icon: <MapPin className="h-5 w-5" />,
      color: 'from-blue-500 to-blue-600',
      count: 3
    },
    {
      id: 'cooking' as const,
      name: 'Cooking Tutorials',
      icon: <ChefHat className="h-5 w-5" />,
      color: 'from-orange-500 to-red-600',
      count: 3
    },
    {
      id: 'language' as const,
      name: 'Language Lessons',
      icon: <MessageCircle className="h-5 w-5" />,
      color: 'from-purple-500 to-pink-600',
      count: 3
    },
    {
      id: 'interview' as const,
      name: 'Expat Interviews',
      icon: <Users className="h-5 w-5" />,
      color: 'from-green-500 to-teal-600',
      count: 3
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHero
        title="Video Content Library"
        description="Watch curated videos about living in Tbilisi - from neighborhood tours to cooking tutorials, language lessons, and expat interviews."
      />

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-26 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === cat.id
                    ? 'bg-white/20'
                    : 'bg-gray-200'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Content */}
      <VideoContent category={selectedCategory} />

      {/* Additional Info */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-3xl mb-2">🎥</div>
              <div className="text-2xl font-bold text-blue-900 mb-1">12+</div>
              <div className="text-sm text-blue-700">Video Tutorials</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-3xl mb-2">⏱️</div>
              <div className="text-2xl font-bold text-green-900 mb-1">4+ Hours</div>
              <div className="text-sm text-green-700">Total Content</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-3xl mb-2">👥</div>
              <div className="text-2xl font-bold text-purple-900 mb-1">50K+</div>
              <div className="text-sm text-purple-700">Total Views</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-orange-900 mb-1">95%</div>
              <div className="text-sm text-orange-700">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VideosPage
