'use client'

import { useState } from 'react'
import { Play, Clock, Eye, ThumbsUp, ExternalLink } from 'lucide-react'

interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  views: string
  category: 'neighborhood' | 'cooking' | 'language' | 'interview'
  youtubeId?: string
  url?: string
}

interface VideoContentProps {
  category?: 'neighborhood' | 'cooking' | 'language' | 'interview' | 'all'
  title?: string
  description?: string
}

const VideoContent = ({ category = 'all', title, description }: VideoContentProps) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  const videos: Video[] = [
    // Neighborhood Tours
    {
      id: '1',
      title: 'Vake District Walking Tour',
      description: 'Explore the upscale Vake neighborhood with its parks, cafes, and residential areas',
      thumbnail: '🏘️',
      duration: '15:30',
      views: '12K',
      category: 'neighborhood',
      url: '#'
    },
    {
      id: '2',
      title: 'Old Tbilisi Historic Quarter',
      description: 'Discover the charm of Old Town with its narrow streets, sulfur baths, and ancient architecture',
      thumbnail: '🏛️',
      duration: '20:15',
      views: '25K',
      category: 'neighborhood',
      url: '#'
    },
    {
      id: '3',
      title: 'Saburtalo Modern Living',
      description: 'Tour the modern Saburtalo district popular with expats and young professionals',
      thumbnail: '🏢',
      duration: '12:45',
      views: '8K',
      category: 'neighborhood',
      url: '#'
    },
    
    // Cooking Tutorials
    {
      id: '4',
      title: 'How to Make Khachapuri',
      description: 'Step-by-step guide to making Georgia\'s famous cheese bread at home',
      thumbnail: '🥖',
      duration: '18:20',
      views: '45K',
      category: 'cooking',
      url: '#'
    },
    {
      id: '5',
      title: 'Traditional Khinkali Recipe',
      description: 'Learn to make authentic Georgian dumplings from a local chef',
      thumbnail: '🥟',
      duration: '22:10',
      views: '38K',
      category: 'cooking',
      url: '#'
    },
    {
      id: '6',
      title: 'Georgian Wine Making Process',
      description: 'Discover the ancient qvevri method of Georgian winemaking',
      thumbnail: '🍷',
      duration: '25:30',
      views: '15K',
      category: 'cooking',
      url: '#'
    },
    
    // Language Pronunciation
    {
      id: '7',
      title: 'Georgian Alphabet Pronunciation',
      description: 'Master the 33 letters of the Georgian alphabet with native speaker guidance',
      thumbnail: '🔤',
      duration: '14:45',
      views: '32K',
      category: 'language',
      url: '#'
    },
    {
      id: '8',
      title: 'Common Georgian Phrases',
      description: 'Learn essential phrases for daily life in Tbilisi with proper pronunciation',
      thumbnail: '💬',
      duration: '16:20',
      views: '28K',
      category: 'language',
      url: '#'
    },
    {
      id: '9',
      title: 'Georgian Numbers & Counting',
      description: 'Practice counting and using numbers in Georgian for shopping and daily activities',
      thumbnail: '🔢',
      duration: '10:15',
      views: '18K',
      category: 'language',
      url: '#'
    },
    
    // Expat Interviews
    {
      id: '10',
      title: 'Digital Nomad Life in Tbilisi',
      description: 'Interview with a remote worker who moved to Georgia in 2023',
      thumbnail: '💻',
      duration: '28:40',
      views: '22K',
      category: 'interview',
      url: '#'
    },
    {
      id: '11',
      title: 'Family Moving to Georgia',
      description: 'A British family shares their relocation experience and tips',
      thumbnail: '👨‍👩‍👧‍👦',
      duration: '32:15',
      views: '19K',
      category: 'interview',
      url: '#'
    },
    {
      id: '12',
      title: 'Teaching English in Tbilisi',
      description: 'American teacher discusses opportunities and lifestyle in Georgia',
      thumbnail: '📚',
      duration: '24:50',
      views: '16K',
      category: 'interview',
      url: '#'
    }
  ]

  const filteredVideos = category === 'all' 
    ? videos 
    : videos.filter(v => v.category === category)

  const categoryColors = {
    neighborhood: 'from-blue-500 to-blue-600',
    cooking: 'from-orange-500 to-red-600',
    language: 'from-purple-500 to-pink-600',
    interview: 'from-green-500 to-teal-600',
    all: 'from-gray-500 to-gray-600'
  }

  const categoryLabels = {
    neighborhood: 'Neighborhood Tours',
    cooking: 'Cooking Tutorials',
    language: 'Language Lessons',
    interview: 'Expat Interviews',
    all: 'All Videos'
  }

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className={`inline-flex items-center justify-center mb-4 p-3 bg-gradient-to-r ${categoryColors[category]} rounded-full`}>
            <Play className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {title || categoryLabels[category]}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description || 'Watch curated video content to help you navigate life in Tbilisi'}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <div className={`relative h-48 bg-gradient-to-br ${categoryColors[video.category]} flex items-center justify-center overflow-hidden`}>
                <div className="text-6xl">{video.thumbnail}</div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-red-600" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-semibold flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                  {video.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {video.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {video.views} views
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      95%
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <div className="text-4xl mb-3">🎬</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Video Content Coming Soon!</h3>
          <p className="text-gray-600 mb-4">
            We're currently producing high-quality video content for each category. 
            Subscribe to get notified when new videos are released!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all">
              Notify Me
            </button>
          </div>
        </div>

        {/* Video Modal Placeholder */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="bg-white rounded-xl max-w-4xl w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedVideo.title}</h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-6xl mb-4">{selectedVideo.thumbnail}</div>
                  <p className="text-gray-600 text-lg">Video player will be embedded here</p>
                  <p className="text-sm text-gray-500 mt-2">YouTube/Vimeo integration coming soon</p>
                </div>
              </div>
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoContent
