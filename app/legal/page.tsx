'use client'

import { useState } from 'react'
import { FileText, Clock, MapPin, Phone, ExternalLink, CheckCircle, AlertTriangle, Users, Building, CreditCard, Home, Briefcase, Globe } from 'lucide-react'
import PageHero from '../components/PageHero'

export default function LegalPage() {
  const [selectedCategory, setSelectedCategory] = useState('visa')

  const visaInfo = {
    categories: [
      {
        type: 'Visa-Free Entry',
        duration: '90 days in 180-day period (365 days for US citizens)',
        requirements: [
          'Valid passport (3+ months beyond stay)',
          'Mandatory travel insurance — min. 30,000 GEL coverage (since Jan 2026)',
          'Proof of accommodation',
          'Proof of funds (~€50/day recommended)',
          'Return or onward ticket',
        ],
        cost: 'Free (insurance cost varies)',
        processing: 'Immediate at border',
        notes: 'Available to 90+ countries including UK, EU, Canada, Australia. US citizens get 365 days. Insurance is checked at boarding and sometimes at the border — arrive without it and expect to buy on the spot at a 50–100% markup.',
        officialLink: 'https://www.mfa.gov.ge/en/page/visa-information'
      },
      {
        type: 'Work Permit (NEW — March 2026)',
        duration: 'Tied to employment contract',
        requirements: [
          'Job offer or self-employment registration',
          'Registration in electronic labor migration system',
          'Employment contract or business documentation',
          'Medical insurance',
          'Criminal background check (expected)',
        ],
        cost: '₾100–300 (fees TBC)',
        processing: '15–30 working days (estimated)',
        notes: 'Mandatory from March 1, 2026 for employees of Georgian companies, self-employed foreigners, entrepreneurs, and remote workers at Georgian startups. Fines: 2,000 GEL per violation, doubled for repeats, possible deportation. Foreigners already registered before March 1 have until Jan 1, 2027 to comply. Digital nomad/remote worker status for foreign employers is still pending clarification.',
        officialLink: 'https://www.moh.gov.ge'
      },
      {
        type: 'Residence Permit',
        duration: '1–5 years (new 3-year IT track planned)',
        requirements: [
          'Completed application form',
          '2 passport photos',
          'Health insurance (30,000 GEL minimum)',
          'Proof of income (₾2,400/year minimum)',
          'Proof of accommodation',
          'Work permit (if employed — from March 2026)',
        ],
        cost: '₾50–200 depending on type',
        processing: '30 working days',
        notes: 'Required for stays beyond visa-free allowance. Can be based on employment, business, study, investment, or family reunification. A new 3-year residence permit for IT workers is planned alongside the work permit system.',
        officialLink: 'https://migration.commission.ge'
      },
      {
        type: 'E-Visa (C-type)',
        duration: '30–90 days',
        requirements: [
          'Online application via consular portal',
          'Passport scan and photo',
          'Travel insurance (30,000 GEL minimum)',
          'Proof of accommodation and purpose',
          'Proof of funds',
        ],
        cost: '$20–100 depending on type',
        processing: '~5 working days',
        notes: 'For nationalities not eligible for visa-free entry. Refusal rate is 5–10%, usually due to incomplete documents. Apply at least 2 weeks before travel.',
        officialLink: 'https://www.evisa.gov.ge'
      },
    ]
  }

  const taxInfo = {
    rates: [
      { category: 'Personal Income Tax', rate: '20%', threshold: 'Income over ₾30,000/year' },
      { category: 'Small Business Status', rate: '1%', threshold: 'Turnover under ₾500,000/year' },
      { category: 'Micro Business Status', rate: '0%', threshold: 'Turnover under ₾30,000/year' },
      { category: 'Property Tax', rate: '0.05-1%', threshold: 'Based on property value' }
    ],
    obligations: [
      'Register as tax resident if staying >183 days/year',
      'File annual tax return by March 31st',
      'Pay advance tax payments quarterly',
      'Keep records of all income and expenses',
      'Declare foreign income if tax resident'
    ]
  }

  const businessRegistration = {
    steps: [
      {
        step: 1,
        title: 'Choose Business Structure',
        description: 'LLC, JSC, Partnership, or Sole Proprietorship',
        timeframe: '1 day',
        cost: 'Free consultation'
      },
      {
        step: 2,
        title: 'Reserve Company Name',
        description: 'Check availability and reserve unique name',
        timeframe: '1 day',
        cost: '₾30'
      },
      {
        step: 3,
        title: 'Prepare Documents',
        description: 'Articles of incorporation, shareholder agreements',
        timeframe: '2-3 days',
        cost: '₾200-500 (legal fees)'
      },
      {
        step: 4,
        title: 'Register with House of Justice',
        description: 'Submit documents and pay registration fee',
        timeframe: '1 day',
        cost: '₾200-400'
      },
      {
        step: 5,
        title: 'Open Bank Account',
        description: 'Corporate bank account with registered capital',
        timeframe: '1-2 days',
        cost: 'Bank fees vary'
      }
    ]
  }

  const propertyLaws = {
    buying: [
      'Foreigners can buy property freely in Georgia',
      'No restrictions on apartment/commercial property ownership',
      'Agricultural land purchase restricted for non-citizens',
      'Property registration required within 30 days',
      'Notarization of purchase agreement mandatory'
    ],
    renting: [
      'Rental agreements should be in writing',
      'Standard lease terms: 1-2 years',
      'Security deposit: 1-2 months rent',
      'Landlord must provide 30 days notice for termination',
      'Tenant rights protected under Civil Code'
    ],
    costs: [
      { service: 'Property Registration', cost: '₾50', timeframe: '1 day' },
      { service: 'Notarization', cost: '₾100-300', timeframe: '1 day' },
      { service: 'Property Valuation', cost: '₾200-500', timeframe: '3-5 days' },
      { service: 'Legal Due Diligence', cost: '₾500-1000', timeframe: '5-10 days' }
    ]
  }

  const governmentOffices = [
    {
      name: 'House of Justice (Main)',
      address: '4 Ilia Chavchavadze Ave, Tbilisi',
      phone: '+995 32 2 91 91 91',
      services: ['Visa extensions', 'Residence permits', 'Document authentication'],
      hours: 'Mon-Fri: 9:00-18:00, Sat: 10:00-15:00',
      website: 'rs.ge'
    },
    {
      name: 'Public Service Hall',
      address: '2 Ilia Chavchavadze Ave, Tbilisi',
      phone: '+995 32 2 91 91 91',
      services: ['Business registration', 'Tax registration', 'Property registration'],
      hours: 'Mon-Fri: 9:00-18:00, Sat: 10:00-15:00',
      website: 'psh.gov.ge'
    },
    {
      name: 'Revenue Service',
      address: '7 Merab Aleksidze St, Tbilisi',
      phone: '+995 32 2 91 91 91',
      services: ['Tax registration', 'Tax consultations', 'Tax returns'],
      hours: 'Mon-Fri: 9:00-18:00',
      website: 'rs.ge'
    }
  ]

  const categories = [
    { id: 'visa', name: 'Visa & Residence', icon: Globe },
    { id: 'tax', name: 'Taxes', icon: CreditCard },
    { id: 'business', name: 'Business Registration', icon: Briefcase },
    { id: 'property', name: 'Property Laws', icon: Home },
    { id: 'offices', name: 'Government Offices', icon: Building }
  ]

  const renderContent = () => {
    switch (selectedCategory) {
      case 'visa':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Visa-Free Entry (Verified November 2025)
              </h3>
              <p className="text-blue-700 mb-3">
                Citizens of 98 countries can enter Georgia visa-free for up to 365 days (1 year). 
                This includes: USA, UK, EU countries, Canada, Australia, New Zealand, Japan, South Korea, and many others.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <a 
                  href="https://www.mfa.gov.ge/en/page/visa-information" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Official MFA List
                </a>
                <a 
                  href="https://migration.commission.ge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Migration Portal
                </a>
              </div>
            </div>
            
            <div className="grid gap-6">
              {visaInfo.categories.map((visa, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{visa.type}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {visa.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Duration:</span>
                        <span className="text-gray-600">{visa.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Cost:</span>
                        <span className="text-gray-600">{visa.cost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Processing:</span>
                        <span className="text-gray-600">{visa.processing}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">{visa.notes}</p>
                    {visa.officialLink && (
                      <a 
                        href={visa.officialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Official Information
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Last Verified */}
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center text-green-800">
                <CheckCircle className="h-5 w-5 mr-2" />
                <div>
                  <p className="font-semibold">Information Verified: November 11, 2025</p>
                  <p className="text-sm text-green-700 mt-1">
                    Sources: Ministry of Foreign Affairs (mfa.gov.ge), Migration Commission (migration.commission.ge)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'tax':
        return (
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Tax Residency</h3>
              <p className="text-yellow-700">
                You become a Georgian tax resident if you stay in Georgia for 183+ days in a calendar year.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tax Rates</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-700">Tax Type</th>
                      <th className="text-left py-2 font-semibold text-gray-700">Rate</th>
                      <th className="text-left py-2 font-semibold text-gray-700">Threshold</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxInfo.rates.map((tax, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 text-gray-900">{tax.category}</td>
                        <td className="py-3 text-gray-600 font-semibold">{tax.rate}</td>
                        <td className="py-3 text-gray-600">{tax.threshold}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tax Obligations</h3>
              <ul className="space-y-3">
                {taxInfo.obligations.map((obligation, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">{obligation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )

      case 'business':
        return (
          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Business-Friendly Environment</h3>
              <p className="text-green-700">
                Georgia ranks 7th globally in the World Bank's Ease of Doing Business index. 
                Company registration can be completed in 1 day.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Registration Process</h3>
              <div className="space-y-4">
                {businessRegistration.steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 border border-gray-100 rounded-lg">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {step.timeframe}
                        </span>
                        <span className="flex items-center text-gray-500">
                          <CreditCard className="h-4 w-4 mr-1" />
                          {step.cost}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'property':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Buying Property</h3>
                <ul className="space-y-3">
                  {propertyLaws.buying.map((law, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span className="text-gray-700 text-sm">{law}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Renting Property</h3>
                <ul className="space-y-3">
                  {propertyLaws.renting.map((law, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700 text-sm">{law}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Associated Costs</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-700">Service</th>
                      <th className="text-left py-2 font-semibold text-gray-700">Cost</th>
                      <th className="text-left py-2 font-semibold text-gray-700">Timeframe</th>
                    </tr>
                  </thead>
                  <tbody>
                    {propertyLaws.costs.map((cost, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 text-gray-900">{cost.service}</td>
                        <td className="py-3 text-gray-600 font-semibold">{cost.cost}</td>
                        <td className="py-3 text-gray-600">{cost.timeframe}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )

      case 'offices':
        return (
          <div className="space-y-6">
            {governmentOffices.map((office, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.name}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                      <span className="text-gray-600 text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-400 mr-2" />
                      <a href={`tel:${office.phone}`} className="text-blue-600 hover:underline text-sm">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <ExternalLink className="h-4 w-4 text-gray-400 mr-2" />
                      <a href={`https://${office.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                        {office.website}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-600 text-sm">{office.hours}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Services:</h4>
                    <ul className="space-y-1">
                      {office.services.map((service, idx) => (
                        <li key={idx} className="text-sm text-gray-600">• {service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHero
        title="Legal & Bureaucracy Guide"
        subtitle="Updated for 2026 regulations"
        description="Navigate Georgia's legal requirements including the new mandatory work permit system (March 2026), travel insurance requirements, visa rules, taxes, and business registration."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-blue-300 text-gray-700'
                }`}
              >
                <category.icon className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold text-sm">{category.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {renderContent()}
        </div>

        {/* Important Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8 rounded-lg">
          <div className="flex items-center mb-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
            <h3 className="text-lg font-semibold text-yellow-800">Legal Disclaimer</h3>
          </div>
          <p className="text-yellow-700">
            This information is provided for general guidance only and should not be considered as legal advice. 
            Laws and regulations may change. Always consult with qualified legal professionals or government 
            offices for specific situations and current requirements.
          </p>
        </div>
      </div>
    </div>
  )
}