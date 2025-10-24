'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Tag, Image, Video, Edit } from 'lucide-react'

const BlogPostPage = () => {
  const params = useParams()
  const postId = params.id

  // Sample blog posts data (in a real app, this would come from a database or API)
  const posts = {
    '1': {
      id: 1,
      title: 'My First Week in Tbilisi',
      content: `
        <h2>Arriving in Georgia's Capital</h2>
        <p>After months of planning and anticipation, I've finally made it to Tbilisi! The journey here was long but worth every minute. As I stepped off the plane at Shota Rustaveli Tbilisi International Airport, I could feel the excitement building.</p>
        
        <h3>First Impressions</h3>
        <p>Walking through the streets of Old Town for the first time was absolutely magical. The cobblestone streets, the mix of ancient and modern architecture, and the incredible hospitality of the Georgian people immediately made me feel welcome.</p>
        
        <h3>The Food Scene</h3>
        <p>I've already tried khachapuri (the cheese-filled bread that Georgia is famous for) and khinkali (traditional soup dumplings). Every meal has been an adventure, and I'm excited to explore more of the incredible Georgian cuisine.</p>
        
        <h3>Language Challenges</h3>
        <p>Georgian script looks like beautiful art, but it's definitely challenging to learn! I've managed to master "gamarjoba" (hello) and "madloba" (thank you), which has earned me smiles from locals.</p>
        
        <h3>What's Next</h3>
        <p>I'm planning to explore more neighborhoods, find a good coffee shop to work from, and maybe take some Georgian language lessons. This is just the beginning of what I know will be an incredible journey.</p>
      `,
      author: 'Stew Norriss',
      date: '2024-10-20',
      readTime: '5 min read',
      category: 'Personal',
      featuredImage: '/api/placeholder/800/400',
      hasImages: true,
      hasVideo: false
    },
    '2': {
      id: 2,
      title: 'Best Coffee Shops I\'ve Discovered',
      content: `
        <h2>A Coffee Lover's Guide to Tbilisi</h2>
        <p>As someone who can't function without good coffee, finding the best cafes in Tbilisi has been a top priority. After extensive "research" (aka drinking lots of coffee), here are my favorites so far.</p>
        
        <h3>Stamba Cafe</h3>
        <p>Located in the trendy Stamba Hotel, this cafe serves some of the best specialty coffee in the city. The industrial-chic atmosphere and perfectly crafted lattes make it my go-to spot for morning work sessions.</p>
        
        <h3>Cafe Leila</h3>
        <p>A cozy neighborhood gem with amazing Georgian coffee and homemade pastries. The owner, Leila, always greets me with a smile and is helping me practice my Georgian!</p>
        
        <h3>Prospero's Books & Caliban's Coffee</h3>
        <p>A bookstore-cafe combo that's perfect for rainy afternoons. Great coffee, English books, and a quiet atmosphere for reading or writing. Plus, they have the best carrot cake in town.</p>
        
        <h3>The Hunt Continues</h3>
        <p>I'm still exploring and discovering new spots every week. If you have recommendations, let me know! The coffee culture here is thriving, and I'm excited to try every single cafe in the city.</p>
      `,
      author: 'Stew Norriss',
      date: '2024-10-18',
      readTime: '7 min read',
      category: 'Food & Drink',
      featuredImage: '/api/placeholder/800/400',
      hasImages: true,
      hasVideo: false
    },
    '3': {
      id: 3,
      title: 'Learning Georgian: My Journey So Far',
      content: `
        <h2>Tackling One of the World's Most Unique Languages</h2>
        <p>Georgian is unlike any language I've ever encountered. With its own unique script and complex grammar, it's been both challenging and fascinating to learn.</p>
        
        <h3>The Georgian Alphabet</h3>
        <p>The Georgian script (called Mkhedruli) has 33 letters and looks absolutely beautiful. Each letter is like a small work of art. I've been practicing writing them every day, and slowly but surely, I'm getting the hang of it.</p>
        
        <h3>Basic Phrases I've Mastered</h3>
        <ul>
          <li><strong>Gamarjoba</strong> (გამარჯობა) - Hello</li>
          <li><strong>Madloba</strong> (მადლობა) - Thank you</li>
          <li><strong>Bodishi</strong> (ბოდიში) - Sorry/Excuse me</li>
          <li><strong>Nakhvamdis</strong> (ნახვამდის) - Goodbye</li>
        </ul>
        
        <h3>The Challenges</h3>
        <p>Georgian grammar is incredibly complex, with cases, verb conjugations, and sentence structures that are completely different from English. But every small victory feels amazing!</p>
        
        <h3>My Learning Strategy</h3>
        <p>I'm using a combination of language apps, local tutors, and most importantly, trying to practice with locals whenever possible. Georgians are incredibly patient and encouraging when they see foreigners trying to learn their language.</p>
      `,
      author: 'Stew Norriss',
      date: '2024-10-15',
      readTime: '6 min read',
      category: 'Language',
      featuredImage: '/api/placeholder/800/400',
      hasImages: false,
      hasVideo: true
    }
  }

  const post = posts[postId as keyof typeof posts]

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article */}
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Featured Image */}
          {post.featuredImage && (
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  post.category === 'Personal' ? 'bg-blue-100 text-blue-800' :
                  post.category === 'Food & Drink' ? 'bg-red-100 text-red-800' :
                  post.category === 'Language' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  <Tag className="h-3 w-3 mr-1 inline" />
                  {post.category}
                </span>
              </div>
              <div className="absolute top-6 right-6 flex space-x-2">
                {post.hasImages && (
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded">
                    <Image className="h-4 w-4 text-white" />
                  </div>
                )}
                {post.hasVideo && (
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded">
                    <Video className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Header */}
          <div className="p-8 border-b border-gray-200">
            {!post.featuredImage && (
              <div className="flex items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  post.category === 'Personal' ? 'bg-blue-100 text-blue-800' :
                  post.category === 'Food & Drink' ? 'bg-red-100 text-red-800' :
                  post.category === 'Language' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  <Tag className="h-3 w-3 mr-1 inline" />
                  {post.category}
                </span>
              </div>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <Link 
                href={`/blog/admin?edit=${post.id}`}
                className="flex items-center text-gray-600 hover:text-blue-600 font-medium"
              >
                <Edit className="h-4 w-4 mr-1" />
                Edit Post
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Footer */}
          <div className="p-8 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Published on {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center space-x-4">
                <Link 
                  href={`/blog/admin?edit=${post.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Edit this post
                </Link>
                <Link 
                  href="/blog"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more posts →
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">More from Stew's Blog</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(posts)
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      relatedPost.category === 'Personal' ? 'bg-blue-100 text-blue-800' :
                      relatedPost.category === 'Food & Drink' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {relatedPost.category}
                    </span>
                    <div className="ml-auto flex space-x-1">
                      {relatedPost.hasImages && <Image className="h-3 w-3 text-gray-400" />}
                      {relatedPost.hasVideo && <Video className="h-3 w-3 text-gray-400" />}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {relatedPost.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostPage