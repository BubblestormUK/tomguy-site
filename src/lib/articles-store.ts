import { readFileSync } from 'fs'
import { join } from 'path'

export type Article = {
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

function supabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  const { createClient } = require('@supabase/supabase-js')
  return createClient(url, key)
}

export async function getArticles(): Promise<Article[]> {
  const sb = supabaseClient()
  if (sb) {
    const { data, error } = await sb.from('articles').select('*').order('date', { ascending: false })
    if (!error && data && data.length > 0) return data
    // Table empty or doesn't exist yet — fall through to local
  }
  return localArticles()
}

export async function saveArticles(articles: Article[]): Promise<void> {
  const sb = supabaseClient()
  if (!sb) throw new Error('SUPABASE_NOT_CONFIGURED')
  // Upsert all articles
  const { error } = await sb.from('articles').upsert(articles, { onConflict: 'id' })
  if (error) throw error
}

export async function upsertArticle(article: Article): Promise<void> {
  const sb = supabaseClient()
  if (!sb) throw new Error('SUPABASE_NOT_CONFIGURED')
  const { error } = await sb.from('articles').upsert(article, { onConflict: 'id' })
  if (error) throw error
}

export async function deleteArticle(id: string): Promise<void> {
  const sb = supabaseClient()
  if (!sb) throw new Error('SUPABASE_NOT_CONFIGURED')
  const { error } = await sb.from('articles').delete().eq('id', id)
  if (error) throw error
}
