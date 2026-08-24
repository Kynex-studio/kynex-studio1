import React from 'react'
import SectionTitle from '../ui/SectionTitle.jsx'
import Mark from '../ui/Mark.jsx'
import Icon from '../ui/Icon.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'
import { useReveal } from '../../hooks/useReveal.js'
import { projects } from '../../data/projects.js'

function ProjectCard({ project, index }) {
  const { lang, t } = useLanguage()
  const ref = useReveal()
  const copy = project[lang]

  const cover = (
    <div className="relative aspect-[4/5] w-full overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, ${project.cover.from}22, ${project.cover.to})` }}
        >
          <Mark size={56} glow />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
      {project.link && (
        <span className="absolute top-4 flex h-9 w-9 items-center justify-center rounded-full bg-navy-950/70 text-ivory-text opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 ltr:right-4 rtl:left-4">
          <Icon name="external" size={15} />
        </span>
      )}
    </div>
  )

  return (
    <article
      ref={ref}
      className="reveal group flex h-full flex-col overflow-hidden rounded-lg border border-navy-line bg-navy-900/40 transition-colors duration-300 hover:border-gold-500/50"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={project.name}>
          {cover}
        </a>
      ) : (
        cover
      )}

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-gold-400">
          <span>{project.year}</span>
          <span className="opacity-40">/</span>
          <span>{copy.role}</span>
        </div>

        <h3 className="font-display text-xl text-ivory-text">{project.name}</h3>

        <p className="text-sm leading-relaxed text-ivory-200/65">{copy.tagline}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gold-500/25 bg-gold-soft px-3 py-1 text-[11px] text-gold-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex w-fit items-center gap-2 pt-3 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
          >
            {t.work.visitSite}
            <Icon name="external" size={14} />
          </a>
        )}
      </div>
    </article>
  )
}

function ComingSoonCard() {
  const { t } = useLanguage()
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal flex min-h-[340px] flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-ivory-text/15 p-8 text-center"
    >
      <Mark size={26} className="opacity-60" />
      <h4 className="font-display text-lg text-ivory-text">{t.work.soonTitle}</h4>
      <p className="max-w-[16rem] text-sm text-ivory-200/60">{t.work.soonDesc}</p>
    </div>
  )
}

export default function Work() {
  const { t } = useLanguage()

  return (
    <section id="work" className="bg-navy-900/30 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionTitle eyebrow={t.work.eyebrow} title={t.work.title} intro={t.work.intro} />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
          <ComingSoonCard />
        </div>
      </div>
    </section>
  )
}
