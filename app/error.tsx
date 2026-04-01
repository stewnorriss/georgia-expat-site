'use client'

import { useEffect } from 'react'
import { RotateCcw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="text-5xl mb-6">😅</div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Something went wrong</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
          Don't worry, it happens. Try refreshing or head back home.
        </p>
        <div className="flex gap-3 justify-center">
          <button onClick={reset} className="btn-accent text-sm">
            <RotateCcw className="h-4 w-4" />
            Try again
          </button>
          <Link href="/" className="btn-secondary text-sm">
            <Home className="h-4 w-4" />
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
