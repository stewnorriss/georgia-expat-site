import type { Metadata } from 'next'
import { Music, Beer, Mic, PartyPopper, Moon, Shield, Clock, MapPin, DollarSign, Star, AlertCircle, CheckCircle, Users, Wine, Coffee, Utensils, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nightlife in Tbilisi - Bars, Clubs, Live Music & Entertainment',
  description: 'Complete guide to Tbilisi nightlife: best bars, clubs, live music venues, karaoke spots, late-night food, and safety tips for expats.',
  keywords: 'Tbilisi nightlife, bars Tbilisi, clubs Georgia, live music Tbilisi, karaoke Tbilisi, late night food, Tbilisi entertainment, party Tbilisi',
}

export default function NightlifePage() {
  const bars = [
    {
      name: 'Dive Bar',
      type: 'Cocktail Bar',
      area: 'Old Town',
      vibe: 'Trendy & Intimate',
      rating: 4.8,
      price: '₾₾₾',
      hours: '6 PM - 2 AM',
      highlights: ['Creative cocktails', 'Cozy atmosphere', 'Great music'],
      crowd: 'Expats, locals, cocktail lovers',
      best_for: 'Romantic dates, impressing cocktail enthusiasts, intimate conversations over expertly crafted drinks',
      instagram: '@divebartbilisi'
    },
    {
      name: 'Canudos',
      type: 'Wine Bar',
      area: 'Vera',
      vibe: 'Sophisticated',
      rating: 4.7,
      price: '₾₾₾',
      hours: '5 PM - 1 AM',
      highlights: ['Georgian wines', 'Tapas', 'Knowledgeable staff'],
      crowd: 'Wine enthusiasts, professionals',
      best_for: 'Discovering Georgian wines, sophisticated after-work drinks, impressing wine-loving friends'
    },
    {
      name: 'Bassiani',
      type: 'Techno Club',
      area: 'Dinamo Stadium',
      vibe: 'Underground',
      rating: 4.9,
      price: '₾₾',
      hours: 'Fri-Sun, 11 PM - 8 AM',
      highlights: ['World-class DJs', 'Incredible sound system', 'No photos policy'],
      crowd: 'Ravers, techno lovers, international crowd',
      best_for: 'World-class techno experience, dancing until sunrise, experiencing Tbilisi\'s legendary underground scene',
      website: 'bassiani.com',
      instagram: '@bassianiklubi'
    },
    {
      name: 'Mtkvarze',
      type: 'River Bar',
      area: 'Mtkvari River',
      vibe: 'Chill & Scenic',
      rating: 4.6,
      price: '₾₾',
      hours: '12 PM - 2 AM',
      hours_summer: '12 PM - 4 AM (Summer)',
      highlights: ['River views', 'Outdoor seating', 'Live DJs'],
      crowd: 'Mixed, tourists, locals',
      best_for: 'Watching sunset over the river, casual summer evenings, meeting new people in a relaxed setting'
    },
    {
      name: 'Khidi',
      type: 'Club & Live Music',
      area: 'Mtkvari River',
      vibe: 'Industrial',
      rating: 4.7,
      price: '₾₾',
      hours: 'Thu-Sun, 11 PM - 6 AM',
      highlights: ['Techno & house', 'Riverside location', 'Multiple floors'],
      crowd: 'Electronic music fans, dancers',
      best_for: 'Marathon dancing sessions, exploring multiple music floors, experiencing Tbilisi\'s electronic music culture',
      website: 'khidi.ge',
      instagram: '@khidi_tbilisi'
    },
    {
      name: 'Rooms Hotel Bar',
      type: 'Hotel Bar',
      area: 'Vera',
      vibe: 'Upscale & Stylish',
      rating: 4.8,
      price: '₾₾₾₾',
      hours: '12 PM - 2 AM',
      highlights: ['Rooftop terrace', 'Premium cocktails', 'Beautiful design'],
      crowd: 'Professionals, hotel guests, upscale crowd',
      best_for: 'Celebrating special occasions, impressing business clients, luxury rooftop experience with city views'
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='3'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Moon className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Nightlife in Tbilisi</h1>
              <div className="flex items-center text-purple-200">
                <PartyPopper className="h-5 w-5 mr-2" />
                <span>Bars, Clubs, Music & Entertainment</span>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            From underground techno clubs to cozy wine bars, discover Tbilisi's vibrant nightlife scene. Safe, affordable, and unforgettable.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

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
      </div>
    </div>
  )
}
