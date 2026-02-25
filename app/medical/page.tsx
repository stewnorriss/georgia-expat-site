'use client'

import { Stethoscope, Phone, MapPin, Clock, Globe, ExternalLink, CreditCard, Heart, Shield, AlertCircle, CheckCircle, Pill, Activity, Users, Building2 } from 'lucide-react'

const MedicalPage = () => {
  const hospitals = [
    {
      name: 'Aversi Clinic',
      type: 'Private Hospital',
      services: ['Emergency Care', 'General Medicine', 'Specialists', 'Diagnostics'],
      languages: ['Georgian', 'English', 'Russian'],
      location: 'Multiple locations',
      emergency: '24/7',
      website: 'aversi.ge'
    },
    {
      name: 'New Hospitals (Evex)',
      type: 'Private Hospital Chain',
      services: ['Emergency Care', 'Surgery', 'Maternity', 'Cardiology'],
      languages: ['Georgian', 'English'],
      location: 'Multiple locations',
      emergency: '24/7',
      website: 'evex.ge'
    },
    {
      name: 'Acad. O. Aladashvili Clinic',
      type: 'Public Hospital',
      services: ['Emergency Care', 'General Medicine', 'Surgery'],
      languages: ['Georgian', 'Limited English'],
      location: 'Vera',
      emergency: '24/7',
      website: 'hospital.ge'
    }
  ]

  const insurance = [
    {
      provider: 'Aversi Insurance',
      coverage: 'Comprehensive health insurance',
      cost: '200-500 GEL/year',
      benefits: ['Hospital care', 'Outpatient services', 'Medications', 'Dental (basic)']
    },
    {
      provider: 'Aldagi Insurance',
      coverage: 'Health and travel insurance',
      cost: '150-400 GEL/year',
      benefits: ['Medical care', 'Emergency services', 'Travel coverage']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Healthcare in Tbilisi</h1>
          <p className="text-xl max-w-3xl">
            Navigate Georgia's healthcare system with confidence. Find hospitals, understand insurance options, 
            and access quality medical care as an expat in Tbilisi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 mb-12">
          {hospitals.map((hospital, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Hospital Image */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=400&fit=crop')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="bg-black/50 text-white px-4 py-2 rounded-lg font-semibold text-center">
                    {hospital.name}
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {hospital.type}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-red-600">
                    {hospital.emergency}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-red-100 text-red-600 p-3 rounded-lg mr-4">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{hospital.name}</h3>
                    <p className="text-red-600 mb-4">{hospital.type}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {hospital.services.map((service, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Languages:</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {hospital.languages.map((language, idx) => (
                            <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{hospital.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Emergency: {hospital.emergency}</span>
                      </div>
                      {hospital.website && (
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-1 text-purple-500" />
                          <a href={`https://${hospital.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                            {hospital.website}
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Health Insurance Options</h3>
            <div className="space-y-6">
              {insurance.map((plan, index) => (
                <div key={index} className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{plan.provider}</h4>
                  <p className="text-gray-600 mb-2">{plan.coverage}</p>
                  <p className="text-green-600 font-semibold mb-2">{plan.cost}</p>
                  <ul className="text-sm text-gray-600">
                    {plan.benefits.map((benefit, idx) => (
                      <li key={idx}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Emergency Information</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Emergency Numbers:</h4>
                <ul className="text-red-700">
                  <li>• Emergency Services: 112</li>
                  <li>• Ambulance: 113</li>
                  <li>• Police: 122</li>
                  <li>• Fire: 111</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Important Tips:</h4>
                <ul className="text-blue-700 text-sm">
                  <li>• Keep insurance documents with you</li>
                  <li>• Learn basic medical Georgian phrases</li>
                  <li>• Register with a local GP</li>
                  <li>• Keep emergency contacts handy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* English-Speaking Doctors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">English-Speaking Doctors</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Dr. Nino Beridze',
                specialty: 'General Practitioner',
                languages: ['English', 'Georgian', 'Russian'],
                clinic: 'Aversi Clinic',
                location: 'Vake',
                phone: '+995 32 2 39 39 39',
                hours: 'Mon-Fri: 9:00-18:00',
                cost: '₾80-150 per visit',
                acceptsInsurance: true,
                expatReview: 'Excellent English, very patient with expats. Takes time to explain everything.'
              },
              {
                name: 'Dr. George Kvirikashvili',
                specialty: 'Internal Medicine',
                languages: ['English', 'Georgian'],
                clinic: 'New Hospitals (Evex)',
                location: 'Saburtalo',
                phone: '+995 32 2 00 20 02',
                hours: 'Mon-Sat: 10:00-19:00',
                cost: '₾100-200 per visit',
                acceptsInsurance: true,
                expatReview: 'Trained in US, understands expat concerns. Highly recommended.'
              },
              {
                name: 'Dr. Tamar Lomidze',
                specialty: 'Pediatrician',
                languages: ['English', 'Georgian', 'German'],
                clinic: 'Aversi Clinic',
                location: 'Vera',
                phone: '+995 32 2 39 39 40',
                hours: 'Mon-Fri: 9:00-17:00',
                cost: '₾70-120 per visit',
                acceptsInsurance: true,
                expatReview: 'Great with kids, speaks perfect English. Very gentle and caring.'
              },
              {
                name: 'Dr. David Chkhaidze',
                specialty: 'Dentist',
                languages: ['English', 'Georgian'],
                clinic: 'Denta Vita',
                location: 'Old Town',
                phone: '+995 32 2 98 77 66',
                hours: 'Mon-Sat: 10:00-20:00',
                cost: '₾50-300 depending on procedure',
                acceptsInsurance: false,
                expatReview: 'Modern equipment, reasonable prices. Good for routine dental work.'
              }
            ].map((doctor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-blue-600 font-semibold">{doctor.specialty}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <Globe className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">Languages: {doctor.languages.join(', ')}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{doctor.clinic} - {doctor.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <a href={`tel:${doctor.phone}`} className="text-blue-600 hover:underline">{doctor.phone}</a>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{doctor.hours}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CreditCard className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-green-600 font-semibold">{doctor.cost}</span>
                  </div>
                </div>

                <div className="p-3 bg-green-50 rounded-lg mb-3">
                  <div className="flex items-center text-sm">
                    {doctor.acceptsInsurance ? (
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-orange-600 mr-2" />
                    )}
                    <span className="text-gray-700">
                      {doctor.acceptsInsurance ? 'Accepts Insurance' : 'Cash/Card Only'}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700 italic">"{doctor.expatReview}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pharmacies by Neighborhood */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pharmacies by Neighborhood</h2>
          <div className="space-y-6">
            {[
              {
                neighborhood: 'Vake',
                pharmacies: [
                  {
                    name: 'Aversi Pharmacy',
                    address: 'Chavchavadze Ave 49',
                    hours: '24/7',
                    phone: '+995 32 2 39 39 39',
                    features: ['English-speaking staff', 'Delivery', 'Online ordering', 'Wide selection'],
                    prescriptionRequired: 'For controlled substances only'
                  },
                  {
                    name: 'PSP Pharmacy',
                    address: 'Paliashvili St 12',
                    hours: '09:00-22:00',
                    phone: '+995 32 2 25 25 25',
                    features: ['Competitive prices', 'Loyalty program'],
                    prescriptionRequired: 'For controlled substances only'
                  }
                ]
              },
              {
                neighborhood: 'Saburtalo',
                pharmacies: [
                  {
                    name: 'GPC Pharmacy',
                    address: 'Vazha-Pshavela Ave 71',
                    hours: '24/7',
                    phone: '+995 32 2 22 22 22',
                    features: ['24/7 service', 'Parking available', 'Fast service'],
                    prescriptionRequired: 'For controlled substances only'
                  }
                ]
              },
              {
                neighborhood: 'Old Town',
                pharmacies: [
                  {
                    name: 'Pharmadepot',
                    address: 'Rustaveli Ave 24',
                    hours: '08:00-23:00',
                    phone: '+995 32 2 99 88 77',
                    features: ['Central location', 'Tourist-friendly', 'English spoken'],
                    prescriptionRequired: 'For controlled substances only'
                  }
                ]
              }
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-red-600 mr-2" />
                  {area.neighborhood}
                </h3>
                <div className="space-y-4">
                  {area.pharmacies.map((pharmacy, idx) => (
                    <div key={idx} className="border-l-4 border-green-500 pl-4 py-2">
                      <h4 className="font-semibold text-gray-900 mb-2">{pharmacy.name}</h4>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="space-y-1">
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-3 w-3 mr-2" />
                            {pharmacy.address}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-3 w-3 mr-2" />
                            {pharmacy.hours}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Phone className="h-3 w-3 mr-2" />
                            <a href={`tel:${pharmacy.phone}`} className="text-blue-600 hover:underline">{pharmacy.phone}</a>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {pharmacy.features.map((feature, i) => (
                              <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                {feature}
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-gray-600">{pharmacy.prescriptionRequired}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Procedures */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Procedures</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                situation: 'Medical Emergency',
                icon: '🚨',
                steps: [
                  'Call 112 (universal emergency)',
                  'State your location clearly',
                  'Describe the emergency',
                  'Follow dispatcher instructions',
                  'Wait for ambulance (10-20 min)',
                  'Have passport and insurance ready'
                ],
                cost: 'Ambulance: ₾50-150',
                tip: 'Private ambulances faster but cost ₾200-500'
              },
              {
                situation: 'Minor Illness/Injury',
                icon: '🏥',
                steps: [
                  'Visit nearest clinic',
                  'Bring passport and insurance',
                  'Expect to pay upfront',
                  'Get receipt for reimbursement',
                  'Follow up if needed'
                ],
                cost: 'Visit: ₾50-150, Tests: ₾30-100',
                tip: 'Private clinics faster than public'
              },
              {
                situation: 'Pharmacy Visit',
                icon: '💊',
                steps: [
                  'Many meds available without Rx',
                  'Pharmacist can recommend',
                  'Bring prescription if needed',
                  'Ask for generic (cheaper)',
                  'Keep receipts for insurance'
                ],
                cost: 'Common meds: ₾5-50',
                tip: 'Pharmacists often speak English'
              }
            ].map((procedure, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="text-4xl mb-3 text-center">{procedure.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{procedure.situation}</h3>
                <ol className="space-y-2 mb-4">
                  {procedure.steps.map((step, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start">
                      <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="p-3 bg-green-50 rounded-lg mb-2">
                  <p className="text-sm font-semibold text-gray-900">Cost: {procedure.cost}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-gray-700">💡 {procedure.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Insurance Options (Expanded) */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Insurance Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                provider: 'Aversi Insurance',
                type: 'Local Insurance',
                cost: '₾200-500/year',
                coverage: 'Comprehensive health coverage in Georgia',
                benefits: ['Hospital care (public and private)', 'Outpatient services', 'Medications (50-80% coverage)', 'Basic dental care', 'Emergency services', 'Diagnostic tests'],
                limitations: ['Georgia only', 'Pre-existing conditions may not be covered', 'Waiting period for some services'],
                bestFor: 'Long-term residents, budget-conscious',
                website: 'aversi.ge'
              },
              {
                provider: 'SafetyWing',
                type: 'International Insurance',
                cost: '$45-80/month',
                coverage: 'Global health insurance for nomads',
                benefits: ['Coverage in 180+ countries', 'Includes home country (limited)', 'Emergency evacuation', 'No waiting period', 'Cancel anytime', 'COVID-19 coverage'],
                limitations: ['More expensive', 'Deductible: $250', 'Some exclusions'],
                bestFor: 'Digital nomads, frequent travelers',
                website: 'safetywing.com'
              },
              {
                provider: 'Aldagi Insurance',
                type: 'Local Insurance',
                cost: '₾150-400/year',
                coverage: 'Health and travel insurance',
                benefits: ['Medical care in Georgia', 'Emergency services', 'Travel coverage', 'Accident insurance'],
                limitations: ['Limited international coverage', 'Lower coverage limits'],
                bestFor: 'Short-term stays, travelers',
                website: 'aldagi.ge'
              },
              {
                provider: 'Cigna Global',
                type: 'International Insurance',
                cost: '$100-300/month',
                coverage: 'Premium international health insurance',
                benefits: ['Worldwide coverage', 'Direct billing', 'Dental and vision', 'Mental health', 'Maternity care', '24/7 support'],
                limitations: ['Expensive', 'Medical underwriting required'],
                bestFor: 'Families, premium coverage seekers',
                website: 'cignaglobal.com'
              }
            ].map((insurance, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{insurance.provider}</h3>
                  <p className="text-sm text-gray-600">{insurance.type}</p>
                  <p className="text-2xl font-bold text-green-600 mt-2">{insurance.cost}</p>
                </div>

                <p className="text-gray-700 mb-4">{insurance.coverage}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Benefits:</h4>
                  <ul className="space-y-1">
                    {insurance.benefits.map((benefit, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Limitations:</h4>
                  <ul className="space-y-1">
                    {insurance.limitations.map((limitation, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start">
                        <AlertCircle className="h-3 w-3 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                        {limitation}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Best For:</p>
                  <p className="text-xs text-gray-700">{insurance.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vaccination Requirements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Vaccination Requirements</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-green-800 mb-2">Required Vaccinations</h3>
              <p className="text-green-700">Georgia has NO mandatory vaccination requirements for entry. However, routine vaccinations are recommended.</p>
            </div>

            <h3 className="font-semibold text-gray-900 mb-4">Recommended Vaccinations:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { vaccine: 'Routine Vaccinations', includes: 'MMR, DPT, Polio, Flu', reason: 'Standard protection', cost: '₾30-80 per vaccine' },
                { vaccine: 'Hepatitis A', includes: 'Single vaccine', reason: 'Food and water-borne disease', cost: '₾60-100' },
                { vaccine: 'Hepatitis B', includes: 'Series of 3', reason: 'Blood-borne disease', cost: '₾70-120 per dose' },
                { vaccine: 'Typhoid', includes: 'Single vaccine', reason: 'If traveling to rural areas', cost: '₾50-90' },
                { vaccine: 'Rabies', includes: 'Series of 3', reason: 'If working with animals or hiking', cost: '₾100-150 per dose' },
                { vaccine: 'COVID-19', includes: 'As per guidelines', reason: 'Check current requirements', cost: 'Free at public clinics' }
              ].map((vax, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-1">{vax.vaccine}</h4>
                  <p className="text-sm text-gray-600 mb-2">{vax.includes}</p>
                  <p className="text-xs text-gray-600 mb-2">Reason: {vax.reason}</p>
                  <p className="text-sm font-semibold text-green-600">{vax.cost}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Where to Get Vaccinated:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Aversi Clinic:</strong> All routine and travel vaccinations, appointment required</li>
                <li>• <strong>New Hospitals (Evex):</strong> All vaccinations, walk-in or appointment</li>
                <li>• <strong>Public Health Centers:</strong> Free COVID-19 and routine vaccinations</li>
                <li>• <strong>Travel Clinics:</strong> Specialized travel medicine consultations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Medical Costs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Typical Medical Costs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Doctor Visits & Tests</h3>
              <div className="space-y-3">
                {[
                  { service: 'GP Consultation', cost: '₾50-150', notes: 'Private clinic' },
                  { service: 'Specialist Consultation', cost: '₾80-200', notes: 'Cardiologist, etc.' },
                  { service: 'Emergency Room Visit', cost: '₾100-300', notes: 'Plus tests/treatment' },
                  { service: 'House Call', cost: '₾150-300', notes: 'Available 24/7' },
                  { service: 'Blood Test (Basic)', cost: '₾30-80', notes: 'Results in 1-2 days' },
                  { service: 'X-Ray', cost: '₾40-100', notes: 'Immediate results' },
                  { service: 'Ultrasound', cost: '₾60-150', notes: 'Same day' },
                  { service: 'MRI', cost: '₾200-400', notes: 'Book in advance' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{item.service}</div>
                      <div className="text-xs text-gray-600">{item.notes}</div>
                    </div>
                    <div className="text-green-600 font-bold">{item.cost}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Dental & Medications</h3>
              <div className="space-y-3">
                {[
                  { service: 'Dental Checkup & Cleaning', cost: '₾50-100', notes: 'Every 6 months' },
                  { service: 'Filling', cost: '₾80-200', notes: 'Per tooth' },
                  { service: 'Root Canal', cost: '₾200-400', notes: 'Per tooth' },
                  { service: 'Crown', cost: '₾300-600', notes: 'Per tooth' },
                  { service: 'Antibiotics', cost: '₾10-40', notes: 'Full course' },
                  { service: 'Pain Relievers', cost: '₾5-20', notes: 'Over-counter' },
                  { service: 'Allergy Medication', cost: '₾15-40', notes: 'Monthly supply' },
                  { service: 'Birth Control', cost: '₾10-30', notes: 'Monthly' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{item.service}</div>
                      <div className="text-xs text-gray-600">{item.notes}</div>
                    </div>
                    <div className="text-green-600 font-bold">{item.cost}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Common Health Issues */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Health Issues for Expats</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                issue: 'Altitude Sickness',
                symptoms: 'Headache, nausea, dizziness',
                when: 'Visiting mountains (Kazbegi, Gudauri)',
                treatment: 'Rest, hydration, descend if severe',
                prevention: 'Acclimatize gradually, stay hydrated',
                cost: '₾50-100 if doctor visit needed'
              },
              {
                issue: 'Food Poisoning',
                symptoms: 'Stomach pain, diarrhea, vomiting',
                when: 'From street food or contaminated water',
                treatment: 'Hydration, rest, anti-diarrheal meds',
                prevention: 'Drink bottled water, eat at clean restaurants',
                cost: '₾10-30 for pharmacy meds'
              },
              {
                issue: 'Seasonal Allergies',
                symptoms: 'Sneezing, itchy eyes, congestion',
                when: 'Spring (March-May)',
                treatment: 'Antihistamines, nasal spray',
                prevention: 'Start medication before season',
                cost: '₾15-40/month for medication'
              },
              {
                issue: 'Dental Issues',
                symptoms: 'Toothache, cavity, broken tooth',
                when: 'Anytime',
                treatment: 'Visit dentist immediately',
                prevention: 'Regular checkups, good hygiene',
                cost: '₾50-400 depending on procedure'
              }
            ].map((health, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{health.issue}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Symptoms:</span>
                    <p className="text-gray-600">{health.symptoms}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">When:</span>
                    <p className="text-gray-600">{health.when}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Treatment:</span>
                    <p className="text-gray-600">{health.treatment}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Prevention:</span>
                    <p className="text-gray-600">{health.prevention}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <span className="font-semibold text-green-600">Cost: {health.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p className="font-semibold">Last updated: November 11, 2025</p>
          <p className="mt-2">Medical information verified from clinic websites, insurance providers, and expat community feedback.</p>
          <p className="mt-1">Found outdated info? <a href="mailto:contact@georgiaexpat.com" className="text-blue-600 hover:underline">Let us know</a></p>
        </div>
      </div>
    </div>
  )
}

export default MedicalPage