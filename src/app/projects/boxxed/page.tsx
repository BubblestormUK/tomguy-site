import Footer from '@/components/Footer'

export const metadata = { title: 'Boxxed.ai - Tom Guy' }

const CDN = 'https://cdn.prod.website-files.com/67b35dcedc61b9219863860a'

const img = {
  analyse: `${CDN}/67b624595b9817ecfc9d85e6_2.png`,
  build: `${CDN}/67b624591a6d075d8107b89d_3.png`,
  run: `${CDN}/67b6245932482a4a4b0806de_8.png`,
  person: `${CDN}/67b35dcedc61b92198638798_Stack%20Images%2004.jpg`,
  metrics: `${CDN}/67cc6849922205e2fb9c1b58_Black%20%26%20White%20Simple%20Coming%20Soon%20Instagram%20Post%20(Square)%20(1440%20x%201080%20px)%20(4).png`,
  workflows: `${CDN}/67cc681b057c076102dd2ce1_Black%20%26%20White%20Simple%20Coming%20Soon%20Instagram%20Post%20(Square)%20(1440%20x%201080%20px)%20(7).png`,
  outreach: `${CDN}/67cddf8477152b4e94700cca_Black%20%26%20White%20Simple%20Coming%20Soon%20Instagram%20Post%20(Square)%20(1440%20x%201080%20px)%20(11).png`,
}

const subProjects = [
  {
    image: img.metrics,
    title: 'Analyse',
    summary: 'The starting point is always understanding where AI genuinely creates value. That means mapping existing workflows, identifying the highest-friction points, and being honest about where the data and process are ready to support automation and where they are not.',
    col1: 'For the businesses we have worked with, the biggest gains have rarely been where they expected. Intake processes, research, briefing, content production and client reporting have consistently surfaced as the areas with the most to gain from intelligent automation.',
    col2: 'The output of the analysis phase is a prioritised roadmap, ranked by effort and return, so the business can start with the highest-impact opportunity and build from there.',
  },
  {
    image: img.workflows,
    title: 'Build',
    summary: 'Once the opportunity is clear, we design and build a custom solution. The work spans the full stack: from selecting and fine-tuning the right models to building the integrations that connect AI outputs to the tools and workflows the team already uses.',
    col1: 'Across our client work we have built AI-powered lead qualification and outreach workflows, automated content briefing and first-draft pipelines, intelligent document processing, and client reporting systems that pull from multiple data sources into polished, branded outputs.',
    col2: 'Everything is built without requiring a technical team on the client side to operate it. The aim is always to reduce the gap between ambition and delivery, getting something working and valuable in front of the business in under a week.',
  },
  {
    image: img.outreach,
    title: 'Run',
    summary: 'Deployment is not the end of the work. AI solutions need to be monitored, maintained and evolved as the business changes, the models improve and new use cases emerge from what the initial automations reveal.',
    col1: 'We handle the full lifecycle after launch: performance monitoring, prompt and model updates, scaling as usage grows and expanding to adjacent workflows as the business gains confidence in what AI can do.',
    col2: 'The Run phase is where the investment compounds. As the automations mature and the team sees what is possible, the scope of what gets built grows with it, turning a single workflow into a platform for how the business operates.',
  },
]

export default function BoxxedPage() {
  const cell: React.CSSProperties = { overflow: 'hidden', position: 'relative' }
  const dark: React.CSSProperties = { background: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', textAlign: 'center' }
  const lbl: React.CSSProperties = { fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666', marginBottom: '0.75rem' }
  const ttl: React.CSSProperties = { fontSize: '1rem', fontWeight: 300, color: '#fff', lineHeight: 1.3 }
  const fill: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' }

  return (
    <>
      <div className="site-content pt-5">
        <div className="container">
          <div className="row mb-6 mb-md-9">
            <div className="col-md-6">
              <h1 className="mb-5 mb-md-6 slide-left">Boxxed.ai</h1>
            </div>
            <div className="col-md-6">
              <p className="top_summary slide-right">Boxxed.ai is a GenAI business I co-founded to help small and medium-sized companies embed AI and automation into the way they work. On-demand, tailored AI built and deployed in under a week. No technical team needed on the client side.</p>
            </div>
          </div>

          {/* Hero grid */}
          <div className="scale-up" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '6px',
            height: '500px',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            marginBottom: '3rem',
          }}>
            <div style={{ ...cell, gridRow: '1 / 3' }}>
              <img src={img.person} alt="Boxxed" style={{ ...fill, objectPosition: 'center top' }} />
            </div>
            <div style={{ ...cell, background: '#f0eef8' }}>
              <img src={img.analyse} alt="Analyse" style={{ ...fill, objectPosition: 'center 80%' }} />
            </div>
            <div style={{ ...cell, ...dark }}>
              <p style={lbl}>Analyse</p>
              <p style={ttl}>Find where AI creates the most value in your business</p>
            </div>
            <div style={{ ...cell, background: '#f0eef8' }}>
              <img src={img.build} alt="Build" style={{ ...fill, objectPosition: 'center 75%' }} />
            </div>
            <div style={{ ...cell, ...dark }}>
              <p style={lbl}>Build &amp; Run</p>
              <p style={ttl}>Custom AI automations deployed and maintained end-to-end</p>
            </div>
          </div>

          {/* Intro */}
          <div className="row mt-7 mt-md-10">
            <div className="col-md-6 body_text_sm mb-4 mb-md-0 slide-left">
              <p><span style={{ fontWeight: 400 }}>Most businesses understand that AI can change the way they work. The barrier is rarely ambition. It is knowing where to start, having the resource to build it, and trusting that what gets built will actually work and keep working as the business evolves.</span></p>
            </div>
            <div className="col-md-6 body_text_sm slide-right">
              <p><span style={{ fontWeight: 400 }}>Boxxed was co-founded to close that gap for small and medium-sized businesses that do not have a technical team but understand the competitive urgency of getting AI working inside their organisation. End-to-end AI as a service, from the first conversation to a running, maintained solution.</span></p>
            </div>
          </div>

          {/* Sub-project sections — identical pattern to Nido */}
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
                  <div className="col-md-6 body_text_xs"><div className="mb-4 mb-md-0"><p><span style={{ fontWeight: 400 }}>{p.col1}</span></p></div></div>
                  <div className="col-md-6 body_text_xs"><p><span style={{ fontWeight: 400 }}>{p.col2}</span></p></div>
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
