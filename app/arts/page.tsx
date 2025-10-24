'use client'

import { Palette, MapPin, Clock, Star } from 'lucide-react'

const ArtsPage = () => {
  const venues = [
    {
      name: 'Georgian National Museum',
      type: 'Museum',
      description: 'Comprehensive collection of Georgian history and culture',
      location: 'Rustaveli Avenue',
      hours: '10:00-18:00 (Closed Mondays)'
    },
    {
      name: 'Tbilisi Opera and Ballet Theatre',
      type: 'Theatre',
      description: 'Historic venue for opera, ballet, and classical performances',
      location: 'Rustaveli Avenue',
      hours: 'Performance schedule varies'
    },
    {
      name: 'Museum of Fine Arts',
      type: 'Art Museum',
      description: 'Georgian and international art collections',
      location: 'Gudiashvili Square',
      hours: '10:00-17:00 (Closed Mondays)'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Arts & Culture</h1>
          <p className="text-xl max-w-3xl">
            Explore Tbilisi's vibrant arts scene. Discover museums, theaters, galleries, 
            and cultural venues that showcase Georgia's rich artistic heritage.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {venues.map((venue, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Venue Image */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('https://picsum.photos/800/400?random=${index + 600}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-black/50 text-white px-4 py-2 rounded-lg font-semibold text-center">
                    {venue.name}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {venue.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-cyan-100 text-cyan-600 p-3 rounded-lg mr-4">
                    <Palette className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{venue.name}</h3>
                    <p className="text-cyan-600 mb-2">{venue.type}</p>
                    <p className="text-gray-700 mb-4">{venue.description}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{venue.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{venue.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArtsPage