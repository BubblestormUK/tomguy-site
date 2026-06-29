'use client'
import { useState } from 'react'

type Section = { title: string; content: string }

export default function AccordionSection({ sections }: { sections: Section[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      {sections.map((s, i) => (
        <div key={i} className={`accordion-holder mb-6${open === i ? ' active' : ''}`}>
          <div className="accordion-header position-relative pb-2" onClick={() => setOpen(open === i ? null : i)}>
            <h1>{s.title}</h1>
            <div className="accordion-toggle" />
          </div>
          <div
            className="accordion-content body_text_sm py-5"
            dangerouslySetInnerHTML={{ __html: s.content }}
          />
        </div>
      ))}
    </>
  )
}
