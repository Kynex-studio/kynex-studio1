import React from 'react'
import Logo from '../ui/Logo.jsx'
import Mark from '../ui/Mark.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-ivory-text">
      <div className="mx-auto max-w-content px-5 sm:px-8 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo size="nav" />
            <p className="mt-4 text-sm leading-relaxed text-ivory-200/70">{t.footer.tagline}</p>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {t.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-ivory-200/80 hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="rule-gold opacity-30 my-10" />

        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory-200/50">
            © {year} Kynex — {t.footer.rights}
          </p>
          <div className="flex items-center gap-2 text-xs text-ivory-200/50">
            <Mark size={12} />
            <span>{t.contact.placeholderNote}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
