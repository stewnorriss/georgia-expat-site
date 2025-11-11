import type { Metadata } from 'next'
import { Wifi, Smartphone, Zap, MapPin, Coffee, CheckCircle, AlertCircle, TrendingUp, Globe, Signal, Router, Laptop } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Internet & Mobile in Georgia - Complete Guide for Digital Nomads',
  description: 'Everything digital nomads need: best internet providers, mobile carriers, SIM cards, coworking spaces, and internet speeds by neighborhood in Tbilisi.',
  keywords: 'Georgia internet, Tbilisi WiFi, Magti, Beeline, Silknet, SIM card Georgia, coworking Tbilisi, digital nomad Georgia, internet speed',
}

export default function InternetPage() {
  const internetProviders = [
    {
      name: 'Silknet',
      rating: 4.8,
      logo: '🌐',
      type: 'Fiber & Cable',
      speeds: '100-1000 Mbps',
      price: '₾30-80/month',
      pros: ['Fastest speeds', 'Most reliable', 'Good customer service', 'Fiber optic available'],
      cons: ['Slightly more expensive', 'Not available everywhere'],
      coverage: 'Excellent in Tbilisi',
      installation: '₾0-50 (often free)',
      contract: 'No long-term contract',
      expat_rating: 5
    },
    {
      name: 'Magticom',
      rating: 4.6,
      logo: '📡',
      type: 'Fiber & 4G/5G',
      speeds: '50-500 Mbps',
      price: '₾25-70/month',
      pros: ['Wide coverage', 'Good mobile integration', 'Reliable', 'Bundle deals'],
      cons: ['Speeds vary by area', 'Customer service can be slow'],
      coverage: 'Excellent nationwide',
      installation: '₾0-40',
      contract: 'Flexible',
      expat_rating: 4
    },
    {
      name: 'Caucasus Online',
      rating: 4.5,
      logo: '🔌',
      type: 'Fiber',
      speeds: '100-500 Mbps',
      price: '₾35-65/month',
      pros: ['Stable connection', 'Good for gaming', 'Decent speeds'],
      cons: ['Limited coverage', 'Average customer service'],
      coverage: 'Good in central Tbilisi',
      installation: '₾30-50',
      contract: 'Monthly',
      expat_rating: 4
    }
  ]

  const mobileCarriers = [
    {
      name: 'Magticom',
      rating: 4.7,
      logo: '📱',
      coverage: '95%',
      data_plans: [
        { data: '10 GB', price: '₾15', validity: '30 days' },
        { data: '30 GB', price: '₾30', validity: '30 days' },
        { data: 'Unlimited', price: '₾50', validity: '30 days' }
      ],
      pros: ['Best coverage', 'Fast 4G/5G', 'Good customer service', 'Easy top-up'],
      cons: ['Slightly expensive', 'Data can be slow in rural areas'],
      sim_cost: '₾5',
      expat_friendly: 5
    },
    {
      name: 'Beeline',
      rating: 4.5,
      logo: '🐝',
      coverage: '90%',
      data_plans: [
        { data: '15 GB', price: '₾12', validity: '30 days' },
        { data: '40 GB', price: '₾25', validity: '30 days' },
        { data: 'Unlimited', price: '₾45', validity: '30 days' }
      ],
      pros: ['Cheapest option', 'Good speeds', 'Frequent promotions', 'Easy activation'],
      cons: ['Coverage gaps', 'Customer service in Georgian'],
      sim_cost: '₾3',
      expat_friendly: 4
    },
    {
      name: 'Silknet Mobile',
      rating: 4.4,
      logo: '📶',
      coverage: '85%',
      data_plans: [
        { data: '12 GB', price: '₾14', validity: '30 days' },
        { data: '35 GB', price: '₾28', validity: '30 days' },
        { data: 'Unlimited', price: '₾48', validity: '30 days' }
      ],
      pros: ['Bundle with home internet', 'Good urban coverage', 'Reliable'],
      cons: ['Weaker rural coverage', 'Fewer stores'],
      sim_cost: '₾5',
      expat_friendly: 4
    }
  ]

  const neighborhoodSpeeds = [
    { name: 'Vake', avgSpeed: '200-500 Mbps', reliability: 5, fiber: true, note: 'Excellent infrastructure' },
    { name: 'Saburtalo', avgSpeed: '150-400 Mbps', reliability: 5, fiber: true, note: 'Modern area, great speeds' },
    { name: 'Old Town', avgSpeed: '100-300 Mbps', reliability: 4, fiber: true, note: 'Good but older buildings' },
    { name: 'Vera', avgSpeed: '150-400 Mbps', reliability: 5, fiber: true, note: 'Central, reliable' },
    { name: 'Didube', avgSpeed: '100-250 Mbps', reliability: 4, fiber: true, note: 'Decent coverage' },
    { name: 'Gldani', avgSpeed: '50-200 Mbps', reliability: 3, fiber: false, note: 'Improving' }
  ]

  const coworkingSpaces = [
    {
      name: 'Terminal',
      location: 'Vera',
      wifi: '500+ Mbps',
      price: '₾200-400/month',
      rating: 4.9,
      features: ['24/7 access', 'Meeting rooms', 'Events', 'Great community'],
      best_for: 'Serious digital nomads'
    },
    {
      name: 'Impact Hub',
      location: 'Vake',
      wifi: '300+ Mbps',
      price: '₾150-350/month',
      rating: 4.7,
      features: ['Networking events', 'Mentorship', 'Modern space', 'Kitchen'],
      best_for: 'Startups and entrepreneurs'
    },
    {
      name: 'Fabrika',
      location: 'Marjanishvili',
      wifi: '200+ Mbps',
      price: '₾100-250/month',
      rating: 4.6,
      features: ['Creative space', 'Cafe', 'Events', 'Hostel attached'],
      best_for: 'Creative professionals'
    },
    {
      name: 'Nest',
      location: 'Saburtalo',
      wifi: '400+ Mbps',
      price: '₾180-320/month',
      rating: 4.5,
      features: ['Quiet environment', 'Private offices', 'Good coffee'],
      best_for: 'Focus work'
    }
  ]

  const setupGuide = [
    {
      step: '1',
      title: 'Get a SIM Card',
      icon: <Smartphone className="h-6 w-6" />,
      tasks: [
        'Visit any mobile carrier store (Magti, Beeline, Silknet)',
        'Bring your passport',
        'Choose a data plan (₾15-50/month)',
        'Activation is immediate',
        'Top-up at stores, kiosks, or via app'
      ]
    },
    {
      step: '2',
      title: 'Set Up Home Internet',
      icon: <Router className="h-6 w-6" />,
      tasks: [
        'Choose provider (Silknet recommended)',
        'Call or visit office to order',
        'Installation within 1-3 days',
        'Technician will set up router',
        'Test speed immediately'
      ]
    },
    {
      step: '3',
      title: 'Backup Solutions',
      icon: <Zap className="h-6 w-6" />,
      tasks: [
        'Keep mobile data as backup',
        'Use phone hotspot if needed',
        'Know nearby cafes with WiFi',
        'Consider second provider for critical work',
        'Download offline maps and files'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Wifi className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Internet & Mobile in Georgia</h1>
              <div className="flex items-center text-blue-200">
                <Signal className="h-5 w-5 mr-2" />
                <span>Complete Guide for Digital Nomads</span>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Fast, reliable, and affordable internet. Everything you need to stay connected as a digital nomad in Tbilisi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">500+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Mbps Available</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <Smartphone className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">₾15</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Mobile</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <Router className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">₾30</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Home Internet</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <Coffee className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Coworking Spaces</div>
          </div>
        </div>

        {/* Internet Providers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Best Internet Providers</h2>
          <div className="grid gap-6">
            {internetProviders.map((provider, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">{provider.logo}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{provider.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{provider.type}</span>
                        <span className="text-yellow-500">★ {provider.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{provider.speeds}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{provider.price}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {provider.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <AlertCircle className="h-4 w-4 text-orange-600 mr-2" />
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {provider.cons.map((con, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-orange-600 mr-2">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">Coverage</div>
                    <div className="text-gray-600 dark:text-gray-400">{provider.coverage}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">Installation</div>
                    <div className="text-gray-600 dark:text-gray-400">{provider.installation}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">Contract</div>
                    <div className="text-gray-600 dark:text-gray-400">{provider.contract}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carriers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Mobile Carriers & Data Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mobileCarriers.map((carrier, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{carrier.logo}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{carrier.name}</h3>
                  <div className="text-yellow-500 text-sm">★ {carrier.rating}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {carrier.coverage} Coverage
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Data Plans</h4>
                  <div className="space-y-2">
                    {carrier.data_plans.map((plan, i) => (
                      <div key={i} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{plan.data}</span>
                        <span className="text-sm text-blue-600 font-bold">{plan.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Pros</h4>
                  <ul className="space-y-1">
                    {carrier.pros.slice(0, 3).map((pro, i) => (
                      <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-400">SIM Card Cost</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{carrier.sim_cost}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internet Speeds by Neighborhood */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Internet Speeds by Neighborhood</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Neighborhood</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Avg Speed</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Reliability</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Fiber</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {neighborhoodSpeeds.map((area, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="font-medium text-gray-900 dark:text-white">{area.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                        {area.avgSpeed}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < area.reliability ? 'text-green-500' : 'text-gray-300'}>★</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {area.fiber ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-orange-600" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {area.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Coworking Spaces */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Best Coworking Spaces</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {coworkingSpaces.map((space, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{space.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {space.location}
                    </div>
                    <div className="text-yellow-500 text-sm mt-1">★ {space.rating}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 dark:text-gray-400">WiFi</div>
                    <div className="font-bold text-blue-600">{space.wifi}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{space.price}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">per month</div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {space.features.map((feature, i) => (
                      <span key={i} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Best For</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{space.best_for}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Setup Guide */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Quick Setup Guide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {setupGuide.map((guide, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-3">
                    {guide.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Step {guide.step}</div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{guide.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {guide.tasks.map((task, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Important Tips */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
          <div className="flex items-start">
            <Wifi className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Pro Tips for Digital Nomads</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Georgia has some of the fastest and cheapest internet in Europe</li>
                <li>• Most cafes and restaurants have free WiFi</li>
                <li>• Mobile data is incredibly cheap - get unlimited for ₾50/month</li>
                <li>• Fiber optic is available in most central neighborhoods</li>
                <li>• No contracts required - cancel anytime</li>
                <li>• Installation is usually free or very cheap</li>
                <li>• Use your phone as a hotspot backup</li>
                <li>• Coworking spaces have the most reliable connections</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
