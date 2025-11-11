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
      'Shavi Lomi': 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=400&fit=crop', // Georgian traditional food
      'Barbarestan': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop', // Fine dining
      'Cafe Littera': 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=400&fit=crop', // Garden restaurant
      'Sakhli #11': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=400&fit=crop', // Traditional Georgian interior
      'Keto and Kote': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop', // Cozy restaurant
      'Machakhela': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop', // Casual dining
      'Culinarium Khasheria': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=400&fit=crop' // Modern restaurant
    }
    return restaurantImages[name] || `https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=400&fit=crop&sig=${index}`
  }

  const filters = [
    { id: 'all', name: 'All Restaurants', count: 25 },
    { id: 'georgian', name: 'Georgian', count: 18 },
    { id: 'international', name: 'International', count: 7 },
    { id: 'fine-dining', name: 'Fine Dining', count: 7 },
    { id: 'budget', name: 'Budget-Friendly', count: 6 }
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
      location: 'Vake',
      address: '16 Egnate Ninoshvili St, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 243 24 34',
      website: 'shavilomi.ge',
      description: 'Beloved by locals and expats alike, Shavi Lomi serves authentic home-style Georgian food in a warm, rustic atmosphere. Their khachapuri is legendary, and the wine selection is excellent. Expect to wait for a table during peak hours - it\'s that popular!',
      specialties: ['Imeruli Khachapuri', 'Pkhali Trio', 'Chakapuli', 'Lobio'],
      features: ['wifi', 'cards', 'outdoor', 'english-menu'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: true,
      dietary: ['vegetarian'],
      deliveryApps: ['Glovo', 'Wolt'],
      peakHours: '19:00-21:30',
      waitTime: '20-40 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Imeruli Khachapuri', price: '10 GEL', description: 'Classic cheese-filled bread, perfectly crispy outside' },
        { name: 'Pkhali Assortment', price: '12 GEL', description: 'Three types of vegetable pâtés with walnuts' },
        { name: 'Chakapuli', price: '22 GEL', description: 'Spring lamb stew with tarragon and white wine' }
      ],
      expatReview: 'My go-to spot for authentic Georgian food. The atmosphere feels like eating at a Georgian grandmother\'s house. Cash only sometimes, so bring GEL!'
    },
    {
      id: 'barbarestan',
      name: 'Barbarestan',
      cuisine: 'Georgian Fine Dining',
      rating: 4.9,
      priceRange: '₾₾₾',
      location: 'Sololaki',
      address: '132 Davit Aghmashenebeli Ave, Tbilisi',
      hours: '12:00 - 00:00',
      phone: '+995 32 294 21 79',
      website: 'barbarestan.ge',
      description: 'Named after a 19th-century Georgian cookbook author, Barbarestan brings historical recipes to life with modern presentation. This is where you take visitors to impress them. The tasting menu is worth every lari, and the wine pairing is exceptional.',
      specialties: ['Historical Georgian Dishes', 'Tasting Menu', 'Natural Wine Selection'],
      features: ['wifi', 'cards', 'reservations', 'english-menu', 'sommelier'],
      category: 'georgian',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      dietary: ['vegetarian', 'gluten-free'],
      deliveryApps: [],
      peakHours: '20:00-22:00',
      waitTime: '60+ min without reservation',
      reservationRequired: true,
      popularDishes: [
        { name: 'Tasting Menu', price: '85 GEL', description: '7-course journey through Georgian culinary history' },
        { name: 'Lobio with Mchadi', price: '18 GEL', description: 'Slow-cooked beans with cornbread, walnuts' },
        { name: 'Pheasant with Bazhe', price: '38 GEL', description: 'Roasted pheasant with walnut sauce' }
      ],
      expatReview: 'Book ahead! This is THE place for special occasions. The service is impeccable, and every dish tells a story. Try the wine pairing - the sommelier really knows their stuff.'
    },
    {
      id: 'cafe-littera',
      name: 'Cafe Littera',
      cuisine: 'European Georgian Fusion',
      rating: 4.7,
      priceRange: '₾₾₾',
      location: 'Sololaki',
      address: '13 Machabeli St, Tbilisi (Writers House)',
      hours: '12:00 - 23:00',
      phone: '+995 32 272 44 88',
      website: 'cafelittera.ge',
      description: 'Hidden gem in the historic Writers House courtyard. The garden setting is magical in summer, and the fusion of Georgian and European cuisine is executed perfectly. Popular with diplomats and the cultural elite.',
      specialties: ['Garden Dining', 'Fusion Cuisine', 'Natural Wines'],
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
        { name: 'Duck Confit with Tkemali', price: '32 GEL', description: 'French technique meets Georgian flavors' },
        { name: 'Burrata with Georgian Herbs', price: '24 GEL', description: 'Fresh burrata with local herbs and olive oil' },
        { name: 'Beef Tartare', price: '28 GEL', description: 'Hand-cut beef with quail egg and truffle oil' }
      ],
      expatReview: 'Perfect for a romantic dinner or business lunch. The garden is stunning, and the food is consistently excellent. Prices are high but worth it for the ambiance and quality.'
    },
    {
      id: 'machakhela',
      name: 'Machakhela',
      cuisine: 'Adjarian',
      rating: 4.6,
      priceRange: '₾',
      location: 'Multiple Locations',
      address: 'Multiple locations (Rustaveli, Vake, Saburtalo)',
      hours: '10:00 - 23:00',
      phone: '+995 32 225 25 25',
      website: 'machakhela.ge',
      description: 'Reliable chain restaurant that every expat visits eventually. The Adjarian khachapuri is their signature - a cheese boat with an egg and butter on top. Not fancy, but consistently good and affordable. Great for a quick, filling meal.',
      specialties: ['Adjarian Khachapuri', 'Mtsvadi', 'Khinkali'],
      features: ['wifi', 'cards', 'delivery', 'english-menu', 'family-friendly'],
      category: 'georgian',
      priceCategory: 'budget',
      aiRecommended: false,
      dietary: ['vegetarian'],
      deliveryApps: ['Glovo', 'Wolt', 'Bolt Food'],
      peakHours: '12:00-14:00, 19:00-21:00',
      waitTime: '10-20 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Adjarian Khachapuri', price: '12 GEL', description: 'The reason everyone comes here - cheese boat perfection' },
        { name: 'Khinkali (10 pieces)', price: '10 GEL', description: 'Solid dumplings, not the best but reliable' },
        { name: 'Mtsvadi', price: '16 GEL', description: 'Grilled pork skewers with pomegranate' }
      ],
      expatReview: 'My first Georgian meal was here, and I still come back. It\'s not gourmet, but it\'s dependable and cheap. The Adjarian khachapuri is a must-try for newcomers.'
    },
    {
      id: 'culinarium-khasheria',
      name: 'Culinarium Khasheria',
      cuisine: 'Georgian Modern',
      rating: 4.8,
      priceRange: '₾₾',
      location: 'Old Town',
      address: '7 Khasheria St, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 292 19 19',
      website: 'culinarium.ge',
      description: 'Where traditional Georgian meets modern gastronomy. The chef trained in Europe but stayed true to Georgian flavors. The courtyard seating is lovely, and the presentation is Instagram-worthy without sacrificing taste.',
      specialties: ['Modern Georgian', 'Seasonal Menu', 'Natural Wines'],
      features: ['wifi', 'cards', 'outdoor', 'english-menu', 'courtyard'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: true,
      dietary: ['vegetarian', 'gluten-free'],
      deliveryApps: ['Glovo'],
      peakHours: '19:00-21:00',
      waitTime: '20-35 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Khinkali Trio', price: '18 GEL', description: 'Three flavors: traditional, mushroom, cheese' },
        { name: 'Eggplant Rolls', price: '14 GEL', description: 'Walnut-stuffed eggplant with pomegranate' },
        { name: 'Slow-Cooked Lamb', price: '28 GEL', description: 'Fall-off-the-bone tender with herbs' }
      ],
      expatReview: 'Great middle ground between traditional and fancy. The food is creative but not pretentious, and prices are reasonable. The courtyard is perfect for summer evenings.'
    },
    {
      id: 'sakhli-11',
      name: 'Sakhli #11',
      cuisine: 'Georgian Home Cooking',
      rating: 4.7,
      priceRange: '₾₾',
      location: 'Vera',
      address: '11 Merab Aleksidze St, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 243 03 58',
      website: 'sakhli11.ge',
      description: 'Feels like dining in a Georgian family home. The decor is traditional, the portions are huge, and there\'s often live music on weekends. Great for experiencing a traditional supra (Georgian feast) without the formality.',
      specialties: ['Home Cooking', 'Large Portions', 'Weekend Music'],
      features: ['wifi', 'cards', 'live-music', 'english-menu', 'family-friendly'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: false,
      dietary: ['vegetarian'],
      deliveryApps: ['Glovo'],
      peakHours: '20:00-22:00',
      waitTime: '15-25 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Ojakhuri', price: '14 GEL', description: 'Fried potatoes with pork and onions - comfort food!' },
        { name: 'Khinkali (10 pieces)', price: '12 GEL', description: 'Juicy dumplings, some of the best in town' },
        { name: 'Badrijani', price: '10 GEL', description: 'Eggplant rolls with walnut paste' }
      ],
      expatReview: 'This place reminds me why I love Georgian food. Huge portions, reasonable prices, and the staff treats you like family. Come hungry!'
    },
    {
      id: 'keto-and-kote',
      name: 'Keto and Kote',
      cuisine: 'Georgian Traditional',
      rating: 4.6,
      priceRange: '₾₾',
      location: 'Old Town',
      address: '26 Kote Abkhazi St, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 293 28 28',
      website: 'ketoandkote.ge',
      description: 'Charming restaurant in Old Town with a cozy atmosphere and excellent traditional food. Named after characters from a famous Georgian film. The wine cellar is impressive, and the staff is knowledgeable about pairings.',
      specialties: ['Traditional Georgian', 'Wine Selection', 'Cozy Atmosphere'],
      features: ['wifi', 'cards', 'wine-cellar', 'english-menu'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: true,
      dietary: ['vegetarian'],
      deliveryApps: [],
      peakHours: '19:00-21:00',
      waitTime: '20-30 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Chakhokhbili', price: '18 GEL', description: 'Chicken stew in tomato sauce with herbs' },
        { name: 'Pkhali Sampler', price: '12 GEL', description: 'Three types of vegetable pâtés' },
        { name: 'Qvevri Wine', price: '15 GEL/glass', description: 'Traditional Georgian wine from clay vessels' }
      ],
      expatReview: 'One of my favorites in Old Town. The atmosphere is warm, the food is authentic, and the wine list is fantastic. Ask the staff for wine recommendations - they really know their stuff.'
    },
    {
      id: 'azarphesha',
      name: 'Azarphesha',
      cuisine: 'Georgian Traditional',
      rating: 4.7,
      priceRange: '₾₾',
      location: 'Sololaki',
      address: '4 Akhvlediani St, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 298 64 26',
      website: 'azarphesha.ge',
      description: 'Authentic Georgian restaurant with a focus on traditional recipes and generous portions. The interior features traditional Georgian decor, and the outdoor terrace is perfect for summer dining. Known for excellent khinkali and mtsvadi.',
      specialties: ['Khinkali', 'Mtsvadi', 'Traditional Supra'],
      features: ['wifi', 'cards', 'outdoor', 'english-menu', 'family-friendly'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: true,
      dietary: ['vegetarian'],
      deliveryApps: ['Glovo', 'Wolt'],
      peakHours: '19:00-21:00',
      waitTime: '15-25 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Khinkali (10 pieces)', price: '12 GEL', description: 'Juicy meat dumplings - some of the best in Tbilisi' },
        { name: 'Mtsvadi', price: '18 GEL', description: 'Perfectly grilled pork skewers with pomegranate' },
        { name: 'Ojakhuri', price: '15 GEL', description: 'Fried potatoes with meat and onions' }
      ],
      expatReview: 'Great value for money! The portions are huge, the food is delicious, and the staff is friendly. Perfect spot for a casual dinner with friends.'
    },
    {
      id: 'puris-sakhli',
      name: 'Puris Sakhli',
      cuisine: 'Georgian Bakery',
      rating: 4.8,
      priceRange: '₾',
      location: 'Multiple Locations',
      address: 'Multiple locations throughout Tbilisi',
      hours: '08:00 - 22:00',
      phone: '+995 32 2 15 15 15',
      website: 'purissakhli.ge',
      description: 'Popular bakery chain serving fresh khachapuri, pastries, and Georgian baked goods. Perfect for a quick, affordable meal. The Imeruli khachapuri is consistently excellent, and the coffee is surprisingly good.',
      specialties: ['Khachapuri', 'Fresh Bread', 'Pastries'],
      features: ['wifi', 'cards', 'delivery', 'takeaway', 'budget'],
      category: 'georgian',
      priceCategory: 'budget',
      aiRecommended: false,
      dietary: ['vegetarian'],
      deliveryApps: ['Glovo', 'Wolt', 'Bolt Food'],
      peakHours: '12:00-14:00',
      waitTime: '5-10 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Imeruli Khachapuri', price: '6 GEL', description: 'Classic cheese bread - best value in Tbilisi' },
        { name: 'Lobiani', price: '5 GEL', description: 'Bean-filled bread, perfect for vegetarians' },
        { name: 'Nazuki', price: '4 GEL', description: 'Sweet spiced bread with raisins' }
      ],
      expatReview: 'My go-to for cheap, quick meals. The khachapuri is always fresh and hot. Can\'t beat the price!'
    },
    {
      id: 'funicular-restaurant',
      name: 'Funicular Restaurant Complex',
      cuisine: 'Georgian & International',
      rating: 4.5,
      priceRange: '₾₾₾',
      location: 'Mtatsminda',
      address: 'Mtatsminda Park (top of funicular)',
      hours: '12:00 - 00:00',
      phone: '+995 32 2 75 09 09',
      website: 'funicular.ge',
      description: 'Stunning panoramic views of Tbilisi from the top of Mtatsminda. Multiple restaurants and cafes to choose from. The food is good but you\'re really paying for the view. Perfect for special occasions or impressing visitors.',
      specialties: ['City Views', 'Multiple Cuisines', 'Romantic Setting'],
      features: ['wifi', 'cards', 'views', 'outdoor', 'english-menu', 'valet'],
      category: 'international',
      priceCategory: 'fine-dining',
      aiRecommended: false,
      dietary: ['vegetarian', 'vegan', 'gluten-free'],
      deliveryApps: [],
      peakHours: '19:00-22:00',
      waitTime: '30-45 min',
      reservationRequired: true,
      popularDishes: [
        { name: 'Georgian Platter', price: '35 GEL', description: 'Mixed Georgian appetizers with amazing views' },
        { name: 'Grilled Trout', price: '28 GEL', description: 'Fresh fish with herbs and lemon' },
        { name: 'Beef Steak', price: '45 GEL', description: 'Premium cut with sides' }
      ],
      expatReview: 'Expensive but worth it for the views, especially at sunset. Book ahead for window seats. The funicular ride up is fun too!'
    },
    {
      id: 'pasanauri',
      name: 'Pasanauri',
      cuisine: 'Georgian Traditional',
      rating: 4.7,
      priceRange: '₾₾',
      location: 'Multiple Locations',
      address: 'Multiple locations (Rustaveli, Vake, Saburtalo)',
      hours: '10:00 - 23:00',
      phone: '+995 32 2 93 16 62',
      website: 'pasanauri.ge',
      description: 'Famous for their khinkali! This chain restaurant specializes in Georgian dumplings and does them exceptionally well. The meat khinkali are juicy and flavorful, and they also offer mushroom and cheese varieties. Always busy, which is a good sign.',
      specialties: ['Khinkali', 'Georgian Dumplings', 'Traditional Food'],
      features: ['wifi', 'cards', 'delivery', 'english-menu', 'family-friendly'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: true,
      dietary: ['vegetarian'],
      deliveryApps: ['Glovo', 'Wolt', 'Bolt Food'],
      peakHours: '13:00-15:00, 19:00-21:00',
      waitTime: '15-30 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Khinkali (10 pieces)', price: '11 GEL', description: 'The reason to come here - perfectly juicy dumplings' },
        { name: 'Mushroom Khinkali', price: '10 GEL', description: 'Great vegetarian option' },
        { name: 'Khachapuri Megruli', price: '12 GEL', description: 'Cheese bread with extra cheese on top' }
      ],
      expatReview: 'Best khinkali in Tbilisi! I always bring visitors here. Pro tip: hold the dumpling by the top, bite a small hole, suck out the juice, then eat. Don\'t eat the top knob!'
    },
    {
      id: 'gabriadze-cafe',
      name: 'Gabriadze Cafe',
      cuisine: 'European Georgian',
      rating: 4.6,
      priceRange: '₾₾',
      location: 'Old Town',
      address: '13 Shavteli St, Tbilisi (next to Gabriadze Theater)',
      hours: '11:00 - 23:00',
      phone: '+995 32 2 92 20 20',
      website: 'gabriadze.com',
      description: 'Charming cafe next to the famous Gabriadze Theater. The atmosphere is artistic and cozy, with quirky decor. Great for coffee, light meals, and desserts. The terrace has views of the clock tower.',
      specialties: ['Coffee', 'Desserts', 'Light Meals'],
      features: ['wifi', 'cards', 'outdoor', 'english-menu', 'courtyard'],
      category: 'international',
      priceCategory: 'mid-range',
      aiRecommended: false,
      dietary: ['vegetarian', 'vegan'],
      deliveryApps: [],
      peakHours: '15:00-18:00',
      waitTime: '10-20 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Cappuccino', price: '6 GEL', description: 'Excellent coffee in artistic setting' },
        { name: 'Chocolate Cake', price: '8 GEL', description: 'Rich and decadent' },
        { name: 'Salad Bowl', price: '14 GEL', description: 'Fresh and healthy option' }
      ],
      expatReview: 'Perfect spot for afternoon coffee and people-watching. The atmosphere is magical, especially if you catch the clock tower show at noon or 7pm.'
    },
    {
      id: 'lolita',
      name: 'Lolita',
      cuisine: 'European Fusion',
      rating: 4.8,
      priceRange: '₾₾₾',
      location: 'Vera',
      address: '8 Akhvlediani St, Tbilisi',
      hours: '12:00 - 00:00',
      phone: '+995 32 2 99 38 38',
      website: 'lolita.ge',
      description: 'Trendy restaurant with excellent European cuisine and creative cocktails. The interior is stylish and modern, and the food presentation is Instagram-worthy. Popular with Tbilisi\'s young professionals and expats.',
      specialties: ['European Cuisine', 'Craft Cocktails', 'Modern Atmosphere'],
      features: ['wifi', 'cards', 'bar', 'english-menu', 'reservations'],
      category: 'international',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      dietary: ['vegetarian', 'vegan', 'gluten-free'],
      deliveryApps: ['Glovo'],
      peakHours: '20:00-23:00',
      waitTime: '25-40 min',
      reservationRequired: true,
      popularDishes: [
        { name: 'Beef Tartare', price: '26 GEL', description: 'Perfectly seasoned with quail egg' },
        { name: 'Burrata Salad', price: '22 GEL', description: 'Fresh burrata with heirloom tomatoes' },
        { name: 'Signature Cocktails', price: '18 GEL', description: 'Creative and well-crafted' }
      ],
      expatReview: 'My favorite spot for date night. The food is consistently excellent, cocktails are creative, and the vibe is sophisticated without being stuffy. Book ahead!'
    },
    {
      id: 'khinklis-sakhli',
      name: 'Khinklis Sakhli',
      cuisine: 'Georgian Khinkali Specialist',
      rating: 4.5,
      priceRange: '₾',
      location: 'Saburtalo',
      address: '71 Vazha-Pshavela Ave, Tbilisi',
      hours: '11:00 - 23:00',
      phone: '+995 32 2 22 55 55',
      website: 'khinklissakhli.ge',
      description: 'No-frills khinkali house that locals love. Super cheap, super tasty. The focus is on dumplings - they make them fresh all day. Cash only, basic seating, but the khinkali are some of the best in the city.',
      specialties: ['Khinkali', 'Budget Dining', 'Local Favorite'],
      features: ['takeaway', 'family-friendly', 'budget'],
      category: 'georgian',
      priceCategory: 'budget',
      aiRecommended: false,
      dietary: ['vegetarian'],
      deliveryApps: ['Glovo'],
      peakHours: '12:00-14:00, 18:00-20:00',
      waitTime: '10-15 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Khinkali (10 pieces)', price: '8 GEL', description: 'Cheapest and tastiest in town!' },
        { name: 'Potato Khinkali', price: '7 GEL', description: 'Vegetarian option, surprisingly good' },
        { name: 'Mtsvadi', price: '12 GEL', description: 'Simple but well-grilled' }
      ],
      expatReview: 'This is where locals go for khinkali. No fancy atmosphere, just damn good dumplings at unbeatable prices. Cash only!'
    },
    {
      id: 'stamba-cafe',
      name: 'Stamba Cafe',
      cuisine: 'International Modern',
      rating: 4.7,
      priceRange: '₾₾₾',
      location: 'Vera',
      address: '14 Merab Kostava St, Tbilisi (Stamba Hotel)',
      hours: '08:00 - 23:00',
      phone: '+995 32 2 00 11 10',
      website: 'stambahotel.com',
      description: 'Stylish cafe in the trendy Stamba Hotel. Converted from a Soviet-era printing house, the space is stunning with high ceilings and industrial design. Great for brunch, coffee, or cocktails. Popular with digital nomads.',
      specialties: ['Brunch', 'Coffee', 'Modern Design'],
      features: ['wifi', 'cards', 'outdoor', 'english-menu', 'laptop-friendly'],
      category: 'international',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      dietary: ['vegetarian', 'vegan', 'gluten-free'],
      deliveryApps: [],
      peakHours: '10:00-13:00 (brunch)',
      waitTime: '20-30 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Avocado Toast', price: '18 GEL', description: 'Instagram-worthy brunch staple' },
        { name: 'Eggs Benedict', price: '22 GEL', description: 'Perfectly poached eggs' },
        { name: 'Flat White', price: '7 GEL', description: 'Excellent coffee' }
      ],
      expatReview: 'Best brunch spot in Tbilisi. Great for working remotely - fast wifi, good coffee, and they don\'t rush you. Pricey but worth it for the atmosphere.'
    },
    {
      id: 'mapshalia',
      name: 'Mapshalia',
      cuisine: 'Georgian Traditional',
      rating: 4.6,
      priceRange: '₾₾',
      location: 'Vake',
      address: '15 Chavchavadze Ave, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 2 25 00 08',
      website: 'mapshalia.ge',
      description: 'Solid Georgian restaurant in Vake with reliable food and good service. Nothing fancy, but consistently good. The menu has all the classics, and portions are generous. Good for groups.',
      specialties: ['Traditional Georgian', 'Large Portions', 'Group Dining'],
      features: ['wifi', 'cards', 'english-menu', 'family-friendly'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: false,
      dietary: ['vegetarian'],
      deliveryApps: ['Glovo', 'Wolt'],
      peakHours: '19:00-21:00',
      waitTime: '15-25 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Khachapuri Adjarian', price: '13 GEL', description: 'Classic cheese boat' },
        { name: 'Ojakhuri', price: '16 GEL', description: 'Hearty meat and potato dish' },
        { name: 'Badrijani', price: '11 GEL', description: 'Eggplant rolls with walnut paste' }
      ],
      expatReview: 'My neighborhood go-to. Nothing spectacular, but reliable and convenient. Good for when you want Georgian food without the fuss.'
    },
    {
      id: 'wine-underground',
      name: 'Wine Underground',
      cuisine: 'Georgian Wine Bar',
      rating: 4.9,
      priceRange: '₾₾₾',
      location: 'Old Town',
      address: '10 Galaktion Tabidze St, Tbilisi',
      hours: '14:00 - 02:00',
      phone: '+995 32 2 99 11 11',
      website: 'wineunderground.ge',
      description: 'Exceptional wine bar focusing on natural Georgian wines. The owner is passionate and knowledgeable, offering tastings and pairings. Small plates complement the wines perfectly. A must-visit for wine lovers.',
      specialties: ['Natural Wine', 'Wine Tastings', 'Small Plates'],
      features: ['wifi', 'cards', 'wine-cellar', 'english-menu', 'sommelier'],
      category: 'georgian',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      dietary: ['vegetarian', 'vegan'],
      deliveryApps: [],
      peakHours: '20:00-23:00',
      waitTime: '20-30 min',
      reservationRequired: true,
      popularDishes: [
        { name: 'Wine Tasting Flight', price: '35 GEL', description: '5 natural wines with expert guidance' },
        { name: 'Cheese Platter', price: '25 GEL', description: 'Georgian cheeses paired with wine' },
        { name: 'Charcuterie Board', price: '28 GEL', description: 'Local meats and accompaniments' }
      ],
      expatReview: 'Best wine experience in Tbilisi! The owner really knows his stuff and will guide you through Georgian wine regions. Book ahead, it\'s tiny and always packed.'
    },
    {
      id: 'samikitno',
      name: 'Samikitno',
      cuisine: 'Georgian Traditional',
      rating: 4.4,
      priceRange: '₾',
      location: 'Didube',
      address: '2 Tsereteli Ave, Tbilisi',
      hours: '10:00 - 22:00',
      phone: '+995 32 2 37 77 77',
      website: 'samikitno.ge',
      description: 'Budget-friendly Georgian restaurant popular with locals. The food is simple but tasty, and prices are very reasonable. Not touristy at all - you might be the only foreigner there. Great for authentic experience.',
      specialties: ['Budget Georgian', 'Local Atmosphere', 'Traditional Food'],
      features: ['cards', 'family-friendly', 'budget'],
      category: 'georgian',
      priceCategory: 'budget',
      aiRecommended: false,
      dietary: ['vegetarian'],
      deliveryApps: ['Glovo'],
      peakHours: '12:00-14:00',
      waitTime: '10-15 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Khinkali (10 pieces)', price: '9 GEL', description: 'Good quality, great price' },
        { name: 'Lobio', price: '7 GEL', description: 'Bean stew with cornbread' },
        { name: 'Khachapuri', price: '8 GEL', description: 'Simple and satisfying' }
      ],
      expatReview: 'Real Georgian food at real Georgian prices. Don\'t expect English menus or fancy decor, but the food is honest and cheap.'
    },
    {
      id: 'shemoikhede-genatsvale',
      name: 'Shemoikhede Genatsvale',
      cuisine: 'Georgian Traditional',
      rating: 4.5,
      priceRange: '₾₾',
      location: 'Old Town',
      address: '2 Bambis Rigi, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 2 93 14 04',
      website: 'genatsvale.ge',
      description: 'Traditional Georgian restaurant with a warm, welcoming atmosphere. The name means "Come in, friend" and that\'s exactly how you\'re treated. Live music on weekends adds to the authentic Georgian experience.',
      specialties: ['Traditional Georgian', 'Live Music', 'Supra Experience'],
      features: ['wifi', 'cards', 'live-music', 'english-menu', 'family-friendly'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: true,
      dietary: ['vegetarian'],
      deliveryApps: [],
      peakHours: '19:00-22:00',
      waitTime: '20-30 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Chakapuli', price: '20 GEL', description: 'Spring lamb stew with herbs' },
        { name: 'Satsivi', price: '18 GEL', description: 'Chicken in walnut sauce' },
        { name: 'Khachapuri Assortment', price: '16 GEL', description: 'Try different regional styles' }
      ],
      expatReview: 'Great for experiencing Georgian hospitality. The live music on weekends is fantastic, and the staff makes you feel like family. Bring friends and order family-style!'
    },
    {
      id: 'organique-josper-bar',
      name: 'Organique Josper Bar',
      cuisine: 'Steakhouse',
      rating: 4.8,
      priceRange: '₾₾₾',
      location: 'Vake',
      address: '4 Paliashvili St, Tbilisi',
      hours: '12:00 - 00:00',
      phone: '+995 32 2 25 25 18',
      website: 'organique.ge',
      description: 'High-end steakhouse with a Josper grill. The meat is excellent quality, cooked to perfection. Also serves Georgian dishes with a modern twist. Upscale atmosphere, perfect for business dinners or celebrations.',
      specialties: ['Steaks', 'Josper Grill', 'Fine Dining'],
      features: ['wifi', 'cards', 'reservations', 'english-menu', 'valet'],
      category: 'international',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      dietary: ['gluten-free'],
      deliveryApps: [],
      peakHours: '20:00-22:00',
      waitTime: '30-45 min',
      reservationRequired: true,
      popularDishes: [
        { name: 'Ribeye Steak', price: '65 GEL', description: 'Premium cut, perfectly grilled' },
        { name: 'Lamb Chops', price: '48 GEL', description: 'Tender and flavorful' },
        { name: 'Grilled Vegetables', price: '18 GEL', description: 'Charred to perfection' }
      ],
      expatReview: 'Best steaks in Tbilisi, hands down. Expensive but worth it for special occasions. The Josper grill makes all the difference.'
    },
    {
      id: 'racha',
      name: 'Racha',
      cuisine: 'Georgian Regional',
      rating: 4.6,
      priceRange: '₾₾',
      location: 'Saburtalo',
      address: '7 Kazbegi Ave, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 2 22 44 44',
      website: 'racha.ge',
      description: 'Specializes in cuisine from the Racha region of Georgia. Known for their lobiani (bean bread) and shkmeruli (chicken in garlic sauce). Less touristy than Old Town restaurants, more authentic regional flavors.',
      specialties: ['Racha Cuisine', 'Lobiani', 'Shkmeruli'],
      features: ['wifi', 'cards', 'english-menu', 'family-friendly'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: false,
      dietary: ['vegetarian'],
      deliveryApps: ['Glovo', 'Wolt'],
      peakHours: '19:00-21:00',
      waitTime: '15-25 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Shkmeruli', price: '19 GEL', description: 'Chicken in creamy garlic sauce - regional specialty' },
        { name: 'Lobiani', price: '9 GEL', description: 'Bean-filled bread from Racha' },
        { name: 'Rachuli Khinkali', price: '12 GEL', description: 'Regional dumpling variation' }
      ],
      expatReview: 'If you want to try regional Georgian food beyond the usual dishes, this is your spot. The shkmeruli is addictive!'
    },
    {
      id: 'tsiskvili',
      name: 'Tsiskvili',
      cuisine: 'Georgian Traditional',
      rating: 4.5,
      priceRange: '₾₾',
      location: 'Mtatsminda',
      address: '2 Beliashvili St, Tbilisi',
      hours: '12:00 - 00:00',
      phone: '+995 32 2 75 00 88',
      website: 'tsiskvili.ge',
      description: 'Large restaurant with beautiful garden seating. Popular for group dinners and celebrations. The atmosphere is lively, especially on weekends with live music. Good for experiencing a traditional Georgian feast.',
      specialties: ['Garden Dining', 'Live Music', 'Group Dining'],
      features: ['wifi', 'cards', 'outdoor', 'garden', 'live-music', 'english-menu', 'family-friendly'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: false,
      dietary: ['vegetarian'],
      deliveryApps: [],
      peakHours: '19:00-22:00',
      waitTime: '20-35 min',
      reservationRequired: true,
      popularDishes: [
        { name: 'Mixed Grill Platter', price: '45 GEL', description: 'Perfect for sharing - various meats' },
        { name: 'Khachapuri Megrelian', price: '14 GEL', description: 'Cheese bread with extra cheese' },
        { name: 'Pkhali Trio', price: '13 GEL', description: 'Three vegetable pâtés' }
      ],
      expatReview: 'Great for big groups and celebrations. The garden is lovely in summer, and the live music creates a festive atmosphere. Book ahead for weekends!'
    },
    {
      id: 'entree',
      name: 'Entree',
      cuisine: 'European Fine Dining',
      rating: 4.9,
      priceRange: '₾₾₾',
      location: 'Vake',
      address: '7 Barnov St, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 2 23 00 01',
      website: 'entree.ge',
      description: 'Upscale European restaurant with impeccable service and presentation. The chef trained in France, and it shows. Perfect for special occasions when you want to impress. The tasting menu is highly recommended.',
      specialties: ['French Cuisine', 'Tasting Menu', 'Fine Dining'],
      features: ['wifi', 'cards', 'reservations', 'english-menu', 'sommelier', 'valet'],
      category: 'international',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      dietary: ['vegetarian', 'gluten-free'],
      deliveryApps: [],
      peakHours: '20:00-22:00',
      waitTime: '45+ min without reservation',
      reservationRequired: true,
      popularDishes: [
        { name: 'Tasting Menu', price: '95 GEL', description: '7-course culinary journey' },
        { name: 'Foie Gras', price: '38 GEL', description: 'Perfectly prepared French classic' },
        { name: 'Sea Bass', price: '42 GEL', description: 'Fresh fish with seasonal vegetables' }
      ],
      expatReview: 'The most refined dining experience in Tbilisi. Everything is perfect - food, service, ambiance. Expensive but worth every lari for anniversaries or special celebrations.'
    },
    {
      id: 'bread-house',
      name: 'Bread House',
      cuisine: 'Georgian Bakery',
      rating: 4.7,
      priceRange: '₾',
      location: 'Multiple Locations',
      address: 'Multiple locations throughout Tbilisi',
      hours: '08:00 - 22:00',
      phone: '+995 32 2 99 99 99',
      website: 'breadhouse.ge',
      description: 'Another excellent bakery chain competing with Puris Sakhli. Fresh khachapuri, pastries, and bread baked throughout the day. Slightly more upscale than Puris Sakhli but still very affordable.',
      specialties: ['Khachapuri', 'Pastries', 'Fresh Bread'],
      features: ['wifi', 'cards', 'delivery', 'takeaway', 'budget'],
      category: 'georgian',
      priceCategory: 'budget',
      aiRecommended: false,
      dietary: ['vegetarian'],
      deliveryApps: ['Glovo', 'Wolt', 'Bolt Food'],
      peakHours: '08:00-10:00, 12:00-14:00',
      waitTime: '5-10 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Adjarian Khachapuri', price: '8 GEL', description: 'Cheese boat with egg and butter' },
        { name: 'Croissant', price: '4 GEL', description: 'Surprisingly good for Georgia' },
        { name: 'Spinach Pie', price: '5 GEL', description: 'Flaky and delicious' }
      ],
      expatReview: 'My other go-to for quick, cheap meals. Slightly nicer atmosphere than Puris Sakhli. The croissants are actually pretty good!'
    },
    {
      id: 'old-town-wall',
      name: 'Old Town Wall',
      cuisine: 'Georgian Traditional',
      rating: 4.4,
      priceRange: '₾₾',
      location: 'Old Town',
      address: '25 Shardeni St, Tbilisi',
      hours: '11:00 - 23:00',
      phone: '+995 32 2 98 88 88',
      website: 'oldtownwall.ge',
      description: 'Tourist-friendly restaurant on popular Shardeni Street. The food is decent, not the best in town but convenient for Old Town visitors. Outdoor seating is great for people-watching. English-speaking staff.',
      specialties: ['Tourist-Friendly', 'Outdoor Seating', 'Central Location'],
      features: ['wifi', 'cards', 'outdoor', 'english-menu', 'family-friendly'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: false,
      dietary: ['vegetarian'],
      deliveryApps: [],
      peakHours: '18:00-21:00',
      waitTime: '15-25 min',
      reservationRequired: false,
      popularDishes: [
        { name: 'Georgian Platter', price: '28 GEL', description: 'Mixed appetizers for sharing' },
        { name: 'Khinkali', price: '13 GEL', description: 'Decent but not the best' },
        { name: 'Khachapuri', price: '11 GEL', description: 'Reliable choice' }
      ],
      expatReview: 'Convenient if you\'re in Old Town, but there are better options if you\'re willing to walk a bit. Good for a quick meal while sightseeing.'
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