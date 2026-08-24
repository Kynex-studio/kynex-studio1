import React, { useEffect } from 'react'
import Icon from '../ui/Icon.jsx'
import LangToggle from './LangToggle.jsx'
import Mark from '../ui/Mark.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'

export default function MobileMenu({ open, onClose }) {
  const { t } = useLanguage()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-navy-950 lg:hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-navy-line">
        <LangToggle />
        <button
          type="button"
          onClick={onClose}
          aria-label={t.ui.closeMenu}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory-text/20 text-ivory-text"
        >
          <Icon name="close" size={18} />
        </button>
      </div>

      <ul className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
        {t.nav.map((item, i) => (
          <li key={item.id} className="w-full">
            <a
              href={`#${item.id}`}
              onClick={onClose}
              className="flex items-center gap-4 py-3 font-display text-3xl text-ivory-text"
            >
              <span className="text-sm text-gold-500 font-body">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-3 px-8 py-8">
        <Mark size={18} />
        <span className="text-xs uppercase tracking-widest2 text-ivory-200/60">{t.brand.full}</span>
      </div>
    </div>
  )
}
