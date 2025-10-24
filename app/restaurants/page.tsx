'use client'

import { useState } from 'react'
import { Star, MapPin, Clock, DollarSign, Utensils, Filter, Search, Heart, Phone, Globe, Wifi, Car, CreditCard, Users, Wine, ChefHat, Award, TrendingUp, Bot, Sparkles, ExternalLink } from 'lucide-react'

const RestaurantsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [favorites, setFavorites] = useState<string[]>([])

  const getRestaurantImage = (name: string, index: number) => {
    const restaurantImages: { [key: string]: string } = {
      'Shavi Lomi': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop&crop=center',
      'Barbarestan': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop&crop=center',
      'Cafe Littera': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=400&fit=crop&crop=center',
      'Funicular Restaurant Complex': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center',
      'Azarphesha': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop&crop=center'
    }
    return restaurantImages[name] || `https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop&crop=center&sig=${index}`
  }

  const filters = [
    { id: 'all', name: 'All Restaurants', count: 21 },
    { id: 'georgian', name: 'Georgian', count: 12 },
    { id: 'international', name: 'International', count: 6 },
    { id: 'fine-dining', name: 'Fine Dining', count: 5 },
    { id: 'budget', name: 'Budget-Friendly', count: 8 }
  ]

  const restaurants = [
    {
      id: 'shavi-lomi',
      name: 'Shavi Lomi',
      cuisine: 'Georgian Traditional',
      rating: 4.8,
      priceRange: '$$',
      location: 'Old Town',
      address: 'Besiki St 19, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 292 31 31',
      website: 'shavilomi.ge',
      description: 'Authentic Georgian cuisine in a cozy traditional setting. Famous for their khachapuri and khinkali.',
      specialties: ['Khachapuri', 'Khinkali', 'Mtsvadi'],
      features: ['wifi', 'cards', 'outdoor'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: true,
      popularDishes: [
        { name: 'Adjarian Khachapuri', price: '12 GEL', description: 'Boat-shaped bread with cheese, butter, and egg' },
        { name: 'Khinkali (5 pieces)', price: '8 GEL', description: 'Traditional Georgian dumplings' },
        { name: 'Mtsvadi', price: '18 GEL', description: 'Grilled pork skewers with Georgian spices' }
      ]
    },
    {
      id: 'barbarestan',
      name: 'Barbarestan',
      cuisine: 'Georgian Fine Dining',
      rating: 4.9,
      priceRange: '$$$',
      location: 'Sololaki',
      address: 'Davit Aghmashenebeli Ave 132, Tbilisi',
      hours: '18:00 - 24:00',
      phone: '+995 32 295 18 29',
      website: 'barbarestan.ge',
      description: 'Upscale Georgian restaurant featuring recipes from 19th century Georgian cookbook.',
      specialties: ['Chakapuli', 'Lobio', 'Georgian Wine'],
      features: ['wifi', 'cards', 'valet', 'reservations'],
      category: 'georgian',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      popularDishes: [
        { name: 'Chakapuli', price: '25 GEL', description: 'Lamb stew with herbs and white wine' },
        { name: 'Lobio with Mchadi', price: '18 GEL', description: 'Bean stew with cornbread' },
        { name: 'Wine Pairing Menu', price: '85 GEL', description: '5-course tasting with Georgian wines' }
      ]
    },
    {
      id: 'cafe-littera',
      name: 'Cafe Littera',
      cuisine: 'European Georgian Fusion',
      rating: 4.7,
      priceRange: '$$$',
      location: 'Writers House',
      address: 'Machabeli St 13, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 222 57 57',
      website: 'cafelittera.ge',
      description: 'Elegant restaurant in the Writers House with beautiful garden seating.',
      specialties: ['Fusion Dishes', 'Wine Pairing', 'Garden Dining'],
      features: ['wifi', 'cards', 'outdoor', 'garden', 'reservations'],
      category: 'international',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      popularDishes: [
        { name: 'Duck Confit Georgian Style', price: '32 GEL', description: 'Duck leg with tkemali sauce' },
        { name: 'Khachapuri Soufflé', price: '16 GEL', description: 'Modern take on traditional khachapuri' },
        { name: 'Georgian Wine Flight', price: '28 GEL', description: 'Tasting of 4 premium Georgian wines' }
      ]
    },
    {
      id: 'machakhela',
      name: 'Machakhela',
      cuisine: 'Adjarian',
      rating: 4.6,
      priceRange: '$',
      location: 'Multiple Locations',
      address: 'Various locations across Tbilisi',
      hours: '10:00 - 22:00',
      phone: '+995 32 225 25 25',
      website: 'machakhela.ge',
      description: 'Popular chain serving Adjarian khachapuri and other regional specialties.',
      specialties: ['Adjarian Khachapuri', 'Mtsvadi', 'Lobiani'],
      features: ['wifi', 'cards', 'delivery'],
      category: 'georgian',
      priceCategory: 'budget',
      aiRecommended: false,
      popularDishes: [
        { name: 'Adjarian Khachapuri', price: '10 GEL', description: 'Classic boat-shaped cheese bread' },
        { name: 'Lobiani', price: '6 GEL', description: 'Bean-filled bread' },
        { name: 'Mtsvadi Combo', price: '15 GEL', description: 'Grilled meat with sides' }
      ]
    },
    {
      id: 'culinarium-khasheria',
      name: 'Culinarium Khasheria',
      cuisine: 'Georgian Modern',
      rating: 4.8,
      priceRange: '$$',
      location: 'Khasheria Street',
      address: 'Khasheria St 7, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 292 19 19',
      website: 'culinarium.ge',
      description: 'Modern take on Georgian cuisine with creative presentations.',
      specialties: ['Modern Georgian', 'Tasting Menu', 'Local Ingredients'],
      features: ['wifi', 'cards', 'outdoor'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: true,
      popularDishes: [
        { name: 'Deconstructed Khinkali', price: '22 GEL', description: 'Modern presentation of classic dish' },
        { name: 'Sulguni Foam', price: '14 GEL', description: 'Georgian cheese in molecular form' },
        { name: 'Chef\'s Tasting Menu', price: '65 GEL', description: '7-course modern Georgian experience' }
      ]
    },
    {
      id: 'azarphesha',
      name: 'Azarphesha',
      cuisine: 'Georgian Traditional',
      rating: 4.5,
      priceRange: '$',
      location: 'Abanotubani',
      address: 'Abanotubani District, Tbilisi',
      hours: '11:00 - 22:00',
      phone: '+995 32 272 26 26',
      website: null,
      description: 'Family-run restaurant near the sulfur baths serving home-style Georgian food.',
      specialties: ['Home Cooking', 'Khinkali', 'Family Recipes'],
      features: ['cash-only', 'outdoor'],
      category: 'georgian',
      priceCategory: 'budget',
      aiRecommended: false,
      popularDishes: [
        { name: 'Grandmother\'s Khinkali', price: '1.5 GEL each', description: 'Traditional family recipe' },
        { name: 'Homemade Khachapuri', price: '8 GEL', description: 'Made fresh daily' },
        { name: 'Chacha (Georgian Brandy)', price: '3 GEL', description: 'Homemade traditional spirit' }
      ]
    }
  ]

  const additionalRestaurants = [
    { name: 'Sakhli #11', category: 'georgian', rating: 4.4, priceRange: '$$' },
    { name: 'Funicular Restaurant Complex', category: 'international', rating: 4.3, priceRange: '$$$' },
    { name: 'Tsiskvili', category: 'georgian', rating: 4.6, priceRange: '$$' },
    { name: 'Keto and Kote', category: 'georgian', rating: 4.5, priceRange: '$$' },
    { name: 'Purpur', category: 'international', rating: 4.7, priceRange: '$$$' },
    { name: 'Cafe Gallery', category: 'international', rating: 4.2, priceRange: '$$' },
    { name: 'Pur Pur', category: 'georgian', rating: 4.4, priceRange: '$$' },
    { name: 'Mapshalia', category: 'georgian', rating: 4.3, priceRange: '$' },
    { name: 'Samikitno', category: 'georgian', rating: 4.5, priceRange: '$$' },
    { name: 'Respublika Grill Bar', category: 'international', rating: 4.4, priceRange: '$$' },
    { name: 'Bina N37', category: 'international', rating: 4.6, priceRange: '$$$' },
    { name: 'Maspindzelo', category: 'georgian', rating: 4.3, priceRange: '$' },
    { name: 'Dzveli Sakhli', category: 'georgian', rating: 4.4, priceRange: '$$' },
    { name: 'Zakhar Zakharich', category: 'international', rating: 4.5, priceRange: '$$' },
    { name: 'Bread House', category: 'georgian', rating: 4.2, priceRange: '$' }
  ]

  const toggleFavorite = (restaurantId: string) => {
    setFavorites(prev => 
      prev.includes(restaurantId) 
        ? prev.filter(id => id !== restaurantId)
        : [...prev, restaurantId]
    )
  }

  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case 'wifi': return <Wifi className="h-4 w-4" />
      case 'cards': return <CreditCard className="h-4 w-4" />
      case 'outdoor': return <Users className="h-4 w-4" />
      case 'valet': return <Car className="h-4 w-4" />
      case 'reservations': return <Phone className="h-4 w-4" />
      case 'delivery': return <Car className="h-4 w-4" />
      case 'garden': return <Users className="h-4 w-4" />
      case 'cash-only': return <DollarSign className="h-4 w-4" />
      default: return null
    }
  }

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesFilter = selectedFilter === 'all' || 
      (selectedFilter === 'georgian' && restaurant.category === 'georgian') ||
      (selectedFilter === 'international' && restaurant.category === 'international') ||
      (selectedFilter === 'fine-dining' && restaurant.priceCategory === 'fine-dining') ||
      (selectedFilter === 'budget' && restaurant.priceCategory === 'budget')
    
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-16 overflow-hidden">
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
              <div className="flex items-center space-x-4 text-red-200">
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  <span>21 Handpicked Establishments</span>
                </div>
                <div className="flex items-center">
                  <Bot className="h-5 w-5 mr-2" />
                  <span>AI-Enhanced Recommendations</span>
                </div>
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
        {/* Enhanced Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Search restaurants, cuisine, or dishes..."
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    selectedFilter === filter.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.name} ({filter.count})
                </button>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Bot className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-semibold text-gray-700">Stew's AI Insights</span>
            </div>
            <p className="text-sm text-gray-600">
              Based on expat preferences, Georgian traditional restaurants are most popular (65%), 
              followed by fine dining (25%). Peak dining hours are 19:00-21:00. 
              {filteredRestaurants.length} restaurants match your current filters.
            </p>
          </div>
        </div>

        {/* Enhanced Restaurant Cards */}
        <div className="grid gap-8">
          {filteredRestaurants.map((restaurant, index) => (
            <div key={restaurant.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Restaurant Image */}
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('${getRestaurantImage(restaurant.name, index)}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-black/50 text-white px-4 py-2 rounded-lg font-semibold text-center">
                    {restaurant.name}
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {restaurant.aiRecommended && (
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Sparkles className="h-3 w-3 mr-1" />
                      AI Pick
                    </span>
                  )}
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {restaurant.cuisine}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <button
                    onClick={() => toggleFavorite(restaurant.id)}
                    className={`p-2 rounded-full transition-colors ${
                      favorites.includes(restaurant.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/90 text-gray-600 hover:bg-red-100 hover:text-red-600'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${favorites.includes(restaurant.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
                    <p className="text-lg text-gray-600 mb-2">{restaurant.cuisine}</p>
                    <p className="text-gray-700 mb-4">{restaurant.description}</p>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold text-lg">{restaurant.rating}</span>
                    </div>
                    <span className="text-green-600 font-semibold text-lg">{restaurant.priceRange}</span>
                  </div>
                </div>

                {/* Restaurant Details Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-red-500" />
                    <div>
                      <div className="font-semibold">{restaurant.location}</div>
                      <div className="text-sm">{restaurant.address}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-500" />
                    <div>
                      <div className="font-semibold">Hours</div>
                      <div className="text-sm">{restaurant.hours}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-green-500" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-sm">{restaurant.phone}</div>
                    </div>
                  </div>
                  {restaurant.website && (
                    <div className="flex items-center text-gray-600">
                      <Globe className="h-4 w-4 mr-2 text-purple-500" />
                      <div>
                        <div className="font-semibold">Website</div>
                        <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline flex items-center">
                          {restaurant.website}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center">
                        {getFeatureIcon(feature)}
                        <span className="ml-1 capitalize">{feature.replace('-', ' ')}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Popular Dishes */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <ChefHat className="h-4 w-4 mr-2" />
                    Popular Dishes:
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {restaurant.popularDishes.map((dish, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-semibold text-gray-900 text-sm">{dish.name}</h5>
                          <span className="text-green-600 font-semibold text-sm">{dish.price}</span>
                        </div>
                        <p className="text-xs text-gray-600">{dish.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
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

          {/* Additional restaurants in enhanced format */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">More Great Restaurants</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalRestaurants.map((restaurant, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{restaurant.name}</h4>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold">{restaurant.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 capitalize">{restaurant.category}</span>
                    <span className="text-green-600 font-semibold">{restaurant.priceRange}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Detailed reviews coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Tips Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Dining Tips for Expats</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CreditCard className="h-4 w-4 mt-1 mr-2 text-blue-600" />
                <span>Most restaurants accept cards, but carry cash for smaller establishments</span>
              </li>
              <li className="flex items-start">
                <DollarSign className="h-4 w-4 mt-1 mr-2 text-green-600" />
                <span>Tipping 10-15% is standard for good service</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 mt-1 mr-2 text-purple-600" />
                <span>Many restaurants don't take reservations - arrive early for popular spots</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mt-1 mr-2 text-orange-600" />
                <span>Georgian meals are social events - expect to spend 2-3 hours dining</span>
              </li>
              <li className="flex items-start">
                <Wine className="h-4 w-4 mt-1 mr-2 text-red-600" />
                <span>Try the local wine - Georgia has 8,000 years of winemaking tradition</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Bot className="h-6 w-6 text-purple-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">AI Restaurant Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/50 rounded-lg p-3">
                <div className="flex items-center mb-1">
                  <TrendingUp className="h-4 w-4 text-green-600 mr-2" />
                  <span className="font-semibold text-sm">Most Popular Cuisine</span>
                </div>
                <p className="text-sm text-gray-600">Georgian Traditional (65% of expat preferences)</p>
              </div>
              <div className="bg-white/50 rounded-lg p-3">
                <div className="flex items-center mb-1">
                  <Clock className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="font-semibold text-sm">Peak Dining Hours</span>
                </div>
                <p className="text-sm text-gray-600">19:00-21:00 (book ahead or arrive early)</p>
              </div>
              <div className="bg-white/50 rounded-lg p-3">
                <div className="flex items-center mb-1">
                  <DollarSign className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="font-semibold text-sm">Average Meal Cost</span>
                </div>
                <p className="text-sm text-gray-600">25-35 GEL per person (mid-range restaurants)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantsPage