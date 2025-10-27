'use client'

import { useState, useEffect } from 'react'
import { ArrowRightLeft, TrendingUp, TrendingDown, RefreshCw, Calculator, Info } from 'lucide-react'

interface ExchangeRateData {
  rate: number
  lastUpdated: string
  change24h?: number
  trend?: 'up' | 'down' | 'stable'
}

const CurrencyConverter = () => {
  const [gelAmount, setGelAmount] = useState<string>('100')
  const [gbpAmount, setGbpAmount] = useState<string>('0')
  const [exchangeRate, setExchangeRate] = useState<ExchangeRateData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date())
  const [isConverting, setIsConverting] = useState<'gel-to-gbp' | 'gbp-to-gel'>('gel-to-gbp')

  // Fetch exchange rate from a free API
  const fetchExchangeRate = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Using exchangerate-api.com (free tier allows 1500 requests/month)
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/GEL')
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rate')
      }
      
      const data = await response.json()
      const rate = data.rates.GBP
      
      if (!rate) {
        throw new Error('GBP rate not found')
      }

      // Calculate 24h change (simulated for demo - in production you'd store previous rates)
      const previousRate = exchangeRate?.rate || rate
      const change24h = ((rate - previousRate) / previousRate) * 100
      const trend = change24h > 0.01 ? 'up' : change24h < -0.01 ? 'down' : 'stable'

      setExchangeRate({
        rate: rate,
        lastUpdated: new Date().toISOString(),
        change24h: change24h,
        trend: trend
      })
      
      setLastRefresh(new Date())
      
      // Update conversion based on current input
      if (isConverting === 'gel-to-gbp') {
        const converted = (parseFloat(gelAmount) * rate).toFixed(2)
        setGbpAmount(converted)
      } else {
        const converted = (parseFloat(gbpAmount) / rate).toFixed(2)
        setGelAmount(converted)
      }
      
    } catch (err) {
      console.error('Exchange rate fetch error:', err)
      setError('Unable to fetch current exchange rates. Please try again later.')
      
      // Fallback rate (approximate)
      setExchangeRate({
        rate: 0.30,
        lastUpdated: new Date().toISOString(),
        change24h: 0,
        trend: 'stable'
      })
    } finally {
      setLoading(false)
    }
  }

  // Convert GEL to GBP
  const convertGelToGbp = (amount: string) => {
    if (!exchangeRate || !amount) return
    
    const gelValue = parseFloat(amount)
    if (isNaN(gelValue)) return
    
    const gbpValue = (gelValue * exchangeRate.rate).toFixed(2)
    setGbpAmount(gbpValue)
  }

  // Convert GBP to GEL
  const convertGbpToGel = (amount: string) => {
    if (!exchangeRate || !amount) return
    
    const gbpValue = parseFloat(amount)
    if (isNaN(gbpValue)) return
    
    const gelValue = (gbpValue / exchangeRate.rate).toFixed(2)
    setGelAmount(gelValue)
  }

  // Handle GEL input change
  const handleGelChange = (value: string) => {
    setGelAmount(value)
    setIsConverting('gel-to-gbp')
    convertGelToGbp(value)
  }

  // Handle GBP input change
  const handleGbpChange = (value: string) => {
    setGbpAmount(value)
    setIsConverting('gbp-to-gel')
    convertGbpToGel(value)
  }

  // Swap currencies
  const swapCurrencies = () => {
    const tempAmount = gelAmount
    setGelAmount(gbpAmount)
    setGbpAmount(tempAmount)
    setIsConverting(isConverting === 'gel-to-gbp' ? 'gbp-to-gel' : 'gel-to-gbp')
  }

  // Format last updated time
  const formatLastUpdated = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffMinutes < 1) return 'Just now'
    if (diffMinutes < 60) return `${diffMinutes}m ago`
    if (diffMinutes < 1440) return `${Math.floor(diffMinutes / 60)}h ago`
    return date.toLocaleDateString()
  }

  // Auto-refresh every 5 minutes
  useEffect(() => {
    fetchExchangeRate()
    
    const interval = setInterval(() => {
      fetchExchangeRate()
    }, 5 * 60 * 1000) // 5 minutes
    
    return () => clearInterval(interval)
  }, [])

  // Initial conversion
  useEffect(() => {
    if (exchangeRate && gelAmount) {
      convertGelToGbp(gelAmount)
    }
  }, [exchangeRate])

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Calculator className="h-6 w-6 text-blue-600 mr-2" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Currency Converter</h3>
        </div>
        <button
          onClick={fetchExchangeRate}
          disabled={loading}
          className="p-2 text-gray-500 hover:text-blue-600 transition-colors disabled:opacity-50"
          title="Refresh rates"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* Exchange Rate Display */}
      {exchangeRate && !error && (
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/30 dark:to-green-900/30 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">1 GEL = {exchangeRate.rate.toFixed(4)} GBP</span>
            {exchangeRate.trend && exchangeRate.change24h !== undefined && (
              <div className={`flex items-center text-sm ${
                exchangeRate.trend === 'up' ? 'text-green-600' : 
                exchangeRate.trend === 'down' ? 'text-red-600' : 'text-gray-600'
              }`}>
                {exchangeRate.trend === 'up' && <TrendingUp className="h-3 w-3 mr-1" />}
                {exchangeRate.trend === 'down' && <TrendingDown className="h-3 w-3 mr-1" />}
                {Math.abs(exchangeRate.change24h).toFixed(2)}%
              </div>
            )}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Updated: {formatLastUpdated(exchangeRate.lastUpdated)}
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <Info className="h-4 w-4 text-red-600 dark:text-red-400 mr-2" />
            <span className="text-sm text-red-700 dark:text-red-300">{error}</span>
          </div>
        </div>
      )}

      {/* Converter Interface */}
      <div className="space-y-4">
        {/* GEL Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Georgian Lari (GEL)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 font-medium">
              ₾
            </span>
            <input
              type="number"
              value={gelAmount}
              onChange={(e) => handleGelChange(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="0.00"
              step="0.01"
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            onClick={swapCurrencies}
            className="p-2 bg-blue-100 dark:bg-blue-900/50 hover:bg-blue-200 dark:hover:bg-blue-800/50 rounded-full transition-colors"
            title="Swap currencies"
          >
            <ArrowRightLeft className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </button>
        </div>

        {/* GBP Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            British Pound (GBP)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 font-medium">
              £
            </span>
            <input
              type="number"
              value={gbpAmount}
              onChange={(e) => handleGbpChange(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg placeholder-gray-400 dark:placeholder-gray-500"
              placeholder="0.00"
              step="0.01"
            />
          </div>
        </div>
      </div>

      {/* Quick Conversion Buttons */}
      <div className="mt-6">
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Quick Convert:</div>
        <div className="grid grid-cols-4 gap-2">
          {[10, 50, 100, 500].map((amount) => (
            <button
              key={amount}
              onClick={() => handleGelChange(amount.toString())}
              className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors"
            >
              ₾{amount}
            </button>
          ))}
        </div>
      </div>

      {/* Info Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
          <Info className="h-3 w-3 mr-1" />
          <span>Rates update every 5 minutes. For large transactions, check with your bank.</span>
        </div>
      </div>
    </div>
  )
}

export default CurrencyConverter