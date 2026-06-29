'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    import('scrollreveal').then(({ default: SR }) => {
      const sr = SR()
      sr.reveal('.scale-up', { scale: 0.8, opacity: 0, delay: 100, duration: 2000 })
      sr.reveal('.slide-up', { distance: '20%', origin: 'bottom', opacity: 0, delay: 100, duration: 2000 })
      sr.reveal('.slide-left', { distance: '20%', origin: 'left', opacity: 0, delay: 100, duration: 2000 })
      sr.reveal('.slide-right', { distance: '20%', origin: 'right', opacity: 0, delay: 100, duration: 2000 })
    })
  }, [])

  return null
}
