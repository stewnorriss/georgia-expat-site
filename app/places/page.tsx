'use client'

import { MapPin, Clock, Camera, Star, Globe, ExternalLink } from 'lucide-react'

const PlacesPage = () => {
  const places = [
    {
      name: 'Narikala Fortress',
      category: 'Historical Site',
      rating: 4.8,
      visitTime: '2-3 hours',
      description: 'Ancient 4th-century fortress overlooking Tbilisi with panoramic city views.',
      highlights: ['City Views', 'Historical Architecture', 'Cable Car Access'],
      bestTime: 'Sunset',
      website: 'tbilisi.gov.ge/page/narikala-fortress',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Old Town (Dzveli Kalaki)',
      category: 'Historic District',
      rating: 4.9,
      visitTime: 'Half day',
      description: 'Charming cobblestone streets with traditional architecture, cafes, and shops.',
      highlights: ['Traditional Architecture', 'Local Shops', 'Restaurants'],
      bestTime: 'Morning or Evening',
      website: 'georgia.travel/en/discover-georgia/tbilisi/old-town',
      image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Sulfur Baths (Abanotubani)',
      category: 'Cultural Experience',
      rating: 4.6,
      visitTime: '2-4 hours',
      description: 'Historic sulfur baths where Tbilisi was founded, offering relaxation and tradition.',
      highlights: ['Thermal Baths', 'Historical Significance', 'Relaxation'],
      bestTime: 'Afternoon',
      website: 'abanotubani.ge',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Bridge of Peace',
      category: 'Modern Architecture',
      rating: 4.5,
      visitTime: '30 minutes',
      description: 'Stunning modern pedestrian bridge with LED light displays at night.',
      highlights: ['Modern Design', 'Night Illumination', 'River Views'],
      bestTime: 'Night',
      website: 'tbilisi.gov.ge/page/bridge-of-peace',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Mtatsminda Park',
      category: 'Recreation',
      rating: 4.7,
      visitTime: 'Half day',
      description: 'Amusement park on Mount Mtatsminda with rides, restaurants, and city views.',
      highlights: ['Amusement Rides', 'Panoramic Views', 'Family Fun'],
      bestTime: 'Afternoon/Evening',
      website: 'mtatsmindapark.ge',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Georgian National Museum',
      category: 'Museum',
      rating: 4.4,
      visitTime: '2-3 hours',
      description: 'Comprehensive museum showcasing Georgian history, culture, and archaeology.',
      highlights: ['Historical Artifacts', 'Cultural Exhibits', 'Educational'],
      bestTime: 'Morning',
      website: 'museum.ge',
      image: 'https://images.unsplash.com/photo-1566127992631-137a642a90f4?w=800&h=450&fit=crop&crop=center'
    }
  ]

  const additionalPlaces = [
    'Rustaveli Avenue', 'Dry Bridge Market', 'Rike Park', 'Tbilisi Opera House',
    'Sioni Cathedral', 'Anchiskhati Basilica', 'Metekhi Church', 'Chronicle of Georgia',
    'Turtle Lake', 'Botanical Garden', 'Funicular Railway', 'Shardeni Street',
    'Freedom Square', 'Leghvtakhevi Waterfall', 'Fabrika Tbilisi', 'Deserters Bazaar',
    'Vake Park', 'Lisi Lake', 'Tbilisi Sea', 'Ethnographic Museum', 'Modern Art Museum', 'Château Mukhrani'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 overflow-hidden">
        {/* Geometric Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='30,0 60,30 30,60 0,30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Camera className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Places to Visit in Tbilisi
              </h1>
              <div className="flex items-center text-blue-200">
                <MapPin className="h-5 w-5 mr-2" />
                <span>28 Amazing Destinations</span>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Explore amazing destinations in and around Tbilisi. From ancient fortresses to modern attractions, 
            discover the perfect blend of history, culture, and natural beauty.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {places.map((place, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Place Image */}
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('${place.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-black/50 text-white px-4 py-2 rounded-lg font-semibold text-center">
                    {place.name}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {place.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {place.bestTime}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{place.name}</h3>
                    <p className="text-lg text-blue-600 mb-2">{place.category}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{place.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{place.visitTime}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{place.description}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {place.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Best Time to Visit:</h4>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Camera className="h-4 w-4 mr-2" />
                      <span>{place.bestTime}</span>
                    </div>
                    {place.website && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Website:</h4>
                        <div className="flex items-center text-gray-600">
                          <Globe className="h-4 w-4 mr-2 text-purple-500" />
                          <a href={`https://${place.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                            {place.website}
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Additional places in grid format */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">More Places to Explore</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {additionalPlaces.map((name, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
                  </div>
                  <p className="text-xs text-gray-600">Detailed guide coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Day Trip Ideas</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Historical Tour:</strong> Narikala → Old Town → Sulfur Baths</li>
              <li>• <strong>Cultural Day:</strong> National Museum → Opera House → Rustaveli Avenue</li>
              <li>• <strong>Nature Escape:</strong> Botanical Garden → Turtle Lake → Mtatsminda</li>
              <li>• <strong>Modern Tbilisi:</strong> Bridge of Peace → Rike Park → Fabrika</li>
            </ul>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Visitor Tips</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Many attractions are free or very affordable</li>
              <li>• Wear comfortable walking shoes for Old Town</li>
              <li>• Bring a camera - Tbilisi is incredibly photogenic</li>
              <li>• Check opening hours, especially for museums</li>
              <li>• Consider a Tbilisi Card for discounts and transport</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacesPage