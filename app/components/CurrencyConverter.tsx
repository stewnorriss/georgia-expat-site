'use client'

import { useState, useEffect } from 'react'
import { DollarSign, TrendingUp, RefreshCw, ArrowRightLeft } from 'lucide-react'

interface ExchangeRates {
  USD: number
  EUR: number
  GBP: number
  GEL: number
}

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<string>('100')
  const [fromCurrency, setFromCurrency] = useState<string>('USD')
  const [toCurrency, setToCurrency] = useState<string>('GEL')
  const [rates, setRates] = useState<ExchangeRates>({ USD: 1, EUR: 0.92, GBP: 0.79, GEL: 2.65 })
  const [loading, setLoading] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<string>('')

  const currencies = [
    { code: 'GEL', name: 'Georgian Lari', flag: '🇬🇪' },
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
    { code: 'GBP', name: 'British Pound', flag: '🇬🇧' }
  ]

  useEffect(() => {
    fetchRates()
  }, [])

  const fetchRates = async () => {
    setLoading(true)
    try {
      // Using exchangerate-api.com (free tier, no API key for basic usage)
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
      const data = await response.json()
      
      if (data.rates) {
        setRates({
          USD: 1,
          EUR: data.rates.EUR || 0.92,
          GBP: data.rates.GBP || 0.79,
          GEL: data.rates.GEL || 2.65
        })
        setLastUpdated(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }))
      }
    } catch (error) {
      console.error('Failed to fetch rates:', error)
      // Keep default rates if fetch fails
    }
    setLoading(false)
  }

  const convert = (): number => {
    const numAmount = parseFloat(amount) || 0
    
    // Convert to USD first (base currency)
    const amountInUSD = fromCurrency === 'USD' ? numAmount : numAmount / rates[fromCurrency as keyof ExchangeRates]
    
    // Convert from USD to target currency
    const result = toCurrency === 'USD' ? amountInUSD : amountInUSD * rates[toCurrency as keyof ExchangeRates]
    
    return result
  }

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const quickAmounts = [100, 500, 1000, 5000]

  return (
    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <DollarSign className="h-6 w-6" />
          <h3 className="text-lg font-bold">Currency Converter</h3>
        </div>
        <button
          onClick={fetchRates}
          disabled={loading}
          className="bg-green-700 hover:bg-green-800 p-2 rounded-lg transition-colors disabled:opacity-50"
          title="Refresh rates"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {lastUpdated && (
        <div className="text-xs opacity-75 mb-4 flex items-center">
          <TrendingUp className="h-3 w-3 mr-1" />
          Updated: {lastUpdated}
        </div>
      )}

      {/* Quick Amount Buttons */}
      <div className="flex space-x-2 mb-4">
        {quickAmounts.map((quickAmount) => (
          <button
            key={quickAmount}
            onClick={() => setAmount(quickAmount.toString())}
            className="flex-1 bg-green-700 hover:bg-green-800 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            {quickAmount}
          </button>
        ))}
      </div>

      {/* From Currency */}
      <div className="bg-white/10 rounded-lg p-4 mb-3">
        <label className="text-xs opacity-75 block mb-2">From</label>
        <div className="flex space-x-3">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder="Amount"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code} className="bg-green-600">
                {currency.flag} {currency.code}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center -my-2 relative z-10">
        <button
          onClick={swapCurrencies}
          className="bg-green-700 hover:bg-green-800 p-2 rounded-full transition-colors shadow-lg"
        >
          <ArrowRightLeft className="h-4 w-4" />
        </button>
      </div>

      {/* To Currency */}
      <div className="bg-white/10 rounded-lg p-4 mb-4">
        <label className="text-xs opacity-75 block mb-2">To</label>
        <div className="flex space-x-3">
          <div className="flex-1 bg-white/20 border border-white/30 rounded-lg px-3 py-2">
            <div className="text-2xl font-bold">
              {convert().toFixed(2)}
            </div>
          </div>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="bg-white/20 border border-white/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code} className="bg-green-600">
                {currency.flag} {currency.code}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Exchange Rate Info */}
      <div className="bg-white/10 rounded-lg p-3 text-sm">
        <div className="flex justify-between items-center">
          <span className="opacity-75">Exchange Rate:</span>
          <span className="font-semibold">
            1 {fromCurrency} = {(rates[toCurrency as keyof ExchangeRates] / rates[fromCurrency as keyof ExchangeRates]).toFixed(4)} {toCurrency}
          </span>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="text-xs opacity-75 mb-2">Quick Reference (1 GEL =)</div>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="bg-white/10 rounded p-2 text-center">
            <div className="font-semibold">${(1 / rates.GEL).toFixed(2)}</div>
            <div className="opacity-75">USD</div>
          </div>
          <div className="bg-white/10 rounded p-2 text-center">
            <div className="font-semibold">€{(rates.EUR / rates.GEL).toFixed(2)}</div>
            <div className="opacity-75">EUR</div>
          </div>
          <div className="bg-white/10 rounded p-2 text-center">
            <div className="font-semibold">£{(rates.GBP / rates.GEL).toFixed(2)}</div>
            <div className="opacity-75">GBP</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrencyConverter
