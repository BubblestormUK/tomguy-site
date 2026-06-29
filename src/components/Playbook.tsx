const principles = [
  {
    number: '01',
    title: 'Start with the human',
    body: 'Every great product starts with a deep understanding of the person using it. Not the persona, not the demographic - the actual human being with real emotions, habits, and context.',
  },
  {
    number: '02',
    title: 'Build the simplest thing that could possibly work',
    body: 'Complexity is the enemy of adoption. The Russian Pencil principle: find the elegant, obvious solution before reaching for the sophisticated one.',
  },
  {
    number: '03',
    title: 'Move fast, but not reckless',
    body: 'Speed matters in a startup - but speed without direction is just noise. Move fast on the things you understand, slow down on the things that matter most.',
  },
  {
    number: '04',
    title: 'Culture is a product',
    body: 'The team you build and the culture you create are as important as the product itself. High-performing teams have psychological safety, purpose, and the space to do their best work.',
  },
  {
    number: '05',
    title: 'Embrace the uncomfortable',
    body: 'The most interesting work lives at the edge of your comfort zone. Lean into ambiguity, uncertainty, and the feeling of not quite knowing - that\'s where innovation lives.',
  },
  {
    number: '06',
    title: 'Think in systems',
    body: 'Every product is part of a wider ecosystem. Understand the whole system before optimising any individual part, or you\'ll solve the wrong problem beautifully.',
  },
]

export default function Playbook() {
  return (
    <section id="playbook" style={{
      padding: '8rem 2rem',
      background: 'var(--card)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', marginBottom: '4rem', alignItems: 'start' }}>
          <div>
            <p style={{
              fontFamily: 'Helvetica Neue, Arial, sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}>
              Playbook
            </p>
          </div>
          <div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: 'var(--fg)',
            }}>
              The principles I bring to every product, team, and challenge.
            </h2>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '0',
        }}>
          {principles.map((p, i) => (
            <div key={p.number} style={{
              padding: '2.5rem',
              borderTop: '1px solid var(--border)',
              borderLeft: i % 2 === 1 ? '1px solid var(--border)' : 'none',
            }}>
              <p style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'var(--muted)',
                marginBottom: '1rem',
              }}>
                {p.number}
              </p>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 400,
                color: 'var(--fg)',
                marginBottom: '0.75rem',
                lineHeight: 1.3,
              }}>
                {p.title}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--muted)',
                lineHeight: 1.7,
                fontWeight: 300,
              }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #playbook > div > div:first-child { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
