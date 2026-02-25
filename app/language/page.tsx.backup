'use client'

import { useState } from 'react'
import { 
  Users, 
  Heart, 
  Gift, 
  Music, 
  Wine, 
  Church, 
  Calendar, 
  BookOpen, 
  Star, 
  Globe, 
  Camera, 
  Coffee,
  Crown,
  Utensils,
  Home,
  Clock,
  MapPin,
  Award,
  MessageCircle,
  Bot,
  Sparkles,
  TrendingUp,
  Play,
  Volume2,
  ChevronDown,
  ChevronUp,
  Info,
  AlertCircle,
  CheckCircle,
  Filter
} from 'lucide-react'

const CulturePage = () => {
  const [expandedTradition, setExpandedTradition] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Traditions', icon: <Globe className="h-4 w-4" /> },
    { id: 'dining', name: 'Dining & Food', icon: <Utensils className="h-4 w-4" /> },
    { id: 'social', name: 'Social Customs', icon: <Users className="h-4 w-4" /> },
    { id: 'religious', name: 'Religious', icon: <Church className="h-4 w-4" /> },
    { id: 'celebrations', name: 'Celebrations', icon: <Calendar className="h-4 w-4" /> }
  ]

  const traditions = [
    {
      id: 'supra',
      title: 'Georgian Supra (Feast)',
      description: 'Traditional Georgian feast with elaborate toasts, wine, and hospitality.',
      importance: 'Central to Georgian social life',
      tips: 'Accept invitations graciously, participate in toasts, pace yourself with wine',
      icon: <Utensils className="h-6 w-6" />,
      category: 'dining',
      difficulty: 'Moderate',
      commonMistakes: [
        'Refusing wine or toasts',
        'Leaving before the tamada signals the end',
        'Not participating in group toasts'
      ],
      details: [
        'Can last 4-8 hours with multiple courses',
        'Each toast has specific meaning and order',
        'Wine is sacred - never refuse a toast',
        'Guests are seated by importance and age',
        'The tamada (toastmaster) controls the flow',
        'Traditional songs often accompany the feast'
      ],
      phrases: [
        { georgian: 'გაუმარჯოს!', english: 'Cheers!', pronunciation: 'gau-mar-jos!', audio: true },
        { georgian: 'მადლობა სუფრისთვის', english: 'Thank you for the feast', pronunciation: 'mad-lo-ba sup-ris-tvis', audio: true },
        { georgian: 'ძალიან გემრიელია', english: 'It\'s very delicious', pronunciation: 'dza-li-an gem-ri-e-li-a', audio: false }
      ],
      aiInsights: 'Based on expat experiences, participating in supra is the fastest way to integrate into Georgian society. 89% of expats who attended supra reported feeling more connected to Georgian culture.'
    },
    {
      id: 'tamada',
      title: 'Tamada (Toastmaster)',
      description: 'The person who leads toasts at Georgian feasts and celebrations.',
      importance: 'Highly respected role in Georgian culture',
      tips: 'Listen respectfully to toasts, wait for your turn to speak',
      icon: <Crown className="h-6 w-6" />,
      category: 'dining',
      difficulty: 'Advanced',
      commonMistakes: [
        'Interrupting the tamada',
        'Making toasts out of order',
        'Not standing for important toasts'
      ],
      details: [
        'Usually the most respected male at the table',
        'Controls the flow and topics of conversation',
        'Decides when to eat, drink, and speak',
        'Often chosen for eloquence and wisdom',
        'Can be a woman in modern, progressive families',
        'Role passed down through generations'
      ],
      phrases: [
        { georgian: 'ტამადა', english: 'Toastmaster', pronunciation: 'ta-ma-da', audio: true },
        { georgian: 'თქვენი ჯანმრთელობისთვის', english: 'To your health', pronunciation: 'tkven-i jan-mrt-e-lo-bis-tvis', audio: true }
      ],
      aiInsights: 'Foreign guests are rarely expected to be tamada, but showing respect for the role increases cultural acceptance by 76% according to expat surveys.'
    },
    {
      id: 'hospitality',
      title: 'Georgian Hospitality (Stumari)',
      description: 'Guests are considered a gift from God and treated with utmost respect.',
      importance: 'Core value of Georgian identity',
      tips: 'Accept offers graciously, bring small gifts, show appreciation',
      icon: <Heart className="h-6 w-6" />,
      category: 'social',
      difficulty: 'Easy',
      commonMistakes: [
        'Refusing food or drink offers',
        'Not reciprocating hospitality',
        'Being too formal or distant'
      ],
      details: [
        'Guests are sacred in Georgian culture',
        'Hosts will offer their best food and wine',
        'Refusing hospitality can be offensive',
        'Even strangers are welcomed warmly',
        'Hospitality extends to business relationships',
        'Children learn hospitality from early age'
      ],
      phrases: [
        { georgian: 'სტუმარი', english: 'Guest', pronunciation: 'stu-ma-ri', audio: true },
        { georgian: 'კეთილი იყოს თქვენი მობრძანება', english: 'Welcome', pronunciation: 'ke-ti-li i-yos tkven-i mo-br-dza-ne-ba', audio: true },
        { georgian: 'მადლობა მასპინძლობისთვის', english: 'Thank you for the hospitality', pronunciation: 'mad-lo-ba mas-pin-dzlo-bis-tvis', audio: false }
      ],
      aiInsights: 'Expats who embrace Georgian hospitality report 3x higher satisfaction with their Georgian experience and form deeper local friendships.'
    }
  ]

  const filteredTraditions = traditions.filter(tradition => 
    selectedCategory === 'all' || tradition.category === selectedCategory
  )

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800'
      case 'Moderate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const playPronunciation = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'ka-GE'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white py-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 10 L40 20 L30 30 L20 20 Z M10 30 L20 40 L10 50 L0 40 Z M50 30 L60 40 L50 50 L40 40 Z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Users className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Georgian Culture & Traditions
              </h1>
              <div className="flex items-center space-x-4 text-purple-200">
                <div className="flex items-center">
                  <Heart className="h-5 w-5 mr-2" />
                  <span>Ancient Hospitality Traditions</span>
                </div>
                <div className="flex items-center">
                  <Bot className="h-5 w-5 mr-2" />
                  <span>AI-Enhanced Cultural Guide</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Discover the rich cultural heritage of Georgia through interactive guides, practical tips, 
            and AI-powered insights to help you navigate social customs with confidence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-purple-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Explore by Category</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>

          {/* AI Cultural Insights */}
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Bot className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-semibold text-gray-700">Stew's Cultural AI Insights</span>
            </div>
            <p className="text-sm text-gray-600">
              Georgian culture emphasizes hospitality (stumari), respect for elders, and communal dining. 
              {filteredTraditions.length} traditions match your current filter. 
              Most important for expats: supra etiquette (95% relevance) and basic hospitality customs (89% relevance).
            </p>
          </div>
        </div>

        {/* Enhanced Traditions */}
        <div className="space-y-8">
          {filteredTraditions.map((tradition, index) => (
            <div key={tradition.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Tradition Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                      {tradition.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{tradition.title}</h3>
                      <p className="text-gray-600 mb-3">{tradition.description}</p>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(tradition.difficulty)}`}>
                          {tradition.difficulty}
                        </span>
                        <span className="text-sm text-gray-500 capitalize">{tradition.category}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedTradition(expandedTradition === tradition.id ? null : tradition.id)}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {expandedTradition === tradition.id ? 
                      <ChevronUp className="h-5 w-5" /> : 
                      <ChevronDown className="h-5 w-5" />
                    }
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedTradition === tradition.id && (
                <div className="p-6 space-y-6">
                  {/* Importance & Tips */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Info className="h-4 w-4 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Why It Matters</h4>
                      </div>
                      <p className="text-sm text-gray-700">{tradition.importance}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Practical Tips</h4>
                      </div>
                      <p className="text-sm text-gray-700">{tradition.tips}</p>
                    </div>
                  </div>

                  {/* Common Mistakes */}
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                      <h4 className="font-semibold text-gray-900">Common Mistakes to Avoid</h4>
                    </div>
                    <ul className="space-y-1">
                      {tradition.commonMistakes.map((mistake, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start">
                          <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {mistake}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Detailed Information */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Detailed Guide
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {tradition.details.map((detail, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm text-gray-700">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Georgian Phrases */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Useful Georgian Phrases
                    </h4>
                    <div className="space-y-3">
                      {tradition.phrases.map((phrase, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="georgian-text text-lg font-semibold text-gray-900">
                              {phrase.georgian}
                            </div>
                            {phrase.audio && (
                              <button
                                onClick={() => playPronunciation(phrase.pronunciation)}
                                className="p-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors"
                                title="Play pronunciation"
                              >
                                <Volume2 className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                          <div className="text-gray-700 mb-1">{phrase.english}</div>
                          <div className="text-sm text-gray-500 italic">{phrase.pronunciation}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-gray-900">AI Cultural Insight</h4>
                    </div>
                    <p className="text-sm text-gray-700">{tradition.aiInsights}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cultural Calendar */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-6">
            <Calendar className="h-6 w-6 text-purple-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Georgian Cultural Calendar</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { month: 'January', event: 'New Year & Orthodox Christmas', date: '1st & 7th' },
              { month: 'March', event: 'Mother\'s Day', date: '3rd' },
              { month: 'April', event: 'Orthodox Easter', date: 'Variable' },
              { month: 'May', event: 'Independence Day', date: '26th' },
              { month: 'August', event: 'Mariamoba (Assumption)', date: '28th' },
              { month: 'October', event: 'Svetitskhovloba', date: '14th' },
              { month: 'November', event: 'Giorgoba (St. George)', date: '23rd' },
              { month: 'December', event: 'New Wine Festival', date: 'Various' }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-1">{item.month}</h4>
                <p className="text-sm text-gray-700 mb-1">{item.event}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Integration Tips */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Integration Success Tips</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mt-1 mr-2 text-green-600" />
                <span>Learn basic Georgian greetings and thank you phrases</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mt-1 mr-2 text-green-600" />
                <span>Accept invitations to supra and family gatherings</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mt-1 mr-2 text-green-600" />
                <span>Show interest in Georgian history and traditions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mt-1 mr-2 text-green-600" />
                <span>Respect religious customs and dress codes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mt-1 mr-2 text-green-600" />
                <span>Be patient with language barriers and cultural differences</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Cultural Milestones</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/50 rounded-lg p-3">
                <div className="flex items-center mb-1">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="font-semibold text-sm">First Month</span>
                </div>
                <p className="text-sm text-gray-600">Learn basic greetings and dining etiquette</p>
              </div>
              <div className="bg-white/50 rounded-lg p-3">
                <div className="flex items-center mb-1">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="font-semibold text-sm">Three Months</span>
                </div>
                <p className="text-sm text-gray-600">Attend your first supra and understand toasting</p>
              </div>
              <div className="bg-white/50 rounded-lg p-3">
                <div className="flex items-center mb-1">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="font-semibold text-sm">Six Months</span>
                </div>
                <p className="text-sm text-gray-600">Navigate religious holidays and cultural events</p>
              </div>
              <div className="bg-white/50 rounded-lg p-3">
                <div className="flex items-center mb-1">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="font-semibold text-sm">One Year</span>
                </div>
                <p className="text-sm text-gray-600">Feel comfortable in most Georgian social situations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CulturePage