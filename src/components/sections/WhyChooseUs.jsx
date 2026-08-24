import React from 'react'
import SectionTitle from '../ui/SectionTitle.jsx'
import Mark from '../ui/Mark.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { useReveal } from '../../hooks/useReveal.js'

function Row({ index, title, desc }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal flex gap-5 border-t border-navy-line py-7 first:border-t-0 sm:gap-8"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <Mark size={22} className="mt-1 shrink-0 opacity-80" />
      <div>
        <h3 className="font-display text-lg sm:text-xl text-ivory-text">{title}</h3>
        <p className="mt-2 max-w-xl text-sm sm:text-base leading-relaxed text-ivory-200/65">{desc}</p>
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionTitle eyebrow={t.why.eyebrow} title={t.why.title} />

        <div className="mt-10">
          {t.why.items.map((item, i) => (
            <Row key={item.title} index={i} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
