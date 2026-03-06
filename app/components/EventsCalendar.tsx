'use client'

import { useState } from 'react'
import { Calendar, MapPin, Clock, Users, Tag, ExternalLink, Filter } from 'lucide-react'

interface Event {
  id: string
  title: string
  date: Date
  time: string
  location: string
  address: string
  category: 'meetup' | 'festival' | 'cultural' | 'networking' | 'sports' | 'food'
  description: string
  attendees?: number
  price: string
  organizer: string
  link?: string
  imageUrl?: string
}

const EventsCalendar = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'upcoming' | 'month'>('upcoming')

  const categories = [
    { id: 'all', name: 'All Events', color: 'bg-gray-500' },
    { id: 'meetup', name: 'Expat Meetups', color: 'bg-blue-500' },
    { id: 'festival', name: 'Festivals', color: 'bg-purple-500' },
    { id: 'cultural', name: 'Cultural Events', color: 'bg-pink-500' },
    { id: 'networking', name: 'Networking', color: 'bg-green-500' },
    { id: 'sports', name: 'Sports & Fitness', color: 'bg-orange-500' },
    { id: 'food', name: 'Food & Wine', color: 'bg-red-500' }
  ]

  const events: Event[] = [
    {
      id: '1',
      title: 'Tbilisi Expat Meetup - March Edition',
      date: new Date('2026-03-15'),
      time: '19:00 - 22:00',
      location: 'Fabrika Hostel',
      address: '8 Egnate Ninoshvili St, Tbilisi',
      category: 'meetup',
      description: 'Monthly gathering for expats to network, share experiences, and make friends. Casual atmosphere with drinks and snacks.',
      attendees: 45,
      price: 'Free',
      organizer: 'Tbilisi Expat Community',
      link: 'https://facebook.com/events/example'
    },
    {
      id: '2',
      title: 'Tbilisoba City Festival',
      date: new Date('2026-10-15'),
      time: '10:00 - 23:00',
      location: 'Old Town Tbilisi',
      address: 'Various locations in Old Tbilisi',
      category: 'festival',
      description: 'Annual celebration of Tbilisi with traditional music, dance, food, and wine. Street performances throughout the old town.',
      attendees: 50000,
      price: 'Free',
      organizer: 'Tbilisi City Hall'
    },
    {
      id: '3',
      title: 'Georgian Wine Tasting Evening',
      date: new Date('2026-03-20'),
      time: '18:00 - 21:00',
      location: 'Vino Underground',
      address: '15 Galaktion Tabidze St, Tbilisi',
      category: 'food',
      description: 'Guided tasting of 8 Georgian wines from different regions. Learn about qvevri winemaking and traditional methods.',
      attendees: 20,
      price: '₾80',
      organizer: 'Georgian Wine Association',
      link: 'https://example.com/wine-tasting'
    },
    {
      id: '4',
      title: 'Digital Nomads Coffee Meetup',
      date: new Date('2026-03-12'),
      time: '10:00 - 12:00',
      location: 'Stamba Hotel',
      address: '14 Merab Kostava St, Tbilisi',
      category: 'networking',
      description: 'Weekly meetup for remote workers and digital nomads. Share tips, collaborate, and network over coffee.',
      attendees: 15,
      price: 'Free (buy your own coffee)',
      organizer: 'Tbilisi Digital Nomads'
    },
    {
      id: '5',
      title: 'Georgian National Ballet Performance',
      date: new Date('2026-03-25'),
      time: '19:30 - 21:30',
      location: 'Rustaveli Theatre',
      address: '17 Rustaveli Ave, Tbilisi',
      category: 'cultural',
      description: 'Traditional Georgian dance performance featuring the world-famous Georgian National Ballet. Stunning costumes and choreography.',
      attendees: 500,
      price: '₾30-100',
      organizer: 'Georgian National Ballet'
    },
    {
      id: '6',
      title: 'Hiking Trip to Kazbegi',
      date: new Date('2026-03-18'),
      time: '07:00 - 19:00',
      location: 'Meeting Point: Freedom Square',
      address: 'Freedom Square, Tbilisi',
      category: 'sports',
      description: 'Day trip to Kazbegi with guided hike to Gergeti Trinity Church. Transportation, guide, and lunch included.',
      attendees: 25,
      price: '₾120',
      organizer: 'Tbilisi Hiking Club',
      link: 'https://example.com/kazbegi-hike'
    },
    {
      id: '7',
      title: 'Tbilisi Art Week Opening',
      date: new Date('2026-05-10'),
      time: '18:00 - 23:00',
      location: 'Multiple Galleries',
      address: 'Various locations in Tbilisi',
      category: 'cultural',
      description: 'Opening night of Tbilisi Art Week featuring contemporary Georgian and international artists. Gallery tours and exhibitions.',
      attendees: 1000,
      price: 'Free',
      organizer: 'Tbilisi Art Foundation'
    },
    {
      id: '8',
      title: 'Language Exchange Evening',
      date: new Date('2026-03-14'),
      time: '19:00 - 21:00',
      location: 'Prospero\'s Books',
      address: '34 Rustaveli Ave, Tbilisi',
      category: 'meetup',
      description: 'Practice Georgian with native speakers and help them with English. Friendly atmosphere with games and activities.',
      attendees: 30,
      price: 'Free',
      organizer: 'Tbilisi Language Exchange'
    },
    {
      id: '9',
      title: 'Startup Networking Night',
      date: new Date('2026-03-22'),
      time: '18:30 - 21:30',
      location: 'Impact Hub Tbilisi',
      address: '7 Bambis Rigi St, Tbilisi',
      category: 'networking',
      description: 'Connect with entrepreneurs, investors, and startup enthusiasts. Pitch sessions and networking opportunities.',
      attendees: 60,
      price: '₾20',
      organizer: 'Startup Georgia',
      link: 'https://example.com/startup-night'
    },
    {
      id: '10',
      title: 'Khachapuri Cooking Class',
      date: new Date('2026-03-16'),
      time: '15:00 - 18:00',
      location: 'Georgian Cooking Studio',
      address: '23 Atoneli St, Tbilisi',
      category: 'food',
      description: 'Learn to make traditional Georgian khachapuri from a local chef. Hands-on class with recipe booklet included.',
      attendees: 12,
      price: '₾90',
      organizer: 'Taste of Georgia',
      link: 'https://example.com/cooking-class'
    }
  ]

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(e => e.category === selectedCategory)

  const upcomingEvents = filteredEvents
    .filter(e => e.date >= new Date())
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  const getCategoryColor = (category: string) => {
    return categories.find(c => c.id === category)?.color || 'bg-gray-500'
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center mb-4 p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full">
          <Calendar className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Tbilisi Events Calendar
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover expat meetups, cultural festivals, and community events happening in Tbilisi
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-semibold text-gray-700">Filter by Category:</span>
          </div>
          <div className="text-sm text-gray-600">
            {upcomingEvents.length} upcoming events
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === cat.id
                  ? `${cat.color} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`${getCategoryColor(event.category)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {categories.find(c => c.id === event.category)?.name}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">{event.price}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{formatDate(event.date)}</div>
                    <div className="text-xs text-gray-600">{event.time}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{event.location}</div>
                    <div className="text-xs text-gray-600">{event.address}</div>
                  </div>
                </div>
                {event.attendees && (
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div className="text-sm text-gray-700">
                      {event.attendees} {event.attendees === 1 ? 'person' : 'people'} interested
                    </div>
                  </div>
                )}
                <div className="flex items-center space-x-3">
                  <Tag className="h-5 w-5 text-green-600" />
                  <div className="text-sm text-gray-700">
                    Organized by {event.organizer}
                  </div>
                </div>
              </div>

              {event.link && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  <span>View Event Details</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {upcomingEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No upcoming events</h3>
          <p className="text-gray-600">Check back soon for new events in this category!</p>
        </div>
      )}
    </div>
  )
}

export default EventsCalendar
