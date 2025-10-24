'use client'

import { 
  Mountain, 
  Camera, 
  Bike, 
  Plane, 
  TreePine,
  Waves,
  Snowflake,
  Sun,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Users,
  Calendar,
  Compass,
  Tent,
  Wine,
  Utensils,
  Music,
  Palette,
  Heart,
  Shield,
  Car,
  Train,
  Phone,
  Globe
} from 'lucide-react'

const ActivitiesPage = () => {
  const activities = [
    {
      category: 'Hiking & Nature',
      icon: <Mountain className="h-8 w-8" />,
      color: 'bg-green-500',
      description: 'Explore Georgia\'s stunning natural landscapes and mountain trails',
      activities: [
        {
          name: 'Mtatsminda Mountain Trails',
          difficulty: 'Easy',
          duration: '2-3 hours',
          cost: 'Free',
          description: 'Scenic trails with panoramic views of Tbilisi',
          bestTime: 'Spring-Fall',
          tips: 'Take the funicular up and hike down for easier access'
        },
        {
          name: 'Turtle Lake Hiking',
          difficulty: 'Moderate',
          duration: '3-4 hours',
          cost: 'Free',
          description: 'Beautiful lake surrounded by forest, perfect for picnics',
          bestTime: 'Year-round',
          tips: 'Bring water and snacks, great for sunset views'
        },
        {
          name: 'Tbilisi National Park',
          difficulty: 'Easy-Moderate',
          duration: '4-6 hours',
          cost: 'Free',
          description: 'Large protected area with diverse flora and fauna',
          bestTime: 'Spring-Fall',
          tips: 'Multiple trail options, check weather conditions'
        },
        {
          name: 'Narikala Fortress Walk',
          difficulty: 'Easy',
          duration: '1-2 hours',
          cost: 'Free',
          description: 'Historic fortress with stunning city views',
          bestTime: 'Year-round',
          tips: 'Best at sunset, combine with Old Town exploration'
        },
        {
          name: 'Botanical Garden Exploration',
          difficulty: 'Easy',
          duration: '2-3 hours',
          cost: '15 GEL',
          description: 'Beautiful terraced gardens with rare plant species',
          bestTime: 'Spring-Summer',
          tips: 'Wear comfortable shoes, bring camera for waterfall'
        }
      ]
    },
    {
      category: 'Day Trips',
      icon: <Camera className="h-8 w-8" />,
      color: 'bg-blue-500',
      description: 'Discover Georgia\'s rich history and culture on day trips from Tbilisi',
      activities: [
        {
          name: 'Mtskheta Ancient Capital',
          difficulty: 'Easy',
          duration: '6-8 hours',
          cost: '50-80 GEL (transport + guide)',
          description: 'UNESCO World Heritage site, former capital of Georgia',
          bestTime: 'Year-round',
          tips: 'Combine with Jvari Monastery, try local khachapuri'
        },
        {
          name: 'Jvari Monastery',
          difficulty: 'Easy',
          duration: '4-5 hours',
          cost: '40-60 GEL',
          description: '6th-century monastery with breathtaking valley views',
          bestTime: 'Year-round',
          tips: 'Perfect for photography, dress modestly for church visit'
        },
        {
          name: 'Gori and Stalin Museum',
          difficulty: 'Easy',
          duration: '8-10 hours',
          cost: '80-120 GEL',
          description: 'Stalin\'s birthplace and comprehensive museum',
          bestTime: 'Year-round',
          tips: 'Controversial but historically significant, guided tour recommended'
        },
        {
          name: 'Uplistsikhe Cave City',
          difficulty: 'Moderate',
          duration: '6-8 hours',
          cost: '70-100 GEL',
          description: 'Ancient rock-hewn town dating back 3,000 years',
          bestTime: 'Spring-Fall',
          tips: 'Wear sturdy shoes, bring water, amazing for history buffs'
        },
        {
          name: 'Sighnaghi Wine Region',
          difficulty: 'Easy',
          duration: '8-10 hours',
          cost: '100-150 GEL',
          description: 'Charming hilltop town in Georgia\'s premier wine region',
          bestTime: 'Spring-Fall',
          tips: 'Book wine tastings in advance, stay overnight for full experience'
        }
      ]
    },
    {
      category: 'Adventure Sports',
      icon: <Bike className="h-8 w-8" />,
      color: 'bg-red-500',
      description: 'Thrilling outdoor adventures for adrenaline seekers',
      activities: [
        {
          name: 'White Water Rafting',
          difficulty: 'Moderate-Hard',
          duration: '6-8 hours',
          cost: '120-200 GEL',
          description: 'Exciting rafting on Mtkvari and Aragvi rivers',
          bestTime: 'May-September',
          tips: 'No experience needed, safety equipment provided'
        },
        {
          name: 'Paragliding in Gudauri',
          difficulty: 'Easy (tandem)',
          duration: '4-6 hours',
          cost: '200-300 GEL',
          description: 'Soar over the Caucasus Mountains with professional pilots',
          bestTime: 'June-September',
          tips: 'Weather dependent, book with certified operators'
        },
        {
          name: 'Rock Climbing',
          difficulty: 'Moderate-Hard',
          duration: '4-8 hours',
          cost: '80-150 GEL',
          description: 'Climbing routes in Tbilisi area and surrounding regions',
          bestTime: 'Spring-Fall',
          tips: 'Equipment rental available, join local climbing groups'
        },
        {
          name: 'Mountain Biking',
          difficulty: 'Moderate',
          duration: '4-6 hours',
          cost: '60-100 GEL',
          description: 'Scenic mountain bike trails around Tbilisi',
          bestTime: 'Spring-Fall',
          tips: 'Bike rentals available, helmet mandatory'
        },
        {
          name: 'Skiing in Winter',
          difficulty: 'Easy-Hard',
          duration: 'Full day',
          cost: '150-250 GEL',
          description: 'World-class skiing in Gudauri and Bakuriani',
          bestTime: 'December-March',
          tips: 'Equipment rental on-site, lessons available for beginners'
        }
      ]
    },
    {
      category: 'Cultural Activities',
      icon: <Palette className="h-8 w-8" />,
      color: 'bg-purple-500',
      description: 'Immerse yourself in Georgian culture and traditions',
      activities: [
        {
          name: 'Wine Tasting Tours',
          difficulty: 'Easy',
          duration: '4-8 hours',
          cost: '80-200 GEL',
          description: 'Explore Georgia\'s 8,000-year winemaking tradition',
          bestTime: 'Year-round',
          tips: 'Try qvevri wines, learn about traditional methods'
        },
        {
          name: 'Georgian Cooking Classes',
          difficulty: 'Easy',
          duration: '3-4 hours',
          cost: '60-120 GEL',
          description: 'Learn to make khachapuri, khinkali, and other classics',
          bestTime: 'Year-round',
          tips: 'Book in advance, great for groups and families'
        },
        {
          name: 'Traditional Dance Shows',
          difficulty: 'Easy',
          duration: '2-3 hours',
          cost: '30-60 GEL',
          description: 'Experience Georgian polyphonic singing and folk dances',
          bestTime: 'Year-round',
          tips: 'Check Rustaveli Theatre schedule, dress nicely'
        },
        {
          name: 'Art Gallery Visits',
          difficulty: 'Easy',
          duration: '2-4 hours',
          cost: '10-30 GEL',
          description: 'Explore contemporary and traditional Georgian art',
          bestTime: 'Year-round',
          tips: 'Visit during First Friday art walks, many galleries free'
        },
        {
          name: 'Museum Tours',
          difficulty: 'Easy',
          duration: '2-4 hours',
          cost: '15-40 GEL',
          description: 'Discover Georgian history and culture',
          bestTime: 'Year-round',
          tips: 'National Museum has excellent collections, audio guides available'
        }
      ]
    }
  ]

  const seasonalActivities = [
    {
      season: 'Spring (March-May)',
      icon: <TreePine className="h-6 w-6" />,
      color: 'bg-green-400',
      activities: [
        'Hiking as nature awakens',
        'Wine region tours begin',
        'Botanical garden blooms',
        'Mild weather for city walks',
        'Easter celebrations'
      ],
      weather: 'Mild temperatures, occasional rain',
      tips: 'Pack layers, perfect time for outdoor activities'
    },
    {
      season: 'Summer (June-August)',
      icon: <Sun className="h-6 w-6" />,
      color: 'bg-yellow-400',
      activities: [
        'Mountain adventures peak season',
        'White water rafting',
        'Paragliding in Gudauri',
        'Beach trips to Batumi',
        'Outdoor festivals'
      ],
      weather: 'Hot and humid in city, cooler in mountains',
      tips: 'Start early to avoid heat, stay hydrated'
    },
    {
      season: 'Fall (September-November)',
      icon: <Mountain className="h-6 w-6" />,
      color: 'bg-orange-400',
      activities: [
        'Wine harvest season (Rtveli)',
        'Perfect hiking weather',
        'Cultural events resume',
        'Photography tours',
        'Mushroom foraging'
      ],
      weather: 'Crisp and clear, ideal conditions',
      tips: 'Best time to visit, book accommodations early'
    },
    {
      season: 'Winter (December-February)',
      icon: <Snowflake className="h-6 w-6" />,
      color: 'bg-blue-400',
      activities: [
        'Skiing in Gudauri/Bakuriani',
        'Hot springs visits',
        'Indoor cultural activities',
        'New Year celebrations',
        'Cozy wine tastings'
      ],
      weather: 'Cold with occasional snow',
      tips: 'Pack warm clothes, some mountain roads may be closed'
    }
  ]

  const practicalInfo = [
    {
      title: 'Transportation',
      icon: <Car className="h-5 w-5" />,
      tips: [
        'Rent a car for day trips outside Tbilisi',
        'Use marshrutkas (minibuses) for budget travel',
        'Book tours through reputable agencies',
        'Download offline maps for hiking'
      ]
    },
    {
      title: 'Safety',
      icon: <Shield className="h-5 w-5" />,
      tips: [
        'Georgia is very safe for outdoor activities',
        'Always inform someone of your hiking plans',
        'Check weather conditions before mountain activities',
        'Use certified operators for adventure sports'
      ]
    },
    {
      title: 'What to Bring',
      icon: <Tent className="h-5 w-5" />,
      tips: [
        'Comfortable hiking boots for trails',
        'Layers for changing mountain weather',
        'Sunscreen and hat for summer activities',
        'Camera for stunning Georgian landscapes'
      ]
    },
    {
      title: 'Local Contacts',
      icon: <Phone className="h-5 w-5" />,
      tips: [
        'Emergency services: 112',
        'Tourist police: 126',
        'Download emergency apps',
        'Keep hotel contact information handy'
      ]
    }
  ]

  const topDestinations = [
    {
      name: 'Kazbegi National Park',
      distance: '150km from Tbilisi',
      highlights: ['Gergeti Trinity Church', 'Mount Kazbek views', 'Alpine hiking'],
      difficulty: 'Moderate-Hard',
      bestFor: 'Mountain lovers, photographers'
    },
    {
      name: 'Svaneti Region',
      distance: '350km from Tbilisi',
      highlights: ['Medieval towers', 'UNESCO heritage', 'Pristine mountains'],
      difficulty: 'Hard',
      bestFor: 'Serious hikers, culture enthusiasts'
    },
    {
      name: 'Borjomi National Park',
      distance: '160km from Tbilisi',
      highlights: ['Mineral springs', 'Forest trails', 'Historic resort town'],
      difficulty: 'Easy-Moderate',
      bestFor: 'Families, wellness seekers'
    },
    {
      name: 'Vardzia Cave Monastery',
      distance: '250km from Tbilisi',
      highlights: ['12th-century caves', 'Historical significance', 'Unique architecture'],
      difficulty: 'Easy',
      bestFor: 'History buffs, photographers'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-teal-600 to-green-600 text-white py-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 10 L60 30 L40 50 L20 30 Z'/%3E%3Cpath d='M10 40 L30 60 L50 40 L30 20 Z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Mountain className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Activities & Adventures</h1>
              <div className="flex items-center text-teal-200">
                <Compass className="h-5 w-5 mr-2" />
                <span>Endless Adventures in Georgia</span>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            From mountain peaks to ancient caves, wine regions to cultural experiences - 
            discover the incredible diversity of activities that make Georgia an adventurer's paradise.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Activity Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Activity Categories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Category Header */}
                <div className={`h-20 bg-gradient-to-r ${category.color} bg-opacity-10 relative overflow-hidden flex items-center px-6`}>
                  <div className="flex items-center">
                    <div className={`${category.color} bg-opacity-20 text-gray-800 p-3 rounded-lg mr-4`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {category.activities.map((activity, idx) => (
                      <div key={idx} className="border-l-4 border-teal-500 pl-4 hover:bg-teal-50 p-3 rounded transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-900">{activity.name}</h4>
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              activity.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                              activity.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                              activity.difficulty.includes('Hard') ? 'bg-red-100 text-red-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {activity.difficulty}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-3">{activity.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 text-gray-500 mr-1" />
                            <span className="text-gray-600">{activity.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-3 w-3 text-gray-500 mr-1" />
                            <span className="text-gray-600">{activity.cost}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 text-gray-500 mr-1" />
                            <span className="text-gray-600">{activity.bestTime}</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-500 mr-1" />
                            <span className="text-gray-600 text-xs">Tip</span>
                          </div>
                        </div>
                        
                        <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-blue-700">
                          <strong>💡 Tip:</strong> {activity.tips}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Activities Guide */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Seasonal Activity Guide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalActivities.map((season, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className={`${season.color} text-white p-2 rounded-lg mr-3`}>
                    {season.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{season.season}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Best Activities:</h4>
                  <ul className="space-y-1">
                    {season.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900 mb-1">Weather:</h4>
                  <p className="text-gray-600 text-sm">{season.weather}</p>
                </div>
                
                <div className="bg-gray-50 p-3 rounded">
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">Tips:</h4>
                  <p className="text-gray-600 text-sm">{season.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Destinations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Top Adventure Destinations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {topDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{destination.distance}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Difficulty:</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      destination.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      destination.difficulty.includes('Moderate') ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {destination.difficulty}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Best For:</h4>
                    <p className="text-gray-600 text-sm">{destination.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Information */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Practical Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practicalInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 text-teal-600 p-2 rounded-lg mr-3">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{info.title}</h3>
                </div>
                <ul className="space-y-2">
                  {info.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivitiesPage