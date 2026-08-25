import Footer from '@/components/Footer'

export const metadata = { title: 'Boxxed.ai - Tom Guy' }

const CDN = 'https://cdn.prod.website-files.com/67b35dcedc61b9219863860a'

const img = {
  metrics: `${CDN}/67cc6849922205e2fb9c1b58_Black%20%26%20White%20Simple%20Coming%20Soon%20Instagram%20Post%20(Square)%20(1440%20x%201080%20px)%20(4).png`,
  workflows: `${CDN}/67cc681b057c076102dd2ce1_Black%20%26%20White%20Simple%20Coming%20Soon%20Instagram%20Post%20(Square)%20(1440%20x%201080%20px)%20(7).png`,
  outreach: `${CDN}/67cddf8477152b4e94700cca_Black%20%26%20White%20Simple%20Coming%20Soon%20Instagram%20Post%20(Square)%20(1440%20x%201080%20px)%20(11).png`,
}

const subProjects = [
  {
    image: img.metrics,
    title: 'Analyse',
    summary: 'The first phase is analysis. We work with the business to understand existing workflows, identify where automation and AI create the most value, and assess whether the data and processes are ready.',
    col1: 'Rather than leading with a solution, we lead with the problem. That means taking time to understand what the business actually does before recommending where AI fits.',
    col2: 'The output is a clear view of the highest-impact opportunities, prioritised by effort and return, with a roadmap the business can act on immediately.',
  },
  {
    image: img.workflows,
    title: 'Build',
    summary: 'Once the opportunity is defined, we design and build a custom AI solution. No off-the-shelf tools, no generic templates. Everything is built to fit the specific workflow, data and scale of the business.',
    col1: 'From automating outreach and qualifying leads to building real-time dashboards, custom reporting and AI-powered document processing, the scope of what gets built is shaped entirely by what the business needs.',
    col2: 'Integrations are handled end-to-end, connecting to existing systems and training models on the business\'s own data. The result is a solution that works from day one, without requiring a technical team to operate it.',
  },
  {
    image: img.outreach,
    title: 'Run',
    summary: 'Deployment is not the end. AI needs to be monitored, maintained and improved as the business changes and the models evolve.',
    col1: 'We handle everything after launch, from performance monitoring and model updates to scaling the solution as usage grows. The business stays focused on what it does best.',
    col2: 'The Run phase is where the investment compounds. As the AI learns and the workflows mature, the impact grows, turning an initial automation into a long-term competitive advantage.',
  },
]

export default function BoxxedPage() {
  const imgStyle: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' }
  const cell: React.CSSProperties = { overflow: 'hidden', position: 'relative' }
  const dark: React.CSSProperties = { background: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', textAlign: 'center' }
  const label: React.CSSProperties = { fontFamily: 'Helvetica Neue, Arial, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#666', marginBottom: '0.75rem' }
  const titleStyle: React.CSSProperties = { fontSize: '1rem', fontWeight: 300, color: '#fff', lineHeight: 1.3 }

  return (
    <>
      <div className="site-content pt-5">
        <div className="container">
          <div className="row mb-6 mb-md-9">
            <div className="col-md-6">
              <h1 className="mb-5 mb-md-6 slide-left">Boxxed.ai</h1>
            </div>
            <div className="col-md-6">
              <p className="top_summary slide-right">Boxxed.ai is a GenAI business co-founded to help small and medium-sized companies embed AI and automation into the way they work. On-demand, tailored AI built and deployed in under a week, with no technical team needed.</p>
            </div>
          </div>

          <div className="scale-up" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '6px',
            height: '480px',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            marginBottom: '3rem',
          }}>
            <div style={{ ...cell, gridRow: '1 / 3', background: '#f5f3f0' }}>
              <img src={img.metrics} alt="Custom Metrics" style={{ ...imgStyle, objectPosition: 'center' }} />
            </div>
            <div style={{ ...cell, background: '#f5f3f0' }}>
              <img src={img.workflows} alt="Custom Workflows" style={{ ...imgStyle, objectPosition: 'center' }} />
            </div>
            <div style={{ ...cell, ...dark }}>
              <p style={label}>Analyse</p>
              <p style={titleStyle}>Identify the highest-impact AI opportunities in your business</p>
            </div>
            <div style={{ ...cell, ...dark }}>
              <p style={label}>Build</p>
              <p style={titleStyle}>Custom AI automations built and deployed in under a week</p>
            </div>
            <div style={{ ...cell, background: '#f5f3f0' }}>
              <img src={img.outreach} alt="Custom Outreach" style={{ ...imgStyle, objectPosition: 'center' }} />
            </div>
          </div>

          <div className="row mt-7 mt-md-10">
            <div className="col-md-6 body_text_sm mb-4 mb-md-0 slide-left">
              <p><span style={{ fontWeight: 400 }}>Most businesses understand AI can change the way they work. The barrier is rarely ambition. It is knowing where to start, having the resource to build it, and trusting that what gets built will actually work and continue to work.</span></p>
            </div>
            <div className="col-md-6 body_text_sm slide-right">
              <p><span style={{ fontWeight: 400 }}>Boxxed was co-founded to close that gap. End-to-end AI as a service, from identifying the highest-value opportunity to building the solution, deploying it and keeping it running as the business grows.</span></p>
            </div>
          </div>

          {subProjects.map((p, i) => (
            <div key={i} className={`row sub-project gx-md-8 mb-10 mb-md-0${i === 0 ? ' mt-7 mt-md-10' : ''}`}>
              <div className={`col-md-6 ${i % 2 === 0 ? 'slide-left' : 'slide-right'}`}>
                <div className="portrait_wrapper position-relative" style={{ background: '#f5f3f0', borderRadius: '0.5rem', overflow: 'hidden' }}>
                  <img src={p.image} alt={p.title} className="image-fill top-0 border-radius" style={{ objectFit: 'contain', padding: '1rem' }} />
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
