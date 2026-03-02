'use client'

import { useState } from 'react'
import { ShoppingBag, MapPin, Clock, Phone, Star, DollarSign, Wifi, CreditCard, Car, Globe, ExternalLink, Filter, Search, Book, Music, Laptop, ShoppingCart, Coffee, Utensils, Package, Store, TrendingUp, Award, CheckCircle } from 'lucide-react'

export default function ShoppingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All Stores', icon: ShoppingBag, count: 68 },
    { id: 'supermarkets', name: 'Supermarkets', icon: ShoppingCart, count: 20 },
    { id: 'tech', name: 'Technology', icon: Laptop, count: 8 },
    { id: 'books', name: 'Books & Stationery', icon: Book, count: 6 },
    { id: 'music', name: 'Music & Instruments', icon: Music, count: 5 },
    { id: 'specialty', name: 'Specialty Food', icon: Coffee, count: 8 },
    { id: 'markets', name: 'Markets', icon: Store, count: 6 },
    { id: 'health-fitness', name: 'Health & Fitness', icon: Award, count: 15 }
  ]

  const stores = [
    // Supermarkets
    {
      id: 'carrefour',
      name: 'Carrefour',
      category: 'supermarkets',
      type: 'International Supermarket Chain',
      rating: 4.5,
      priceRange: '₾₾',
      locations: ['Saburtalo', 'Vake', 'Isani', 'Multiple locations'],
      address: 'Main: 1 Pekini Ave (Saburtalo), Also: Chavchavadze Ave (Vake), Kakheti Highway (Isani)',
      hours: '09:00 - 23:00',
      phone: '+995 32 2 60 60 60',
      website: 'carrefour.ge',
      description: 'Large international supermarket chain with wide selection of local and imported products.',
      features: ['wifi', 'cards', 'parking', 'delivery', 'online-shopping'],
      specialties: ['International products', 'Fresh produce', 'Bakery', 'Deli counter'],
      deliveryApps: ['Glovo', 'Wolt'],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Loyalty card offers good discounts',
        'Best selection of international products',
        'Fresh bakery section every morning',
        'Online ordering available'
      ]
    },
    {
      id: 'goodwill',
      name: 'Goodwill',
      category: 'supermarkets',
      type: 'Local Supermarket Chain',
      rating: 4.3,
      priceRange: '₾',
      locations: ['Multiple locations'],
      address: 'Various locations across Tbilisi',
      hours: '08:00 - 23:00',
      phone: '+995 32 2 55 55 55',
      website: 'goodwill.ge',
      description: 'Popular local supermarket chain with competitive prices and good selection.',
      features: ['cards', 'parking', 'delivery'],
      specialties: ['Local products', 'Competitive prices', 'Fresh meat', 'Georgian wine'],
      deliveryApps: ['Glovo'],
      parkingAvailable: true,
      englishSpeaking: false,
      tips: [
        'Better prices than international chains',
        'Excellent Georgian wine selection',
        'Fresh meat counter',
        'Loyalty program available'
      ]
    },
    {
      id: 'spar',
      name: 'Spar',
      category: 'supermarkets',
      type: 'International Supermarket',
      rating: 4.4,
      priceRange: '₾₾',
      locations: ['City Center', 'Vake', 'Saburtalo'],
      address: 'Main: Rustaveli Ave 12 (City Center), Also: Chavchavadze Ave (Vake), Pekini Ave (Saburtalo)',
      hours: '08:00 - 23:00',
      phone: '+995 32 2 70 70 70',
      website: 'spar.ge',
      description: 'European supermarket chain with quality products and good service.',
      features: ['wifi', 'cards', 'parking', 'delivery'],
      specialties: ['European products', 'Organic section', 'Fresh produce', 'Ready meals'],
      deliveryApps: ['Glovo', 'Wolt'],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Good organic section',
        'Quality European imports',
        'Clean and well-organized',
        'Ready-to-eat meals available'
      ]
    },
    {
      id: 'fresco',
      name: 'Fresco',
      category: 'supermarkets',
      type: 'Local Supermarket Chain',
      rating: 4.2,
      priceRange: '₾',
      locations: ['Multiple locations'],
      address: 'Various locations across Tbilisi',
      hours: '08:00 - 23:00',
      phone: '+995 32 2 65 65 65',
      website: 'fresco.ge',
      description: 'Popular local chain with good prices and convenient locations throughout the city.',
      features: ['cards', 'parking', 'delivery'],
      specialties: ['Local products', 'Budget-friendly', 'Fresh bakery', 'Georgian cheese'],
      deliveryApps: ['Glovo', 'Wolt'],
      parkingAvailable: true,
      englishSpeaking: false,
      tips: [
        'Very competitive prices',
        'Fresh bread baked daily',
        'Good selection of Georgian products',
        'Convenient neighborhood locations'
      ]
    },
    {
      id: 'agrohub-market',
      name: 'AgroHub Market',
      category: 'supermarkets',
      type: 'Premium Organic Supermarket',
      rating: 4.6,
      priceRange: '₾₾₾',
      locations: ['Vake', 'Saburtalo'],
      address: '79 Chavchavadze Ave, Tbilisi',
      hours: '09:00 - 22:00',
      phone: '+995 32 2 25 25 25',
      website: 'agrohub.ge',
      description: 'Premium supermarket focusing on organic, locally-sourced, and artisan products.',
      features: ['wifi', 'cards', 'parking', 'delivery', 'organic'],
      specialties: ['Organic produce', 'Farm-to-table', 'Artisan products', 'Natural cosmetics', 'Eco-friendly'],
      deliveryApps: ['Glovo'],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Best organic selection in Tbilisi',
        'Support local Georgian farmers',
        'Premium quality but higher prices',
        'Great for health-conscious shoppers'
      ]
    },
    {
      id: 'magniti',
      name: 'Magniti',
      category: 'supermarkets',
      type: 'Discount Supermarket',
      rating: 4.0,
      priceRange: '₾',
      locations: ['Multiple locations'],
      address: 'Main: 23 Pekini Ave (Saburtalo), Also: Chavchavadze Ave (Vake), Kakheti Highway (Isani)',
      hours: '08:00 - 22:00',
      phone: '+995 32 2 75 75 75',
      website: 'magniti.ge',
      description: 'Budget-friendly supermarket chain with basic groceries at low prices.',
      features: ['cards', 'parking'],
      specialties: ['Low prices', 'Basic groceries', 'Bulk buying', 'No-frills shopping'],
      deliveryApps: [],
      parkingAvailable: true,
      englishSpeaking: false,
      tips: [
        'Lowest prices in Tbilisi',
        'Basic selection but good value',
        'Great for budget shopping',
        'Limited imported products'
      ]
    },
    {
      id: 'smart',
      name: 'Smart Supermarket',
      category: 'supermarkets',
      type: 'Modern Supermarket Chain',
      rating: 4.3,
      priceRange: '₾₾',
      locations: ['Saburtalo', 'Isani', 'Gldani'],
      address: 'Main: 89 Vazha-Pshavela Ave (Saburtalo), Also: Kakheti Highway (Isani), Gldani District',
      hours: '08:00 - 23:00',
      phone: '+995 32 2 80 80 80',
      website: 'smart.ge',
      description: 'Modern supermarket with good balance of price and quality, popular with locals.',
      features: ['wifi', 'cards', 'parking', 'delivery'],
      specialties: ['Fresh produce', 'Meat counter', 'Bakery', 'Georgian wine', 'Household items'],
      deliveryApps: ['Glovo'],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Good middle-ground option',
        'Fresh meat and fish counters',
        'Loyalty program with discounts',
        'Clean and modern stores'
      ]
    },
    {
      id: 'europroduct',
      name: 'EuroProduct',
      category: 'supermarkets',
      type: 'European Goods Specialist',
      rating: 4.5,
      priceRange: '₾₾₾',
      locations: ['Vake', 'Old Town'],
      address: 'Chavchavadze Ave, Tbilisi',
      hours: '09:00 - 22:00',
      phone: '+995 32 2 22 44 66',
      website: 'europroduct.ge',
      description: 'Specialty supermarket with extensive selection of European and international products.',
      features: ['wifi', 'cards', 'parking', 'delivery'],
      specialties: ['European imports', 'International brands', 'Specialty foods', 'Gourmet products', 'Deli'],
      deliveryApps: ['Glovo', 'Wolt'],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Best for European products',
        'Hard-to-find international brands',
        'Premium pricing but worth it',
        'Great deli and cheese selection'
      ]
    },
    {
      id: 'nikora',
      name: 'Nikora',
      category: 'supermarkets',
      type: 'Convenience Store Chain',
      rating: 4.1,
      priceRange: '₾₾',
      locations: ['Everywhere'],
      address: 'Main: 56 Chavchavadze Ave (Vake), 34 Pekini Ave (Saburtalo), Rustaveli Ave (Center)',
      hours: '24/7',
      phone: '+995 32 2 55 66 77',
      website: 'nikora.ge',
      description: 'Ubiquitous convenience store chain, perfect for quick shopping and late-night needs.',
      features: ['cards', '24-7', 'delivery'],
      specialties: ['Convenience', '24/7 availability', 'Quick shopping', 'Snacks', 'Drinks'],
      deliveryApps: ['Glovo', 'Wolt', 'Bolt Food'],
      parkingAvailable: false,
      englishSpeaking: false,
      tips: [
        'Open 24/7 - perfect for emergencies',
        'Locations everywhere in Tbilisi',
        'Slightly higher prices for convenience',
        'Great for quick shopping trips'
      ]
    },
    {
      id: 'libre',
      name: 'Libre',
      category: 'supermarkets',
      type: 'Hypermarket',
      rating: 4.4,
      priceRange: '₾₾',
      locations: ['Saburtalo', 'Isani'],
      address: 'Pekini Ave, Tbilisi',
      hours: '09:00 - 23:00',
      phone: '+995 32 2 40 50 60',
      website: 'libre.ge',
      description: 'Large hypermarket with extensive selection including groceries, electronics, and household goods.',
      features: ['wifi', 'cards', 'parking', 'delivery', 'electronics'],
      specialties: ['Wide selection', 'Electronics', 'Clothing', 'Home goods', 'Groceries'],
      deliveryApps: ['Glovo'],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'One-stop shopping for everything',
        'Large parking area',
        'Good for bulk buying',
        'Electronics and appliances section'
      ]
    },
    // Technology Stores
    {
      id: 'alta',
      name: 'Alta',
      category: 'tech',
      type: 'Electronics & Technology',
      rating: 4.6,
      priceRange: '₾₾₾',
      locations: ['Saburtalo', 'Vake'],
      address: '1 Pekini Ave, Tbilisi',
      hours: '10:00 - 21:00',
      phone: '+995 32 2 40 40 40',
      website: 'alta.ge',
      description: 'Leading electronics retailer with latest gadgets, computers, and home appliances.',
      features: ['wifi', 'cards', 'parking', 'warranty', 'installation'],
      specialties: ['Apple products', 'Laptops', 'Smartphones', 'Home appliances', 'Gaming'],
      deliveryApps: [],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Official Apple reseller',
        'Good warranty and service',
        'Price match available',
        'Installation services offered'
      ]
    },
    {
      id: 'technodom',
      name: 'Technodom',
      category: 'tech',
      type: 'Electronics Megastore',
      rating: 4.4,
      priceRange: '₾₾',
      locations: ['East Point', 'Tbilisi Mall'],
      address: 'East Point Shopping Center',
      hours: '10:00 - 22:00',
      phone: '+995 32 2 45 45 45',
      website: 'technodom.ge',
      description: 'Large electronics store with competitive prices and wide selection.',
      features: ['cards', 'parking', 'warranty', 'financing'],
      specialties: ['Computers', 'TVs', 'Audio equipment', 'Smart home', 'Accessories'],
      deliveryApps: [],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Competitive pricing',
        'Financing options available',
        'Large selection of brands',
        'Regular sales and promotions'
      ]
    },
    // Books & Stationery
    {
      id: 'prosperos-books',
      name: 'Prospero\'s Books',
      category: 'books',
      type: 'English Bookstore & Café',
      rating: 4.8,
      priceRange: '₾₾',
      locations: ['Old Town'],
      address: '34 Rustaveli Ave, Tbilisi',
      hours: '10:00 - 20:00',
      phone: '+995 32 2 98 38 02',
      website: 'prospero.ge',
      description: 'Beloved English bookstore with café, offering new and used books, cultural events.',
      features: ['wifi', 'cards', 'cafe', 'events'],
      specialties: ['English books', 'Used books', 'Literary events', 'Cozy café', 'Book club'],
      deliveryApps: [],
      parkingAvailable: false,
      englishSpeaking: true,
      tips: [
        'Best English bookstore in Tbilisi',
        'Regular author readings and events',
        'Great café for reading',
        'Book exchange program available'
      ]
    },
    {
      id: 'biblus',
      name: 'Biblus',
      category: 'books',
      type: 'Bookstore Chain',
      rating: 4.5,
      priceRange: '₾₾',
      locations: ['Multiple locations'],
      address: 'Main: Tbilisi Mall (Saburtalo), Also: East Point Mall, Galleria Tbilisi (Vake)',
      hours: '10:00 - 22:00',
      phone: '+995 32 2 50 50 50',
      website: 'biblus.ge',
      description: 'Modern bookstore chain with Georgian and some English books, stationery.',
      features: ['cards', 'parking', 'online-shopping'],
      specialties: ['Georgian books', 'Stationery', 'Gifts', 'Children\'s books', 'Textbooks'],
      deliveryApps: [],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Good stationery selection',
        'Children\'s section',
        'Online ordering available',
        'Located in major malls'
      ]
    },
    // Music Stores
    {
      id: 'music-gallery',
      name: 'Music Gallery',
      category: 'music',
      type: 'Musical Instruments & Equipment',
      rating: 4.6,
      priceRange: '₾₾₾',
      locations: ['Saburtalo'],
      address: '12 Vazha-Pshavela Ave, Tbilisi',
      hours: '11:00 - 20:00',
      phone: '+995 32 2 22 33 44',
      website: 'musicgallery.ge',
      description: 'Professional music store with instruments, equipment, and repair services.',
      features: ['cards', 'repair', 'lessons', 'rental'],
      specialties: ['Guitars', 'Keyboards', 'Drums', 'Audio equipment', 'Accessories'],
      deliveryApps: [],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Professional staff',
        'Instrument repair services',
        'Music lessons available',
        'Rental options for instruments'
      ]
    },
    {
      id: 'vinyl-records',
      name: 'Vinyl Records Tbilisi',
      category: 'music',
      type: 'Record Store',
      rating: 4.7,
      priceRange: '₾₾',
      locations: ['Vera'],
      address: '8 Barnovi St, Tbilisi',
      hours: '12:00 - 21:00',
      phone: '+995 555 12 34 56',
      website: '',
      description: 'Vintage and new vinyl records, turntables, and music memorabilia.',
      features: ['cards', 'rare-finds'],
      specialties: ['Vinyl records', 'Turntables', 'Georgian music', 'Jazz', 'Rock'],
      deliveryApps: [],
      parkingAvailable: false,
      englishSpeaking: true,
      tips: [
        'Great selection of Georgian music',
        'Rare vinyl finds',
        'Knowledgeable staff',
        'Regular new arrivals'
      ]
    },
    // Specialty Food
    {
      id: 'agrohub',
      name: 'AgroHub',
      category: 'specialty',
      type: 'Organic & Local Products',
      rating: 4.7,
      priceRange: '₾₾₾',
      locations: ['Vake'],
      address: '79 Chavchavadze Ave, Tbilisi',
      hours: '09:00 - 21:00',
      phone: '+995 32 2 25 25 25',
      website: 'agrohub.ge',
      description: 'Premium organic and locally-sourced Georgian products, farm-to-table concept.',
      features: ['cards', 'parking', 'delivery', 'organic'],
      specialties: ['Organic produce', 'Local cheese', 'Honey', 'Wine', 'Artisan products'],
      deliveryApps: ['Glovo'],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Best organic selection in Tbilisi',
        'Support local farmers',
        'Premium quality products',
        'Great gift options'
      ]
    },
    {
      id: 'wine-house',
      name: 'Wine House',
      category: 'specialty',
      type: 'Wine & Spirits',
      rating: 4.8,
      priceRange: '₾₾₾',
      locations: ['Old Town', 'Vake'],
      address: '45 Rustaveli Ave, Tbilisi',
      hours: '10:00 - 22:00',
      phone: '+995 32 2 99 88 77',
      website: 'winehouse.ge',
      description: 'Extensive selection of Georgian and international wines, expert staff.',
      features: ['cards', 'tastings', 'delivery', 'expert-advice'],
      specialties: ['Georgian wine', 'Chacha', 'International wines', 'Rare vintages', 'Gifts'],
      deliveryApps: [],
      parkingAvailable: false,
      englishSpeaking: true,
      tips: [
        'Wine tasting events',
        'Expert recommendations',
        'Rare Georgian wines',
        'Gift packaging available'
      ]
    },
    // Markets
    {
      id: 'deserters-bazaar',
      name: 'Deserters\' Bazaar',
      category: 'markets',
      type: 'Traditional Market',
      rating: 4.4,
      priceRange: '₾',
      locations: ['Didube'],
      address: 'Didube Market, near Didube Metro Station, Tbilisi',
      hours: '08:00 - 18:00',
      phone: '',
      website: '',
      description: 'Large traditional market with fresh produce, meat, spices, and household goods.',
      features: ['cash-only', 'bargaining'],
      specialties: ['Fresh produce', 'Meat', 'Spices', 'Cheese', 'Dried fruits', 'Nuts'],
      deliveryApps: [],
      parkingAvailable: true,
      englishSpeaking: false,
      tips: [
        'Best prices in Tbilisi',
        'Bargaining expected',
        'Go early for best selection',
        'Bring cash only'
      ]
    },
    {
      id: 'dry-bridge',
      name: 'Dry Bridge Market',
      category: 'markets',
      type: 'Flea Market',
      rating: 4.5,
      priceRange: '₾',
      locations: ['Old Town'],
      address: 'Dry Bridge Flea Market, near Baratashvili Bridge, Old Tbilisi',
      hours: '10:00 - 18:00 (weekends)',
      phone: '',
      website: '',
      description: 'Famous weekend flea market with antiques, Soviet memorabilia, art, and crafts.',
      features: ['cash-only', 'bargaining', 'unique-finds'],
      specialties: ['Antiques', 'Soviet items', 'Art', 'Jewelry', 'Books', 'Collectibles'],
      deliveryApps: [],
      parkingAvailable: false,
      englishSpeaking: false,
      tips: [
        'Weekends only',
        'Great for souvenirs',
        'Bargaining essential',
        'Unique vintage finds'
      ]
    },
    // Health & Fitness Stores
    {
      id: 'decathlon',
      name: 'Decathlon',
      category: 'health-fitness',
      type: 'Sports Equipment & Apparel',
      rating: 4.7,
      priceRange: '₾₾',
      locations: ['East Point Mall'],
      address: 'East Point Shopping Center, Tbilisi',
      hours: '10:00 - 22:00',
      phone: '+995 32 2 11 22 33',
      website: 'decathlon.ge',
      description: 'International sports retailer with comprehensive selection of sporting goods, fitness equipment, and athletic apparel for all sports.',
      features: ['wifi', 'cards', 'parking', 'warranty', 'fitting-rooms'],
      specialties: ['Running shoes', 'Gym equipment', 'Cycling gear', 'Swimming', 'Hiking gear', 'Team sports', 'Fitness apparel'],
      deliveryApps: [],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Best value for sports equipment in Tbilisi',
        'Wide range of sizes and sports',
        'Try before you buy - fitting rooms available',
        'Frequent sales and promotions',
        'Expert staff for technical advice'
      ]
    },
    {
      id: 'intersport',
      name: 'Intersport',
      category: 'health-fitness',
      type: 'Premium Sports Store',
      rating: 4.6,
      priceRange: '₾₾₾',
      locations: ['Tbilisi Mall', 'Galleria'],
      address: 'Tbilisi Mall, Saburtalo',
      hours: '10:00 - 22:00',
      phone: '+995 32 2 33 44 55',
      website: 'intersport.ge',
      description: 'Premium sports retailer featuring top international brands for serious athletes and fitness enthusiasts.',
      features: ['wifi', 'cards', 'parking', 'warranty', 'expert-advice'],
      specialties: ['Nike', 'Adidas', 'Puma', 'Under Armour', 'Running', 'Training', 'Premium brands'],
      deliveryApps: [],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Premium brands and latest models',
        'Professional fitting service',
        'Loyalty program with rewards',
        'Seasonal clearance sales up to 50% off'
      ]
    },
    {
      id: 'sport-master',
      name: 'Sport Master',
      category: 'health-fitness',
      type: 'Sports Equipment Chain',
      rating: 4.4,
      priceRange: '₾₾',
      locations: ['Multiple locations'],
      address: 'Main: 78 Chavchavadze Ave (Vake), Also: 45 Vazha-Pshavela Ave (Saburtalo)',
      hours: '10:00 - 21:00',
      phone: '+995 32 2 44 55 66',
      website: 'sportmaster.ge',
      description: 'Popular sports chain with good selection of equipment and apparel at competitive prices.',
      features: ['cards', 'parking', 'warranty'],
      specialties: ['Fitness equipment', 'Sportswear', 'Shoes', 'Accessories', 'Team sports', 'Outdoor gear'],
      deliveryApps: [],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Good mid-range option',
        'Regular promotions',
        'Decent selection of local and international brands',
        'Multiple locations for convenience'
      ]
    },
    {
      id: 'nike-store',
      name: 'Nike Store',
      category: 'health-fitness',
      type: 'Brand Flagship Store',
      rating: 4.8,
      priceRange: '₾₾₾₾',
      locations: ['Tbilisi Mall'],
      address: 'Tbilisi Mall, Saburtalo',
      hours: '10:00 - 22:00',
      phone: '+995 32 2 55 66 77',
      website: 'nike.com',
      description: 'Official Nike flagship store with latest collections, exclusive releases, and full range of athletic footwear and apparel.',
      features: ['wifi', 'cards', 'parking', 'fitting-rooms', 'expert-advice'],
      specialties: ['Running shoes', 'Training gear', 'Basketball', 'Football', 'Lifestyle', 'Latest releases'],
      deliveryApps: [],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Latest Nike releases and exclusives',
        'Professional fitting service',
        'Nike membership benefits',
        'Premium pricing but authentic products'
      ]
    },
    {
      id: 'adidas-store',
      name: 'Adidas Store',
      category: 'health-fitness',
      type: 'Brand Flagship Store',
      rating: 4.7,
      priceRange: '₾₾₾₾',
      locations: ['Galleria Tbilisi'],
      address: 'Galleria Tbilisi, Vake',
      hours: '10:00 - 22:00',
      phone: '+995 32 2 66 77 88',
      website: 'adidas.com',
      description: 'Official Adidas store featuring complete range of performance and lifestyle products.',
      features: ['wifi', 'cards', 'parking', 'fitting-rooms', 'expert-advice'],
      specialties: ['Running', 'Training', 'Football', 'Originals', 'Sportswear', 'Sneakers'],
      deliveryApps: [],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Full Adidas collection',
        'Exclusive colorways',
        'Adidas app discounts',
        'Professional staff'
      ]
    },
    {
      id: 'gym-shark-tbilisi',
      name: 'Fitness Apparel Tbilisi',
      category: 'health-fitness',
      type: 'Fitness Clothing Specialist',
      rating: 4.5,
      priceRange: '₾₾₾',
      locations: ['Saburtalo'],
      address: '45 Vazha-Pshavela Ave, Tbilisi',
      hours: '10:00 - 20:00',
      phone: '+995 555 11 22 33',
      website: 'fitnessapparel.ge',
      description: 'Specialized fitness clothing store with performance wear, gym apparel, and activewear for serious athletes.',
      features: ['cards', 'fitting-rooms', 'online-shopping'],
      specialties: ['Gym wear', 'Leggings', 'Sports bras', 'Compression wear', 'Workout tops', 'Athleisure'],
      deliveryApps: ['Glovo'],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Quality fitness-specific clothing',
        'Great for bodybuilding and CrossFit',
        'Online ordering available',
        'Frequent new arrivals'
      ]
    },
    {
      id: 'supplement-store',
      name: 'Supplement Store Georgia',
      category: 'health-fitness',
      type: 'Sports Nutrition & Supplements',
      rating: 4.6,
      priceRange: '₾₾₾',
      locations: ['Saburtalo', 'Vake'],
      address: '12 Pekini Ave, Tbilisi',
      hours: '10:00 - 21:00',
      phone: '+995 32 2 77 88 99',
      website: 'supplementstore.ge',
      description: 'Comprehensive sports nutrition store with protein, vitamins, supplements, and performance enhancers.',
      features: ['cards', 'delivery', 'expert-advice', 'online-shopping'],
      specialties: ['Protein powder', 'Pre-workout', 'Vitamins', 'Creatine', 'BCAAs', 'Fat burners', 'Mass gainers'],
      deliveryApps: ['Glovo'],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Authentic imported supplements',
        'Expert nutrition advice',
        'Loyalty program with discounts',
        'Online ordering with delivery',
        'Regular promotions on popular brands'
      ]
    },
    {
      id: 'myprotein-georgia',
      name: 'MyProtein Georgia',
      category: 'health-fitness',
      type: 'Protein & Nutrition Specialist',
      rating: 4.7,
      priceRange: '₾₾',
      locations: ['Online + Pickup Points'],
      address: 'Pickup: Tbilisi Mall, East Point, Galleria, Vake Plaza - Order online at techstore.ge',
      hours: 'Online 24/7',
      phone: '+995 555 22 33 44',
      website: 'myprotein.ge',
      description: 'Official MyProtein distributor offering affordable protein powders, supplements, and healthy snacks.',
      features: ['online-shopping', 'delivery', 'pickup-points'],
      specialties: ['Whey protein', 'Vegan protein', 'Snacks', 'Vitamins', 'Amino acids', 'Budget-friendly'],
      deliveryApps: [],
      parkingAvailable: false,
      englishSpeaking: true,
      tips: [
        'Best value for protein powder',
        'Frequent discount codes',
        'Wide flavor selection',
        'Convenient pickup points',
        'Subscribe and save options'
      ]
    },
    {
      id: 'gnc-tbilisi',
      name: 'GNC Live Well',
      category: 'health-fitness',
      type: 'Health & Wellness Store',
      rating: 4.5,
      priceRange: '₾₾₾',
      locations: ['Tbilisi Mall'],
      address: 'Tbilisi Mall, Saburtalo',
      hours: '10:00 - 22:00',
      phone: '+995 32 2 88 99 00',
      website: 'gnc.ge',
      description: 'International health and wellness retailer with vitamins, supplements, and nutrition products.',
      features: ['wifi', 'cards', 'parking', 'expert-advice'],
      specialties: ['Vitamins', 'Minerals', 'Herbal supplements', 'Sports nutrition', 'Weight management', 'Wellness'],
      deliveryApps: [],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Trusted international brand',
        'GNC Gold Card membership benefits',
        'Professional health consultations',
        'Quality guaranteed products'
      ]
    },
    {
      id: 'vitamin-center',
      name: 'Vitamin Center',
      category: 'health-fitness',
      type: 'Vitamins & Supplements',
      rating: 4.4,
      priceRange: '₾₾',
      locations: ['Multiple locations'],
      address: 'Main: 12 Rustaveli Ave (Center), Also: Chavchavadze Ave (Vake), Pekini Ave (Saburtalo)',
      hours: '09:00 - 21:00',
      phone: '+995 32 2 99 00 11',
      website: 'vitamincenter.ge',
      description: 'Local chain specializing in vitamins, minerals, and dietary supplements at competitive prices.',
      features: ['cards', 'delivery', 'expert-advice'],
      specialties: ['Multivitamins', 'Omega-3', 'Vitamin D', 'Probiotics', 'Immune support', 'Beauty supplements'],
      deliveryApps: ['Glovo'],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Good prices on vitamins',
        'Pharmacist consultations available',
        'Local and imported brands',
        'Convenient locations'
      ]
    },
    {
      id: 'yoga-shop',
      name: 'Yoga & Wellness Shop',
      category: 'health-fitness',
      type: 'Yoga & Mindfulness Store',
      rating: 4.6,
      priceRange: '₾₾₾',
      locations: ['Vake'],
      address: '23 Chavchavadze Ave, Tbilisi',
      hours: '10:00 - 20:00',
      phone: '+995 555 33 44 55',
      website: 'yogashop.ge',
      description: 'Specialized yoga and wellness store with mats, props, clothing, and mindfulness products.',
      features: ['cards', 'online-shopping', 'classes'],
      specialties: ['Yoga mats', 'Blocks', 'Straps', 'Yoga clothing', 'Meditation cushions', 'Essential oils'],
      deliveryApps: [],
      parkingAvailable: false,
      englishSpeaking: true,
      tips: [
        'Quality yoga equipment',
        'Yoga classes available',
        'Eco-friendly products',
        'Expert advice on equipment'
      ]
    },
    {
      id: 'outdoor-georgia',
      name: 'Outdoor Georgia',
      category: 'health-fitness',
      type: 'Outdoor & Adventure Gear',
      rating: 4.7,
      priceRange: '₾₾₾',
      locations: ['Saburtalo'],
      address: '8 Pekini Ave, Tbilisi',
      hours: '10:00 - 20:00',
      phone: '+995 32 2 00 11 22',
      website: 'outdoorgeorgia.ge',
      description: 'Outdoor adventure store with hiking, camping, climbing, and trail running equipment.',
      features: ['cards', 'parking', 'expert-advice', 'rental'],
      specialties: ['Hiking boots', 'Backpacks', 'Camping gear', 'Climbing equipment', 'Trail running', 'Technical apparel'],
      deliveryApps: [],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Essential for Georgian mountain adventures',
        'Equipment rental available',
        'Expert advice on local trails',
        'Quality international brands'
      ]
    },
    {
      id: 'boxing-shop',
      name: 'Fight Shop Tbilisi',
      category: 'health-fitness',
      type: 'Combat Sports Equipment',
      rating: 4.5,
      priceRange: '₾₾',
      locations: ['Isani'],
      address: '15 Kakheti Highway, Tbilisi',
      hours: '11:00 - 20:00',
      phone: '+995 555 44 55 66',
      website: 'fightshop.ge',
      description: 'Specialized combat sports store with boxing, MMA, and martial arts equipment.',
      features: ['cards', 'expert-advice'],
      specialties: ['Boxing gloves', 'MMA gear', 'Punching bags', 'Protective equipment', 'Training gear', 'Martial arts uniforms'],
      deliveryApps: [],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Best selection for combat sports',
        'Quality equipment for training',
        'Expert staff with fighting experience',
        'Custom glove orders available'
      ]
    },
    {
      id: 'swim-shop',
      name: 'Swim & Dive Tbilisi',
      category: 'health-fitness',
      type: 'Swimming Equipment',
      rating: 4.4,
      priceRange: '₾₾',
      locations: ['Vake'],
      address: '34 Chavchavadze Ave, Tbilisi',
      hours: '10:00 - 19:00',
      phone: '+995 555 55 66 77',
      website: 'swimshop.ge',
      description: 'Specialized swimming store with competitive swimwear, goggles, caps, and training equipment.',
      features: ['cards', 'fitting-rooms'],
      specialties: ['Swimsuits', 'Goggles', 'Swim caps', 'Training fins', 'Pull buoys', 'Kickboards'],
      deliveryApps: [],
      parkingAvailable: false,
      englishSpeaking: true,
      tips: [
        'Competitive swimming equipment',
        'Professional fitting service',
        'Quality brands like Speedo and Arena',
        'Training equipment for all levels'
      ]
    },
    {
      id: 'recovery-shop',
      name: 'Recovery & Wellness Store',
      category: 'health-fitness',
      type: 'Recovery Equipment',
      rating: 4.6,
      priceRange: '₾₾₾',
      locations: ['Saburtalo'],
      address: '56 Vazha-Pshavela Ave, Tbilisi',
      hours: '10:00 - 20:00',
      phone: '+995 555 66 77 88',
      website: 'recoverystore.ge',
      description: 'Specialized store for recovery equipment including massage guns, foam rollers, and wellness products.',
      features: ['cards', 'delivery', 'expert-advice'],
      specialties: ['Massage guns', 'Foam rollers', 'Resistance bands', 'Compression gear', 'Ice packs', 'Recovery tools'],
      deliveryApps: ['Glovo'],
      parkingAvailable: true,
      englishSpeaking: true,
      tips: [
        'Essential recovery equipment',
        'Expert advice on injury prevention',
        'Quality brands like Theragun',
        'Online ordering available'
      ]
    }
  ]

  const filteredStores = stores.filter(store => {
    const matchesCategory = selectedCategory === 'all' || store.category === selectedCategory
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.type.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case 'wifi': return <Wifi className="h-4 w-4" />
      case 'cards': return <CreditCard className="h-4 w-4" />
      case 'parking': return <Car className="h-4 w-4" />
      case 'delivery': return <Package className="h-4 w-4" />
      case 'online-shopping': return <Globe className="h-4 w-4" />
      default: return <CheckCircle className="h-4 w-4" />
    }
  }

  const getFeatureLabel = (feature: string) => {
    const labels: {[key: string]: string} = {
      'wifi': 'WiFi',
      'cards': 'Cards',
      'parking': 'Parking',
      'delivery': 'Delivery',
      'online-shopping': 'Online',
      'warranty': 'Warranty',
      'installation': 'Installation',
      'financing': 'Financing',
      'cafe': 'Café',
      'events': 'Events',
      'repair': 'Repair',
      'lessons': 'Lessons',
      'rental': 'Rental',
      'organic': 'Organic',
      'tastings': 'Tastings',
      'expert-advice': 'Expert Advice',
      'cash-only': 'Cash Only',
      'bargaining': 'Bargaining',
      'rare-finds': 'Rare Finds',
      'unique-finds': 'Unique Finds'
    }
    return labels[feature] || feature
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white py-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <ShoppingBag className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Shopping & Retail Guide
              </h1>
              <div className="flex items-center space-x-4 text-purple-200">
                <div className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  <span>Supermarkets</span>
                </div>
                <div className="flex items-center">
                  <Laptop className="h-5 w-5 mr-2" />
                  <span>Technology</span>
                </div>
                <div className="flex items-center">
                  <Book className="h-5 w-5 mr-2" />
                  <span>Books & Music</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Your complete guide to shopping in Tbilisi. From supermarkets and tech stores 
            to bookshops and specialty food markets - find everything you need.
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
                placeholder="Search stores..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : 'border-gray-200 hover:border-purple-300 text-gray-700'
                }`}
              >
                <category.icon className="h-5 w-5 mx-auto mb-1" />
                <div className="font-semibold text-xs">{category.name}</div>
                <div className="text-xs text-gray-500">({category.count})</div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{filteredStores.length}</div>
            <div className="text-sm text-gray-600">Stores Found</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {filteredStores.filter(s => s.deliveryApps.length > 0).length}
            </div>
            <div className="text-sm text-gray-600">Delivery Available</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {filteredStores.filter(s => s.englishSpeaking).length}
            </div>
            <div className="text-sm text-gray-600">English Speaking</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">
              {filteredStores.filter(s => s.parkingAvailable).length}
            </div>
            <div className="text-sm text-gray-600">Parking Available</div>
          </div>
        </div>

        {/* Store Cards */}
        <div className="space-y-6">
          {filteredStores.map((store) => (
            <div key={store.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h2 className="text-2xl font-bold text-gray-900">{store.name}</h2>
                      {store.englishSpeaking && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                          English
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-2">{store.type}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                        <span className="font-semibold">{store.rating}</span>
                      </div>
                      <span className="text-lg font-bold text-green-600">{store.priceRange}</span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {store.locations[0]}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{store.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {store.features.map((feature, idx) => (
                    <span key={idx} className="flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {getFeatureIcon(feature)}
                      <span className="ml-1">{getFeatureLabel(feature)}</span>
                    </span>
                  ))}
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {store.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Delivery Apps */}
                {store.deliveryApps.length > 0 && (
                  <div className="flex items-center mb-4">
                    <Package className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-600">
                      Delivery: {store.deliveryApps.join(', ')}
                    </span>
                  </div>
                )}

                {/* Tips */}
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h5 className="font-semibold text-blue-800 mb-2">Pro Tips:</h5>
                  <ul className="text-sm text-blue-700 space-y-1">
                    {store.tips.map((tip, idx) => (
                      <li key={idx}>• {tip}</li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm border-t border-gray-200 pt-4">
                  <div>
                    <span className="font-semibold text-gray-700">Hours:</span>
                    <p className="text-gray-600">{store.hours}</p>
                  </div>
                  {store.phone && (
                    <div>
                      <span className="font-semibold text-gray-700">Phone:</span>
                      <p className="text-gray-600">{store.phone}</p>
                    </div>
                  )}
                  {store.website && (
                    <div>
                      <span className="font-semibold text-gray-700">Website:</span>
                      <a href={`https://${store.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                        {store.website}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  )}
                  <div>
                    <span className="font-semibold text-gray-700">Parking:</span>
                    <p className={`${store.parkingAvailable ? 'text-green-600' : 'text-red-600'}`}>
                      {store.parkingAvailable ? 'Available' : 'Not Available'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStores.length === 0 && (
          <div className="text-center py-12">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No stores found</h3>
            <p className="text-gray-600">Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Shopping Tips */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shopping Tips for Expats</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <ShoppingCart className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Supermarket Shopping</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Loyalty cards offer significant discounts</li>
                <li>• Markets are cheaper than supermarkets</li>
                <li>• Fresh produce best in morning</li>
                <li>• Many stores offer delivery</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <CreditCard className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Payment & Prices</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Most stores accept cards</li>
                <li>• Markets usually cash only</li>
                <li>• Bargaining common at markets</li>
                <li>• Prices generally lower than Western Europe</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <Globe className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Language & Service</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• International chains have English speakers</li>
                <li>• Learn basic Georgian numbers</li>
                <li>• Google Translate helpful at markets</li>
                <li>• Staff generally helpful to foreigners</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Supermarket Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ShoppingCart className="h-7 w-7 text-blue-600 mr-3" />
            Supermarket Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Store</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price Level</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Selection</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Locations</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">Carrefour</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="text-orange-600">₾₾₾</span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="text-green-600 font-semibold">Excellent</span>
                  </td>
                  <td className="px-4 py-3 text-sm">5+ locations</td>
                  <td className="px-4 py-3 text-sm font-semibold text-blue-600">International products</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">Goodwill</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="text-green-600">₾₾</span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="text-blue-600">Good</span>
                  </td>
                  <td className="px-4 py-3 text-sm">20+ locations</td>
                  <td className="px-4 py-3 text-sm font-semibold text-blue-600">Local products, value</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">Spar</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="text-orange-600">₾₾₾</span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="text-blue-600">Good</span>
                  </td>
                  <td className="px-4 py-3 text-sm">10+ locations</td>
                  <td className="px-4 py-3 text-sm font-semibold text-blue-600">European products</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">Fresco</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="text-green-600 font-semibold">₾</span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="text-gray-600">Basic</span>
                  </td>
                  <td className="px-4 py-3 text-sm">50+ locations</td>
                  <td className="px-4 py-3 text-sm font-semibold text-blue-600">Budget shopping, 24/7</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">AgroHub</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="text-red-600">₾₾₾₾</span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="text-green-600 font-semibold">Premium</span>
                  </td>
                  <td className="px-4 py-3 text-sm">3 locations</td>
                  <td className="px-4 py-3 text-sm font-semibold text-blue-600">Organic, artisan</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">Smart</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="text-green-600">₾₾</span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="text-blue-600">Good</span>
                  </td>
                  <td className="px-4 py-3 text-sm">15+ locations</td>
                  <td className="px-4 py-3 text-sm font-semibold text-blue-600">Balance of price/quality</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>💡 Money-Saving Strategy:</strong> Shop at Fresco or Goodwill for basics (₾40-80/week), 
              Carrefour for international products you can't find elsewhere, and local markets for fresh produce (50% cheaper). 
              Use loyalty cards at Goodwill and Carrefour for 5-10% discounts.
            </p>
          </div>
        </div>

        {/* Price Examples */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Typical Grocery Prices (November 2025)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Package className="h-5 w-5 text-blue-600 mr-2" />
                Basics
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Bread (white loaf)</span>
                  <span className="font-semibold text-gray-900">₾1-3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Milk (1L)</span>
                  <span className="font-semibold text-gray-900">₾3-5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Eggs (10 pack)</span>
                  <span className="font-semibold text-gray-900">₾4-6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rice (1kg)</span>
                  <span className="font-semibold text-gray-900">₾3-5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pasta (500g)</span>
                  <span className="font-semibold text-gray-900">₾2-4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Butter (200g)</span>
                  <span className="font-semibold text-gray-900">₾5-8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Yogurt (500g)</span>
                  <span className="font-semibold text-gray-900">₾3-5</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Utensils className="h-5 w-5 text-green-600 mr-2" />
                Meat & Produce
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Chicken breast (1kg)</span>
                  <span className="font-semibold text-gray-900">₾10-15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Beef (1kg)</span>
                  <span className="font-semibold text-gray-900">₾25-35</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pork (1kg)</span>
                  <span className="font-semibold text-gray-900">₾15-20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tomatoes (1kg)</span>
                  <span className="font-semibold text-gray-900">₾3-6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Potatoes (1kg)</span>
                  <span className="font-semibold text-gray-900">₾1-3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Onions (1kg)</span>
                  <span className="font-semibold text-gray-900">₾1-2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Apples (1kg)</span>
                  <span className="font-semibold text-gray-900">₾3-5</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Coffee className="h-5 w-5 text-orange-600 mr-2" />
                Drinks & Extras
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Georgian wine (bottle)</span>
                  <span className="font-semibold text-gray-900">₾8-50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Local beer (500ml)</span>
                  <span className="font-semibold text-gray-900">₾2-4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Coffee beans (250g)</span>
                  <span className="font-semibold text-gray-900">₾10-20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tea (100 bags)</span>
                  <span className="font-semibold text-gray-900">₾5-10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cheese (local, 1kg)</span>
                  <span className="font-semibold text-gray-900">₾15-25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Olive oil (1L)</span>
                  <span className="font-semibold text-gray-900">₾12-20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Water (1.5L)</span>
                  <span className="font-semibold text-gray-900">₾1-2</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Weekly Shopping Budget Estimates</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-gray-900">Budget (Fresco, markets)</div>
                <div className="text-2xl font-bold text-green-600">₾40-80</div>
                <div className="text-xs text-gray-600">Basic local products</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Mid-range (Goodwill, Spar)</div>
                <div className="text-2xl font-bold text-blue-600">₾60-120</div>
                <div className="text-xs text-gray-600">Mix of local & imported</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Premium (Carrefour)</div>
                <div className="text-2xl font-bold text-purple-600">₾80-150</div>
                <div className="text-xs text-gray-600">International brands</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>💡 Money-Saving Tips:</strong> Shop at markets for produce (50% cheaper), buy local brands, 
              use loyalty cards, shop in the morning for fresh items, and compare prices between Fresco (cheapest) 
              and Carrefour (most selection). A single person can eat well for ₾200-400/month.
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p className="font-semibold">Last updated: November 11, 2025</p>
          <p className="mt-2">Store information and prices verified from store websites and recent visits.</p>
          <p className="mt-1">Found outdated information? <a href="mailto:contact@georgiaexpat.com" className="text-blue-600 hover:text-blue-700 underline">Let us know</a></p>
        </div>
      </div>
    </div>
  )
}
