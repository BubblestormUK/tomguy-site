import Footer from '@/components/Footer'

export const metadata = { title: 'Contact — Tom Guy' }

export default function ContactPage() {
  return (
    <>
      <div className="site-content pt-5 pt-md-12">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h1 className="mb-5">Contact</h1>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <h2>If you&apos;re interested in collaborating please get in touch</h2>
              </div>
              <p className="mb-0"><a href="mailto:tom@bubblestorm.co.uk">tom@bubblestorm.co.uk</a></p>
              <p><a href="https://www.linkedin.com/in/tomguyuk/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
