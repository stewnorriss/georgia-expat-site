import { Dumbbell, MapPin, Clock, DollarSign } from 'lucide-react'

const SportsPage = () => {
  const gyms = [
    {
      name: 'World Class Fitness',
      type: 'Premium Gym Chain',
      locations: ['Galleria Tbilisi', 'East Point', 'Mall of Georgia'],
      priceRange: '150-300 GEL/month',
      facilities: ['Modern Equipment', 'Pool', 'Group Classes', 'Sauna', 'Personal Training']
    },
    {
      name: 'Fitness Time',
      type: 'Mid-range Gym',
      locations: ['Multiple locations'],
      priceRange: '80-150 GEL/month',
      facilities: ['Cardio Equipment', 'Weight Training', 'Group Classes', 'Locker Rooms']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sports & Fitness</h1>
          <p className="text-xl max-w-3xl">
            Stay active in Tbilisi with our guide to gyms, fitness centers, and sports facilities. 
            Find the perfect place to maintain your fitness routine as an expat.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {gyms.map((gym, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{gym.name}</h3>
              <p className="text-lg text-yellow-600 mb-4">{gym.type}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Locations:</h4>
                  <ul className="space-y-1">
                    {gym.locations.map((location, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{location}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Price:</h4>
                  <p className="text-green-600 font-semibold">{gym.priceRange}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SportsPage