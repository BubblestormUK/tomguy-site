import Footer from '@/components/Footer'

export const metadata = { title: 'Hive — Tom Guy' }
const WP1 = 'https://www.tomguy.co/wp-content/uploads/2025/01'
const WP3 = 'https://www.tomguy.co/wp-content/uploads/2025/03'
const WP = 'https://www.tomguy.co/wp-content/uploads/2025/02'

const subProjects = [
  {
    image: `${WP1}/hive-thermostat.jpg`,
    title: 'Active Heating',
    summary: "Hive Active Heating brought smart home heating to the mass market in the UK, creating a thermostat that was affordable, easy to install and simple to control. As Head of Product Design, I led the experience design across the physical and digital touchpoints, creating a cohesive proposition that customers loved.",
    col1: "The app experience was designed to be simple and accessible, allowing any customer to control their heating from wherever they were in the world, save energy and reduce their carbon footprint.",
    col2: "The range expanded to include a range of smart thermostats, including a wireless receiver and multi-zone heating to meet the needs of a growing range of customers.",
  },
  {
    image: `${WP1}/hive-camera.jpg`,
    title: 'Active Cameras',
    summary: "Hive's Active Camera range extended the smart home proposition beyond heating and into home security, giving customers peace of mind that their home was protected.",
    col1: "Working alongside a world class hardware team, I led the design of the app experience to give customers a seamless, intuitive way to monitor their home from wherever they were.",
    col2: "The range included indoor and outdoor cameras, all connected through the Hive app, creating a unified smart home security solution.",
  },
  {
    image: `${WP1}/hive-sensors.jpg`,
    title: 'Sensors & Lighting',
    summary: "The Hive smart home range was further extended with a suite of sensors and smart lighting products, creating a truly connected home ecosystem.",
    col1: "Motion sensors, door and window sensors, smart plugs and smart bulbs were all designed to work harmoniously within the Hive ecosystem, creating automations that made the home smarter.",
    col2: "The products were all designed to be easy to install and set up, with the Hive app acting as the central hub for the entire smart home experience.",
  },
  {
    image: `${WP1}/hive-app.jpg`,
    title: 'Hive App',
    summary: "The Hive app was the central experience that tied the entire smart home ecosystem together, giving customers a single place to control, monitor and automate their connected home.",
    col1: "As the product range grew, the app experience evolved to accommodate a growing suite of products and features, whilst maintaining the simplicity and ease of use that made Hive so successful.",
    col2: "The app consistently received high ratings in the App Store and Google Play, reflecting the quality of the experience design and the value it delivered to customers.",
  },
  {
    image: `${WP3}/Hive-Project-Images_Portrait6-scaled.jpg`,
    title: 'Diagnostic Solutions',
    summary: "Working with the Hive engineering and data teams, I led the design of a suite of diagnostic tools that helped customers and engineers identify and resolve issues with their smart home products.",
    col1: "The diagnostic solutions were designed to reduce call centre contacts and engineer visits, saving the business money whilst improving the customer experience.",
    col2: "By putting the right information in the hands of the customer and the engineer at the right time, we were able to resolve issues faster and more effectively than ever before.",
  },
]

export default function HivePage() {
  return (
    <>
      <div className="site-content pt-5">
        <div className="container">
          <div className="row mb-6 mb-md-9">
            <div className="col-md-6">
              <h1 className="mb-5 mb-md-6">Hive</h1>
            </div>
            <div className="col-md-6">
              <p className="top_summary">Hive brought the connected home to mass market in 2013 with the first ever smart thermostat, transforming home energy for millions of customers and simplifying the home heating experience.</p>
            </div>
          </div>
          <div className="portfolio_wrapper position-relative">
            <img src={`${WP}/hive-image.jpg`} alt="Hive" className="image-fill top-0 border-radius" />
          </div>
          <div className="row mt-7 mt-md-10">
            <div className="col-md-6 body_text_sm mb-4 mb-md-0">
              <p><span style={{fontWeight:400}}>I joined Hive in 2016 as Head of Product Design with a brief to professionalise the design function and elevate the quality of the product experience across the entire range. Hive had achieved significant scale in a short space of time, but the design team needed to evolve to meet the growing complexity of the product portfolio.</span></p>
            </div>
            <div className="col-md-6 body_text_sm">
              <p><span style={{fontWeight:400}}>Working across hardware, software and service design, I built a world class design team capable of delivering beautifully crafted experiences that delighted customers and drove real business value. The result was a suite of products that consistently topped the charts in customer satisfaction and critical acclaim.</span></p>
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
