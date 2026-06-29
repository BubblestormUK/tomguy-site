'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/the-playbook', label: 'Playbook' },
  { href: '/projects', label: 'Projects' },
  { href: '/articles', label: 'Articles' },
  { href: '/superpower', label: 'Superpower' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lottieRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!lottieRef.current) return
    // Load lottie dynamically
    import('lottie-web').then((lottie) => {
      if (!lottieRef.current) return
      lottieRef.current.innerHTML = ''
      lottie.default.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'https://www.tomguy.co/wp-content/uploads/2025/02/GRAP0022_BUBBLESTORM_LogoAnimation_WEB_V001-1.json',
        rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
      })
    })
  }, [])

  // Close nav on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      {/* Top header with Lottie logo */}
      <div className="top-header pt-3" style={{ paddingBottom: '0.5rem' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 position-relative">
              <div className="row align-content-between">
                <div className="col-md-7 ms-auto">
                  <div className="position-relative" style={{ height: '4rem' }}>
                    <div
                      ref={lottieRef}
                      style={{ width: '100%', height: '100%' }}
                    />
                    <Link href="/" style={{ position: 'absolute', inset: 0 }} aria-label="Home" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider w-100 bg-primary mt-3" />
        </div>
      </div>

      {/* Sticky nav bar with hamburger */}
      <div className={`top_nav headroom headroom--pinned${scrolled ? ' active' : ''}${open ? ' open' : ''}`}>
        <section className="container">
          <div className="row">
            <div id="nav_button">
              <a
                id="hidden-nav-button"
                className={open ? 'open' : ''}
                onClick={() => setOpen(!open)}
                style={{ cursor: 'pointer' }}
                aria-label="Toggle navigation"
              >
                <span />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Full-screen nav overlay */}
      <div className={`main_nav${open ? ' open' : ''}`}>
        <section className="container">
          <div id="menu">
            <ul className="list-unstyled mb-0">
              {navLinks.map((link) => (
                <li key={link.href} className={pathname === link.href ? 'current-menu-item' : ''}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
