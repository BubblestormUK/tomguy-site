'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Article = {
  id: string
  title: string
  year: number
  date: string
  source: string
  url: string
  image: string
  excerpt: string
  body: string
}

const empty: Omit<Article, 'id' | 'year'> = {
  title: '',
  date: new Date().toISOString().slice(0, 10),
  source: 'LinkedIn',
  url: '',
  image: '',
  excerpt: '',
  body: '',
}

const inputStyle = {
  width: '100%',
  background: 'var(--card)',
  border: '1px solid var(--border)',
  color: 'var(--fg)',
  padding: '0.75rem 1rem',
  fontFamily: 'Helvetica Neue, Arial, sans-serif',
  fontSize: '0.875rem',
  outline: 'none',
  borderRadius: 0,
}

const labelStyle = {
  display: 'block',
  fontFamily: 'Helvetica Neue, Arial, sans-serif',
  fontSize: '0.65rem',
  letterSpacing: '0.15em',
  textTransform: 'uppercase' as const,
  color: 'var(--muted)',
  marginBottom: '0.5rem',
}

const btnStyle = (primary?: boolean) => ({
  fontFamily: 'Helvetica Neue, Arial, sans-serif',
  fontSize: '0.7rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  padding: '0.7rem 1.5rem',
  border: '1px solid ' + (primary ? 'var(--accent)' : 'var(--border)'),
  background: primary ? 'var(--accent)' : 'transparent',
  color: primary ? 'var(--bg)' : 'var(--muted)',
  cursor: 'pointer',
})

