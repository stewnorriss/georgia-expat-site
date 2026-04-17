'use client'

import { useState, useEffect } from 'react'
import { ArrowRightLeft, RefreshCw } from 'lucide-react'

interface Rates { USD: number; EUR: number; GBP: number; GEL: number }

const currencies = [
  { code: 'GEL', name: 'Georgian Lari', flag: '🇬🇪' },
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
]

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('100')
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('GEL')
  const [rates, setRates] = useState<Rates>({ USD: 1, EUR: 0.92, GBP: 0.79, GEL: 2.65 })
  const [loading, setLoading] = useState(false)
  const [updated, setUpdated] = useState('')

  const fetchRates = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
      const data = await res.json()
      if (data.rates) {
        setRates({ USD: 1, EUR: data.rates.EUR || 0.92, GBP: data.rates.GBP || 0.79, GEL: data.rates.GEL || 2.65 })
        setUpdated(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }))
      }
    } catch { /* keep defaults */ }
    setLoading(false)
  }

  useEffect(() => { fetchRates() }, [])

  const result = (() => {
    const n = parseFloat(amount) || 0
    const inUSD = from === 'USD' ? n : n / rates[from as keyof Rates]
    return to === 'USD' ? inUSD : inUSD * rates[to as keyof Rates]
  })()

  const rate = rates[to as keyof Rates] / rates[from as keyof Rates]

  return (
    <div className="card p-6 h-full">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Currency Converter</h3>
        <button onClick={fetchRates} disabled={loading} className="text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 transition-colors disabled:opacity-50" aria-label="Refresh exchange rates">
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* From */}
      <div className="mb-3">
        <label htmlFor="cv-amount" className="text-xs text-gray-400 mb-1.5 block">From</label>
        <div className="flex gap-2">
          <input
            id="cv-amount"
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500/50 transition-all"
          />
          <label htmlFor="cv-from" className="sr-only">From currency</label>
          <select
            id="cv-from"
            value={from}
            onChange={e => setFrom(e.target.value)}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/30"
          >
            {currencies.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
          </select>
        </div>
      </div>

      {/* Swap */}
      <div className="flex justify-center -my-1 relative z-10">
        <button
          onClick={() => { setFrom(to); setTo(from) }}
          aria-label={`Swap: convert from ${to} to ${from}`}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowRightLeft className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* To */}
      <div className="mb-4">
        <label className="text-xs text-gray-400 mb-1.5 block">To</label>
        <div className="flex gap-2">
          <div className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5" aria-live="polite">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">{result.toFixed(2)}</span>
          </div>
          <label htmlFor="cv-to" className="sr-only">To currency</label>
          <select
            id="cv-to"
            value={to}
            onChange={e => setTo(e.target.value)}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/30"
          >
            {currencies.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
          </select>
        </div>
      </div>

      {/* Rate + quick ref */}
      <div className="border-t border-gray-100 dark:border-gray-700/50 pt-4 space-y-3">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Rate</span>
          <span className="font-medium text-gray-600 dark:text-gray-300">1 {from} = {rate.toFixed(4)} {to}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs">
          {currencies.filter(c => c.code !== 'GEL').map(c => (
            <div key={c.code} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2.5 text-center">
              <div className="font-medium text-gray-900 dark:text-white">{(1 / rates[c.code as keyof Rates] * rates.GEL).toFixed(2)}</div>
              <div className="text-gray-400 mt-0.5">GEL/{c.code}</div>
            </div>
          ))}
        </div>
        {updated && <p className="text-[10px] text-gray-400 text-center">Updated {updated}</p>}
      </div>
    </div>
  )
}

export default CurrencyConverter
