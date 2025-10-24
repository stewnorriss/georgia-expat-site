'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Tag, Image, Video, Edit } from 'lucide-react'
import { useBlog } from '../../contexts/BlogContext'

const BlogPostPage = () => {
  const params = useParams()
  const postId = parseInt(params.id as string)
  const { getPost } = useBlog()
  
  const post = getPost(postId)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link 
            href="/blog"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
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
            {useBlog().getPublishedPosts()
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost: any) => (
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