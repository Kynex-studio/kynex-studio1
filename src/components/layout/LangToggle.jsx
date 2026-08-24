import React from 'react'
import { useLanguage } from '../../context/LanguageContext.jsx'

export default function LangToggle({ className = '' }) {
  const { toggleLang, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLang}
      className={`flex h-9 items-center justify-center rounded-full border border-ivory-text/20 px-4 text-xs font-medium tracking-wide text-ivory-text hover:border-gold-500 hover:text-gold-400 transition-colors ${className}`}
    >
      {t.ui.langToggleLabel}
    </button>
  )
}
