import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'

const BlogPage = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'Complete Guide to Moving to Tbilisi as an Expat',
      excerpt: 'Everything you need to know about relocating to Georgia\'s capital, from visas to finding accommodation.',
      author: 'Sarah Mitchell',
      date: '2024-10-15',
      readTime: '12 min read',
      category: 'Moving Guide',
      featured: true
    },
    {
      id: 2,
      title: 'Cost of Living in Tbilisi: 2024 Breakdown',
      excerpt: 'Detailed analysis of monthly expenses for expats living in Tbilisi, including rent, food, and entertainment.',
      author: 'James Wilson',
      date: '2024-10-10',
      readTime: '8 min read',
      category: 'Finance',
      featured: true
    },
    {
      id: 3,
      title: 'Georgian Healthcare System: Expat\'s Guide',
      excerpt: 'Navigate Georgia\'s healthcare system with confidence. Insurance options, hospitals, and medical services.',
      author: 'Dr. Emma Thompson',
      date: '2024-10-05',
      readTime: '10 min read',
      category: 'Healthcare',
      featured: true
    }
  ]

  const allPosts = [
    'Banking in Georgia: Opening Accounts and Managing Finances',
    'Best Neighborhoods for Expats in Tbilisi',
    'Georgian Work Culture: What Expats Need to Know',
    'Seasonal Guide to Tbilisi: What to Expect Year-Round',
    'Making Friends as an Expat in Tbilisi',
    'Georgian Cuisine: A Foodie\'s Guide for Expats',
    'Internet and Mobile Plans in Georgia',
    'Expat Taxes in Georgia: What You Need to Know',
    'Learning Georgian: Tips and Resources',
    'Weekend Trips from Tbilisi: Expat\'s Guide',
    'Shopping in Tbilisi: Where to Find What You Need',
    'Georgian Wine Culture for Expats',
    'Dealing with Bureaucracy in Georgia',
    'Expat Communities in Tbilisi',
    'Georgian Holidays and Traditions',
    'Safety Tips for Expats in Tbilisi',
    'Working Remotely from Tbilisi',
    'Georgian Dating Culture for Expats',
    'Fitness and Sports in Tbilisi',
    'Expat Parents Guide to Tbilisi',
    'Georgian Language Basics for Daily Life',
    'Tbilisi\'s Startup Scene for Expats',
    'Cultural Etiquette in Georgia',
    'Expat Guide to Georgian Superstitions',
    'Mental Health Resources for Expats',
    'Georgian Business Culture',
    'Seasonal Activities in Tbilisi'
  ]

  const categories = [
    { name: 'Moving Guide', count: 5, color: 'bg-blue-100 text-blue-800' },
    { name: 'Finance', count: 4, color: 'bg-green-100 text-green-800' },
    { name: 'Healthcare', count: 3, color: 'bg-red-100 text-red-800' },
    { name: 'Culture', count: 6, color: 'bg-purple-100 text-purple-800' },
    { name: 'Lifestyle', count: 8, color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Work', count: 4, color: 'bg-indigo-100 text-indigo-800' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 overflow-hidden">
        {/* Blog Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='10' y='10' width='100' height='4'/%3E%3Crect x='10' y='25' width='80' height='4'/%3E%3Crect x='10' y='40' width='90' height='4'/%3E%3Crect x='10' y='70' width='100' height='4'/%3E%3Crect x='10' y='85' width='75' height='4'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Expat Life Blog
              </h1>
              <div className="flex items-center text-gray-300">
                <User className="h-5 w-5 mr-2" />
                <span>30 Comprehensive Guides</span>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Comprehensive guides covering every aspect of expat life in Tbilisi. 
            From practical moving tips to cultural insights, we've got your Georgian adventure covered.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
          <div className="grid gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      post.category === 'Moving Guide' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'Finance' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="ml-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
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
                    <Link 
                      href={`/blog/${post.id}`}
                      className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* All Posts */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles (30 Guides)</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="grid gap-4">
                {allPosts.map((title, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                          {title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">Coming soon - Comprehensive guide</p>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">5-10 min</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${category.color}`}>
                      {category.name}
                    </span>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Stay Updated</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get the latest expat guides and Tbilisi tips delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage