'use client'
import Link from 'next/link'
import projects from '@/data/projects.json'

export default function FeaturedProjects() {
  return (
    <section style={{
      padding: '8rem 2rem',
      maxWidth: 1200,
      margin: '0 auto',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', marginBottom: '4rem', alignItems: 'start' }}>
        <div>
          <p style={{
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}>
            Projects
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 300,
            lineHeight: 1.2,
            color: 'var(--fg)',
          }}>
            Businesses I&apos;ve helped build.
          </h2>
          <Link href="/projects" style={{
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            borderBottom: '1px solid var(--muted)',
            paddingBottom: 2,
          }}>
            View all
          </Link>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {projects.map((project, i) => (
          <div key={project.id} style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr',
            gap: '2rem',
            padding: '2.5rem 0',
            borderTop: '1px solid var(--border)',
            alignItems: 'start',
          }}>
            <div style={{
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              color: 'var(--muted)',
              textTransform: 'uppercase',
              paddingTop: 4,
            }}>
              0{i + 1}
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <h3 style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  fontWeight: 400,
                  color: 'var(--fg)',
                  letterSpacing: '-0.01em',
                }}>
                  {project.name}
                </h3>
                <span style={{
                  fontFamily: 'Helvetica Neue, Arial, sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  border: '1px solid var(--border)',
                  padding: '0.25rem 0.75rem',
                }}>
                  {project.tagline}
                </span>
              </div>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--muted)',
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: 600,
              }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
