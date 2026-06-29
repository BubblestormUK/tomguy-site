import Footer from '@/components/Footer'
import TestimonialSlider from '@/components/TestimonialSlider'

export const metadata = { title: 'About - Tom Guy' }

const WP = 'https://www.tomguy.co/wp-content/uploads/2025/02'

const testimonials = [
  {
    quote: "It's rare to come across a product designer that is as strongly committed to driving positive change for customers as Tom. In over a decade of collaborating together, I've never seen him waver in his ambition to help improve the lives of the customers he's serving. This, paired with his instinct for asking the questions others won't and his eye for simple, elegant design makes him a true powerhouse in the world of product.",
    name: 'Yves Béhar, award-winning designer, entrepreneur and founder of Fuseproject',
    image: `${WP}/testimonial-placeholder.jpg`,
  },
  {
    quote: "Tom has a unique quality as a product designer: whatever he's creating, he truly cares about the story it needs to tell. He builds products that have personality and a clear purpose for those who use them, with the goal of helping make their lives that little bit easier. He only creates what he knows customers truly need, which is a dream starting point for any marketer.",
    name: 'Elaine Stern, three time founder and CEO of integrated communications agency, The 10 Group',
    image: `${WP}/testimonial-placeholder_Elaine-Stern.jpg`,
  },
  {
    quote: "I hired Tom because I saw in him not only experience for building great products, but a passion to solve a problem for customers and an ability to think out of the box. We shared the same language around culture, redefining what innovation means and being unafraid to shake things up to get there. He adopts true product thinking in everything he does, builds teams that are driven by a culture of care and inspires others by truly taking them on the journey with him.",
    name: 'Harmeen Mehta, Former chief digital & innovation officer, BT',
    image: `${WP}/testimonial-placeholder-Harmeen-Mehta.jpg`,
  },
  {
    quote: "Tom has a unique quality as a product designer: whatever he's creating, he truly cares about the story it needs to tell. He builds products that have personality and a clear purpose for those who use them, with the goal of helping make their lives that little bit easier. He only creates what he knows customers truly need, which is a dream starting point for any marketer.",
    name: 'Pamela Brown, Group CMO, Aira Home and former CMO of Vodafone Smart Tech',
    image: `${WP}/testimonial-placeholder-pamela-brown.jpg`,
  },
  {
    quote: "One thing I've always admired about Tom is that he always brings his whole self to work every day, and empowers us to do the same. He makes space for open, honest conversations, taking time to make sure everyone can speak and be truly heard. As a black woman working in tech, I know first hand how powerful creating that space can be for inspiring inclusivity and creating more diverse seats at the table. He's an active ally, a mentor and an advocate for both myself and others in the team - both within and beyond the day to day.",
    name: 'Margaret Sheyindemi, startup growth manager, Etc. at BT Group',
    image: `${WP}/testimonial-placeholder-Margaret-Sheyindemi.jpg`,
  },
  {
    quote: "Navigating ADHD in the workplace isn't a simple task. It requires nuance, empathy, and an understanding that if I'm honest, most businesses just don't have. If we're going to build businesses that celebrate not just ADHD, but neurodivergence in its entirety, we have to see more vulnerability from the leaders that live with it. Its role models like Tom that help change perceptions within the industry, challenge the status quo and prove that neurodiversity can be a major asset to an organisation if properly embraced and nurtured.",
    name: "Dr James Kustow, author of How to Thrive with Adult ADHD",
    image: `${WP}/testimonial-placeholder-dr-james-kustow.jpg`,
  },
  {
    quote: "Tom and I have collaborated on designing many different products over the years, beginning with his days at Hive. Over this time I've found Tom's approach is like no other leader involved in design, as passionate about the details as he is the big picture thinking, helping to navigate and curate the delicate relationship between functionality, visual identity, and user experience. Combining this journey with Tom's personality and charisma makes him an amazing storyteller, which is a huge asset to the companies and brands he works with.",
    name: 'Matt Plested, Design Director & Founder, The Fuel',
    image: `${WP}/The-Fuel-Matt-and-Jim.png`,
  },
  {
    quote: "Having worked with Tom at Hive, I've seen him approach every project he takes on with genuine passion, drive and user focus. From building the right multidisciplinary team to delivering innovation in new, unexpected ways, Tom is one of those leaders that really does things differently to deliver a superior outcome.",
    name: 'Nina Bhatia, Executive Director, New Businesses, John Lewis Partnership',
    image: `${WP}/Nina-Bhatia.jpg`,
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="site-content pt-5 pt-md-8">
        <div className="container">
          <div className="row gx-md-8 mb-8 mb-md-10">
            <div className="col-md-6">
              <h1 className="mb-5 mb-md-6">About</h1>
              <p className="top_summary mb-6 mb-md-0">
                I&apos;m a startup founder, product designer and board advisor passionate about building products that create magical moments in people&apos;s lives.
              </p>
              <div className="row mb-7 mb-md-0 mt-md-10">
                <div className="col-md-6 body_text_xs mb-4 mb-md-0">
                  <p><span style={{ fontWeight: 400 }}>I&apos;m currently Managing Director of Etc., the incubation arm of BT, where I oversee a team of around 200 to create and incubate startups in categories outside the core. With a passion for innovating within nascent sectors, I believe in using a relentless customer focus to build disruptive products that work right now and for the future, solving real customer problems and identifying solutions for their unmet needs – for direct to consumer and enterprise customers.</span></p>
                  <p><span style={{ fontWeight: 400 }}>Prior to launching Etc. I was Chief Product Officer at Vodafone Smart Tech, where I led the department&apos;s portfolio of pioneering consumer IoT products. I oversaw the development of a number of new category leading smart devices, as well as forging international partnerships with Disney and industry veteran Yves Béhar to create Neo, the smart kids watch in 2020 and defining the new design language and personality for all Vodafone&apos;s hardware.</span></p>
                </div>
                <div className="col-md-6 body_text_xs">
                  <p><span style={{ fontWeight: 400 }}>Before joining Vodafone, I was a founding member of Hive, where I was responsible for bringing the connected home to the mass market by transforming the way customers interacted firstly with their heating, then the entire smart home. Hive became an official Superbrand in 2015 and a CES Innovation honouree in 2019.</span></p>
                  <p><span style={{ fontWeight: 400 }}>Having also worked across a wealth of energetic technology start-ups including Yachtsie and Catch Media, I&apos;m always looking at how the products I create can push boundaries and lead category growth.</span></p>
                  <p><span style={{ fontWeight: 400 }}>None of this would have been possible on my own. There have been countless people along the way-both directly and indirectly-who have contributed to the successes shared on this online Portfolio. But the core group we established in the early days of Hive, who went on to build Smart Tech at Vodafone and Etc. at BT Group, are the most important. What we&apos;ve accomplished together, alongside many others over the last decade, feels nothing short of a miracle.</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="portrait_wrapper position-relative">
                <img src={`${WP}/about_top.jpg`} alt="Tom Guy" className="image-fill top-0 border-radius" />
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="row gx-md-8 media-text-split-wrapper">
            <div className="col-md-6 d-flex align-items-center order-md-2">
              <div className="mb-5 mb-md-0">
                <h1 className="mb-3 mb-md-5">Awards</h1>
                <p><span style={{ fontWeight: 400 }}>I&apos;ve been lucky enough to collaborate with some brilliant product designers to create award winning solutions over the course of the last decade. From culture, to product and innovation, these awards have spanned almost every industry and every business that I have worked in.</span></p>
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <div className="media-text-split position-relative mb-5 mb-md-0">
                <img src={`${WP}/Awards-Images-scaled.jpg`} className="image-fill border-radius" alt="Awards" />
              </div>
            </div>
            <div className="col-12 border-bottom order-md-3">
              <div className="divider w-100 bg-primary mt-5 mt-md-7" />
            </div>
          </div>

          {/* Testimonials */}
          <div className="row justify-content-between align-items-center mb-3">
            <div className="col-auto">
              <p>Testimonials</p>
            </div>
          </div>
          <div className="row pt-4 pb-5">
            <div className="col-12">
              <TestimonialSlider testimonials={testimonials} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
