import { NextRequest, NextResponse } from 'next/server'
import { writeFileSync } from 'fs'
import { join } from 'path'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const path = join(process.cwd(), 'article-images.json')
  writeFileSync(path, JSON.stringify(data, null, 2))
  return NextResponse.json({ ok: true, count: Object.keys(data).length })
}
