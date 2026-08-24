import React, { useEffect } from 'react'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Services from './components/sections/Services.jsx'
import Work from './components/sections/Work.jsx'
import WhyChooseUs from './components/sections/WhyChooseUs.jsx'
import Process from './components/sections/Process.jsx'
import About from './components/sections/About.jsx'
import CTA from './components/sections/CTA.jsx'
import Contact from './components/sections/Contact.jsx'
import { useLanguage } from './context/LanguageContext.jsx'

export default function App() {
  const { t } = useLanguage()

  useEffect(() => {
    document.title = t.meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', t.meta.description)
  }, [t])

  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <WhyChooseUs />
        <Process />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
