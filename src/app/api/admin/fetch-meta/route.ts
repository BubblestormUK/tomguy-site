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
  if (url.includes('iottechnews.com')) return 'IoT Tech News'
  if (url.includes('skynews.com') || url.includes('news.sky.com')) return 'Sky News'
  if (url.includes('youtube.com')) return 'YouTube'
  return ''
}

async function fetchViaMicrolink(url: string) {
  const res = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`, {
    signal: AbortSignal.timeout(10000),
  })
  if (!res.ok) return null
  const json = await res.json()
  if (json.status !== 'success') return null
  const d = json.data
  return {
    title: d.title || '',
    excerpt: d.description || '',
    image: d.image?.url || '',
    date: d.date ? d.date.slice(0, 10) : '',
  }
}

async function fetchDirect(url: string) {
  const userAgents = [
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
  ]
  for (const ua of userAgents) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': ua, 'Accept-Language': 'en-GB,en;q=0.9' },
        signal: AbortSignal.timeout(6000),
        redirect: 'follow',
      })
      const html = await res.text()
      if (html.includes('authwall') || html.includes('linkedin.com/login')) continue
      const title = html.match(/<meta property="og:title" content="([^"]+)"/)?.[1] ||
        html.match(/<title>([^<]+)<\/title>/)?.[1] || ''
      const excerpt = html.match(/<meta property="og:description" content="([^"]+)"/)?.[1] ||
        html.match(/<meta name="description" content="([^"]+)"/)?.[1] || ''
      const image = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1] ||
        html.match(/<meta name="twitter:image" content="([^"]+)"/)?.[1] || ''
      const dateStr = html.match(/<meta property="article:published_time" content="([^"]+)"/)?.[1] ||
        html.match(/<time[^>]+datetime="([^"]+)"/)?.[1] || ''
      if (title) return { title: title.trim(), excerpt: excerpt.trim(), image: image.trim(), date: dateStr ? dateStr.slice(0, 10) : '' }
    } catch { continue }
  }
  return null
}

export async function POST(req: NextRequest) {
  if (!await isAuthenticated()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { url } = await req.json()
  const source = detectSource(url)
  const today = new Date().toISOString().slice(0, 10)

  // LinkedIn always needs microlink; try direct first for everything else
  let meta = url.includes('linkedin.com') ? null : await fetchDirect(url)
  if (!meta) meta = await fetchViaMicrolink(url)

  return NextResponse.json({
    title: meta?.title?.trim() || '',
    excerpt: meta?.excerpt?.trim() || '',
    image: meta?.image?.trim() || '',
    date: meta?.date || today,
    source,
  })
}
