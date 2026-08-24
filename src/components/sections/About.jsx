import React from 'react'
import SectionTitle from '../ui/SectionTitle.jsx'
import Mark from '../ui/Mark.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { useReveal } from '../../hooks/useReveal.js'

export default function About() {
  const { t } = useLanguage()
  const ref = useReveal()

  return (
    <section id="about" className="bg-navy-900/30 py-24 sm:py-32">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} />

        <div ref={ref} className="reveal flex flex-col gap-8">
          <p className="text-base sm:text-lg leading-relaxed text-ivory-200/80">{t.about.body}</p>

          <ul className="flex flex-col gap-4">
            {t.about.principles.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <Mark size={16} className="mt-1 shrink-0 opacity-80" />
                <span className="text-sm sm:text-base text-ivory-200/75">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
