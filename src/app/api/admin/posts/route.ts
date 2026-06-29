import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const DATA_PATH = join(process.cwd(), 'src/data/articles.json')

function readArticles() {
  return JSON.parse(readFileSync(DATA_PATH, 'utf-8'))
}

function writeArticles(data: unknown[]) {
  writeFileSync(DATA_PATH, JSON.stringify(data, null, 2))
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return NextResponse.json(readArticles())
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json()
  const articles = readArticles()
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
    excerpt: body.excerpt || '',
    body: body.body || '',
  }
  articles.unshift(newArticle)
  writeArticles(articles)
  return NextResponse.json(newArticle, { status: 201 })
}

export async function PUT(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const body = await req.json()
  const articles = readArticles()
  const idx = articles.findIndex((a: { id: string }) => a.id === body.id)
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  articles[idx] = { ...articles[idx], ...body }
  writeArticles(articles)
  return NextResponse.json(articles[idx])
}

export async function DELETE(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = await req.json()
  const articles = readArticles()
  const filtered = articles.filter((a: { id: string }) => a.id !== id)
  writeArticles(filtered)
  return NextResponse.json({ ok: true })
}
