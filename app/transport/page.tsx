'use client'

import { 
  Train, 
  Bus, 
  Car, 
  Plane, 
  CreditCard, 
  Clock, 
  MapPin, 
  Smartphone,
  Wallet,
  Navigation,
  AlertCircle,
  CheckCircle,
  Star,
  Users,
  Route,
  Zap,
  Shield,
  Globe,
  Phone,
  Download
} from 'lucide-react'

const TransportPage = () => {
  const transportModes = [
    {
      icon: <Train className="h-8 w-8" />,
      title: 'Metro System',
      description: 'Tbilisi\'s efficient metro system with 2 lines covering major areas',
      color: 'bg-blue-500',
      details: [
        'Operating hours: 6:00 AM - 12:00 AM daily',
        'Cost: 1 GEL per ride with transport card',
        'Lines: Akhmeteli-Varketili (Line 1) and Saburtalo (Line 2)',
        'Key stations: Rustaveli, Freedom Square, Marjanishvili, Station Square'
      ],
      tips: 'Buy a transport card for convenience and better rates',
      stations: [
        { name: 'Rustaveli', description: 'City center, museums, theaters' },
        { name: 'Freedom Square', description: 'Main square, shopping, restaurants' },
        { name: 'Avlabari', description: 'Old town, churches, cable car' },
        { name: 'Station Square', description: 'Central railway station' },
        { name: 'Marjanishvili', description: 'Theater, shopping centers' },
        { name: 'Gotsiridze', description: 'Residential area, markets' }
      ],
      pros: ['Fast and reliable', 'Air conditioned', 'Covers main areas', 'Safe and clean'],
      cons: ['Limited coverage', 'Crowded during rush hour', 'No English announcements']
    },
    {
      icon: <Bus className="h-8 w-8" />,
      title: 'City Buses',
      description: 'Extensive bus network covering all neighborhoods',
      color: 'bg-green-500',
      details: [
        'Operating hours: 7:00 AM - 11:00 PM (most routes)',
        'Cost: 1 GEL with transport card, 1.20 GEL cash',
        'Popular routes: #37 (Airport), #61 (Mtatsminda), #71 (Vake)',
        'Real-time tracking available via mobile apps'
      ],
      tips: 'Download the Tbilisi Transport app for real-time schedules',
      routes: [
        { number: '37', route: 'Airport ↔ Station Square', frequency: '15-20 min' },
        { number: '61', route: 'Mtatsminda ↔ Avlabari', frequency: '10-15 min' },
        { number: '71', route: 'Vake ↔ Samgori', frequency: '12-18 min' },
        { number: '80', route: 'Saburtalo ↔ Old Town', frequency: '15-20 min' },
        { number: '95', route: 'Gldani ↔ Varketili', frequency: '20-25 min' }
      ],
      pros: ['Extensive coverage', 'Frequent service', 'Modern buses', 'Real-time tracking'],
      cons: ['Can be crowded', 'Traffic delays', 'Limited night service']
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: 'Taxis & Ride-sharing',
      description: 'Various taxi options from traditional to modern ride-sharing apps',
      color: 'bg-yellow-500',
      details: [
        'Bolt, Yandex Go, and local taxi companies available',
        'Average cost: 5-15 GEL for city trips',
        'Airport rides: 25-35 GEL to city center',
        '24/7 availability with app-based booking'
      ],
      tips: 'Use ride-sharing apps for transparent pricing and safety',
      services: [
        { name: 'Bolt', features: ['GPS tracking', 'Card payment', 'English support'], rating: 4.5 },
        { name: 'Yandex Go', features: ['Local favorite', 'Cash/card payment', 'Multiple car types'], rating: 4.3 },
        { name: 'Maxim', features: ['Budget option', 'Local drivers', 'Georgian interface'], rating: 4.0 },
        { name: 'Street Taxis', features: ['Negotiate price', 'Cash only', 'Immediate availability'], rating: 3.5 }
      ],
      pros: ['Door-to-door service', 'Available 24/7', 'Multiple payment options', 'Safe with apps'],
      cons: ['More expensive', 'Traffic delays', 'Surge pricing during peak times']
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: 'Airport Transport',
      description: 'Multiple options to reach Tbilisi International Airport',
      color: 'bg-purple-500',
      details: [
        'Bus #37: 1 GEL, runs every 15-20 minutes',
        'Taxi: 25-35 GEL, 30-45 minutes depending on traffic',
        'Airport Express: Direct service during peak hours',
        'Private transfers: 40-60 GEL, pre-bookable'
      ],
      tips: 'Allow extra time during rush hours (8-10 AM, 6-8 PM)',
      options: [
        { method: 'Bus #37', cost: '1 GEL', time: '45-60 min', frequency: 'Every 15-20 min' },
        { method: 'Taxi (Bolt/Yandex)', cost: '25-35 GEL', time: '30-45 min', frequency: 'On demand' },
        { method: 'Airport Taxi', cost: '30-40 GEL', time: '30-45 min', frequency: 'Always available' },
        { method: 'Private Transfer', cost: '40-60 GEL', time: '30-40 min', frequency: 'Pre-booked' }
      ],
      pros: ['Multiple price points', 'Reliable connections', 'Direct routes available'],
      cons: ['Traffic can cause delays', 'Limited late night options', 'Bus can be crowded']
    }
  ]

  const transportCard = {
    name: 'Tbilisi Transport Card',
    benefits: [
      'Unified payment for metro and buses',
      'Cheaper fares than cash payments',
      'No need for exact change',
      'Rechargeable at stations and kiosks'
    ],
    locations: [
      'All metro stations',
      'Many bus stops',
      'Carrefour and Goodwill supermarkets',
      'Bank of Georgia branches',
      'Online via mobile apps'
    ],
    costs: [
      { type: 'Card fee', amount: '2 GEL (one-time)' },
      { type: 'Metro ride', amount: '1 GEL' },
      { type: 'Bus ride', amount: '1 GEL' },
      { type: 'Cash bus fare', amount: '1.20 GEL' }
    ]
  }

  const mobileApps = [
    {
      name: 'Tbilisi Transport',
      description: 'Official app for public transport schedules and routes',
      features: ['Real-time bus tracking', 'Route planning', 'Stop information', 'Service alerts'],
      platforms: ['iOS', 'Android'],
      rating: 4.2
    },
    {
      name: 'Bolt',
      description: 'Popular ride-sharing app with competitive prices',
      features: ['GPS tracking', 'Multiple payment options', 'Driver ratings', 'Trip history'],
      platforms: ['iOS', 'Android'],
      rating: 4.5
    },
    {
      name: 'Yandex Go',
      description: 'Russian ride-sharing service popular in Georgia',
      features: ['Various car classes', 'Delivery service', 'Local drivers', 'Offline maps'],
      platforms: ['iOS', 'Android'],
      rating: 4.3
    },
    {
      name: 'Citymapper',
      description: 'Third-party app for navigation and transport planning',
      features: ['Multi-modal routing', 'Real-time updates', 'Walking directions', 'Offline maps'],
      platforms: ['iOS', 'Android'],
      rating: 4.4
    }
  ]

  const neighborhoods = [
    {
      name: 'Old Town (Dzveli Tbilisi)',
      transport: ['Metro: Avlabari', 'Buses: 61, 71, 80', 'Cable car to Narikala'],
      walkability: 'High - most attractions within walking distance',
      parking: 'Limited street parking, paid zones'
    },
    {
      name: 'Rustaveli Avenue',
      transport: ['Metro: Rustaveli, Freedom Square', 'Multiple bus routes', 'Central location'],
      walkability: 'Excellent - pedestrian-friendly with wide sidewalks',
      parking: 'Paid parking zones, underground garages available'
    },
    {
      name: 'Vake',
      transport: ['Buses: 71, 80, 61', 'No direct metro connection', 'Taxi-friendly area'],
      walkability: 'Good - tree-lined streets, parks nearby',
      parking: 'Better availability, some free street parking'
    },
    {
      name: 'Saburtalo',
      transport: ['Metro: Saburtalo line stations', 'Multiple bus connections', 'Modern transport links'],
      walkability: 'Moderate - newer development with wider streets',
      parking: 'Good availability, modern parking facilities'
    },
    {
      name: 'Gldani',
      transport: ['Metro: Akhmeteli-Varketili line', 'Bus connections to center', 'Residential area'],
      walkability: 'Low - spread out, car-dependent',
      parking: 'Excellent - plenty of free parking'
    }
  ]

  const tips = [
    {
      category: 'Payment & Cards',
      icon: <CreditCard className="h-5 w-5" />,
      advice: [
        'Get a transport card immediately - saves money and time',
        'Keep some cash for taxis that don\'t accept cards',
        'Download payment apps like TBC Pay for easy top-ups',
        'Check your card balance regularly at metro stations'
      ]
    },
    {
      category: 'Safety & Security',
      icon: <Shield className="h-5 w-5" />,
      advice: [
        'Public transport is generally very safe, even at night',
        'Keep valuables secure in crowded buses and metro',
        'Use official taxi apps rather than street taxis',
        'Share your ride details with friends when using taxis'
      ]
    },
    {
      category: 'Navigation',
      icon: <Navigation className="h-5 w-5" />,
      advice: [
        'Download offline maps before traveling',
        'Learn key Georgian words for directions',
        'Metro stations have English signs, buses may not',
        'Ask locals for help - Georgians are very helpful'
      ]
    },
    {
      category: 'Peak Hours',
      icon: <Clock className="h-5 w-5" />,
      advice: [
        'Avoid metro during rush hours (8-10 AM, 6-8 PM)',
        'Allow extra time for airport trips during peak traffic',
        'Consider walking short distances during busy periods',
        'Night buses run limited routes after 11 PM'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-green-600 to-blue-600 text-white py-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 10 L50 30 L30 50 L10 30 Z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Route className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Getting Around Tbilisi</h1>
              <div className="flex items-center text-green-200">
                <Navigation className="h-5 w-5 mr-2" />
                <span>Complete Transport Guide for Expats</span>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Master Tbilisi's transport system with our comprehensive guide. From metro and buses to taxis and apps, 
            everything you need to navigate the city like a local.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Transport Modes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transport Options</h2>
          <div className="grid gap-8">
            {transportModes.map((mode, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`h-20 bg-gradient-to-r ${mode.color} bg-opacity-10 relative overflow-hidden flex items-center px-6`}>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <div className={`${mode.color} bg-opacity-20 text-gray-800 p-3 rounded-lg mr-4`}>
                        {mode.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{mode.title}</h3>
                        <p className="text-gray-600">{mode.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <AlertCircle className="h-4 w-4 text-blue-600 mr-2" />
                        Key Information
                      </h4>
                      <ul className="space-y-2">
                        {mode.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                        <Star className="h-4 w-4 mr-2" />
                        Pro Tip
                      </h4>
                      <p className="text-blue-700">{mode.tips}</p>
                    </div>
                  </div>

                  {/* Additional details for each transport mode */}
                  {mode.stations && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Metro Stations:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {mode.stations.map((station, idx) => (
                          <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                            <div className="font-semibold text-gray-900">{station.name}</div>
                            <div className="text-gray-600 text-sm">{station.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {mode.routes && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Popular Bus Routes:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {mode.routes.map((route, idx) => (
                          <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-gray-900">#{route.number}</span>
                              <span className="text-sm text-gray-500">{route.frequency}</span>
                            </div>
                            <div className="text-gray-600 text-sm">{route.route}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {mode.services && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Available Services:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {mode.services.map((service, idx) => (
                          <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold text-gray-900">{service.name}</span>
                              <div className="flex items-center">
                                <Star className="h-3 w-3 text-yellow-500 mr-1" />
                                <span className="text-sm text-gray-600">{service.rating}</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {service.features.map((feature, fidx) => (
                                <span key={fidx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {mode.options && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Airport Transport Options:</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="text-left p-3">Method</th>
                              <th className="text-left p-3">Cost</th>
                              <th className="text-left p-3">Time</th>
                              <th className="text-left p-3">Frequency</th>
                            </tr>
                          </thead>
                          <tbody>
                            {mode.options.map((option, idx) => (
                              <tr key={idx} className="border-t">
                                <td className="p-3 font-semibold">{option.method}</td>
                                <td className="p-3 text-green-600">{option.cost}</td>
                                <td className="p-3">{option.time}</td>
                                <td className="p-3 text-gray-600">{option.frequency}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-green-700">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Pros
                      </h4>
                      <ul className="space-y-1">
                        {mode.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-gray-700 text-sm">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-orange-700">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Cons
                      </h4>
                      <ul className="space-y-1">
                        {mode.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-gray-700 text-sm">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transport Card Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tbilisi Transport Card</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                <CreditCard className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{transportCard.name}</h3>
                <p className="text-gray-600">Essential for convenient public transport</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {transportCard.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Where to Buy:</h4>
                <ul className="space-y-2">
                  {transportCard.locations.map((location, idx) => (
                    <li key={idx} className="flex items-start">
                      <MapPin className="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{location}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Costs:</h4>
                <div className="space-y-2">
                  {transportCard.costs.map((cost, idx) => (
                    <div key={idx} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-gray-700 text-sm">{cost.type}</span>
                      <span className="font-semibold text-green-600">{cost.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Apps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Transport Apps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mobileApps.map((app, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-600">{app.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {app.platforms.map((platform, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{app.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {app.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Neighborhood Transport Guide */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Transport by Neighborhood</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid gap-6">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-6 hover:bg-green-50 p-4 rounded transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{neighborhood.name}</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Route className="h-4 w-4 text-green-600 mr-2" />
                        Transport Options
                      </h4>
                      <ul className="space-y-1">
                        {neighborhood.transport.map((option, idx) => (
                          <li key={idx} className="text-gray-700 text-sm">• {option}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Users className="h-4 w-4 text-blue-600 mr-2" />
                        Walkability
                      </h4>
                      <p className="text-gray-700 text-sm">{neighborhood.walkability}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Car className="h-4 w-4 text-purple-600 mr-2" />
                        Parking
                      </h4>
                      <p className="text-gray-700 text-sm">{neighborhood.parking}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expert Tips */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Expert Tips for Expats</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{tip.category}</h3>
                </div>
                <ul className="space-y-3">
                  {tip.advice.map((advice, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{advice}</span>
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

export default TransportPage