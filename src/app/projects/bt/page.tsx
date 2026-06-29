import Footer from '@/components/Footer'

export const metadata = { title: 'Etc. at BT Group - Tom Guy' }
const WP = 'https://www.tomguy.co/wp-content/uploads/2025/02'
const WP1 = 'https://www.tomguy.co/wp-content/uploads/2025/01'

const subProjects = [
  {
    image: `${WP}/drones-one-stop-shop.jpg`,
    title: 'Drones one-stop-shop',
    summary: 'Etc. at BT Group has been building a one stop shop solution for drone enablement capabilities across the UK.',
    col1: 'In 2023, we started working with the UK government to create the UK\'s first commercial drone corridor, a 165-mile \'superhighway\' connecting airspace across major cities to enable simple and easy drone flight and delivery. Using EE connectivity, we built on this commitment in 2023 by creating the UK\'s first SIM designed specifically for a drone, created to maintain connectivity at altitude using the EE network. The SIM has already been used to support delivery of medical supplies across the country.',
    col2: 'In 2024 we further established our credibility in the space by building the first flight planning platform through a £5m deal with leading drone technology provider, Altitude Angel, as well as Drone Detect, which now provides drone detection solutions to UK businesses.',
  },
  {
    image: `${WP}/healthy-you.jpg`,
    title: 'Healthy You',
    summary: 'Healthy You is a digital platform designed to solve some of the biggest challenges across the healthcare system, helping manage patient demand whilst also preventing, detecting and managing conditions through remote monitoring and early intervention.',
    col1: '',
    col2: 'The award-winning solution enables patients to be remotely monitored from home by a clinician team, providing them with tools needed to better manage their own health whilst staying connected to a healthcare professional.',
  },
  {
    image: `${WP}/ev-charge.jpg`,
    title: 'EV Connect',
    summary: "BT's EV charge and connect pilot was launched to explore the viability of upgrading its street cabinets to provide charge and connectivity for OTA updates.",
    col1: "The cabinet's main purpose becomes redundant as full-fibre rolls out across the UK. Designed to support the UK's journey towards electrification, the pilots explored the real world potential and scalability.",
    col2: 'The solution was awarded a CES Innovation Honouree award in 2024 for its pioneering potential to support the drive to net zero in the UK with unparalleled media coverage across national press, TV and radio.',
  },
  {
    image: `${WP}/Etc.-tap-to-PayProject-Image_Portrait-scaled.jpg`,
    title: 'Etc. Pay',
    summary: "Our first exploration into digital transformation, building a safe, secure modular cloud payments platform for BT and EE's payment needs. This included a subscription engine, an internal user interface and a no-code deployment approach. We wanted to test our startup incubation approach in a core area of the business and in digital transformation - the result was a platform built in record time ready to support billions of pounds in transactions.",
    col1: '', col2: '',
  },
  {
    image: `${WP}/BT-Tap-top-Pay-Project-Image_Portrait-scaled.jpg`,
    title: 'Tap to Pay',
    summary: 'Created in partnership with leading global payments platform Adyen, Tap-to-Pay is a bespoke in-person payment solution which allows merchants to take payments from their iPhone. The platform provides UK businesses with a reliable, convenient way to take payments from wherever they are, through a simple to use app.',
    col1: '', col2: '',
  },
  {
    image: `${WP}/BT-Project-Images_Portrait-1-scaled.jpg`,
    title: 'Active Intelligence',
    summary: "Designed to help businesses optimise services and enhance customer experiences, Active Intelligence uses powerful location and movement insights from 25bn aggregated, anonymised daily data points to create the 'web analytics of the real-world'.",
    col1: '',
    col2: 'The service is currently being used by media, retail, transport and Government to help decision making with rich movement data.',
  },
]

export default function BTPage() {
  return (
    <>
      <div className="site-content pt-5">
        <div className="container">
          <div className="row mb-6 mb-md-9">
            <div className="col-md-6">
              <h1 className="mb-5 mb-md-6">Etc. at BT Group</h1>
            </div>
            <div className="col-md-6">
              <p className="top_summary">In 2022, I launched Etc. at BT Group, BT&apos;s incubation hub designed to build products and services in categories adjacent to the core, using all the most beautiful parts of the mothership.</p>
            </div>
          </div>
          <div className="portfolio_wrapper position-relative">
            <img src={`${WP}/bt-image.jpg`} alt="Etc. at BT Group" className="image-fill top-0 border-radius" />
          </div>
          <div className="row mt-7 mt-md-10">
            <div className="col-md-6 body_text_sm mb-4 mb-md-0">
              <p><span style={{fontWeight:400}}>BT wanted to create value from areas outside and adjacent to the core, but wanted to test each new space at speed, quickly identifying where we should invest our time. This wasn&apos;t about an innovation funnel or hundreds of ideas, but instead looking at a few macro economic and customer relevant problem statements to create a small number of categories that we could drive real value from for the group.</span></p>
            </div>
            <div className="col-md-6 body_text_sm">
              <p><span style={{fontWeight:400}}>Key to success on hitting this brief was a startup from within approach, building a team with a startup mentality driven by agile thinking, zero to one principles, a disruptive mindset, whilst also exploring how to reimagine existing BT assets to solve the customer problem in new ways.</span></p>
            </div>
          </div>

          {subProjects.map((p, i) => (
            <div key={i} className="row sub-project gx-md-8 mb-10 mb-md-0">
              <div className="col-md-6">
                <div className="portrait_wrapper position-relative">
                  <img src={p.image} alt={p.title} className="image-fill top-0 border-radius" />
                </div>
              </div>
              <div className="col-md-6">
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
