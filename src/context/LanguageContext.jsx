import React, { createContext, useContext, useEffect, useState } from 'react'
import { content } from '../data/content.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'ar'
    return localStorage.getItem('kynex-lang') || 'ar'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('kynex-lang', lang)
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'ar' ? 'en' : 'ar'))
  const isRtl = lang === 'ar'
  const t = content[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isRtl, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
