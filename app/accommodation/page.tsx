'use client'

import { Bed, Star, Wifi, Car, Globe, ExternalLink, MapPin, Phone, Clock, DollarSign } from 'lucide-react'
import PageHero from '../components/PageHero'

const AccommodationPage = () => {
  const getHotelImage = (name: string, index: number) => {
    const hotelImages: { [key: string]: string } = {
      'Rooms Hotel Tbilisi': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=400&fit=crop&crop=center',
      'Stamba Hotel': 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=400&fit=crop&crop=center',
      'Fabrika Tbilisi': 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=400&fit=crop&crop=center'
    }
    return hotelImages[name] || `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=400&fit=crop&crop=center&sig=${index}`
  }

  const hotels = [
    {
      name: 'Rooms Hotel Tbilisi',
      type: 'Boutique Hotel',
      rating: 4.8,
      priceRange: '$150-300',
      location: 'Vera',
      address: '14 Merab Kostava Street, Tbilisi 0108',
      phone: '+995 32 202 02 02',
      website: 'roomshotels.com/tbilisi',
      checkIn: '15:00',
      checkOut: '12:00',
      amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Gym', 'Rooftop Terrace'],
      description: 'Stylish boutique hotel in the heart of Vera district with contemporary design and excellent service.'
    },
    {
      name: 'Stamba Hotel',
      type: 'Design Hotel',
      rating: 4.9,
      priceRange: '$200-400',
      location: 'Vera',
      address: '14 Mikheil Tsinamdzgvrishvili Street, Tbilisi 0160',
      phone: '+995 32 202 04 04',
      website: 'stambahotel.com',
      checkIn: '15:00',
      checkOut: '12:00',
      amenities: ['Free WiFi', 'Restaurant', 'Bar', 'Spa', 'Library'],
      description: 'Award-winning design hotel in a converted Soviet publishing house with unique architecture and luxury amenities.'
    },
    {
      name: 'Fabrika Tbilisi',
      type: 'Hostel/Hotel',
      rating: 4.6,
      priceRange: '$30-120',
      location: 'Marjanishvili',
      address: '8 Egnate Ninoshvili Street, Tbilisi 0102',
      phone: '+995 32 292 29 29',
      website: 'fabrikatbilisi.com',
      checkIn: '14:00',
      checkOut: '11:00',
      amenities: ['Free WiFi', 'Co-working', 'Bar', 'Events', 'Shared Kitchen'],
      description: 'Creative hostel and hotel in a former Soviet sewing factory, popular with digital nomads and young travelers.'
    },
    {
      name: 'Radisson Blu Iveria Hotel',
      type: 'Luxury Hotel',
      rating: 4.7,
      priceRange: '$180-350',
      location: 'City Center',
      address: '1 Rose Revolution Square, Tbilisi 0108',
      phone: '+995 32 240 22 00',
      website: 'radissonhotels.com/tbilisi',
      checkIn: '15:00',
      checkOut: '12:00',
      amenities: ['Free WiFi', 'Pool', 'Spa', 'Multiple Restaurants', 'Casino'],
      description: 'Iconic luxury hotel with panoramic city views and comprehensive facilities in the heart of Tbilisi.'
    },
    {
      name: 'Tbilisi Marriott Hotel',
      type: 'Business Hotel',
      rating: 4.5,
      priceRange: '$160-280',
      location: 'Rustaveli Avenue',
      address: '13 Rustaveli Avenue, Tbilisi 0108',
      phone: '+995 32 277 92 00',
      website: 'marriott.com/tbilisi',
      checkIn: '15:00',
      checkOut: '12:00',
      amenities: ['Free WiFi', 'Business Center', 'Fitness Center', 'Restaurant', 'Meeting Rooms'],
      description: 'International business hotel on famous Rustaveli Avenue with modern amenities and professional service.'
    },
    {
      name: 'Ambassadori Tbilisi Hotel',
      type: 'Luxury Hotel',
      rating: 4.6,
      priceRange: '$140-250',
      location: 'Rustaveli Avenue',
      address: '13 Shota Rustaveli Avenue, Tbilisi 0108',
      phone: '+995 32 277 60 60',
      website: 'ambassadori.ge',
      checkIn: '14:00',
      checkOut: '12:00',
      amenities: ['Free WiFi', 'Spa', 'Pool', 'Restaurant', 'Casino'],
      description: 'Elegant hotel on Rustaveli Avenue offering luxury accommodations with traditional Georgian hospitality.'
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHero
        title="Accommodation"
        description="Find the perfect place to stay in Tbilisi. From luxury hotels to budget hostels, discover accommodation options for every traveler and budget."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {hotels.map((hotel, index) => (
            <div key={index} className="card overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Hotel Image */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('${getHotelImage(hotel.name, index)}')`,
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
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                    <p className="text-lg text-indigo-600 mb-2">{hotel.type}</p>
                    <p className="text-gray-700 mb-4">{hotel.description}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold text-lg">{hotel.rating}</span>
                    </div>
                    <span className="text-green-600 font-semibold text-lg">{hotel.priceRange}</span>
                  </div>
                </div>

                {/* Hotel Details Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-red-500" />
                    <div>
                      <div className="font-semibold">{hotel.location}</div>
                      <div className="text-sm">{hotel.address}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-green-500" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-sm">{hotel.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-500" />
                    <div>
                      <div className="font-semibold">Check-in/out</div>
                      <div className="text-sm">{hotel.checkIn} / {hotel.checkOut}</div>
                    </div>
                  </div>
                  {hotel.website && (
                    <div className="flex items-center text-gray-600">
                      <Globe className="h-4 w-4 mr-2 text-purple-500" />
                      <div>
                        <div className="font-semibold">Website</div>
                        <a href={`https://${hotel.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline flex items-center">
                          {hotel.website}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Amenities */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity, idx) => (
                      <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                        {amenity}
                      </span>
                    ))}
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

export default AccommodationPage