import { Train, Bus, Car, Plane, CreditCard, Clock, MapPin } from 'lucide-react'

const TransportPage = () => {
  const transportModes = [
    {
      icon: <Train className="h-8 w-8" />,
      title: 'Metro System',
      description: 'Tbilisi\'s efficient metro system with 2 lines covering major areas',
      details: [
        'Operating hours: 6:00 AM - 12:00 AM',
        'Cost: 1 GEL per ride with transport card',
        'Lines: Akhmeteli-Varketili (Line 1) and Saburtalo (Line 2)',
        'Key stations: Rustaveli, Freedom Square, Marjanishvili'
      ],
      tips: 'Buy a transport card for convenience and better rates'
    },
    {
      icon: <Bus className="h-8 w-8" />,
      title: 'City Buses',
      description: 'Extensive bus network covering all neighborhoods',
      details: [
        'Operating hours: 7:00 AM - 11:00 PM (most routes)',
        'Cost: 1 GEL with transport card, 1.20 GEL cash',
        'Popular routes: #37 (Airport), #61 (Mtatsminda), #71 (Vake)',
        'Real-time tracking available via mobile apps'
      ],
      tips: 'Download the Tbilisi Transport app for real-time schedules'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Getting Around Tbilisi
          </h1>
          <p className="text-xl max-w-3xl">
            Comprehensive transport guide for expats. Navigate Tbilisi's metro, buses, taxis, and more 
            with confidence and ease.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8">
          {transportModes.map((mode, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-600 p-3 rounded-lg mr-4">
                  {mode.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{mode.title}</h3>
                  <p className="text-gray-600">{mode.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Information:</h4>
                  <ul className="space-y-2">
                    {mode.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">💡 Pro Tip:</h4>
                  <p className="text-green-700">{mode.tips}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TransportPage