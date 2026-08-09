import { readFileSync } from 'fs'
import { join } from 'path'

const KV_KEY = 'articles'

type Article = {
  id: string
  title: string
  year: number
  date: string
  source: string
  url: string
  image?: string
  excerpt?: string
  body?: string
  tags?: string[]
}

function localArticles(): Article[] {
  const path = join(process.cwd(), 'src/data/articles.json')
  return JSON.parse(readFileSync(path, 'utf-8'))
}

async function kv() {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) return null
  const { kv } = await import('@vercel/kv')
  return kv
}

export async function getArticles(): Promise<Article[]> {
  const store = await kv()
  if (store) {
    const data = await store.get<Article[]>(KV_KEY)
    if (data && data.length > 0) return data
    // KV is empty — seed it from the JSON file and return
    const seed = localArticles()
    await store.set(KV_KEY, seed)
    return seed
  }
  return localArticles()
}

export async function saveArticles(articles: Article[]): Promise<void> {
  const store = await kv()
  if (!store) throw new Error('KV_NOT_CONFIGURED')
  await store.set(KV_KEY, articles)
}
