'use client'

import { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp, Link as LinkIcon, Smartphone, Users, BookOpen, Globe, Phone, Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Do I need a visa to move to Georgia?',
      answer: 'No visa needed for citizens of 98 countries! You get automatic 1-year visa-free entry (includes USA, UK, EU, Canada, Australia, New Zealand, Japan, South Korea). Just show your passport at the border. For remote workers, the "Remotely from Georgia" program offers 1-year renewable stays with zero Georgian tax on foreign income. Apply online at migration.commission.ge. Verified November 2025 from official sources.'
    },
    {
      question: 'How much money do I need to live in Tbilisi?',
      answer: 'Budget: $800-1200/month, Comfortable: $1500-2000/month, Luxury: $2500+/month. This includes rent, food, transport, and entertainment. Tbilisi is very affordable compared to Western countries.'
    },
    {
      question: 'Is it safe to live in Tbilisi?',
      answer: 'Yes, very safe! Tbilisi has low crime rates. Violent crime is extremely rare. Women can walk alone at night safely. The biggest risks are pickpockets in tourist areas and aggressive drivers. Overall, it\'s one of the safest cities in the region.'
    },
    {
      question: 'Do people speak English in Tbilisi?',
      answer: 'In tourist areas, restaurants, and among young people - yes. Older generations and in residential areas - limited. Learning basic Georgian phrases helps a lot. Most expat-friendly services have English speakers.'
    },
    {
      question: 'What\'s the internet like in Georgia?',
      answer: 'Excellent! Georgia has some of the fastest and cheapest internet in Europe. Fiber optic is widely available with speeds up to 1000 Mbps. Home internet costs ₾30-80/month. Mobile data is cheap (₾15-50/month for unlimited). Perfect for digital nomads.'
    },
    {
      question: 'Can I work remotely from Georgia?',
      answer: 'Absolutely! Georgia is one of the best countries for remote workers. If you work for a foreign company and earn income abroad, you pay 0% Georgian tax. The Digital Nomad visa makes it official and legal.'
    },
    {
      question: 'How do I find an apartment in Tbilisi?',
      answer: 'Use ss.ge and myhome.ge (main rental sites). Expect to pay ₾800-2000/month for a good apartment. Book temporary accommodation for your first 1-2 weeks, then apartment hunt in person. Landlords prefer meeting tenants.'
    },
    {
      question: 'What\'s the best neighborhood for expats?',
      answer: 'Vake and Saburtalo are most popular - modern, safe, good amenities. Vera is central and upscale. Old Town is charming but touristy. Each has pros/cons depending on your lifestyle and budget.'
    },
    {
      question: 'Do I need to learn Georgian?',
      answer: 'Not essential but helpful. You can survive with English in expat areas. Learning basics (hello, thank you, numbers) makes life easier and locals appreciate it. The alphabet is unique and challenging but worth learning.'
    },
    {
      question: 'How\'s the healthcare in Georgia?',
      answer: 'Good private healthcare at affordable prices. Doctor visits cost ₾50-150. Get health insurance (₾200-500/year). Major hospitals have English-speaking doctors. Quality is good for routine care, serious cases may require travel.'
    },
    {
      question: 'What\'s the food like?',
      answer: 'Amazing! Georgian cuisine is delicious - khachapuri (cheese bread), khinkali (dumplings), mtsvadi (BBQ). Lots of fresh produce, wine, and bread. Vegetarian options available. Eating out is cheap (₾15-30 for a meal).'
    },
    {
      question: 'Is Georgia LGBTQ+ friendly?',
      answer: 'Mixed. Tbilisi has a small LGBTQ+ scene (Bassiani club is welcoming). Society is conservative, public displays of affection may attract attention. No legal protections but also no laws against it. Expat community is accepting.'
    },
    {
      question: 'What about banking?',
      answer: 'Easy to open a bank account. TBC Bank is most expat-friendly. Bring passport and proof of address. Use Wise or Revolut for international transfers (much cheaper than bank wires). Cards widely accepted in cities.'
    },
    {
      question: 'How\'s the weather?',
      answer: 'Hot summers (25-35°C), mild winters (0-10°C). Spring and autumn are beautiful. Tbilisi gets little snow. Air quality can be poor in winter. Best months: April-June and September-October.'
    },
    {
      question: 'Can I bring my pet?',
      answer: 'Yes! Pets need microchip, rabies vaccination, and health certificate. EU pet passports accepted. Many apartments allow pets. Vet care is affordable. Dog-friendly parks available.'
    }
  ]

  const resources = [
    {
      category: 'Essential Apps',
      icon: <Smartphone className="h-6 w-6" />,
      items: [
        { name: 'Bolt', description: 'Taxi app (cheapest)', link: 'bolt.eu' },
        { name: 'Yandex Go', description: 'Alternative taxi app', link: 'yandex.com' },
        { name: 'TBC Bank', description: 'Best banking app', link: 'tbcbank.ge' },
        { name: 'Glovo', description: 'Food delivery', link: 'glovoapp.com' },
        { name: 'Wolt', description: 'Food delivery', link: 'wolt.com' },
        { name: 'Google Translate', description: 'Essential for Georgian', link: 'translate.google.com' },
        { name: 'Maps.me', description: 'Offline maps', link: 'maps.me' },
        { name: 'Tbilisi Transport', description: 'Public transport routes', link: 'ttc.com.ge' }
      ]
    },
    {
      category: 'Facebook Groups',
      icon: <Facebook className="h-6 w-6" />,
      items: [
        { name: 'Expats in Tbilisi', description: '15,000+ members, most active', link: 'facebook.com/groups/expatstbilisi' },
        { name: 'Tbilisi Expat Community', description: 'Events and meetups', link: 'facebook.com/groups/tbilisiexpats' },
        { name: 'Digital Nomads Georgia', description: 'Remote workers', link: 'facebook.com/groups/digitalnomadsgeorgia' },
        { name: 'Apartment Rentals Tbilisi', description: 'Housing listings', link: 'facebook.com/groups/tbilisiapartments' },
        { name: 'Buy/Sell Tbilisi', description: 'Second-hand items', link: 'facebook.com/groups/buyselltbilisi' },
        { name: 'Jobs in Georgia', description: 'Job postings', link: 'facebook.com/groups/jobsgeorgia' }
      ]
    },
    {
      category: 'Useful Websites',
      icon: <Globe className="h-6 w-6" />,
      items: [
        { name: 'ss.ge', description: 'Apartment rentals', link: 'ss.ge' },
        { name: 'myhome.ge', description: 'Real estate', link: 'myhome.ge' },
        { name: 'jobs.ge', description: 'Job listings', link: 'jobs.ge' },
        { name: 'tbcbank.ge', description: 'Banking', link: 'tbcbank.ge' },
        { name: 'migration.gov.ge', description: 'Visa information', link: 'migration.gov.ge' },
        { name: 'rs.ge', description: 'Government services', link: 'rs.ge' },
        { name: 'numbeo.com', description: 'Cost of living data', link: 'numbeo.com/cost-of-living/in/Tbilisi' }
      ]
    },
    {
      category: 'Emergency Numbers',
      icon: <Phone className="h-6 w-6" />,
      items: [
        { name: '112', description: 'Emergency (police, fire, ambulance)', link: 'tel:112' },
        { name: '144', description: 'Ambulance direct', link: 'tel:144' },
        { name: '122', description: 'Police direct', link: 'tel:122' },
        { name: '+995 32 272 72 72', description: 'TBC Bank hotline', link: 'tel:+995322727272' },
        { name: '+995 577 10 01 11', description: 'Magticom support', link: 'tel:+995577100111' },
        { name: '+995 32 217 00 17', description: 'Silknet support', link: 'tel:+995322170017' }
      ]
    }
  ]

  const georgianTerms = [
    { georgian: 'გამარჯობა (Gamarjoba)', english: 'Hello', pronunciation: 'gah-mar-JO-bah' },
    { georgian: 'მადლობა (Madloba)', english: 'Thank you', pronunciation: 'mahd-LOH-bah' },
    { georgian: 'კარგი (Kargi)', english: 'Good/OK', pronunciation: 'KAR-gee' },
    { georgian: 'დიახ (Diakh)', english: 'Yes', pronunciation: 'dee-AKH' },
    { georgian: 'არა (Ara)', english: 'No', pronunciation: 'AH-rah' },
    { georgian: 'ბოდიში (Bodishi)', english: 'Sorry/Excuse me', pronunciation: 'boh-DEE-shee' },
    { georgian: 'გაუმარჯოს (Gaumarjos)', english: 'Cheers!', pronunciation: 'gah-oo-MAR-jos' },
    { georgian: 'ნახვამდის (Nakhvamdis)', english: 'Goodbye', pronunciation: 'nakh-VAM-dees' },
    { georgian: 'რამდენი ღირს? (Ramdeni ghirs?)', english: 'How much?', pronunciation: 'rahm-DEH-nee GEERS' },
    { georgian: 'ქართული არ ვიცი (Kartuli ar vitsi)', english: 'I don\'t speak Georgian', pronunciation: 'kar-TOO-lee ar VEE-tsee' },
    { georgian: 'ინგლისურად? (Inglisurad?)', english: 'English?', pronunciation: 'een-glee-soo-RAHD' },
    { georgian: 'საპირფარეშო სად არის? (Sapirparesho sad aris?)', english: 'Where is the bathroom?', pronunciation: 'sah-peer-pah-REH-sho sahd AH-rees' }
  ]

  const expatSlang = [
    { term: 'Marshrutka', meaning: 'Minibus (main form of public transport)', usage: 'Take marshrutka #37 to Vake' },
    { term: 'Khachapuri', meaning: 'Georgian cheese bread (national dish)', usage: 'Let\'s get khachapuri for lunch' },
    { term: 'Supra', meaning: 'Traditional Georgian feast with toasts', usage: 'I was at a supra until 3 AM' },
    { term: 'Tamada', meaning: 'Toastmaster at a supra', usage: 'The tamada gave 20 toasts!' },
    { term: 'Chacha', meaning: 'Georgian grape vodka (strong!)', usage: 'One shot of chacha was enough' },
    { term: 'Lari', meaning: 'Georgian currency (₾)', usage: 'That costs 50 lari' },
    { term: 'Tetri', meaning: '1/100 of a lari (like cents)', usage: 'It\'s 2 lari and 50 tetri' },
    { term: 'Batono/Kalbatono', meaning: 'Sir/Madam (polite)', usage: 'Batono, can you help me?' },
    { term: 'Bazari', meaning: 'Market', usage: 'Going to the bazari for vegetables' },
    { term: 'Mtsvadi', meaning: 'Georgian BBQ/shashlik', usage: 'Let\'s get mtsvadi this weekend' }
  ]

  const socialMedia = [
    { platform: 'Facebook', handle: '@TbilisiExpats', link: 'facebook.com/tbilisiexpats', icon: <Facebook className="h-5 w-5" /> },
    { platform: 'Instagram', handle: '@tbilisi', link: 'instagram.com/tbilisi', icon: <Instagram className="h-5 w-5" /> },
    { platform: 'Instagram', handle: '@georgia', link: 'instagram.com/georgia', icon: <Instagram className="h-5 w-5" /> },
    { platform: 'Telegram', handle: 'Tbilisi Expats', link: 't.me/tbilisiexpats', icon: <MessageCircle className="h-5 w-5" /> },
    { platform: 'Reddit', handle: 'r/Tbilisi', link: 'reddit.com/r/Tbilisi', icon: <Users className="h-5 w-5" /> },
    { platform: 'Reddit', handle: 'r/Sakartvelo', link: 'reddit.com/r/Sakartvelo', icon: <Users className="h-5 w-5" /> }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='5'/%3E%3Ccircle cx='10' cy='10' r='3'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Ccircle cx='10' cy='50' r='3'/%3E%3Ccircle cx='50' cy='10' r='3'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <HelpCircle className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">FAQ & Resources</h1>
              <div className="flex items-center text-blue-200">
                <BookOpen className="h-5 w-5 mr-2" />
                <span>Everything You Need to Know</span>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Common questions, essential resources, useful apps, Georgian phrases, and expat slang all in one place.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <HelpCircle className="h-8 w-8 text-blue-600 mr-3" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <LinkIcon className="h-8 w-8 text-green-600 mr-3" />
            Essential Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-3">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{resource.category}</h3>
                </div>
                <div className="space-y-3">
                  {resource.items.map((item, i) => (
                    <div key={i} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white">{item.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{item.description}</div>
                        </div>
                        <a 
                          href={item.link.startsWith('tel:') ? item.link : `https://${item.link}`}
                          target={item.link.startsWith('tel:') ? '_self' : '_blank'}
                          rel="noopener noreferrer"
                          className="ml-3 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          <LinkIcon className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Georgian Glossary */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
            Georgian Phrases & Pronunciation
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Georgian</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">English</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Pronunciation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {georgianTerms.map((term, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">{term.georgian}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">{term.english}</td>
                      <td className="px-6 py-4 text-sm text-purple-600 dark:text-purple-400 italic">{term.pronunciation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Expat Slang */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Users className="h-8 w-8 text-orange-600 mr-3" />
            Expat Slang & Terms
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {expatSlang.map((slang, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">{slang.term}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{slang.meaning}</div>
                <div className="text-xs text-orange-600 dark:text-orange-400 italic">"{slang.usage}"</div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Globe className="h-8 w-8 text-pink-600 mr-3" />
            Follow & Connect
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={`https://${social.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-lg transition-shadow flex items-center"
              >
                <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full mr-3">
                  {social.icon}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{social.platform}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{social.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Pro Tips */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
          <div className="flex items-start">
            <HelpCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Quick Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Download Bolt and TBC Bank apps immediately upon arrival</li>
                <li>• Join "Expats in Tbilisi" Facebook group before you move</li>
                <li>• Learn to say "Gamarjoba" (hello) and "Madloba" (thank you)</li>
                <li>• Save emergency number 112 in your phone</li>
                <li>• Keep this page bookmarked for quick reference</li>
                <li>• Connect with other expats - they're your best resource</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Last updated: November 11, 2025</p>
          <p className="mt-1">Found outdated information? <a href="mailto:contact@georgiaexpat.com" className="text-blue-600 hover:text-blue-700 underline">Let us know</a></p>
        </div>
      </div>
    </div>
  )
}
