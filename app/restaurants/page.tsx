'use client'

import { useState } from 'react'
import { Star, MapPin, Clock, DollarSign, Utensils, Search, Heart, Phone, Globe, Wifi, Car, CreditCard, Users, Wine, ChefHat, Award, TrendingUp, Bot, Sparkles, ExternalLink, Filter, Leaf, AlertCircle, CheckCircle } from 'lucide-react'

const RestaurantsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedPriceRange, setPriceRange] = useState('all')
  const [selectedDietary, setSelectedDietary] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [favorites, setFavorites] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

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
    { id: 'all', name: 'All Restaurants', count: 35 },
    { id: 'georgian', name: 'Georgian', count: 22 },
    { id: 'international', name: 'International', count: 13 },
    { id: 'fine-dining', name: 'Fine Dining', count: 10 },
    { id: 'budget', name: 'Budget-Friendly', count: 15 }
  ]

  const priceRanges = [
    { id: 'all', name: 'All Prices', symbol: '' },
    { id: 'budget', name: 'Budget', symbol: '₾' },
    { id: 'mid-range', name: 'Mid-Range', symbol: '₾₾' },
    { id: 'fine-dining', name: 'Fine Dining', symbol: '₾₾₾' }
  ]

  const dietaryOptions = [
    { id: 'all', name: 'All Options' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'vegan', name: 'Vegan' },
    { id: 'gluten-free', name: 'Gluten-Free' },
    { id: 'halal', name: 'Halal' }
  ]

  const allRestaurants = [
    {
      id: 'shavi-lomi',
      name: 'Shavi Lomi',
      cuisine: 'Georgian Traditional',
      rating: 4.8,
      priceRange: '₾₾',
      location: 'Old Town',
      address: 'Besiki St 19, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 292 31 31',
      website: 'shavilomi.ge',
      description: 'Authentic Georgian cuisine in a cozy traditional setting. Famous for their khachapuri and khinkali.',
      specialties: ['Khachapuri', 'Khinkali', 'Mtsvadi'],
      features: ['wifi', 'cards', 'outdoor', 'english-menu'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: true,
      dietary: ['vegetarian'],
      deliveryApps: ['Glovo', 'Wolt'],
      peakHours: '19:00-21:00',
      waitTime: '15-30 min',
      reservationRequired: false,
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
      priceRange: '₾₾₾',
      location: 'Sololaki',
      address: 'Davit Aghmashenebeli Ave 132, Tbilisi',
      hours: '18:00 - 24:00',
      phone: '+995 32 295 18 29',
      website: 'barbarestan.ge',
      description: 'Upscale Georgian restaurant featuring recipes from 19th century Georgian cookbook.',
      specialties: ['Chakapuli', 'Lobio', 'Georgian Wine'],
      features: ['wifi', 'cards', 'valet', 'reservations', 'english-menu'],
      category: 'georgian',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      dietary: ['vegetarian', 'gluten-free'],
      deliveryApps: [],
      peakHours: '20:00-22:00',
      waitTime: '45-60 min',
      reservationRequired: true,
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
      priceRange: '₾₾₾',
      location: 'Writers House',
      address: 'Machabeli St 13, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 222 57 57',
      website: 'cafelittera.ge',
      description: 'Elegant restaurant in the Writers House with beautiful garden seating.',
      specialties: ['Fusion Dishes', 'Wine Pairing', 'Garden Dining'],
      features: ['wifi', 'cards', 'outdoor', 'garden', 'reservations', 'english-menu'],
      category: 'international',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      dietary: ['vegetarian', 'vegan', 'gluten-free'],
      deliveryApps: [],
      peakHours: '19:30-21:30',
      waitTime: '30-45 min',
      reservationRequired: true,
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
      priceRange: '₾',
      location: 'Multiple Locations',
      address: 'Various locations across Tbilisi',
      hours: '10:00 - 22:00',
      phone: '+995 32 225 25 25',
      website: 'machakhela.ge',
      description: 'Popular chain serving Adjarian khachapuri and other regional specialties.',
      specialties: ['Adjarian Khachapuri', 'Mtsvadi', 'Lobiani'],
      features: ['wifi', 'cards', 'delivery', 'english-menu'],
      category: 'georgian',
      priceCategory: 'budget',
      aiRecommended: false,
      dietary: ['vegetarian'],
      deliveryApps: ['Glovo', 'Wolt', 'Bolt Food'],
      peakHours: '12:00-14:00, 19:00-21:00',
      waitTime: '10-20 min',
      reservationRequired: false,
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
      priceRange: '₾₾',
      location: 'Khasheria Street',
      address: 'Khasheria St 7, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 292 19 19',
      website: 'culinarium.ge',
      description: 'Modern take on Georgian cuisine with creative presentations.',
      specialties: ['Modern Georgian', 'Tasting Menu', 'Local Ingredients'],
      features: ['wifi', 'cards', 'outdoor', 'english-menu'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: true,
      dietary: ['vegetarian', 'gluten-free'],
      deliveryApps: ['Glovo'],
      peakHours: '19:00-21:00',
      waitTime: '20-35 min',
      reservationRequired: false,
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
      priceRange: '₾',
      location: 'Rustaveli Avenue',
      address: 'Rustaveli Ave 4, Tbilisi',
      hours: '11:00 - 23:00',
      phone: '+995 32 298 64 26',
      website: 'azarphesha.ge',
      description: 'Traditional Georgian restaurant with live folk music and dancing.',
      specialties: ['Traditional Shows', 'Supra Experience', 'Folk Music'],
      features: ['wifi', 'cards', 'live-music', 'english-menu'],
      category: 'georgian',
      priceCategory: 'budget',
      aiRecommended: false,
      dietary: ['vegetarian'],
      deliveryApps: ['Glovo'],
      peakHours: '20:00-22:00',
      waitTime: '15-25 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Supra Set Menu', price: '35 GEL', description: 'Traditional Georgian feast' },
        { name: 'Khinkali Platter', price: '12 GEL', description: '8 pieces with different fillings' },
        { name: 'Churchkhela', price: '5 GEL', description: 'Traditional Georgian candy' }
      ]
    },
    {
      id: 'funicular-complex',
      name: 'Funicular Restaurant Complex',
      cuisine: 'International',
      rating: 4.4,
      priceRange: '₾₾',
      location: 'Mtatsminda Park',
      address: 'Mtatsminda Park, Tbilisi',
      hours: '12:00 - 24:00',
      phone: '+995 32 291 25 14',
      website: 'mtatsmindapark.ge',
      description: 'Restaurant complex with panoramic city views atop Mtatsminda Mountain.',
      specialties: ['City Views', 'International Menu', 'Romantic Dining'],
      features: ['wifi', 'cards', 'outdoor', 'views', 'english-menu'],
      category: 'international',
      priceCategory: 'mid-range',
      aiRecommended: true,
      dietary: ['vegetarian', 'gluten-free'],
      deliveryApps: [],
      peakHours: '19:00-21:00',
      waitTime: '25-40 min',
      reservationRequired: true,
      popularDishes: [
        { name: 'Grilled Salmon', price: '28 GEL', description: 'Atlantic salmon with seasonal vegetables' },
        { name: 'Beef Tenderloin', price: '35 GEL', description: 'Premium cut with truffle sauce' },
        { name: 'Sunset Cocktail', price: '12 GEL', description: 'Signature drink with city views' }
      ]
    },
    {
      id: 'keto-and-kote',
      name: 'Keto and Kote',
      cuisine: 'Georgian Fusion',
      rating: 4.6,
      priceRange: '₾₾',
      location: 'Vera',
      address: 'Barnovi St 8, Tbilisi',
      hours: '18:00 - 02:00',
      phone: '+995 32 244 11 15',
      website: 'ketoandkote.ge',
      description: 'Trendy spot combining Georgian flavors with international techniques.',
      specialties: ['Fusion Cuisine', 'Craft Cocktails', 'Late Night Dining'],
      features: ['wifi', 'cards', 'bar', 'late-night', 'english-menu'],
      category: 'international',
      priceCategory: 'mid-range',
      aiRecommended: true,
      dietary: ['vegetarian', 'vegan'],
      deliveryApps: ['Glovo', 'Wolt'],
      peakHours: '21:00-23:00',
      waitTime: '20-30 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Khinkali Ramen', price: '18 GEL', description: 'Asian-Georgian fusion soup' },
        { name: 'Adjarian Pizza', price: '16 GEL', description: 'Pizza with khachapuri toppings' },
        { name: 'Georgian Old Fashioned', price: '14 GEL', description: 'Cocktail with chacha and honey' }
      ]
    }
  ]

  const toggleFavorite = (restaurantId: string) => {
    setFavorites(prev => 
      prev.includes(restaurantId) 
        ? prev.filter(id => id !== restaurantId)
        : [...prev, restaurantId]
    )
  }

  const filteredRestaurants = allRestaurants.filter(restaurant => {
    const matchesCategory = selectedFilter === 'all' || restaurant.category === selectedFilter
    const matchesPrice = selectedPriceRange === 'all' || restaurant.priceCategory === selectedPriceRange
    const matchesDietary = selectedDietary === 'all' || restaurant.dietary.includes(selectedDietary)
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.location.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesPrice && matchesDietary && matchesSearch
  })

  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case 'wifi': return <Wifi className="h-4 w-4" />
      case 'cards': return <CreditCard className="h-4 w-4" />
      case 'outdoor': return <Users className="h-4 w-4" />
      case 'delivery': return <Car className="h-4 w-4" />
      case 'english-menu': return <Globe className="h-4 w-4" />
      case 'reservations': return <Phone className="h-4 w-4" />
      case 'valet': return <Car className="h-4 w-4" />
      case 'garden': return <Leaf className="h-4 w-4" />
      case 'live-music': return <Users className="h-4 w-4" />
      case 'views': return <MapPin className="h-4 w-4" />
      case 'bar': return <Wine className="h-4 w-4" />
      case 'late-night': return <Clock className="h-4 w-4" />
      default: return <CheckCircle className="h-4 w-4" />
    }
  }

  const getFeatureLabel = (feature: string) => {
    switch (feature) {
      case 'wifi': return 'WiFi'
      case 'cards': return 'Cards Accepted'
      case 'outdoor': return 'Outdoor Seating'
      case 'delivery': return 'Delivery'
      case 'english-menu': return 'English Menu'
      case 'reservations': return 'Reservations'
      case 'valet': return 'Valet Parking'
      case 'garden': return 'Garden Seating'
      case 'live-music': return 'Live Music'
      case 'views': return 'City Views'
      case 'bar': return 'Full Bar'
      case 'late-night': return 'Late Night'
      default: return feature
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white py-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Utensils className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Restaurants & Dining
              </h1>
              <div className="flex items-center space-x-4 text-orange-200">
                <div className="flex items-center">
                  <ChefHat className="h-5 w-5 mr-2" />
                  <span>Georgian Cuisine</span>
                </div>
                <div className="flex items-center">
                  <Wine className="h-5 w-5 mr-2" />
                  <span>Fine Dining</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  <span>Local Favorites</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Discover Tbilisi's incredible culinary scene, from traditional Georgian supra experiences 
            to modern fusion restaurants. Find your perfect dining experience with detailed reviews, 
            prices, and insider tips.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search restaurants, cuisine, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Cuisine Type</label>
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  {filters.map(filter => (
                    <option key={filter.id} value={filter.id}>
                      {filter.name} ({filter.count})
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  {priceRanges.map(range => (
                    <option key={range.id} value={range.id}>
                      {range.name} {range.symbol}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Dietary Options</label>
                <select
                  value={selectedDietary}
                  onChange={(e) => setSelectedDietary(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  {dietaryOptions.map(option => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{filteredRestaurants.length}</div>
            <div className="text-sm text-gray-600">Restaurants Found</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {filteredRestaurants.filter(r => r.priceCategory === 'budget').length}
            </div>
            <div className="text-sm text-gray-600">Budget Options</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {filteredRestaurants.filter(r => r.deliveryApps.length > 0).length}
            </div>
            <div className="text-sm text-gray-600">Delivery Available</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">
              {filteredRestaurants.filter(r => r.features.includes('english-menu')).length}
            </div>
            <div className="text-sm text-gray-600">English Menus</div>
          </div>
        </div>

        {/* Restaurant Cards */}
        <div className="space-y-6">
          {filteredRestaurants.map((restaurant, index) => (
            <div key={restaurant.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full relative">
                    <img
                      src={getRestaurantImage(restaurant.name, index)}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => toggleFavorite(restaurant.id)}
                      className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                        favorites.includes(restaurant.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${favorites.includes(restaurant.id) ? 'fill-current' : ''}`} />
                    </button>
                    {restaurant.aiRecommended && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Sparkles className="h-3 w-3 mr-1" />
                        AI Pick
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">{restaurant.name}</h2>
                      <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                          <span className="font-semibold">{restaurant.rating}</span>
                        </div>
                        <span className="text-lg font-bold text-green-600">{restaurant.priceRange}</span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {restaurant.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{restaurant.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {restaurant.features.map((feature, idx) => (
                      <span key={idx} className="flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {getFeatureIcon(feature)}
                        <span className="ml-1">{getFeatureLabel(feature)}</span>
                      </span>
                    ))}
                  </div>

                  {/* Dietary Options */}
                  {restaurant.dietary.length > 0 && (
                    <div className="flex items-center mb-4">
                      <Leaf className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm text-gray-600">
                        Dietary: {restaurant.dietary.join(', ')}
                      </span>
                    </div>
                  )}

                  {/* Delivery Apps */}
                  {restaurant.deliveryApps.length > 0 && (
                    <div className="flex items-center mb-4">
                      <Car className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-600">
                        Delivery: {restaurant.deliveryApps.join(', ')}
                      </span>
                    </div>
                  )}

                  {/* Popular Dishes */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Popular Dishes:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {restaurant.popularDishes.slice(0, 2).map((dish, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-3">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-semibold text-sm">{dish.name}</span>
                            <span className="text-green-600 font-bold text-sm">{dish.price}</span>
                          </div>
                          <p className="text-xs text-gray-600">{dish.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm border-t border-gray-200 pt-4">
                    <div>
                      <span className="font-semibold text-gray-700">Hours:</span>
                      <p className="text-gray-600">{restaurant.hours}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Peak Hours:</span>
                      <p className="text-gray-600">{restaurant.peakHours}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Wait Time:</span>
                      <p className="text-gray-600">{restaurant.waitTime}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Reservations:</span>
                      <p className={`${restaurant.reservationRequired ? 'text-orange-600' : 'text-green-600'}`}>
                        {restaurant.reservationRequired ? 'Required' : 'Not Required'}
                      </p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <a href={`tel:${restaurant.phone}`} className="flex items-center hover:text-orange-600">
                        <Phone className="h-4 w-4 mr-1" />
                        {restaurant.phone}
                      </a>
                      <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-orange-600">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Website
                      </a>
                    </div>
                    {restaurant.reservationRequired && (
                      <div className="flex items-center text-orange-600 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        Reservation Recommended
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <Utensils className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No restaurants found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to see more options.</p>
          </div>
        )}

        {/* Dining Tips */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dining Tips for Expats</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-4 rounded-lg">
              <ChefHat className="h-8 w-8 text-orange-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Georgian Dining Culture</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Supra (feast) is a social experience</li>
                <li>• Toasts are important - wait for tamada</li>
                <li>• Try khachapuri and khinkali</li>
                <li>• Georgian wine is world-class</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <CreditCard className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Payment & Tipping</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Most places accept cards</li>
                <li>• 10-15% tip is standard</li>
                <li>• Cash preferred at small places</li>
                <li>• Service charge sometimes included</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <Clock className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Timing & Reservations</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dinner starts late (8-9 PM)</li>
                <li>• Lunch: 12-3 PM typically</li>
                <li>• Book fine dining in advance</li>
                <li>• Peak times: Friday-Sunday evenings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantsPage