import React from 'react'
import SectionTitle from '../ui/SectionTitle.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { useReveal } from '../../hooks/useReveal.js'

function Step({ index, step }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 90}ms` }}>
      <span className="font-display text-5xl text-gold-500/30">{step.num}</span>
      <h3 className="mt-4 font-display text-xl text-ivory-text">{step.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ivory-200/65">{step.desc}</p>
    </div>
  )
}

export default function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionTitle eyebrow={t.process.eyebrow} title={t.process.title} align="center" />

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <Step key={step.num} index={i} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}
