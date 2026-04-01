'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Users, Home, Utensils, ShoppingBag, Train, Heart, Shield, Moon, ArrowLeft } from 'lucide-react'

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
    },
    'saburtalo': {
      name: 'Saburtalo',
      tagline: 'Modern & Convenient',
      description: 'Saburtalo is Tbilisi\'s most practical district for everyday living. Home to major shopping malls, universities, and excellent metro connections, it offers a modern lifestyle at more reasonable prices than Vake. The area buzzes with energy from students and young professionals, with countless restaurants and cafes lining its main avenues.',
      rentPrice: '₾1,000-2,000',
      buyPrice: '₾1,800-3,000/m²',
      popularity: 90,
      expatFriendly: 92,
      safety: 90,
      nightlife: 75,
      restaurants: 95,
      transport: 95,
      shopping: 98,
      parks: 70,
      pros: [
        'Excellent public transport connections',
        'Multiple shopping malls (Tbilisi Mall, East Point)',
        'Wide variety of restaurants and cuisines',
        'Modern apartment buildings',
        'Close to universities and coworking spaces',
        'Good balance of price and quality',
        'Fast internet infrastructure',
        'Many pharmacies and clinics'
      ],
      cons: [
        'Can be crowded and noisy',
        'Less green space than Vake',
        'Heavy traffic during rush hours',
        'Some areas under construction',
        'Soviet-era blocks in parts',
        'Fewer parks for families'
      ],
      bestFor: ['Young professionals', 'Students', 'Digital nomads', 'Budget-conscious expats'],
      notFor: ['Those seeking quiet', 'Nature lovers', 'Families wanting green space'],
      keyLocations: [
        { name: 'Tbilisi Mall', type: 'Shopping', distance: '1km' },
        { name: 'Technical University', type: 'Education', distance: '500m' },
        { name: 'Carrefour Supermarket', type: 'Shopping', distance: '300m' },
        { name: 'Axis Towers', type: 'Landmark', distance: '1.5km' },
        { name: 'Delisi Metro', type: 'Transport', distance: '800m' }
      ],
      transportInfo: {
        metro: 'Delisi & Technical University Stations (Line 1)',
        buses: ['20', '37', '55', '61', '88'],
        taxis: 'Very easy to find, ₾4-8 to center',
        walkability: 'Flat terrain, very walkable'
      },
      demographics: {
        expats: '20%',
        families: '25%',
        students: '35%',
        retirees: '20%'
      }
    },
    'old-town': {
      name: 'Old Town (Dzveli Tbilisi)',
      tagline: 'Historic & Charming',
      description: 'The Old Town is the beating heart of Tbilisi, where centuries of history come alive through winding cobblestone streets, traditional wooden balconies, and the iconic sulfur baths. Living here means being surrounded by Narikala Fortress, the Bridge of Peace, and some of the city\'s best restaurants and bars. It\'s an immersive cultural experience, though modern comforts can be hit-or-miss.',
      rentPrice: '₾800-1,800',
      buyPrice: '₾2,000-3,500/m²',
      popularity: 85,
      expatFriendly: 80,
      safety: 85,
      nightlife: 90,
      restaurants: 95,
      transport: 80,
      shopping: 70,
      parks: 60,
      pros: [
        'Unique historic atmosphere unlike anywhere else',
        'Walking distance to major attractions',
        'Vibrant nightlife and restaurant scene',
        'Sulfur baths and cultural sites on your doorstep',
        'Authentic Georgian experience',
        'Great for short-term stays and Airbnb',
        'Incredible photo opportunities everywhere',
        'Strong sense of community'
      ],
      cons: [
        'Older buildings with less modern amenities',
        'Can be very touristy and crowded',
        'Narrow streets make parking nearly impossible',
        'Noise from bars and restaurants at night',
        'Steep hills and lots of stairs',
        'Some buildings in poor condition'
      ],
      bestFor: ['Culture enthusiasts', 'Short-term visitors', 'Young singles', 'Photographers'],
      notFor: ['Families with young children', 'Those needing modern amenities', 'Light sleepers'],
      keyLocations: [
        { name: 'Narikala Fortress', type: 'Attraction', distance: '500m' },
        { name: 'Sulfur Baths', type: 'Attraction', distance: '300m' },
        { name: 'Bridge of Peace', type: 'Landmark', distance: '400m' },
        { name: 'Shardeni Street', type: 'Dining', distance: 'Central' },
        { name: 'Meidan Bazaar', type: 'Shopping', distance: '200m' }
      ],
      transportInfo: {
        metro: 'Avlabari Station (Line 1) - 10 min walk',
        buses: ['31', '44', '50', '71'],
        taxis: 'Available but hard to reach by car, ₾3-5 within area',
        walkability: 'Very walkable but steep hills'
      },
      demographics: {
        expats: '15%',
        families: '15%',
        students: '20%',
        retirees: '50%'
      }
    },
    'vera': {
      name: 'Vera',
      tagline: 'Bohemian & Artistic',
      description: 'Vera is Tbilisi\'s creative soul — a charming neighborhood where art galleries sit alongside cozy wine bars, and every street corner has character. Centrally located between Rustaveli Avenue and Vake, it offers the perfect blend of culture, convenience, and community. The area has become increasingly popular with expats who appreciate its walkability and artistic vibe.',
      rentPrice: '₾900-1,800',
      buyPrice: '₾2,200-3,500/m²',
      popularity: 80,
      expatFriendly: 85,
      safety: 88,
      nightlife: 85,
      restaurants: 88,
      transport: 85,
      shopping: 75,
      parks: 80,
      pros: [
        'Artistic and creative atmosphere',
        'Trendy cafes, wine bars, and restaurants',
        'Vera Park is a lovely green space',
        'Good mix of old charm and new development',
        'Central location — walk to Rustaveli in 10 mins',
        'Active and welcoming expat community',
        'Quieter than Old Town but still lively',
        'Beautiful architecture and street art'
      ],
      cons: [
        'Some buildings need renovation',
        'Limited parking throughout',
        'Can be noisy on weekend evenings',
        'Fewer large supermarkets',
        'Hilly terrain in parts',
        'Rent rising due to popularity'
      ],
      bestFor: ['Artists & creatives', 'Young professionals', 'Couples', 'Freelancers'],
      notFor: ['Those seeking modern luxury', 'Families with young children', 'Car owners'],
      keyLocations: [
        { name: 'Vera Park', type: 'Park', distance: 'Central' },
        { name: 'Rustaveli Avenue', type: 'Landmark', distance: '800m' },
        { name: 'Fabrika', type: 'Coworking/Social', distance: '1km' },
        { name: 'Stamba Hotel', type: 'Landmark', distance: '500m' },
        { name: 'Vera Gallery', type: 'Culture', distance: '300m' }
      ],
      transportInfo: {
        metro: 'Rustaveli Station (Line 1) - 10 min walk',
        buses: ['20', '37', '46', '61'],
        taxis: 'Easy to find, ₾4-7 to most areas',
        walkability: 'Excellent — one of the most walkable areas'
      },
      demographics: {
        expats: '20%',
        families: '20%',
        students: '30%',
        retirees: '30%'
      }
    },
    'isani': {
      name: 'Isani',
      tagline: 'Affordable & Developing',
      description: 'Isani is where smart expats on a budget are heading. This rapidly developing district on the east side of the Mtkvari River offers the most affordable central rents in Tbilisi, with excellent metro access and large shopping centers. While it lacks the polish of Vake or the charm of Old Town, it rewards residents with authentic local life and genuine value for money.',
      rentPrice: '₾600-1,200',
      buyPrice: '₾1,200-2,000/m²',
      popularity: 70,
      expatFriendly: 65,
      safety: 80,
      nightlife: 60,
      restaurants: 70,
      transport: 90,
      shopping: 85,
      parks: 65,
      pros: [
        'Most affordable rent in central Tbilisi',
        'Excellent metro connections (Isani & Samgori)',
        'Large shopping centers including East Point',
        'Rapidly developing with new buildings',
        'Authentic local Georgian experience',
        'Great value for money',
        'Good for learning Georgian language',
        'Large Carrefour and local markets'
      ],
      cons: [
        'Fewer English speakers than other areas',
        'Less developed infrastructure in parts',
        'Limited entertainment and nightlife',
        'Further from tourist attractions',
        'Fewer expat-oriented amenities',
        'Some areas feel industrial'
      ],
      bestFor: ['Budget-conscious expats', 'Long-term residents', 'Those learning Georgian', 'Families on a budget'],
      notFor: ['First-time expats', 'Those needing English everywhere', 'Nightlife seekers'],
      keyLocations: [
        { name: 'East Point Mall', type: 'Shopping', distance: '1km' },
        { name: 'Isani Metro', type: 'Transport', distance: 'Central' },
        { name: 'Samgori Metro & Bus Hub', type: 'Transport', distance: '1.5km' },
        { name: 'Carrefour Hypermarket', type: 'Shopping', distance: '800m' },
        { name: 'Lisi Lake', type: 'Park', distance: '5km' }
      ],
      transportInfo: {
        metro: 'Isani & Samgori Stations (Line 1)',
        buses: ['10', '17', '55', '95', '150'],
        taxis: 'Cheap, ₾5-8 to city center',
        walkability: 'Flat and easy to walk, but spread out'
      },
      demographics: {
        expats: '8%',
        families: '40%',
        students: '15%',
        retirees: '37%'
      }
    },
    'mtatsminda': {
      name: 'Mtatsminda',
      tagline: 'Scenic & Exclusive',
      description: 'Perched on the hillside above central Tbilisi, Mtatsminda offers breathtaking panoramic views and an exclusive, tranquil lifestyle. Home to the famous Mtatsminda Park and the Funicular, this neighborhood attracts those who value privacy, clean air, and stunning scenery. It\'s the most expensive area in Tbilisi but rewards residents with a peaceful retreat above the city bustle.',
      rentPrice: '₾1,800-4,000',
      buyPrice: '₾3,000-5,000/m²',
      popularity: 75,
      expatFriendly: 80,
      safety: 95,
      nightlife: 65,
      restaurants: 80,
      transport: 70,
      shopping: 75,
      parks: 90,
      pros: [
        'Spectacular panoramic city views',
        'Very safe and quiet neighborhood',
        'Mtatsminda Park and Funicular',
        'Exclusive, high-quality properties',
        'Clean air and surrounded by nature',
        'Privacy and tranquility',
        'Close to Rustaveli Avenue below',
        'Beautiful historic buildings'
      ],
      cons: [
        'Most expensive area in Tbilisi',
        'Very steep hills — difficult to walk',
        'Limited public transport options',
        'Fewer shops and restaurants nearby',
        'Can feel isolated from city life',
        'A car is almost essential'
      ],
      bestFor: ['Wealthy expats', 'Those seeking privacy', 'Nature lovers', 'Remote workers wanting peace'],
      notFor: ['Budget travelers', 'Those without a car', 'Social butterflies', 'Elderly with mobility issues'],
      keyLocations: [
        { name: 'Mtatsminda Park', type: 'Park', distance: 'Central' },
        { name: 'Funicular Station', type: 'Transport', distance: '500m' },
        { name: 'TV Tower', type: 'Landmark', distance: '1km' },
        { name: 'Rustaveli Avenue', type: 'Landmark', distance: '1.5km downhill' },
        { name: 'Mtatsminda Pantheon', type: 'Culture', distance: '800m' }
      ],
      transportInfo: {
        metro: 'Rustaveli Station (Line 1) - 15 min walk downhill',
        buses: ['124 (limited service)'],
        taxis: 'Available but steep roads, ₾5-10 to center',
        walkability: 'Challenging — very steep terrain'
      },
      demographics: {
        expats: '15%',
        families: '30%',
        students: '5%',
        retirees: '50%'
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

            {/* Key Locations */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">📍 Key Locations Nearby</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {neighborhood.keyLocations.map((loc: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{loc.name}</div>
                      <div className="text-xs text-gray-500">{loc.type}</div>
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">{loc.distance}</span>
                  </div>
                ))}
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
                <div>
                  <div className="font-semibold text-gray-700">Walkability</div>
                  <div className="text-gray-600">{neighborhood.transportInfo.walkability}</div>
                </div>
              </div>
            </div>

            {/* Demographics */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Who Lives Here</h3>
              <div className="space-y-3">
                {[
                  { label: 'Expats', value: neighborhood.demographics.expats, color: 'bg-blue-500' },
                  { label: 'Families', value: neighborhood.demographics.families, color: 'bg-green-500' },
                  { label: 'Students', value: neighborhood.demographics.students, color: 'bg-purple-500' },
                  { label: 'Retirees', value: neighborhood.demographics.retirees, color: 'bg-orange-500' },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                      <span className="text-sm font-bold">{item.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${item.color} h-2 rounded-full`}
                        style={{ width: item.value }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
