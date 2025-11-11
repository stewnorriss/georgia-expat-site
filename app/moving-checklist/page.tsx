import type { Metadata } from 'next'
import { CheckCircle, Calendar, Download, Plane, Home, FileText, CreditCard, Phone, MapPin, Users, AlertCircle, Clock, Package, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Moving to Tbilisi Checklist - Complete Timeline for 2026',
  description: 'Step-by-step moving checklist for relocating to Tbilisi, Georgia. Timeline from 6 months before to your first month. Downloadable PDF included.',
  keywords: 'moving to Georgia checklist, Tbilisi relocation guide, expat moving timeline, Georgia visa checklist, moving to Tbilisi 2026',
}

export default function MovingChecklistPage() {
  const sixMonthsBefore = [
    { task: 'Research visa requirements for Georgia', priority: 'high', category: 'Legal' },
    { task: 'Check passport validity (must be valid 6+ months)', priority: 'high', category: 'Legal' },
    { task: 'Start saving money (aim for $3000-5000 buffer)', priority: 'high', category: 'Financial' },
    { task: 'Research neighborhoods in Tbilisi', priority: 'medium', category: 'Housing' },
    { task: 'Join expat Facebook groups and forums', priority: 'medium', category: 'Community' },
    { task: 'Start learning basic Georgian phrases', priority: 'low', category: 'Language' },
    { task: 'Research job opportunities or remote work setup', priority: 'high', category: 'Work' },
    { task: 'Get international health insurance quotes', priority: 'medium', category: 'Health' },
    { task: 'Notify your employer (if applicable)', priority: 'high', category: 'Work' },
    { task: 'Research schools (if moving with children)', priority: 'high', category: 'Family' }
  ]

  const threeMonthsBefore = [
    { task: 'Book flights to Tbilisi', priority: 'high', category: 'Travel' },
    { task: 'Arrange temporary accommodation (first 1-2 weeks)', priority: 'high', category: 'Housing' },
    { task: 'Sell or store belongings you won\'t bring', priority: 'medium', category: 'Logistics' },
    { task: 'Get apostilled documents (birth certificate, diplomas)', priority: 'high', category: 'Legal' },
    { task: 'Notify bank of international move', priority: 'high', category: 'Financial' },
    { task: 'Set up Wise or Revolut account', priority: 'high', category: 'Financial' },
    { task: 'Get international driver\'s license', priority: 'medium', category: 'Legal' },
    { task: 'Schedule medical checkup and vaccinations', priority: 'medium', category: 'Health' },
    { task: 'Scan important documents and store in cloud', priority: 'high', category: 'Admin' },
    { task: 'Research pet relocation (if applicable)', priority: 'high', category: 'Pets' }
  ]

  const oneMonthBefore = [
    { task: 'Confirm all flight and accommodation bookings', priority: 'high', category: 'Travel' },
    { task: 'Pack essentials and ship larger items', priority: 'high', category: 'Logistics' },
    { task: 'Cancel or pause subscriptions and services', priority: 'medium', category: 'Admin' },
    { task: 'Notify friends and family of move', priority: 'low', category: 'Personal' },
    { task: 'Get copies of medical records', priority: 'medium', category: 'Health' },
    { task: 'Exchange some currency to GEL', priority: 'medium', category: 'Financial' },
    { task: 'Download offline maps and translation apps', priority: 'medium', category: 'Tech' },
    { task: 'Make list of emergency contacts', priority: 'high', category: 'Safety' },
    { task: 'Backup phone and computer data', priority: 'high', category: 'Tech' },
    { task: 'Pack carry-on with essentials for first week', priority: 'high', category: 'Travel' }
  ]

  const firstWeek = [
    { task: 'Get Georgian SIM card (Magti, Beeline, or Silknet)', priority: 'high', category: 'Tech', day: '1' },
    { task: 'Register at temporary accommodation', priority: 'high', category: 'Legal', day: '1' },
    { task: 'Exchange more currency at bank or exchange office', priority: 'high', category: 'Financial', day: '1-2' },
    { task: 'Buy essentials (toiletries, groceries)', priority: 'high', category: 'Living', day: '1-2' },
    { task: 'Start apartment hunting', priority: 'high', category: 'Housing', day: '2-3' },
    { task: 'Visit neighborhoods you researched', priority: 'medium', category: 'Housing', day: '2-5' },
    { task: 'Open Georgian bank account', priority: 'high', category: 'Financial', day: '3-5' },
    { task: 'Get local transport card', priority: 'medium', category: 'Transport', day: '3-5' },
    { task: 'Find nearest supermarket, pharmacy, ATM', priority: 'medium', category: 'Living', day: '2-4' },
    { task: 'Connect with expats from Facebook groups', priority: 'low', category: 'Community', day: '5-7' }
  ]

  const firstMonth = [
    { task: 'Sign apartment lease and move in', priority: 'high', category: 'Housing', week: '1-2' },
    { task: 'Register address with authorities', priority: 'high', category: 'Legal', week: '1-2' },
    { task: 'Set up home internet', priority: 'high', category: 'Tech', week: '1-2' },
    { task: 'Buy furniture and household items', priority: 'medium', category: 'Living', week: '1-3' },
    { task: 'Find local doctor and dentist', priority: 'medium', category: 'Health', week: '2-3' },
    { task: 'Explore your neighborhood thoroughly', priority: 'low', category: 'Living', week: '1-4' },
    { task: 'Find favorite restaurants and cafes', priority: 'low', category: 'Living', week: '1-4' },
    { task: 'Join gym or sports club (if desired)', priority: 'low', category: 'Lifestyle', week: '2-4' },
    { task: 'Attend expat meetups or events', priority: 'medium', category: 'Community', week: '2-4' },
    { task: 'Start Georgian language classes', priority: 'medium', category: 'Language', week: '2-4' },
    { task: 'Set up routine (grocery shopping, etc.)', priority: 'medium', category: 'Living', week: '2-4' },
    { task: 'Visit key places (Old Town, Narikala, etc.)', priority: 'low', category: 'Tourism', week: '1-4' }
  ]

  const essentialDocuments = [
    'Passport (valid 6+ months)',
    'Visa documents (if required)',
    'Birth certificate (apostilled)',
    'Marriage certificate (if applicable, apostilled)',
    'University diplomas (apostilled)',
    'Medical records and prescriptions',
    'Bank statements (last 3 months)',
    'Proof of accommodation',
    'Travel insurance documents',
    'International driver\'s license',
    'Passport photos (10-15 copies)',
    'Emergency contact list'
  ]

  const packingEssentials = [
    'Passport and important documents',
    'Laptop and chargers',
    'Phone and chargers',
    'Medications (3-month supply)',
    'Clothes for first 2 weeks',
    'Toiletries',
    'Adapters (Type C & F for Georgia)',
    'Cash (USD/EUR/GEL)',
    'Credit/debit cards',
    'Glasses/contacts',
    'Any special items hard to find in Georgia'
  ]

  const budgetEstimate = [
    { item: 'Flight', cost: '$300-800', notes: 'Depends on origin' },
    { item: 'First month rent', cost: '$400-1000', notes: 'Plus deposit' },
    { item: 'Initial groceries & supplies', cost: '$200-300', notes: 'Setting up home' },
    { item: 'SIM card & internet setup', cost: '$50-100', notes: 'First month' },
    { item: 'Transportation', cost: '$50-100', notes: 'First month' },
    { item: 'Eating out & exploring', cost: '$200-400', notes: 'First month' },
    { item: 'Furniture & household', cost: '$300-800', notes: 'If unfurnished' },
    { item: 'Emergency buffer', cost: '$500-1000', notes: 'Unexpected costs' },
    { item: 'Total estimate', cost: '$2000-4500', notes: 'First month all-in' }
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='10' y='10' width='15' height='15'/%3E%3Crect x='35' y='10' width='15' height='15'/%3E%3Crect x='10' y='35' width='15' height='15'/%3E%3Crect x='35' y='35' width='15' height='15'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Plane className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Moving to Tbilisi Checklist</h1>
              <div className="flex items-center text-blue-200">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Complete Timeline & Tasks</span>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Your step-by-step guide to relocating to Tbilisi. From 6 months before your move to settling in during your first month.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Download Button */}
        <div className="mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white text-center">
          <Download className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Download Complete Checklist</h2>
          <p className="mb-4 text-blue-100">Get the full moving checklist as a printable PDF</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
            <Download className="h-5 w-5 mr-2" />
            Download PDF Checklist
          </button>
          <p className="text-sm text-blue-200 mt-3">Free • Printable • Comprehensive</p>
        </div>

        {/* Timeline Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Moving Timeline</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center border-t-4 border-red-500">
              <Calendar className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">6 Months</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Before Moving</div>
              <div className="text-3xl font-bold text-red-500 mt-2">{sixMonthsBefore.length}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">tasks</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center border-t-4 border-orange-500">
              <Calendar className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">3 Months</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Before Moving</div>
              <div className="text-3xl font-bold text-orange-500 mt-2">{threeMonthsBefore.length}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">tasks</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center border-t-4 border-yellow-500">
              <Calendar className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">1 Month</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Before Moving</div>
              <div className="text-3xl font-bold text-yellow-500 mt-2">{oneMonthBefore.length}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">tasks</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center border-t-4 border-green-500">
              <Home className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">First Month</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">In Tbilisi</div>
              <div className="text-3xl font-bold text-green-500 mt-2">{firstWeek.length + firstMonth.length}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">tasks</div>
            </div>
          </div>
        </div>

        {/* 6 Months Before */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full mr-4">
              <Calendar className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">6 Months Before Moving</h2>
              <p className="text-gray-600 dark:text-gray-400">Research and preparation phase</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {sixMonthsBefore.map((item, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900 dark:text-white">{item.task}</span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(item.priority)}`}>
                          {item.priority}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Months Before */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full mr-4">
              <Calendar className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">3 Months Before Moving</h2>
              <p className="text-gray-600 dark:text-gray-400">Booking and logistics phase</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {threeMonthsBefore.map((item, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900 dark:text-white">{item.task}</span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(item.priority)}`}>
                          {item.priority}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 1 Month Before */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full mr-4">
              <Calendar className="h-8 w-8 text-yellow-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">1 Month Before Moving</h2>
              <p className="text-gray-600 dark:text-gray-400">Final preparations</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {oneMonthBefore.map((item, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900 dark:text-white">{item.task}</span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(item.priority)}`}>
                          {item.priority}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* First Week */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4">
              <Plane className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">First Week in Tbilisi</h2>
              <p className="text-gray-600 dark:text-gray-400">Essential tasks upon arrival</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {firstWeek.map((item, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900 dark:text-white">{item.task}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">Day {item.day}</span>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(item.priority)}`}>
                            {item.priority}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* First Month */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
              <Home className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">First Month Tasks</h2>
              <p className="text-gray-600 dark:text-gray-400">Settling in and establishing routine</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {firstMonth.map((item, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900 dark:text-white">{item.task}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">Week {item.week}</span>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(item.priority)}`}>
                            {item.priority}
                          </span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Essential Documents */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <FileText className="h-8 w-8 text-purple-600 mr-3" />
            Essential Documents Checklist
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {essentialDocuments.map((doc, index) => (
                <div key={index} className="flex items-start p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packing Essentials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Package className="h-8 w-8 text-orange-600 mr-3" />
            Carry-On Packing Essentials
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {packingEssentials.map((item, index) => (
                <div key={index} className="flex items-start p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-900 dark:text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Budget Estimate */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <CreditCard className="h-8 w-8 text-green-600 mr-3" />
            First Month Budget Estimate
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Item</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Cost</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {budgetEstimate.map((item, index) => (
                    <tr key={index} className={item.item === 'Total estimate' ? 'bg-green-50 dark:bg-green-900/20 font-bold' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{item.item}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">{item.cost}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Pro Tips for Moving</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Start early - the more time you have, the less stressful it will be</li>
                <li>• Join expat groups before you move to get real-time advice</li>
                <li>• Don't bring too much - you can buy most things in Tbilisi</li>
                <li>• Keep digital copies of all important documents</li>
                <li>• Have at least $3000-5000 saved as a buffer</li>
                <li>• Book temporary accommodation for 1-2 weeks to find permanent housing</li>
                <li>• Get a Georgian SIM card immediately upon arrival</li>
                <li>• Be patient - settling in takes time, usually 2-3 months</li>
                <li>• Connect with other expats - they're your best resource</li>
                <li>• Learn basic Georgian phrases - locals appreciate the effort</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
