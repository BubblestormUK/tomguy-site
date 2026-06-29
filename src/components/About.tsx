export default function About() {
  return (
    <section id="about" style={{
      padding: '8rem 2rem',
      maxWidth: 1200,
      margin: '0 auto',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
        <div>
          <p style={{
            fontFamily: 'Helvetica Neue, Arial, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '1rem',
          }}>
            About
          </p>
        </div>
        <div>
          <p style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 300,
            lineHeight: 1.6,
            color: 'var(--fg)',
            marginBottom: '2rem',
          }}>
            I&apos;m a product leader with two decades of experience building category-defining businesses - from the first smart thermostat to consumer IoT at Vodafone, from BT&apos;s innovation hub to premium student living brands.
          </p>
          <p style={{
            fontSize: '1rem',
            fontWeight: 300,
            lineHeight: 1.8,
            color: 'var(--muted)',
          }}>
            I work at the intersection of technology, design, and human behaviour. I believe that the best products don&apos;t just solve problems - they create moments of genuine magic in people&apos;s everyday lives.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
