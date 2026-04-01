import Link from 'next/link'
import { MapPin, Heart } from 'lucide-react'

const Footer = () => {
  const links = {
    explore: [
      { href: '/restaurants', label: 'Restaurants' },
      { href: '/places', label: 'Places to Visit' },
      { href: '/daytrips', label: 'Day Trips' },
      { href: '/nightlife', label: 'Nightlife' },
      { href: '/shopping', label: 'Shopping' },
    ],
    living: [
      { href: '/housing', label: 'Housing' },
      { href: '/transport', label: 'Transport' },
      { href: '/medical', label: 'Healthcare' },
      { href: '/banking', label: 'Banking' },
      { href: '/legal', label: 'Legal & Visas' },
    ],
    learn: [
      { href: '/language', label: 'Learn Georgian' },
      { href: '/culture', label: 'Culture' },
      { href: '/blog', label: 'Expat Blog' },
      { href: '/faq', label: 'FAQ' },
      { href: '/emergency', label: 'Emergency' },
    ],
  }

  return (
    <footer className="bg-gray-950 text-gray-300" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-red-600 p-1.5 rounded-lg">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-white text-base tracking-tight">Tbilisi Guide</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your companion for expat life in Tbilisi, Georgia. Built by an expat, for expats.
            </p>
          </div>

          {/* Link columns */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {links.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Living</h3>
            <ul className="space-y-2.5">
              {links.living.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Learn</h3>
            <ul className="space-y-2.5">
              {links.learn.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tbilisi Expat Guide
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 text-red-500" aria-hidden="true" /><span className="sr-only">love</span> in Georgia
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
