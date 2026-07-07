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

const sourceTag: React.CSSProperties = {
  fontSize: '0.6rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  border: '1px solid #868686',
  color: '#868686',
  padding: '0.2rem 0.5rem',
  display: 'inline-block',
  marginRight: '0.4rem',
}

const hashTag: React.CSSProperties = {
  fontSize: '0.6rem',
  letterSpacing: '0.08em',
  color: '#868686',
  marginRight: '0.5rem',
  display: 'inline-block',
}

export default function ArticlesPage() {
  const sorted = [...articlesData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <>
      <div className="site-content pt-5">
        <div className="container">
          <h1 className="mb-8 slide-left">Articles</h1>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {sorted.map((article, i) => {
              const img = (article as any).image || IMAGES[i % IMAGES.length]
              const tags: string[] = (article as any).tags || []
              return (
                <a key={article.id} href={article.url || '#'} target="_blank" rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', height: '200px', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '1rem' }}>
                    <img
                      src={img}
                      alt={article.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ marginBottom: '0.4rem' }}>
                    <span style={sourceTag}>{article.source}</span>
                    <span style={{ fontSize: '0.7rem', color: '#868686' }}>{article.date}</span>
                  </div>
                  <p style={{ fontSize: '0.95rem', fontWeight: 400, lineHeight: 1.4, marginBottom: '0.5rem' }}>{article.title}</p>
                  {article.excerpt && (
                    <p style={{ fontSize: '0.78rem', color: '#868686', lineHeight: 1.5, marginBottom: '0.6rem' }}>{article.excerpt}</p>
                  )}
                  {tags.length > 0 && (
                    <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
                      {tags.map(t => (
                        <span key={t} style={hashTag}>#{t}</span>
                      ))}
                    </div>
                  )}
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
