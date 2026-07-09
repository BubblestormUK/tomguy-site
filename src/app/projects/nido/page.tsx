import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = { title: 'Nido / Livensa Living - Tom Guy' }

export default function NidoPage() {
  const imgStyle: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' }
  const cell: React.CSSProperties = { overflow: 'hidden', position: 'relative' }
  const dark: React.CSSProperties = { background: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', textAlign: 'center' }
  const label: React.CSSProperties = { fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666', marginBottom: '0.75rem' }
  const title: React.CSSProperties = { fontSize: '1rem', fontWeight: 300, color: '#fff', lineHeight: 1.3 }

  return (
    <>
      <ScrollReveal />
      <div className="site-content pt-5">
        <div className="container">
          <div className="row mb-6 mb-md-9">
            <div className="col-md-6">
              <h1 className="mb-5 mb-md-6 slide-left">Nido / Livensa Living</h1>
            </div>
            <div className="col-md-6">
              <p className="top_summary slide-right">Nido and Livensa Living are premium purpose-built student accommodation and young professional living brands across Europe. Leading the product and digital experience vision to create a platform where residents don&apos;t just live - they thrive.</p>
            </div>
          </div>

          <div className="scale-up" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr 1fr',
            gridTemplateRows: '1fr 1fr 1fr',
            gap: '6px',
            height: '520px',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            marginBottom: '3rem',
          }}>
            <div style={cell}>
              <img src="/Nido/Zzdtk68jQArT07FI_Nido-Principe-Pio-Building-1R9A0966.jpg.avif" alt="Nido building" style={imgStyle} />
            </div>
            <div style={{ ...cell, gridRow: '1 / 4' }}>
              <img src="/Nido/Piscina-Residencia-de-Estudiantes-Livensa-Living-Sevilla.jpg" alt="Livensa pool" style={imgStyle} />
            </div>
            <div style={{ ...cell, ...dark }}>
              <p style={label}>Resident App</p>
              <p style={title}>Digital home for 30,000+ residents across Europe</p>
            </div>
            <div style={cell}>
              <img src="/Nido/Zz4KmK8jQArT1FdB_ES-Classic-Studio-Nido-Principe-Pio-1.jpg.avif" alt="Nido studio" style={imgStyle} />
            </div>
            <div style={{ ...cell, ...dark }}>
              <p style={label}>Data Platform</p>
              <p style={title}>Real-time property and resident intelligence at scale</p>
            </div>
            <div style={cell}>
              <img src="/Nido/room-single-gr-cartuja.jpg" alt="Nido room" style={imgStyle} />
            </div>
            <div style={{ ...cell, ...dark }}>
              <p style={label}>Web Experience</p>
              <p style={title}>Unified booking and living platform across two brands</p>
            </div>
          </div>

          <div className="row mt-7 mt-md-10">
            <div className="col-md-6 body_text_sm mb-4 mb-md-0 slide-left">
              <p><span style={{fontWeight:400}}>Nido and Livensa Living operate across 30+ properties in Spain, Portugal and Italy, housing thousands of students and young professionals. The challenge is building a unified digital product layer across two distinct brands, multiple markets and a complex operational tech stack.</span></p>
            </div>
            <div className="col-md-6 body_text_sm slide-right">
              <p><span style={{fontWeight:400}}>The work spans resident-facing app and web experiences, a data platform aggregating property and resident insights, and a back-office tooling layer designed to give teams the intelligence to deliver exceptional living experiences at scale. Full case study coming soon.</span></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
