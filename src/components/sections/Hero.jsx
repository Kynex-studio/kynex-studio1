import React from 'react'
import Logo from '../ui/Logo.jsx'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'

export default function Hero() {
  const { t, isRtl } = useLanguage()

  return (
    <section
      id="home"
      className="grain-surface relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-navy-950 pt-28 pb-16"
    >
      {/* Ambient spotlight, echoing the studio's brand plate */}
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] h-[60vw] w-[60vw] max-h-[560px] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201,163,95,0.35), transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-content flex-col items-center px-5 text-center sm:px-8">
        <span className="mb-6 text-xs font-medium uppercase tracking-widest2 text-gold-400">
          {t.hero.eyebrow}
        </span>

        <Logo size="hero" showTagline />

        <h1 className="mt-10 max-w-3xl text-balance font-display text-3xl leading-[1.25] text-ivory-text sm:text-4xl md:text-[2.75rem]">
          {t.hero.headline}
        </h1>

        <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ivory-200/70 sm:text-lg">
          {t.hero.subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button as="a" href="#contact" variant="primary">
            {t.hero.primaryCta}
            <Icon name="arrow" size={16} className={isRtl ? 'rotate-180' : ''} />
          </Button>
          <Button as="a" href="#work" variant="secondary">
            {t.hero.secondaryCta}
          </Button>
        </div>
      </div>

      <div className="relative z-10 mt-16 flex justify-center">
        <a
          href="#services"
          className="flex flex-col items-center gap-2 text-ivory-200/50 hover:text-gold-400 transition-colors"
          aria-label={t.ui.scrollHint}
        >
          <span className="text-[10px] uppercase tracking-widest2">{t.ui.scrollHint}</span>
          <Icon name="arrowUp" size={14} className="rotate-180" />
        </a>
      </div>
    </section>
  )
}
