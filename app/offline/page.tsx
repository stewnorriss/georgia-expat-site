'use client'

import { useState, useEffect } from 'react'
import { WifiOff, RefreshCw, Home, MessageCircle, Bookmark, Clock } from 'lucide-react'
import Link from 'next/link'

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  useEffect(() => {
    setIsOnline(navigator.onLine)
    setLastUpdated(new Date())

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const handleRetry = () => {
    if (navigator.onLine) {
      window.location.reload()
    }
  }

  const cachedPages = [
    { title: 'Home', url: '/', icon: Home },
    { title: 'Restaurants', url: '/restaurants', icon: MessageCircle },
    { title: 'Transport', url: '/transport', icon: MessageCircle },
    { title: 'Blog', url: '/blog', icon: MessageCircle },
    { title: 'Places', url: '/places', icon: MessageCircle },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Offline Icon */}
        <div className="mb-8">
          <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center ${
            isOnline ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
          }`}>
            <WifiOff className={`h-12 w-12 ${
              isOnline ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`} />
          </div>
        </div>

        {/* Status Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {isOnline ? 'Back Online!' : 'You\'re Offline'}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {isOnline 
              ? 'Great! Your internet connection has been restored. You can now access all features.'
              : 'No internet connection detected. Don\'t worry - you can still access cached content and use some offline features.'
            }
          </p>
        </div>

        {/* Connection Status */}
        <div className={`mb-8 p-4 rounded-lg ${
          isOnline 
            ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
            : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
        }`}>
          <div className="flex items-center justify-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${
              isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'
            }`}></div>
            <span className={`font-semibold ${
              isOnline ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'
            }`}>
              {isOnline ? 'Connected' : 'Disconnected'}
            </span>
          </div>
          {lastUpdated && (
            <div className="flex items-center justify-center mt-2 text-sm text-gray-600 dark:text-gray-400">
              <Clock className="h-4 w-4 mr-1" />
              Last checked: {lastUpdated.toLocaleTimeString()}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mb-8 space-y-3">
          <button
            onClick={handleRetry}
            disabled={!isOnline}
            className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all ${
              isOnline
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
          >
            <RefreshCw className={`h-5 w-5 mr-2 ${!isOnline ? 'animate-spin' : ''}`} />
            {isOnline ? 'Reload Page' : 'Checking Connection...'}
          </button>

          <Link
            href="/"
            className="w-full flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-gray-600 hover:bg-gray-700 text-white transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Go to Home
          </Link>
        </div>

        {/* Cached Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Bookmark className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Available Offline
            </h2>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            These pages are cached and available without internet:
          </p>
          
          <div className="grid grid-cols-2 gap-2">
            {cachedPages.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm"
              >
                <page.icon className="h-4 w-4 mr-2 text-gray-600 dark:text-gray-300" />
                <span className="text-gray-900 dark:text-white">{page.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Offline Features */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Offline Features Available:
          </h3>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• Browse cached restaurant listings</li>
            <li>• Read saved blog posts</li>
            <li>• View transport information</li>
            <li>• Access emergency contacts</li>
          </ul>
        </div>
      </div>
    </div>
  )
}