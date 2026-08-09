import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { getArticles, upsertArticle, deleteArticle, type Article } from '@/lib/articles-store'

export async function GET() {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  return NextResponse.json(await getArticles())
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const slug = body.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '-').slice(0, 60)
  const article: Article = {
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
  try {
    await upsertArticle(article)
  } catch {
    return NextResponse.json({ error: 'Storage not configured — add Supabase env vars' }, { status: 503 })
  }
  return NextResponse.json(article, { status: 201 })
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await req.json()
  const article: Article = { ...body, year: new Date(body.date).getFullYear() }
  try {
    await upsertArticle(article)
  } catch {
    return NextResponse.json({ error: 'Storage not configured — add Supabase env vars' }, { status: 503 })
  }
  return NextResponse.json(article)
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await req.json()
  try {
    await deleteArticle(id)
  } catch {
    return NextResponse.json({ error: 'Storage not configured — add Supabase env vars' }, { status: 503 })
  }
  return NextResponse.json({ ok: true })
}
