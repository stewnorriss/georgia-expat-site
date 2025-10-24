import Link from 'next/link'
import { MapPin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-red-500" />
              <span className="font-bold text-xl">Tbilisi Expat Guide</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your comprehensive guide to living as an English expat in beautiful Tbilisi, Georgia. 
              From restaurants to culture, we've got you covered.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="h-4 w-4" />
              <span>hello@tbilisiexpatguide.com</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/restaurants" className="text-gray-300 hover:text-white">Restaurants</Link></li>
              <li><Link href="/places" className="text-gray-300 hover:text-white">Places to Visit</Link></li>
              <li><Link href="/transport" className="text-gray-300 hover:text-white">Transport</Link></li>
              <li><Link href="/housing" className="text-gray-300 hover:text-white">Housing</Link></li>
              <li><Link href="/language" className="text-gray-300 hover:text-white">Learn Georgian</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/culture" className="text-gray-300 hover:text-white">Georgian Culture</Link></li>
              <li><Link href="/medical" className="text-gray-300 hover:text-white">Healthcare</Link></li>
              <li><Link href="/activities" className="text-gray-300 hover:text-white">Activities</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white">Expat Blog</Link></li>
              <li><Link href="/arts" className="text-gray-300 hover:text-white">Arts & Culture</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Tbilisi Expat Guide. Made with <Heart className="h-4 w-4 inline text-red-500" /> for expats in Georgia.
          </p>
          <p className="text-gray-300 text-sm mt-2 md:mt-0">
            Last updated: October 2024
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer