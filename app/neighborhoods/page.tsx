'use client'

import Link from 'next/link'
import { MapPin, Users, Star } from 'lucide-react'
import { neighborhoodImages } from '../../lib/images'
import InteractiveMap from '../components/InteractiveMap'
import UserReviews from '../components/UserReviews'
import PageHero from '../components/PageHero'

export default function NeighborhoodsPage() {
  const neighborhoods = [
    {
      id: 'vake',
      name: 'Vake',
      slug: 'vake',
      tagline: 'Upscale & Family-Friendly',
      description: 'Prestigious residential area with parks, embassies, and excellent infrastructure',
      rentPrice: '₾1,500-3,000',
      popularity: 95,
      expatFriendly: 98,
      safety: 95,
      nightlife: 70,
      restaurants: 90,
      transport: 85,
      shopping: 90,
      parks: 95,
      imageUrl: '/images/neighborhoods/vake.jpg',
      pros: [
        'Safest neighborhood in Tbilisi',
        'Excellent schools and kindergartens',
        'Vake Park - largest green space',
        'Many embassies and international organizations',
        'High-end restaurants and cafes',
        'Well-maintained streets and infrastructure'
      ],
      cons: [
        'Most expensive area for rent',
        'Can feel too quiet for young singles',
        'Limited nightlife options',
        'Parking can be challenging'
      ],
      bestFor: ['Families', 'Professionals', 'Retirees'],
      notFor: ['Budget travelers', 'Party lovers']
    },
    {
      id: 'saburtalo',
      name: 'Saburtalo',
      slug: 'saburtalo',
      tagline: 'Modern & Convenient',
      description: 'Modern district with shopping malls, universities, and excellent public transport',
      rentPrice: '₾1,000-2,000',
      popularity: 90,
      expatFriendly: 92,
      safety: 90,
      nightlife: 75,
      restaurants: 95,
      transport: 95,
      shopping: 98,
      parks: 70,
      imageUrl: '/images/neighborhoods/saburtalo.jpg',
      pros: [
        'Excellent public transport connections',
        'Multiple shopping malls (Tbilisi Mall, East Point)',
        'Wide variety of restaurants',
        'Modern apartment buildings',
        'Close to universities',
        'Good balance of price and quality'
      ],
      cons: [
        'Can be crowded and noisy',
        'Less green space than Vake',
        'Heavy traffic during rush hours',
        'Some areas under construction'
      ],
      bestFor: ['Young professionals', 'Students', 'Digital nomads'],
      notFor: ['Those seeking quiet', 'Nature lovers']
    },
    {
      id: 'old-town',
      name: 'Old Town (Dzveli Tbilisi)',
      slug: 'old-town',
      tagline: 'Historic & Charming',
      description: 'Historic heart of Tbilisi with traditional architecture and tourist attractions',
      rentPrice: '₾800-1,800',
      popularity: 85,
      expatFriendly: 80,
      safety: 85,
      nightlife: 90,
      restaurants: 95,
      transport: 80,
      shopping: 70,
      parks: 60,
      imageUrl: '/images/neighborhoods/old-town.jpg',
      pros: [
        'Unique historic atmosphere',
        'Walking distance to major attractions',
        'Vibrant nightlife and restaurants',
        'Sulfur baths and cultural sites',
        'Authentic Georgian experience',
        'Great for short-term stays'
      ],
      cons: [
        'Older buildings, less modern amenities',
        'Can be very touristy',
        'Narrow streets, difficult parking',
        'Noise from bars and restaurants',
        'Steep hills and stairs'
      ],
      bestFor: ['Culture enthusiasts', 'Short-term visitors', 'Young singles'],
      notFor: ['Families with children', 'Those needing modern amenities']
    },
    {
      id: 'vera',
      name: 'Vera',
      slug: 'vera',
      tagline: 'Bohemian & Artistic',
      description: 'Trendy neighborhood with art galleries, cafes, and creative community',
      rentPrice: '₾900-1,800',
      popularity: 80,
      expatFriendly: 85,
      safety: 88,
      nightlife: 85,
      restaurants: 88,
      transport: 85,
      shopping: 75,
      parks: 80,
      imageUrl: '/images/neighborhoods/vera.jpg',
      pros: [
        'Artistic and creative atmosphere',
        'Trendy cafes and restaurants',
        'Vera Park nearby',
        'Good mix of old and new',
        'Central location',
        'Active expat community'
      ],
      cons: [
        'Some buildings need renovation',
        'Limited parking',
        'Can be noisy on weekends',
        'Fewer supermarkets'
      ],
      bestFor: ['Artists', 'Creatives', 'Young professionals'],
      notFor: ['Those seeking modern luxury', 'Families with young children']
    },
    {
      id: 'isani',
      name: 'Isani',
      slug: 'isani',
      tagline: 'Affordable & Developing',
      description: 'Up-and-coming area with affordable housing and improving infrastructure',
      rentPrice: '₾600-1,200',
      popularity: 70,
      expatFriendly: 65,
      safety: 80,
      nightlife: 60,
      restaurants: 70,
      transport: 90,
      shopping: 85,
      parks: 65,
      imageUrl: '/images/neighborhoods/isani.jpg',
      pros: [
        'Most affordable rent in central areas',
        'Excellent metro connections',
        'Large shopping centers',
        'Rapidly developing',
        'Authentic local experience',
        'Good value for money'
      ],
      cons: [
        'Fewer English speakers',
        'Less developed infrastructure',
        'Limited entertainment options',
        'Further from city center',
        'Fewer expat amenities'
      ],
      bestFor: ['Budget-conscious expats', 'Long-term residents', 'Those learning Georgian'],
      notFor: ['First-time expats', 'Those needing English everywhere']
    },
    {
      id: 'mtatsminda',
      name: 'Mtatsminda',
      slug: 'mtatsminda',
      tagline: 'Scenic & Exclusive',
      description: 'Hillside neighborhood with stunning views and exclusive properties',
      rentPrice: '₾1,800-4,000',
      popularity: 75,
      expatFriendly: 80,
      safety: 95,
      nightlife: 65,
      restaurants: 80,
      transport: 70,
      shopping: 75,
      parks: 90,
      imageUrl: '/images/neighborhoods/mtatsminda.jpg',
      pros: [
        'Spectacular city views',
        'Very safe and quiet',
        'Mtatsminda Park',
        'Exclusive properties',
        'Clean air and nature',
        'Privacy and tranquility'
      ],
      cons: [
        'Very expensive',
        'Steep hills, difficult to walk',
        'Limited public transport',
        'Fewer shops and restaurants',
        'Can feel isolated'
      ],
      bestFor: ['Wealthy expats', 'Those seeking privacy', 'Nature lovers'],
      notFor: ['Budget travelers', 'Those without a car', 'Social butterflies']
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHero
        title="Tbilisi Neighborhood Guide"
        description="Find your perfect neighborhood in Tbilisi. Compare areas, prices, and amenities to make the best choice for your lifestyle."
      />

      {/* Neighborhoods Grid */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.id}
                href={`/neighborhoods/${neighborhood.slug}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={neighborhoodImages[neighborhood.slug] || ''}
                    alt={`${neighborhood.name} neighborhood in Tbilisi`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {neighborhood.rentPrice}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {neighborhood.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 mb-3">
                    {neighborhood.tagline}
                  </p>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {neighborhood.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <div>
                        <div className="text-xs text-gray-600">Popularity</div>
                        <div className="text-sm font-semibold">{neighborhood.popularity}%</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <div>
                        <div className="text-xs text-gray-600">Expat Friendly</div>
                        <div className="text-sm font-semibold">{neighborhood.expatFriendly}%</div>
                      </div>
                    </div>
                  </div>

                  {/* Best For Tags */}
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.bestFor.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Explore Tbilisi on the Map</h2>
            <p className="text-gray-600">Find neighborhoods, restaurants, gyms, and more</p>
          </div>
          <InteractiveMap height="450px" />
        </div>
      </section>

      {/* Community Reviews */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <UserReviews category="neighborhood" title="Neighborhood Reviews from Expats" />
        </div>
      </section>
    </div>
  )
}
