import Footer from '@/components/Footer'
import AccordionSection from '@/components/AccordionSection'

export const metadata = { title: 'Playbook — Tom Guy' }

const WP = 'https://www.tomguy.co/wp-content/uploads/2025/02'

const sections = [
  {
    title: 'Philosophy',
    content: `<p><span style="font-weight:400">My career journey started with a series of juxtapositions, first of all working in large scale corporate businesses before pivoting to new startups. In the last decade, I've been interested in how those two ends of the business spectrum can be brought together to drive real, meaningful innovation at scale, pulling in the drive, determination and agility of a startup whilst capitalising the process and heritage of a corporate.</span></p>
<p><span style="font-weight:400">In this decade of exploration, I've started creating and deploying a specific type of business model that I like to call a startup from within. These are businesses that have the backing of a large, often global company, but that run based on the principles of a startup.</span></p>
<p><span style="font-weight:400">I believe these startups from within hold a unique opportunity within them. They have the legacy, scale and endorsement to create products that stand the test of time, but the disruptive and agile mindset to drive true innovation.</span></p>
<p><span style="font-weight:400">They operate similar to a strategic investor does – being able to utilise the assets, counsel and scalability of the corporate mothership, whilst encouraging new ways of thinking and tackling customer needs.</span></p>`,
  },
  {
    title: 'Principle: Creating Culture',
    content: `<p><span style="font-weight:400">Culture must be treated as a product…</span></p>
<p><span style="font-weight:400">A good product can only be created by a team that's powered by positive culture. Culture is something that's built, not given, but when done right it fosters an environment that celebrates out of the box thinking, gives people a safe space to make mistakes and celebrates diversity of thought. That means it must be approached in the same way as a product – with constant iteration and reiteration, a willingness to learn and adapt and an understanding that the work is never done.</span></p>
<p><span style="font-weight:400">Like any product, we must build culture with a clear outcome and a single mission in mind that everyone is driving towards. For the teams I work in, it's simple, the goal should be that wherever we go, this will be the best place we've ever worked. By setting that high bar, everyone is poised to bring their best ideas and experiences.</span></p>`,
  },
  {
    title: 'Principle: Lean Startup',
    content: `<p><span style="font-weight:400">No matter how big you are, act like a startup</span></p>
<p><span style="font-weight:400">That means adopting zero to one principles, being intentionally lean and getting comfortable with failing fast, testing and learning. A startup mindset is so much more than just using the 'right' buzzwords, it means truly understanding how to be agile, operate as squads, and be brave enough to push back on the complexities.</span></p>`,
  },
  {
    title: 'Principle: Ask Why',
    content: `<p><span style="font-weight:400">The biggest skill a product disruptor can possess is to constantly ask "why"…</span></p>
<p><span style="font-weight:400">Disrupt everything. Not just the category you are creating products in, but the way you build those products too. If it doesn't service the ultimate customer then question why it's there. Don't put up with processes that exist just because they have been there for a while, or because "we've always done it that way". Ultimately, when the end goal is disrupting for good, it's never going to be easy, but making the processes as agile as possible is a good way to start.</span></p>`,
  },
  {
    title: 'Principle: Drive Innovation',
    content: `<p><span style="font-weight:400">Never stop innovating.</span></p>
<p><span style="font-weight:400">Real innovation comes with outside-in thinking, never losing sight of the principles and starting on the journey with a clear problem to solve. For decades, product leaders have fallen into the same trap of trying to 'innovate' by focusing only on how they can use the newest, shiniest technology, and as a result we're left behind with cameras for fridges and automated toilet paper dispensers. Innovation isn't about tech for the sake of tech, it's about solving real, daily problems people face with simple solutions.</span></p>
<p><span style="font-weight:400">It's this approach that helps not just build products, but transform categories.</span></p>`,
  },
  {
    title: 'Process',
    content: `<p><span style="font-weight:400">To start, we always create a vision of where we want to get to, either based on the problem to solve, an unmet need, or a future outcome we want to see. We then break this vision down into granular parts. To do this, we use a Goal-Oriented Roadmap method. By clearly explaining the outcome you want for each part of the roadmap, you can test if it ultimately serves the overall mission and easily collate them into themes.</span></p>
<p><span style="font-weight:400">To bring this vision to life, we blend our in-house expertise with an extensive network of talent, covering every aspect of product development and the wider business. By strategically partnering with key third parties, we stay lean and move at pace, ensuring we have the right skills at the right time without unnecessary overhead.</span></p>
<p><span style="font-weight:400">Throughout the process, we stay hyper-focused on outcomes, always coming back to what we promised for the investment we received and using an overarching program delivery method. Just as a startup CEO regularly engages with the board and shareholders, we provide continuous, transparent updates to all stakeholders.</span></p>`,
  },
  {
    title: 'Pencil',
    content: `<p><span style="font-weight:400">You might have heard the anecdote (or myth??) from the US vs. Russia space race back in the 1960s. Where the US spent millions to build a high-tech pen designed specifically to work at zero gravity, the Russians had a different plan. Take a pencil.</span></p>
<p><span style="font-weight:400">Whatever I'm building, that way of thinking sits at the heart of the process – how can I find the most elegant, intuitive yet simple way to solve a problem?</span></p>
<p><span style="font-weight:400">In a world where different technologies are constantly shouting for attention, it's the single thought I take with me into every new project I start.</span></p>
<p><span style="font-weight:400">Keep it simple …..Find the Russian pencil.</span></p>`,
  },
]

export default function PlaybookPage() {
  return (
    <>
      <div className="site-content pt-5">
        <div className="container">
          <div className="row mb-7 mb-md-9">
            <div className="col-md-6">
              <h1 className="mb-5 mb-md-6">Playbook</h1>
            </div>
            <div className="col-md-6">
              <p className="top_summary">Startup approach, culture as a product, Asking why, disrupt for good and simply trying to change the world.</p>
            </div>
          </div>

          <div className="portfolio_wrapper position-relative">
            <img
              src={`${WP}/Playbook-Hero-Project-Image_Landscape_280225-scaled.jpg`}
              alt="Playbook"
              className="image-fill top-0 border-radius"
            />
          </div>

          <div className="row justify-content-md-end my-7">
            <div className="col-md-9">
              <AccordionSection sections={sections} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
