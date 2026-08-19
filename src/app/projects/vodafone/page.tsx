import Footer from '@/components/Footer'


export const metadata = { title: 'Vodafone Smart Tech - Tom Guy' }
const WP = '/Vodafone'
const WP1 = '/Vodafone'

const subProjects = [
  {
    image: `${WP1}/neo-watch.jpg`,
    title: 'Neo, the Smart Kids Watch',
    summary: 'Working with world-renowned designer Yves Béhar and Disney, Neo, the smart kids watch was created to help give children a sense of independence and play, whilst empowering parents with the reassurance of staying connected.',
    col1: "We aimed for this connected device to fill the void between children using their parents devices and getting their first smartphone.",
    col2: '',
  },
  {
    image: `${WP1}/light-and-tracker.jpg`,
    title: 'Curve Bike Light & GPS Tracker',
    summary: 'Curve Bike Light and GPS tracker was designed to give reassurance for both cyclists and their loved ones on and off the road.',
    col1: '',
    col2: "Created as an all-in-one bike safety solution, Curve Bike's elegant design was complemented by an intuitive digital experience to give cyclists greater confidence as they ride.",
  },
  {
    image: `${WP1}/gps-tracker.jpg`,
    title: 'Curve Smart GPS Tracker',
    summary: 'Curve was created for people who want to keep track of important items like keys, laptops and backpacks, and even pets.',
    col1: "Connected to Vodafone's global network via a built-in SIM, Curve's unique app experience made it a differentiator in the market, allowing people to locate the device wherever they are in the world.",
    col2: "It also helped users keep track of where their loved ones are, enabling them to stay better connected.",
  },
  {
    image: `${WP1}/pet-tracker.jpg`,
    title: 'Curve GPS Pet Tracker',
    summary: 'Curve Pet Tracker was an expansion of the award-winning Curve smart GPS tracker range, consisting of Curve, the smart GPS tracker and a new pet tracker clip.',
    col1: '',
    col2: 'The adjustable pet tracker clip attached Curve securely and comfortably to collars and harnesses for the ultimate pet tracking solution.',
  },
  {
    image: `${WP1}/smart-tech-app.jpg`,
    title: 'Smart Tech App',
    summary: 'The entire Designed & Connected by Vodafone range was brought together by a single, easy to use app which allowed users to control all of their devices in one ecosystem.',
    col1: "Whether checking in on their kids whilst they're at the park or at school, tracking their bike ride or monitoring pet collars, the simple, intuitive design brought all of our most critical information together at a user's fingertips.",
    col2: '',
  },
  {
    image: `${WP1}/ultra-hub-family.jpg`,
    title: 'Ultra Hub Family',
    summary: 'Vodafone were looking for an enhanced customer experience which matched the quality and seamlessness of its new WiFi technology when designing its latest router.',
    col1: 'Our research demonstrated that a router works best when out in the open, not obstructed by being in an enclosed space, so we set ourselves the task of designing a product which had a subtle yet desirable design language, inspired by the look of a speaker.',
    col2: 'The final product had a soft texture designed to blend seamlessly into the home, with a design signature which served as a visual reminder of the WiFi waves flowing effortlessly through the home.',
  },
]

export default function VodafonePage() {
  return (
    <>

      <div className="site-content pt-5">
        <div className="container">
          <div className="row mb-6 mb-md-9">
            <div className="col-md-6">
              <h1 className="mb-5 mb-md-6 slide-left">Vodafone Smart Tech</h1>
            </div>
            <div className="col-md-6">
              <p className="top_summary slide-right">I was responsible for the launch of a number of pioneering products under Vodafone Smart Tech, Vodafone&apos;s consumer IoT business which created leading smart devices with the customer at the heart.</p>
            </div>
          </div>
          <div className="scale-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr 1fr', gridTemplateRows: '1fr 1fr 1fr', gap: '6px', height: '520px', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '3rem' }}>
            <div style={{ overflow: 'hidden' }}><img src={`${WP1}/neo-watch.jpg`} alt="Neo Watch" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ overflow: 'hidden', gridRow: '1 / 4' }}><img src={`${WP}/vodafone-image.jpg`} alt="Vodafone Smart Tech" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ overflow: 'hidden' }}><img src={`${WP1}/light-and-tracker.jpg`} alt="Curve Bike Light" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ overflow: 'hidden' }}><img src={`${WP1}/gps-tracker.jpg`} alt="Curve GPS Tracker" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ overflow: 'hidden' }}><img src={`${WP1}/smart-tech-app.jpg`} alt="Smart Tech App" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ overflow: 'hidden' }}><img src={`${WP1}/pet-tracker.jpg`} alt="Curve Pet Tracker" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ overflow: 'hidden' }}><img src={`${WP1}/ultra-hub-family.jpg`} alt="Ultra Hub" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          </div>
          <div className="row mt-7 mt-md-10">
            <div className="col-md-6 body_text_sm mb-4 mb-md-0 slide-left">
              <p><span style={{fontWeight:400}}>Vodafone wanted to build on its connectivity platform, which up until 2020 had predominantly been created for enterprise, with a number of focused consumer IOT products. We wanted the products to be first party designed and owned, rather than a disparate collection of third party products that didn&apos;t function harmoniously.</span></p>
            </div>
            <div className="col-md-6 body_text_sm slide-right">
              <p><span style={{fontWeight:400}}>To ensure we could build a proposition that truly resonated with consumers, we started to build out a &apos;Designed and Connected by Vodafone&apos; design language and ways of working to all first party hardware in Vodafone leading with the award winning Ultra Hub router - underpinning Vodafone broadband propositions.</span></p>
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
                  <div className="col-md-6 body_text_xs"><div className="mb-4 mb-md-0">{p.col1 && <p>{p.col1}</p>}</div></div>
                  <div className="col-md-6 body_text_xs">{p.col2 && <p>{p.col2}</p>}</div>
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
