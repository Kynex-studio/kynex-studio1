import React, { useState } from 'react'
import SectionTitle from '../ui/SectionTitle.jsx'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'

// ─────────────────────────────────────────────
// Point this at your n8n Webhook "Production URL"
// ─────────────────────────────────────────────
const WEBHOOK_URL = 'https://hook.eu1.make.com/d3ftjcu2jpidnk3qrws73ss42qhsqhud'

function digitsOnly(value) {
  return value.replace(/[^\d]/g, '')
}

function DetailRow({ icon, label, value, href }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/30 text-gold-400">
        <Icon name={icon} size={16} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest2 text-ivory-200/50">{label}</p>
        {href ? (
          <a href={href} className="text-sm text-ivory-text hover:text-gold-400 transition-colors" dir="ltr">
            {value}
          </a>
        ) : (
          <p className="text-sm text-ivory-text">{value}</p>
        )}
      </div>
    </div>
  )
}

const INITIAL_FORM = { name: '', whatsapp: '', projectType: '', description: '' }

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState(INITIAL_FORM)
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const whatsappNumber = digitsOnly(t.contact.details.whatsapp)

  const validate = (values) => {
    const errors = {}
    if (!values.name.trim()) errors.name = t.contact.form.errors.name
    if (!values.whatsapp.trim() || !/^[+\d][\d\s-]{6,}$/.test(values.whatsapp.trim())) {
      errors.whatsapp = t.contact.form.errors.whatsapp
    }
    if (!values.projectType) errors.projectType = t.contact.form.errors.projectType
    if (!values.description.trim() || values.description.trim().length < 10) {
      errors.description = t.contact.form.errors.description
    }
    return errors
  }

  const errors = validate(form)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const handleBlur = (e) => setTouched((tt) => ({ ...tt, [e.target.name]: true }))
  const showError = (field) => touched[field] && errors[field]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouched({ name: true, whatsapp: true, projectType: true, description: true })
    if (Object.keys(errors).length > 0) return

    setStatus('loading')
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.name.trim(),
          whatsapp: form.whatsapp.trim(),
          projectType: form.projectType,
          description: form.description.trim(),
          source: 'Kynex website',
          submittedAt: new Date().toISOString(),
        }),
      })
      if (!res.ok) throw new Error(`Webhook responded with ${res.status}`)
      setStatus('success')
    } catch (err) {
      console.error('Lead submission failed:', err)
      setStatus('error')
    }
  }

  const inputClass = (field) =>
    `rounded-sm border bg-transparent px-4 py-3 text-sm text-ivory-text placeholder:text-ivory-200/35 outline-none transition-colors ${
      showError(field) ? 'border-red-400/60 focus:border-red-400' : 'border-ivory-text/15 focus:border-gold-500'
    }`

  return (
    <section id="contact" className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionTitle eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.subtitle} />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-7">
            <DetailRow
              icon="mail"
              label={t.contact.details.emailLabel}
              value={t.contact.details.email}
              href={`mailto:${t.contact.details.email}`}
            />
            <DetailRow
              icon="whatsapp"
              label={t.contact.details.whatsappLabel}
              value={t.contact.details.whatsapp}
              href={`https://wa.me/${whatsappNumber}`}
            />
            <DetailRow icon="pin" label={t.contact.details.locationLabel} value={t.contact.details.location} />

            <p className="mt-2 rounded-md border border-dashed border-ivory-text/15 px-4 py-3 text-xs leading-relaxed text-ivory-200/55">
              {t.contact.placeholderNote}
            </p>
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-start justify-center gap-4 rounded-sm border border-gold-500/25 bg-navy-900/60 px-8 py-12 text-center sm:text-start">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 text-gold-400">
                <Icon name="send" size={18} />
              </span>
              <div>
                <h3 className="text-lg font-medium text-ivory-text">{t.contact.form.successTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-200/60">{t.contact.form.successBody}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setForm(INITIAL_FORM)
                  setTouched({})
                  setStatus('idle')
                }}
                className="text-xs uppercase tracking-widest2 text-ivory-200/50 underline underline-offset-4 hover:text-gold-400"
              >
                {t.contact.form.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest2 text-ivory-200/55">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t.contact.form.namePlaceholder}
                  className={inputClass('name')}
                />
                {showError('name') && <p className="text-xs text-red-400">{errors.name}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="whatsapp" className="text-xs uppercase tracking-widest2 text-ivory-200/55">
                  {t.contact.form.whatsapp}
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  dir="ltr"
                  value={form.whatsapp}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t.contact.form.whatsappPlaceholder}
                  className={inputClass('whatsapp')}
                />
                {showError('whatsapp') && <p className="text-xs text-red-400">{errors.whatsapp}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="projectType" className="text-xs uppercase tracking-widest2 text-ivory-200/55">
                  {t.contact.form.projectType}
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputClass('projectType')} ${form.projectType === '' ? 'text-ivory-200/35' : ''}`}
                >
                  {t.contact.form.projectTypeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-navy-900 text-ivory-text">
                      {opt.label}
                    </option>
                  ))}
                </select>
                {showError('projectType') && <p className="text-xs text-red-400">{errors.projectType}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-xs uppercase tracking-widest2 text-ivory-200/55">
                  {t.contact.form.description}
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={form.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t.contact.form.descriptionPlaceholder}
                  className={`resize-none ${inputClass('description')}`}
                />
                {showError('description') && <p className="text-xs text-red-400">{errors.description}</p>}
              </div>

              {status === 'error' && <p className="text-xs text-red-400">{t.contact.form.errors.generic}</p>}

              <Button type="submit" variant="primary" disabled={status === 'loading'} className="w-full sm:w-fit">
                {status === 'loading' ? t.contact.form.sending : t.contact.form.send}
                <Icon name="send" size={15} />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