export default function AdminDashboard({ initialArticles }: { initialArticles: Article[] }) {
  const router = useRouter()
  const [articles, setArticles] = useState<Article[]>(initialArticles)
  const [form, setForm] = useState(empty)
  const [editing, setEditing] = useState<Article | null>(null)
  const [tab, setTab] = useState<'list' | 'add'>('list')
  const [saving, setSaving] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [msg, setMsg] = useState('')

  async function fetchMeta(url: string) {
    if (!url.startsWith('http')) return
    setFetching(true)
    try {
      const res = await fetch('/api/admin/fetch-meta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      })
      const data = await res.json()
      setForm(f => ({
        ...f,
        title: data.title || f.title,
        source: data.source || f.source,
        date: data.date || f.date,
        excerpt: data.excerpt || f.excerpt,
        image: data.image || f.image,
      }))
    } finally {
      setFetching(false)
    }
  }

  async function logout() {
    await fetch('/api/auth', { method: 'DELETE' })
    router.push('/admin/login')
  }

  async function save() {
    setSaving(true)
    setMsg('')
    try {
      if (editing) {
        const res = await fetch('/api/admin/posts', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...editing, ...form }),
        })
        if (!res.ok) throw new Error()
        const updated = await res.json()
        setArticles(prev => prev.map(a => a.id === updated.id ? updated : a))
        setMsg('Article updated.')
        setEditing(null)
        setForm(empty)
        setTab('list')
      } else {
        const res = await fetch('/api/admin/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error()
        const created = await res.json()
        setArticles(prev => [created, ...prev])
        setMsg('Article added.')
        setForm(empty)
        setTab('list')
      }
    } catch {
      setMsg('Error saving. Try again.')
    } finally {
      setSaving(false)
    }
  }

  async function deleteArticle(id: string) {
    if (!confirm('Delete this article?')) return
    await fetch('/api/admin/posts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setArticles(prev => prev.filter(a => a.id !== id))
    setMsg('Article deleted.')
  }

  function startEdit(a: Article) {
    setEditing(a)
    setForm({ title: a.title, date: a.date, source: a.source, url: a.url, image: a.image || '', excerpt: a.excerpt, body: a.body })
    setTab('add')
  }

  function cancelEdit() {
    setEditing(null)
    setForm(empty)
    setTab('list')
  }

  return (
    <div style={{ paddingTop: 64, minHeight: '100vh' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '4rem 2rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
          <div>
            <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>Admin</p>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 300 }}>Articles Manager</h1>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="/articles" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              ← View site
            </a>
            <button onClick={logout} style={btnStyle()}>Logout</button>
          </div>
        </div>

        {msg && (
          <div style={{ background: 'var(--card)', border: '1px solid var(--accent)', padding: '0.75rem 1rem', marginBottom: '2rem', fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '0.8rem', color: 'var(--accent)' }}>
            {msg}
          </div>
        )}

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, marginBottom: '2.5rem', borderBottom: '1px solid var(--border)' }}>
          {(['list', 'add'] as const).map(t => (
            <button key={t} onClick={() => { setTab(t); if (t === 'list') cancelEdit() }} style={{
              ...btnStyle(tab === t),
              borderBottom: tab === t ? '2px solid var(--accent)' : '2px solid transparent',
              borderLeft: 'none', borderRight: 'none', borderTop: 'none',
              background: 'transparent',
              color: tab === t ? 'var(--fg)' : 'var(--muted)',
              padding: '0.75rem 1.5rem',
            }}>
              {t === 'list' ? `All Articles (${articles.length})` : editing ? 'Edit Article' : 'Add Article'}
            </button>
          ))}
        </div>

        {/* List */}
        {tab === 'list' && (
          <div>
            <button onClick={() => setTab('add')} style={{ ...btnStyle(true), marginBottom: '2rem' }}>
              + Add New Article
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {articles.map(a => (
                <div key={a.id} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '1rem',
                  padding: '1.25rem 0',
                  borderTop: '1px solid var(--border)',
                  alignItems: 'center',
                }}>
                  <div>
                    <p style={{ fontSize: '0.95rem', color: 'var(--fg)', marginBottom: 4 }}>{a.title}</p>
                    <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>
                      {a.date} · {a.source}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button onClick={() => startEdit(a)} style={btnStyle()}>Edit</button>
                    <button onClick={() => deleteArticle(a.id)} style={{ ...btnStyle(), color: '#c0392b', borderColor: '#c0392b' }}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add/Edit Form */}
        {tab === 'add' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={labelStyle}>URL — paste first and fields will fill in{fetching ? ' (fetching...)' : ''}</label>
              <input
                style={inputStyle}
                value={form.url}
                onChange={e => setForm(f => ({ ...f, url: e.target.value }))}
                onBlur={e => fetchMeta(e.target.value)}
                placeholder="https://..."
              />
            </div>
            {form.image && (
              <div>
                <img src={form.image} alt="" style={{ width: '100%', maxHeight: 180, objectFit: 'cover', borderRadius: 4, marginBottom: 8 }} />
              </div>
            )}
            <div>
              <label style={labelStyle}>Image URL (auto-filled for non-LinkedIn)</label>
              <input style={inputStyle} value={form.image} onChange={e => setForm(f => ({ ...f, image: e.target.value }))} placeholder="https://... or paste your own image URL" />
            </div>
            <div>
              <label style={labelStyle}>Title *</label>
              <input style={inputStyle} value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Article title" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Date *</label>
                <input type="date" style={inputStyle} value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
              </div>
              <div>
                <label style={labelStyle}>Source</label>
                <input style={inputStyle} value={form.source} onChange={e => setForm(f => ({ ...f, source: e.target.value }))} placeholder="e.g. LinkedIn, The Guardian" />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Excerpt</label>
              <textarea style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }} value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))} placeholder="Short summary shown in lists..." />
            </div>
            <div>
              <label style={labelStyle}>Full Article Body (optional)</label>
              <textarea style={{ ...inputStyle, minHeight: 240, resize: 'vertical', lineHeight: 1.7 }} value={form.body} onChange={e => setForm(f => ({ ...f, body: e.target.value }))} placeholder="Write the full article here. Markdown supported." />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={save} disabled={saving || !form.title} style={{ ...btnStyle(true), opacity: saving || !form.title ? 0.5 : 1 }}>
                {saving ? 'Saving...' : editing ? 'Update Article' : 'Publish Article'}
              </button>
              <button onClick={cancelEdit} style={btnStyle()}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
