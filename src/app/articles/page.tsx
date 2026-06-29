'use client'
import Footer from '@/components/Footer'
import articlesData from '@/data/articles.json'
import Link from 'next/link'

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25.707" height="17.414" viewBox="0 0 25.707 17.414" className="arrow-right">
    <g transform="translate(-1030.5 -458.793)">
      <line x2="25" transform="translate(1030.5 467.5)" fill="none" stroke="#000" strokeWidth="1"/>
      <line x2="8" y2="8" transform="translate(1047.5 459.5)" fill="none" stroke="#000" strokeLinecap="square" strokeWidth="1"/>
      <line y1="8" x2="8" transform="translate(1047.5 467.5)" fill="none" stroke="#000" strokeLinecap="square" strokeWidth="1"/>
    </g>
  </svg>
)

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
          <div className="row pb-6">
            <div className="col-md-3">
              <h1 className="mb-3 mb-md-6">Articles</h1>
            </div>
            <div className="col-md-6 pt-md-10">
              {years.map(year => (
                <div key={year} className="article-holder mb-10">
                  <div className="article-header position-relative pb-2">
                    <p>{year}</p>
                  </div>
                  {byYear[year].map(article => (
                    <div key={article.id} className="article-item position-relative text-primary pb-4 mb-4">
                      <div className="pe-6">{article.title}</div>
                      <div className="position-absolute top-0 end-0">
                        <ArrowRight />
                      </div>
                      {article.url && (
                        <a className="stretched-link" href={article.url} target="_blank" rel="noopener noreferrer" />
                      )}
                    </div>
                  ))}
                </div>
              ))}

              <p style={{ fontSize: '0.9rem', color: '#868686' }}>
                Want to add an article?{' '}
                <Link href="/admin" style={{ color: '#000', textDecoration: 'underline' }}>Admin</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
