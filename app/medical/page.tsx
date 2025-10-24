import { Stethoscope, Phone, MapPin, Clock } from 'lucide-react'

const MedicalPage = () => {
  const hospitals = [
    {
      name: 'Aversi Clinic',
      type: 'Private Hospital',
      services: ['Emergency Care', 'General Medicine', 'Specialists', 'Diagnostics'],
      languages: ['Georgian', 'English', 'Russian'],
      location: 'Multiple locations',
      emergency: '24/7'
    },
    {
      name: 'New Hospitals (Evex)',
      type: 'Private Hospital Chain',
      services: ['Emergency Care', 'Surgery', 'Maternity', 'Cardiology'],
      languages: ['Georgian', 'English'],
      location: 'Multiple locations',
      emergency: '24/7'
    },
    {
      name: 'Acad. O. Aladashvili Clinic',
      type: 'Public Hospital',
      services: ['Emergency Care', 'General Medicine', 'Surgery'],
      languages: ['Georgian', 'Limited English'],
      location: 'Vera',
      emergency: '24/7'
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
                    backgroundImage: `url('https://picsum.photos/800/400?random=${index + 300}')`,
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
      </div>
    </div>
  )
}

export default MedicalPage