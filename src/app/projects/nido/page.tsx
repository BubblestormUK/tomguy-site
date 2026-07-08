import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = { title: 'Nido / Livensa Living - Tom Guy' }

const NIDO = 'https://www.livensaliving.com/wp-content/uploads'
const NIDO2 = 'https://www.nido.es/wp-content/uploads'

const mosaic: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1.6fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr',
  gap: '6px',
  height: '520px',
  borderRadius: '0.5rem',
  overflow: 'hidden',
}

const cell = (extra?: React.CSSProperties): React.CSSProperties => ({
  overflow: 'hidden',
  position: 'relative',
  ...extra,
})

const img: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
}

export default function NidoPage() {
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
              <p className="top_summary slide-right">Nido and Livensa Living are premium purpose-built student accommodation and young professional living brands across Europe. I lead the product and digital experience vision to create a platform where residents don&apos;t just live - they thrive.</p>
            </div>
          </div>

          {/* Mosaic banner */}
          <div style={mosaic} className="scale-up mb-7 mb-md-10">
            {/* Col 1 - top */}
            <div style={cell()}>
              <img src={`${NIDO}/2022/10/Salon-Apartamento-Livensa-Living-Studios-Madrid-Alcobendas.jpg`} alt="Livensa studio apartment" style={img} />
            </div>
            {/* Col 2 - spans all 3 rows */}
            <div style={cell({ gridRow: '1 / 4' })}>
              <img src={`${NIDO}/2022/03/Piscina.jpg`} alt="Livensa pool" style={img} />
            </div>
            {/* Col 3 - top */}
            <div style={cell()}>
              <img src={`${NIDO}/2022/10/gimnasio-residencia-de-estudiantes-livensa-living-marques-de-pombal.jpg`} alt="Livensa gym" style={img} />
            </div>
            {/* Col 1 - mid */}
            <div style={cell()}>
              <img src={`${NIDO}/2022/03/Piscina-Porto-Boavista.jpg`} alt="Livensa Porto pool" style={img} />
            </div>
            {/* Col 3 - mid */}
            <div style={cell()}>
              <img src={`${NIDO}/2022/10/Biblioteca-Livensa-Living-Malaga-Feria-1.jpg`} alt="Livensa library" style={img} />
            </div>
            {/* Col 1 - bottom */}
            <div style={cell()}>
              <img src={`${NIDO}/2022/03/Terraza-Sevilla.jpg`} alt="Livensa terrace" style={img} />
            </div>
            {/* Col 3 - bottom */}
            <div style={cell()}>
              <img src={`${NIDO}/2022/10/zona-juegos-living-bilbao.jpg`} alt="Livensa social space" style={img} />
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
