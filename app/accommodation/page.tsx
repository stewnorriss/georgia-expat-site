'use client'

import { Bed, Star, Wifi, Car } from 'lucide-react'

const AccommodationPage = () => {
  const hotels = [
    {
      name: 'Rooms Hotel Tbilisi',
      type: 'Boutique Hotel',
      rating: 4.8,
      priceRange: '$150-300',
      location: 'Vera',
      amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Gym', 'Rooftop Terrace']
    },
    {
      name: 'Stamba Hotel',
      type: 'Design Hotel',
      rating: 4.9,
      priceRange: '$200-400',
      location: 'Vera',
      amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Spa', 'Library']
    },
    {
      name: 'Fabrika Tbilisi',
      type: 'Hostel/Hotel',
      rating: 4.6,
      priceRange: '$30-120',
      location: 'Marjanishvili',
      amenities: ['Free WiFi', 'Co-working', 'Bar', 'Events', 'Shared Kitchen']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Accommodation</h1>
          <p className="text-xl max-w-3xl">
            Find the perfect place to stay in Tbilisi. From luxury hotels to budget hostels, 
            discover accommodation options for every traveler and budget.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {hotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Hotel Image */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('https://picsum.photos/800/400?random=${index + 100}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-black/50 text-white px-4 py-2 rounded-lg font-semibold text-center">
                    {hotel.name}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {hotel.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold">{hotel.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-green-600">
                    {hotel.priceRange}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                    <p className="text-lg text-indigo-600 mb-2">{hotel.type}</p>
                    <p className="text-gray-600">{hotel.location}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{hotel.rating}</span>
                    </div>
                    <span className="text-green-600 font-semibold">{hotel.priceRange}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity, idx) => (
                    <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AccommodationPage