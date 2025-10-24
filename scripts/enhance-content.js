const { BedrockRuntimeClient, InvokeModelCommand } = require('@aws-sdk/client-bedrock-runtime')
const fs = require('fs')
const path = require('path')

const client = new BedrockRuntimeClient({
  region: 'eu-central-1',
})

async function generateImage(prompt) {
  try {
    const input = {
      modelId: 'stability.stable-diffusion-xl-v1',
      contentType: 'application/json',
      accept: 'application/json',
      body: JSON.stringify({
        text_prompts: [
          {
            text: prompt,
            weight: 1
          }
        ],
        cfg_scale: 10,
        seed: Math.floor(Math.random() * 1000000),
        steps: 30,
        width: 1024,
        height: 768
      })
    }

    const command = new InvokeModelCommand(input)
    const response = await client.send(command)
    
    const responseBody = JSON.parse(new TextDecoder().decode(response.body))
    return responseBody.artifacts[0].base64
  } catch (error) {
    console.error('Error generating image:', error)
    return null
  }
}

async function saveImage(base64Data, filename) {
  if (!base64Data) return null
  
  const buffer = Buffer.from(base64Data, 'base64')
  const filepath = path.join('public', 'images', filename)
  
  // Create images directory if it doesn't exist
  const dir = path.dirname(filepath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  
  fs.writeFileSync(filepath, buffer)
  return `/images/${filename}`
}

async function generateImages() {
  const imagePrompts = [
    {
      name: 'tbilisi-skyline.jpg',
      prompt: 'Beautiful panoramic view of Tbilisi, Georgia skyline with traditional architecture, modern buildings, and mountains in background, golden hour lighting, photorealistic'
    },
    {
      name: 'narikala-fortress.jpg',
      prompt: 'Ancient Narikala Fortress overlooking Tbilisi city, stone walls, Georgian architecture, sunset lighting, dramatic sky, photorealistic'
    },
    {
      name: 'georgian-feast.jpg',
      prompt: 'Traditional Georgian supra feast table with khachapuri, khinkali, wine, Georgian hospitality, warm lighting, authentic cultural scene'
    },
    {
      name: 'old-town-tbilisi.jpg',
      prompt: 'Charming cobblestone streets of Old Town Tbilisi, traditional balconies, colorful houses, atmospheric lighting, European charm'
    },
    {
      name: 'sulfur-baths.jpg',
      prompt: 'Historic sulfur baths in Abanotubani district Tbilisi, traditional dome architecture, steam rising, cultural heritage site'
    },
    {
      name: 'georgian-language.jpg',
      prompt: 'Georgian alphabet and script, beautiful calligraphy, traditional writing, cultural education, artistic presentation'
    },
    {
      name: 'tbilisi-metro.jpg',
      prompt: 'Modern Tbilisi metro station, clean underground transport, commuters, efficient public transportation system'
    },
    {
      name: 'georgian-wine.jpg',
      prompt: 'Traditional Georgian wine making, qvevri clay vessels, vineyard landscape, ancient winemaking tradition, authentic cultural scene'
    }
  ]

  console.log('Generating images with AWS Bedrock...')
  
  for (const imagePrompt of imagePrompts) {
    console.log(`Generating: ${imagePrompt.name}`)
    try {
      const base64Image = await generateImage(imagePrompt.prompt)
      if (base64Image) {
        await saveImage(base64Image, imagePrompt.name)
        console.log(`✓ Saved: ${imagePrompt.name}`)
      } else {
        console.log(`✗ Failed: ${imagePrompt.name}`)
      }
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000))
    } catch (error) {
      console.error(`Error with ${imagePrompt.name}:`, error)
    }
  }
  
  console.log('Image generation complete!')
}

generateImages().catch(console.error)