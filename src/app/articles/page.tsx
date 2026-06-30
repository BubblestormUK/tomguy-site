'use client'
import Footer from '@/components/Footer'
import articlesData from '@/data/articles.json'

const IMAGES = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
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
            <div key={year} className="mb-10">
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#868686', borderTop: '1px solid #e0e0e0', paddingTop: '1rem', marginBottom: '2rem' }}>{year}</p>

              <div className="row gx-md-5 gy-6">
                {byYear[year].map(article => {
                  const img = IMAGES[idx++ % IMAGES.length]
                  return (
                    <div key={article.id} className="col-md-4">
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
