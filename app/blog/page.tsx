'use client'

import { useState } from 'react'
import { Calendar, User, Clock, ArrowRight, BookOpen, Plus, Image, Video, Edit, Trash2, Eye, Search, Filter } from 'lucide-react'
import Link from 'next/link'
import { useBlog } from '../contexts/BlogContext'

const BlogPage = () => {
  const { posts: allPosts, getPublishedPosts, searchPosts, getPostsByCategory } = useBlog()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Get published posts
  const publishedPosts = getPublishedPosts()
  
  // Filter posts based on search and category
  const getFilteredPosts = () => {
    let filteredPosts = publishedPosts
    
    if (searchQuery) {
      filteredPosts = searchPosts(searchQuery).filter(post => post.published)
    }
    
    if (selectedCategory !== 'all') {
      // Convert category value back to display name for filtering
      const categoryName = categories.find(cat => cat.value === selectedCategory)?.label
      if (categoryName) {
        filteredPosts = filteredPosts.filter(post => post.category === categoryName)
      }
    }
    
    return filteredPosts
  }
  
  const posts = getFilteredPosts()
  
  // Get unique categories from published posts with counts
  const categoryList = ['all', ...Array.from(new Set(publishedPosts.map(post => post.category)))]
  const categories = categoryList.map(cat => ({
    value: cat === 'all' ? 'all' : cat.toLowerCase().replace(' & ', '-').replace(' ', '-'),
    label: cat === 'all' ? 'All Posts' : cat,
    count: cat === 'all' ? publishedPosts.length : publishedPosts.filter(p => p.category === cat).length
  }))



  // Posts are already filtered to published only in getFilteredPosts

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='10' y='10' width='100' height='4'/%3E%3Crect x='10' y='25' width='80' height='4'/%3E%3Crect x='10' y='40' width='90' height='4'/%3E%3Crect x='10' y='70' width='100' height='4'/%3E%3Crect x='10' y='85' width='75' height='4'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-white/10 p-3 rounded-full mr-4">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Stew's Tbilisi Blog
                </h1>
                <div className="flex items-center text-gray-300">
                  <User className="h-5 w-5 mr-2" />
                  <span>My Personal Journey in Georgia</span>
                </div>
              </div>
            </div>
            <Link 
              href="/blog/admin"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Link>
          </div>
          
          <p className="text-xl max-w-3xl mb-6">
            Follow my adventures living in Tbilisi. Stories, photos, videos, and everything in between 
            as I explore Georgia's incredible capital city.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-3 border border-transparent rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                placeholder="Search my posts..."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Blog Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Posts</span>
                  <span className="font-bold text-gray-900">{posts.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Published</span>
                  <span className="font-bold text-green-600">{publishedPosts.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Drafts</span>
                  <span className="font-bold text-yellow-600">{allPosts.filter(p => !p.published).length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">With Images</span>
                  <span className="font-bold text-purple-600">{posts.filter(p => p.hasImages).length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">With Videos</span>
                  <span className="font-bold text-red-600">{posts.filter(p => p.hasVideo).length}</span>
                </div>
              </div>
            </div>

            {/* Categories Filter */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.value
                        ? 'bg-blue-100 text-blue-800 font-semibold'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.label}</span>
                      <span className="text-sm">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">About This Blog</h3>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Welcome to my personal blog about life in Tbilisi! I share my experiences, 
                discoveries, and adventures as I explore this amazing city and Georgian culture.
              </p>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'all' ? 'All Posts' : categories.find(c => c.value === selectedCategory)?.label}
                <span className="text-gray-500 text-lg ml-2">({posts.length})</span>
              </h2>
              <Link 
                href="/blog/admin"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm font-semibold"
              >
                <Plus className="h-4 w-4 mr-2" />
                Write New Post
              </Link>
            </div>

            {posts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h3>
                <p className="text-gray-600 mb-6">Start sharing your Tbilisi journey by creating your first blog post!</p>
                <Link 
                  href="/blog/admin"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center font-semibold"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Post
                </Link>
              </div>
            ) : (
              <div className="grid gap-8">
                {posts.map((post: any, index: number) => (
                  <article key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="aspect-video md:aspect-square bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          
                          {/* Media Indicators */}
                          <div className="absolute top-4 left-4 flex space-x-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              post.category === 'Personal' ? 'bg-blue-100 text-blue-800' :
                              post.category === 'Travel' ? 'bg-green-100 text-green-800' :
                              post.category === 'Food & Drink' ? 'bg-red-100 text-red-800' :
                              post.category === 'Language' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-purple-100 text-purple-800'
                            }`}>
                              {post.category}
                            </span>
                          </div>

                          <div className="absolute top-4 right-4 flex space-x-1">
                            {post.hasImages && (
                              <div className="bg-white/20 backdrop-blur-sm p-1 rounded">
                                <Image className="h-4 w-4 text-white" />
                              </div>
                            )}
                            {post.hasVideo && (
                              <div className="bg-white/20 backdrop-blur-sm p-1 rounded">
                                <Video className="h-4 w-4 text-white" />
                              </div>
                            )}
                          </div>

                          <div className="absolute bottom-4 left-4">
                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                              post.published 
                                ? 'bg-green-400 text-green-900' 
                                : 'bg-yellow-400 text-yellow-900'
                            }`}>
                              {post.published ? 'Published' : 'Draft'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Link 
                              href={`/blog/${post.id}`}
                              className="flex items-center text-blue-600 hover:text-blue-800 font-semibold group"
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              Read
                            </Link>
                            <Link 
                              href={`/blog/admin?edit=${post.id}`}
                              className="flex items-center text-gray-600 hover:text-gray-800 font-semibold"
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage