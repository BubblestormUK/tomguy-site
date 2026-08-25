import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = { title: 'Projects - Tom Guy' }

const projects = [
  {
    slug: 'bt',
    name: 'Etc. at BT Group',
    image: '/BT/bt-image.jpg',
    description: "Etc. at BT Group is BT's incubation hub. Etc. is designed to build products and services in categories adjacent to the core, using all the most beautiful parts of the mothership.",
  },
  {
    slug: 'vodafone',
    name: 'Vodafone Smart Tech',
    image: '/Vodafone/vodafone-image.jpg',
    description: "Vodafone Smart Tech was Vodafone's consumer IoT business, which created category leading smart devices that create moments of magic in people's lives.",
  },
  {
    slug: 'hive',
    name: 'Hive',
    image: '/Hive/hive-image.jpg',
    description: "Hive brought the connected home to mass market in 2013 with the first ever smart thermostat, transforming home energy for millions of customers and simplifying the home heating experience.",
  },
  {
    slug: 'boxxed',
    name: 'Boxxed.ai',
    image: 'https://cdn.prod.website-files.com/67b35dcedc61b9219863860a/67b35dcedc61b92198638798_Stack%20Images%2004.jpg',
    description: "Boxxed.ai is a GenAI business co-founded to help small and medium-sized companies embed AI and automation into the way they work. On-demand AI built in under a week.",
  },
  {
    slug: 'nido',
    name: 'Nido / Livensa Living',
    image: '/Nido/Zzdtk68jQArT07FI_Nido-Principe-Pio-Building-1R9A0966.jpg.avif',
    imagePosition: 'top center',
    description: "Nido and Livensa Living are two of Europe's leading residential accommodation brands, serving 30,000+ students and young professionals across Spain, Portugal and Italy.",
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
                  <div className="col-md-9 scale-up">
                    <div className="media-project position-relative mb-5 mb-md-0">
                      <img src={project.image} alt={project.name} className="image-fill top-0 border-radius" style={(project as any).imagePosition ? { objectPosition: (project as any).imagePosition } : undefined} />
                      <Link href={`/projects/${project.slug}`} style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
                    </div>
                  </div>
                  <div className="col-md-3 slide-right">
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
