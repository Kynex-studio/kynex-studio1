import React from 'react'
import Button from '../ui/Button.jsx'
import Mark from '../ui/Mark.jsx'
import Icon from '../ui/Icon.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'

export default function CTA() {
  const { t, isRtl } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-navy-900/60 py-24 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40vw] w-[40vw] max-h-[420px] max-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201,163,95,0.4), transparent 70%)' }}
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <Mark size={30} glow />
        <h2 className="font-display text-3xl sm:text-4xl text-ivory-text text-balance">{t.cta.title}</h2>
        <p className="max-w-md text-ivory-200/70">{t.cta.subtitle}</p>
        <Button as="a" href="#contact" variant="primary" className="mt-2">
          {t.cta.button}
          <Icon name="arrow" size={16} className={isRtl ? 'rotate-180' : ''} />
        </Button>
      </div>
    </section>
  )
}
