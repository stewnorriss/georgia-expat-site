import type { Metadata } from 'next'
import { Banknote, CreditCard, TrendingUp, Globe, Shield, AlertCircle, CheckCircle, Building2, Smartphone, ArrowRightLeft, Wallet, DollarSign, Euro, Bitcoin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Banking & Finance in Georgia - Complete Guide for Expats',
  description: 'Everything expats need to know about banking in Georgia: opening accounts, international transfers, credit cards, cryptocurrency, and money management tips.',
  keywords: 'Georgia banking, TBC Bank, Bank of Georgia, expat banking Tbilisi, Wise Georgia, Revolut Georgia, cryptocurrency Georgia, international transfers',
}

export default function BankingPage() {
  const banks = [
    {
      name: 'TBC Bank',
      rating: 4.8,
      logo: '🏦',
      type: 'Full Service',
      pros: ['Best mobile app', 'English support', 'Most ATMs', 'Easy for expats'],
      cons: ['Can be crowded', 'Some fees for services'],
      accounts: ['Current Account', 'Savings Account', 'Foreign Currency'],
      fees: 'Free basic account, ₾5-10/month for premium',
      website: 'tbcbank.ge',
      phone: '+995 32 227 27 27',
      expat_friendly: 5,
      documents: ['Passport', 'Proof of address', 'Georgian phone number'],
      opening_time: '30-60 minutes'
    },
    {
      name: 'Bank of Georgia (BOG)',
      rating: 4.7,
      logo: '🏛️',
      type: 'Full Service',
      pros: ['Largest bank', 'Good online banking', 'Wide network', 'Reliable'],
      cons: ['Slower service', 'Less expat-focused'],
      accounts: ['Current Account', 'Savings Account', 'Investment Account'],
      fees: 'Free basic account, ₾8-15/month for premium',
      website: 'bog.ge',
      phone: '+995 32 244 44 44',
      expat_friendly: 4,
      documents: ['Passport', 'Proof of address', 'Tax ID (for some accounts)'],
      opening_time: '45-90 minutes'
    },
    {
      name: 'Liberty Bank',
      rating: 4.5,
      logo: '🦅',
      type: 'Full Service',
      pros: ['Good interest rates', 'Friendly staff', 'Less crowded'],
      cons: ['Fewer branches', 'Smaller ATM network'],
      accounts: ['Current Account', 'Savings Account', 'USD/EUR Accounts'],
      fees: 'Free basic account, ₾5/month for premium',
      website: 'libertybank.ge',
      phone: '+995 32 255 55 00',
      expat_friendly: 4,
      documents: ['Passport', 'Proof of address'],
      opening_time: '30-45 minutes'
    }
  ]

  const transferServices = [
    {
      name: 'Wise (TransferWise)',
      rating: 4.9,
      fees: 'Low (0.5-1%)',
      speed: '1-2 days',
      pros: ['Best rates', 'Transparent fees', 'Multi-currency account', 'Works great in Georgia'],
      cons: ['Not instant', 'Limits on large transfers'],
      supported: ['GEL', 'USD', 'EUR', 'GBP', '50+ currencies'],
      recommendation: 'Best for regular international transfers',
      website: 'wise.com'
    },
    {
      name: 'Revolut',
      rating: 4.7,
      fees: 'Low (free up to limit)',
      speed: 'Instant-2 days',
      pros: ['Great app', 'Instant transfers', 'Crypto support', 'Virtual cards'],
      cons: ['Monthly limits on free plan', 'Customer service'],
      supported: ['GEL', 'USD', 'EUR', 'GBP', '30+ currencies'],
      recommendation: 'Best for frequent small transfers',
      website: 'revolut.com'
    },
    {
      name: 'Bank Wire Transfer',
      rating: 3.5,
      fees: 'High (₾30-100+)',
      speed: '3-5 days',
      pros: ['Large amounts', 'Secure', 'Direct bank-to-bank'],
      cons: ['Expensive', 'Slow', 'Complex'],
      supported: ['All major currencies'],
      recommendation: 'Only for large one-time transfers'
    },
    {
      name: 'Western Union / MoneyGram',
      rating: 3.0,
      fees: 'Very High (5-10%)',
      speed: 'Minutes-hours',
      pros: ['Fast', 'Cash pickup', 'Widely available'],
      cons: ['Expensive', 'Poor rates', 'Not for regular use'],
      supported: ['Most currencies'],
      recommendation: 'Emergency only'
    }
  ]

  const cryptoInfo = {
    legal_status: 'Legal and unregulated',
    taxation: 'No capital gains tax on crypto',
    exchanges: [
      { name: 'Binance', available: true, note: 'Works well, P2P available' },
      { name: 'Coinbase', available: true, note: 'Limited features' },
      { name: 'Kraken', available: true, note: 'Full access' },
      { name: 'Local Exchanges', available: true, note: 'Cryptal.ge, BTU.ge' }
    ],
    atms: 'Several Bitcoin ATMs in Tbilisi',
    p2p: 'Active P2P community, Telegram groups',
    tips: [
      'Georgia is crypto-friendly with no capital gains tax',
      'Many expats use crypto for international transfers',
      'P2P trading is common and safe',
      'Some landlords accept crypto payments',
      'Mining is popular due to cheap electricity'
    ]
  }

  const moneyTips = [
    {
      category: 'Opening a Bank Account',
      icon: <Building2 className="h-6 w-6" />,
      tips: [
        'Bring passport, proof of address, and Georgian phone number',
        'TBC Bank is most expat-friendly with best English support',
        'Open account in person - online opening is difficult for foreigners',
        'Get both GEL and USD/EUR accounts',
        'Ask for internet banking and mobile app access immediately',
        'Request a debit card (usually free)'
      ]
    },
    {
      category: 'Managing Money',
      icon: <Wallet className="h-6 w-6" />,
      tips: [
        'Keep some cash - not everywhere accepts cards',
        'Use Wise or Revolut for international transfers',
        'Set up mobile banking - it\'s excellent in Georgia',
        'Monitor exchange rates - GEL can fluctuate',
        'Keep emergency funds in USD or EUR',
        'Use ATMs at banks to avoid fees'
      ]
    },
    {
      category: 'Saving Money',
      icon: <TrendingUp className="h-6 w-6" />,
      tips: [
        'Georgian banks offer 8-12% interest on GEL savings',
        'USD/EUR accounts have lower interest (2-4%)',
        'Consider splitting savings between currencies',
        'Look into government bonds for better rates',
        'Avoid keeping large amounts in GEL long-term',
        'Use high-interest savings accounts for emergency funds'
      ]
    },
    {
      category: 'International Transfers',
      icon: <ArrowRightLeft className="h-6 w-6" />,
      tips: [
        'Wise is cheapest for most transfers',
        'Revolut is best for frequent small amounts',
        'Avoid bank wire transfers unless necessary',
        'Never use Western Union for regular transfers',
        'Consider crypto for large amounts',
        'Keep records for tax purposes'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 text-white py-16 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3Ccircle cx='10' cy='10' r='8'/%3E%3Ccircle cx='50' cy='50' r='8'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Banknote className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Banking & Finance in Georgia</h1>
              <div className="flex items-center text-green-200">
                <Shield className="h-5 w-5 mr-2" />
                <span>Complete Guide for Expats</span>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Everything you need to know about banking, money transfers, cryptocurrency, and managing your finances as an expat in Georgia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <Building2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Major Banks</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">8-12%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Savings Interest</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <Bitcoin className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">0%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Crypto Tax</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Currencies</div>
          </div>
        </div>

        {/* Banks */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Best Banks for Expats</h2>
          <div className="grid gap-6">
            {banks.map((bank, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-4xl mr-4">{bank.logo}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{bank.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm text-gray-600 dark:text-gray-400">{bank.type}</span>
                          <span className="text-yellow-500">★ {bank.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Expat Friendly</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < bank.expat_friendly ? 'text-green-500' : 'text-gray-300'}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        Pros
                      </h4>
                      <ul className="space-y-1">
                        {bank.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <AlertCircle className="h-4 w-4 text-orange-600 mr-2" />
                        Cons
                      </h4>
                      <ul className="space-y-1">
                        {bank.cons.map((con, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="text-orange-600 mr-2">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Fees</div>
                      <div className="text-gray-600 dark:text-gray-400">{bank.fees}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Opening Time</div>
                      <div className="text-gray-600 dark:text-gray-400">{bank.opening_time}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">Website</div>
                      <a href={`https://${bank.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 flex items-center">
                        {bank.website}
                        <Globe className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Required Documents:</div>
                    <div className="flex flex-wrap gap-2">
                      {bank.documents.map((doc, i) => (
                        <span key={i} className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-700 dark:text-gray-300">
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Transfers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">International Money Transfers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {transferServices.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{service.name}</h3>
                    <div className="text-yellow-500 text-sm">★ {service.rating}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Fees</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{service.fees}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">Transfer Speed</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{service.speed}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Pros</h4>
                    <ul className="space-y-1">
                      {service.pros.slice(0, 2).map((pro, i) => (
                        <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                          <CheckCircle className="h-3 w-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Cons</h4>
                    <ul className="space-y-1">
                      {service.cons.slice(0, 2).map((con, i) => (
                        <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                          <AlertCircle className="h-3 w-3 text-orange-600 mr-1 mt-0.5 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">💡 Recommendation</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{service.recommendation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cryptocurrency */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Bitcoin className="h-8 w-8 text-orange-500 mr-3" />
            Cryptocurrency in Georgia
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-semibold text-gray-900 dark:text-white">Legal Status</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cryptoInfo.legal_status}</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-gray-900 dark:text-white">Taxation</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cryptoInfo.taxation}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Available Exchanges</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {cryptoInfo.exchanges.map((exchange, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{exchange.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{exchange.note}</div>
                    </div>
                    {exchange.available && <CheckCircle className="h-5 w-5 text-green-600" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Crypto Tips for Expats</h3>
              <ul className="space-y-2">
                {cryptoInfo.tips.map((tip, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Money Management Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Money Management Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {moneyTips.map((section, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-3">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{section.category}</h3>
                </div>
                <ul className="space-y-2">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Account Opening Guide */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step: Opening a Bank Account</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Prepare Your Documents',
                  time: '1 day before',
                  details: [
                    'Valid passport (original, not copy)',
                    'Proof of address in Georgia (rental agreement, utility bill, or hotel booking)',
                    'Georgian phone number (get SIM card first - see Internet page)',
                    'Initial deposit (₾50-100 recommended)',
                    'Optional: Tax ID if you have one'
                  ],
                  tip: 'Pro tip: Get your SIM card and proof of address before going to the bank'
                },
                {
                  step: 2,
                  title: 'Choose Your Bank',
                  time: '30 minutes',
                  details: [
                    'TBC Bank - Best for expats, excellent app, most ATMs',
                    'Bank of Georgia - Largest bank, good for business accounts',
                    'Liberty Bank - Good interest rates, less crowded',
                    'Visit their website to find nearest branch',
                    'Check opening hours (usually 9:30-17:30 weekdays)'
                  ],
                  tip: 'Recommendation: Start with TBC Bank for your first account'
                },
                {
                  step: 3,
                  title: 'Visit the Branch',
                  time: '30-90 minutes',
                  details: [
                    'Go to the branch in person (online opening difficult for foreigners)',
                    'Take a queue number at the entrance',
                    'Wait for your number to be called',
                    'Tell the banker you want to open an account',
                    'Specify: Current account (checking) and/or Savings account',
                    'Request both GEL and USD/EUR accounts if needed'
                  ],
                  tip: 'Best time: Weekday mornings (10:00-12:00) to avoid crowds'
                },
                {
                  step: 4,
                  title: 'Fill Out Application',
                  time: '15-20 minutes',
                  details: [
                    'Banker will help you fill out application form',
                    'Provide your passport and proof of address',
                    'Give your Georgian phone number',
                    'Choose account currency (GEL, USD, EUR)',
                    'Decide on account type (free basic or premium)',
                    'Sign the agreement (get English version if needed)'
                  ],
                  tip: 'Ask questions! Bankers at TBC and BOG speak English'
                },
                {
                  step: 5,
                  title: 'Make Initial Deposit',
                  time: '5 minutes',
                  details: [
                    'Deposit minimum amount (usually ₾50-100)',
                    'Can deposit cash or transfer from another account',
                    'Get receipt for your deposit',
                    'Account is now active!'
                  ],
                  tip: 'Keep the receipt - you\'ll need it for mobile banking setup'
                },
                {
                  step: 6,
                  title: 'Get Your Debit Card',
                  time: 'Immediate or 3-5 days',
                  details: [
                    'Some banks give instant card (TBC often does)',
                    'Others mail it to your address (3-5 business days)',
                    'Set your PIN at the bank or via mobile app',
                    'Activate card before first use',
                    'Test it at an ATM to make sure it works'
                  ],
                  tip: 'Ask for contactless card - widely accepted in Tbilisi'
                },
                {
                  step: 7,
                  title: 'Set Up Mobile Banking',
                  time: '10-15 minutes',
                  details: [
                    'Download bank app (TBC Bank, BOG Mobile, Liberty Mobile)',
                    'Register using your account number and phone',
                    'Create username and password',
                    'Set up biometric login (fingerprint/face)',
                    'Link your debit card to the app',
                    'Enable notifications for transactions'
                  ],
                  tip: 'Mobile banking in Georgia is excellent - use it for everything!'
                },
                {
                  step: 8,
                  title: 'Set Up Online Banking',
                  time: '10 minutes',
                  details: [
                    'Visit bank website and register',
                    'Use your account number and phone for verification',
                    'Set up security questions',
                    'Enable two-factor authentication',
                    'Add payees for bill payments',
                    'Set up automatic payments if needed'
                  ],
                  tip: 'Online banking is useful for detailed statements and transfers'
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-green-500 transition-colors">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{step.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {step.time}
                      </span>
                    </div>
                    <ul className="space-y-1 mb-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-sm text-blue-800 dark:text-blue-300">
                      💡 {step.tip}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center mb-2">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="font-semibold text-gray-900 dark:text-white">Total Time: 1-2 hours (plus card delivery if not instant)</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Most expats successfully open accounts on their first visit. Bring all documents and you'll be banking in Georgia the same day!
              </p>
            </div>
          </div>
        </div>

        {/* Bank Comparison Table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Building2 className="h-8 w-8 text-purple-600 mr-3" />
            Complete Bank Comparison
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Feature</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">TBC Bank</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Bank of Georgia</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Liberty Bank</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Credo Bank</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">Expat Friendly</td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="ml-2 text-green-600 font-semibold">Best</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className="text-yellow-500">★★★★☆</span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className="text-yellow-500">★★★★☆</span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className="text-yellow-500">★★★☆☆</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">English Support</td>
                    <td className="px-4 py-3 text-sm text-green-600 font-semibold">Excellent</td>
                    <td className="px-4 py-3 text-sm text-blue-600">Good</td>
                    <td className="px-4 py-3 text-sm text-blue-600">Good</td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Limited</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">Mobile App</td>
                    <td className="px-4 py-3 text-sm text-green-600 font-semibold">Best in Georgia</td>
                    <td className="px-4 py-3 text-sm text-blue-600">Very Good</td>
                    <td className="px-4 py-3 text-sm text-blue-600">Good</td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Basic</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">ATM Network</td>
                    <td className="px-4 py-3 text-sm">500+ ATMs</td>
                    <td className="px-4 py-3 text-sm">400+ ATMs</td>
                    <td className="px-4 py-3 text-sm">200+ ATMs</td>
                    <td className="px-4 py-3 text-sm">150+ ATMs</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">Account Opening</td>
                    <td className="px-4 py-3 text-sm">30-60 min</td>
                    <td className="px-4 py-3 text-sm">45-90 min</td>
                    <td className="px-4 py-3 text-sm">30-45 min</td>
                    <td className="px-4 py-3 text-sm">60 min</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">Monthly Fee</td>
                    <td className="px-4 py-3 text-sm">Free - ₾10</td>
                    <td className="px-4 py-3 text-sm">Free - ₾15</td>
                    <td className="px-4 py-3 text-sm">Free - ₾5</td>
                    <td className="px-4 py-3 text-sm">Free</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">Debit Card</td>
                    <td className="px-4 py-3 text-sm text-green-600">Free</td>
                    <td className="px-4 py-3 text-sm text-green-600">Free</td>
                    <td className="px-4 py-3 text-sm text-green-600">Free</td>
                    <td className="px-4 py-3 text-sm">₾5</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">International Transfer</td>
                    <td className="px-4 py-3 text-sm">₾20-50</td>
                    <td className="px-4 py-3 text-sm">₾30-60</td>
                    <td className="px-4 py-3 text-sm">₾25-50</td>
                    <td className="px-4 py-3 text-sm">₾30-55</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">Currency Accounts</td>
                    <td className="px-4 py-3 text-sm">GEL, USD, EUR, GBP</td>
                    <td className="px-4 py-3 text-sm">GEL, USD, EUR</td>
                    <td className="px-4 py-3 text-sm">GEL, USD, EUR</td>
                    <td className="px-4 py-3 text-sm">GEL, USD</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">Savings Interest</td>
                    <td className="px-4 py-3 text-sm">5-8% (GEL)</td>
                    <td className="px-4 py-3 text-sm">5-9% (GEL)</td>
                    <td className="px-4 py-3 text-sm">6-10% (GEL)</td>
                    <td className="px-4 py-3 text-sm">7-11% (GEL)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">Customer Service</td>
                    <td className="px-4 py-3 text-sm">24/7 English</td>
                    <td className="px-4 py-3 text-sm">24/7 Limited English</td>
                    <td className="px-4 py-3 text-sm">Business hours</td>
                    <td className="px-4 py-3 text-sm">Business hours</td>
                  </tr>
                  <tr className="bg-blue-50 dark:bg-blue-900/20">
                    <td className="px-4 py-3 text-sm font-bold text-gray-900 dark:text-white">Best For</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">Expats & Digital Nomads</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">Locals & Business</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">High Interest Savings</td>
                    <td className="px-4 py-3 text-sm font-semibold text-blue-600">Budget Banking</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>💡 Recommendation:</strong> TBC Bank is the clear winner for expats - best app, English support, and most ATMs. 
              Bank of Georgia is good for business accounts. Liberty Bank offers highest savings rates. Credo Bank is budget-friendly but limited English.
            </p>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Important Banking Notes</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Most banks require a Georgian phone number to open an account</li>
                <li>• Bring proof of address (rental agreement or utility bill)</li>
                <li>• Some banks may require a tax ID for certain account types</li>
                <li>• Mobile banking apps are excellent - download them immediately</li>
                <li>• Keep some cash - not all places accept cards</li>
                <li>• Exchange rates can vary significantly between banks</li>
                <li>• International transfers may take 1-5 business days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6">
          <p className="font-semibold">Last updated: November 11, 2025</p>
          <p className="mt-2">Banking information verified from TBC Bank, Bank of Georgia, and expat community feedback.</p>
          <p className="mt-1">Found outdated information? <a href="mailto:contact@georgiaexpat.com" className="text-blue-600 hover:text-blue-700 underline">Let us know</a></p>
        </div>
      </div>
    </div>
  )
}
