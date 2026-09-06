import React, { useEffect, useRef, useState } from 'react'
import Mark from '../ui/Mark.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'

const LETTERS = ['K', 'Y', 'N', 'E']
const CHAR_STAGGER = 90 // ms between each letter's entrance
const REVEAL_DELAY = 2350 // ms — when the curtain starts parting / page starts fading in
const FINISH_DELAY = 3450 // ms — when the intro unmounts entirely (after panels finish sliding)
const SKIP_FADE = 320 // ms — fade-out duration when the intro is skipped
export const INTRO_SESSION_KEY = 'kynex-intro-seen'

export function hasSeenIntro() {
  if (typeof window === 'undefined') return true
  try {
    return sessionStorage.getItem(INTRO_SESSION_KEY) === '1'
  } catch (e) {
    return true
  }
}

/**
 * Full-screen entrance sequence styled after the brand's engraved-metal /
 * embossed-paper mark: the KYNE wordmark settles in letter by letter on a
 * grained navy surface, the brushed-gold mark catches a slow light sweep,
 * the tagline resolves beneath it, then the lockup lifts away as two
 * curtain panels part to reveal the page underneath. Respects
 * prefers-reduced-motion and is skippable.
 */
export default function Intro({ onReveal, onFinish }) {
  const { t } = useLanguage()
  const [skipped, setSkipped] = useState(false)
  const [hidden, setHidden] = useState(false)
  const revealTimer = useRef(null)
  const finishTimer = useRef(null)
  const skipTimer = useRef(null)
  const revealedRef = useRef(false)
  const finishedRef = useRef(false)

  const reveal = () => {
    if (revealedRef.current) return
    revealedRef.current = true
    onReveal?.()
  }

  const finish = () => {
    if (finishedRef.current) return
    finishedRef.current = true
    document.body.style.overflow = ''
    setHidden(true)
    try {
      sessionStorage.setItem(INTRO_SESSION_KEY, '1')
    } catch (e) {
      /* private browsing / storage disabled — safe to ignore */
    }
    onFinish?.()
  }

  const handleSkip = () => {
    if (skipped) return
    setSkipped(true)
    window.clearTimeout(revealTimer.current)
    window.clearTimeout(finishTimer.current)
    reveal()
    skipTimer.current = window.setTimeout(finish, SKIP_FADE)
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      const t0 = window.setTimeout(handleSkip, 150)
      return () => window.clearTimeout(t0)
    }

    revealTimer.current = window.setTimeout(reveal, REVEAL_DELAY)
    finishTimer.current = window.setTimeout(finish, FINISH_DELAY)

    return () => {
      window.clearTimeout(revealTimer.current)
      window.clearTimeout(finishTimer.current)
      window.clearTimeout(skipTimer.current)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (hidden) return null

  return (
    <div
      className={`kx-intro fixed inset-0 z-[999] flex items-center justify-center bg-navy-950 ${
        skipped ? 'kx-intro--skip' : ''
      }`}
      onClick={handleSkip}
    >
      <span className="kx-intro-panel kx-intro-panel-l" aria-hidden="true" />
      <span className="kx-intro-panel kx-intro-panel-r" aria-hidden="true" />
      <span className="kx-intro-vignette" aria-hidden="true" />

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          handleSkip()
        }}
        className="absolute top-5 z-[2] text-[11px] uppercase tracking-widest2 text-ivory-200/40 transition-colors hover:text-gold-400 focus-visible:text-gold-400 focus-visible:outline-none ltr:right-5 rtl:left-5"
      >
        {t.ui.skipIntro}
      </button>

      <div className="kx-intro-content relative z-[1] flex flex-col items-center">
        <span
          className="kx-intro-word inline-flex items-center gap-[0.06em]"
          dir="ltr"
          aria-hidden="true"
        >
          {LETTERS.map((char, i) => (
            <span
              key={char}
              className="kx-intro-char kx-emboss inline-block font-display text-[13vw] font-medium tracking-tight sm:text-6xl md:text-7xl"
              style={{ animationDelay: `${i * CHAR_STAGGER}ms` }}
            >
              {char}
            </span>
          ))}
          <span className="kx-intro-mark ms-[0.06em] inline-flex">
            <Mark size={56} glow />
          </span>
        </span>

        <span className="sr-only">{t.brand.full}</span>

        <span className="kx-intro-rule rule-gold mt-8 block h-px w-[120px]" aria-hidden="true" />

        <span className="kx-intro-tagline mt-5 block font-body text-xs uppercase tracking-widest2 text-gold-400 sm:text-sm">
          {t.brand.tagline}
        </span>
      </div>
    </div>
  )
}
