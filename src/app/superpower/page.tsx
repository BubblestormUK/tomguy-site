import Footer from '@/components/Footer'

export const metadata = { title: 'Superpower - Tom Guy' }

const WP = 'https://www.tomguy.co/wp-content/uploads/2025/02'

export default function SuperpowerPage() {
  return (
    <>
      <div className="site-content pt-5 pt-md-8">
        <div className="container">
          <div className="row gx-md-8 mb-8 mb-md-10">
            <div className="col-md-6">
              <h1 className="mb-5 mb-md-6">Superpower</h1>
              <p className="top_summary mb-6 mb-md-0">
                In the last few years, I&apos;ve discovered that I hold a unique superpower: ADHD.
              </p>
              <div className="row mb-7 mb-md-0 mt-md-10">
                <div className="col-md-6 body_text_xs mb-4 mb-md-0">
                  <p><span style={{ fontWeight: 400 }}>Someone close to me was diagnosed with ADHD a few years back, and as we went on the journey speaking to psychologists and undergoing tests – it gave me clarity on something I always knew about myself. It was both scary and a huge relief to be able to put a name to the way I viewed the world, and in the years since, I&apos;ve come to be more aware of how powerful neurodiversity can truly be.</span></p>
                  <p><span style={{ fontWeight: 400 }}>Since I can remember, I&apos;ve always had what I call a noisy mind. Something is always going on – my brain is overactive and that means I find it hard to stop, relax and let my mind settle. Despite that creating a sometimes frustrating inability to switch off, it also enables me to become hyperfocused on the things that I really care about, inspires me to think creatively and helps keep me honest in my commitment to customer needs.</span></p>
                </div>
                <div className="col-md-6 body_text_xs">
                  <p><span style={{ fontWeight: 400 }}>Having ADHD also equips me with a deeper understanding of people and a higher level of empathy. Because I am hyper aware of emotions (and not just those that show up on people&apos;s faces but the micro emotions that sit beneath the surface) I am able to be a more considered leader when it comes to supporting and empowering my team. As someone who has grappled with imposter syndrome, a challenging relationship with receiving feedback and a fear of letting people down myself, I have a deeper understanding of the connective tissue between how people behave and the emotions that drive them.</span></p>
                  <p><span style={{ fontWeight: 400 }}>The reality of it is that adult ADHD is still very underserved. There&apos;s still more to be done to understand ADHD in the workplace, the link with mental health, and the nuances of how it shows up in men and women. That&apos;s why I am passionate about being an ally and a voice for supporting neurodiversity in the industry, championing better representation and understanding in the workplace and celebrating ADHD as the superpower it truly is.</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 scale-up">
              <div className="portrait_wrapper position-relative">
                <img src={`${WP}/about_top.jpg`} alt="Tom Guy" className="image-fill top-0 border-radius" />
              </div>
            </div>
          </div>

          {/* Dr Kustow quote */}
          <div className="row gx-md-8 media-text-split-wrapper">
            <div className="col-md-6 d-flex align-items-center order-md-2 slide-right">
              <div className="mb-5 mb-md-0">
                <p>
                  <span style={{ fontWeight: 400, color: '#999' }}>
                    Navigating ADHD in the workplace isn&apos;t a simple task. It requires nuance, empathy, and an understanding that if I&apos;m honest, most businesses just don&apos;t have. If we&apos;re going to build businesses that celebrate not just ADHD, but neurodivergence in its entirety, we have to see more vulnerability from the leaders that live with it. Its role models like Tom that help change perceptions within the industry and challenge the status quo.
                  </span>
                  <br />
                  Dr James Kustow, author of How to Thrive with Adult ADHD
                </p>
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <div className="media-text-split position-relative mb-5 mb-md-0">
                <img src={`${WP}/testimonial-placeholder-dr-james-kustow.jpg`} className="image-fill border-radius" alt="Dr James Kustow" />
              </div>
            </div>
            <div className="col-12 border-bottom order-md-3">
              <div className="divider w-100 bg-primary mt-5 mt-md-7" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
