'use client'

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '8rem 2rem',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
        <div>
          <p style={{
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}>
            Contact
          </p>
        </div>
        <div>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 300,
            lineHeight: 1.2,
            color: 'var(--fg)',
            marginBottom: '2rem',
          }}>
            Let&apos;s talk.
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'var(--muted)',
            lineHeight: 1.8,
            fontWeight: 300,
            marginBottom: '2.5rem',
            maxWidth: 480,
          }}>
            Whether you&apos;re building something new, navigating a complex product challenge, or just want to exchange ideas - I&apos;d love to hear from you.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href="mailto:tom@bubblestorm.co.uk"
              style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>Email</span>
              tom@bubblestorm.co.uk
            </a>
            <a
              href="https://linkedin.com/in/tomguyuk/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>LinkedIn</span>
              linkedin.com/in/tomguyuk
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
