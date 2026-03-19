'use client'

import { useState } from 'react'
import { MapPin, Filter, X, ExternalLink, Star, Navigation, Utensils, Home, ShoppingBag, Dumbbell, Stethoscope, Train, Coffee } from 'lucide-react'

interface MapLocation {
  id: string
  name: string
  category: string
  lat: number
  lng: number
  address: string
  rating?: number
  description: string
  link?: string
}

interface InteractiveMapProps {
  locations?: MapLocation[]
  center?: { lat: number; lng: number }
  zoom?: number
  height?: string
  showFilters?: boolean
}

const InteractiveMap = ({ 
  locations: customLocations, 
  center = { lat: 41.7151, lng: 44.8271 },
  zoom = 13,
  height = '500px',
  showFilters = true
}: InteractiveMapProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null)

  const defaultLocations: MapLocation[] = [
    // Neighborhoods
    { id: 'n1', name: 'Vake District', category: 'neighborhood', lat: 41.7089, lng: 44.7500, address: 'Vake, Tbilisi', rating: 4.8, description: 'Upscale residential area with parks and embassies' },
    { id: 'n2', name: 'Saburtalo District', category: 'neighborhood', lat: 41.7270, lng: 44.7650, address: 'Saburtalo, Tbilisi', rating: 4.5, description: 'Modern district with malls and universities' },
    { id: 'n3', name: 'Old Town', category: 'neighborhood', lat: 41.6910, lng: 44.8080, address: 'Old Tbilisi', rating: 4.7, description: 'Historic heart with traditional architecture' },
    { id: 'n4', name: 'Vera District', category: 'neighborhood', lat: 41.7050, lng: 44.7850, address: 'Vera, Tbilisi', rating: 4.4, description: 'Bohemian area with art galleries and cafes' },
    
    // Restaurants
    { id: 'r1', name: 'Shavi Lomi', category: 'restaurant', lat: 41.7050, lng: 44.7920, address: '28 Zubalashvili St', rating: 4.8, description: 'Modern Georgian cuisine in a cozy setting' },
    { id: 'r2', name: 'Cafe Littera', category: 'restaurant', lat: 41.6970, lng: 44.8010, address: '13 Machabeli St', rating: 4.9, description: 'Fine dining in the Writers House of Georgia' },
    { id: 'r3', name: 'Barbarestan', category: 'restaurant', lat: 41.6990, lng: 44.7980, address: '132 Aghmashenebeli Ave', rating: 4.7, description: 'Historic recipes from 19th century cookbook' },
    
    // Shopping
    { id: 's1', name: 'Tbilisi Mall', category: 'shopping', lat: 41.7350, lng: 44.7580, address: '16 Kakheti Highway', rating: 4.3, description: 'Largest shopping mall in Tbilisi' },
    { id: 's2', name: 'East Point', category: 'shopping', lat: 41.7100, lng: 44.8500, address: 'Kakheti Highway', rating: 4.4, description: 'Modern shopping center with cinema' },
    { id: 's3', name: 'Galleria Tbilisi', category: 'shopping', lat: 41.7050, lng: 44.7600, address: '2 Rustaveli Ave', rating: 4.2, description: 'Premium shopping in city center' },
    
    // Gyms
    { id: 'g1', name: 'Fitness Palace', category: 'gym', lat: 41.7200, lng: 44.7700, address: 'Saburtalo', rating: 4.6, description: 'Premium gym with pool and spa' },
    { id: 'g2', name: 'CrossFit Tbilisi', category: 'gym', lat: 41.7100, lng: 44.7800, address: 'Vake', rating: 4.5, description: 'CrossFit box with experienced coaches' },
    
    // Medical
    { id: 'm1', name: 'Aversi Clinic', category: 'medical', lat: 41.7150, lng: 44.7900, address: 'Vazha-Pshavela Ave', rating: 4.4, description: 'Modern clinic with English-speaking doctors' },
    { id: 'm2', name: 'MediClub Georgia', category: 'medical', lat: 41.7080, lng: 44.7750, address: 'Tashkent St', rating: 4.6, description: 'International standard healthcare' },
    
    // Transport
    { id: 't1', name: 'Rustaveli Metro', category: 'transport', lat: 41.6970, lng: 44.8000, address: 'Rustaveli Ave', description: 'Central metro station' },
    { id: 't2', name: 'Vake Metro', category: 'transport', lat: 41.7089, lng: 44.7500, address: 'Chavchavadze Ave', description: 'Vake district metro station' },
    { id: 't3', name: 'Station Square Metro', category: 'transport', lat: 41.7250, lng: 44.8050, address: 'Station Square', description: 'Main railway station area' },
    
    // Cafes
    { id: 'c1', name: 'Stamba Hotel Cafe', category: 'cafe', lat: 41.7030, lng: 44.7920, address: '14 Merab Kostava St', rating: 4.7, description: 'Trendy cafe popular with digital nomads' },
    { id: 'c2', name: 'Fabrika', category: 'cafe', lat: 41.6950, lng: 44.8020, address: '8 Egnate Ninoshvili St', rating: 4.6, description: 'Creative hub with coworking and cafe' },
  ]

  const locations = customLocations || defaultLocations

  const categories = [
    { id: 'all', name: 'All', icon: MapPin, color: 'bg-gray-500' },
    { id: 'neighborhood', name: 'Neighborhoods', icon: Home, color: 'bg-blue-500' },
    { id: 'restaurant', name: 'Restaurants', icon: Utensils, color: 'bg-red-500' },
    { id: 'shopping', name: 'Shopping', icon: ShoppingBag, color: 'bg-purple-500' },
    { id: 'gym', name: 'Gyms', icon: Dumbbell, color: 'bg-orange-500' },
    { id: 'medical', name: 'Medical', icon: Stethoscope, color: 'bg-green-500' },
    { id: 'transport', name: 'Transport', icon: Train, color: 'bg-yellow-600' },
    { id: 'cafe', name: 'Cafes', icon: Coffee, color: 'bg-amber-600' },
  ]

  const filteredLocations = selectedCategory === 'all'
    ? locations
    : locations.filter(l => l.category === selectedCategory)

  const getCategoryIcon = (cat: string) => {
    const found = categories.find(c => c.id === cat)
    return found ? found.color : 'bg-gray-500'
  }

  const mapUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=${center.lat},${center.lng}&zoom=${zoom}&maptype=roadmap`

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Filters */}
      {showFilters && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2 mb-3">
            <Filter className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-semibold text-gray-700">Filter Locations:</span>
            <span className="text-xs text-gray-500">({filteredLocations.length} shown)</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? `${cat.color} text-white shadow-md`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <cat.icon className="h-3 w-3" />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Map */}
      <div className="relative" style={{ height }}>
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47600!2d${center.lng}!3d${center.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Tbilisi Map"
        ></iframe>
      </div>

      {/* Location List */}
      <div className="max-h-80 overflow-y-auto">
        <div className="p-4">
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            {selectedCategory === 'all' ? 'All Locations' : categories.find(c => c.id === selectedCategory)?.name}
            <span className="text-gray-500 font-normal ml-2">({filteredLocations.length})</span>
          </h3>
          <div className="space-y-2">
            {filteredLocations.map((location) => (
              <div
                key={location.id}
                className={`p-3 rounded-lg border transition-all cursor-pointer ${
                  selectedLocation?.id === location.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedLocation(
                  selectedLocation?.id === location.id ? null : location
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`${getCategoryIcon(location.category)} text-white text-[10px] px-2 py-0.5 rounded-full`}>
                        {location.category}
                      </span>
                      <span className="text-sm font-bold text-gray-900">{location.name}</span>
                    </div>
                    <div className="text-xs text-gray-600 mb-1">{location.address}</div>
                    {selectedLocation?.id === location.id && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-700 mb-2">{location.description}</p>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800"
                        >
                          <Navigation className="h-3 w-3" />
                          <span>Open in Google Maps</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    )}
                  </div>
                  {location.rating && (
                    <div className="flex items-center space-x-1 ml-2">
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-semibold">{location.rating}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InteractiveMap
