import { NextRequest, NextResponse } from 'next/server'
import { writeFileSync } from 'fs'
import { join } from 'path'

export async function POST(req: NextRequest) {
  const name = req.nextUrl.searchParams.get('name')
  if (!name || !/^[a-z0-9-]+\.(jpg|png|jpeg|webp|gif)$/.test(name)) {
    return NextResponse.json({ error: 'bad name' }, { status: 400 })
  }
  const buf = Buffer.from(await req.arrayBuffer())
  const path = join(process.cwd(), 'public', 'articles', name)
  writeFileSync(path, buf)
  return NextResponse.json({ ok: true, size: buf.length })
}
