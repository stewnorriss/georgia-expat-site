'use client'

import { Home, MapPin, DollarSign, Wifi, Car } from 'lucide-react'

const HousingPage = () => {
  const neighborhoods = [
    {
      name: 'Vake',
      type: 'Upscale Residential',
      priceRange: '$800-2000',
      description: 'Popular expat area with modern amenities, parks, and international restaurants.',
      pros: ['Safe and clean', 'Good restaurants', 'Vake Park nearby', 'Expat community'],
      cons: ['More expensive', 'Can be crowded', 'Limited nightlife']
    },
    {
      name: 'Saburtalo',
      type: 'Modern District',
      priceRange: '$600-1500',
      description: 'Newer area with shopping malls, modern apartments, and good transport links.',
      pros: ['Modern buildings', 'Shopping centers', 'Good metro access', 'Family-friendly'],
      cons: ['Less character', 'Further from center', 'Traffic congestion']
    },
    {
      name: 'Old Town',
      type: 'Historic Center',
      priceRange: '$700-1800',
      description: 'Charming historic area with traditional architecture and tourist attractions.',
      pros: ['Historic charm', 'Walking distance to attractions', 'Restaurants and cafes', 'Cultural sites'],
      cons: ['Tourist crowds', 'Older buildings', 'Parking issues', 'Can be noisy']
    },
    {
      name: 'Vera',
      type: 'Central Residential',
      priceRange: '$600-1400',
      description: 'Central location with mix of old and new buildings, close to Rustaveli Avenue.',
      pros: ['Central location', 'Good transport', 'Mix of housing options', 'Cultural venues'],
      cons: ['Busy streets', 'Older infrastructure', 'Limited parking']
    }
  ]

  const housingTips = [
    {
      title: 'Finding Accommodation',
      tips: [
        'Use ss.ge and myhome.ge for listings',
        'Consider hiring a local agent',
        'Visit properties in person',
        'Check for heating and hot water',
        'Negotiate rent, especially for long-term'
      ]
    },
    {
      title: 'Legal Requirements',
      tips: [
        'Register address with authorities',
        'Get rental agreement in Georgian and English',
        'Understand deposit requirements (usually 1-2 months)',
        'Check utility responsibilities',
        'Know your tenant rights'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-purple-600 to-indigo-600 text-white py-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='10' y='20' width='60' height='40'/%3E%3Crect x='20' y='10' width='40' height='20'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Home className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Housing in Tbilisi</h1>
              <div className="flex items-center text-purple-200">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Find Your Perfect Home</span>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Find your perfect home in Tbilisi. Explore neighborhoods, understand the rental market, 
            and get practical tips for securing accommodation as an expat.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 mb-12">
          {neighborhoods.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Neighborhood Image */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('https://picsum.photos/800/400?random=${index + 700}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-black/50 text-white px-4 py-2 rounded-lg font-semibold text-center">
                    {area.name}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {area.type}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-green-600">
                    {area.priceRange}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{area.name}</h3>
                    <p className="text-lg text-purple-600 mb-2">{area.type}</p>
                  </div>
                  <div className="flex items-center text-green-600 font-semibold">
                    <DollarSign className="h-5 w-5 mr-1" />
                    <span>{area.priceRange}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{area.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">✓ Pros:</h4>
                    <ul className="space-y-1">
                      {area.pros.map((pro, idx) => (
                        <li key={idx} className="text-gray-700 text-sm">• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">✗ Cons:</h4>
                    <ul className="space-y-1">
                      {area.cons.map((con, idx) => (
                        <li key={idx} className="text-gray-700 text-sm">• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {housingTips.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HousingPage