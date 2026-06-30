'use client'
import Footer from '@/components/Footer'
import articlesData from '@/data/articles.json'

const IMAGES = [
  'https://picsum.photos/seed/art1/600/400',
  'https://picsum.photos/seed/art2/600/400',
  'https://picsum.photos/seed/art3/600/400',
  'https://picsum.photos/seed/art4/600/400',
  'https://picsum.photos/seed/art5/600/400',
  'https://picsum.photos/seed/art6/600/400',
  'https://picsum.photos/seed/art7/600/400',
  'https://picsum.photos/seed/art8/600/400',
]

let globalIndex = 0

export default function ArticlesPage() {
  globalIndex = 0
  const byYear = articlesData.reduce((acc, a) => {
    if (!acc[a.year]) acc[a.year] = []
    acc[a.year].push(a)
    return acc
  }, {} as Record<number, typeof articlesData>)

  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a)

  let idx = 0

  return (
    <>
      <div className="site-content pt-5">
        <div className="container">
          <h1 className="mb-8 slide-left">Articles</h1>

          {years.map(year => (
            <div key={year} className="mb-6">
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#868686', borderTop: '1px solid #e0e0e0', paddingTop: '0.5rem', marginBottom: '1rem' }}>{year}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
                {byYear[year].map(article => {
                  const img = IMAGES[idx++ % IMAGES.length]
                  return (
                    <div key={article.id}>
                      <a href={article.url || '#'} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                        <div style={{ width: '100%', height: '220px', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '1.25rem' }}>
                          <img
                            src={(article as any).image || img}
                            alt={article.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                          />
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#868686', marginBottom: '0.5rem' }}>{article.date}</p>
                        <p style={{ fontSize: '1rem', fontWeight: 400, lineHeight: 1.4, marginBottom: '0.75rem' }}>{article.title}</p>
                        {article.excerpt && (
                          <p style={{ fontSize: '0.8rem', color: '#868686', lineHeight: 1.5, marginBottom: '1rem' }}>{article.excerpt}</p>
                        )}
                        <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid #868686', color: '#868686', padding: '0.2rem 0.5rem', display: 'inline-block' }}>{article.source}</span>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
