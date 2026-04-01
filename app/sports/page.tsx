'use client'

import { Dumbbell, MapPin, Clock, DollarSign, Globe, ExternalLink, Users, Star, Zap, Heart, Trophy, Target, Activity, Mountain, Waves, TreePine } from 'lucide-react'
import PageHero from '../components/PageHero'

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
      expat_friendly: true,
      description: 'The most premium gym chain in Tbilisi with international standards. Features state-of-the-art equipment from Technogym and Life Fitness.',
      amenities: {
        equipment: ['200+ Cardio Machines', 'Free Weights up to 50kg', 'Olympic Lifting Platform', 'TRX Suspension', 'Functional Training Zone'],
        classes: ['Yoga', 'Pilates', 'Spinning', 'Zumba', 'CrossFit', 'Boxing', 'HIIT', 'Aqua Aerobics'],
        extras: ['Olympic Pool (25m)', 'Finnish Sauna', 'Turkish Hammam', 'Massage Services', 'Nutrition Consultation', 'Kids Club', 'Juice Bar', 'Pro Shop']
      },
      hours: 'Mon-Fri: 6:00-23:00, Sat-Sun: 8:00-22:00',
      trainers: 'Certified personal trainers available, many speak English',
      membership_options: ['Monthly: 250 GEL', 'Quarterly: 650 GEL', 'Annual: 2,200 GEL (save 27%)', 'Day Pass: 30 GEL'],
      expat_perks: ['English-speaking staff', 'International payment methods', 'Guest passes available', 'Expat community events'],
      parking: 'Free parking at all locations',
      trial: '3-day free trial available'
    },
    {
      name: 'Fitness Time',
      type: 'Mid-range Gym',
      locations: ['Saburtalo', 'Vake', 'Gldani', 'Isani', 'Varketili'],
      priceRange: '80-150 GEL/month',
      facilities: ['Cardio Equipment', 'Weight Training', 'Group Classes', 'Locker Rooms'],
      website: 'fitnesstime.ge',
      rating: 4.2,
      expat_friendly: true,
      description: 'Best value for money in Tbilisi. Clean, well-maintained facilities with modern equipment at affordable prices.',
      amenities: {
        equipment: ['100+ Cardio Machines', 'Free Weights', 'Cable Machines', 'Smith Machines', 'Leg Press', 'Rowing Machines'],
        classes: ['Aerobics', 'Step', 'Body Pump', 'Stretching', 'Dance Fitness', 'Functional Training'],
        extras: ['Locker Rooms with Showers', 'Changing Rooms', 'Water Fountains', 'Towel Service (extra fee)', 'Protein Shakes Available']
      },
      hours: 'Mon-Fri: 7:00-23:00, Sat-Sun: 9:00-21:00',
      trainers: 'Personal trainers available at extra cost (30-40 GEL/session)',
      membership_options: ['Monthly: 100 GEL', 'Quarterly: 270 GEL', 'Annual: 900 GEL (save 25%)', 'Student Discount: 15% off'],
      expat_perks: ['Some English-speaking staff', 'Multiple locations for convenience', 'No long-term contracts required'],
      parking: 'Limited street parking',
      trial: '1-day free trial'
    },
    {
      name: 'Gold\'s Gym Tbilisi',
      type: 'International Chain',
      locations: ['Saburtalo', 'Vake'],
      priceRange: '120-200 GEL/month',
      facilities: ['Professional Equipment', 'CrossFit Area', 'Boxing Ring', 'Yoga Studio', 'Nutritionist'],
      website: 'goldsgym.ge',
      rating: 4.4,
      expat_friendly: true,
      description: 'World-renowned fitness brand with professional-grade equipment. Popular among serious bodybuilders and fitness enthusiasts.',
      amenities: {
        equipment: ['Hammer Strength Machines', 'Olympic Bars & Bumper Plates', 'Dumbbells up to 60kg', 'Assault Bikes', 'Concept2 Rowers', 'Battle Ropes', 'Kettlebells'],
        classes: ['CrossFit', 'Boxing', 'Kickboxing', 'Yoga', 'Power Lifting', 'Olympic Lifting', 'HIIT', 'Core Training'],
        extras: ['Boxing Ring', 'Heavy Bags', 'Speed Bags', 'Nutritionist on Staff', 'Body Composition Analysis', 'Supplement Store', 'Recovery Zone']
      },
      hours: 'Mon-Fri: 6:00-23:00, Sat-Sun: 8:00-22:00',
      trainers: 'Certified trainers including former athletes, English-speaking available',
      membership_options: ['Monthly: 150 GEL', 'Quarterly: 400 GEL', 'Annual: 1,500 GEL', 'Couples Package: 250 GEL/month'],
      expat_perks: ['International brand recognition', 'English-speaking trainers', 'Expat workout groups', 'Guest passes for visitors'],
      parking: 'Paid parking nearby',
      trial: '7-day trial for 20 GEL'
    },
    {
      name: 'Impuls Fitness',
      type: 'Local Premium',
      locations: ['Vera', 'Saburtalo', 'Vake Park'],
      priceRange: '100-180 GEL/month',
      facilities: ['Modern Cardio', 'Free Weights', 'Group Classes', 'Swimming Pool', 'Spa'],
      website: 'impulsfitness.ge',
      rating: 4.3,
      expat_friendly: true,
      description: 'Georgian-owned premium gym with excellent facilities and a strong local community. Known for cleanliness and modern equipment.',
      amenities: {
        equipment: ['Latest Cardio Equipment', 'Free Weight Zone', 'Cable Crossover Machines', 'Leg Equipment', 'Chest & Back Machines', 'Core Training Area'],
        classes: ['Swimming Lessons', 'Aqua Aerobics', 'Yoga', 'Pilates', 'Zumba', 'Spinning', 'Body Sculpting', 'Stretching'],
        extras: ['Indoor Pool (20m)', 'Sauna', 'Steam Room', 'Massage Services', 'Spa Treatments', 'Cafe', 'Smoothie Bar', 'Retail Shop']
      },
      hours: 'Mon-Fri: 7:00-23:00, Sat-Sun: 9:00-22:00',
      trainers: 'Experienced trainers, some English speakers (40-50 GEL/session)',
      membership_options: ['Monthly: 130 GEL', 'Quarterly: 350 GEL', 'Annual: 1,200 GEL', 'Pool Only: 80 GEL/month'],
      expat_perks: ['Friendly atmosphere', 'Clean facilities', 'Good mix of locals and expats', 'Flexible membership terms'],
      parking: 'Free parking at Saburtalo location',
      trial: '3-day trial for 15 GEL'
    },
    {
      name: 'CrossFit Tbilisi',
      type: 'CrossFit Box',
      locations: ['Vake'],
      priceRange: '200-250 GEL/month',
      facilities: ['CrossFit Equipment', 'Olympic Lifting', 'Functional Training', 'Outdoor Area'],
      website: 'crossfittbilisi.com',
      rating: 4.6,
      expat_friendly: true,
      description: 'Tbilisi\'s premier CrossFit box with certified coaches and a tight-knit community. Perfect for those serious about functional fitness.',
      amenities: {
        equipment: ['Rogue Fitness Equipment', 'Olympic Lifting Platforms', 'Pull-up Rigs', 'Assault Bikes', 'Rowing Machines', 'Ski Ergs', 'Sleds', 'Tires', 'Ropes'],
        classes: ['CrossFit WODs', 'Olympic Lifting', 'Gymnastics', 'Mobility', 'Open Gym', 'Competition Prep', 'Beginners Program'],
        extras: ['Outdoor Training Area', 'Competition Equipment', 'Chalk Station', 'Recovery Tools', 'Community Events', 'Nutrition Coaching']
      },
      hours: 'Mon-Fri: 6:00-22:00, Sat-Sun: 9:00-18:00',
      trainers: 'CrossFit Level 1 & 2 certified coaches, English-speaking',
      membership_options: ['Unlimited: 220 GEL/month', '12 Classes: 150 GEL', '8 Classes: 110 GEL', 'Drop-in: 20 GEL', 'Foundations Course: 100 GEL (required for beginners)'],
      expat_perks: ['Strong expat community', 'English classes available', 'Social events', 'Competition opportunities', 'Visiting athlete rates'],
      parking: 'Street parking available',
      trial: 'Free intro class'
    },
    {
      name: 'Fitness Club 2000',
      type: 'Budget-Friendly',
      locations: ['Didube', 'Gldani', 'Station Square'],
      priceRange: '50-80 GEL/month',
      facilities: ['Basic Equipment', 'Cardio Machines', 'Free Weights', 'Locker Rooms'],
      website: null,
      rating: 3.8,
      expat_friendly: false,
      description: 'No-frills budget gym perfect for basic workouts. Equipment is older but functional. Great for those on a tight budget.',
      amenities: {
        equipment: ['Treadmills', 'Exercise Bikes', 'Ellipticals', 'Free Weights up to 30kg', 'Basic Machines', 'Benches'],
        classes: ['Limited group classes', 'Basic aerobics'],
        extras: ['Locker Rooms', 'Showers', 'Basic Changing Facilities']
      },
      hours: 'Mon-Fri: 8:00-22:00, Sat-Sun: 10:00-20:00',
      trainers: 'Limited trainer availability, mostly Georgian-speaking',
      membership_options: ['Monthly: 60 GEL', 'Quarterly: 160 GEL', 'Annual: 550 GEL'],
      expat_perks: ['Very affordable', 'No contract required', 'Pay-as-you-go options'],
      parking: 'Street parking',
      trial: 'No trial available'
    },
    {
      name: 'Orange Fitness',
      type: 'Modern Mid-Range',
      locations: ['Saburtalo', 'Vake', 'Isani'],
      priceRange: '90-140 GEL/month',
      facilities: ['Modern Equipment', 'Group Classes', 'Personal Training', 'Sauna'],
      website: 'orangefitness.ge',
      rating: 4.3,
      expat_friendly: true,
      description: 'Growing chain with modern facilities and good equipment. Popular among young professionals and expats.',
      amenities: {
        equipment: ['Matrix Cardio Equipment', 'Free Weights', 'Cable Machines', 'Functional Training Zone', 'TRX', 'Kettlebells'],
        classes: ['HIIT', 'Yoga', 'Pilates', 'Spinning', 'Boxing', 'Dance', 'Stretching', 'Core'],
        extras: ['Sauna', 'Locker Rooms', 'Showers', 'Towel Service', 'Smoothie Bar', 'WiFi', 'Music System']
      },
      hours: 'Mon-Fri: 6:30-23:00, Sat-Sun: 8:00-22:00',
      trainers: 'Certified trainers, some English speakers (35-45 GEL/session)',
      membership_options: ['Monthly: 110 GEL', 'Quarterly: 300 GEL', 'Annual: 1,000 GEL', 'Student: 90 GEL/month'],
      expat_perks: ['Modern facilities', 'English-speaking staff at reception', 'Clean and well-maintained', 'Good music and atmosphere'],
      parking: 'Free parking at most locations',
      trial: '2-day trial for 10 GEL'
    },
    {
      name: 'Vake Fitness Club',
      type: 'Boutique Gym',
      locations: ['Vake'],
      priceRange: '120-180 GEL/month',
      facilities: ['Premium Equipment', 'Small Group Training', 'Personal Training', 'Recovery Zone'],
      website: 'vakefitness.ge',
      rating: 4.5,
      expat_friendly: true,
      description: 'Boutique gym in upscale Vake neighborhood. Smaller, more intimate setting with personalized attention and high-end equipment.',
      amenities: {
        equipment: ['Technogym Equipment', 'Free Weights', 'Functional Training Area', 'Cardio Zone', 'Stretching Area'],
        classes: ['Small Group Training (max 8 people)', 'Personal Training', 'Yoga', 'Pilates', 'HIIT'],
        extras: ['Recovery Zone', 'Foam Rollers', 'Massage Guns', 'Towel Service', 'Premium Showers', 'Lounge Area', 'Coffee Bar']
      },
      hours: 'Mon-Fri: 7:00-22:00, Sat-Sun: 9:00-20:00',
      trainers: 'Highly qualified trainers, English-speaking (50-70 GEL/session)',
      membership_options: ['Monthly: 150 GEL', 'Quarterly: 400 GEL', 'Annual: 1,400 GEL', '10 PT Sessions: 500 GEL'],
      expat_perks: ['Personalized service', 'English-speaking staff', 'Upscale atmosphere', 'Never crowded', 'Expat-friendly community'],
      parking: 'Paid parking nearby',
      trial: '1 free session with trainer'
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHero
        title="Sports & Fitness"
        description="Stay active in Tbilisi with our comprehensive guide to gyms, outdoor activities, sports clubs, and fitness classes. From budget-friendly options to premium facilities, find the perfect way to maintain your fitness routine as an expat."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Gym Finder */}
        <section className="mb-12 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <Target className="h-8 w-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Find Your Perfect Gym</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="font-semibold text-gray-900 mb-2">💰 Budget-Friendly</h3>
              <p className="text-sm text-gray-600 mb-2">50-100 GEL/month</p>
              <p className="text-xs text-gray-500">Fitness Time, Fitness Club 2000</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="font-semibold text-gray-900 mb-2">⭐ Best Value</h3>
              <p className="text-sm text-gray-600 mb-2">100-150 GEL/month</p>
              <p className="text-xs text-gray-500">Orange Fitness, Impuls Fitness</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="font-semibold text-gray-900 mb-2">🏆 Premium</h3>
              <p className="text-sm text-gray-600 mb-2">150-300 GEL/month</p>
              <p className="text-xs text-gray-500">World Class, Gold's Gym</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="font-semibold text-gray-900 mb-2">🎯 Specialized</h3>
              <p className="text-sm text-gray-600 mb-2">200-250 GEL/month</p>
              <p className="text-xs text-gray-500">CrossFit Tbilisi, Vake Fitness</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="font-bold text-gray-900 mb-6 text-xl">Detailed Gym Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-yellow-100 to-orange-100">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Gym Name</th>
                    <th className="text-center py-3 px-3 font-bold text-gray-900">Price/Month</th>
                    <th className="text-center py-3 px-3 font-bold text-gray-900">Pool</th>
                    <th className="text-center py-3 px-3 font-bold text-gray-900">Classes</th>
                    <th className="text-center py-3 px-3 font-bold text-gray-900">English Staff</th>
                    <th className="text-center py-3 px-3 font-bold text-gray-900">Sauna/Spa</th>
                    <th className="text-center py-3 px-3 font-bold text-gray-900">Equipment</th>
                    <th className="text-center py-3 px-3 font-bold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-yellow-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-gray-900">World Class</div>
                      <div className="text-xs text-gray-500">Premium Chain</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <div className="font-bold text-green-600">150-300</div>
                      <div className="text-xs text-gray-500">GEL</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">25m Olympic</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">15+ types</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">Full support</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">Sauna+Hammam</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">⭐</span>
                      <div className="text-xs text-gray-600">Top tier</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">Luxury</span>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-gray-200 hover:bg-yellow-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-gray-900">Gold's Gym</div>
                      <div className="text-xs text-gray-500">International</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <div className="font-bold text-green-600">120-200</div>
                      <div className="text-xs text-gray-500">GEL</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">❌</span>
                      <div className="text-xs text-gray-600">No pool</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">CrossFit+Boxing</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">Yes</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">⚠️</span>
                      <div className="text-xs text-gray-600">Recovery zone</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">⭐</span>
                      <div className="text-xs text-gray-600">Professional</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">Bodybuilding</span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 hover:bg-yellow-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-gray-900">Impuls Fitness</div>
                      <div className="text-xs text-gray-500">Local Premium</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <div className="font-bold text-green-600">100-180</div>
                      <div className="text-xs text-gray-500">GEL</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">20m Indoor</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">10+ types</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">⚠️</span>
                      <div className="text-xs text-gray-600">Some staff</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">Sauna+Steam</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">Modern</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">All-round</span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 hover:bg-yellow-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-gray-900">Orange Fitness</div>
                      <div className="text-xs text-gray-500">Modern Mid-Range</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <div className="font-bold text-green-600">90-140</div>
                      <div className="text-xs text-gray-500">GEL</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">❌</span>
                      <div className="text-xs text-gray-600">No pool</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">8+ types</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">⚠️</span>
                      <div className="text-xs text-gray-600">Reception</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">Sauna</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">Matrix brand</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">Best Value</span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 hover:bg-yellow-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-gray-900">Fitness Time</div>
                      <div className="text-xs text-gray-500">Budget-Friendly</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <div className="font-bold text-green-600">80-150</div>
                      <div className="text-xs text-gray-500">GEL</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">❌</span>
                      <div className="text-xs text-gray-600">No pool</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">6+ types</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">⚠️</span>
                      <div className="text-xs text-gray-600">Limited</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">❌</span>
                      <div className="text-xs text-gray-600">No spa</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">Good basics</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">Budget</span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-200 hover:bg-yellow-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-gray-900">CrossFit Tbilisi</div>
                      <div className="text-xs text-gray-500">Specialized Box</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <div className="font-bold text-green-600">200-250</div>
                      <div className="text-xs text-gray-500">GEL</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">❌</span>
                      <div className="text-xs text-gray-600">No pool</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">CrossFit WODs</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">Full support</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">❌</span>
                      <div className="text-xs text-gray-600">No spa</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">⭐</span>
                      <div className="text-xs text-gray-600">Rogue gear</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">CrossFit</span>
                    </td>
                  </tr>

                  <tr className="hover:bg-yellow-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-gray-900">Vake Fitness</div>
                      <div className="text-xs text-gray-500">Boutique</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <div className="font-bold text-green-600">120-180</div>
                      <div className="text-xs text-gray-500">GEL</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">❌</span>
                      <div className="text-xs text-gray-600">No pool</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">Small groups</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">✅</span>
                      <div className="text-xs text-gray-600">Full support</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">⚠️</span>
                      <div className="text-xs text-gray-600">Recovery zone</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="text-2xl">⭐</span>
                      <div className="text-xs text-gray-600">Technogym</div>
                    </td>
                    <td className="text-center py-3 px-3">
                      <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-semibold">Personal</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-semibold text-gray-900 mb-2">Legend:</div>
                <div className="space-y-1 text-gray-600">
                  <div>✅ = Available</div>
                  <div>⚠️ = Limited/Some</div>
                  <div>❌ = Not Available</div>
                  <div>⭐ = Premium Quality</div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="font-semibold text-gray-900 mb-2">💡 Quick Tips:</div>
                <div className="space-y-1 text-gray-600 text-xs">
                  <div>• World Class = Best overall facilities</div>
                  <div>• Orange Fitness = Best value for money</div>
                  <div>• CrossFit Tbilisi = Best community</div>
                  <div>• Vake Fitness = Most personalized</div>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="font-semibold text-gray-900 mb-2">🎯 For Expats:</div>
                <div className="space-y-1 text-gray-600 text-xs">
                  <div>• English staff: World Class, Gold's, CrossFit</div>
                  <div>• Trial available: All except Fitness Club 2000</div>
                  <div>• Guest passes: World Class, Gold's Gym</div>
                  <div>• No contract: Fitness Time, Orange</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gyms & Fitness Centers */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Dumbbell className="h-8 w-8 text-yellow-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Gyms & Fitness Centers</h2>
          </div>
          <div className="grid gap-8">
            {gyms.map((gym, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{gym.name}</h3>
                      <p className="text-lg text-yellow-600 font-semibold mb-3">{gym.type}</p>
                      <p className="text-gray-700 mb-3">{gym.description}</p>
                      <div className="flex items-center space-x-4 flex-wrap gap-2">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-500 mr-1" />
                          <span className="text-sm font-bold">{gym.rating}/5.0</span>
                        </div>
                        {gym.expat_friendly && (
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            ✓ Expat Friendly
                          </span>
                        )}
                        {gym.trial && (
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                            🎁 {gym.trial}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-3xl font-bold text-green-600 mb-1">{gym.priceRange}</div>
                      <div className="text-sm text-gray-500 mb-3">per month</div>
                      {gym.website && (
                        <a 
                          href={`https://${gym.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors text-sm font-semibold"
                        >
                          Visit Website
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Locations */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                        <MapPin className="h-5 w-5 mr-2 text-red-500" />
                        Locations
                      </h4>
                      <ul className="space-y-2">
                        {gym.locations.map((location, idx) => (
                          <li key={idx} className="text-gray-700 flex items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                            {location}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 text-sm text-gray-600">
                        <Clock className="h-4 w-4 inline mr-2" />
                        {gym.hours}
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        🚗 {gym.parking}
                      </div>
                    </div>

                    {/* Membership Options */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                        <DollarSign className="h-5 w-5 mr-2 text-green-500" />
                        Membership Options
                      </h4>
                      <ul className="space-y-2">
                        {gym.membership_options.map((option, idx) => (
                          <li key={idx} className="text-gray-700 flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Equipment */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                      <Dumbbell className="h-5 w-5 mr-2 text-purple-500" />
                      Equipment & Facilities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {gym.amenities.equipment.map((item, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Classes */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                      <Users className="h-5 w-5 mr-2 text-blue-500" />
                      Group Classes
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {gym.amenities.classes.map((classType, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {classType}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Extras */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                      <Zap className="h-5 w-5 mr-2 text-orange-500" />
                      Additional Amenities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {gym.amenities.extras.map((extra, idx) => (
                        <span key={idx} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                          {extra}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Trainers */}
                  <div className="mb-6 bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-pink-500" />
                      Personal Training
                    </h4>
                    <p className="text-gray-700 text-sm">{gym.trainers}</p>
                  </div>

                  {/* Expat Perks */}
                  {gym.expat_perks && (
                    <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                      <h4 className="font-bold text-green-900 mb-3 flex items-center">
                        <Globe className="h-5 w-5 mr-2" />
                        Expat Benefits
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {gym.expat_perks.map((perk, idx) => (
                          <li key={idx} className="text-green-800 text-sm flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
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