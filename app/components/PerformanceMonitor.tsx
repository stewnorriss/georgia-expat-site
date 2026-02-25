'use client'

import { useEffect, useState } from 'react'
import { Activity, Zap, Clock, TrendingUp } from 'lucide-react'

interface PerformanceMetrics {
  loadTime: number
  firstPaint: number
  domContentLoaded: number
  memoryUsage?: number
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [showMonitor, setShowMonitor] = useState(false)

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const isDev = process.env.NODE_ENV === 'development'
    const isEnabled = localStorage.getItem('performance-monitor') === 'true'
    
    if (!isDev && !isEnabled) return

    setShowMonitor(true)

    // Collect performance metrics
    if (typeof window !== 'undefined' && window.performance) {
      const perfData = window.performance.timing
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming

      const metrics: PerformanceMetrics = {
        loadTime: navigation?.loadEventEnd - navigation?.fetchStart || 0,
        firstPaint: navigation?.responseStart - navigation?.fetchStart || 0,
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.navigationStart,
      }

      // Get memory usage if available
      if ('memory' in performance) {
        const memory = (performance as any).memory
        metrics.memoryUsage = Math.round(memory.usedJSHeapSize / 1048576) // Convert to MB
      }

      setMetrics(metrics)
    }
  }, [])

  if (!showMonitor || !metrics) return null

  const getPerformanceColor = (time: number) => {
    if (time < 1000) return 'text-green-600'
    if (time < 3000) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getPerformanceRating = (time: number) => {
    if (time < 1000) return 'Excellent'
    if (time < 3000) return 'Good'
    if (time < 5000) return 'Fair'
    return 'Needs Improvement'
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 max-w-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Activity className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="font-bold text-gray-900 dark:text-white">Performance</h3>
        </div>
        <button
          onClick={() => setShowMonitor(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          ×
        </button>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Zap className="h-4 w-4 text-yellow-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-400">Load Time</span>
          </div>
          <span className={`font-semibold ${getPerformanceColor(metrics.loadTime)}`}>
            {(metrics.loadTime / 1000).toFixed(2)}s
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-blue-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-400">First Paint</span>
          </div>
          <span className={`font-semibold ${getPerformanceColor(metrics.firstPaint)}`}>
            {(metrics.firstPaint / 1000).toFixed(2)}s
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-400">DOM Ready</span>
          </div>
          <span className={`font-semibold ${getPerformanceColor(metrics.domContentLoaded)}`}>
            {(metrics.domContentLoaded / 1000).toFixed(2)}s
          </span>
        </div>

        {metrics.memoryUsage && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Activity className="h-4 w-4 text-purple-500 mr-2" />
              <span className="text-gray-600 dark:text-gray-400">Memory</span>
            </div>
            <span className="font-semibold text-purple-600">
              {metrics.memoryUsage} MB
            </span>
          </div>
        )}

        <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Rating</span>
            <span className={`font-bold ${getPerformanceColor(metrics.loadTime)}`}>
              {getPerformanceRating(metrics.loadTime)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        Performance metrics are approximate and may vary
      </div>
    </div>
  )
}
