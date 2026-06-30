'use client'
import Footer from '@/components/Footer'
import articlesData from '@/data/articles.json'

const WP = 'https://www.tomguy.co/wp-content/uploads/2025/02'
const FALLBACK = `${WP}/bt-image.jpg`

export default function ArticlesPage() {
  const byYear = articlesData.reduce((acc, a) => {
    if (!acc[a.year]) acc[a.year] = []
    acc[a.year].push(a)
    return acc
  }, {} as Record<number, typeof articlesData>)

  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a)

  return (
    <>
      <div className="site-content pt-5">
        <div className="container">
          <h1 className="mb-5 mb-md-8 slide-left">Articles</h1>

          {years.map(year => (
            <div key={year} className="mb-10">
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#868686', marginBottom: '1.5rem' }}>{year}</p>
              <div className="row gx-md-6 gy-6">
                {byYear[year].map(article => (
                  <div key={article.id} className="col-md-4 scale-up">
                    <a
                      href={article.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                    >
                      <div style={{ aspectRatio: '16/10', borderRadius: '0.625rem', overflow: 'hidden', marginBottom: '1rem' }}>
                        <img
                          src={(article as any).image || FALLBACK}
                          alt={article.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                          onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK }}
                        />
                      </div>
                      <p style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#868686', border: '1px solid #868686', display: 'inline-block', padding: '0.15rem 0.4rem', marginBottom: '0.5rem' }}>{article.source}</p>
                      <p style={{ fontSize: '0.75rem', color: '#868686', marginBottom: '0.4rem' }}>{article.date}</p>
                      <p style={{ fontSize: '0.95rem', fontWeight: 400, lineHeight: 1.4 }}>{article.title}</p>
                    </a>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid #e0e0e0', marginTop: '3rem' }} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
