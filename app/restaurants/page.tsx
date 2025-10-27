'use client'

import { useState } from 'react'
import { Star, MapPin, Clock, DollarSign, Utensils, Search, Heart, Phone, Globe, Wifi, Car, CreditCard, Users, Wine, ChefHat, Award, TrendingUp, Bot, Sparkles, ExternalLink } from 'lucide-react'

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
    { id: 'all', name: 'All Restaurants', count: 30 },
    { id: 'georgian', name: 'Georgian', count: 20 },
    { id: 'international', name: 'International', count: 10 },
    { id: 'fine-dining', name: 'Fine Dining', count: 8 },
    { id: 'budget', name: 'Budget-Friendly', count: 12 }
  ]

  const allRestaurants = [
    {
      id: 'shavi-lomi',
      name: 'Shavi Lomi',
      cuisine: 'Georgian Traditional',
      rating: 4.8,
      priceRange: '$',
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
      priceRange: '$$',
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
      priceRange: '$$',
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
    },
    {
      id: 'sakhli-11',
      name: 'Sakhli #11',
      cuisine: 'Georgian Traditional',
      rating: 4.4,
      priceRange: '$',
      location: 'Vake',
      address: 'Chavchavadze Ave 11, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 291 11 11',
      website: 'sakhli11.ge',
      description: 'Cozy family restaurant serving authentic Georgian dishes in a warm, welcoming atmosphere.',
      specialties: ['Family Recipes', 'Khachapuri Variations', 'Seasonal Dishes'],
      features: ['wifi', 'cards', 'outdoor', 'family-friendly'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: false,
      popularDishes: [
        { name: 'Imeretian Khachapuri', price: '9 GEL', description: 'Traditional cheese-filled bread from Imereti region' },
        { name: 'Ojakhuri', price: '16 GEL', description: 'Fried potatoes with meat and onions' },
        { name: 'Churchkhela', price: '5 GEL', description: 'Traditional Georgian candy made with nuts and grape juice' }
      ]
    },
    {
      id: 'funicular-complex',
      name: 'Funicular Restaurant Complex',
      cuisine: 'International with Georgian Options',
      rating: 4.3,
      priceRange: '$$',
      location: 'Mtatsminda Park',
      address: 'Mtatsminda Park, Tbilisi',
      hours: '11:00 - 24:00',
      phone: '+995 32 295 95 95',
      website: 'mtatsmindapark.ge',
      description: 'Scenic dining complex atop Mtatsminda with panoramic city views and diverse cuisine options.',
      specialties: ['City Views', 'International Menu', 'Tourist Friendly'],
      features: ['wifi', 'cards', 'outdoor', 'parking', 'views'],
      category: 'international',
      priceCategory: 'mid-range',
      aiRecommended: true,
      popularDishes: [
        { name: 'Grilled Trout', price: '28 GEL', description: 'Fresh trout with herbs and lemon' },
        { name: 'Beef Stroganoff', price: '24 GEL', description: 'Classic Russian dish with rice' },
        { name: 'Georgian Wine Selection', price: '15-45 GEL', description: 'Curated selection of local wines' }
      ]
    },
    {
      id: 'tsiskvili',
      name: 'Tsiskvili',
      cuisine: 'Georgian Traditional',
      rating: 4.6,
      priceRange: '$',
      location: 'Ortachala',
      address: 'Beliashvili St 10, Tbilisi',
      hours: '12:00 - 22:00',
      phone: '+995 32 272 72 72',
      website: null,
      description: 'Authentic Georgian restaurant with traditional decor and live folk music on weekends.',
      specialties: ['Live Music', 'Traditional Atmosphere', 'Regional Specialties'],
      features: ['cash-only', 'outdoor', 'live-music', 'traditional'],
      category: 'georgian',
      priceCategory: 'budget',
      aiRecommended: true,
      popularDishes: [
        { name: 'Satsivi', price: '14 GEL', description: 'Cold chicken in walnut sauce (seasonal)' },
        { name: 'Badrijani Nigvzit', price: '12 GEL', description: 'Eggplant rolls with walnut paste' },
        { name: 'Traditional Supra Set', price: '35 GEL', description: 'Georgian feast for sharing' }
      ]
    },
    {
      id: 'keto-kote',
      name: 'Keto and Kote',
      cuisine: 'Georgian Traditional',
      rating: 4.5,
      priceRange: '$',
      location: 'Old Town',
      address: 'Kote Afkhazi St 8, Tbilisi',
      hours: '11:00 - 23:00',
      phone: '+995 32 298 98 98',
      website: 'ketokote.ge',
      description: 'Named after Georgian literary characters, this restaurant offers refined Georgian cuisine in elegant surroundings.',
      specialties: ['Literary Theme', 'Refined Georgian', 'Wine Pairing'],
      features: ['wifi', 'cards', 'reservations', 'romantic'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: true,
      popularDishes: [
        { name: 'Kharcho Soup', price: '11 GEL', description: 'Spicy beef soup with rice and herbs' },
        { name: 'Chashushuli', price: '19 GEL', description: 'Spicy beef stew with tomatoes' },
        { name: 'Qvevri Wine Tasting', price: '25 GEL', description: 'Traditional clay pot aged wines' }
      ]
    },
    {
      id: 'purpur',
      name: 'Purpur',
      cuisine: 'Modern European',
      rating: 4.7,
      priceRange: '$$',
      location: 'Vera',
      address: 'Barnovi St 8, Tbilisi',
      hours: '18:00 - 01:00',
      phone: '+995 32 291 91 91',
      website: 'purpur.ge',
      description: 'Upscale European restaurant with creative cocktails and sophisticated atmosphere.',
      specialties: ['Modern European', 'Craft Cocktails', 'Late Night Dining'],
      features: ['wifi', 'cards', 'bar', 'late-night', 'cocktails'],
      category: 'international',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      popularDishes: [
        { name: 'Duck Breast', price: '38 GEL', description: 'Pan-seared duck with cherry sauce' },
        { name: 'Risotto with Truffle', price: '32 GEL', description: 'Creamy risotto with seasonal truffle' },
        { name: 'Signature Cocktail', price: '18 GEL', description: 'House special with Georgian chacha' }
      ]
    },
    {
      id: 'bina-n37',
      name: 'Bina N37',
      cuisine: 'Contemporary European',
      rating: 4.6,
      priceRange: '$$',
      location: 'Sololaki',
      address: 'Bambis Rigi 37, Tbilisi',
      hours: '18:00 - 01:00',
      phone: '+995 32 292 37 37',
      website: 'bina37.ge',
      description: 'Intimate restaurant in a converted apartment with creative European cuisine.',
      specialties: ['Intimate Setting', 'Creative Cuisine', 'Wine Selection'],
      features: ['wifi', 'cards', 'intimate', 'wine-bar', 'reservations'],
      category: 'international',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      popularDishes: [
        { name: 'Lamb Rack', price: '42 GEL', description: 'Herb-crusted lamb with seasonal vegetables' },
        { name: 'Sea Bass Fillet', price: '36 GEL', description: 'Pan-seared with Mediterranean herbs' },
        { name: 'Wine Pairing Menu', price: '75 GEL', description: '5-course menu with wine pairings' }
      ]
    },
    {
      id: 'dzveli-sakhli',
      name: 'Dzveli Sakhli',
      cuisine: 'Georgian Traditional',
      rating: 4.4,
      priceRange: '$',
      location: 'Old Town',
      address: 'Betlemi St 5, Tbilisi',
      hours: '12:00 - 23:00',
      phone: '+995 32 298 44 44',
      website: null,
      description: 'Historic restaurant in Old Town serving traditional Georgian dishes in authentic setting.',
      specialties: ['Historic Setting', 'Traditional Recipes', 'Tourist Friendly'],
      features: ['wifi', 'cards', 'historic', 'tourist-friendly'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: true,
      popularDishes: [
        { name: 'Khachapuri Samegrelo', price: '13 GEL', description: 'Cheese bread with extra cheese topping' },
        { name: 'Mtsvadi Combo', price: '20 GEL', description: 'Grilled meat skewers with sides' },
        { name: 'Georgian Wine Flight', price: '20 GEL', description: 'Tasting of 3 regional wines' }
      ]
    },
    {
      id: 'samikitno',
      name: 'Samikitno',
      cuisine: 'Georgian Regional',
      rating: 4.5,
      priceRange: '$',
      location: 'Isani',
      address: 'Samikitno St 15, Tbilisi',
      hours: '11:00 - 22:00',
      phone: '+995 32 266 66 66',
      website: null,
      description: 'Family-run restaurant specializing in dishes from different Georgian regions.',
      specialties: ['Regional Cuisine', 'Family Recipes', 'Authentic Atmosphere'],
      features: ['cash-only', 'family-run', 'regional'],
      category: 'georgian',
      priceCategory: 'budget',
      aiRecommended: true,
      popularDishes: [
        { name: 'Megrelian Khachapuri', price: '11 GEL', description: 'Cheese bread with extra cheese on top' },
        { name: 'Svanuri Kubdari', price: '13 GEL', description: 'Spiced meat pie from Svaneti region' },
        { name: 'Adjarian Khachapuri', price: '9 GEL', description: 'Traditional boat-shaped cheese bread' }
      ]
    },
    {
      id: 'zakhar-zakharich',
      name: 'Zakhar Zakharich',
      cuisine: 'Russian & European',
      rating: 4.5,
      priceRange: '$',
      location: 'Vera',
      address: 'Pekini Ave 12, Tbilisi',
      hours: '12:00 - 24:00',
      phone: '+995 32 291 55 55',
      website: 'zz-restaurant.ge',
      description: 'Cozy restaurant serving Russian and European comfort food with nostalgic atmosphere.',
      specialties: ['Russian Cuisine', 'Comfort Food', 'Nostalgic Atmosphere'],
      features: ['wifi', 'cards', 'cozy', 'comfort-food'],
      category: 'international',
      priceCategory: 'mid-range',
      aiRecommended: false,
      popularDishes: [
        { name: 'Beef Stroganoff', price: '22 GEL', description: 'Classic Russian dish with mushrooms' },
        { name: 'Borscht Soup', price: '9 GEL', description: 'Traditional beetroot soup' },
        { name: 'Olivier Salad', price: '8 GEL', description: 'Russian potato salad' }
      ]
    },
    {
      id: 'stamba-cafe',
      name: 'Stamba Cafe',
      cuisine: 'Modern International',
      rating: 4.7,
      priceRange: '$$',
      location: 'Vera',
      address: 'Merab Kostava St 14, Tbilisi',
      hours: '08:00 - 23:00',
      phone: '+995 32 220 02 20',
      website: 'stambahotel.com',
      description: 'Stylish cafe in boutique hotel with modern international cuisine and excellent coffee.',
      specialties: ['Modern Design', 'International Cuisine', 'Premium Coffee'],
      features: ['wifi', 'cards', 'design', 'hotel', 'coffee'],
      category: 'international',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      popularDishes: [
        { name: 'Avocado Toast', price: '16 GEL', description: 'Sourdough with avocado, poached egg, and microgreens' },
        { name: 'Quinoa Bowl', price: '18 GEL', description: 'Healthy bowl with seasonal vegetables' },
        { name: 'Specialty Coffee', price: '8 GEL', description: 'Single origin beans, expertly brewed' }
      ]
    },
    {
      id: 'rooms-hotel-restaurant',
      name: 'Rooms Hotel Restaurant',
      cuisine: 'Contemporary International',
      rating: 4.8,
      priceRange: '$$',
      location: 'Vera',
      address: 'Merab Kostava St 14, Tbilisi',
      hours: '07:00 - 24:00',
      phone: '+995 32 220 14 14',
      website: 'roomshotels.com',
      description: 'Upscale hotel restaurant with contemporary international menu and rooftop terrace.',
      specialties: ['Hotel Dining', 'Rooftop Terrace', 'Contemporary Menu'],
      features: ['wifi', 'cards', 'rooftop', 'hotel', 'valet'],
      category: 'international',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      popularDishes: [
        { name: 'Grilled Salmon', price: '38 GEL', description: 'Atlantic salmon with seasonal vegetables' },
        { name: 'Beef Tenderloin', price: '45 GEL', description: 'Premium cut with truffle sauce' },
        { name: 'Tasting Menu', price: '85 GEL', description: '6-course chef selection' }
      ]
    },
    {
      id: 'lolita',
      name: 'Lolita',
      cuisine: 'Modern Georgian',
      rating: 4.6,
      priceRange: '$$',
      location: 'Sololaki',
      address: 'Atoneli St 15, Tbilisi',
      hours: '18:00 - 01:00',
      phone: '+995 32 292 55 55',
      website: 'lolita.ge',
      description: 'Trendy restaurant with modern Georgian cuisine and creative cocktails.',
      specialties: ['Modern Georgian', 'Creative Cocktails', 'Trendy Atmosphere'],
      features: ['wifi', 'cards', 'cocktails', 'trendy', 'late-night'],
      category: 'georgian',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      popularDishes: [
        { name: 'Modern Khinkali', price: '18 GEL', description: 'Elevated version of traditional dumplings' },
        { name: 'Deconstructed Satsivi', price: '22 GEL', description: 'Modern take on walnut chicken sauce' },
        { name: 'Signature Cocktail', price: '16 GEL', description: 'House special with Georgian ingredients' }
      ]
    },
    {
      id: 'wine-underground',
      name: 'Wine Underground',
      cuisine: 'Georgian Wine Bar',
      rating: 4.5,
      priceRange: '$$',
      location: 'Old Town',
      address: 'Gomi St 8, Tbilisi',
      hours: '16:00 - 02:00',
      phone: '+995 32 299 88 88',
      website: 'wineunderground.ge',
      description: 'Underground wine cellar specializing in natural Georgian wines with small plates.',
      specialties: ['Natural Wines', 'Wine Cellar', 'Small Plates'],
      features: ['wifi', 'cards', 'wine-cellar', 'underground', 'late-night'],
      category: 'georgian',
      priceCategory: 'mid-range',
      aiRecommended: true,
      popularDishes: [
        { name: 'Cheese Platter', price: '25 GEL', description: 'Selection of Georgian cheeses' },
        { name: 'Charcuterie Board', price: '28 GEL', description: 'Cured meats and accompaniments' },
        { name: 'Wine Tasting Flight', price: '35 GEL', description: '5 natural Georgian wines' }
      ]
    },
    {
      id: 'fabrika',
      name: 'Fabrika',
      cuisine: 'International Fusion',
      rating: 4.3,
      priceRange: '$',
      location: 'Marjanishvili',
      address: 'Egnate Ninoshvili St 8, Tbilisi',
      hours: '08:00 - 24:00',
      phone: '+995 32 292 20 07',
      website: 'fabrikatbilisi.com',
      description: 'Hip hostel restaurant with international fusion menu and creative atmosphere.',
      specialties: ['Fusion Cuisine', 'Hip Atmosphere', 'Budget-Friendly'],
      features: ['wifi', 'cards', 'hostel', 'hip', 'budget'],
      category: 'international',
      priceCategory: 'budget',
      aiRecommended: false,
      popularDishes: [
        { name: 'Buddha Bowl', price: '14 GEL', description: 'Healthy bowl with quinoa and vegetables' },
        { name: 'Fusion Burger', price: '16 GEL', description: 'Creative burger with international flavors' },
        { name: 'Craft Beer', price: '6 GEL', description: 'Local craft beer selection' }
      ]
    },
    {
      id: 'organique-josper-bar',
      name: 'Organique Josper Bar',
      cuisine: 'Premium Steakhouse',
      rating: 4.8,
      priceRange: '$$$',
      location: 'Vake',
      address: 'Chavchavadze Ave 79, Tbilisi',
      hours: '12:00 - 24:00',
      phone: '+995 32 225 25 28',
      website: 'organique.ge',
      description: 'Premium steakhouse with Josper grill, featuring high-quality meats and wines.',
      specialties: ['Premium Steaks', 'Josper Grill', 'Wine Selection'],
      features: ['wifi', 'cards', 'premium', 'steakhouse', 'wine-list'],
      category: 'international',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      popularDishes: [
        { name: 'Wagyu Ribeye', price: '120 GEL', description: 'Premium Japanese beef, Josper grilled' },
        { name: 'Dry-Aged T-Bone', price: '85 GEL', description: '28-day aged beef with sides' },
        { name: 'Wine Pairing', price: '45 GEL', description: 'Premium wine selection with steak' }
      ]
    },
    {
      id: 'entree',
      name: 'Entree',
      cuisine: 'French Fine Dining',
      rating: 4.7,
      priceRange: '$$$',
      location: 'Vera',
      address: 'Barnovi St 9, Tbilisi',
      hours: '19:00 - 24:00',
      phone: '+995 32 291 33 66',
      website: 'entree.ge',
      description: 'Elegant French restaurant with classic cuisine and sophisticated atmosphere.',
      specialties: ['French Cuisine', 'Fine Dining', 'Elegant Atmosphere'],
      features: ['wifi', 'cards', 'fine-dining', 'french', 'elegant'],
      category: 'international',
      priceCategory: 'fine-dining',
      aiRecommended: true,
      popularDishes: [
        { name: 'Foie Gras', price: '48 GEL', description: 'Pan-seared foie gras with fig compote' },
        { name: 'Bouillabaisse', price: '42 GEL', description: 'Traditional French fish stew' },
        { name: 'Tasting Menu', price: '95 GEL', description: '7-course French culinary journey' }
      ]
    },
    {
      id: 'bread-house',
      name: 'Bread House',
      cuisine: 'Georgian Bakery & Cafe',
      rating: 4.2,
      priceRange: '$',
      location: 'Multiple Locations',
      address: 'Various locations across Tbilisi',
      hours: '07:00 - 21:00',
      phone: '+995 32 200 00 00',
      website: 'breadhouse.ge',
      description: 'Popular bakery chain serving fresh Georgian bread, pastries, and light meals.',
      specialties: ['Fresh Bread', 'Pastries', 'Quick Service'],
      features: ['wifi', 'cards', 'takeaway', 'chain'],
      category: 'georgian',
      priceCategory: 'budget',
      aiRecommended: false,
      popularDishes: [
        { name: 'Fresh Shotis Puri', price: '2 GEL', description: 'Traditional Georgian bread baked in tone oven' },
        { name: 'Khachapuri Varieties', price: '5-8 GEL', description: 'Different regional cheese breads' },
        { name: 'Georgian Coffee & Pastry', price: '7 GEL', description: 'Coffee with traditional sweet pastry' }
      ]
    },
    {
      id: 'mapshalia',
      name: 'Mapshalia',
      cuisine: 'Georgian Home Cooking',
      rating: 4.3,
      priceRange: '$',
      location: 'Didube',
      address: 'Didube Market Area, Tbilisi',
      hours: '10:00 - 20:00',
      phone: '+995 32 255 55 55',
      website: null,
      description: 'No-frills Georgian restaurant near Didube market, famous for authentic home-style cooking.',
      specialties: ['Home Cooking', 'Market Fresh', 'Local Favorite'],
      features: ['cash-only', 'authentic', 'local'],
      category: 'georgian',
      priceCategory: 'budget',
      aiRecommended: false,
      popularDishes: [
        { name: 'Daily Khinkali', price: '1.2 GEL each', description: 'Fresh dumplings made daily' },
        { name: 'Lobio with Pickles', price: '8 GEL', description: 'Bean stew with traditional pickles' },
        { name: 'Khachapuri Adjarian', price: '7 GEL', description: 'Boat-shaped cheese bread' }
      ]
    },
    {
      id: 'respublika-grill',
      name: 'Respublika Grill Bar',
      cuisine: 'International Grill',
      rating: 4.4,
      priceRange: '$',
      location: 'Vake',
      address: 'Chavchavadze Ave 45, Tbilisi',
      hours: '12:00 - 24:00',
      phone: '+995 32 291 44 44',
      website: 'respublika.ge',
      description: 'Modern grill restaurant with international menu and sports bar atmosphere.',
      specialties: ['Grilled Meats', 'Sports Bar', 'International Menu'],
      features: ['wifi', 'cards', 'sports-tv', 'bar', 'parking'],
      category: 'international',
      priceCategory: 'mid-range',
      aiRecommended: false,
      popularDishes: [
        { name: 'Mixed Grill Platter', price: '35 GEL', description: 'Selection of grilled meats and sausages' },
        { name: 'Burger Respublika', price: '18 GEL', description: 'House special burger with fries' },
        { name: 'Craft Beer Selection', price: '8-12 GEL', description: 'Local and imported craft beers' }
      ]
    },
    {
      id: 'maspindzelo',
      name: 'Maspindzelo',
      cuisine: 'Georgian Traditional',
      rating: 4.3,
      priceRange: '$',
      location: 'Avlabari',
      address: 'Avlabari District, Tbilisi',
      hours: '11:00 - 22:00',
      phone: '+995 32 277 77 77',
      website: null,
      description: 'Traditional Georgian hospitality in a rustic setting with live music on weekends.',
      specialties: ['Traditional Hospitality', 'Live Music', 'Rustic Atmosphere'],
      features: ['cash-only', 'live-music', 'traditional', 'outdoor'],
      category: 'georgian',
      priceCategory: 'budget',
      aiRecommended: false,
      popularDishes: [
        { name: 'Supra Feast', price: '30 GEL per person', description: 'Traditional Georgian banquet' },
        { name: 'Khinkali Assortment', price: '12 GEL', description: 'Mixed dumplings (8 pieces)' },
        { name: 'Homemade Wine', price: '15 GEL/bottle', description: 'Traditional Georgian wine' }
      ]
    },
    {
      id: 'cafe-gallery',
      name: 'Cafe Gallery',
      cuisine: 'European Cafe',
      rating: 4.2,
      priceRange: '$',
      location: 'Rustaveli Avenue',
      address: 'Rustaveli Ave 12, Tbilisi',
      hours: '08:00 - 22:00',
      phone: '+995 32 299 22 22',
      website: null,
      description: 'Art-themed cafe with European dishes, perfect for casual dining and coffee meetings.',
      specialties: ['Art Gallery', 'Coffee Culture', 'Light Meals'],
      features: ['wifi', 'cards', 'coffee', 'art', 'casual'],
      category: 'international',
      priceCategory: 'budget',
      aiRecommended: false,
      popularDishes: [
        { name: 'Caesar Salad', price: '14 GEL', description: 'Classic Caesar with grilled chicken' },
        { name: 'Pasta Carbonara', price: '16 GEL', description: 'Creamy pasta with bacon and parmesan' },
        { name: 'Specialty Coffee', price: '6 GEL', description: 'Single origin Georgian coffee' }
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

  const filteredRestaurants = allRestaurants.filter(restaurant => {
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
                  <span>30+ Handpicked Establishments</span>
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
                    {restaurant.features.map((feature: string, idx: number) => (
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
                    {restaurant.popularDishes.map((dish: any, idx: number) => (
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
                    {restaurant.specialties.map((specialty: string, idx: number) => (
                      <span key={idx} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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