'use client'
import { useState } from 'react'

type Testimonial = { quote: string; name: string; image: string }

export default function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [idx, setIdx] = useState(0)
  const t = testimonials[idx]

  return (
    <div>
      <div className="row">
        <div className="col-md-6 order-md-last">
          <p>
            <span style={{ color: '#868686' }}>{t.quote}</span>
            <br />
            {t.name}
          </p>
        </div>
        <div className="col-md-6 order-md-first">
          <div className="media-text-split position-relative mt-5 mt-md-0">
            <img src={t.image} className="image-fill border-radius" alt="" />
          </div>
        </div>
      </div>

      {/* Dots */}
      <div style={{ textAlign: 'center', marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '0.625rem' }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            style={{
              width: 10, height: 10,
              borderRadius: '50%',
              border: 'none',
              background: i === idx ? '#000' : '#868686',
              cursor: 'pointer',
              padding: 0,
            }}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
