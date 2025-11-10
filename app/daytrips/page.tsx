'use client'

import { useState } from 'react'
import { MapPin, Clock, Car, Train, Mountain, Waves, Camera, Wine, Castle, Star, DollarSign, Calendar, Users, Thermometer } from 'lucide-react'

export default function DayTripsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSeason, setSelectedSeason] = useState('all')

  const destinations = [
    {
      id: 1,
      name: 'Batumi & Black Sea Coast',
      category: 'coastal',
      season: ['spring', 'summer', 'autumn'],
      distance: '380 km',
      duration: '2-3 days',
      transport: ['car', 'train', 'bus'],
      difficulty: 'easy',
      cost: '₾₾',
      rating: 4.8,
      image: '/api/placeholder/400/250',
      description: 'Georgia\'s premier seaside resort with beautiful beaches, modern architecture, and vibrant nightlife.',
      highlights: [
        'Batumi Boulevard seaside promenade',
        'Modern architectural landmarks',
        'Batumi Botanical Garden',
        'Casino and entertainment district',
        'Fresh seafood restaurants'
      ],
      transportation: {
        car: { time: '5-6 hours', cost: '₾80-120 (fuel)', notes: 'Scenic mountain route' },
        train: { time: '5 hours', cost: '₾25-45', notes: 'Comfortable overnight train available' },
        bus: { time: '6 hours', cost: '₾20-30', notes: 'Multiple daily departures' }
      },
      accommodation: {
        budget: '₾40-80/night',
        midrange: '₾80-150/night',
        luxury: '₾150-300/night'
      },
      bestTime: 'May-October for beach activities, year-round for sightseeing',
      tips: [
        'Book accommodation in advance during summer',
        'Try Adjarian khachapuri (cheese boat)',
        'Visit the cable car for panoramic views',
        'Explore nearby Gonio Fortress'
      ]
    },
    {
      id: 2,
      name: 'Kazbegi & Mount Kazbek',
      category: 'mountain',
      season: ['spring', 'summer', 'autumn'],
      distance: '165 km',
      duration: '1-2 days',
      transport: ['car', 'bus'],
      difficulty: 'moderate',
      cost: '₾₾',
      rating: 4.9,
      image: '/api/placeholder/400/250',
      description: 'Dramatic mountain scenery with the iconic Gergeti Trinity Church and views of Mount Kazbek.',
      highlights: [
        'Gergeti Trinity Church (14th century)',
        'Mount Kazbek views (5,047m)',
        'Dariali Gorge',
        'Ananuri Fortress en route',
        'Traditional mountain villages'
      ],
      transportation: {
        car: { time: '3 hours', cost: '₾60-80 (fuel)', notes: 'Mountain roads, 4WD recommended for church' },
        bus: { time: '4 hours', cost: '₾15-25', notes: 'Limited schedule, check times' }
      },
      accommodation: {
        budget: '₾30-60/night',
        midrange: '₾60-120/night',
        luxury: '₾120-250/night'
      },
      bestTime: 'May-October (snow possible other months)',
      tips: [
        'Bring warm clothes even in summer',
        'Hire 4WD taxi to reach Trinity Church',
        'Stop at Ananuri Fortress on the way',
        'Try local mountain honey and cheese'
      ]
    },
    {
      id: 3,
      name: 'Sighnaghi & Kakheti Wine Region',
      category: 'wine',
      season: ['spring', 'summer', 'autumn'],
      distance: '110 km',
      duration: '1-2 days',
      transport: ['car', 'bus', 'tour'],
      difficulty: 'easy',
      cost: '₾₾',
      rating: 4.7,
      image: '/api/placeholder/400/250',
      description: 'Charming hilltop town known as the "City of Love" surrounded by Georgia\'s premier wine region.',
      highlights: [
        'Sighnaghi old town and city walls',
        'Wine tastings at local wineries',
        'Bodbe Monastery',
        'Traditional qvevri winemaking',
        'Alazani Valley views'
      ],
      transportation: {
        car: { time: '2 hours', cost: '₾40-60 (fuel)', notes: 'Easy drive through wine country' },
        bus: { time: '2.5 hours', cost: '₾10-15', notes: 'Regular marshrutka service' },
        tour: { time: 'Full day', cost: '₾80-150', notes: 'Includes wine tastings' }
      },
      accommodation: {
        budget: '₾25-50/night',
        midrange: '₾50-100/night',
        luxury: '₾100-200/night'
      },
      bestTime: 'April-October (harvest season: September-October)',
      tips: [
        'Book wine tours in advance',
        'Try traditional Georgian feast (supra)',
        'Visit during harvest season for special experience',
        'Don\'t miss Bodbe Monastery nearby'
      ]
    },
    {
      id: 4,
      name: 'Vardzia Cave City',
      category: 'historical',
      season: ['spring', 'summer', 'autumn'],
      distance: '270 km',
      duration: '2 days',
      transport: ['car', 'bus'],
      difficulty: 'moderate',
      cost: '₾₾',
      rating: 4.6,
      image: '/api/placeholder/400/250',
      description: 'Incredible 12th-century cave monastery complex carved into a cliff face.',
      highlights: [
        'Cave monastery with 600 rooms',
        'Church of the Dormition frescoes',
        'Queen Tamar\'s legacy',
        'Khertvisi Fortress nearby',
        'Mtkvari River valley views'
      ],
      transportation: {
        car: { time: '4 hours', cost: '₾80-100 (fuel)', notes: 'Scenic route through southern Georgia' },
        bus: { time: '5 hours', cost: '₾20-30', notes: 'Change in Akhalkalaki' }
      },
      accommodation: {
        budget: '₾20-40/night',
        midrange: '₾40-80/night',
        luxury: '₾80-150/night'
      },
      bestTime: 'April-October (avoid winter due to weather)',
      tips: [
        'Wear comfortable walking shoes',
        'Bring flashlight for cave exploration',
        'Combine with Rabati Castle in Akhalkalaki',
        'Stay overnight in Vardzia village'
      ]
    },
    {
      id: 5,
      name: 'Mtskheta Ancient Capital',
      category: 'historical',
      season: ['all'],
      distance: '25 km',
      duration: 'Half day',
      transport: ['car', 'bus', 'train'],
      difficulty: 'easy',
      cost: '₾',
      rating: 4.5,
      image: '/api/placeholder/400/250',
      description: 'UNESCO World Heritage site and former capital of Georgia with ancient churches and monasteries.',
      highlights: [
        'Svetitskhoveli Cathedral',
        'Jvari Monastery',
        'Samtavro Monastery',
        'Archaeological sites',
        'Traditional craft workshops'
      ],
      transportation: {
        car: { time: '30 minutes', cost: '₾10-15 (fuel)', notes: 'Easy day trip' },
        bus: { time: '45 minutes', cost: '₾2-3', notes: 'Frequent marshrutka service' },
        train: { time: '40 minutes', cost: '₾1-2', notes: 'Suburban train service' }
      },
      accommodation: {
        budget: '₾20-40/night',
        midrange: '₾40-80/night',
        luxury: '₾80-150/night'
      },
      bestTime: 'Year-round (indoor attractions)',
      tips: [
        'Perfect for half-day trip from Tbilisi',
        'Combine with Jvari Monastery visit',
        'Try traditional Georgian bread (shotis puri)',
        'Visit local craft workshops'
      ]
    },
    {
      id: 6,
      name: 'Borjomi & Bakuriani',
      category: 'nature',
      season: ['all'],
      distance: '160 km',
      duration: '1-2 days',
      transport: ['car', 'train'],
      difficulty: 'easy',
      cost: '₾₾',
      rating: 4.4,
      image: '/api/placeholder/400/250',
      description: 'Famous spa town with mineral water springs and nearby ski resort in the mountains.',
      highlights: [
        'Borjomi mineral water springs',
        'Borjomi-Kharagauli National Park',
        'Bakuriani ski resort (winter)',
        'Green Monastery',
        'Rabati Castle in Akhaltsikhe'
      ],
      transportation: {
        car: { time: '2.5 hours', cost: '₾50-70 (fuel)', notes: 'Mountain roads' },
        train: { time: '4 hours', cost: '₾8-15', notes: 'Scenic narrow-gauge railway' }
      },
      accommodation: {
        budget: '₾25-50/night',
        midrange: '₾50-100/night',
        luxury: '₾100-200/night'
      },
      bestTime: 'Year-round (winter for skiing, summer for hiking)',
      tips: [
        'Try the famous Borjomi mineral water',
        'Take the narrow-gauge train for scenic views',
        'Visit in winter for skiing in Bakuriani',
        'Explore Borjomi Central Park'
      ]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Destinations', icon: MapPin, count: destinations.length },
    { id: 'coastal', name: 'Coastal', icon: Waves, count: destinations.filter(d => d.category === 'coastal').length },
    { id: 'mountain', name: 'Mountains', icon: Mountain, count: destinations.filter(d => d.category === 'mountain').length },
    { id: 'wine', name: 'Wine Regions', icon: Wine, count: destinations.filter(d => d.category === 'wine').length },
    { id: 'historical', name: 'Historical', icon: Castle, count: destinations.filter(d => d.category === 'historical').length },
    { id: 'nature', name: 'Nature', icon: Camera, count: destinations.filter(d => d.category === 'nature').length }
  ]

  const seasons = [
    { id: 'all', name: 'All Seasons' },
    { id: 'spring', name: 'Spring' },
    { id: 'summer', name: 'Summer' },
    { id: 'autumn', name: 'Autumn' },
    { id: 'winter', name: 'Winter' }
  ]

  const filteredDestinations = destinations.filter(destination => {
    const categoryMatch = selectedCategory === 'all' || destination.category === selectedCategory
    const seasonMatch = selectedSeason === 'all' || destination.season.includes(selectedSeason)
    return categoryMatch && seasonMatch
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800'
      case 'moderate': return 'bg-yellow-100 text-yellow-800'
      case 'hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <MapPin className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Day Trips & Weekend Getaways
              </h1>
              <div className="flex items-center space-x-4 text-green-200">
                <div className="flex items-center">
                  <Mountain className="h-5 w-5 mr-2" />
                  <span>Mountain Adventures</span>
                </div>
                <div className="flex items-center">
                  <Waves className="h-5 w-5 mr-2" />
                  <span>Coastal Escapes</span>
                </div>
                <div className="flex items-center">
                  <Wine className="h-5 w-5 mr-2" />
                  <span>Wine Regions</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Discover Georgia's incredible diversity with these carefully curated day trips and weekend getaways. 
            From ancient cave cities to pristine mountain peaks and world-class wine regions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Category</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-blue-300 text-gray-700'
                    }`}
                  >
                    <category.icon className="h-5 w-5 mx-auto mb-1" />
                    <div className="font-semibold text-xs">{category.name}</div>
                    <div className="text-xs text-gray-500">({category.count})</div>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Season</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {seasons.map((season) => (
                  <button
                    key={season.id}
                    onClick={() => setSelectedSeason(season.id)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      selectedSeason === season.id
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-green-300 text-gray-700'
                    }`}
                  >
                    <Thermometer className="h-5 w-5 mx-auto mb-1" />
                    <div className="font-semibold text-xs">{season.name}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid gap-8">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <Camera className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{destination.name}</h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {destination.distance} from Tbilisi
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {destination.duration}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(destination.difficulty)}`}>
                          {destination.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-semibold text-gray-700 ml-1">{destination.rating}</span>
                        </div>
                        <span className="text-lg font-bold text-green-600">{destination.cost}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{destination.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                      <ul className="space-y-1">
                        {destination.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Transportation:</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.transport.map((transport, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                            {transport === 'car' && <Car className="h-3 w-3 inline mr-1" />}
                            {transport === 'train' && <Train className="h-3 w-3 inline mr-1" />}
                            {transport}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">Best Time:</span>
                        <p className="text-gray-600">{destination.bestTime}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Budget Stay:</span>
                        <p className="text-gray-600">{destination.accommodation.budget}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Mid-range:</span>
                        <p className="text-gray-600">{destination.accommodation.midrange}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Luxury:</span>
                        <p className="text-gray-600">{destination.accommodation.luxury}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-1">Pro Tips:</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      {destination.tips.slice(0, 2).map((tip, index) => (
                        <li key={index}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more options.</p>
          </div>
        )}

        {/* Planning Tips */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Planning Your Trip</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <Car className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Transportation</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Rent a car for maximum flexibility</li>
                <li>• Marshrutkas (minibuses) are budget-friendly</li>
                <li>• Book train tickets in advance</li>
                <li>• Consider guided tours for wine regions</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <Calendar className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Best Times</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Spring (Apr-May): Mild weather, fewer crowds</li>
                <li>• Summer (Jun-Aug): Peak season, all activities</li>
                <li>• Autumn (Sep-Oct): Wine harvest, great weather</li>
                <li>• Winter (Nov-Mar): Skiing, indoor attractions</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <DollarSign className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Budget Tips</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Guesthouses offer authentic experiences</li>
                <li>• Try local restaurants for better prices</li>
                <li>• Many attractions have free entry</li>
                <li>• Group tours can be cost-effective</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}