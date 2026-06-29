'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      router.push('/admin')
      router.refresh()
    } else {
      setError('Incorrect password.')
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      paddingTop: 64,
    }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        <p style={{
          fontFamily: 'Helvetica Neue, Arial, sans-serif',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: '1rem',
        }}>
          Admin Access
        </p>
        <h1 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '2.5rem' }}>Sign in</h1>

        <form onSubmit={login} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              color: 'var(--fg)',
              padding: '0.85rem 1rem',
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontSize: '0.9rem',
              outline: 'none',
              width: '100%',
            }}
          />
          {error && (
            <p style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '0.8rem', color: '#c0392b' }}>{error}</p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            style={{
              background: 'var(--accent)',
              color: 'var(--bg)',
              border: 'none',
              padding: '0.85rem',
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              opacity: loading || !password ? 0.6 : 1,
            }}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
