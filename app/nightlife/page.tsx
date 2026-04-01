import type { Metadata } from 'next'
import { Music, Beer, Mic, PartyPopper, Moon, Shield, Clock, MapPin, DollarSign, Star, AlertCircle, CheckCircle, Users, Wine, Coffee, Utensils, Globe } from 'lucide-react'
import PageHero from '../components/PageHero'

export const metadata: Metadata = {
  title: 'Nightlife in Tbilisi - Bars, Clubs, Live Music & Entertainment',
  description: 'Complete guide to Tbilisi nightlife: best bars, clubs, live music venues, karaoke spots, late-night food, and safety tips for expats.',
  keywords: 'Tbilisi nightlife, bars Tbilisi, clubs Georgia, live music Tbilisi, karaoke Tbilisi, late night food, Tbilisi entertainment, party Tbilisi',
}

export default function NightlifePage() {
  const bars = [
    // TECHNO CLUBS
    {
      name: 'Bassiani',
      type: 'Techno Club',
      area: 'Dinamo Stadium',
      vibe: 'Underground',
      rating: 4.9,
      price: '₾₾',
      hours: 'Fri-Sun, 11 PM - 8 AM',
      entry: '₾20-40',
      highlights: ['World-class DJs', 'Incredible sound system', 'No photos policy', 'LGBTQ+ friendly'],
      crowd: 'Ravers, techno lovers, international crowd, 20-35',
      best_for: 'World-class techno experience, dancing until sunrise, experiencing Tbilisi\'s legendary underground scene',
      dress_code: 'Casual, comfortable shoes, no photos inside',
      website: 'bassiani.com',
      instagram: '@bassianiklubi'
    },
    {
      name: 'Khidi',
      type: 'Techno Club',
      area: 'Mtkvari River',
      vibe: 'Industrial',
      rating: 4.8,
      price: '₾₾',
      hours: 'Fri-Sat, 11 PM - 12 PM',
      entry: '₾15-30',
      highlights: ['Techno & minimal', 'Riverside location', 'Outdoor terrace', 'Long sets'],
      crowd: 'Serious ravers, 20-35',
      best_for: 'Marathon dancing sessions, riverside clubbing, experiencing intense techno',
      dress_code: 'Casual, comfortable shoes',
      website: 'khidi.ge',
      instagram: '@khidi_tbilisi'
    },
    {
      name: 'Mtkvarze',
      type: 'Club/Bar',
      area: 'Fabrika',
      vibe: 'Relaxed & Creative',
      rating: 4.7,
      price: '₾₾',
      hours: 'Thu-Sun, 10 PM - 6 AM',
      entry: '₾10-20',
      highlights: ['House & techno', 'Rooftop terrace', 'Great cocktails', 'Chill vibe'],
      crowd: 'Hipster, artsy, 25-40',
      best_for: 'Relaxed clubbing, rooftop dancing, social atmosphere',
      dress_code: 'Casual cool',
      instagram: '@mtkvarze'
    },
    {
      name: 'Horoom',
      type: 'Techno Club',
      area: 'Vera',
      vibe: 'Underground',
      rating: 4.6,
      price: '₾₾',
      hours: 'Fri-Sat, 11 PM - 8 AM',
      entry: '₾15-25',
      highlights: ['Techno & house', 'Intimate space', 'Local DJs', 'Good sound'],
      crowd: 'Local ravers, 20-30',
      best_for: 'Smaller intimate clubbing, local scene, serious dancing',
      dress_code: 'Casual',
      instagram: '@horoom_tbilisi'
    },
    {
      name: 'Café Gallery',
      type: 'Club/Bar',
      area: 'Old Town',
      vibe: 'Eclectic',
      rating: 4.5,
      price: '₾₾',
      hours: 'Thu-Sun, 10 PM - 5 AM',
      entry: '₾10-20',
      highlights: ['Electronic music', 'Art gallery', 'Multiple rooms', 'Diverse crowd'],
      crowd: 'Mixed, artsy, 25-40',
      best_for: 'Exploring different music rooms, art lovers, eclectic nights',
      dress_code: 'Casual',
      instagram: '@cafegallery_tbilisi'
    },

    // COCKTAIL BARS
    {
      name: 'Dive Bar',
      type: 'Cocktail Bar',
      area: 'Vera',
      vibe: 'Trendy & Intimate',
      rating: 4.8,
      price: '₾₾₾',
      hours: '6 PM - 2 AM',
      entry: 'Free',
      highlights: ['Creative cocktails', 'Cozy atmosphere', 'Jazz & soul music', 'Expert bartenders'],
      crowd: 'Expats, locals, cocktail lovers, 25-45',
      best_for: 'Romantic dates, impressing cocktail enthusiasts, intimate conversations',
      dress_code: 'Smart casual',
      instagram: '@divebartbilisi'
    },
    {
      name: 'Canudos',
      type: 'Cocktail Bar',
      area: 'Sololaki',
      vibe: 'Sophisticated',
      rating: 4.7,
      price: '₾₾₾',
      hours: '7 PM - 2 AM',
      entry: 'Free',
      highlights: ['Best cocktails in Tbilisi', 'Expert bartenders', 'Classy atmosphere', 'Small & intimate'],
      crowd: 'Upscale, 30-50',
      best_for: 'Date nights, celebrating special occasions, experiencing top-tier mixology',
      dress_code: 'Smart casual',
      instagram: '@canudos_bar'
    },
    {
      name: 'Lolita',
      type: 'Cocktail Bar',
      area: 'Vera',
      vibe: 'Chic & Modern',
      rating: 4.6,
      price: '₾₾₾',
      hours: '6 PM - 2 AM',
      entry: 'Free',
      highlights: ['Creative cocktails', 'Stylish interior', 'Good music', 'Friendly staff'],
      crowd: 'Young professionals, 25-40',
      best_for: 'After-work drinks, stylish nights out, cocktail exploration',
      dress_code: 'Smart casual',
      instagram: '@lolita_tbilisi'
    },
    {
      name: 'Stamba Bar',
      type: 'Hotel Bar',
      area: 'Vera',
      vibe: 'Upscale & Stylish',
      rating: 4.8,
      price: '₾₾₾₾',
      hours: '12 PM - 2 AM',
      entry: 'Free',
      highlights: ['Beautiful design', 'Premium cocktails', 'Great atmosphere', 'Hotel crowd'],
      crowd: 'Upscale, hotel guests, 30-50',
      best_for: 'Impressing clients, luxury experience, beautiful setting',
      dress_code: 'Smart casual to dressy',
      instagram: '@stambahotel'
    },
    {
      name: 'Rooms Hotel Bar',
      type: 'Hotel Bar',
      area: 'Vera',
      vibe: 'Upscale & Stylish',
      rating: 4.8,
      price: '₾₾₾₾',
      hours: '12 PM - 2 AM',
      entry: 'Free',
      highlights: ['Rooftop terrace', 'Premium cocktails', 'Beautiful design', 'City views'],
      crowd: 'Professionals, hotel guests, upscale crowd, 30-55',
      best_for: 'Celebrating special occasions, impressing business clients, luxury rooftop experience',
      dress_code: 'Smart casual to dressy',
      instagram: '@roomshotels'
    },

    // WINE BARS
    {
      name: '8000 Vintages',
      type: 'Wine Bar',
      area: 'Old Town',
      vibe: 'Cozy & Educational',
      rating: 4.7,
      price: '₾₾₾',
      hours: '2 PM - 12 AM',
      entry: 'Free',
      highlights: ['Georgian wines', 'Wine tastings', 'Knowledgeable staff', 'Cheese plates'],
      crowd: 'Wine enthusiasts, tourists, 30-60',
      best_for: 'Learning about Georgian wine, tastings, sophisticated evenings',
      dress_code: 'Casual to smart casual',
      instagram: '@8000vintages'
    },
    {
      name: 'Vino Underground',
      type: 'Wine Bar',
      area: 'Old Town',
      vibe: 'Traditional & Authentic',
      rating: 4.6,
      price: '₾₾',
      hours: '12 PM - 11 PM',
      entry: 'Free',
      highlights: ['Natural wines', 'Qvevri wines', 'Traditional atmosphere', 'Good prices'],
      crowd: 'Wine lovers, locals, 25-55',
      best_for: 'Authentic Georgian wine experience, natural wines, budget-friendly',
      dress_code: 'Casual',
      instagram: '@vinounderground'
    },
    {
      name: 'Vinoground',
      type: 'Wine Bar',
      area: 'Vera',
      vibe: 'Modern & Trendy',
      rating: 4.5,
      price: '₾₾',
      hours: '4 PM - 1 AM',
      entry: 'Free',
      highlights: ['Georgian wines', 'Modern vibe', 'Good food', 'Outdoor seating'],
      crowd: 'Young professionals, 25-40',
      best_for: 'Casual wine nights, outdoor drinking, modern atmosphere',
      dress_code: 'Casual',
      instagram: '@vinoground_tbilisi'
    },

    // PUBS & CASUAL BARS
    {
      name: 'Hangar Bar',
      type: 'Pub',
      area: 'Fabrika',
      vibe: 'Casual & Social',
      rating: 4.6,
      price: '₾₾',
      hours: '2 PM - 2 AM',
      entry: 'Free',
      highlights: ['Craft beer', 'Burgers', 'Sports on TV', 'Pool table'],
      crowd: 'Expats, digital nomads, 25-40',
      best_for: 'Casual drinks, meeting people, watching sports, budget-friendly',
      dress_code: 'Very casual',
      instagram: '@hangarbar_tbilisi'
    },
    {
      name: 'Dublin Pub',
      type: 'Irish Pub',
      area: 'Vake',
      vibe: 'Traditional Pub',
      rating: 4.4,
      price: '₾₾',
      hours: '12 PM - 2 AM',
      entry: 'Free',
      highlights: ['Irish beer', 'Pub food', 'Sports', 'Expat crowd'],
      crowd: 'Expats, sports fans, 30-50',
      best_for: 'Watching sports, pub atmosphere, meeting expats',
      dress_code: 'Casual',
      instagram: '@dublinpub_tbilisi'
    },
    {
      name: 'Beerhouse',
      type: 'Craft Beer Bar',
      area: 'Vera',
      vibe: 'Relaxed & Friendly',
      rating: 4.5,
      price: '₾₾',
      hours: '2 PM - 1 AM',
      entry: 'Free',
      highlights: ['Craft beers', 'Local brews', 'Good food', 'Outdoor seating'],
      crowd: 'Beer lovers, locals, 25-45',
      best_for: 'Trying Georgian craft beer, casual hangouts, beer enthusiasts',
      dress_code: 'Casual',
      instagram: '@beerhouse_ge'
    },

    // ROOFTOP & RIVER BARS
    {
      name: 'Funicular Bar',
      type: 'Rooftop Bar',
      area: 'Mtatsminda',
      vibe: 'Scenic & Touristy',
      rating: 4.5,
      price: '₾₾₾',
      hours: '11 AM - 11 PM',
      entry: 'Funicular ticket ₾2',
      highlights: ['Best city views', 'Sunset spot', 'Photo opportunity', 'Romantic'],
      crowd: 'Tourists, couples, 20-60',
      best_for: 'Sunset drinks, city views, romantic evenings, photo ops',
      dress_code: 'Casual',
      instagram: '@funicular_tbilisi'
    },
    {
      name: 'Fabrika',
      type: 'Hostel/Bar Complex',
      area: 'Marjanishvili',
      vibe: 'Social & Casual',
      rating: 4.5,
      price: '₾',
      hours: '10 AM - Late',
      entry: 'Free',
      highlights: ['Multiple bars', 'Hostel vibe', 'Social atmosphere', 'Budget-friendly'],
      crowd: 'Backpackers, digital nomads, 20-35',
      best_for: 'Meeting travelers, budget drinks, social atmosphere, making friends',
      dress_code: 'Very casual',
      website: 'fabrikatbilisi.com',
      instagram: '@fabrikatbilisi'
    }
  ]

  const liveMusic = [
    {
      name: 'Moxy',
      type: 'Live Music Venue',
      genres: ['Rock', 'Jazz', 'Alternative'],
      area: 'Vera',
      rating: 4.7,
      price: '₾₾',
      schedule: 'Thu-Sat, 9 PM onwards',
      cover: '₾10-20',
      highlights: ['Local bands', 'International acts', 'Great acoustics'],
      best_for: 'Discovering local rock bands, experiencing live alternative music, intimate concert atmosphere'
    },
    {
      name: 'Cafe-Gallery',
      type: 'Jazz Club',
      genres: ['Jazz', 'Blues', 'Soul'],
      area: 'Old Town',
      rating: 4.8,
      price: '₾₾₾',
      schedule: 'Wed-Sun, 8 PM',
      cover: '₾15-30',
      highlights: ['Intimate setting', 'Quality musicians', 'Wine selection'],
      best_for: 'Jazz enthusiasts, romantic evenings with live music, sophisticated date nights'
    },
    {
      name: 'Shardeni Street Venues',
      type: 'Multiple Venues',
      genres: ['Georgian Folk', 'Pop', 'Various'],
      area: 'Old Town',
      rating: 4.5,
      price: '₾₾',
      schedule: 'Daily, 7 PM onwards',
      cover: 'Free-₾10',
      highlights: ['Traditional music', 'Tourist-friendly', 'Multiple options'],
      best_for: 'Experiencing authentic Georgian folk music, first-time visitors, casual bar hopping'
    },
    {
      name: 'Fabrika',
      type: 'Multi-Purpose Venue',
      genres: ['Electronic', 'Indie', 'Experimental'],
      area: 'Marjanishvili',
      rating: 4.6,
      price: '₾₾',
      schedule: 'Weekends, varies',
      cover: '₾10-25',
      highlights: ['Creative space', 'Diverse acts', 'Young crowd'],
      best_for: 'Meeting digital nomads, discovering indie artists, experiencing Tbilisi\'s creative scene',
      website: 'fabrikatbilisi.com',
      instagram: '@fabrikatbilisi'
    }
  ]

  const karaoke = [
    {
      name: 'Karaoke Club',
      area: 'Saburtalo',
      rating: 4.5,
      price: '₾₾',
      rooms: 'Private rooms available',
      hours: '6 PM - 4 AM',
      features: ['English songs', 'Food & drinks', 'Modern equipment'],
      price_detail: '₾30-50/hour for private room'
    },
    {
      name: 'Sing Sing',
      area: 'Vake',
      rating: 4.4,
      price: '₾₾',
      rooms: 'Private & public',
      hours: '7 PM - 3 AM',
      features: ['Large song selection', 'Bar service', 'Group-friendly'],
      price_detail: '₾25-40/hour'
    },
    {
      name: 'KTV Lounge',
      area: 'Vera',
      rating: 4.6,
      price: '₾₾₾',
      rooms: 'Luxury private rooms',
      hours: '5 PM - 2 AM',
      features: ['Premium sound', 'Food menu', 'VIP service'],
      price_detail: '₾50-80/hour'
    }
  ]

  const lateNightFood = [
    {
      name: 'Machakhela',
      type: 'Georgian Restaurant',
      area: 'Multiple locations',
      hours: '24/7',
      rating: 4.6,
      price: '₾₾',
      specialties: ['Khachapuri', 'Khinkali', 'Mtsvadi'],
      perfect_for: 'Post-club Georgian food'
    },
    {
      name: 'McDonald\'s',
      type: 'Fast Food',
      area: 'Multiple locations',
      hours: '24/7',
      rating: 4.0,
      price: '₾',
      specialties: ['Burgers', 'Fries', 'McFlurry'],
      perfect_for: 'Quick late-night fix'
    },
    {
      name: 'Wendy\'s',
      type: 'Fast Food',
      area: 'Saburtalo, Vake',
      hours: '24/7',
      rating: 4.2,
      price: '₾',
      specialties: ['Burgers', 'Frosty', 'Chicken'],
      perfect_for: 'American fast food cravings'
    },
    {
      name: 'Shawarma Stands',
      type: 'Street Food',
      area: 'Throughout city',
      hours: 'Until 4-5 AM',
      rating: 4.3,
      price: '₾',
      specialties: ['Shawarma', 'Falafel', 'Fresh juice'],
      perfect_for: 'Cheap, quick, delicious'
    },
    {
      name: 'Luca Polare',
      type: 'Italian',
      area: 'Vake',
      hours: 'Until 2 AM',
      rating: 4.7,
      price: '₾₾₾',
      specialties: ['Pizza', 'Pasta', 'Desserts'],
      perfect_for: 'Quality late-night dining'
    }
  ]

  const safetyTips = [
    {
      category: 'General Safety',
      icon: <Shield className="h-6 w-6" />,
      tips: [
        'Tbilisi is very safe - one of the safest cities in the region',
        'Violent crime is extremely rare',
        'Keep valuables secure but don\'t be paranoid',
        'Police are helpful and many speak English',
        'Emergency number: 112',
        'Women can walk alone at night safely in most areas'
      ]
    },
    {
      category: 'Transportation',
      icon: <MapPin className="h-6 w-6" />,
      tips: [
        'Use Bolt or Yandex taxi apps - very cheap and safe',
        'Night buses run until 11 PM, then taxis only',
        'Share your ride details with friends',
        'Avoid unmarked taxis on the street',
        'Metro closes around midnight',
        'Walking is safe but stick to well-lit areas'
      ]
    },
    {
      category: 'Drinking & Clubs',
      icon: <Beer className="h-6 w-6" />,
      tips: [
        'Drinks are strong - pace yourself',
        'Watch your drink - though spiking is very rare',
        'Clubs check IDs - bring passport or copy',
        'Some clubs have dress codes',
        'Cover charges: ₾10-30 usually',
        'Smoking is allowed in most venues'
      ]
    },
    {
      category: 'Money & Scams',
      icon: <DollarSign className="h-6 w-6" />,
      tips: [
        'Scams are rare in Tbilisi',
        'Always check your bill before paying',
        'Tipping: 10% is standard',
        'ATMs are everywhere and safe',
        'Cards accepted in most places',
        'Keep some cash for smaller venues'
      ]
    }
  ]

  const nightlifeAreas = [
    {
      name: 'Old Town (Shardeni)',
      vibe: 'Tourist-friendly, traditional',
      best_for: 'First-timers, Georgian music',
      crowd: 'Mixed tourists and locals',
      price: '₾₾-₾₾₾',
      safety: 5,
      highlights: ['Traditional music', 'Wine bars', 'Outdoor seating']
    },
    {
      name: 'Vera',
      vibe: 'Upscale, sophisticated',
      best_for: 'Cocktails, wine bars',
      crowd: 'Professionals, expats',
      price: '₾₾₾-₾₾₾₾',
      safety: 5,
      highlights: ['Craft cocktails', 'Rooftop bars', 'Quality venues']
    },
    {
      name: 'Fabrika Area',
      vibe: 'Alternative, creative',
      best_for: 'Young crowd, indie scene',
      crowd: 'Digital nomads, artists',
      price: '₾₾',
      safety: 5,
      highlights: ['Creative spaces', 'Live music', 'Affordable']
    },
    {
      name: 'Mtkvari Riverside',
      vibe: 'Party, clubbing',
      best_for: 'Dancing, electronic music',
      crowd: 'Ravers, party people',
      price: '₾₾',
      safety: 4,
      highlights: ['Bassiani', 'Khidi', 'River views']
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHero
        title="Nightlife in Tbilisi"
        description="From underground techno clubs to cozy wine bars, discover Tbilisi's vibrant nightlife scene. Safe, affordable, and unforgettable."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <Beer className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">100+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Bars & Clubs</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <Music className="h-8 w-8 text-pink-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Party Scene</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Very Safe</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Low Crime</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">₾₾</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Affordable</div>
          </div>
        </div>

        {/* Nightlife Areas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Best Nightlife Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {nightlifeAreas.map((area, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{area.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{area.vibe}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Safety</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < area.safety ? 'text-green-500' : 'text-gray-300'}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <div className="text-gray-600 dark:text-gray-400">Best For</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{area.best_for}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 dark:text-gray-400">Price Range</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{area.price}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.highlights.map((highlight, i) => (
                    <span key={i} className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bars & Clubs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Beer className="h-8 w-8 text-purple-600 mr-3" />
            Best Bars & Clubs
          </h2>
          <div className="grid gap-6">
            {bars.map((bar, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{bar.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{bar.type}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{bar.area}</span>
                      <span className="text-yellow-500">★ {bar.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{bar.price}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{bar.hours}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {bar.vibe}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <strong>Crowd:</strong> {bar.crowd}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Highlights</h4>
                    <ul className="space-y-1">
                      {bar.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">Best For</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{bar.best_for}</div>
                  </div>
                </div>

                {(bar.website || bar.instagram) && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {bar.website && (
                      <a 
                        href={`https://${bar.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Globe className="h-4 w-4 mr-1" />
                        {bar.website}
                      </a>
                    )}
                    {bar.instagram && (
                      <a 
                        href={`https://instagram.com/${bar.instagram.replace('@', '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
                      >
                        <Users className="h-4 w-4 mr-1" />
                        {bar.instagram}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Live Music */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Music className="h-8 w-8 text-pink-600 mr-3" />
            Live Music Venues
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {liveMusic.map((venue, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{venue.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{venue.type}</p>
                    <div className="text-yellow-500 text-sm mt-1">★ {venue.rating}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Cover</div>
                    <div className="font-bold text-pink-600">{venue.cover}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {venue.genres.map((genre, i) => (
                      <span key={i} className="bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 px-2 py-1 rounded text-xs font-semibold">
                        {genre}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 dark:text-gray-400">Location</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{venue.area}</div>
                    </div>
                    <div>
                      <div className="text-gray-600 dark:text-gray-400">Schedule</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{venue.schedule}</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg mb-3">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Best For</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{venue.best_for}</div>
                </div>

                {(venue.website || venue.instagram) && (
                  <div className="flex flex-wrap gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    {venue.website && (
                      <a 
                        href={`https://${venue.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Globe className="h-4 w-4 mr-1" />
                        Website
                      </a>
                    )}
                    {venue.instagram && (
                      <a 
                        href={`https://instagram.com/${venue.instagram.replace('@', '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
                      >
                        <Users className="h-4 w-4 mr-1" />
                        Instagram
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Karaoke */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Mic className="h-8 w-8 text-blue-600 mr-3" />
            Karaoke Spots
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {karaoke.map((spot, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{spot.name}</h3>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {spot.area}
                </div>
                <div className="text-yellow-500 text-sm mb-4">★ {spot.rating}</div>

                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Rooms</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{spot.rooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Hours</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{spot.hours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Price</span>
                    <span className="font-semibold text-blue-600">{spot.price_detail}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Features</h4>
                  <ul className="space-y-1">
                    {spot.features.map((feature, i) => (
                      <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Late Night Food */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Utensils className="h-8 w-8 text-orange-600 mr-3" />
            Late-Night Food
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lateNightFood.map((food, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{food.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{food.type}</span>
                  <span className="text-yellow-500 text-sm">★ {food.rating}</span>
                </div>

                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    {food.hours}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {food.price}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Specialties</h4>
                  <div className="flex flex-wrap gap-1">
                    {food.specialties.map((item, i) => (
                      <span key={i} className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-1 rounded text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="text-xs text-gray-600 dark:text-gray-400">{food.perfect_for}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Shield className="h-8 w-8 text-green-600 mr-3" />
            Safety Tips for Nightlife
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {safetyTips.map((section, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-3">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{section.category}</h3>
                </div>
                <ul className="space-y-2">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-lg">
          <div className="flex items-start">
            <PartyPopper className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Nightlife Pro Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Tbilisi nightlife is incredibly safe compared to other European cities</li>
                <li>• Clubs often don't get busy until after midnight</li>
                <li>• Bassiani is world-famous - book tickets in advance for big events</li>
                <li>• Smoking is allowed in most venues (bring gum!)</li>
                <li>• Dress codes are relaxed except at upscale venues</li>
                <li>• Drinks are cheap: ₾5-15 for cocktails, ₾3-8 for beer</li>
                <li>• Taxis are super cheap (₾5-10 for most rides)</li>
                <li>• Many venues have no-photo policies - respect them</li>
                <li>• Georgian wine is excellent and affordable</li>
                <li>• The scene is LGBTQ+ friendly, especially at Bassiani and Khidi</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6">
          <p className="font-semibold">Last updated: November 11, 2025</p>
          <p className="mt-2">Nightlife information verified from venue websites, Instagram, and expat community feedback.</p>
          <p className="mt-1">Found outdated information? <a href="mailto:contact@georgiaexpat.com" className="text-blue-600 hover:text-blue-700 underline">Let us know</a></p>
        </div>
      </div>
    </div>
  )
}
