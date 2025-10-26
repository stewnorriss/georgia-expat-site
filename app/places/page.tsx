'use client'

import { MapPin, Clock, Camera, Star, Globe, ExternalLink, Phone, DollarSign, Info } from 'lucide-react'

const PlacesPage = () => {
  const places = [
    {
      name: 'Narikala Fortress',
      category: 'Historical Site',
      rating: 4.8,
      visitTime: '2-3 hours',
      description: 'Ancient 4th-century fortress overlooking Tbilisi with panoramic city views. Take the cable car up for stunning vistas and explore the ruins of this historic citadel.',
      highlights: ['Panoramic City Views', 'Historical Architecture', 'Cable Car Access', 'St. Nicholas Church'],
      bestTime: 'Sunset for best photos',
      entryFee: 'Free (Cable car: 2.5 GEL)',
      location: 'Old Town, accessible by cable car from Rike Park',
      address: 'Narikala Fortress, Old Town, Tbilisi',
      phone: '+995 32 272 74 79',
      website: 'tbilisi.gov.ge',
      hours: '24/7 (Cable car: 11:00-23:00)',
      tips: 'Wear comfortable shoes, bring water, visit during golden hour',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Old Town (Dzveli Kalaki)',
      category: 'Historic District',
      rating: 4.9,
      visitTime: 'Half day',
      description: 'Charming cobblestone streets with traditional architecture, wine bars, art galleries, and authentic Georgian restaurants. The heart of historic Tbilisi.',
      highlights: ['Traditional Architecture', 'Wine Bars', 'Art Galleries', 'Souvenir Shops', 'Street Art'],
      bestTime: 'Morning or Evening',
      entryFee: 'Free',
      location: 'Central Tbilisi, walkable from most hotels',
      address: 'Old Town District, Tbilisi',
      phone: '+995 32 272 74 79',
      website: 'old-tbilisi.com',
      hours: '24/7 (Shops: 10:00-22:00)',
      tips: 'Get lost in the narrow streets, try local wine, visit Shardeni Street',
      image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Sulfur Baths (Abanotubani)',
      category: 'Cultural Experience',
      rating: 4.6,
      visitTime: '2-4 hours',
      description: 'Historic sulfur baths where Tbilisi was founded. Experience traditional Georgian bathing culture in natural hot springs with therapeutic properties.',
      highlights: ['Natural Hot Springs', 'Traditional Massage', 'Historical Significance', 'Relaxation'],
      bestTime: 'Afternoon or evening',
      entryFee: '15-50 GEL depending on bath house',
      location: 'Abanotubani district, below Narikala Fortress',
      address: 'Abanotubani District, Tbilisi',
      phone: '+995 32 272 15 15',
      website: 'abanotubani.ge',
      hours: '08:00-24:00 (varies by bathhouse)',
      tips: 'Book private rooms for couples, try traditional scrub massage',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Bridge of Peace',
      category: 'Modern Architecture',
      rating: 4.5,
      visitTime: '30 minutes',
      description: 'Stunning modern pedestrian bridge designed by Michele De Lucchi. Features interactive LED light displays that communicate in Morse code.',
      highlights: ['Modern Design', 'LED Light Show', 'River Views', 'Photography Spot'],
      bestTime: 'Night for light display',
      entryFee: 'Free',
      location: 'Connects Old Town with Rike Park',
      address: 'Bridge of Peace, Rike Park, Tbilisi',
      phone: '+995 32 272 74 79',
      website: 'tbilisi.gov.ge',
      hours: '24/7 (Light show: 20:00-01:00)',
      tips: 'Visit at night for the light show, great for photos',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Mtatsminda Park',
      category: 'Recreation',
      rating: 4.7,
      visitTime: 'Half day',
      description: 'Amusement park on Mount Mtatsminda accessible by funicular railway. Offers rides, restaurants, and spectacular views of Tbilisi.',
      highlights: ['Amusement Rides', 'Panoramic Views', 'Funicular Railway', 'Family Entertainment'],
      bestTime: 'Afternoon/Evening',
      entryFee: 'Park entry free, rides 2-5 GEL each',
      location: 'Mount Mtatsminda, accessible by funicular',
      address: 'Mount Mtatsminda, Tbilisi',
      phone: '+995 32 295 09 09',
      website: 'mtatsmindapark.ge',
      hours: '12:00-24:00 (Funicular: 09:00-02:00)',
      tips: 'Take the historic funicular up, visit Mtatsminda Pantheon nearby',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Georgian National Museum',
      category: 'Museum',
      rating: 4.4,
      visitTime: '2-3 hours',
      description: 'Comprehensive museum showcasing Georgian history from ancient times to modern era. Features archaeological treasures and cultural artifacts.',
      highlights: ['Golden Treasures', 'Archaeological Finds', 'Soviet History', 'Cultural Exhibits'],
      bestTime: 'Morning when less crowded',
      entryFee: '15 GEL adults, 5 GEL students',
      location: 'Rustaveli Avenue 3',
      address: 'Rustaveli Avenue 3, Tbilisi 0105',
      phone: '+995 32 299 80 21',
      website: 'museum.ge',
      hours: '10:00-18:00 (Closed Mondays)',
      tips: 'Audio guide recommended, photography allowed in most areas',
      image: 'https://images.unsplash.com/photo-1566127992631-137a642a90f4?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Tbilisi Botanical Garden',
      category: 'Nature',
      rating: 4.6,
      visitTime: '2-4 hours',
      description: 'Beautiful botanical garden with over 4,500 plant species, waterfalls, and scenic walking paths. Perfect escape from city bustle.',
      highlights: ['Diverse Flora', 'Waterfall', 'Scenic Paths', 'Peaceful Environment'],
      bestTime: 'Spring and summer mornings',
      entryFee: '15 GEL adults, 5 GEL students',
      location: 'Behind Narikala Fortress, entrance near sulfur baths',
      address: '1 Botanikuri St, Tbilisi 0105',
      phone: '+995 32 272 70 58',
      website: 'nbg.ge',
      hours: '09:00-19:00 (Summer), 10:00-17:00 (Winter)',
      tips: 'Wear comfortable walking shoes, bring water, allow 3+ hours',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Rustaveli Avenue',
      category: 'Cultural Street',
      rating: 4.7,
      visitTime: '2-3 hours',
      description: 'Main cultural avenue with theaters, museums, shops, and cafes. The cultural heart of modern Tbilisi.',
      highlights: ['Opera House', 'Parliament Building', 'Shopping', 'Cafes & Restaurants'],
      bestTime: 'Evening for atmosphere',
      entryFee: 'Free',
      location: 'Central Tbilisi, from Freedom Square to Rustaveli Metro',
      address: 'Rustaveli Avenue, Tbilisi',
      phone: '+995 32 272 74 79',
      website: 'rustaveli.tbilisi.gov.ge',
      hours: '24/7 (Shops: 10:00-22:00)',
      tips: 'Walk the entire length, visit Opera House, try street food',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Dry Bridge Market',
      category: 'Market',
      rating: 4.3,
      visitTime: '1-2 hours',
      description: 'Fascinating flea market with Soviet-era antiques, vintage items, and unique Georgian crafts. A treasure hunter\'s paradise.',
      highlights: ['Soviet Antiques', 'Vintage Items', 'Local Crafts', 'Unique Souvenirs'],
      bestTime: 'Weekend mornings',
      entryFee: 'Free to browse',
      location: 'Near Dry Bridge, between Old and New Town',
      address: 'Dry Bridge, Tbilisi',
      phone: '+995 32 272 30 30',
      website: 'drybridge-market.ge',
      hours: '10:00-18:00 (Weekends: 09:00-19:00)',
      tips: 'Bargain expected, cash only, unique souvenirs available',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Rike Park',
      category: 'Urban Park',
      rating: 4.4,
      visitTime: '1-2 hours',
      description: 'Modern riverside park with contemporary architecture, fountains, and great views of Old Town. Perfect for relaxation.',
      highlights: ['Modern Design', 'River Views', 'Fountains', 'Cable Car Station'],
      bestTime: 'Evening for sunset views',
      entryFee: 'Free',
      location: 'Right bank of Mtkvari River, near Bridge of Peace',
      address: 'Rike Park, Tbilisi',
      phone: '+995 32 272 74 79',
      website: 'tbilisi.gov.ge',
      hours: '24/7 (Cable car: 11:00-23:00)',
      tips: 'Great for picnics, cable car to Narikala starts here',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Sioni Cathedral',
      category: 'Religious Site',
      rating: 4.5,
      visitTime: '30-45 minutes',
      description: 'Historic cathedral and former seat of Georgian Orthodox Church. Houses the cross of St. Nino, who brought Christianity to Georgia.',
      highlights: ['Religious History', 'Beautiful Architecture', 'St. Nino\'s Cross', 'Orthodox Services'],
      bestTime: 'Morning or late afternoon',
      entryFee: 'Free',
      location: 'Sioni Street, Old Town',
      address: 'Sioni Street 4, Old Town, Tbilisi',
      phone: '+995 32 272 25 25',
      website: 'patriarchate.ge',
      hours: '07:00-19:00 (Services: 09:00, 18:00)',
      tips: 'Dress modestly, photography restrictions inside, attend a service',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop&crop=center'
    },
    {
      name: 'Turtle Lake (Kus Tba)',
      category: 'Nature',
      rating: 4.2,
      visitTime: '2-3 hours',
      description: 'Small lake surrounded by forest, perfect for hiking, swimming, and picnics. Popular summer destination for locals.',
      highlights: ['Swimming', 'Hiking Trails', 'Picnic Areas', 'Fresh Air'],
      bestTime: 'Summer afternoons',
      entryFee: 'Free',
      location: '30-minute hike from Vake Park or taxi accessible',
      address: 'Turtle Lake, Vake District, Tbilisi',
      phone: '+995 32 272 74 79',
      website: 'tbilisi.gov.ge',
      hours: '24/7 (Swimming: daylight hours only)',
      tips: 'Bring swimwear in summer, hiking shoes recommended, pack snacks',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop&crop=center'
    }
  ]

  const additionalPlaces = [
    {
      name: 'Anchiskhati Basilica',
      category: 'Religious Site',
      description: 'Oldest surviving church in Tbilisi (6th century)',
      highlights: ['Ancient Architecture', 'Religious History']
    },
    {
      name: 'Metekhi Church',
      category: 'Religious Site', 
      description: 'Historic church with statue of King Vakhtang Gorgasali',
      highlights: ['City Views', 'Historical Significance']
    },
    {
      name: 'Chronicle of Georgia',
      category: 'Monument',
      description: 'Massive monument depicting Georgian history',
      highlights: ['Monumental Art', 'Historical Scenes', 'Day Trip']
    },
    {
      name: 'Funicular Railway',
      category: 'Transportation',
      description: 'Historic railway to Mtatsminda Park since 1905',
      highlights: ['Historic Transport', 'Scenic Journey']
    },
    {
      name: 'Shardeni Street',
      category: 'Entertainment District',
      description: 'Lively street with bars, restaurants, and nightlife',
      highlights: ['Nightlife', 'Dining', 'Entertainment']
    },
    {
      name: 'Freedom Square',
      category: 'Public Square',
      description: 'Central square with St. George statue and city hall',
      highlights: ['Central Location', 'Architecture', 'Events']
    },
    {
      name: 'Leghvtakhevi Waterfall',
      category: 'Nature',
      description: 'Hidden waterfall in the heart of Old Town',
      highlights: ['Hidden Gem', 'Nature in City', 'Photography']
    },
    {
      name: 'Fabrika Tbilisi',
      category: 'Cultural Hub',
      description: 'Hipster hostel and cultural space in former factory',
      highlights: ['Alternative Culture', 'Events', 'Nightlife']
    },
    {
      name: 'Deserters Bazaar',
      category: 'Market',
      description: 'Large food market with fresh produce and spices',
      highlights: ['Local Food', 'Fresh Produce', 'Authentic Experience']
    },
    {
      name: 'Vake Park',
      category: 'Urban Park',
      description: 'Large park popular with families and joggers',
      highlights: ['Family Friendly', 'Recreation', 'Green Space']
    },
    {
      name: 'Lisi Lake',
      category: 'Nature',
      description: 'Artificial lake with beach area and water sports',
      highlights: ['Swimming', 'Water Sports', 'Beach Activities']
    },
    {
      name: 'Tbilisi Sea',
      category: 'Recreation',
      description: 'Large reservoir with beaches and water activities',
      highlights: ['Swimming', 'Boating', 'Summer Recreation']
    },
    {
      name: 'Ethnographic Museum',
      category: 'Museum',
      description: 'Open-air museum showcasing Georgian rural architecture',
      highlights: ['Traditional Architecture', 'Cultural Heritage', 'Outdoor Museum']
    },
    {
      name: 'Modern Art Museum',
      category: 'Museum',
      description: 'Contemporary Georgian and international art',
      highlights: ['Modern Art', 'Local Artists', 'Exhibitions']
    },
    {
      name: 'Château Mukhrani',
      category: 'Winery',
      description: 'Historic winery with wine tastings and tours',
      highlights: ['Wine Tasting', 'Historic Estate', 'Day Trip']
    },
    {
      name: 'Tbilisi Opera House',
      category: 'Cultural Venue',
      description: 'Beautiful opera house with world-class performances',
      highlights: ['Opera & Ballet', 'Architecture', 'Cultural Events']
    },
    {
      name: 'Sameba Cathedral',
      category: 'Religious Site',
      description: 'Largest Orthodox cathedral in Georgia',
      highlights: ['Impressive Architecture', 'Religious Significance', 'City Views']
    },
    {
      name: 'Kashveti Church',
      category: 'Religious Site',
      description: 'Beautiful church on Rustaveli Avenue',
      highlights: ['Central Location', 'Architecture', 'Religious Art']
    }
  ]

  const dayTrips = [
    {
      name: 'Mtskheta',
      distance: '20km',
      duration: 'Half day',
      description: 'Ancient capital with UNESCO World Heritage sites',
      highlights: ['Svetitskhoveli Cathedral', 'Jvari Monastery', 'Historical Significance']
    },
    {
      name: 'Sighnaghi',
      distance: '110km', 
      duration: 'Full day',
      description: 'Charming wine town in Kakheti region',
      highlights: ['Wine Tasting', 'City Walls', 'Alazani Valley Views']
    },
    {
      name: 'Gori & Uplistsikhe',
      distance: '80km',
      duration: 'Full day', 
      description: 'Stalin\'s birthplace and ancient cave city',
      highlights: ['Stalin Museum', 'Cave City', 'Historical Sites']
    },
    {
      name: 'Kazbegi',
      distance: '150km',
      duration: 'Full day',
      description: 'Mountain town with Gergeti Trinity Church',
      highlights: ['Mountain Views', 'Gergeti Church', 'Hiking']
    },
    {
      name: 'Borjomi',
      distance: '160km',
      duration: 'Full day',
      description: 'Spa town famous for mineral water',
      highlights: ['Mineral Springs', 'National Park', 'Cable Car']
    },
    {
      name: 'David Gareja',
      distance: '70km',
      duration: 'Full day',
      description: 'Ancient monastery complex in semi-desert',
      highlights: ['Cave Monasteries', 'Frescoes', 'Unique Landscape']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 overflow-hidden">
        {/* Geometric Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='30,0 60,30 30,60 0,30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Camera className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Places to Visit in Tbilisi
              </h1>
              <div className="flex items-center text-blue-200">
                <MapPin className="h-5 w-5 mr-2" />
                <span>35+ Amazing Destinations & Day Trips</span>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Explore amazing destinations in and around Tbilisi. From ancient fortresses to modern attractions, 
            discover the perfect blend of history, culture, and natural beauty.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {places.map((place, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Place Image */}
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('${place.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-black/50 text-white px-4 py-2 rounded-lg font-semibold text-center">
                    {place.name}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {place.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {place.bestTime}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{place.name}</h3>
                    <p className="text-lg text-blue-600 mb-2">{place.category}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{place.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{place.visitTime}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{place.description}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {place.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Camera className="h-4 w-4 mr-2 text-green-500" />
                        <span className="text-sm"><strong>Best Time:</strong> {place.bestTime}</span>
                      </div>
                      {place.entryFee && (
                        <div className="flex items-center text-gray-600">
                          <span className="text-sm mr-2">💰</span>
                          <span className="text-sm"><strong>Entry:</strong> {place.entryFee}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    {place.location && (
                      <div className="mb-3">
                        <h4 className="font-semibold text-gray-900 mb-1">Location:</h4>
                        <div className="flex items-start text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 mt-0.5 text-red-500" />
                          <span className="text-sm">{place.location}</span>
                        </div>
                      </div>
                    )}
                    
                    {place.tips && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Visitor Tips:</h4>
                        <div className="flex items-start text-gray-600">
                          <span className="text-sm mr-2">💡</span>
                          <span className="text-sm">{place.tips}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contact Details Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-red-500" />
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-sm">{place.address}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-500" />
                    <div>
                      <div className="font-semibold">Hours</div>
                      <div className="text-sm">{place.hours}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2 text-green-500" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-sm">{place.phone}</div>
                    </div>
                  </div>
                  {place.website && (
                    <div className="flex items-center text-gray-600">
                      <Globe className="h-4 w-4 mr-2 text-purple-500" />
                      <div>
                        <div className="font-semibold">Website</div>
                        <a href={`https://${place.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline flex items-center">
                          {place.website}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Additional places in grid format */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">More Places to Explore in Tbilisi</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalPlaces.map((place, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-l-4 border-blue-500">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900 text-sm">{place.name}</h4>
                  </div>
                  <p className="text-xs text-blue-600 mb-2">{place.category}</p>
                  <p className="text-xs text-gray-600 mb-2">{place.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {place.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Day Trips Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Day Trips from Tbilisi</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dayTrips.map((trip, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{trip.name}</h4>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{trip.distance}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{trip.duration}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">{trip.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {trip.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Suggested Itineraries</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-800 mb-2">🏛️ Historical Tour (Full Day)</h4>
                <p className="text-sm text-gray-700">Narikala Fortress → Old Town → Sulfur Baths → Sioni Cathedral → Metekhi Church</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-2">🎭 Cultural Day</h4>
                <p className="text-sm text-gray-700">National Museum → Opera House → Rustaveli Avenue → Modern Art Museum</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-2">🌿 Nature Escape</h4>
                <p className="text-sm text-gray-700">Botanical Garden → Turtle Lake → Mtatsminda Park → Vake Park</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-2">🌉 Modern Tbilisi</h4>
                <p className="text-sm text-gray-700">Bridge of Peace → Rike Park → Fabrika → Shardeni Street</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Essential Visitor Tips</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>💰 Many attractions are free or very affordable (under 20 GEL)</li>
              <li>👟 Wear comfortable walking shoes for cobblestone streets</li>
              <li>📸 Tbilisi is incredibly photogenic - bring extra battery</li>
              <li>🕐 Check opening hours, especially for museums and churches</li>
              <li>🎫 Consider a Tbilisi Card for discounts and free transport</li>
              <li>🌡️ Summer can be hot - start early or visit in evening</li>
              <li>💧 Carry water, especially when hiking to Turtle Lake</li>
              <li>🏛️ Dress modestly when visiting churches and religious sites</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation Tips</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>🚇 Metro connects to most central attractions</li>
              <li>🚡 Cable car to Narikala from Rike Park (2.5 GEL)</li>
              <li>🚋 Funicular to Mtatsminda Park (historic experience)</li>
              <li>🚕 Bolt/Maxim taxis are affordable for distant places</li>
              <li>🚌 Marshrutkas (minibuses) for local transport</li>
              <li>🚶 Many attractions walkable in Old Town area</li>
              <li>🅿️ Limited parking in Old Town - use public transport</li>
              <li>🎫 MetroMoney card works for metro, buses, and cable car</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacesPage