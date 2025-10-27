'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react'
import Link from 'next/link'

const LiveCurrencyRate = () => {
  const [rate, setRate] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [trend, setTrend] = useState<'up' | 'down' | 'stable'>('stable')

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/GEL')
        const data = await response.json()
        const gbpRate = data.rates.GBP
        
        if (gbpRate) {
          // Simulate trend (in production, you'd compare with previous rate)
          const previousRate = rate || gbpRate
          const change = gbpRate - previousRate
          setTrend(change > 0.001 ? 'up' : change < -0.001 ? 'down' : 'stable')
          setRate(gbpRate)
        }
      } catch (error) {
        console.error('Failed to fetch exchange rate:', error)
        // Fallback rate
        setRate(0.30)
      } finally {
        setLoading(false)
      }
    }

    fetchRate()
    // Update every 10 minutes
    const interval = setInterval(fetchRate, 10 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [rate])

  if (loading) {
    return (
      <div className="bg-gray-800 rounded-lg p-3 animate-pulse">
        <div className="h-4 bg-gray-700 rounded w-24 mb-2"></div>
        <div className="h-3 bg-gray-700 rounded w-16"></div>
      </div>
    )
  }

  return (
    <Link href="/currency" className="block bg-gray-800 hover:bg-gray-700 rounded-lg p-3 transition-colors group">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 text-green-400 mr-2" />
          <div>
            <div className="text-sm font-semibold text-white">
              1 GEL = £{rate?.toFixed(4)}
            </div>
            <div className="text-xs text-gray-400">Live Rate</div>
          </div>
        </div>
        <div className={`flex items-center text-xs ${
          trend === 'up' ? 'text-green-400' : 
          trend === 'down' ? 'text-red-400' : 'text-gray-400'
        }`}>
          {trend === 'up' && <TrendingUp className="h-3 w-3" />}
          {trend === 'down' && <TrendingDown className="h-3 w-3" />}
          {trend === 'stable' && <div className="w-3 h-0.5 bg-gray-400 rounded"></div>}
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-400">
        Click for full converter →
      </div>
    </Link>
  )
}

export default LiveCurrencyRate