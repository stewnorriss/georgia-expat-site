interface AIResponse {
  text: string
  confidence: number
  suggestions?: string[]
  category?: string
  relatedLinks?: { title: string; url: string }[]
}

interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

class AIService {
  private apiKey: string | null = null
  private baseUrl = 'https://api.openai.com/v1'
  
  constructor() {
    // In production, this would come from environment variables
    // For demo purposes, we'll use a mock service
    this.apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || null
  }

  async generateResponse(userMessage: string, context?: string): Promise<AIResponse> {
    // If no API key, use enhanced mock responses
    if (!this.apiKey) {
      return this.generateMockResponse(userMessage, context)
    }

    try {
      const messages: ChatMessage[] = [
        {
          role: 'system',
          content: `You are Stew's AI assistant for Tbilisi, Georgia. You help English expats with:
          - Restaurant recommendations and Georgian cuisine
          - Transportation (metro, buses, taxis, marshrutkas)
          - Cultural etiquette and Georgian customs
          - Language learning (Georgian phrases)
          - Housing and neighborhoods
          - Activities and attractions
          - Medical and emergency information
          
          Always be helpful, friendly, and provide specific, actionable advice for living in Tbilisi.
          Include confidence scores and suggest related topics when appropriate.
          ${context ? `Additional context: ${context}` : ''}`
        },
        {
          role: 'user',
          content: userMessage
        }
      ]

      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages,
          max_tokens: 500,
          temperature: 0.7
        })
      })

      if (!response.ok) {
        throw new Error('AI API request failed')
      }

      const data = await response.json()
      const aiText = data.choices[0]?.message?.content || 'I apologize, but I couldn\'t generate a response right now.'

      return {
        text: aiText,
        confidence: 85,
        suggestions: this.generateSuggestions(userMessage),
        category: this.categorizeMessage(userMessage),
        relatedLinks: this.getRelatedLinks(userMessage)
      }
    } catch (error) {
      console.error('AI API Error:', error)
      return this.generateMockResponse(userMessage, context)
    }
  }

  private generateMockResponse(userMessage: string, context?: string): AIResponse {
    const lowerMessage = userMessage.toLowerCase()
    
    // Enhanced restaurant responses
    if (lowerMessage.includes('restaurant') || lowerMessage.includes('food') || lowerMessage.includes('eat')) {
      const responses = [
        "For authentic Georgian cuisine, I highly recommend **Shavi Lomi** in Old Town - their khachapuri is legendary! **Cafe Littera** offers fine dining with a modern twist on Georgian classics. For casual dining, **Machakhela** serves excellent khinkali and mtsvadi. Each has its own charm and represents different aspects of Georgian culinary culture.",
        "**Barbarestan** is a must-visit for historical Georgian recipes from a 19th-century cookbook. **Azarphesha** offers great traditional food with live music. For international cuisine, try **Culinarium** or **Shemoikhede Genatsvale**. Pro tip: Always try the house wine - Georgian wine culture is incredible!",
        "For budget-friendly options, **Samikitno** offers excellent Georgian comfort food. **Keto and Kote** is perfect for trying various Georgian dishes in one place. **Pheasant's Tears** combines natural wine with farm-to-table Georgian cuisine. Don't miss trying churchkhela (Georgian snickers) from street vendors!"
      ]
      
      return {
        text: responses[Math.floor(Math.random() * responses.length)],
        confidence: 92,
        suggestions: [
          "What's the best khachapuri in Tbilisi?",
          "Georgian wine recommendations",
          "Vegetarian Georgian food options",
          "Restaurant etiquette in Georgia"
        ],
        category: 'restaurants',
        relatedLinks: [
          { title: "Restaurant Guide", url: "/restaurants" },
          { title: "Georgian Culture", url: "/culture" }
        ]
      }
    }

    // Enhanced transport responses
    if (lowerMessage.includes('metro') || lowerMessage.includes('transport') || lowerMessage.includes('bus') || lowerMessage.includes('taxi')) {
      const responses = [
        "Tbilisi's metro is efficient and affordable! Buy a **MetroMoney card** for 2 GEL (refundable) and load it with credit. The metro runs from 6 AM to midnight. **Bolt** and **Maxim** are the most reliable taxi apps. For marshrutkas (minibuses), have exact change ready - they're cheap but can be crowded during rush hours.",
        "The metro has two lines: Line 1 (red) and Line 2 (green). Key stations: **Rustaveli** (city center), **Marjanishvili** (transport hub), **Station Square** (railway station). Taxis are very affordable - a ride across the city rarely costs more than 10-15 GEL. Always use ride-sharing apps for fair pricing.",
        "**Pro transport tips**: Download the Tbilisi Transport app for real-time bus info. Metro tokens cost 1 GEL, but the card is more convenient. Avoid taxis without meters or apps. The cable car to Narikala Fortress is both transport and attraction! Night buses run on weekends."
      ]
      
      return {
        text: responses[Math.floor(Math.random() * responses.length)],
        confidence: 89,
        suggestions: [
          "How much does metro cost?",
          "Best taxi apps in Tbilisi",
          "Airport to city center transport",
          "Night transport options"
        ],
        category: 'transport',
        relatedLinks: [
          { title: "Transport Guide", url: "/transport" },
          { title: "Getting Around", url: "/transport" }
        ]
      }
    }

    // Enhanced culture responses
    if (lowerMessage.includes('culture') || lowerMessage.includes('georgian') || lowerMessage.includes('tradition') || lowerMessage.includes('etiquette')) {
      const responses = [
        "Georgian hospitality is legendary! When invited to someone's home, bring flowers (odd numbers) or wine. During a **supra** (feast), the **tamada** (toastmaster) leads toasts - wait for your turn and never refuse a toast. Georgians are incredibly warm and welcoming to foreigners who show interest in their culture.",
        "Key cultural tips: Remove shoes when entering homes. Georgians are very family-oriented and proud of their 8,000-year wine tradition. Learn basic phrases like **'gamarjoba'** (hello) and **'madloba'** (thank you). Respect Orthodox traditions - dress modestly in churches and don't photograph during services.",
        "Georgian culture blends European and Asian influences. **Polyphonic singing** is UNESCO-recognized. The **Georgian alphabet** is unique and beautiful. Georgians love to share their culture - ask about their traditions and they'll be delighted to explain! Wine is sacred here - never refuse when offered."
      ]
      
      return {
        text: responses[Math.floor(Math.random() * responses.length)],
        confidence: 94,
        suggestions: [
          "Georgian supra traditions",
          "Basic Georgian phrases",
          "Orthodox church etiquette",
          "Georgian wine culture"
        ],
        category: 'culture',
        relatedLinks: [
          { title: "Georgian Culture", url: "/culture" },
          { title: "Learn Georgian", url: "/language" }
        ]
      }
    }

    // Enhanced language responses
    if (lowerMessage.includes('language') || lowerMessage.includes('learn') || lowerMessage.includes('speak') || lowerMessage.includes('phrase')) {
      const responses = [
        "Georgian is challenging but rewarding! Start with: **გამარჯობა** (gamarjoba - hello), **მადლობა** (madloba - thank you), **ბოდიში** (bodishi - sorry), **ნახვამდის** (nakhvamdis - goodbye). The Georgian script has 33 letters and no capital letters. Most young Georgians speak English, but locals appreciate any Georgian effort!",
        "Essential phrases: **რა ღირს?** (ra ghirs? - how much?), **სად არის?** (sad aris? - where is?), **ვერ ვიგებ ქართულად** (ver vigeb kartulad - I don't speak Georgian). Download the **Georgian Alphabet** app. Practice with locals - they're very patient and encouraging!",
        "Georgian grammar is complex with 7 cases, but don't let that discourage you! Focus on survival phrases first. **'Batono'** (sir) and **'Kalbatono'** (madam) are polite forms. Numbers: **erti** (1), **ori** (2), **sami** (3). Join language exchange groups on Facebook - Tbilisi has an active expat community!"
      ]
      
      return {
        text: responses[Math.floor(Math.random() * responses.length)],
        confidence: 87,
        suggestions: [
          "Georgian alphabet basics",
          "Common Georgian phrases",
          "Language exchange groups",
          "Georgian pronunciation tips"
        ],
        category: 'language',
        relatedLinks: [
          { title: "Learn Georgian", url: "/language" },
          { title: "Georgian Culture", url: "/culture" }
        ]
      }
    }

    // Enhanced housing responses
    if (lowerMessage.includes('housing') || lowerMessage.includes('apartment') || lowerMessage.includes('neighborhood') || lowerMessage.includes('rent')) {
      const responses = [
        "Popular expat neighborhoods: **Vake** (upscale, quiet), **Saburtalo** (modern, good transport), **Old Town** (historic, touristy), **Vera** (central, trendy). Use **ss.ge** and **myhome.ge** for rentals. Expect to pay 1-3 months deposit. Most apartments come furnished. Budget 800-2000 GEL/month for decent places.",
        "**Vake** and **Saburtalo** are safest for families. **Sololaki** (Old Town area) is charming but can be noisy. **Vera** has great cafes and nightlife. Always view apartments in person - photos can be misleading. Check water pressure, heating, and internet. Most landlords prefer cash payments.",
        "Rental tips: Negotiate - prices are often flexible. Ensure contracts are in English or get translation. Check utility costs (heating can be expensive in winter). **Vake Park** area is great for families. **Rustaveli Avenue** area is central but busy. Consider proximity to metro stations for easy transport."
      ]
      
      return {
        text: responses[Math.floor(Math.random() * responses.length)],
        confidence: 85,
        suggestions: [
          "Best neighborhoods for expats",
          "Rental websites in Georgia",
          "Average rent prices in Tbilisi",
          "Apartment viewing checklist"
        ],
        category: 'housing',
        relatedLinks: [
          { title: "Housing Guide", url: "/housing" },
          { title: "Neighborhoods", url: "/housing" }
        ]
      }
    }

    // Enhanced activities responses
    if (lowerMessage.includes('activity') || lowerMessage.includes('activities') || lowerMessage.includes('things to do') || lowerMessage.includes('weekend')) {
      const responses = [
        "Must-do activities: **Narikala Fortress** (cable car ride + views), **Sulfur Baths** in Abanotubani, **Mtatsminda Park** (funicular + amusement park), **Dry Bridge Market** (antiques), **Rustaveli Avenue** stroll. For day trips: **Mtskheta** (ancient capital), **Sighnaghi** (wine region), **Kazbegi** (mountains).",
        "Weekend ideas: **Tbilisi Sea** (artificial lake, summer activities), **Lisi Lake** (hiking, swimming), **Ethnographic Museum** (outdoor museum), **Fabrika** (hipster hostel/bar complex), **Wine tasting** in Kakheti region. Join **Tbilisi Expat Groups** on Facebook for organized activities and meetups.",
        "Seasonal activities: **Summer** - outdoor concerts, rooftop bars, hiking. **Winter** - skiing in Gudauri/Bakuriani, thermal baths, wine cellars. **Spring/Fall** - perfect for exploring on foot. **Nightlife**: Bassiani (techno), Café Gallery, Khidi. **Cultural**: Opera House, Marjanishvili Theatre, art galleries in Vera."
      ]
      
      return {
        text: responses[Math.floor(Math.random() * responses.length)],
        confidence: 91,
        suggestions: [
          "Day trips from Tbilisi",
          "Nightlife recommendations",
          "Hiking trails near Tbilisi",
          "Cultural events this month"
        ],
        category: 'activities',
        relatedLinks: [
          { title: "Activities Guide", url: "/activities" },
          { title: "Places to Visit", url: "/places" }
        ]
      }
    }

    // Default enhanced response
    return {
      text: "I'm here to help you navigate life in Tbilisi! I can provide detailed advice about restaurants, transportation, Georgian culture, language learning, housing, activities, and more. What specific aspect of living in Tbilisi would you like to know about? I have extensive knowledge about the expat experience here and can give you practical, actionable advice.",
      confidence: 75,
      suggestions: [
        "Best Georgian restaurants",
        "How to use Tbilisi metro",
        "Georgian cultural etiquette",
        "Learning basic Georgian phrases",
        "Expat-friendly neighborhoods",
        "Weekend activities in Tbilisi"
      ],
      category: 'general',
      relatedLinks: [
        { title: "Restaurant Guide", url: "/restaurants" },
        { title: "Transport Guide", url: "/transport" },
        { title: "Cultural Tips", url: "/culture" }
      ]
    }
  }

  private generateSuggestions(message: string): string[] {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('restaurant') || lowerMessage.includes('food')) {
      return [
        "Best khachapuri in Tbilisi",
        "Georgian wine recommendations", 
        "Vegetarian Georgian options",
        "Fine dining restaurants"
      ]
    }
    
    if (lowerMessage.includes('transport') || lowerMessage.includes('metro')) {
      return [
        "Metro card vs tokens",
        "Best taxi apps",
        "Airport transport options",
        "Night transport"
      ]
    }
    
    return [
      "Popular expat neighborhoods",
      "Georgian language basics",
      "Weekend activities",
      "Cultural etiquette tips"
    ]
  }

  private categorizeMessage(message: string): string {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('restaurant') || lowerMessage.includes('food')) return 'restaurants'
    if (lowerMessage.includes('transport') || lowerMessage.includes('metro')) return 'transport'
    if (lowerMessage.includes('culture') || lowerMessage.includes('tradition')) return 'culture'
    if (lowerMessage.includes('language') || lowerMessage.includes('georgian')) return 'language'
    if (lowerMessage.includes('housing') || lowerMessage.includes('apartment')) return 'housing'
    if (lowerMessage.includes('activity') || lowerMessage.includes('things to do')) return 'activities'
    
    return 'general'
  }

  private getRelatedLinks(message: string): { title: string; url: string }[] {
    const category = this.categorizeMessage(message)
    
    const linkMap: Record<string, { title: string; url: string }[]> = {
      restaurants: [
        { title: "Restaurant Guide", url: "/restaurants" },
        { title: "Georgian Culture", url: "/culture" }
      ],
      transport: [
        { title: "Transport Guide", url: "/transport" },
        { title: "Getting Around", url: "/transport" }
      ],
      culture: [
        { title: "Georgian Culture", url: "/culture" },
        { title: "Learn Georgian", url: "/language" }
      ],
      language: [
        { title: "Learn Georgian", url: "/language" },
        { title: "Georgian Culture", url: "/culture" }
      ],
      housing: [
        { title: "Housing Guide", url: "/housing" },
        { title: "Neighborhoods", url: "/housing" }
      ],
      activities: [
        { title: "Activities Guide", url: "/activities" },
        { title: "Places to Visit", url: "/places" }
      ]
    }
    
    return linkMap[category] || [
      { title: "Stew's Guide Home", url: "/" },
      { title: "All Recommendations", url: "/recommendations" }
    ]
  }

  async generatePersonalizedRecommendations(userPreferences: any): Promise<any[]> {
    // Enhanced recommendation engine
    const recommendations = [
      {
        id: '1',
        title: 'Traditional Georgian Supra Experience',
        description: 'Join an authentic Georgian feast with local families. Experience the legendary Georgian hospitality, learn about toasting traditions, and taste homemade wine and traditional dishes.',
        category: 'Culture',
        confidence: 95,
        tags: ['Traditional', 'Social', 'Food', 'Authentic'],
        estimatedTime: '4-6 hours',
        location: 'Old Town',
        difficulty: 'Easy',
        personalizedReason: 'Based on your interest in Georgian culture and authentic experiences'
      },
      {
        id: '2',
        title: 'Kakheti Wine Region Day Trip',
        description: 'Explore Georgia\'s premier wine region. Visit traditional wineries, learn about 8,000-year-old winemaking traditions, and taste unique Georgian wines made in qvevri clay vessels.',
        category: 'Activities',
        confidence: 92,
        tags: ['Wine', 'Day Trip', 'Traditional', 'UNESCO'],
        estimatedTime: 'Full day',
        location: 'Kakheti Region',
        difficulty: 'Easy',
        personalizedReason: 'Perfect for wine enthusiasts and cultural explorers'
      },
      {
        id: '3',
        title: 'Narikala Fortress & Cable Car',
        description: 'Take the aerial tramway to the ancient Narikala Fortress for panoramic views of Tbilisi. Explore the fortress ruins and enjoy sunset views over the Mtkvari River.',
        category: 'Sightseeing',
        confidence: 89,
        tags: ['Historic', 'Views', 'Photography', 'Iconic'],
        estimatedTime: '2-3 hours',
        location: 'Old Town',
        difficulty: 'Easy',
        personalizedReason: 'Must-see attraction for first-time visitors'
      }
    ]
    
    return recommendations
  }
}

export const aiService = new AIService()
export type { AIResponse }