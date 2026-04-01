'use client'

import { useState } from 'react'
import { Phone, MapPin, AlertTriangle, Shield, Users, Globe, Clock, Heart, Car, Home, Zap, FileText, CheckCircle, ExternalLink } from 'lucide-react'
import PageHero from '../components/PageHero'

export default function EmergencyPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const emergencyNumbers = [
    {
      service: 'Police',
      number: '112',
      georgian: 'პოლიცია',
      description: 'General emergency line for police assistance',
      available: '24/7',
      category: 'police'
    },
    {
      service: 'Ambulance',
      number: '112',
      georgian: 'სასწრაფო დახმარება',
      description: 'Medical emergencies and ambulance services',
      available: '24/7',
      category: 'medical'
    },
    {
      service: 'Fire Department',
      number: '112',
      georgian: 'მეხანძრეები',
      description: 'Fire emergencies and rescue services',
      available: '24/7',
      category: 'fire'
    },
    {
      service: 'Tourist Police',
      number: '126',
      georgian: 'ტურისტული პოლიცია',
      description: 'Specialized police for tourist assistance',
      available: '24/7',
      category: 'police'
    },
    {
      service: 'Gas Emergency',
      number: '115',
      georgian: 'გაზის სამსახური',
      description: 'Gas leak and gas-related emergencies',
      available: '24/7',
      category: 'utilities'
    }
  ]

  const embassies = [
    {
      country: 'United States',
      address: '11 George Balanchine St, Tbilisi 0131',
      phone: '+995 32 227 70 00',
      emergency: '+995 32 227 70 00',
      website: 'ge.usembassy.gov',
      hours: 'Mon-Fri: 9:00-18:00'
    },
    {
      country: 'United Kingdom',
      address: '51 Krtsanisi St, Tbilisi 0114',
      phone: '+995 32 274 74 00',
      emergency: '+995 32 274 74 00',
      website: 'gov.uk/world/georgia',
      hours: 'Mon-Fri: 9:00-17:30'
    },
    {
      country: 'Germany',
      address: '166 Agmashenebeli Ave, Tbilisi 0102',
      phone: '+995 32 244 73 00',
      emergency: '+995 32 244 73 00',
      website: 'tiflis.diplo.de',
      hours: 'Mon-Fri: 9:00-17:00'
    },
    {
      country: 'Canada',
      address: '34 Chavchavadze Ave, Tbilisi 0179',
      phone: '+995 32 225 67 00',
      emergency: '+995 32 225 67 00',
      website: 'canada.ca',
      hours: 'Mon-Fri: 9:00-17:00'
    }
  ]

  const hospitals = [
    {
      name: 'Aversi Clinic',
      address: '29a Pekini Ave, Tbilisi',
      phone: '+995 32 2 24 24 25',
      emergency: 'Yes',
      english: 'Yes',
      insurance: 'International accepted',
      specialties: ['Emergency', 'Surgery', 'Cardiology', 'Pediatrics']
    },
    {
      name: 'New Hospitals (Kakheti Highway)',
      address: '21 Kakheti Highway, Tbilisi',
      phone: '+995 32 2 25 25 25',
      emergency: 'Yes',
      english: 'Yes',
      insurance: 'International accepted',
      specialties: ['Emergency', 'Trauma', 'ICU', 'Surgery']
    },
    {
      name: 'Tbilisi Heart and Vascular Clinic',
      address: '120 Vazha-Pshavela Ave, Tbilisi',
      phone: '+995 32 2 25 02 02',
      emergency: 'Cardiac only',
      english: 'Yes',
      insurance: 'International accepted',
      specialties: ['Cardiology', 'Cardiac Surgery', 'Vascular Surgery']
    },
    {
      name: 'Acad. O. Zhiuli Emergency Medicine Center',
      address: '1 L. Asatiani St, Tbilisi',
      phone: '+995 32 2 18 45 45',
      emergency: 'Yes',
      english: 'Limited',
      insurance: 'State insurance',
      specialties: ['Emergency', 'Trauma', 'Poison Control']
    }
  ]

  const emergencyPhrases = [
    {
      english: 'Help!',
      georgian: 'დახმარება!',
      pronunciation: 'dakh-ma-re-ba',
      category: 'basic'
    },
    {
      english: 'Call the police!',
      georgian: 'პოლიციას დაურეკეთ!',
      pronunciation: 'po-li-tsi-as dau-re-ket',
      category: 'basic'
    },
    {
      english: 'I need a doctor',
      georgian: 'ექიმი მჭირდება',
      pronunciation: 'e-ki-mi m-chir-de-ba',
      category: 'medical'
    },
    {
      english: 'Where is the hospital?',
      georgian: 'სად არის საავადმყოფო?',
      pronunciation: 'sad a-ris sa-a-vad-m-ko-po',
      category: 'medical'
    },
    {
      english: 'I don\'t speak Georgian',
      georgian: 'ქართულად არ ვიცი',
      pronunciation: 'kar-tu-lad ar vi-tsi',
      category: 'basic'
    },
    {
      english: 'Please call my embassy',
      georgian: 'ჩემს საელჩოს დაურეკეთ',
      pronunciation: 'chems sa-el-chos dau-re-ket',
      category: 'basic'
    }
  ]

  const safetyTips = [
    {
      category: 'General Safety',
      icon: Shield,
      tips: [
        'Keep copies of important documents in separate locations',
        'Register with your embassy upon arrival',
        'Share your location with trusted contacts regularly',
        'Keep emergency numbers saved in your phone',
        'Learn basic Georgian emergency phrases'
      ]
    },
    {
      category: 'Natural Disasters',
      icon: AlertTriangle,
      tips: [
        'Georgia is in an earthquake zone - know evacuation routes',
        'Heavy rains can cause flooding in Tbilisi - avoid underpasses',
        'Mountain weather changes quickly - check forecasts',
        'Landslides possible in mountainous areas during heavy rain',
        'Keep emergency supplies: water, food, flashlight, radio'
      ]
    },
    {
      category: 'Personal Security',
      icon: Users,
      tips: [
        'Avoid displaying expensive items in public',
        'Use official taxis or ride-sharing apps',
        'Stay in well-lit areas at night',
        'Trust your instincts - if something feels wrong, leave',
        'Keep some cash hidden separately from your main wallet'
      ]
    },
    {
      category: 'Health & Medical',
      icon: Heart,
      tips: [
        'Carry health insurance information at all times',
        'Know your blood type and any allergies',
        'Keep a list of medications you take',
        'Drink bottled water in rural areas',
        'Be cautious with street food until your stomach adjusts'
      ]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Categories', count: emergencyNumbers.length },
    { id: 'police', name: 'Police', count: emergencyNumbers.filter(n => n.category === 'police').length },
    { id: 'medical', name: 'Medical', count: emergencyNumbers.filter(n => n.category === 'medical').length },
    { id: 'fire', name: 'Fire & Rescue', count: emergencyNumbers.filter(n => n.category === 'fire').length },
    { id: 'utilities', name: 'Utilities', count: emergencyNumbers.filter(n => n.category === 'utilities').length }
  ]

  const filteredNumbers = selectedCategory === 'all' 
    ? emergencyNumbers 
    : emergencyNumbers.filter(number => number.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHero
        title="Emergency & Safety Guide"
        description="Essential emergency information for expats living in Georgia. Keep this information accessible at all times."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Emergency Numbers */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-lg">
          <div className="flex items-center mb-4">
            <Phone className="h-6 w-6 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-red-800">Quick Emergency Numbers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-red-600 mb-2">112</div>
              <div className="font-semibold text-gray-900">Police, Fire, Ambulance</div>
              <div className="text-sm text-gray-600">Universal emergency number</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">126</div>
              <div className="font-semibold text-gray-900">Tourist Police</div>
              <div className="text-sm text-gray-600">Specialized tourist assistance</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-3xl font-bold text-orange-600 mb-2">115</div>
              <div className="font-semibold text-gray-900">Gas Emergency</div>
              <div className="text-sm text-gray-600">Gas leaks and emergencies</div>
            </div>
          </div>
        </div>

        {/* Emergency Numbers Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Emergency Services</h2>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>Most services available 24/7</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="grid gap-4">
            {filteredNumbers.map((number, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{number.service}</h3>
                      <span className="text-sm text-gray-500">{number.georgian}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{number.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {number.available}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600 mb-1">{number.number}</div>
                    <a 
                      href={`tel:${number.number}`}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hospitals Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-6">
            <Heart className="h-6 w-6 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Major Hospitals</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {hospitals.map((hospital, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{hospital.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                    <span className="text-gray-600">{hospital.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <a href={`tel:${hospital.phone}`} className="text-blue-600 hover:underline">
                      {hospital.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      hospital.emergency === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      Emergency: {hospital.emergency}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      hospital.english === 'Yes' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      English: {hospital.english}
                    </span>
                  </div>
                  <div className="text-gray-600">
                    <strong>Insurance:</strong> {hospital.insurance}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {hospital.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embassy Contacts */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-6">
            <Globe className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Embassy Contacts</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {embassies.map((embassy, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{embassy.country} Embassy</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                    <span className="text-gray-600">{embassy.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <a href={`tel:${embassy.phone}`} className="text-blue-600 hover:underline">
                      {embassy.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <ExternalLink className="h-4 w-4 text-gray-400 mr-2" />
                    <a href={`https://${embassy.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {embassy.website}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{embassy.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Phrases */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Emergency Phrases in Georgian</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {emergencyPhrases.map((phrase, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="text-lg font-semibold text-gray-900 mb-1">{phrase.english}</div>
                <div className="text-xl text-purple-600 font-bold mb-1">{phrase.georgian}</div>
                <div className="text-sm text-gray-600 italic">{phrase.pronunciation}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Tips */}
        <div className="grid md:grid-cols-2 gap-6">
          {safetyTips.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <section.icon className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">{section.category}</h3>
              </div>
              <ul className="space-y-3">
                {section.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8 rounded-lg">
          <div className="flex items-center mb-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
            <h3 className="text-lg font-semibold text-yellow-800">Important Notice</h3>
          </div>
          <p className="text-yellow-700">
            This information is provided as a guide. Always verify current contact information and procedures. 
            In a real emergency, call 112 immediately. Keep this page bookmarked and consider printing a copy 
            for offline access.
          </p>
        </div>
      </div>
    </div>
  )
}