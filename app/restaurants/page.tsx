import { Star, MapPin, Clock, DollarSign, Utensils } from 'lucide-react'

const RestaurantsPage = () => {
  const restaurants = [
    {
      name: 'Shavi Lomi',
      cuisine: 'Georgian Traditional',
      rating: 4.8,
      priceRange: '$$',
      location: 'Old Town',
      hours: '12:00 - 23:00',
      description: 'Authentic Georgian cuisine in a cozy traditional setting. Famous for their khachapuri and khinkali.',
      specialties: ['Khachapuri', 'Khinkali', 'Mtsvadi']
    },
    {
      name: 'Barbarestan',
      cuisine: 'Georgian Fine Dining',
      rating: 4.9,
      priceRange: '$$$',
      location: 'Sololaki',
      hours: '18:00 - 24:00',
      description: 'Upscale Georgian restaurant featuring recipes from 19th century Georgian cookbook.',
      specialties: ['Chakapuli', 'Lobio', 'Georgian Wine']
    },
    {
      name: 'Cafe Littera',
      cuisine: 'European Georgian Fusion',
      rating: 4.7,
      priceRange: '$$$',
      location: 'Writers House',
      hours: '12:00 - 23:00',
      description: 'Elegant restaurant in the Writers House with beautiful garden seating.',
      specialties: ['Fusion Dishes', 'Wine Pairing', 'Garden Dining']
    },
    {
      name: 'Machakhela',
      cuisine: 'Adjarian',
      rating: 4.6,
      priceRange: '$',
      location: 'Multiple Locations',
      hours: '10:00 - 22:00',
      description: 'Popular chain serving Adjarian khachapuri and other regional specialties.',
      specialties: ['Adjarian Khachapuri', 'Mtsvadi', 'Lobiani']
    },
    {
      name: 'Culinarium Khasheria',
      cuisine: 'Georgian Modern',
      rating: 4.8,
      priceRange: '$$',
      location: 'Khasheria Street',
      hours: '12:00 - 23:00',
      description: 'Modern take on Georgian cuisine with creative presentations.',
      specialties: ['Modern Georgian', 'Tasting Menu', 'Local Ingredients']
    },
    {
      name: 'Azarphesha',
      cuisine: 'Georgian Traditional',
      rating: 4.5,
      priceRange: '$',
      location: 'Abanotubani',
      hours: '11:00 - 22:00',
      description: 'Family-run restaurant near the sulfur baths serving home-style Georgian food.',
      specialties: ['Home Cooking', 'Khinkali', 'Family Recipes']
    }
  ]

  // Add 15 more restaurants to reach 21 total
  const additionalRestaurants = [
    'Sakhli #11', 'Funicular Restaurant Complex', 'Tsiskvili', 'Keto and Kote', 'Purpur',
    'Cafe Gallery', 'Pur Pur', 'Mapshalia', 'Samikitno', 'Respublika Grill Bar',
    'Bina N37', 'Maspindzelo', 'Dzveli Sakhli', 'Zakhar Zakharich', 'Bread House'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-red-600 text-white py-16 overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Utensils className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Best Restaurants in Tbilisi
              </h1>
              <div className="flex items-center text-red-200">
                <Star className="h-5 w-5 mr-2" />
                <span>21 Handpicked Establishments</span>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Discover exceptional dining establishments, from traditional Georgian cuisine to international favorites. 
            Each restaurant has been carefully selected for quality, authenticity, and expat-friendly service.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Restaurant Image */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('https://picsum.photos/800/400?random=${index + 400}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-black/50 text-white px-4 py-2 rounded-lg font-semibold text-center">
                    {restaurant.name}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {restaurant.cuisine}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
                    <p className="text-lg text-gray-600 mb-2">{restaurant.cuisine}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{restaurant.rating}</span>
                    </div>
                    <span className="text-green-600 font-semibold">{restaurant.priceRange}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{restaurant.description}</p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{restaurant.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{restaurant.hours}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>{restaurant.priceRange === '$' ? 'Budget' : restaurant.priceRange === '$$' ? 'Mid-range' : 'Fine Dining'}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Additional restaurants in a simpler format */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Great Restaurants</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {additionalRestaurants.map((name, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900">{name}</h4>
                  <p className="text-sm text-gray-600">Detailed reviews coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Dining Tips for Expats</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Most restaurants accept cards, but carry cash for smaller establishments</li>
            <li>• Tipping 10-15% is standard for good service</li>
            <li>• Many restaurants don't take reservations - arrive early for popular spots</li>
            <li>• Georgian meals are social events - expect to spend 2-3 hours dining</li>
            <li>• Try the local wine - Georgia has 8,000 years of winemaking tradition</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RestaurantsPage