import Footer from '@/components/Footer'
import Link from 'next/link'

const WP = 'https://www.tomguy.co/wp-content/uploads/2025/02'

const projects = [
  {
    slug: 'nido',
    name: 'Nido / Livensa Living',
    image: `${WP}/bt-image.jpg`, // placeholder until you provide Nido image
    description: 'Nido and Livensa Living are premium purpose-built student accommodation and young professional living brands operating across Europe. Leading the product and experience vision to create spaces where residents don\'t just live - they thrive.',
    href: '/projects/nido',
  },
  {
    slug: 'bt',
    name: 'Etc. at BT Group',
    image: `${WP}/bt-image.jpg`,
    description: 'Etc. at BT Group is BT\'s incubation hub. Etc. is designed to build products and services in categories adjacent to the core, using all the most beautiful parts of the mothership.',
    href: '/projects/bt',
  },
  {
    slug: 'vodafone',
    name: 'Vodafone Smart Tech',
    image: `${WP}/vodafone-image.jpg`,
    description: 'Vodafone Smart Tech was Vodafone\'s consumer IoT business, which created category leading smart devices that create moments of magic in people\'s lives.',
    href: '/projects/vodafone',
  },
  {
    slug: 'hive',
    name: 'Hive',
    image: `${WP}/hive-image.jpg`,
    description: 'Hive brought the connected home to mass market in 2013 with the first ever smart thermostat, transforming home energy for millions of customers and simplifying the home heating experience.',
    href: '/projects/hive',
  },
]

export default function Home() {
  return (
    <>
      <div className="site-content pt-5">
        <div className="container">
          <div className="row">
            {/* Text - right on desktop */}
            <div className="col-md-3 order-md-last slide-right" style={{ marginBottom: '1.75rem' }}>
              <div className="mb-7 mb-md-0">
                <h1>
                  <span style={{ fontWeight: 400 }}>Developing <span style={{ color: '#999' }}>Products.</span><br /></span>
                  <span style={{ fontWeight: 400 }}><span style={{ color: '#333' }}>Building <span style={{ color: '#999' }}>Startups.</span></span><br /></span>
                  <span style={{ fontWeight: 400 }}>Driving <span style={{ color: '#999' }}>Innovation.</span><br /></span>
                  <span style={{ fontWeight: 400 }}>Creating <span style={{ color: '#999' }}>Culture.</span></span>
                </h1>
                <p>&nbsp;</p>
                <p><Link href="/the-playbook">Playbook &gt;</Link></p>
              </div>
            </div>

            {/* Video - left on desktop */}
            <div className="col-md-9 order-md-first scale-up">
              <div className="media-home position-relative">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="video-fill border-radius"
                >
                  <source src={`${WP}/NEW-PENDING-For-Tammy-reference-only-sizzle.mp4`} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="container pt-10 pt-md-12">
          <h1 className="mb-5 mb-md-6">Projects</h1>

          {projects.map((project) => (
            <div key={project.slug} className="row project-wrapper">
              <div className="col-12">
                <p>{project.name}</p>
                <div className="row py-5">
                  <div className="col-md-9 scale-up">
                    <div className="media-project position-relative mb-5 mb-md-0">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="image-fill top-0 border-radius"
                      />
                      <Link href={project.href} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
                    </div>
                  </div>
                  <div className="col-md-3 slide-right">
                    <div className="mb-5">
                      <div className="text-primary">
                        <p style={{ fontWeight: 400 }}>{project.description}</p>
                      </div>
                    </div>
                    <Link href={project.href}>See more &gt;</Link>
                  </div>
                  <div className="col-12">
                    <div className="divider w-100 bg-primary mt-5" />
                  </div>
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
