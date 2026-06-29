import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = { title: 'Projects — Tom Guy' }

const WP = 'https://www.tomguy.co/wp-content/uploads/2025/02'

const projects = [
  {
    slug: 'nido',
    name: 'Nido / Livensa Living',
    image: `${WP}/bt-image.jpg`,
    description: "Nido and Livensa Living are premium purpose-built student accommodation and young professional living brands operating across Europe. Leading the product and experience vision to create spaces where residents don't just live — they thrive.",
  },
  {
    slug: 'bt',
    name: 'Etc. at BT Group',
    image: `${WP}/bt-image.jpg`,
    description: "Etc. at BT Group is BT's incubation hub. Etc. is designed to build products and services in categories adjacent to the core, using all the most beautiful parts of the mothership.",
  },
  {
    slug: 'vodafone',
    name: 'Vodafone Smart Tech',
    image: `${WP}/vodafone-image.jpg`,
    description: "Vodafone Smart Tech was Vodafone's consumer IoT business, which created category leading smart devices that create moments of magic in people's lives.",
  },
  {
    slug: 'hive',
    name: 'Hive',
    image: `${WP}/hive-image.jpg`,
    description: "Hive brought the connected home to mass market in 2013 with the first ever smart thermostat, transforming home energy for millions of customers and simplifying the home heating experience.",
  },
]

export default function ProjectsPage() {
  return (
    <>
      <div className="site-content pt-5">
        <div className="container">
          <h1 className="mb-5 mb-md-6">Projects</h1>
          {projects.map((project) => (
            <div key={project.slug} className="row project-wrapper">
              <div className="col-12">
                <p>{project.name}</p>
                <div className="row py-5">
                  <div className="col-md-9">
                    <div className="media-project position-relative mb-5 mb-md-0">
                      <img src={project.image} alt={project.name} className="image-fill top-0 border-radius" />
                      <Link href={`/projects/${project.slug}`} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-5">
                      <div className="text-primary">
                        <p style={{ fontWeight: 400 }}>{project.description}</p>
                      </div>
                    </div>
                    <Link href={`/projects/${project.slug}`}>See more &gt;</Link>
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
