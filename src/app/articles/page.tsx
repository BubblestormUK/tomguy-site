import Footer from '@/components/Footer'

export const metadata = { title: 'Articles - Tom Guy' }

const articles = [
  {
    year: '2025',
    items: [
      { title: '"You feel you have to go on crusades, but they can be a very lonely place". Navigating ADHD and a sense of justice', href: 'https://www.linkedin.com/pulse/you-feel-have-go-crusades-can-very-lonely-place-navigating-tom-guy-p1ufe/?trackingId=HgPUhDZIR8ilJcTZaHthnw%3D%3D' },
      { title: 'How 25 billion data points can transform businesses', href: 'https://www.linkedin.com/pulse/how-25-billion-daily-data-points-can-transform-business-tom-guy-wwbde/?trackingId=kgoV3PUdSdyZVv6sPgnDYA%3D%3D' },
    ],
  },
  {
    year: '2024',
    items: [
      { title: "Get over yourself, it's just ADHD", href: 'https://www.linkedin.com/pulse/get-over-yourself-its-just-adhd-tom-guy-nrjoe/?trackingId=6qg1HGoBQ1mVlRlaj5Du6A%3D%3D' },
      { title: 'Etc. at two', href: 'https://www.linkedin.com/pulse/etc-three-from-vegas-east-lothian-everywhere-between-tom-guy-nseje/?trackingId=6qg1HGoBQ1mVlRlaj5Du6A%3D%3D' },
      { title: 'From preventative health to drone soccer: my CES 2024 wrap', href: 'https://www.linkedin.com/pulse/from-preventative-healthtech-drone-soccer-my-ces-2024-tom-guy-noh5e/?trackingId=6qg1HGoBQ1mVlRlaj5Du6A%3D%3D' },
      { title: 'The FT - BT to repurpose first street cabinet as electric vehicle charging station', href: 'https://www.ft.com/content/4504d2ca-6648-40ab-8872-7fbdc7d67405' },
      { title: 'Sky News - Business Live with Ian King - BT\'s first green cabinet charge install', href: 'https://www.youtube.com/watch?v=dVbod7mNHKc' },
      { title: 'BBC You and Yours - CES 2024 trends', href: 'https://www.bbc.co.uk/sounds/play/m001v3k7' },
    ],
  },
  {
    year: '2023',
    items: [
      { title: 'Can tech be the answer to tackling the healthcare crisis?', href: 'https://www.linkedin.com/pulse/can-tech-answer-tackling-healthcare-crisis-tom-guy/?trackingId=kgoV3PUdSdyZVv6sPgnDYA%3D%3D' },
      { title: "When it comes to building startups from within, you've got to have faith", href: 'https://www.linkedin.com/pulse/when-comes-building-startups-from-within-youve-got-have-tom-guy-pp52e/?trackingId=kgoV3PUdSdyZVv6sPgnDYA%3D%3D' },
      { title: "The Guardian - BT Invests £5m in plan for 'drone superhighway' across southern England", href: 'https://www.theguardian.com/business/2023/jan/04/bt-invests-5m-in-plan-for-drone-superhighway-across-southern-england' },
      { title: 'IoT Tech News - BT powers UK first medical drone trial', href: 'https://iottechnews.com/news/bt-powers-a-uk-first-medical-drone-trial/' },
    ],
  },
  {
    year: '2022',
    items: [
      { title: "Dear corporates, it's time to be more startup", href: 'https://www.linkedin.com/pulse/dear-corporates-its-time-more-startup-tom-guy/?trackingId=6qg1HGoBQ1mVlRlaj5Du6A%3D%3D' },
      { title: "Unlocking the skies for drones. It isn't rocket science... is it?", href: 'https://www.linkedin.com/pulse/unlocking-skies-drones-isnt-rocket-science-tom-guy/?trackingId=kgoV3PUdSdyZVv6sPgnDYA%3D%3D' },
      { title: 'Sifted - how BT aims to move beyond telecoms', href: 'https://sifted.eu/articles/bt-moving-beyond-telecoms-health' },
      { title: "Wallpaper - Vodafone Smart Tech's Tom Guy on the Internet of Things", href: 'https://www.wallpaper.com/technology/vodafone-smart-tech-interview-tom-guy' },
    ],
  },
  {
    year: '2021',
    items: [
      { title: 'Looking for the secret to great design? Find the Russian Pencil', href: 'https://www.linkedin.com/pulse/looking-secret-great-design-find-russian-pencil-tom-guy/?trackingId=kgoV3PUdSdyZVv6sPgnDYA%3D%3D' },
    ],
  },
  {
    year: '2020 and previous',
    items: [
      { title: 'Yves Behar debuts Hive View home security camera at CES', href: 'https://www.dezeen.com/2018/01/04/yves-behar-fuseproject-hive-view-indoor-home-security-camera-ces/' },
    ],
  },
]

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25.707" height="17.414" viewBox="0 0 25.707 17.414" className="arrow-right">
    <g transform="translate(-1030.5 -458.793)">
      <line x2="25" transform="translate(1030.5 467.5)" fill="none" stroke="#000" strokeWidth="1" />
      <line x2="8" y2="8" transform="translate(1047.5 459.5)" fill="none" stroke="#000" strokeLinecap="square" strokeWidth="1" />
      <line y1="8" x2="8" transform="translate(1047.5 467.5)" fill="none" stroke="#000" strokeLinecap="square" strokeWidth="1" />
    </g>
  </svg>
)

export default function ArticlesPage() {
  return (
    <>
      <div className="site-content pt-5">
        <div className="container">
          <h1 className="mb-5 mb-md-6 slide-left">Articles</h1>
          {articles.map((group) => (
            <div key={group.year}>
              <div className="article-header slide-up">{group.year}</div>
              {group.items.map((item) => (
                <div key={item.href} className="article-item position-relative slide-up">
                  <div className="pe-6">{item.title}</div>
                  <div className="position-absolute top-0 end-0">
                    <ArrowRight />
                  </div>
                  <a className="stretched-link" href={item.href} target="_blank" rel="noopener noreferrer" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
