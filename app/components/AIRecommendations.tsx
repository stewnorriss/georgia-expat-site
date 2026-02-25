'use client'

import { useState, useEffect } from 'react'
import { Brain, Star, Clock, MapPin, Utensils, Users, Mountain, Car, TrendingUp, Sparkles, MessageCircle } from 'lucide-react'

interface Recommendation {
  id: string
  title: string
  description: string
  category: string
  confidence: number
  icon: React.ReactNode
  tags: string[]
  estimatedTime?: string
  location?: string
  difficulty?: 'Easy' | 'Moderate' | 'Hard'
}

const AIRecommendations = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [loading, setLoading] = useState(true)
  const [userPreferences, setUserPreferences] = useState({
    interests: ['culture', 'food', 'activities'],
    experience: 'beginner',
    timeAvailable: 'weekend'
  })

  // Simulated AI recommendation engine
  const generateRecommendations = () => {
    const allRecommendations: Recommendation[] = [
      {
        id: '1',
        title: 'Traditional Georgian Supra Experience',
        description: 'Join an authentic Georgian feast with local families. Perfect for understanding Georgian hospitality culture and making lasting connections.',
        category: 'Culture',
        confidence: 95,
        icon: <Users className="h-5 w-5" />,
        tags: ['Traditional', 'Social', 'Food', 'Authentic'],
        estimatedTime: '4-6 hours',
        location: 'Old Town',
        difficulty: 'Easy'
      },
      {
        id: '2',
        title: 'Mtatsminda Park & Funicular Ride',
        description: 'Scenic views of Tbilisi with amusement park activities. Great for families and photography enthusiasts.',
        category: 'Activities',
        confidence: 88,
        icon: <Mountain className="h-5 w-5" />,
        tags: ['Scenic', 'Family-friendly', 'Photography'],
        estimatedTime: '3-4 hours',
        location: 'Mtatsminda',
        difficulty: 'Easy'
      },
      {
        id: '3',
        title: 'Khachapuri Cooking Class',
        description: 'Learn to make Georgia\'s national dish from expert local chefs. Hands-on experience with recipe to take home.',
        category: 'Food',
        confidence: 92,
        icon: <Utensils className="h-5 w-5" />,
        tags: ['Cooking', 'Traditional', 'Interactive'],
        estimatedTime: '2-3 hours',
        location: 'Various locations',
        difficulty: 'Easy'
      },
      {
        id: '4',
        title: 'Tbilisi Metro Art Tour',
        description: 'Explore Soviet-era architecture and art in Tbilisi\'s metro stations. Self-guided with AI audio companion.',
        category: 'Culture',
        confidence: 85,
        icon: <Car className="h-5 w-5" />,
        tags: ['Art', 'History', 'Self-guided'],
        estimatedTime: '2-3 hours',
        location: 'Metro stations',
        difficulty: 'Easy'
      },
      {
        id: '5',
        title: 'Kazbegi Day Trip',
        description: 'Visit the iconic Gergeti Trinity Church with stunning mountain views. Popular weekend adventure.',
        category: 'Activities',
        confidence: 90,
        icon: <Mountain className="h-5 w-5" />,
        tags: ['Nature', 'Photography', 'Adventure'],
        estimatedTime: '8-10 hours',
        location: 'Kazbegi',
        difficulty: 'Moderate'
      },
      {
        id: '6',
        title: 'Wine Tasting in Kakheti',
        description: 'Explore Georgia\'s wine region with traditional qvevri winemaking. Includes transport and lunch.',
        category: 'Food',
        confidence: 87,
        icon: <Utensils className="h-5 w-5" />,
        tags: ['Wine', 'Traditional', 'Day trip'],
        estimatedTime: '8-10 hours',
        location: 'Kakheti region',
        difficulty: 'Easy'
      },
      {
        id: '7',
        title: 'Tbilisi Street Art Walking Tour',
        description: 'Discover hidden murals and contemporary art in Tbilisi\'s creative neighborhoods with local artists.',
        category: 'Culture',
        confidence: 89,
        icon: <Users className="h-5 w-5" />,
        tags: ['Art', 'Walking', 'Contemporary', 'Local'],
        estimatedTime: '3-4 hours',
        location: 'Fabrika & Sololaki',
        difficulty: 'Easy'
      },
      {
        id: '8',
        title: 'Georgian Language Exchange Meetup',
        description: 'Practice Georgian with native speakers while helping them with English. Great for making friends.',
        category: 'Language',
        confidence: 91,
        icon: <MessageCircle className="h-5 w-5" />,
        tags: ['Language', 'Social', 'Exchange', 'Weekly'],
        estimatedTime: '2-3 hours',
        location: 'Various cafes',
        difficulty: 'Moderate'
      }
    ]

    // AI-powered filtering based on user preferences
    const filtered = allRecommendations
      .filter(rec => userPreferences.interests.some(interest => 
        rec.category.toLowerCase().includes(interest) || 
        rec.tags.some(tag => tag.toLowerCase().includes(interest))
      ))
      .sort((a, b) => b.confidence - a.confidence)
      .slice(0, 4)

    return filtered
  }

  useEffect(() => {
    // Simulate AI processing time
    const timer = setTimeout(() => {
      setRecommendations(generateRecommendations())
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [userPreferences])

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800'
      case 'Moderate': return 'bg-yellow-100 text-yellow-800'
      case 'Hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600'
    if (confidence >= 80) return 'text-yellow-600'
    return 'text-orange-600'
  }

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-center mb-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
          <div className="text-lg font-semibold text-gray-700">AI is analyzing your preferences...</div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Brain className="h-8 w-8 mr-3" />
            <div>
              <h2 className="text-2xl font-bold">Stew's Recommendations</h2>
              <p className="text-blue-100">Personal suggestions curated just for you</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{recommendations.length}</div>
            <div className="text-sm text-blue-100">Perfect matches</div>
          </div>
        </div>
      </div>

      {/* Preference Controls */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center mb-4">
          <Sparkles className="h-5 w-5 text-purple-600 mr-2" />
          <span className="font-semibold text-gray-700">Customize Your Experience</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {['culture', 'food', 'activities', 'nightlife', 'nature', 'history'].map((interest) => (
            <button
              key={interest}
              onClick={() => {
                const newInterests = userPreferences.interests.includes(interest)
                  ? userPreferences.interests.filter(i => i !== interest)
                  : [...userPreferences.interests, interest]
                setUserPreferences({ ...userPreferences, interests: newInterests })
                setLoading(true)
              }}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                userPreferences.interests.includes(interest)
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {interest.charAt(0).toUpperCase() + interest.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="p-6">
        <div className="space-y-6">
          {recommendations.map((rec, index) => (
            <div key={rec.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                    {rec.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{rec.title}</h3>
                    <p className="text-sm text-gray-600">{rec.category}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className={`text-sm font-semibold ${getConfidenceColor(rec.confidence)}`}>
                    {rec.confidence}% match
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{rec.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {rec.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                  {rec.difficulty && (
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(rec.difficulty)}`}>
                      {rec.difficulty}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  {rec.estimatedTime && (
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{rec.estimatedTime}</span>
                    </div>
                  )}
                  {rec.location && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{rec.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* AI Insights */}
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <div className="flex items-center mb-2">
            <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
            <span className="font-semibold text-gray-700">AI Insights</span>
          </div>
          <p className="text-sm text-gray-600">
            Based on your preferences, you seem to enjoy cultural experiences and traditional food. 
            Consider exploring more Georgian wine culture and traditional crafts workshops.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AIRecommendations