'use client'

import React, { useState, useEffect } from 'react'
import { Calculator, DollarSign, Home, Car, Utensils, ShoppingBag, Heart, Zap, Wifi, Phone, TrendingUp, Info, AlertCircle } from 'lucide-react'

interface CostItem {
  id: string
  category: string
  name: string
  min: number
  max: number
  average: number
  unit: string
  icon: any
  description: string
  required: boolean
}

export default function CostCalculator() {
  const [selectedItems, setSelectedItems] = useState<{[key: string]: number}>({})
  const [currency, setCurrency] = useState('GEL')
  const [exchangeRate, setExchangeRate] = useState(1)
  const [lifestyle, setLifestyle] = useState('moderate')

  const costItems: CostItem[] = [
    // Housing
    { id: 'rent-studio', category: 'Housing', name: 'Studio Apartment (City Center)', min: 800, max: 1500, average: 1100, unit: 'month', icon: Home, description: 'Small studio in central Tbilisi', required: true },
    { id: 'rent-1br', category: 'Housing', name: '1BR Apartment (City Center)', min: 1200, max: 2500, average: 1800, unit: 'month', icon: Home, description: 'One bedroom in central location', required: true },
    { id: 'rent-2br', category: 'Housing', name: '2BR Apartment (City Center)', min: 1800, max: 4000, average: 2800, unit: 'month', icon: Home, description: 'Two bedroom in central location', required: true },
    { id: 'rent-studio-out', category: 'Housing', name: 'Studio Apartment (Outside Center)', min: 500, max: 1000, average: 700, unit: 'month', icon: Home, description: 'Studio in residential area', required: true },
    { id: 'utilities', category: 'Housing', name: 'Utilities (Electricity, Gas, Water)', min: 80, max: 200, average: 130, unit: 'month', icon: Zap, description: 'Basic utilities for apartment', required: true },
    { id: 'internet', category: 'Housing', name: 'Internet (Fiber)', min: 25, max: 60, average: 40, unit: 'month', icon: Wifi, description: 'High-speed internet connection', required: false },
    { id: 'phone', category: 'Housing', name: 'Mobile Phone Plan', min: 15, max: 50, average: 25, unit: 'month', icon: Phone, description: 'Mobile plan with data', required: false },

    // Food & Dining
    { id: 'groceries', category: 'Food', name: 'Groceries (Basic)', min: 200, max: 400, average: 300, unit: 'month', icon: ShoppingBag, description: 'Monthly grocery shopping', required: true },
    { id: 'dining-budget', category: 'Food', name: 'Dining Out (Budget)', min: 100, max: 300, average: 200, unit: 'month', icon: Utensils, description: 'Eating at local restaurants', required: false },
    { id: 'dining-mid', category: 'Food', name: 'Dining Out (Mid-range)', min: 300, max: 600, average: 450, unit: 'month', icon: Utensils, description: 'Nice restaurants occasionally', required: false },
    { id: 'coffee', category: 'Food', name: 'Coffee & Cafes', min: 50, max: 150, average: 100, unit: 'month', icon: Utensils, description: 'Regular cafe visits', required: false },

    // Transportation
    { id: 'metro-bus', category: 'Transport', name: 'Public Transport (Metro/Bus)', min: 20, max: 40, average: 30, unit: 'month', icon: Car, description: 'Monthly transport card', required: false },
    { id: 'taxi', category: 'Transport', name: 'Taxi/Ride-sharing', min: 50, max: 200, average: 120, unit: 'month', icon: Car, description: 'Occasional taxi rides', required: false },
    { id: 'car-fuel', category: 'Transport', name: 'Car (Fuel & Maintenance)', min: 200, max: 400, average: 300, unit: 'month', icon: Car, description: 'If you own a car', required: false },

    // Healthcare & Personal
    { id: 'health-insurance', category: 'Healthcare', name: 'Health Insurance', min: 50, max: 200, average: 120, unit: 'month', icon: Heart, description: 'Private health insurance', required: false },
    { id: 'gym', category: 'Lifestyle', name: 'Gym Membership', min: 80, max: 200, average: 130, unit: 'month', icon: Heart, description: 'Fitness center membership', required: false },
    { id: 'entertainment', category: 'Lifestyle', name: 'Entertainment & Activities', min: 100, max: 400, average: 250, unit: 'month', icon: Heart, description: 'Movies, events, activities', required: false },
    { id: 'shopping', category: 'Lifestyle', name: 'Clothing & Shopping', min: 100, max: 500, average: 250, unit: 'month', icon: ShoppingBag, description: 'Clothes and personal items', required: false },
  ]

  const lifestyleMultipliers = {
    budget: 0.7,
    moderate: 1.0,
    comfortable: 1.4
  }

  const exchangeRates = {
    GEL: 1,
    USD: 0.37,
    EUR: 0.34,
    GBP: 0.29
  }

  useEffect(() => {
    setExchangeRate(exchangeRates[currency as keyof typeof exchangeRates])
  }, [currency])

  const handleItemChange = (itemId: string, value: number) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: value
    }))
  }

  const getLifestyleAdjustedPrice = (item: CostItem) => {
    const multiplier = lifestyleMultipliers[lifestyle as keyof typeof lifestyleMultipliers]
    return Math.round(item.average * multiplier)
  }

  const calculateTotal = () => {
    let total = 0
    costItems.forEach(item => {
      if (selectedItems[item.id] !== undefined) {
        total += selectedItems[item.id]
      } else if (item.required) {
        total += getLifestyleAdjustedPrice(item)
      }
    })
    return total
  }

  const convertCurrency = (amount: number) => {
    return Math.round(amount * exchangeRate)
  }

  const getCurrencySymbol = () => {
    switch (currency) {
      case 'USD': return '$'
      case 'EUR': return '€'
      case 'GBP': return '£'
      default: return '₾'
    }
  }

  const groupedItems = costItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as {[key: string]: CostItem[]})

  const totalMonthly = calculateTotal()
  const totalYearly = totalMonthly * 12

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Calculator className="h-8 w-8 text-blue-600 mr-3" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Cost of Living Calculator</h2>
          <p className="text-gray-600">Estimate your monthly expenses in Tbilisi</p>
        </div>
      </div>

      {/* Controls */}
      <div className="grid md:grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Lifestyle</label>
          <select
            value={lifestyle}
            onChange={(e) => setLifestyle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="budget">Budget (30% below average)</option>
            <option value="moderate">Moderate (Average)</option>
            <option value="comfortable">Comfortable (40% above average)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="GEL">Georgian Lari (₾)</option>
            <option value="USD">US Dollar ($)</option>
            <option value="EUR">Euro (€)</option>
            <option value="GBP">British Pound (£)</option>
          </select>
        </div>
      </div>

      {/* Cost Categories */}
      <div className="space-y-6 mb-8">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              {React.createElement(items[0].icon, { className: "h-5 w-5 mr-2 text-blue-600" })}
              {category}
            </h3>
            
            <div className="space-y-3">
              {items.map(item => {
                const adjustedPrice = getLifestyleAdjustedPrice(item)
                const currentValue = selectedItems[item.id] ?? (item.required ? adjustedPrice : 0)
                
                return (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        {item.required && (
                          <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Required</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <div className="text-xs text-gray-500 mt-1">
                        Range: {getCurrencySymbol()}{convertCurrency(item.min)} - {getCurrencySymbol()}{convertCurrency(item.max)}
                      </div>
                    </div>
                    
                    <div className="ml-4 text-right">
                      <input
                        type="number"
                        min="0"
                        value={currentValue}
                        onChange={(e) => handleItemChange(item.id, parseInt(e.target.value) || 0)}
                        className="w-24 p-2 border border-gray-300 rounded text-right focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                      <div className="text-xs text-gray-500 mt-1">per {item.unit}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
          Your Estimated Costs
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-sm text-gray-600 mb-1">Monthly Total</div>
            <div className="text-3xl font-bold text-blue-600">
              {getCurrencySymbol()}{convertCurrency(totalMonthly).toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              ≈ ₾{totalMonthly.toLocaleString()} GEL
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="text-sm text-gray-600 mb-1">Yearly Total</div>
            <div className="text-3xl font-bold text-green-600">
              {getCurrencySymbol()}{convertCurrency(totalYearly).toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              ≈ ₾{totalYearly.toLocaleString()} GEL
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="mt-6">
          <h4 className="font-semibold text-gray-900 mb-3">Cost Breakdown</h4>
          <div className="space-y-2">
            {Object.entries(groupedItems).map(([category, items]) => {
              const categoryTotal = items.reduce((sum, item) => {
                const value = selectedItems[item.id] ?? (item.required ? getLifestyleAdjustedPrice(item) : 0)
                return sum + value
              }, 0)
              
              if (categoryTotal === 0) return null
              
              const percentage = ((categoryTotal / totalMonthly) * 100).toFixed(1)
              
              return (
                <div key={category} className="flex justify-between items-center">
                  <span className="text-gray-700">{category}</span>
                  <div className="text-right">
                    <span className="font-semibold">{getCurrencySymbol()}{convertCurrency(categoryTotal).toLocaleString()}</span>
                    <span className="text-sm text-gray-500 ml-2">({percentage}%)</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
        <div className="flex items-center mb-2">
          <Info className="h-5 w-5 text-yellow-600 mr-2" />
          <h4 className="font-semibold text-yellow-800">Money-Saving Tips</h4>
        </div>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Consider living outside the city center to save 30-50% on rent</li>
          <li>• Use public transport - it's efficient and very affordable</li>
          <li>• Shop at local markets for fresh produce at better prices</li>
          <li>• Many activities like hiking and exploring are completely free</li>
          <li>• Georgian wine offers excellent quality at reasonable prices</li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
        <div className="flex items-center mb-2">
          <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
          <h4 className="font-semibold text-blue-800">Important Notes</h4>
        </div>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Prices are estimates based on 2024 data and may vary</li>
          <li>• Exchange rates fluctuate - check current rates for accuracy</li>
          <li>• Costs can vary significantly between neighborhoods</li>
          <li>• Consider seasonal variations, especially for utilities</li>
        </ul>
      </div>
    </div>
  )
}