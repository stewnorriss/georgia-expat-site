import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="text-6xl font-bold text-gray-200 dark:text-gray-700 mb-2">404</div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Page not found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
          Looks like you wandered off the map. Even in Tbilisi, that happens.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="btn-accent text-sm">
            <Home className="h-4 w-4" />
            Go home
          </Link>
          <Link href="/blog" className="btn-secondary text-sm">
            <Search className="h-4 w-4" />
            Browse guides
          </Link>
        </div>
      </div>
    </div>
  )
}
