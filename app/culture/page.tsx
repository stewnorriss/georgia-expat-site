import { Users, Heart, Gift, Music } from 'lucide-react'

const CulturePage = () => {
  const traditions = [
    {
      title: 'Georgian Supra (Feast)',
      description: 'Traditional Georgian feast with elaborate toasts, wine, and hospitality.',
      importance: 'Central to Georgian social life',
      tips: 'Accept invitations graciously, participate in toasts, pace yourself with wine'
    },
    {
      title: 'Tamada (Toastmaster)',
      description: 'The person who leads toasts at Georgian feasts and celebrations.',
      importance: 'Highly respected role in Georgian culture',
      tips: 'Listen respectfully to toasts, wait for your turn to speak'
    },
    {
      title: 'Georgian Hospitality',
      description: 'Guests are considered a gift from God in Georgian culture.',
      importance: 'Core value of Georgian society',
      tips: 'Accept hospitality graciously, bring small gifts when visiting homes'
    },
    {
      title: 'Orthodox Christianity',
      description: 'Deeply rooted religious traditions and customs.',
      importance: 'Influences daily life and cultural practices',
      tips: 'Dress modestly in churches, respect religious holidays and customs'
    }
  ]

  const holidays = [
    { name: 'New Year', date: 'January 1-2', description: 'Major celebration with family gatherings' },
    { name: 'Orthodox Christmas', date: 'January 7', description: 'Religious holiday with special services' },
    { name: 'Epiphany', date: 'January 19', description: 'Water blessing ceremonies' },
    { name: 'Mother\'s Day', date: 'March 3', description: 'Honoring mothers and women' },
    { name: 'Independence Day', date: 'May 26', description: 'National holiday celebrating independence' },
    { name: 'Mariamoba', date: 'August 28', description: 'Religious holiday honoring Virgin Mary' }
  ]

  const etiquette = [
    {
      category: 'Social Interactions',
      rules: [
        'Greet with a handshake or kiss on both cheeks',
        'Maintain eye contact during conversations',
        'Show respect to elders',
        'Remove shoes when entering homes'
      ]
    },
    {
      category: 'Dining Etiquette',
      rules: [
        'Wait for the host to start eating',
        'Keep hands visible on the table',
        'Finish everything on your plate',
        'Participate in toasts when offered'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-orange-600 to-red-600 text-white py-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='25' cy='25' r='15'/%3E%3Ccircle cx='75' cy='75' r='15'/%3E%3Cpath d='M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Users className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Georgian Culture</h1>
              <div className="flex items-center text-orange-200">
                <Heart className="h-5 w-5 mr-2" />
                <span>Rich Traditions & Customs</span>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Discover the rich traditions, customs, and cultural nuances of Georgia. 
            Understanding local culture will enrich your expat experience and help you connect with Georgians.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 mb-12">
          {traditions.map((tradition, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="bg-orange-100 text-orange-600 p-3 rounded-lg mr-4">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tradition.title}</h3>
                  <p className="text-gray-600 mb-3">{tradition.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Cultural Importance:</h4>
                      <p className="text-gray-700 text-sm">{tradition.importance}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Tips for Expats:</h4>
                      <p className="text-gray-700 text-sm">{tradition.tips}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Gift className="h-6 w-6 text-orange-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-900">Major Holidays</h3>
            </div>
            <div className="space-y-4">
              {holidays.map((holiday, index) => (
                <div key={index} className="border-l-4 border-orange-500 pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-gray-900">{holiday.name}</h4>
                    <span className="text-sm text-gray-500">{holiday.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{holiday.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-orange-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-900">Cultural Etiquette</h3>
            </div>
            <div className="space-y-6">
              {etiquette.map((section, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-900 mb-3">{section.category}</h4>
                  <ul className="space-y-2">
                    {section.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <Music className="h-8 w-8 text-orange-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Cultural Immersion Tips</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Do:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Learn basic Georgian phrases</li>
                <li>• Attend local festivals and events</li>
                <li>• Try traditional Georgian food</li>
                <li>• Show interest in Georgian history</li>
                <li>• Respect religious customs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Avoid:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Comparing Georgia negatively to other countries</li>
                <li>• Refusing hospitality or food offers</li>
                <li>• Discussing sensitive political topics</li>
                <li>• Wearing revealing clothing in religious sites</li>
                <li>• Being impatient with Georgian time concepts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CulturePage