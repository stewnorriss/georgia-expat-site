'use client'

import { useState } from 'react'
import { DollarSign, Home, Utensils, Car, Wifi, Zap, Heart, ShoppingBag, Users, TrendingUp, Download } from 'lucide-react'

const CostCalculator = () => {
  const [lifestyle, setLifestyle] = useState<'budget' | 'moderate' | 'comfortable'>('moderate')
  const [people, setPeople] = useState(1)
  const [hasChildren, setHasChildren] = useState(false)
  const [hasCar, setHasCar] = useState(false)

  const costs = {
    budget: {
      rent1bed: 800,
      rent2bed: 1200,
      utilities: 100,
      internet: 30,
      groceries: 200,
      dining: 100,
      transport: 30,
      entertainment: 50,
      gym: 40,
      healthcare: 50,
      misc: 100
    },
    moderate: {
      rent1bed: 1200,
      rent2bed: 1800,
      utilities: 150,
      internet: 50,
      groceries: 350,
      dining: 250,
      transport: 50,
      entertainment: 150,
      gym: 80,
      healthcare: 100,
      misc: 200
    },
    comfortable: {
      rent1bed: 2000,
      rent2bed: 3000,
      utilities: 200,
      internet: 70,
      groceries: 500,
      dining: 500,
      transport: 100,
      entertainment: 300,
      gym: 150,
      healthcare: 200,
      misc: 400
    }
  }

  const calculateTotal = () => {
    const base = costs[lifestyle]
    let total = 0

    // Rent
    total += people === 1 ? base.rent1bed : base.rent2bed
    
    // Utilities and internet
    total += base.utilities + base.internet
    
    // Groceries and dining (scales with people)
    total += (base.groceries + base.dining) * people
    
    // Transport
    if (hasCar) {
      total += 300 // Car costs (fuel, parking, maintenance)
    } else {
      total += base.transport * people
    }
    
    // Entertainment and gym
    total += base.entertainment + (base.gym * people)
    
    // Healthcare
    total += base.healthcare * people
    
    // Children costs
    if (hasChildren) {
      total += 400 // School, activities, childcare
    }
    
    // Misc
    total += base.misc * people

    return Math.round(total)
  }

  const getBreakdown = () => {
    const base = costs[lifestyle]
    return [
      {
        category: 'Housing',
        icon: <Home className="h-5 w-5" />,
        items: [
          { name: 'Rent', amount: people === 1 ? base.rent1bed : base.rent2bed },
          { name: 'Utilities', amount: base.utilities },
          { name: 'Internet', amount: base.internet }
        ]
      },
      {
        category: 'Food',
        icon: <Utensils className="h-5 w-5" />,
        items: [
          { name: 'Groceries', amount: base.groceries * people },
          { name: 'Dining Out', amount: base.dining * people }
        ]
      },
      {
        category: 'Transportation',
        icon: <Car className="h-5 w-5" />,
        items: hasCar 
          ? [{ name: 'Car (fuel, parking, maintenance)', amount: 300 }]
          : [{ name: 'Public Transport', amount: base.transport * people }]
      },
      {
        category: 'Lifestyle',
        icon: <Heart className="h-5 w-5" />,
        items: [
          { name: 'Entertainment', amount: base.entertainment },
          { name: 'Gym/Fitness', amount: base.gym * people },
          { name: 'Healthcare', amount: base.healthcare * people }
        ]
      },
      {
        category: 'Other',
        icon: <ShoppingBag className="h-5 w-5" />,
        items: [
          ...(hasChildren ? [{ name: 'Children (school, activities)', amount: 400 }] : []),
          { name: 'Miscellaneous', amount: base.misc * people }
        ]
      }
    ]
  }

  const total = calculateTotal()
  const breakdown = getBreakdown()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center mb-4 p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full">
          <DollarSign className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Cost of Living Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Estimate your monthly expenses in Tbilisi based on your lifestyle and needs
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Your Situation</h2>
            
            {/* Lifestyle */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Lifestyle
              </label>
              <div className="space-y-2">
                {(['budget', 'moderate', 'comfortable'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setLifestyle(level)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-all ${
                      lifestyle === level
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="capitalize">{level}</span>
                      {lifestyle === level && <span>✓</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Number of People */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Number of Adults
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setPeople(Math.max(1, people - 1))}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  -
                </button>
                <span className="text-2xl font-bold text-gray-900 w-12 text-center">{people}</span>
                <button
                  onClick={() => setPeople(Math.min(4, people + 1))}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="mb-6">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasChildren}
                  onChange={(e) => setHasChildren(e.target.checked)}
                  className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                />
                <span className="text-sm font-semibold text-gray-700">
                  Have children (adds school/childcare costs)
                </span>
              </label>
            </div>

            {/* Car */}
            <div className="mb-6">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasCar}
                  onChange={(e) => setHasCar(e.target.checked)}
                  className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                />
                <span className="text-sm font-semibold text-gray-700">
                  Own a car (vs public transport)
                </span>
              </label>
            </div>

            {/* Total */}
            <div className="pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Estimated Monthly Cost</div>
                <div className="text-4xl font-bold text-green-600 mb-1">
                  ₾{total.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">
                  ≈ ${Math.round(total / 2.65).toLocaleString()} USD
                </div>
                <div className="text-sm text-gray-600">
                  ≈ £{Math.round(total / 3.35).toLocaleString()} GBP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown Panel */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Cost Breakdown</h2>
            
            <div className="space-y-6">
              {breakdown.map((section, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-green-600">{section.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900">{section.category}</h3>
                    <div className="flex-1 border-t border-gray-200"></div>
                    <div className="text-lg font-bold text-gray-900">
                      ₾{section.items.reduce((sum, item) => sum + item.amount, 0).toLocaleString()}
                    </div>
                  </div>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{item.name}</span>
                        <span className="font-semibold text-gray-900">₾{item.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Money-Saving Tips</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Shop at local markets (Didube, Deserters) for 30-40% cheaper groceries</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Use public transport (₾0.50/ride) instead of taxis to save ₾200+/month</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Cook at home - eating out daily can double your food costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Negotiate rent - landlords often accept 10-15% less for long-term leases</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Join expat groups for shared activities and cost-splitting opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CostCalculator
