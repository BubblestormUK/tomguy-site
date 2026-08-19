import Footer from '@/components/Footer'


export const metadata = { title: 'Nido / Livensa Living - Tom Guy' }

const subProjects = [
  {
    image: '/Nido/Zz4KmK8jQArT1FdB_ES-Classic-Studio-Nido-Principe-Pio-1.jpg.avif',
    title: 'The Problem to Solve',
    summary: 'Two brands, two separate tech stacks, no shared data platform and a low-touch digital in-life resident journey. The business had grown through M&A, bringing Nido and Livensa Living together under CPP Investments PE-backed ownership with an intensely commercial board focused on value creation at pace.',
    col1: 'The starting point was understanding where the biggest leverage was. Disparate property management systems, no unified resident identity and a fragmented in-life experience pointed to digital transformation as the highest-impact opportunity.',
    col2: 'The mandate was clear: build the digital and technology foundation that would let the business scale across student, flex and hotel accommodation, across Spain, Portugal and Italy, without fragmenting the customer experience.',
  },
  {
    image: '/Nido/PTC-templates-2025-06-20T121934.173.png',
    title: 'Platform & Data',
    summary: 'Delivering the full platform stack required bringing together a unified data warehouse, web platform with property management and booking, and a resident app managing the in-stay experience.',
    col1: 'The data layer was central. We aggregated property, booking and resident data into a unified warehouse, giving the business real-time intelligence across the portfolio for the first time. Clean data enabled better decisions at every level, from board reporting to day-to-day property operations.',
    col2: 'A modern cloud-native architecture replaced legacy point solutions, enabling the product and engineering teams to ship faster, integrate more reliably and give the business the flexibility to adapt as the portfolio grows.',
  },
  {
    image: '/Nido/Piscina-Residencia-de-Estudiantes-Livensa-Living-Sevilla.jpg',
    title: 'Resident App & Web',
    summary: 'The resident-facing digital experience spanned a unified booking and enquiry web platform across both brands, and a resident app serving 30,000+ students and young professionals across Spain, Portugal and Italy.',
    col1: 'The web platform was rebuilt to handle the complexity of two distinct brands, multiple markets and multiple property types, creating a coherent journey from discovery through to booking without fragmenting the experience.',
    col2: 'The resident app became the digital home for every resident: booking amenities, raising maintenance requests, managing their stay and staying connected with their community. Designed for simplicity, built to scale.',
  },
  {
    image: '/Nido/cocinas-residencia-de-estudiantes-Livensa-Living-Malaga.jpg',
    title: 'Livensa Labs',
    summary: 'Livensa Labs was established as an innovation function to rapidly prototype and validate AI-powered concepts across the business, identifying opportunities outside the core that could create step-change value across the portfolio.',
    col1: 'Three initial focus areas were defined: AI-powered workflows and information sharing to surface insights faster and reduce operational overhead; a campaign management tool to give local property teams the ability to run targeted marketing without central dependency; and asset investment intelligence to support board-level capital allocation decisions.',
    col2: 'Labs operated with a startup-within mentality, running fast experiments to prove what was possible before committing to full builds. The model was designed to create a sustainable pipeline of innovation that could be scaled across the business over time.',
  },
]

export default function NidoPage() {
  const imgStyle: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' }
  const cell: React.CSSProperties = { overflow: 'hidden', position: 'relative' }
  const dark: React.CSSProperties = { background: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', textAlign: 'center' }
  const label: React.CSSProperties = { fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666', marginBottom: '0.75rem' }
  const title: React.CSSProperties = { fontSize: '1rem', fontWeight: 300, color: '#fff', lineHeight: 1.3 }

  return (
    <>

      <div className="site-content pt-5">
        <div className="container">
          <div className="row mb-6 mb-md-9">
            <div className="col-md-6">
              <h1 className="mb-5 mb-md-6 slide-left">Nido / Livensa Living</h1>
            </div>
            <div className="col-md-6">
              <p className="top_summary slide-right">Nido and Livensa Living are CPP Investments PE-backed accommodation brands operating across student, flex and hotel properties in Spain, Portugal and Italy. I joined as Chief Digital Officer to lead end-to-end digital transformation across product, data and technology.</p>
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
              <p style={label}>Livensa Labs</p>
              <p style={title}>AI-powered innovation lab prototyping the next generation of tools</p>
            </div>
          </div>

          <div className="row mt-7 mt-md-10">
            <div className="col-md-6 body_text_sm mb-4 mb-md-0 slide-left">
              <p><span style={{fontWeight:400}}>Nido and Livensa Living came together through M&A under a focused CPP Investments PE board with clear value creation targets. The two brands had grown independently, each with their own systems, processes and digital touchpoints. The pressure to drive value at pace was real, but the foundations needed to be right first.</span></p>
            </div>
            <div className="col-md-6 body_text_sm slide-right">
              <p><span style={{fontWeight:400}}>I was brought in to identify where digital could have the biggest impact and build it. The answer was transformation across the full stack: unifying two disparate technology platforms, building a true data foundation, and creating a high-quality digital journey that residents would actually use and value.</span></p>
            </div>
          </div>

          {subProjects.map((p, i) => (
            <div key={i} className={`row sub-project gx-md-8 mb-10 mb-md-0${i === 0 ? ' mt-7 mt-md-10' : ''}`}>
              <div className={`col-md-6 ${i % 2 === 0 ? 'slide-left' : 'slide-right'}`}>
                <div className="portrait_wrapper position-relative">
                  <img src={p.image} alt={p.title} className="image-fill top-0 border-radius" />
                </div>
              </div>
              <div className={`col-md-6 ${i % 2 === 0 ? 'slide-right' : 'slide-left'}`}>
                <h1 className="mb-5 mb-md-8 mt-5 mt-md-12">{p.title}</h1>
                <p className="mb-5 mb-md-6">{p.summary}</p>
                <div className="row">
                  <div className="col-md-6 body_text_xs"><div className="mb-4 mb-md-0">{p.col1 && <p><span style={{fontWeight:400}}>{p.col1}</span></p>}</div></div>
                  <div className="col-md-6 body_text_xs">{p.col2 && <p><span style={{fontWeight:400}}>{p.col2}</span></p>}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
