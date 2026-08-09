import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { getArticles, saveArticles } from '@/lib/articles-store'

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return NextResponse.json(await getArticles())
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json()
  const articles = await getArticles()
  const slug = body.title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60)
  const newArticle = {
    id: slug + '-' + Date.now(),
    title: body.title,
    year: new Date(body.date).getFullYear(),
    date: body.date,
    source: body.source || 'Blog',
    url: body.url || '',
    image: body.image || '',
    excerpt: body.excerpt || '',
    body: body.body || '',
    tags: body.tags || [],
  }
  articles.unshift(newArticle)
  try {
    await saveArticles(articles)
  } catch {
    return NextResponse.json({ error: 'Storage not configured — set up Vercel KV' }, { status: 503 })
  }
  return NextResponse.json(newArticle, { status: 201 })
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json()
  const articles = await getArticles()
  const idx = articles.findIndex((a: { id: string }) => a.id === body.id)
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  articles[idx] = { ...articles[idx], ...body }
  try {
    await saveArticles(articles)
  } catch {
    return NextResponse.json({ error: 'Storage not configured — set up Vercel KV' }, { status: 503 })
  }
  return NextResponse.json(articles[idx])
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await req.json()
  const articles = await getArticles()
  const filtered = articles.filter((a: { id: string }) => a.id !== id)
  try {
    await saveArticles(filtered)
  } catch {
    return NextResponse.json({ error: 'Storage not configured — set up Vercel KV' }, { status: 503 })
  }
  return NextResponse.json({ ok: true })
}
