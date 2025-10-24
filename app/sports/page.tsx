'use client'

import { Dumbbell, MapPin, Clock, DollarSign, Globe, ExternalLink } from 'lucide-react'

const SportsPage = () => {
  const gyms = [
    {
      name: 'World Class Fitness',
      type: 'Premium Gym Chain',
      locations: ['Galleria Tbilisi', 'East Point', 'Mall of Georgia'],
      priceRange: '150-300 GEL/month',
      facilities: ['Modern Equipment', 'Pool', 'Group Classes', 'Sauna', 'Personal Training'],
      website: 'worldclass.ge'
    },
    {
      name: 'Fitness Time',
      type: 'Mid-range Gym',
      locations: ['Multiple locations'],
      priceRange: '80-150 GEL/month',
      facilities: ['Cardio Equipment', 'Weight Training', 'Group Classes', 'Locker Rooms'],
      website: 'fitnesstime.ge'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sports & Fitness</h1>
          <p className="text-xl max-w-3xl">
            Stay active in Tbilisi with our guide to gyms, fitness centers, and sports facilities. 
            Find the perfect place to maintain your fitness routine as an expat.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {gyms.map((gym, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{gym.name}</h3>
              <p className="text-lg text-yellow-600 mb-4">{gym.type}</p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Locations:</h4>
                  <ul className="space-y-1">
                    {gym.locations.map((location, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{location}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Price:</h4>
                  <p className="text-green-600 font-semibold">{gym.priceRange}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Facilities:</h4>
                <div className="flex flex-wrap gap-2">
                  {gym.facilities.map((facility, idx) => (
                    <span key={idx} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      {facility}
                    </span>
                  ))}
                </div>
              </div>

              {gym.website && (
                <div className="flex items-center text-gray-600">
                  <Globe className="h-4 w-4 mr-2 text-purple-500" />
                  <div>
                    <div className="font-semibold">Website</div>
                    <a href={`https://${gym.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline flex items-center">
                      {gym.website}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SportsPage