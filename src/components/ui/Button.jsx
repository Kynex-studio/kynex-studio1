import React from 'react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none'

const variants = {
  primary: 'bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-gold hover:-translate-y-0.5',
  secondary:
    'border border-ivory-text/25 text-ivory-text hover:border-gold-500 hover:text-gold-400 hover:-translate-y-0.5',
  ghost: 'text-ivory-text hover:text-gold-400',
}

export default function Button({ as = 'button', variant = 'primary', className = '', children, ...props }) {
  const Comp = as
  return (
    <Comp className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Comp>
  )
}
