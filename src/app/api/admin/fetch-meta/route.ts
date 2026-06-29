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

  // For LinkedIn we can't fetch the title — return what we know
  if (url.includes('linkedin.com')) {
    return NextResponse.json({ source, date: today, title: '', excerpt: '' })
  }

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)' },
      signal: AbortSignal.timeout(5000),
    })
    const html = await res.text()

    const title =
      html.match(/<meta property="og:title" content="([^"]+)"/)?.[1] ||
      html.match(/<meta name="twitter:title" content="([^"]+)"/)?.[1] ||
      html.match(/<title>([^<]+)<\/title>/)?.[1] || ''

    const excerpt =
      html.match(/<meta property="og:description" content="([^"]+)"/)?.[1] ||
      html.match(/<meta name="description" content="([^"]+)"/)?.[1] || ''

    const dateStr =
      html.match(/<meta property="article:published_time" content="([^"]+)"/)?.[1] ||
      html.match(/<time[^>]+datetime="([^"]+)"/)?.[1] || ''

    const date = dateStr ? dateStr.slice(0, 10) : today

    return NextResponse.json({ title: title.trim(), excerpt: excerpt.trim(), source, date })
  } catch {
    return NextResponse.json({ source, date: today, title: '', excerpt: '' })
  }
}
