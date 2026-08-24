import React, { useEffect, useState } from 'react'
import Logo from '../ui/Logo.jsx'
import Button from '../ui/Button.jsx'
import LangToggle from './LangToggle.jsx'
import MobileMenu from './MobileMenu.jsx'
import Icon from '../ui/Icon.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-navy-950/85 backdrop-blur-md border-b border-navy-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 sm:px-8 py-4">
        <a href="#home" aria-label={t.brand.full}>
          <Logo size="nav" />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {t.nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-ivory-200/85 hover:text-gold-400 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <LangToggle />
          <Button as="a" href="#contact" variant="primary" className="text-xs px-5 py-2.5">
            {t.hero.primaryCta}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={t.ui.openMenu}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory-text/20 text-ivory-text"
          >
            <Icon name="menu" size={18} />
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
