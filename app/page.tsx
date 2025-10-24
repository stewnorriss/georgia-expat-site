import Link from 'next/link'
import { 
  Utensils, 
  MapPin, 
  Car, 
  Home, 
  Users, 
  MessageCircle, 
  Mountain, 
  Bed, 
  Dumbbell, 
  Stethoscope, 
  Palette, 
  BookOpen 
} from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: <Utensils className="h-8 w-8" />,
      title: 'Restaurants',
      description: '21 featured dining establishments from traditional Georgian cuisine to international favorites',
      href: '/restaurants',
      color: 'bg-red-500'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Places to Visit',
      description: '28 tourist destinations and attractions in and around Tbilisi',
      href: '/places',
      color: 'bg-blue-500'
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: 'Transport',
      description: 'Comprehensive guides for getting around Tbilisi - metro, buses, taxis, and more',
      href: '/transport',
      color: 'bg-green-500'
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Housing',
      description: 'Living arrangements, neighborhoods, and tips for finding your perfect home',
      href: '/housing',
      color: 'bg-purple-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Culture',
      description: 'Georgian traditions, customs, and cultural insights for expats',
      href: '/culture',
      color: 'bg-orange-500'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Language',
      description: '29 Georgian language lessons to help you communicate with locals',
      href: '/language',
      color: 'bg-pink-500'
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      title: 'Activities',
      description: 'Adventures and outdoor activities in Georgia\'s stunning landscapes',
      href: '/activities',
      color: 'bg-teal-500'
    },
    {
      icon: <Bed className="h-8 w-8" />,
      title: 'Accommodation',
      description: 'Hotels, hostels, and short-term stays for visitors and new arrivals',
      href: '/accommodation',
      color: 'bg-indigo-500'
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: 'Sports & Fitness',
      description: 'Gyms, fitness centers, and sports clubs throughout Tbilisi',
      href: '/sports',
      color: 'bg-yellow-500'
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: 'Medical',
      description: 'Healthcare facilities, services, and medical information for expats',
      href: '/medical',
      color: 'bg-red-600'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Arts & Culture',
      description: 'Museums, theaters, galleries, and cultural venues in Tbilisi',
      href: '/arts',
      color: 'bg-cyan-500'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Expat Blog',
      description: '30 comprehensive guides covering all aspects of expat life in Georgia',
      href: '/blog',
      color: 'bg-gray-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-800/90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
              <MapPin className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Tbilisi
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your complete guide to living as an English expat in Georgia's vibrant capital. 
            Discover the best restaurants, places, culture, and everything you need to thrive in Tbilisi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/restaurants" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Restaurants
            </Link>
            <Link 
              href="/blog" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Read Expat Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources to help you navigate life in Tbilisi, from dining and transport to culture and language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                {/* Image Header */}
                <div className={`h-32 bg-gradient-to-br ${feature.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white p-3 rounded-full bg-white/20 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  {/* Decorative Pattern */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  ></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">21</div>
              <div className="text-gray-600">Featured Restaurants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">28</div>
              <div className="text-gray-600">Places to Visit</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">29</div>
              <div className="text-gray-600">Language Lessons</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">30</div>
              <div className="text-gray-600">Expat Guides</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage