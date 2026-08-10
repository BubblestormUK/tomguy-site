import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'

function detectSource(url: string): string {
  if (url.includes('linkedin.com')) return 'LinkedIn'
  if (url.includes('theguardian.com')) return 'The Guardian'
  if (url.includes('bbc.co.uk') || url.includes('bbc.com')) return 'BBC'
  if (url.includes('ft.com')) return 'Financial Times'
  if (url.includes('sifted.eu')) return 'Sifted'
  if (url.includes('wallpaper.com')) return 'Wallpaper'
  if (url.includes('dezeen.com')) return 'Dezeen'
  if (url.includes('iotnewstechnews.com') || url.includes('iottechnews.com')) return 'IoT Tech News'
  if (url.includes('skynews.com') || url.includes('news.sky.com')) return 'Sky News'
  return ''
}

export async function POST(req: NextRequest) {
  if (!await isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { url } = await req.json()
  const source = detectSource(url)
  const today = new Date().toISOString().slice(0, 10)

  // Try multiple user agents — LinkedIn pulse articles are often publicly accessible
  const userAgents = url.includes('linkedin.com')
    ? [
        'LinkedInBot/1.0 (compatible; Mozilla/5.0; Apache-HttpClient +http://www.linkedin.com)',
        'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
        'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
      ]
    : ['Mozilla/5.0 (compatible; Googlebot/2.1)']

  let html = ''
  for (const ua of userAgents) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': ua, 'Accept-Language': 'en-GB,en;q=0.9' },
        signal: AbortSignal.timeout(6000),
        redirect: 'follow',
      })
      const text = await res.text()
      // LinkedIn redirects to authwall — skip if that happened
      if (text.includes('authwall') || text.includes('linkedin.com/login')) continue
      html = text
      break
    } catch {
      continue
    }
  }

  const title =
      html.match(/<meta property="og:title" content="([^"]+)"/)?.[1] ||
      html.match(/<meta name="twitter:title" content="([^"]+)"/)?.[1] ||
      html.match(/<title>([^<]+)<\/title>/)?.[1] || ''

    const excerpt =
      html.match(/<meta property="og:description" content="([^"]+)"/)?.[1] ||
      html.match(/<meta name="description" content="([^"]+)"/)?.[1] || ''

    const rawImage =
      html.match(/<meta property="og:image" content="([^"]+)"/)?.[1] ||
      html.match(/<meta name="twitter:image" content="([^"]+)"/)?.[1] || ''
  // Only use image if it's a real CDN URL, not a LinkedIn tracking/redirect URL
  const image = rawImage.includes('media.licdn.com') || !url.includes('linkedin.com') ? rawImage : ''

    const dateStr =
      html.match(/<meta property="article:published_time" content="([^"]+)"/)?.[1] ||
      html.match(/<time[^>]+datetime="([^"]+)"/)?.[1] || ''

    const date = dateStr ? dateStr.slice(0, 10) : today

  return NextResponse.json({ title: title.trim(), excerpt: excerpt.trim(), image: image.trim(), source, date })
}
