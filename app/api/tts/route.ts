import { NextRequest, NextResponse } from 'next/server'
// @ts-expect-error - no types available for this package
import googleTTS from 'google-tts-api'

export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get('q')
  const lang = request.nextUrl.searchParams.get('tl') || 'ka'
  const slow = request.nextUrl.searchParams.get('slow') === '1'

  if (!text) {
    return NextResponse.json({ error: 'Missing q parameter' }, { status: 400 })
  }

  if (text.length > 200) {
    return NextResponse.json({ error: 'Text too long' }, { status: 400 })
  }

  try {
    const base64 = await googleTTS.getAudioBase64(text, {
      lang,
      slow,
      host: 'https://translate.google.com',
    })

    const audioBuffer = Buffer.from(base64, 'base64')

    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    })
  } catch (err: unknown) {
    // Try alternate host
    try {
      const base64 = await googleTTS.getAudioBase64(text, {
        lang,
        slow,
        host: 'https://translate.google.co.uk',
      })

      const audioBuffer = Buffer.from(base64, 'base64')

      return new NextResponse(audioBuffer, {
        headers: {
          'Content-Type': 'audio/mpeg',
          'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
      })
    } catch {
      const message = err instanceof Error ? err.message : 'Unknown error'
      return NextResponse.json({ error: 'TTS unavailable', detail: message }, { status: 502 })
    }
  }
}
