import React from 'react'
import Mark from './Mark.jsx'

export default function Logo({ size = 'nav', showTagline = false }) {
  const isHero = size === 'hero'
  const wordSize = isHero ? 'text-[13vw] sm:text-6xl md:text-7xl' : 'text-2xl'
  const markSize = isHero ? 56 : 22

  return (
    <span className="inline-flex flex-col items-start" dir="ltr">
      <span className="inline-flex items-center gap-[0.06em]">
        <span
          className={`font-display font-medium tracking-tight text-ivory-text ${wordSize}`}
        >
          KYNE
        </span>
        <Mark size={markSize} glow={isHero} spin={isHero} />
      </span>
      {showTagline && (
        <span
          className={`mt-2 font-body uppercase text-gold-400 ${
            isHero ? 'text-xs sm:text-sm tracking-widest2' : 'text-[10px] tracking-widest2'
          }`}
        >
          Digital Studio
        </span>
      )}
    </span>
  )
}
