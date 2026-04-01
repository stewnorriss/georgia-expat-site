'use client'

import { Home, MapPin, DollarSign, Wifi, Car } from 'lucide-react'
import PageHero from '../components/PageHero'

const HousingPage = () => {
  const neighborhoods = [
    {
      name: 'Vake',
      type: 'Upscale Residential',
      priceRange: '₾1500-3500/month',
      avgRent: '₾2200',
      description: 'The most popular expat neighborhood. Tree-lined streets, Vake Park, excellent restaurants, and modern amenities. Safe, clean, and well-maintained. Close to international schools.',
      pros: ['Safest area in Tbilisi', 'Vake Park - best green space', 'Excellent restaurants & cafes', 'Strong expat community', 'Good supermarkets (Carrefour, Goodwill)', 'International schools nearby'],
      cons: ['Most expensive neighborhood', 'Can feel less "Georgian"', 'Limited nightlife', 'Parking can be difficult', 'Further from Old Town'],
      bestFor: 'Families, professionals, first-time expats',
      metro: 'Vake, Delisi',
      mapLink: 'https://goo.gl/maps/vake-tbilisi',
      utilities: '₾150-250/month (electricity, gas, water, internet)'
    },
    {
      name: 'Saburtalo',
      type: 'Modern District',
      priceRange: '₾1000-2500/month',
      avgRent: '₾1600',
      description: 'Newer development area with modern high-rises, shopping malls (Tbilisi Mall, East Point), and good infrastructure. Popular with young professionals and families.',
      pros: ['Modern apartments', 'Shopping malls nearby', 'Good metro access', 'Family-friendly', 'Newer buildings with elevators', 'Good schools'],
      cons: ['Less character than older areas', 'Further from city center', 'Traffic congestion', 'Can feel sterile', 'Limited traditional restaurants'],
      bestFor: 'Families with kids, those wanting modern amenities',
      metro: 'Delisi, Vazha-Pshavela, State University',
      mapLink: 'https://goo.gl/maps/saburtalo-tbilisi',
      utilities: '₾120-200/month'
    },
    {
      name: 'Old Town (Kala)',
      type: 'Historic Center',
      priceRange: '₾1200-3000/month',
      avgRent: '₾1800',
      description: 'Charming cobblestone streets, traditional architecture, and tourist attractions. Living here means being in the heart of Tbilisi\'s history and culture.',
      pros: ['Historic charm & character', 'Walking distance to everything', 'Restaurants, cafes, bars', 'Cultural sites', 'Unique architecture', 'Great for short-term stays'],
      cons: ['Tourist crowds', 'Older buildings (no elevators)', 'Parking nearly impossible', 'Can be noisy at night', 'Higher wear and tear', 'Inconsistent hot water'],
      bestFor: 'Singles, couples, short-term stays, culture lovers',
      metro: 'Avlabari, Liberty Square',
      mapLink: 'https://goo.gl/maps/oldtown-tbilisi',
      utilities: '₾100-180/month (older buildings less efficient)'
    },
    {
      name: 'Vera',
      type: 'Central Residential',
      priceRange: '₾1000-2200/month',
      avgRent: '₾1500',
      description: 'Central location near Rustaveli Avenue. Mix of Soviet-era and renovated buildings. Good balance of local life and expat amenities. Close to theaters and museums.',
      pros: ['Central location', 'Good public transport', 'Mix of old and new', 'Cultural venues nearby', 'More affordable than Vake', 'Authentic Georgian feel'],
      cons: ['Busy streets', 'Older infrastructure', 'Limited parking', 'Some buildings need renovation', 'Air quality can be poor'],
      bestFor: 'Budget-conscious expats, culture enthusiasts',
      metro: 'Rustaveli, Liberty Square',
      mapLink: 'https://goo.gl/maps/vera-tbilisi',
      utilities: '₾100-180/month'
    },
    {
      name: 'Mtatsminda',
      type: 'Hillside Residential',
      priceRange: '₾1200-2800/month',
      avgRent: '₾1800',
      description: 'Upscale hillside neighborhood with stunning city views. Quieter than downtown, with a mix of old villas and modern apartments. Popular with diplomats and wealthy Georgians.',
      pros: ['Amazing city views', 'Quiet and peaceful', 'Fresh air', 'Prestigious address', 'Beautiful architecture', 'Close to Mtatsminda Park'],
      cons: ['Steep hills (difficult in winter)', 'Limited public transport', 'Need a car', 'Fewer restaurants/shops', 'More expensive', 'Can feel isolated'],
      bestFor: 'Those with cars, seeking quiet and views',
      metro: 'Rustaveli (but steep walk)',
      mapLink: 'https://goo.gl/maps/mtatsminda-tbilisi',
      utilities: '₾150-250/month'
    },
    {
      name: 'Sololaki',
      type: 'Historic Upscale',
      priceRange: '₾1100-2500/month',
      avgRent: '₾1700',
      description: 'Historic neighborhood with beautiful 19th-century architecture. More upscale than Old Town, less touristy. Close to Rustaveli Avenue and cultural sites.',
      pros: ['Beautiful architecture', 'Less touristy than Old Town', 'Central location', 'Cultural venues', 'Charming streets', 'Good restaurants'],
      cons: ['Hilly terrain', 'Older buildings', 'Limited parking', 'Some buildings need work', 'Can be noisy'],
      bestFor: 'Those wanting character without tourist crowds',
      metro: 'Rustaveli, Liberty Square',
      mapLink: 'https://goo.gl/maps/sololaki-tbilisi',
      utilities: '₾120-200/month'
    },
    {
      name: 'Isani',
      type: 'Developing Area',
      priceRange: '₾600-1400/month',
      avgRent: '₾900',
      description: 'Up-and-coming area across the river. More affordable, with new developments. Popular with locals and budget-conscious expats. Good metro access.',
      pros: ['Most affordable', 'New developments', 'Good metro access', 'Authentic local life', 'Large apartments', 'Growing infrastructure'],
      cons: ['Further from center', 'Less expat community', 'Fewer English speakers', 'Limited restaurants', 'Less developed', 'Industrial feel in parts'],
      bestFor: 'Budget travelers, those wanting local experience',
      metro: 'Isani, Samgori, 300 Aragveli',
      mapLink: 'https://goo.gl/maps/isani-tbilisi',
      utilities: '₾80-150/month'
    },
    {
      name: 'Didube',
      type: 'Transport Hub',
      priceRange: '₾700-1500/month',
      avgRent: '₾1000',
      description: 'Major transport hub with bus station and metro. More working-class area, very local. Good for those on a budget who don\'t mind being off the beaten path.',
      pros: ['Affordable', 'Excellent transport links', 'Very local/authentic', 'Large apartments', 'Good markets', 'Easy access to regions'],
      cons: ['Not expat-friendly', 'Limited English', 'Industrial area', 'Far from attractions', 'Less safe at night', 'Noisy'],
      bestFor: 'Budget travelers, adventurous expats',
      metro: 'Didube, Gotsiridze',
      mapLink: 'https://goo.gl/maps/didube-tbilisi',
      utilities: '₾80-140/month'
    },
    {
      name: 'Avlabari',
      type: 'Historic Riverside',
      priceRange: '₾800-1800/month',
      avgRent: '₾1200',
      description: 'Historic area near Old Town, across the river. Mix of old and new. Close to Metekhi Church and Rike Park. More affordable alternative to Old Town.',
      pros: ['Close to Old Town', 'More affordable', 'Good transport', 'Rike Park nearby', 'Mix of old and new', 'Developing area'],
      cons: ['Some areas run-down', 'Hilly terrain', 'Limited amenities', 'Older buildings', 'Can feel transitional'],
      bestFor: 'Budget-conscious wanting Old Town proximity',
      metro: 'Avlabari, 300 Aragveli',
      mapLink: 'https://goo.gl/maps/avlabari-tbilisi',
      utilities: '₾90-160/month'
    },
    {
      name: 'Nutsubidze',
      type: 'Residential Plateau',
      priceRange: '₾700-1600/month',
      avgRent: '₾1100',
      description: 'Large residential area on a plateau. Mostly Soviet-era apartment blocks. Very local, affordable, with good views. Popular with Georgian families.',
      pros: ['Affordable', 'Spacious apartments', 'Local atmosphere', 'Good views', 'Quiet', 'Family-friendly'],
      cons: ['Far from center', 'Limited amenities', 'Few expats', 'Soviet architecture', 'Need transport', 'Limited English'],
      bestFor: 'Families on budget, long-term residents',
      metro: 'Delisi (then bus)',
      mapLink: 'https://goo.gl/maps/nutsubidze-tbilisi',
      utilities: '₾80-150/month'
    }
  ]

  const housingTips = [
    {
      title: 'Finding Accommodation',
      tips: [
        'Use ss.ge and myhome.ge for listings (main rental sites)',
        'Join "Apartment Rentals Tbilisi" Facebook group',
        'Consider hiring a local agent (₾200-500 fee)',
        'Book temporary accommodation for first 1-2 weeks',
        'Visit properties in person - photos can be misleading',
        'Check heating system (crucial for winter)',
        'Test hot water pressure and consistency',
        'Negotiate rent for 6+ month leases',
        'Ask about utility costs and who pays',
        'Check cell phone signal strength'
      ]
    },
    {
      title: 'Legal Requirements',
      tips: [
        'Register address with Public Service Hall within 30 days',
        'Get rental agreement in both Georgian and English',
        'Deposit usually 1-2 months rent (negotiable)',
        'Understand utility payment responsibilities',
        'Keep copies of all documents',
        'Know your tenant rights under Georgian law',
        'Get landlord\'s ID copy for registration',
        'Clarify lease termination notice period',
        'Document apartment condition with photos',
        'Get receipts for all payments'
      ]
    },
    {
      title: 'What to Check Before Signing',
      tips: [
        'Hot water system (boiler or central)',
        'Heating type (gas, electric, central)',
        'Internet availability and speed',
        'Water pressure (especially upper floors)',
        'Elevator condition (if applicable)',
        'Building security and entrance',
        'Noise levels (visit at different times)',
        'Furniture condition (if furnished)',
        'Kitchen appliances working',
        'Bathroom fixtures and plumbing'
      ]
    },
    {
      title: 'Average Monthly Costs',
      tips: [
        'Electricity: ₾30-80 (depends on usage)',
        'Gas (heating/cooking): ₾20-100 (higher in winter)',
        'Water: ₾10-30',
        'Internet (fiber): ₾30-80 (100-1000 Mbps)',
        'Building maintenance: ₾20-50',
        'Total utilities: ₾110-340/month',
        'Furnished apartments: +₾200-400/month',
        'Parking (if needed): ₾50-200/month'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHero
        title="Housing in Tbilisi"
        description="Find your perfect home in Tbilisi. Explore neighborhoods, understand the rental market, and get practical tips for securing accommodation as an expat."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 mb-12">
          {neighborhoods.map((area, index) => (
            <div key={index} className="card overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Neighborhood Image */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-black/50 text-white px-4 py-2 rounded-lg font-semibold text-center">
                    {area.name}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {area.type}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-green-600">
                    {area.priceRange}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{area.name}</h3>
                    <p className="text-lg text-purple-600 mb-2">{area.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-green-600 font-semibold mb-1">
                      <DollarSign className="h-5 w-5 mr-1" />
                      <span>{area.priceRange}</span>
                    </div>
                    <div className="text-sm text-gray-600">Avg: {area.avgRent}</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{area.description}</p>

                {/* Quick Info */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-xs text-gray-500">Best For</div>
                    <div className="text-sm font-semibold text-gray-900">{area.bestFor}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Metro</div>
                    <div className="text-sm font-semibold text-gray-900">{area.metro}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Utilities</div>
                    <div className="text-sm font-semibold text-gray-900">{area.utilities}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">✓ Pros:</h4>
                    <ul className="space-y-1">
                      {area.pros.map((pro, idx) => (
                        <li key={idx} className="text-gray-700 text-sm">• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-3">✗ Cons:</h4>
                    <ul className="space-y-1">
                      {area.cons.map((con, idx) => (
                        <li key={idx} className="text-gray-700 text-sm">• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Map Link */}
                <a 
                  href={area.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  View on Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {housingTips.map((section, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Useful Resources */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
          <h3 className="font-bold text-gray-900 mb-3">Useful Resources</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Rental Websites:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• <a href="https://ss.ge" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ss.ge</a> - Main rental site</li>
                <li>• <a href="https://myhome.ge" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">myhome.ge</a> - Real estate listings</li>
                <li>• Facebook: "Apartment Rentals Tbilisi"</li>
                <li>• Facebook: "Expats in Tbilisi"</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Utilities & Services:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• <a href="https://my.telasi.ge" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Telasi</a> - Electricity</li>
                <li>• <a href="https://tbilisi.gov.ge" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Tbilisi.gov.ge</a> - Water bills</li>
                <li>• <a href="https://silknet.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Silknet</a> - Internet provider</li>
                <li>• <a href="https://magticom.ge" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Magticom</a> - Internet provider</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p className="font-semibold">Last updated: November 11, 2025</p>
          <p className="mt-2">Rental prices and information verified from ss.ge and local sources.</p>
          <p className="mt-1">Found outdated information? <a href="mailto:contact@georgiaexpat.com" className="text-blue-600 hover:text-blue-700 underline">Let us know</a></p>
        </div>
      </div>
    </div>
  )
}

export default HousingPage