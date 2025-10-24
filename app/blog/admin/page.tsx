'use client'

import { useState } from 'react'
import { Plus, Edit, Trash2, Save, X, Eye, Calendar, User, Tag, Image, Video, Upload, FileText, Camera, Play } from 'lucide-react'
import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  published: boolean
  readTime: string
  featuredImage?: string
  images?: string[]
  videos?: string[]
  hasImages: boolean
  hasVideo: boolean
}

export default function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: 'My First Week in Tbilisi',
      excerpt: 'Just arrived in Georgia\'s capital and I\'m already falling in love...',
      content: 'Full content here...',
      author: 'Stew Norriss',
      date: '2024-10-20',
      category: 'Personal',
      published: true,
      readTime: '5 min read',
      hasImages: true,
      hasVideo: false,
      featuredImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center'
    },
    {
      id: 2,
      title: 'Best Coffee Shops I\'ve Discovered',
      excerpt: 'As a coffee enthusiast, I\'ve been exploring Tbilisi\'s amazing cafe scene...',
      content: 'Full content here...',
      author: 'Stew Norriss',
      date: '2024-10-18',
      category: 'Food & Drink',
      published: true,
      readTime: '7 min read',
      hasImages: true,
      hasVideo: false
    }
  ])

  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    author: 'Stew Norriss',
    category: 'Personal',
    published: false,
    images: [],
    videos: [],
    hasImages: false,
    hasVideo: false
  })

  const categories = [
    'Personal',
    'Travel', 
    'Food & Drink',
    'Photography',
    'Language',
    'Culture',
    'Lifestyle',
    'Adventures'
  ]

  const handleCreatePost = () => {
    if (newPost.title && newPost.excerpt && newPost.content) {
      const post: BlogPost = {
        id: Date.now(),
        title: newPost.title,
        excerpt: newPost.excerpt,
        content: newPost.content,
        author: newPost.author || 'Stew Norriss',
        date: new Date().toISOString().split('T')[0],
        category: newPost.category || 'Personal',
        published: newPost.published || false,
        readTime: `${Math.ceil(newPost.content.split(' ').length / 200)} min read`,
        featuredImage: newPost.featuredImage,
        images: newPost.images || [],
        videos: newPost.videos || [],
        hasImages: (newPost.images && newPost.images.length > 0) || !!newPost.featuredImage,
        hasVideo: !!(newPost.videos && newPost.videos.length > 0)
      }
      
      setPosts([post, ...posts])
      setNewPost({
        title: '',
        excerpt: '',
        content: '',
        author: 'Stew Norriss',
        category: 'Personal',
        published: false,
        images: [],
        videos: [],
        hasImages: false,
        hasVideo: false
      })
      setShowNewPostForm(false)
    }
  }

  const handleDeletePost = (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id))
    }
  }

  const togglePublished = (id: number) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, published: !post.published } : post
    ))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      // In a real app, you'd upload to a service like Cloudinary or AWS S3
      const imageUrls = Array.from(files).map(file => URL.createObjectURL(file))
      setNewPost({
        ...newPost,
        images: [...(newPost.images || []), ...imageUrls],
        hasImages: true
      })
    }
  }

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      // In a real app, you'd upload to a service like Cloudinary or AWS S3
      const videoUrls = Array.from(files).map(file => URL.createObjectURL(file))
      setNewPost({
        ...newPost,
        videos: [...(newPost.videos || []), ...videoUrls],
        hasVideo: true
      })
    }
  }

  const handleFeaturedImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setNewPost({
        ...newPost,
        featuredImage: imageUrl,
        hasImages: true
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Blog Admin</h1>
              <p className="text-blue-100 mt-2">Create and manage your personal blog posts with images and videos</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/blog"
                className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Blog
              </Link>
              <button
                onClick={() => setShowNewPostForm(true)}
                className="flex items-center px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Posts</p>
                <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Published</p>
                <p className="text-2xl font-bold text-gray-900">
                  {posts.filter(post => post.published).length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Camera className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">With Images</p>
                <p className="text-2xl font-bold text-gray-900">
                  {posts.filter(post => post.hasImages).length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-red-100 rounded-lg">
                <Play className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">With Videos</p>
                <p className="text-2xl font-bold text-gray-900">
                  {posts.filter(post => post.hasVideo).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* New Post Form Modal */}
        {showNewPostForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Create New Blog Post</h2>
                  <button
                    onClick={() => setShowNewPostForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Post Title</label>
                    <input
                      type="text"
                      value={newPost.title || ''}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                      placeholder="Enter an engaging title for your post..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={newPost.category || 'Personal'}
                      onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                    <input
                      type="text"
                      value={newPost.author || 'Stew Norriss'}
                      onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                  <textarea
                    value={newPost.excerpt || ''}
                    onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief description that will appear in post previews..."
                  />
                </div>

                {/* Featured Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFeaturedImageUpload}
                      className="hidden"
                      id="featured-image-upload"
                    />
                    <label htmlFor="featured-image-upload" className="cursor-pointer">
                      <Image className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload featured image</p>
                      <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                    </label>
                  </div>
                  {newPost.featuredImage && (
                    <div className="mt-3">
                      <img src={newPost.featuredImage} alt="Featured" className="w-32 h-20 object-cover rounded border" />
                    </div>
                  )}
                </div>

                {/* Media Upload Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Images</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Click to upload images</p>
                        <p className="text-xs text-gray-500 mt-1">Multiple files supported</p>
                      </label>
                    </div>
                    {newPost.images && newPost.images.length > 0 && (
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {newPost.images.map((img, idx) => (
                          <div key={idx} className="aspect-square bg-gray-100 rounded border overflow-hidden">
                            <img src={img} alt={`Upload ${idx + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Videos</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <input
                        type="file"
                        multiple
                        accept="video/*"
                        onChange={handleVideoUpload}
                        className="hidden"
                        id="video-upload"
                      />
                      <label htmlFor="video-upload" className="cursor-pointer">
                        <Video className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Click to upload videos</p>
                        <p className="text-xs text-gray-500 mt-1">MP4, MOV, AVI up to 100MB</p>
                      </label>
                    </div>
                    {newPost.videos && newPost.videos.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {newPost.videos.map((video, idx) => (
                          <div key={idx} className="bg-gray-100 rounded p-3 flex items-center">
                            <Play className="h-4 w-4 text-gray-600 mr-2" />
                            <span className="text-sm text-gray-600">Video {idx + 1} uploaded</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                  <textarea
                    value={newPost.content || ''}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    rows={15}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                    placeholder="Write your blog post content here... You can use HTML tags for formatting."
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Tip: Use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;em&gt; for formatting
                  </p>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="published"
                    checked={newPost.published || false}
                    onChange={(e) => setNewPost({...newPost, published: e.target.checked})}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="published" className="ml-2 block text-sm text-gray-900">
                    Publish immediately
                  </label>
                </div>
              </div>
              
              <div className="p-6 border-t bg-gray-50 flex justify-end space-x-3">
                <button
                  onClick={() => setShowNewPostForm(false)}
                  className="px-6 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreatePost}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center font-semibold"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Create Post
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Posts List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900">Your Blog Posts</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {posts.map((post) => (
              <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        post.published 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-3">{post.excerpt}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                      {post.hasImages && (
                        <div className="flex items-center">
                          <Image className="h-4 w-4 mr-1 text-purple-500" />
                          <span>Images</span>
                        </div>
                      )}
                      {post.hasVideo && (
                        <div className="flex items-center">
                          <Video className="h-4 w-4 mr-1 text-red-500" />
                          <span>Videos</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => togglePublished(post.id)}
                      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                        post.published
                          ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                          : 'bg-green-100 text-green-800 hover:bg-green-200'
                      }`}
                    >
                      {post.published ? 'Unpublish' : 'Publish'}
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}