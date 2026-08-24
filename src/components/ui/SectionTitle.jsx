import React from 'react'
import Mark from './Mark.jsx'

export default function SectionTitle({ eyebrow, title, intro, align = 'start' }) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start'

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 text-gold-400">
          <Mark size={14} />
          <span className="text-xs font-medium uppercase tracking-widest2">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.15] text-ivory-text text-balance">
        {title}
      </h2>
      {intro && <p className="text-base sm:text-lg leading-relaxed text-ivory-200/70">{intro}</p>}
    </div>
  )
}
