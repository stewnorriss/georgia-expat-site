'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export interface BlogPost {
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
  tags?: string[]
  createdAt: string
  updatedAt: string
}

interface BlogContextType {
  posts: BlogPost[]
  createPost: (post: Omit<BlogPost, 'id' | 'date' | 'readTime' | 'createdAt' | 'updatedAt'>) => void
  updatePost: (id: number, updates: Partial<BlogPost>) => void
  deletePost: (id: number) => void
  togglePublished: (id: number) => void
  getPost: (id: number) => BlogPost | undefined
  getPublishedPosts: () => BlogPost[]
  getDraftPosts: () => BlogPost[]
  searchPosts: (query: string) => BlogPost[]
  getPostsByCategory: (category: string) => BlogPost[]
}

const BlogContext = createContext<BlogContextType | undefined>(undefined)

const STORAGE_KEY = 'stews-blog-posts'

// Default sample posts
const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: 'My First Week in Tbilisi',
    excerpt: 'Just arrived in Georgia\'s capital and I\'m already falling in love with this incredible city. Here are my first impressions...',
    content: `<h2>Arriving in Georgia's Capital</h2>
<p>After months of planning and anticipation, I've finally made it to Tbilisi! The journey here was long but worth every minute. As I stepped off the plane at Shota Rustaveli Tbilisi International Airport, I could feel the excitement building.</p>

<h3>First Impressions</h3>
<p>Walking through the streets of Old Town for the first time was absolutely magical. The cobblestone streets, the mix of ancient and modern architecture, and the incredible hospitality of the Georgian people immediately made me feel welcome.</p>

<h3>The Food Scene</h3>
<p>I've already tried khachapuri (the cheese-filled bread that Georgia is famous for) and khinkali (traditional soup dumplings). Every meal has been an adventure, and I'm excited to explore more of the incredible Georgian cuisine.</p>

<h3>Language Challenges</h3>
<p>Georgian script looks like beautiful art, but it's definitely challenging to learn! I've managed to master "gamarjoba" (hello) and "madloba" (thank you), which has earned me smiles from locals.</p>

<h3>What's Next</h3>
<p>I'm planning to explore more neighborhoods, find a good coffee shop to work from, and maybe take some Georgian language lessons. This is just the beginning of what I know will be an incredible journey.</p>`,
    author: 'Stew Norriss',
    date: '2024-10-20',
    readTime: '5 min read',
    category: 'Personal',
    published: true,
    hasImages: true,
    hasVideo: false,
    featuredImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center',
    tags: ['tbilisi', 'first-impressions', 'georgia', 'expat-life'],
    createdAt: '2024-10-20T10:00:00Z',
    updatedAt: '2024-10-20T10:00:00Z'
  },
  {
    id: 2,
    title: 'Best Coffee Shops I\'ve Discovered',
    excerpt: 'As a coffee enthusiast, I\'ve been exploring Tbilisi\'s amazing cafe scene. Here are my top picks so far...',
    content: `<h2>A Coffee Lover's Guide to Tbilisi</h2>
<p>As someone who can't function without good coffee, finding the best cafes in Tbilisi has been a top priority. After extensive "research" (aka drinking lots of coffee), here are my favorites so far.</p>

<h3>Stamba Cafe</h3>
<p>Located in the trendy Stamba Hotel, this cafe serves some of the best specialty coffee in the city. The industrial-chic atmosphere and perfectly crafted lattes make it my go-to spot for morning work sessions.</p>

<h3>Cafe Leila</h3>
<p>A cozy neighborhood gem with amazing Georgian coffee and homemade pastries. The owner, Leila, always greets me with a smile and is helping me practice my Georgian!</p>

<h3>Prospero's Books & Caliban's Coffee</h3>
<p>A bookstore-cafe combo that's perfect for rainy afternoons. Great coffee, English books, and a quiet atmosphere for reading or writing. Plus, they have the best carrot cake in town.</p>

<h3>The Hunt Continues</h3>
<p>I'm still exploring and discovering new spots every week. If you have recommendations, let me know! The coffee culture here is thriving, and I'm excited to try every single cafe in the city.</p>`,
    author: 'Stew Norriss',
    date: '2024-10-18',
    readTime: '7 min read',
    category: 'Food & Drink',
    published: true,
    hasImages: true,
    hasVideo: false,
    featuredImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=400&fit=crop&crop=center',
    tags: ['coffee', 'cafes', 'tbilisi', 'food-drink'],
    createdAt: '2024-10-18T09:00:00Z',
    updatedAt: '2024-10-18T09:00:00Z'
  },
  {
    id: 3,
    title: 'Learning Georgian: My Journey So Far',
    excerpt: 'Tackling one of the world\'s most unique languages. Here\'s what I\'ve learned about learning Georgian...',
    content: `<h2>Tackling One of the World's Most Unique Languages</h2>
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
<p>I'm using a combination of language apps, local tutors, and most importantly, trying to practice with locals whenever possible. Georgians are incredibly patient and encouraging when they see foreigners trying to learn their language.</p>`,
    author: 'Stew Norriss',
    date: '2024-10-15',
    readTime: '6 min read',
    category: 'Language',
    published: true,
    hasImages: false,
    hasVideo: true,
    featuredImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop&crop=center',
    tags: ['georgian-language', 'learning', 'alphabet', 'culture'],
    createdAt: '2024-10-15T14:00:00Z',
    updatedAt: '2024-10-15T14:00:00Z'
  },
  {
    id: 4,
    title: 'Exploring Old Town Tbilisi',
    excerpt: 'A photo and video journey through the historic heart of the city. The architecture here is absolutely stunning...',
    content: `<h2>A Journey Through Time</h2>
<p>Old Town Tbilisi is like stepping into a living museum. Every corner tells a story, every building has character, and the blend of architectural styles creates a unique atmosphere you won't find anywhere else in the world.</p>

<h3>The Sulfur Baths</h3>
<p>The famous sulfur baths that gave Tbilisi its name are still operating today. The distinctive domed structures are iconic, and taking a bath in the natural hot springs is an experience every visitor should have.</p>

<h3>Narikala Fortress</h3>
<p>Perched high above the city, this ancient fortress offers breathtaking views of Tbilisi. The climb up is worth it, especially at sunset when the whole city is bathed in golden light.</p>

<h3>The Architecture</h3>
<p>What fascinates me most is how different architectural periods coexist harmoniously. You'll see medieval churches next to Art Nouveau buildings, Soviet-era structures alongside modern glass towers.</p>

<h3>Hidden Gems</h3>
<p>Every day I discover new courtyards, small galleries, and charming cafes tucked away in the narrow streets. Old Town rewards those who take time to wander and explore.</p>`,
    author: 'Stew Norriss',
    date: '2024-10-12',
    readTime: '4 min read',
    category: 'Travel',
    published: false,
    hasImages: true,
    hasVideo: true,
    featuredImage: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=800&h=400&fit=crop&crop=center',
    tags: ['old-town', 'architecture', 'photography', 'travel'],
    createdAt: '2024-10-12T16:00:00Z',
    updatedAt: '2024-10-12T16:00:00Z'
  }
]

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<BlogPost[]>([])

  // Load posts from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPosts = localStorage.getItem(STORAGE_KEY)
      if (savedPosts) {
        try {
          setPosts(JSON.parse(savedPosts))
        } catch (error) {
          console.error('Error loading posts from localStorage:', error)
          setPosts(defaultPosts)
        }
      } else {
        setPosts(defaultPosts)
      }
    }
  }, [])

  // Save posts to localStorage whenever posts change
  useEffect(() => {
    if (typeof window !== 'undefined' && posts.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
    }
  }, [posts])

  const calculateReadTime = (content: string): string => {
    const wordsPerMinute = 200
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length
    const minutes = Math.ceil(wordCount / wordsPerMinute)
    return `${minutes} min read`
  }

  const createPost = (postData: Omit<BlogPost, 'id' | 'date' | 'readTime' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date().toISOString()
    const newPost: BlogPost = {
      ...postData,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      readTime: calculateReadTime(postData.content),
      createdAt: now,
      updatedAt: now
    }
    setPosts(prevPosts => [newPost, ...prevPosts])
  }

  const updatePost = (id: number, updates: Partial<BlogPost>) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === id 
          ? { 
              ...post, 
              ...updates, 
              readTime: updates.content ? calculateReadTime(updates.content) : post.readTime,
              updatedAt: new Date().toISOString()
            }
          : post
      )
    )
  }

  const deletePost = (id: number) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id))
  }

  const togglePublished = (id: number) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === id 
          ? { ...post, published: !post.published, updatedAt: new Date().toISOString() }
          : post
      )
    )
  }

  const getPost = (id: number): BlogPost | undefined => {
    return posts.find(post => post.id === id)
  }

  const getPublishedPosts = (): BlogPost[] => {
    return posts.filter(post => post.published).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  const getDraftPosts = (): BlogPost[] => {
    return posts.filter(post => !post.published).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
  }

  const searchPosts = (query: string): BlogPost[] => {
    const lowercaseQuery = query.toLowerCase()
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.category.toLowerCase().includes(lowercaseQuery) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
    )
  }

  const getPostsByCategory = (category: string): BlogPost[] => {
    if (category === 'all') return posts
    return posts.filter(post => post.category === category)
  }

  return (
    <BlogContext.Provider value={{
      posts,
      createPost,
      updatePost,
      deletePost,
      togglePublished,
      getPost,
      getPublishedPosts,
      getDraftPosts,
      searchPosts,
      getPostsByCategory
    }}>
      {children}
    </BlogContext.Provider>
  )
}

export function useBlog() {
  const context = useContext(BlogContext)
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider')
  }
  return context
}