import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime'

const client = new BedrockRuntimeClient({
  region: 'eu-central-1',
})

export async function generateImage(prompt: string): Promise<string> {
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
        seed: 0,
        steps: 50,
        width: 1024,
        height: 1024
      })
    }

    const command = new InvokeModelCommand(input)
    const response = await client.send(command)
    
    const responseBody = JSON.parse(new TextDecoder().decode(response.body))
    return responseBody.artifacts[0].base64
  } catch (error) {
    console.error('Error generating image:', error)
    return ''
  }
}

export async function generateText(prompt: string): Promise<string> {
  try {
    const input = {
      modelId: 'anthropic.claude-3-sonnet-20240229-v1:0',
      contentType: 'application/json',
      accept: 'application/json',
      body: JSON.stringify({
        anthropic_version: 'bedrock-2023-05-31',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    }

    const command = new InvokeModelCommand(input)
    const response = await client.send(command)
    
    const responseBody = JSON.parse(new TextDecoder().decode(response.body))
    return responseBody.content[0].text
  } catch (error) {
    console.error('Error generating text:', error)
    return ''
  }
}