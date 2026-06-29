'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const phrases = [
  'Developing Products.',
  'Building Startups.',
  'Driving Innovation.',
  'Creating Culture.',
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % phrases.length)
        setFade(true)
      }, 400)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '0 2rem',
      maxWidth: 1200,
      margin: '0 auto',
      width: '100%',
      paddingTop: 64,
    }}>
      <div style={{ maxWidth: 800 }}>
        <p style={{
          fontFamily: 'Helvetica Neue, Arial, sans-serif',
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: '2rem',
        }}>
          Tom Guy
        </p>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 300,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '1rem',
          color: 'var(--fg)',
        }}>
          <span
            style={{
              display: 'block',
              color: 'var(--accent)',
              opacity: fade ? 1 : 0,
              transition: 'opacity 0.4s ease',
              minHeight: '1.1em',
            }}
          >
            {phrases[index]}
          </span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'var(--muted)',
          fontWeight: 300,
          marginBottom: '3rem',
          lineHeight: 1.6,
          maxWidth: 560,
        }}>
          Product leader building businesses at the intersection of technology, design, and human behaviour.
        </p>

        <Link href="#playbook" style={{
          display: 'inline-block',
          fontFamily: 'Helvetica Neue, Arial, sans-serif',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          border: '1px solid var(--accent)',
          color: 'var(--accent)',
          padding: '0.85rem 2rem',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.background = 'var(--accent)'
          el.style.color = 'var(--bg)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.background = 'transparent'
          el.style.color = 'var(--accent)'
        }}
        >
          View Playbook
        </Link>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--muted)',
        fontFamily: 'Helvetica Neue, Arial, sans-serif',
        fontSize: '0.65rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
      }}>
        <span>Scroll</span>
        <div style={{
          width: 1,
          height: 40,
          background: 'linear-gradient(to bottom, var(--muted), transparent)',
          animation: 'scrollLine 2s ease-in-out infinite',
        }} />
        <style>{`
          @keyframes scrollLine {
            0%, 100% { opacity: 0.3; transform: scaleY(1); }
            50% { opacity: 1; transform: scaleY(0.6); }
          }
        `}</style>
      </div>
    </section>
  )
}
