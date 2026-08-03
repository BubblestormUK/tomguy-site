import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = { title: 'Nido / Livensa Living - Tom Guy' }

const subProjects = [
  {
    image: '/Nido/Zz4KmK8jQArT1FdB_ES-Classic-Studio-Nido-Principe-Pio-1.jpg.avif',
    title: 'Digital Transformation',
    summary: 'Two distinct brands, two separate tech stacks, no shared data platform and a low-touch digital resident journey. Digital transformation was the highest-impact opportunity and the most complex to get right.',
    col1: 'The business had grown through M&A, bringing Nido and Livensa Living together under a single PE-backed ownership structure with an intensely commercial board. The pressure to drive value at pace was real, but the foundations needed to be right first.',
    col2: 'The starting point was a clear-eyed assessment of where the biggest leverage was. Disparate property management systems, no unified resident identity, and a fragmented in-life experience created the mandate for a ground-up digital rethink.',
  },
  {
    image: '/Nido/PTC-templates-2025-06-20T121934.173.png',
    title: 'Tech Stack',
    summary: 'Building a unified technology foundation across two brands and three markets required bringing together property management, resident identity, payments and communication into a coherent, scalable platform.',
    col1: 'We mapped the existing systems landscape, rationalised the core stack and defined the integration architecture needed to connect property operations with resident-facing digital products. The data layer was central: aggregating property, booking and resident data to enable real-time intelligence at scale.',
    col2: 'A modern cloud-native approach replaced legacy point solutions, enabling the product and engineering teams to ship faster and the business to make better decisions with cleaner, more reliable data.',
  },
  {
    image: '/Nido/Piscina-Residencia-de-Estudiantes-Livensa-Living-Sevilla.jpg',
    title: 'Resident App & Web Experience',
    summary: 'The resident-facing digital experience spanned a unified booking and enquiry platform across both brands, and a resident app serving 30,000+ students and young professionals across Spain, Portugal and Italy.',
    col1: 'The web experience was redesigned to create a coherent brand journey from discovery through to booking, handling the complexity of two brands, multiple markets and multiple property types without fragmenting the user experience.',
    col2: 'The resident app became the digital home for every resident: booking services, raising maintenance requests, managing their stay and staying connected with their community. Designed for simplicity, built to scale across the full estate.',
  },
  {
    image: '/Nido/cocinas-residencia-de-estudiantes-Livensa-Living-Malaga.jpg',
    title: 'Livensa Labs',
    summary: 'Livensa Labs was set up as an innovation function to identify and develop opportunities outside the core business, exploring where technology could create step-change value across the portfolio.',
    col1: 'Three initial focus areas were defined: AI-powered workflows and information sharing to reduce operational overhead and surface insights faster; a marketing and campaign management tool to give local property teams the ability to run targeted campaigns without central dependency; and asset investment intelligence to help the board make better-informed capital allocation decisions.',
    col2: 'Labs operated with a startup-within mentality, running fast experiments to validate ideas before committing to full builds. The goal was to prove what was possible and create a pipeline of innovation that could be scaled across the business.',
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
      <ScrollReveal />
      <div className="site-content pt-5">
        <div className="container">
          <div className="row mb-6 mb-md-9">
            <div className="col-md-6">
              <h1 className="mb-5 mb-md-6 slide-left">Nido / Livensa Living</h1>
            </div>
            <div className="col-md-6">
              <p className="top_summary slide-right">Nido and Livensa Living are premium purpose-built student accommodation and young professional living brands operating across 30+ properties in Spain, Portugal and Italy. I joined to lead the product, digital and technology vision across both brands.</p>
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
              <p style={title}>Innovation function exploring AI, data and new product opportunities</p>
            </div>
          </div>

          <div className="row mt-7 mt-md-10">
            <div className="col-md-6 body_text_sm mb-4 mb-md-0 slide-left">
              <p><span style={{fontWeight:400}}>The business had come together through M&A, with Nido and Livensa Living operating as separate brands under a single PE-backed ownership structure. A commercially driven board and ambitious growth targets created both the pressure and the permission to move fast. The challenge was knowing where to start.</span></p>
            </div>
            <div className="col-md-6 body_text_sm slide-right">
              <p><span style={{fontWeight:400}}>Digital transformation was the answer. Two disparate tech stacks, no true data platform, limited AI capability and a low-touch digital in-life resident journey represented the biggest opportunity to create real, lasting value for residents and the business alike.</span></p>
            </div>
          </div>

          {subProjects.map((p, i) => (
            <div key={i} className="row sub-project gx-md-8 mb-10 mb-md-0">
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
