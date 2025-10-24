'use client'

import { Brain, Target, TrendingUp, Calendar, MapPin, Lightbulb } from 'lucide-react'

const RecommendationsPage = () => {
  const aiRecommendations = [
    {
      title: 'Perfect for New Arrivals',
      description: 'AI-curated essentials for your first month in Tbilisi',
      items: [
        { 
          name: 'Vake Neighborhood', 
          type: 'Housing', 
          address: 'Vake District, Tbilisi',
          coordinates: '41.7151,44.7661',
          link: '/housing#vake'
        },
        { 
          name: 'Rustaveli Metro Station', 
          type: 'Transport', 
          address: 'Rustaveli Avenue, Tbilisi',
          coordinates: '41.6941,44.7947',
          link: '/transport#metro'
        },
        { 
          name: 'Georgian Language Center', 
          type: 'Language', 
          address: 'Chavchavadze Ave 74, Tbilisi',
          coordinates: '41.7086,44.7736',
          link: '/language'
        },
        { 
          name: 'Tbilisi City Hall', 
          type: 'Emergency Services', 
          address: 'Freedom Square 2, Tbilisi',
          coordinates: '41.6938,44.8015',
          link: '/medical#emergency'
        }
      ],
      confidence: 95,
      icon: <Target className="h-5 w-5" />
    },
    {
      title: 'Trending This Week',
      description: 'Most popular content among expats right now',
      items: [
        { 
          name: 'Château Mukhrani Winery', 
          type: 'Wine Tasting', 
          address: 'Mukhrani, Mtskheta-Mtianeti',
          coordinates: '41.9167,44.6333',
          link: '/activities#wine-tours'
        },
        { 
          name: 'Gudauri Ski Resort', 
          type: 'Winter Sports', 
          address: 'Gudauri, Mtskheta-Mtianeti',
          coordinates: '42.4789,44.4731',
          link: '/activities#skiing'
        },
        { 
          name: 'Culinary Studio Supra', 
          type: 'Cooking Classes', 
          address: 'Aghmashenebeli Ave 15, Tbilisi',
          coordinates: '41.6922,44.8108',
          link: '/culture#cooking'
        },
        { 
          name: 'Traditional Georgian House', 
          type: 'Cultural Experience', 
          address: 'Old Town, Tbilisi',
          coordinates: '41.6896,44.8067',
          link: '/culture#supra'
        }
      ],
      confidence: 88,
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: 'Seasonal Suggestions',
      description: 'AI-recommended activities for current weather and season',
      items: [
        { 
          name: 'Mtatsminda Park', 
          type: 'Winter Activities', 
          address: 'Mtatsminda Plateau, Tbilisi',
          coordinates: '41.6953,44.7869',
          link: '/activities#mtatsminda'
        },
        { 
          name: 'National Museum of Georgia', 
          type: 'Indoor Culture', 
          address: 'Rustaveli Ave 3, Tbilisi',
          coordinates: '41.6941,44.7947',
          link: '/arts#museums'
        },
        { 
          name: 'Orbeliani Baths', 
          type: 'Hot Springs', 
          address: 'Abanotubani, Tbilisi',
          coordinates: '41.6896,44.8067',
          link: '/activities#hot-springs'
        },
        { 
          name: 'Shavi Lomi Restaurant', 
          type: 'Cozy Dining', 
          address: 'Besiki St 19, Tbilisi',
          coordinates: '41.7086,44.7736',
          link: '/restaurants#shavi-lomi'
        }
      ],
      confidence: 92,
      icon: <Calendar className="h-5 w-5" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 text-white py-8 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 10 L40 20 L30 30 L20 20 Z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <div className="bg-white/10 p-2 rounded-full mr-3">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-1">
                Stew's Personalized Recommendations
              </h1>
              <div className="flex items-center text-purple-200">
                <Target className="h-4 w-4 mr-2" />
                <span className="text-sm">AI-Powered Location Suggestions</span>
              </div>
            </div>
          </div>
          <p className="text-lg max-w-3xl">
            Machine learning algorithms analyze expat preferences to suggest the most relevant places and experiences in Tbilisi.
          </p>
        </div>
      </div>

      {/* Recommendations Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {aiRecommendations.map((rec, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-3">
                      {rec.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{rec.title}</h3>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {rec.confidence}% match
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{rec.description}</p>
                
                <div className="space-y-3">
                  {rec.items.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors overflow-hidden">
                      <div className="p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-purple-500 mr-2" />
                            <span className="font-semibold text-gray-900 text-sm">{item.name}</span>
                          </div>
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{item.address}</p>
                        
                        {/* Small Map Preview */}
                        <div className="mb-3 relative">
                          <div 
                            className="h-24 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity relative border border-gray-200"
                            onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${item.coordinates}`, '_blank')}
                          >
                            <iframe
                              src={`https://www.openstreetmap.org/export/embed.html?bbox=${parseFloat(item.coordinates.split(',')[1])-0.005},${parseFloat(item.coordinates.split(',')[0])-0.005},${parseFloat(item.coordinates.split(',')[1])+0.005},${parseFloat(item.coordinates.split(',')[0])+0.005}&layer=mapnik&marker=${item.coordinates}`}
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              title={`Map of ${item.name}`}
                              className="pointer-events-none"
                            ></iframe>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-1 left-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-gray-800 flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              Click to open
                            </div>
                          </div>
                          <div className="absolute top-1 right-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-gray-600 font-semibold">
                            📍 Tbilisi
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <a 
                            href={item.link}
                            className="text-purple-600 hover:text-purple-700 text-xs font-semibold flex items-center"
                          >
                            <Lightbulb className="h-3 w-3 mr-1" />
                            Learn More
                          </a>
                          <a 
                            href={`https://www.google.com/maps/search/?api=1&query=${item.coordinates}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 text-xs font-semibold flex items-center"
                          >
                            <MapPin className="h-3 w-3 mr-1" />
                            Open in Maps
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                  Explore All Recommendations
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-200 text-purple-700 p-3 rounded-lg mr-4">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">How AI Recommendations Work</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Analyzes your browsing patterns and preferences</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Considers seasonal factors and current trends</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Matches locations to your experience level</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Updates recommendations based on feedback</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-200 text-blue-700 p-3 rounded-lg mr-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Personalization Features</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Location-based suggestions with real maps</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Direct links to detailed information</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Google Maps integration for navigation</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Confidence scores for each recommendation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecommendationsPage