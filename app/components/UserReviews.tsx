'use client'

import { useState, useEffect } from 'react'
import { Star, ThumbsUp, MessageCircle, User, Send, Award } from 'lucide-react'

interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
  helpful: number
  category: string
  location?: string
}

interface UserReviewsProps {
  category: string
  locationId?: string
  title?: string
}

const UserReviews = ({ category, locationId, title }: UserReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([])
  const [showForm, setShowForm] = useState(false)
  const [newReview, setNewReview] = useState({ author: '', rating: 5, text: '' })
  const [sortBy, setSortBy] = useState<'recent' | 'helpful' | 'highest'>('recent')

  // Load reviews from localStorage
  useEffect(() => {
    const storageKey = `reviews-${category}-${locationId || 'general'}`
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      setReviews(JSON.parse(saved))
    } else {
      // Seed with sample reviews
      setReviews(getSampleReviews(category))
    }
  }, [category, locationId])

  const saveReviews = (updatedReviews: Review[]) => {
    const storageKey = `reviews-${category}-${locationId || 'general'}`
    localStorage.setItem(storageKey, JSON.stringify(updatedReviews))
    setReviews(updatedReviews)
  }

  const handleSubmit = () => {
    if (!newReview.author.trim() || !newReview.text.trim()) return
    const review: Review = {
      id: Date.now().toString(),
      author: newReview.author,
      rating: newReview.rating,
      text: newReview.text,
      date: new Date().toISOString().split('T')[0],
      helpful: 0,
      category,
      location: locationId
    }
    const updated = [review, ...reviews]
    saveReviews(updated)
    setNewReview({ author: '', rating: 5, text: '' })
    setShowForm(false)
  }

  const markHelpful = (id: string) => {
    const updated = reviews.map(r =>
      r.id === id ? { ...r, helpful: r.helpful + 1 } : r
    )
    saveReviews(updated)
  }

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === 'recent') return new Date(b.date).getTime() - new Date(a.date).getTime()
    if (sortBy === 'helpful') return b.helpful - a.helpful
    return b.rating - a.rating
  })

  const avgRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '0'

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {title || 'Community Reviews'}
          </h3>
          <div className="flex items-center space-x-3 mt-1">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= Math.round(Number(avgRating))
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold">{avgRating}</span>
            <span className="text-sm text-gray-500">({reviews.length} reviews)</span>
          </div>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all flex items-center space-x-2"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Write Review</span>
        </button>
      </div>

      {/* Review Form */}
      {showForm && (
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-3">Share Your Experience</h4>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your name"
              value={newReview.author}
              onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Rating:</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                  >
                    <Star
                      className={`h-6 w-6 ${
                        star <= newReview.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <textarea
              placeholder="Write your review..."
              value={newReview.text}
              onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="flex space-x-3">
              <button
                onClick={handleSubmit}
                className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 flex items-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>Submit</span>
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sort */}
      <div className="flex space-x-2 mb-4">
        {(['recent', 'helpful', 'highest'] as const).map((option) => (
          <button
            key={option}
            onClick={() => setSortBy(option)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              sortBy === option
                ? 'bg-red-100 text-red-800'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {option === 'recent' ? 'Most Recent' : option === 'helpful' ? 'Most Helpful' : 'Highest Rated'}
          </button>
        ))}
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {sortedReviews.slice(0, 5).map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-4 last:border-0">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-red-400 to-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {review.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold text-sm">{review.author}</div>
                  <div className="text-xs text-gray-500">{review.date}</div>
                </div>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-3 w-3 ${
                      star <= review.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-2">{review.text}</p>
            <button
              onClick={() => markHelpful(review.id)}
              className="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600 transition-colors"
            >
              <ThumbsUp className="h-3 w-3" />
              <span>Helpful ({review.helpful})</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function getSampleReviews(category: string): Review[] {
  const samples: Record<string, Review[]> = {
    neighborhood: [
      { id: '1', author: 'Sarah M.', rating: 5, text: 'Vake is amazing for families. The park is beautiful and there are great schools nearby. Rent is higher but worth it for the quality of life.', date: '2026-03-10', helpful: 12, category: 'neighborhood' },
      { id: '2', author: 'James K.', rating: 4, text: 'Saburtalo is perfect for digital nomads. Great cafes, fast internet, and the mall is walking distance. Only downside is traffic.', date: '2026-03-08', helpful: 8, category: 'neighborhood' },
      { id: '3', author: 'Emma L.', rating: 5, text: 'Old Town has so much character. Living here feels like being in a movie. The nightlife is great but it can be noisy.', date: '2026-03-05', helpful: 15, category: 'neighborhood' },
    ],
    restaurant: [
      { id: '1', author: 'Mike R.', rating: 5, text: 'The khachapuri here is the best I have had in Tbilisi. Authentic Georgian food at reasonable prices.', date: '2026-03-12', helpful: 20, category: 'restaurant' },
      { id: '2', author: 'Anna P.', rating: 4, text: 'Great atmosphere and friendly staff. The wine selection is excellent. Service can be slow during peak hours.', date: '2026-03-09', helpful: 6, category: 'restaurant' },
    ],
    general: [
      { id: '1', author: 'Tom B.', rating: 5, text: 'This guide has been incredibly helpful for my move to Tbilisi. The neighborhood profiles saved me weeks of research.', date: '2026-03-11', helpful: 25, category: 'general' },
      { id: '2', author: 'Lisa W.', rating: 5, text: 'Best expat resource for Georgia. The cost calculator was spot on with my actual expenses.', date: '2026-03-07', helpful: 18, category: 'general' },
      { id: '3', author: 'David C.', rating: 4, text: 'Very comprehensive guide. Would love to see more restaurant reviews and real photos added.', date: '2026-03-03', helpful: 10, category: 'general' },
    ]
  }
  return samples[category] || samples.general
}

export default UserReviews
