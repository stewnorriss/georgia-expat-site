'use client'

import { useState } from 'react'
import { Users, Search, ExternalLink } from 'lucide-react'

interface Community {
  id: number
  name: string
  description: string
  members: number
  category: string
  platform: string
  link: string
  location?: string
  active: boolean
}

const communities: Community[] = [
  {
    id: 1,
    name: 'Tbilisi Expats',
    description: 'Largest expat community in Georgia. Daily discussions, events, and support',
    members: 15000,
    category: 'General',
    platform: 'Facebook',
    link: 'https://facebook.com/groups/tbilisiexpats',
    active: true
  },
  {
    id: 2,
    name: 'Digital Nomads Georgia',
    description: 'Remote workers and digital nomads living in Tbilisi',
    members: 8500,
    category: 'Professional',
    platform: 'Facebook',
    link: 'https://facebook.com/groups/digitalnomadsgeorgia',
    active: true
  },
  {
    id: 3,
    name: 'Tbilisi Language Exchange',
    description: 'Practice Georgian, English, Russian, and other languages',
    members: 3200,
    category: 'Language',
    platform: 'Telegram',
    link: 'https://t.me/tbilisilanguage',
    active: true
  },
  {
    id: 4,
    name: 'Expat Women in Tbilisi',
    description: 'Support network for female expats in Georgia',
    members: 4500,
    category: 'Social',
    platform: 'Facebook',
    link: 'https://facebook.com/groups/expatwomentbilisi',
    active: true
  },
  {
    id: 5,
    name: 'Tbilisi Startup Community',
    description: 'Entrepreneurs, investors, and startup enthusiasts',
    members: 2800,
    category: 'Professional',
    platform: 'Slack',
    link: 'https://tbilisistartups.slack.com',
    active: true
  },
  {
    id: 6,
    name: 'Hiking & Outdoor Georgia',
    description: 'Group hikes, camping trips, and outdoor adventures',
    members: 5600,
    category: 'Activities',
    platform: 'Facebook',
    link: 'https://facebook.com/groups/hikinggeorgia',
    active: true
  },
  {
    id: 7,
    name: 'Tbilisi Food Lovers',
    description: 'Restaurant recommendations, food events, and culinary experiences',
    members: 6200,
    category: 'Food',
    platform: 'Instagram',
    link: 'https://instagram.com/tbilisifoodlovers',
    active: true
  },
  {
    id: 8,
    name: 'Parents in Tbilisi',
    description: 'Expat parents sharing tips, playdates, and school information',
    members: 1800,
    category: 'Family',
    platform: 'WhatsApp',
    link: 'https://chat.whatsapp.com/tbilisiparents',
    active: true
  },
  {
    id: 9,
    name: 'Tbilisi Housing & Roommates',
    description: 'Find apartments, roommates, and housing advice',
    members: 7500,
    category: 'Housing',
    platform: 'Facebook',
    link: 'https://facebook.com/groups/tbilisihousing',
    active: true
  },
  {
    id: 10,
    name: 'Georgian Wine Enthusiasts',
    description: 'Explore Georgian wine culture, tastings, and vineyard tours',
    members: 3400,
    category: 'Food',
    platform: 'Meetup',
    link: 'https://meetup.com/georgian-wine',
    active: true
  }
]

export default function ExpatCommunityFinder() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'General', 'Professional', 'Social', 'Language', 'Activities', 'Food', 'Family', 'Housing']

  const filteredCommunities = communities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         community.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || community.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Facebook': return 'bg-blue-600'
      case 'Telegram': return 'bg-sky-500'
      case 'WhatsApp': return 'bg-green-600'
      case 'Slack': return 'bg-purple-600'
      case 'Instagram': return 'bg-pink-600'
      case 'Meetup': return 'bg-red-600'
      default: return 'bg-gray-600'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Users className="h-8 w-8 text-red-600 mr-3" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Expat Community Finder</h2>
          <p className="text-gray-600 text-sm">Connect with {communities.length} active communities</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search communities..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat === 'all' ? 'All Categories' : cat}
          </button>
        ))}
      </div>

      {/* Communities Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredCommunities.map(community => (
          <div
            key={community.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all hover:border-red-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-900 mr-2">{community.name}</h3>
                  {community.active && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Active
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-3">{community.description}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {community.members.toLocaleString()}
                </div>
                <span className={`${getPlatformColor(community.platform)} text-white px-2 py-1 rounded text-xs font-semibold`}>
                  {community.platform}
                </span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                  {community.category}
                </span>
              </div>
            </div>

            <a
              href={community.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm"
            >
              Join Community
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        ))}
      </div>

      {filteredCommunities.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p>No communities found matching your search</p>
        </div>
      )}

      {/* Community Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600">
            {communities.reduce((sum, c) => sum + c.members, 0).toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Total Members</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{communities.length}</div>
          <div className="text-sm text-gray-600">Active Groups</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">
            {communities.filter(c => c.active).length}
          </div>
          <div className="text-sm text-gray-600">Daily Active</div>
        </div>
      </div>
    </div>
  )
}
