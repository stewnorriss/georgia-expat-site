import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get('q')
  const lang = request.nextUrl.searchParams.get('tl') || 'ka'

  if (!text) {
    return NextResponse.json({ error: 'Missing q parameter' }, { status: 400 })
  }

  if (text.length > 200) {
    return NextResponse.json({ error: 'Text too long' }, { status: 400 })
  }

  const encoded = encodeURIComponent(text)
  const textlen = text.length.toString()

  // Try multiple Google Translate TTS endpoints
  const urls = [
    `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${encoded}&total=1&idx=0&textlen=${textlen}`,
    `https://translate.googleapis.com/translate_tts?ie=UTF-8&tl=${lang}&client=gtx&q=${encoded}&total=1&idx=0&textlen=${textlen}`,
  ]

  for (const url of urls) {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://translate.google.com/',
        },
      })

      if (response.ok) {
        const audioBuffer = await response.arrayBuffer()
        // Verify we got actual audio (not an error page)
        if (audioBuffer.byteLength > 100) {
          return new NextResponse(audioBuffer, {
            headers: {
              'Content-Type': 'audio/mpeg',
              'Cache-Control': 'public, max-age=86400, s-maxage=86400',
            },
          })
        }
      }
    } catch {
      continue
    }
  }

  return NextResponse.json({ error: 'TTS unavailable' }, { status: 502 })
}
