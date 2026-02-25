'use client'

import { useState } from 'react'
import { MapPin, Star, DollarSign, Car, Utensils, ShoppingBag, Heart, Users, Zap, Wifi, Shield, TrendingUp, Clock, Home } from 'lucide-react'

interface Neighborhood {
  id: string
  name: string
  description: string
  rentPrice: { studio: number, oneBr: number, twoBr: number }
  safetyRating: number
  nightlifeRating: number
  restaurantRating: number
  transportRating: number
  shoppingRating: number
  familyFriendly: number
  expatsPopulation: number
  commuteToCenterMin: number
  pros: string[]
  cons: string[]
  bestFor: string[]
  averageAge: number
  walkability: number
  greenSpaces: number
  internetSpeed: number
  noiseLevel: number // 1-5, 1 being quiet
  airQuality: number
  costOfLiving: number // 1-5, 1 being cheap
  image?: string
}

export default function NeighborhoodComparison() {
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>(['old-town', 'saburtalo'])
  const [comparisonMetric, setComparisonMetric] = useState('overall')

  const neighborhoods: Neighborhood[] = [
    {
      id: 'old-town',
      name: 'Old Town (Dzveli Kalaki)',
      description: 'Historic heart of Tbilisi with cobblestone streets, traditional architecture, and major tourist attractions.',
      rentPrice: { studio: 1200, oneBr: 1800, twoBr: 2800 },
      safetyRating: 4.5,
      nightlifeRating: 4.8,
      restaurantRating: 4.9,
      transportRating: 4.7,
      shoppingRating: 4.2,
      familyFriendly: 3.5,
      expatsPopulation: 85,
      commuteToCenterMin: 0,
      averageAge: 32,
      walkability: 4.9,
      greenSpaces: 3.2,
      internetSpeed: 4.5,
      noiseLevel: 4,
      airQuality: 3.8,
      costOfLiving: 4.5,
      pros: [
        'Walking distance to all major attractions',
        'Excellent restaurants and cafes',
        'Rich history and beautiful architecture',
        'Great public transport connections',
        'Vibrant nightlife'
      ],
      cons: [
        'Most expensive area',
        'Can be crowded with tourists',
        'Limited parking',
        'Noise from bars and restaurants',
        'Older buildings may lack modern amenities'
      ],
      bestFor: ['Young professionals', 'Digital nomads', 'Culture enthusiasts', 'First-time visitors']
    },
    {
      id: 'saburtalo',
      name: 'Saburtalo',
      description: 'Modern residential district popular with young professionals and expats, featuring new developments and good amenities.',
      rentPrice: { studio: 800, oneBr: 1200, twoBr: 1800 },
      safetyRating: 4.7,
      nightlifeRating: 4.2,
      restaurantRating: 4.3,
      transportRating: 4.5,
      shoppingRating: 4.6,
      familyFriendly: 4.5,
      expatsPopulation: 70,
      commuteToCenterMin: 15,
      averageAge: 28,
      walkability: 4.2,
      greenSpaces: 4.1,
      internetSpeed: 4.8,
      noiseLevel: 2,
      airQuality: 4.3,
      costOfLiving: 3.5,
      pros: [
        'Modern apartments with amenities',
        'Good value for money',
        'Large expat community',
        'Excellent shopping centers',
        'Family-friendly environment',
        'Good metro connections'
      ],
      cons: [
        'Less character than historic areas',
        'Further from main attractions',
        'Can feel impersonal',
        'Limited traditional Georgian restaurants'
      ],
      bestFor: ['Families', 'Young professionals', 'Budget-conscious expats', 'Long-term residents']
    },
    {
      id: 'vake',
      name: 'Vake',
      description: 'Upscale residential area known for Vake Park, embassies, and high-end shopping. Popular with affluent locals and expats.',
      rentPrice: { studio: 1000, oneBr: 1500, twoBr: 2300 },
      safetyRating: 4.9,
      nightlifeRating: 3.8,
      restaurantRating: 4.5,
      transportRating: 4.3,
      shoppingRating: 4.7,
      familyFriendly: 4.8,
      expatsPopulation: 60,
      commuteToCenterMin: 20,
      averageAge: 35,
      walkability: 4.0,
      greenSpaces: 4.8,
      internetSpeed: 4.7,
      noiseLevel: 2,
      airQuality: 4.6,
      costOfLiving: 4.2,
      pros: [
        'Very safe and quiet',
        'Beautiful Vake Park nearby',
        'High-end shopping and dining',
        'Embassy district',
        'Excellent for families',
        'Clean and well-maintained'
      ],
      cons: [
        'Expensive rent and living costs',
        'Limited nightlife',
        'Can be too quiet for some',
        'Fewer budget dining options'
      ],
      bestFor: ['Families with children', 'Embassy staff', 'Affluent professionals', 'Those seeking quiet lifestyle']
    },
    {
      id: 'vera',
      name: 'Vera',
      description: 'Trendy neighborhood with a bohemian vibe, popular among artists, young professionals, and the LGBTQ+ community.',
      rentPrice: { studio: 900, oneBr: 1300, twoBr: 2000 },
      safetyRating: 4.3,
      nightlifeRating: 4.6,
      restaurantRating: 4.4,
      transportRating: 4.4,
      shoppingRating: 3.9,
      familyFriendly: 3.8,
      expatsPopulation: 75,
      commuteToCenterMin: 10,
      averageAge: 29,
      walkability: 4.3,
      greenSpaces: 3.8,
      internetSpeed: 4.6,
      noiseLevel: 3,
      airQuality: 4.1,
      costOfLiving: 3.8,
      pros: [
        'Vibrant arts and culture scene',
        'Diverse and accepting community',
        'Great cafes and alternative venues',
        'Close to city center',
        'Good mix of old and new architecture'
      ],
      cons: [
        'Can be noisy at night',
        'Limited family amenities',
        'Some areas need renovation',
        'Parking can be difficult'
      ],
      bestFor: ['Artists and creatives', 'LGBTQ+ community', 'Young professionals', 'Culture enthusiasts']
    },
    {
      id: 'sololaki',
      name: 'Sololaki',
      description: 'Historic district adjacent to Old Town, offering a mix of traditional and modern living with great views.',
      rentPrice: { studio: 950, oneBr: 1400, twoBr: 2200 },
      safetyRating: 4.4,
      nightlifeRating: 4.1,
      restaurantRating: 4.6,
      transportRating: 4.6,
      shoppingRating: 4.0,
      familyFriendly: 4.0,
      expatsPopulation: 55,
      commuteToCenterMin: 8,
      averageAge: 33,
      walkability: 4.4,
      greenSpaces: 3.5,
      internetSpeed: 4.4,
      noiseLevel: 3,
      airQuality: 4.0,
      costOfLiving: 3.9,
      pros: [
        'Close to Old Town attractions',
        'Mix of historic and modern buildings',
        'Good restaurant scene',
        'Excellent transport links',
        'More affordable than Old Town'
      ],
      cons: [
        'Some steep streets',
        'Tourist overflow from Old Town',
        'Limited parking',
        'Noise from nearby entertainment areas'
      ],
      bestFor: ['History lovers', 'Professionals', 'Those wanting Old Town proximity', 'Culture enthusiasts']
    },
    {
      id: 'isani',
      name: 'Isani',
      description: 'Rapidly developing area across the river, offering modern apartments at competitive prices with good transport links.',
      rentPrice: { studio: 600, oneBr: 900, twoBr: 1400 },
      safetyRating: 4.2,
      nightlifeRating: 3.5,
      restaurantRating: 3.8,
      transportRating: 4.7,
      shoppingRating: 4.3,
      familyFriendly: 4.3,
      expatsPopulation: 40,
      commuteToCenterMin: 25,
      averageAge: 31,
      walkability: 3.8,
      greenSpaces: 4.0,
      internetSpeed: 4.5,
      noiseLevel: 2,
      airQuality: 4.2,
      costOfLiving: 2.8,
      pros: [
        'Very affordable rent',
        'New modern developments',
        'Good metro connections',
        'Large shopping centers',
        'Family-friendly',
        'Less crowded'
      ],
      cons: [
        'Further from city center',
        'Limited nightlife and dining',
        'Fewer cultural attractions',
        'Still developing infrastructure'
      ],
      bestFor: ['Budget-conscious expats', 'Families', 'Long-term residents', 'Remote workers']
    }
  ]

  const metrics = [
    { id: 'overall', name: 'Overall Rating', icon: Star },
    { id: 'safety', name: 'Safety', icon: Shield },
    { id: 'cost', name: 'Cost of Living', icon: DollarSign },
    { id: 'transport', name: 'Transportation', icon: Car },
    { id: 'dining', name: 'Restaurants', icon: Utensils },
    { id: 'nightlife', name: 'Nightlife', icon: Users },
    { id: 'family', name: 'Family-Friendly', icon: Heart }
  ]

  const handleNeighborhoodToggle = (neighborhoodId: string) => {
    setSelectedNeighborhoods(prev => {
      if (prev.includes(neighborhoodId)) {
        return prev.filter(id => id !== neighborhoodId)
      } else if (prev.length < 3) {
        return [...prev, neighborhoodId]
      }
      return prev
    })
  }

  const getMetricValue = (neighborhood: Neighborhood, metric: string) => {
    switch (metric) {
      case 'safety': return neighborhood.safetyRating
      case 'cost': return 6 - neighborhood.costOfLiving // Invert so higher is better (cheaper)
      case 'transport': return neighborhood.transportRating
      case 'dining': return neighborhood.restaurantRating
      case 'nightlife': return neighborhood.nightlifeRating
      case 'family': return neighborhood.familyFriendly
      default: return (neighborhood.safetyRating + neighborhood.restaurantRating + neighborhood.transportRating + neighborhood.familyFriendly) / 4
    }
  }

  const getMetricColor = (value: number) => {
    if (value >= 4.5) return 'text-green-600 bg-green-100'
    if (value >= 4.0) return 'text-blue-600 bg-blue-100'
    if (value >= 3.5) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const selectedNeighborhoodData = neighborhoods.filter(n => selectedNeighborhoods.includes(n.id))

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <MapPin className="h-8 w-8 text-green-600 mr-3" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Neighborhood Comparison</h2>
          <p className="text-gray-600">Compare up to 3 neighborhoods to find your perfect area</p>
        </div>
      </div>

      {/* Neighborhood Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Neighborhoods (max 3)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {neighborhoods.map(neighborhood => (
            <button
              key={neighborhood.id}
              onClick={() => handleNeighborhoodToggle(neighborhood.id)}
              disabled={!selectedNeighborhoods.includes(neighborhood.id) && selectedNeighborhoods.length >= 3}
              className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedNeighborhoods.includes(neighborhood.id)
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : selectedNeighborhoods.length >= 3
                  ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'border-gray-200 hover:border-green-300 text-gray-700'
              }`}
            >
              <div className="font-semibold text-sm">{neighborhood.name}</div>
              <div className="text-xs mt-1">₾{neighborhood.rentPrice.oneBr}/mo (1BR)</div>
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Metric Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Compare By</h3>
        <div className="flex flex-wrap gap-2">
          {metrics.map(metric => (
            <button
              key={metric.id}
              onClick={() => setComparisonMetric(metric.id)}
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                comparisonMetric === metric.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <metric.icon className="h-4 w-4 mr-1" />
              {metric.name}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      {selectedNeighborhoodData.length > 0 && (
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-2 font-semibold text-gray-900">Metric</th>
                {selectedNeighborhoodData.map(neighborhood => (
                  <th key={neighborhood.id} className="text-center py-3 px-2 font-semibold text-gray-900">
                    {neighborhood.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-2 font-semibold text-gray-700">Rent (1BR)</td>
                {selectedNeighborhoodData.map(neighborhood => (
                  <td key={neighborhood.id} className="text-center py-3 px-2">
                    <span className="font-bold text-green-600">₾{neighborhood.rentPrice.oneBr}</span>
                    <div className="text-xs text-gray-500">/month</div>
                  </td>
                ))}
              </tr>
              
              <tr className="border-b border-gray-100">
                <td className="py-3 px-2 font-semibold text-gray-700">Safety Rating</td>
                {selectedNeighborhoodData.map(neighborhood => (
                  <td key={neighborhood.id} className="text-center py-3 px-2">
                    <span className={`px-2 py-1 rounded-full text-sm font-semibold ${getMetricColor(neighborhood.safetyRating)}`}>
                      {neighborhood.safetyRating}/5
                    </span>
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100">
                <td className="py-3 px-2 font-semibold text-gray-700">Commute to Center</td>
                {selectedNeighborhoodData.map(neighborhood => (
                  <td key={neighborhood.id} className="text-center py-3 px-2">
                    <span className="font-semibold">{neighborhood.commuteToCenterMin} min</span>
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100">
                <td className="py-3 px-2 font-semibold text-gray-700">Expat Population</td>
                {selectedNeighborhoodData.map(neighborhood => (
                  <td key={neighborhood.id} className="text-center py-3 px-2">
                    <span className="font-semibold">{neighborhood.expatsPopulation}%</span>
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100">
                <td className="py-3 px-2 font-semibold text-gray-700">Walkability</td>
                {selectedNeighborhoodData.map(neighborhood => (
                  <td key={neighborhood.id} className="text-center py-3 px-2">
                    <span className={`px-2 py-1 rounded-full text-sm font-semibold ${getMetricColor(neighborhood.walkability)}`}>
                      {neighborhood.walkability}/5
                    </span>
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100">
                <td className="py-3 px-2 font-semibold text-gray-700">Restaurants</td>
                {selectedNeighborhoodData.map(neighborhood => (
                  <td key={neighborhood.id} className="text-center py-3 px-2">
                    <span className={`px-2 py-1 rounded-full text-sm font-semibold ${getMetricColor(neighborhood.restaurantRating)}`}>
                      {neighborhood.restaurantRating}/5
                    </span>
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100">
                <td className="py-3 px-2 font-semibold text-gray-700">Nightlife</td>
                {selectedNeighborhoodData.map(neighborhood => (
                  <td key={neighborhood.id} className="text-center py-3 px-2">
                    <span className={`px-2 py-1 rounded-full text-sm font-semibold ${getMetricColor(neighborhood.nightlifeRating)}`}>
                      {neighborhood.nightlifeRating}/5
                    </span>
                  </td>
                ))}
              </tr>

              <tr className="border-b border-gray-100">
                <td className="py-3 px-2 font-semibold text-gray-700">Family-Friendly</td>
                {selectedNeighborhoodData.map(neighborhood => (
                  <td key={neighborhood.id} className="text-center py-3 px-2">
                    <span className={`px-2 py-1 rounded-full text-sm font-semibold ${getMetricColor(neighborhood.familyFriendly)}`}>
                      {neighborhood.familyFriendly}/5
                    </span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Detailed Comparison Cards */}
      {selectedNeighborhoodData.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Detailed Comparison</h3>
          <div className="grid gap-6">
            {selectedNeighborhoodData.map(neighborhood => (
              <div key={neighborhood.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{neighborhood.name}</h4>
                    <p className="text-gray-600 mt-1">{neighborhood.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">₾{neighborhood.rentPrice.oneBr}</div>
                    <div className="text-sm text-gray-500">1BR/month</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">Pros</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {neighborhood.pros.slice(0, 3).map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-red-700 mb-2">Cons</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {neighborhood.cons.slice(0, 3).map((con, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-red-600 mr-2">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-blue-700 mb-2">Best For</h5>
                    <div className="flex flex-wrap gap-1">
                      {neighborhood.bestFor.map((type, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-gray-700">Avg Age</div>
                    <div className="text-lg font-bold text-blue-600">{neighborhood.averageAge}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-700">Noise Level</div>
                    <div className="text-lg font-bold text-orange-600">{neighborhood.noiseLevel}/5</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-700">Air Quality</div>
                    <div className="text-lg font-bold text-green-600">{neighborhood.airQuality}/5</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-700">Internet</div>
                    <div className="text-lg font-bold text-purple-600">{neighborhood.internetSpeed}/5</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedNeighborhoodData.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <MapPin className="h-16 w-16 mx-auto mb-4 text-gray-300" />
          <p>Select neighborhoods above to start comparing</p>
        </div>
      )}
    </div>
  )
}