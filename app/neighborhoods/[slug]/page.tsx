'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { MapPin, DollarSign, Users, Home, Utensils, ShoppingBag, Train, Heart, Star, Award, ArrowLeft, TrendingUp, Shield, Moon, Coffee } from 'lucide-react'

export default function NeighborhoodDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  // This would normally come from a database or API
  const neighborhoodsData: any = {
    'vake': {
      name: 'Vake',
      tagline: 'Upscale & Family-Friendly',
      description: 'Vake is Tbilisi\'s most prestigious residential area, known for its tree-lined streets, embassies, and excellent infrastructure. It\'s the top choice for families and professionals seeking a safe, quiet environment with access to quality amenities.',
      rentPrice: '₾1,500-3,000',
      buyPrice: '₾2,500-4,000/m²',
      popularity: 95,
      expatFriendly: 98,
      safety: 95,
      nightlife: 70,
      restaurants: 90,
      transport: 85,
      shopping: 90,
      parks: 95,
      pros: [
        'Safest neighborhood in Tbilisi',
        'Excellent schools and kindergartens',
        'Vake Park - largest green space',
        'Many embassies and international organizations',
        'High-end restaurants and cafes',
        'Well-maintained streets and infrastructure',
        'English widely spoken',
        'Premium supermarkets and shops'
      ],
      cons: [
        'Most expensive area for rent',
        'Can feel too quiet for young singles',
        'Limited nightlife options',
        'Parking can be challenging',
        'Further from Old Town attractions',
        'Less authentic Georgian atmosphere'
      ],
      bestFor: ['Families with children', 'Senior professionals', 'Retirees', 'Diplomats'],
      notFor: ['Budget travelers', 'Party lovers', 'Those seeking nightlife'],
      keyLocations: [
        { name: 'Vake Park', type: 'Park', distance: 'Central' },
        { name: 'Tbilisi Zoo', type: 'Attraction', distance: '1km' },
        { name: 'Mziuri Park', type: 'Park', distance: '2km' },
        { name: 'Goodwill Supermarket', type: 'Shopping', distance: '500m' },
        { name: 'British Embassy', type: 'Embassy', distance: '1km' }
      ],
      transportInfo: {
        metro: 'Vake Metro Station (Line 1)',
        buses: ['37', '61', '88', '90'],
        taxis: 'Abundant, ₾5-10 to city center',
        walkability: 'Excellent sidewalks, but hilly'
      },
      demographics: {
        expats: '25%',
        families: '45%',
        students: '10%',
        retirees: '20%'
      }
    }
  }

  const neighborhood = neighborhoodsData[slug]

  if (!neighborhood) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Neighborhood not found</h1>
          <Link href="/neighborhoods" className="text-blue-600 hover:underline">
                Back to Neighborhoods
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/neighborhoods" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all neighborhoods
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{neighborhood.name}</h1>
          <p className="text-xl text-blue-100 mb-6">{neighborhood.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <div className="text-sm opacity-80">Rent</div>
              <div className="text-lg font-bold">{neighborhood.rentPrice}/month</div>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <div className="text-sm opacity-80">Buy</div>
              <div className="text-lg font-bold">{neighborhood.buyPrice}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{neighborhood.description}</p>
            </div>

            {/* Pros & Cons */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-green-600">✓ Pros</h3>
                <ul className="space-y-2">
                  {neighborhood.pros.map((pro: string, index: number) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-green-600 mr-2">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-red-600">✗ Cons</h3>
                <ul className="space-y-2">
                  {neighborhood.cons.map((con: string, index: number) => (
                    <li key={index} className="flex items-start text-sm">
                      <span className="text-red-600 mr-2">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Best For */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Who Should Live Here?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">✓ Best For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.bestFor.map((tag: string, index: number) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-3">✗ Not Ideal For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.notFor.map((tag: string, index: number) => (
                      <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ratings */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Ratings</h3>
              <div className="space-y-3">
                {[
                  { label: 'Expat Friendly', value: neighborhood.expatFriendly, icon: Users },
                  { label: 'Safety', value: neighborhood.safety, icon: Shield },
                  { label: 'Restaurants', value: neighborhood.restaurants, icon: Utensils },
                  { label: 'Shopping', value: neighborhood.shopping, icon: ShoppingBag },
                  { label: 'Transport', value: neighborhood.transport, icon: Train },
                  { label: 'Nightlife', value: neighborhood.nightlife, icon: Moon },
                  { label: 'Parks', value: neighborhood.parks, icon: Heart }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <item.icon className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      <span className="text-sm font-bold">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold text-gray-700">Metro Station</div>
                  <div className="text-gray-600">{neighborhood.transportInfo.metro}</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-700">Bus Routes</div>
                  <div className="text-gray-600">{neighborhood.transportInfo.buses.join(', ')}</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-700">Taxi to Center</div>
                  <div className="text-gray-600">{neighborhood.transportInfo.taxis}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
