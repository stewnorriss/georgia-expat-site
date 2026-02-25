'use client'

import { useState } from 'react'
import { Calendar, MapPin, Clock, Users, ExternalLink, Filter } from 'lucide-react'

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  category: 'cultural' | 'social' | 'business' | 'sports' | 'food'
  attendees: number
  description: string
  link?: string
}

const events: Event[] = [
  {
    id: 1,
    title: 'Tbilisi Expat Meetup',
    date: '2025-11-15',
    time: '19:00',
    location: 'Fabrika Hostel',
    category: 'social',
    attendees: 45,
    description: 'Monthly gathering for expats to network and share experiences',
    link: 'https://facebook.com/events'
  },
  {
    id: 2,
    title: 'Georgian Wine Tasting',
    date: '2025-11-18',
    time: '18:00',
    location: 'Vino Underground',
    category: 'food',
    attendees: 30,
    description: 'Explore traditional Georgian wines with expert sommelier',
    link: 'https://vinounderground.ge'
  },
  {
    id: 3,
    title: 'Startup Networking Night',
    date: '2025-11-20',
    time: '18:30',
    location: 'Impact Hub Tbilisi',
    category: 'business',
    attendees: 60,
    description: 'Connect with entrepreneurs and investors in Tbilisi tech scene',
    link: 'https://impacthub.ge'
  },
  {
    id: 4,
    title: 'Hiking to Mtatsminda',
    date: '2025-11-22',
    time: '10:00',
    location: 'Mtatsminda Park',
    category: 'sports',
    attendees: 25,
    description: 'Group hike with stunning views of Tbilisi',
  },
  {
    id: 5,
    title: 'Georgian Folk Dance Show',
    date: '2025-11-25',
    time: '20:00',
    location: 'Rustaveli Theatre',
    category: 'cultural',
    attendees: 150,
    description: 'Traditional Georgian dance performance by national ensemble',
    link: 'https://rustaveli-theatre.ge'
  },
  {
    id: 6,
    title: 'Language Exchange Cafe',
    date: '2025-11-27',
    time: '17:00',
    location: 'Cafe Leila',
    category: 'social',
    attendees: 35,
    description: 'Practice Georgian and English with locals and expats',
  }
]

export default function EventCalendar() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All Events', color: 'bg-gray-500' },
    { id: 'social', label: 'Social', color: 'bg-blue-500' },
    { id: 'cultural', label: 'Cultural', color: 'bg-purple-500' },
    { id: 'business', label: 'Business', color: 'bg-green-500' },
    { id: 'sports', label: 'Sports', color: 'bg-orange-500' },
    { id: 'food', label: 'Food & Wine', color: 'bg-red-500' }
  ]

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(e => e.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category)
    return cat?.color || 'bg-gray-500'
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Calendar className="h-8 w-8 text-red-600 mr-3" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="text-gray-600 text-sm">Connect with the expat community</p>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Filter className="h-4 w-4 mr-1" />
          {filteredEvents.length} events
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === cat.id
                ? `${cat.color} text-white shadow-lg`
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {filteredEvents.map(event => (
          <div
            key={event.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all hover:border-red-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className={`${getCategoryColor(event.category)} text-white text-xs px-2 py-1 rounded-full mr-2`}>
                    {event.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">{event.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2 text-red-600" />
                {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-blue-600" />
                {event.time}
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-green-600" />
                {event.location}
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-4 w-4 mr-2 text-purple-600" />
                {event.attendees} attending
              </div>
            </div>

            {event.link && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm"
                >
                  Learn More & RSVP
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p>No events found in this category</p>
        </div>
      )}
    </div>
  )
}
