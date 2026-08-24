import React from 'react'
import SectionTitle from '../ui/SectionTitle.jsx'
import Mark from '../ui/Mark.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { useReveal } from '../../hooks/useReveal.js'

function ServiceCard({ index, title, desc }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal group rounded-md border border-navy-line p-8 transition-colors hover:border-gold-500/60 bg-navy-900/40"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="font-display text-2xl text-gold-400">
          {String(index + 1).padStart(2, '0')}
        </span>
        <Mark size={20} className="opacity-70 transition-transform group-hover:rotate-45" />
      </div>
      <h3 className="font-display text-xl text-ivory-text">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ivory-200/65">{desc}</p>
    </div>
  )
}

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionTitle eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {t.services.items.map((item, i) => (
            <ServiceCard key={item.title} index={i} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
