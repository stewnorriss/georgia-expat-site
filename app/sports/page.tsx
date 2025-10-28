'use client'

import { Dumbbell, MapPin, Clock, DollarSign, Globe, ExternalLink, Users, Star, Zap, Heart, Trophy, Target, Activity, Mountain, Waves, TreePine } from 'lucide-react'

const SportsPage = () => {
  const gyms = [
    {
      name: 'World Class Fitness',
      type: 'Premium Gym Chain',
      locations: ['Galleria Tbilisi', 'East Point', 'Mall of Georgia'],
      priceRange: '150-300 GEL/month',
      facilities: ['Modern Equipment', 'Pool', 'Group Classes', 'Sauna', 'Personal Training'],
      website: 'worldclass.ge',
      rating: 4.5,
      expat_friendly: true
    },
    {
      name: 'Fitness Time',
      type: 'Mid-range Gym',
      locations: ['Multiple locations'],
      priceRange: '80-150 GEL/month',
      facilities: ['Cardio Equipment', 'Weight Training', 'Group Classes', 'Locker Rooms'],
      website: 'fitnesstime.ge',
      rating: 4.2,
      expat_friendly: true
    },
    {
      name: 'Gold\'s Gym Tbilisi',
      type: 'International Chain',
      locations: ['Saburtalo', 'Vake'],
      priceRange: '120-200 GEL/month',
      facilities: ['Professional Equipment', 'CrossFit Area', 'Boxing Ring', 'Yoga Studio', 'Nutritionist'],
      website: 'goldsgym.ge',
      rating: 4.4,
      expat_friendly: true
    },
    {
      name: 'Impuls Fitness',
      type: 'Local Premium',
      locations: ['Vera', 'Saburtalo'],
      priceRange: '100-180 GEL/month',
      facilities: ['Modern Cardio', 'Free Weights', 'Group Classes', 'Swimming Pool', 'Spa'],
      website: 'impulsfitness.ge',
      rating: 4.3,
      expat_friendly: true
    },
    {
      name: 'CrossFit Tbilisi',
      type: 'CrossFit Box',
      locations: ['Vake'],
      priceRange: '200-250 GEL/month',
      facilities: ['CrossFit Equipment', 'Olympic Lifting', 'Functional Training', 'Outdoor Area'],
      website: 'crossfittbilisi.com',
      rating: 4.6,
      expat_friendly: true
    },
    {
      name: 'Fitness Club 2000',
      type: 'Budget-Friendly',
      locations: ['Didube', 'Gldani'],
      priceRange: '50-80 GEL/month',
      facilities: ['Basic Equipment', 'Cardio Machines', 'Free Weights', 'Locker Rooms'],
      website: null,
      rating: 3.8,
      expat_friendly: false
    }
  ]

  const outdoorActivities = [
    {
      name: 'Mtatsminda Park Hiking',
      type: 'Hiking & Walking',
      location: 'Mtatsminda',
      difficulty: 'Easy to Moderate',
      cost: 'Free',
      description: 'Beautiful trails with city views, perfect for morning runs or evening walks',
      best_time: 'Early morning or evening'
    },
    {
      name: 'Vake Park Running Track',
      type: 'Running & Jogging',
      location: 'Vake',
      difficulty: 'Easy',
      cost: 'Free',
      description: 'Popular 2km loop track, well-maintained with distance markers',
      best_time: 'Anytime'
    },
    {
      name: 'Turtle Lake Activities',
      type: 'Swimming & Water Sports',
      location: 'Turtle Lake',
      difficulty: 'Easy',
      cost: '5-10 GEL entry',
      description: 'Natural lake swimming, paddle boats, and lakeside walking trails',
      best_time: 'Summer months'
    },
    {
      name: 'Tbilisi Sea Kayaking',
      type: 'Water Sports',
      location: 'Tbilisi Sea',
      difficulty: 'Moderate',
      cost: '30-50 GEL/hour',
      description: 'Kayak rentals and guided tours on the large reservoir',
      best_time: 'May to September'
    },
    {
      name: 'Caucasus Mountains Day Hikes',
      type: 'Mountain Hiking',
      location: 'Various (1-2 hours from city)',
      difficulty: 'Moderate to Hard',
      cost: 'Transport costs',
      description: 'Day trips to Kazbegi, Borjomi, and other mountain destinations',
      best_time: 'April to October'
    }
  ]

  const sportsClubs = [
    {
      name: 'Tbilisi Tennis Club',
      sport: 'Tennis',
      location: 'Vake',
      facilities: ['6 Courts', 'Pro Shop', 'Coaching Available'],
      membership: '200-400 GEL/month',
      contact: 'info@tennisclub.ge'
    },
    {
      name: 'Locomotive Swimming Pool',
      sport: 'Swimming',
      location: 'Saburtalo',
      facilities: ['Olympic Pool', 'Kids Pool', 'Diving Board'],
      membership: '80-120 GEL/month',
      contact: '595-123-456'
    },
    {
      name: 'Tbilisi Basketball Club',
      sport: 'Basketball',
      location: 'Multiple courts',
      facilities: ['Indoor Courts', 'Equipment Rental', 'League Play'],
      membership: '60-100 GEL/month',
      contact: 'tbilisibasketball@gmail.com'
    },
    {
      name: 'Georgian Football Academy',
      sport: 'Football/Soccer',
      location: 'Dinamo Arena area',
      facilities: ['Professional Pitches', 'Training Programs', 'Adult Leagues'],
      membership: '100-150 GEL/month',
      contact: 'academy@gfa.ge'
    }
  ]

  const fitnessClasses = [
    {
      name: 'Yoga Shala Tbilisi',
      type: 'Yoga & Meditation',
      location: 'Old Town',
      price: '25-30 GEL/class',
      schedule: 'Daily classes',
      languages: ['English', 'Georgian', 'Russian']
    },
    {
      name: 'Pilates Studio Vera',
      type: 'Pilates',
      location: 'Vera',
      price: '30-35 GEL/class',
      schedule: 'Mon-Sat',
      languages: ['English', 'Georgian']
    },
    {
      name: 'Zumba Fitness Tbilisi',
      type: 'Dance Fitness',
      location: 'Multiple locations',
      price: '20-25 GEL/class',
      schedule: 'Evening classes',
      languages: ['Georgian', 'English']
    },
    {
      name: 'Martial Arts Dojo',
      type: 'Karate & Judo',
      location: 'Saburtalo',
      price: '80-120 GEL/month',
      schedule: 'Mon/Wed/Fri',
      languages: ['Georgian', 'English']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Dumbbell className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Sports & Fitness</h1>
              <div className="flex items-center space-x-4 text-yellow-200">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  <span>25+ Fitness Options</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  <span>All Skill Levels</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Expat-Friendly</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Stay active in Tbilisi with our comprehensive guide to gyms, outdoor activities, sports clubs, and fitness classes. 
            From budget-friendly options to premium facilities, find the perfect way to maintain your fitness routine as an expat.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Gyms & Fitness Centers */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Dumbbell className="h-8 w-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Gyms & Fitness Centers</h2>
          </div>
          <div className="grid gap-6">
            {gyms.map((gym, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{gym.name}</h3>
                    <p className="text-lg text-yellow-600 mb-2">{gym.type}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-semibold">{gym.rating}</span>
                      </div>
                      {gym.expat_friendly && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                          Expat Friendly
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{gym.priceRange}</div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                      Locations:
                    </h4>
                    <ul className="space-y-1">
                      {gym.locations.map((location, idx) => (
                        <li key={idx} className="text-gray-700 ml-6">
                          • {location}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Activity className="h-4 w-4 mr-2 text-gray-500" />
                      Facilities:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {gym.facilities.map((facility, idx) => (
                        <span key={idx} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {gym.website && (
                  <div className="flex items-center text-gray-600 pt-4 border-t border-gray-200">
                    <Globe className="h-4 w-4 mr-2 text-purple-500" />
                    <span className="font-semibold mr-2">Website:</span>
                    <a href={`https://${gym.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      {gym.website}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Outdoor Activities */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Mountain className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Outdoor Activities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {outdoorActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{activity.name}</h3>
                    <p className="text-green-600 font-semibold mb-2">{activity.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">{activity.cost}</div>
                    <div className="text-sm text-gray-500">{activity.difficulty}</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="font-semibold text-gray-700">{activity.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Best time: {activity.best_time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sports Clubs */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Trophy className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Sports Clubs & Facilities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {sportsClubs.map((club, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{club.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{club.sport}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{club.membership}</div>
                    <div className="text-sm text-gray-500">membership</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="font-semibold text-gray-700">{club.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {club.facilities.map((facility, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-600 pt-4 border-t border-gray-200">
                  <Globe className="h-4 w-4 mr-2" />
                  <span className="font-semibold mr-2">Contact:</span>
                  <span>{club.contact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fitness Classes */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Heart className="h-8 w-8 text-pink-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Fitness Classes & Studios</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {fitnessClasses.map((classInfo, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{classInfo.name}</h3>
                    <p className="text-pink-600 font-semibold mb-2">{classInfo.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{classInfo.price}</div>
                    <div className="text-sm text-gray-500">per class</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="font-semibold text-gray-700">{classInfo.location}</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Clock className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-gray-600">{classInfo.schedule}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <span className="font-semibold text-gray-700 mr-2">Languages:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {classInfo.languages.map((lang, idx) => (
                      <span key={idx} className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips for Expats */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <Zap className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Tips for Expats</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span>Most premium gyms offer trial periods - take advantage to find your fit</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span>Many facilities have English-speaking staff, especially in Vake and Saburtalo</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span>Outdoor activities are popular year-round due to Georgia's mild climate</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span>Join expat Facebook groups for workout buddies and sports partners</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Money-Saving Tips</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span>Annual memberships often offer 20-30% discounts</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span>Many parks and outdoor areas are completely free to use</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span>Group classes often have package deals for multiple sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span>Corporate discounts available at some gyms - ask your employer</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SportsPage