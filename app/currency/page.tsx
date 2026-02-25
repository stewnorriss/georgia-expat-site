'use client'

import { useState, useEffect } from 'react'
import CurrencyConverter from '../components/CurrencyConverter'
import { TrendingUp, DollarSign, CreditCard, Banknote, Calculator, Globe, Info, AlertCircle, CheckCircle } from 'lucide-react'

const CurrencyPage = () => {
  const [currentRates, setCurrentRates] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // Fetch multiple currency rates for display
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/GEL')
        const data = await response.json()
        setCurrentRates(data.rates)
      } catch (error) {
        console.error('Failed to fetch rates:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRates()
  }, [])

  const popularCurrencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
    { code: 'RUB', name: 'Russian Ruble', symbol: '₽', flag: '🇷🇺' },
    { code: 'TRY', name: 'Turkish Lira', symbol: '₺', flag: '🇹🇷' },
    { code: 'AMD', name: 'Armenian Dram', symbol: '֏', flag: '🇦🇲' }
  ]

  const bankingTips = [
    {
      icon: <CreditCard className="h-5 w-5 text-blue-600" />,
      title: 'ATM Withdrawals',
      description: 'Most ATMs accept international cards. Bank of Georgia and TBC Bank have the most ATMs.',
      tip: 'Withdraw larger amounts to minimize fees'
    },
    {
      icon: <Banknote className="h-5 w-5 text-green-600" />,
      title: 'Currency Exchange',
      description: 'Exchange offices offer better rates than banks. Look for "Valuta" signs.',
      tip: 'Avoid airport exchanges - rates are usually poor'
    },
    {
      icon: <DollarSign className="h-5 w-5 text-purple-600" />,
      title: 'Payment Methods',
      description: 'Cards widely accepted in Tbilisi. Cash needed for markets and small vendors.',
      tip: 'Keep some cash for traditional restaurants'
    },
    {
      icon: <Globe className="h-5 w-5 text-orange-600" />,
      title: 'Online Banking',
      description: 'TBC and Bank of Georgia offer excellent mobile apps for expats.',
      tip: 'Set up mobile banking for easy transfers'
    }
  ]

  const costOfLiving = [
    { category: 'Coffee', price: '3-8 GEL', gbp: '£0.90-2.40' },
    { category: 'Restaurant Meal', price: '15-35 GEL', gbp: '£4.50-10.50' },
    { category: 'Metro Ticket', price: '1 GEL', gbp: '£0.30' },
    { category: 'Taxi (5km)', price: '8-15 GEL', gbp: '£2.40-4.50' },
    { category: 'Grocery Shopping', price: '50-100 GEL', gbp: '£15-30' },
    { category: 'Utilities (1BR)', price: '150-300 GEL', gbp: '£45-90' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3Ccircle cx='10' cy='10' r='8'/%3E%3Ccircle cx='50' cy='50' r='8'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="bg-white/10 p-3 rounded-full mr-4">
              <Calculator className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Currency & Banking Guide
              </h1>
              <div className="flex items-center space-x-4 text-green-200">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  <span>Live Exchange Rates</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span>Banking Tips for Expats</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl max-w-3xl">
            Everything you need to know about Georgian Lari, exchange rates, banking, and managing money as an expat in Tbilisi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Currency Converter Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Live Currency Converter</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Convert Georgian Lari to British Pounds with real-time rates</p>
          </div>
          
          <div className="flex justify-center">
            <CurrencyConverter />
          </div>
        </div>

        {/* Popular Exchange Rates */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Popular Exchange Rates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCurrencies.map((currency) => (
              <div key={currency.code} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{currency.flag}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{currency.code}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{currency.name}</p>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-gray-700">{currency.symbol}</span>
                </div>
                
                {loading ? (
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ) : currentRates && currentRates[currency.code] ? (
                  <div className="text-lg font-semibold text-blue-600">
                    1 GEL = {currentRates[currency.code].toFixed(4)} {currency.code}
                  </div>
                ) : (
                  <div className="text-sm text-gray-500">Rate unavailable</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Banking Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Banking & Money Tips for Expats</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {bankingTips.map((tip, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-gray-100 p-2 rounded-lg mr-4">
                    {tip.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{tip.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{tip.description}</p>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-sm font-medium text-blue-800">{tip.tip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost of Living Reference */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cost of Living Reference</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-b dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Typical Prices in Tbilisi</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Approximate costs for common expenses</p>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-600">
              {costOfLiving.map((item, index) => (
                <div key={index} className="px-6 py-4 flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-white">{item.category}</span>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-white">{item.price}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{item.gbp}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-yellow-600 mr-3" />
              <h3 className="text-lg font-semibold text-yellow-800">Important Notes</h3>
            </div>
            <ul className="space-y-2 text-sm text-yellow-700">
              <li>• Exchange rates fluctuate constantly</li>
              <li>• Banks may charge additional fees for international transactions</li>
              <li>• Keep receipts for large currency exchanges</li>
              <li>• Notify your bank before traveling to avoid card blocks</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Info className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-lg font-semibold text-green-800">Money-Saving Tips</h3>
            </div>
            <ul className="space-y-2 text-sm text-green-700">
              <li>• Use local banks' ATMs to avoid extra fees</li>
              <li>• Exchange money at licensed exchange offices</li>
              <li>• Consider opening a Georgian bank account for longer stays</li>
              <li>• Use contactless payments where available</li>
            </ul>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <Calculator className="h-6 w-6 text-blue-600 mr-2" />
              <span className="font-semibold text-blue-800">Currency Data</span>
            </div>
            <p className="text-sm text-blue-700">
              Exchange rates are provided by exchangerate-api.com and update every 5 minutes. 
              For large transactions or official purposes, please verify rates with your bank or licensed exchange office.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrencyPage