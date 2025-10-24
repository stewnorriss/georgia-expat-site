import React from 'react'

const LanguagePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn Georgian Language
          </h1>
          <p className="text-xl max-w-3xl">
            Master Georgian with 29 structured lessons. From basic greetings to complex conversations, 
            build your language skills to connect with locals and enrich your expat experience.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Georgian Language Lessons</h2>
          <p className="text-gray-600">
            29 comprehensive lessons covering everything from basic greetings to advanced conversation skills.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LanguagePage
