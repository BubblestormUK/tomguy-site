import Footer from '@/components/Footer'

export const metadata = { title: 'Nido / Livensa Living — Tom Guy' }
const WP = 'https://www.tomguy.co/wp-content/uploads/2025/02'

export default function NidoPage() {
  return (
    <>
      <div className="site-content pt-5">
        <div className="container">
          <div className="row mb-6 mb-md-9">
            <div className="col-md-6">
              <h1 className="mb-5 mb-md-6">Nido / Livensa Living</h1>
            </div>
            <div className="col-md-6">
              <p className="top_summary">Nido and Livensa Living are premium purpose-built student accommodation and young professional living brands operating across Europe. Leading the product and experience vision to create spaces where residents don&apos;t just live — they thrive.</p>
            </div>
          </div>
          <div className="portfolio_wrapper position-relative">
            <img src={`${WP}/bt-image.jpg`} alt="Nido / Livensa Living" className="image-fill top-0 border-radius" />
          </div>
          <div className="row mt-7 mt-md-10">
            <div className="col-md-6 body_text_sm mb-4 mb-md-0">
              <p><span style={{fontWeight:400}}>More details coming soon.</span></p>
            </div>
            <div className="col-md-6 body_text_sm">
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
