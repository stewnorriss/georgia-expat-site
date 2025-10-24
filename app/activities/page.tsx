import { Mountain, Camera, Bike, Plane } from 'lucide-react'

const ActivitiesPage = () => {
  const activities = [
    {
      category: 'Hiking & Nature',
      icon: <Mountain className="h-8 w-8" />,
      color: 'bg-green-500',
      activities: [
        'Mtatsminda Mountain trails',
        'Turtle Lake hiking',
        'Tbilisi National Park',
        'Narikala Fortress walk',
        'Botanical Garden exploration'
      ]
    },
    {
      category: 'Day Trips',
      icon: <Camera className="h-8 w-8" />,
      color: 'bg-blue-500',
      activities: [
        'Mtskheta ancient capital',
        'Jvari Monastery',
        'Gori and Stalin Museum',
        'Uplistsikhe cave city',
        'Sighnaghi wine region'
      ]
    },
    {
      category: 'Adventure Sports',
      icon: <Bike className="h-8 w-8" />,
      color: 'bg-red-500',
      activities: [
        'White water rafting',
        'Paragliding in Gudauri',
        'Rock climbing',
        'Mountain biking',
        'Skiing in winter'
      ]
    },
    {
      category: 'Cultural Activities',
      icon: <Plane className="h-8 w-8" />,
      color: 'bg-purple-500',
      activities: [
        'Wine tasting tours',
        'Cooking classes',
        'Traditional dance shows',
        'Art gallery visits',
        'Museum tours'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Activities & Adventures</h1>
          <p className="text-xl max-w-3xl">
            Discover amazing outdoor activities and cultural experiences in and around Tbilisi. 
            From hiking trails to wine tours, Georgia offers endless adventures for expats.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Activity Category Image */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-teal-500 to-green-600 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('https://picsum.photos/600/400?random=${index + 200}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-black/50 text-white px-4 py-2 rounded-lg font-semibold text-center">
                    {category.category}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <div className={`${category.color} text-white p-2 rounded-lg mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {category.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center group hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                      <span className="text-gray-700 group-hover:text-teal-600 transition-colors">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivitiesPage