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
  const [fromCurrency, setFromCurrency] = useState<string>('GBP')
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
    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg p-4 text-white shadow-md">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-1.5">
          <DollarSign className="h-4 w-4" />
          <h3 className="text-sm font-bold">Currency Converter</h3>
        </div>
        <button
          onClick={fetchRates}
          disabled={loading}
          className="bg-green-700 hover:bg-green-800 p-1.5 rounded transition-colors disabled:opacity-50"
          title="Refresh rates"
        >
          <RefreshCw className={`h-3 w-3 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {lastUpdated && (
        <div className="text-[10px] opacity-75 mb-3 flex items-center">
          <TrendingUp className="h-2.5 w-2.5 mr-1" />
          Updated: {lastUpdated}
        </div>
      )}

      {/* Quick Amount Buttons */}
      <div className="flex space-x-1.5 mb-3">
        {quickAmounts.map((quickAmount) => (
          <button
            key={quickAmount}
            onClick={() => setAmount(quickAmount.toString())}
            className="flex-1 bg-green-700 hover:bg-green-800 py-1 rounded text-[10px] font-semibold transition-colors"
          >
            {quickAmount}
          </button>
        ))}
      </div>

      {/* From Currency */}
      <div className="bg-white/10 rounded-lg p-2.5 mb-2">
        <label className="text-[10px] opacity-75 block mb-1.5">From</label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 bg-white/20 border border-white/30 rounded px-2 py-1.5 text-white text-sm placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
            placeholder="Amount"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="bg-white/20 border border-white/30 rounded px-2 py-1.5 text-white text-xs focus:outline-none focus:ring-1 focus:ring-white/50"
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
      <div className="flex justify-center -my-1.5 relative z-10">
        <button
          onClick={swapCurrencies}
          className="bg-green-700 hover:bg-green-800 p-1.5 rounded-full transition-colors shadow-md"
        >
          <ArrowRightLeft className="h-3 w-3" />
        </button>
      </div>

      {/* To Currency */}
      <div className="bg-white/10 rounded-lg p-2.5 mb-3">
        <label className="text-[10px] opacity-75 block mb-1.5">To</label>
        <div className="flex space-x-2">
          <div className="flex-1 bg-white/20 border border-white/30 rounded px-2 py-1.5">
            <div className="text-lg font-bold">
              {convert().toFixed(2)}
            </div>
          </div>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="bg-white/20 border border-white/30 rounded px-2 py-1.5 text-white text-xs focus:outline-none focus:ring-1 focus:ring-white/50"
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
      <div className="bg-white/10 rounded-lg p-2 text-xs mb-3">
        <div className="flex justify-between items-center">
          <span className="opacity-75 text-[10px]">Rate:</span>
          <span className="font-semibold">
            1 {fromCurrency} = {(rates[toCurrency as keyof ExchangeRates] / rates[fromCurrency as keyof ExchangeRates]).toFixed(4)} {toCurrency}
          </span>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="pt-3 border-t border-white/20">
        <div className="text-[10px] opacity-75 mb-1.5">Quick Reference (1 GEL =)</div>
        <div className="grid grid-cols-3 gap-1.5 text-[10px]">
          <div className="bg-white/10 rounded p-1.5 text-center">
            <div className="font-semibold">${(1 / rates.GEL).toFixed(2)}</div>
            <div className="opacity-75">USD</div>
          </div>
          <div className="bg-white/10 rounded p-1.5 text-center">
            <div className="font-semibold">€{(rates.EUR / rates.GEL).toFixed(2)}</div>
            <div className="opacity-75">EUR</div>
          </div>
          <div className="bg-white/10 rounded p-1.5 text-center">
            <div className="font-semibold">£{(rates.GBP / rates.GEL).toFixed(2)}</div>
            <div className="opacity-75">GBP</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrencyConverter
