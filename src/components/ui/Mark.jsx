import React from 'react'

const PETAL_ANGLES = [45, 135, 225, 315]

export default function Mark({ size = 32, glow = false, spin = false, className = '' }) {
  const gradientId = 'kynex-mark-gradient'

  return (
    <span
      className={`inline-flex items-center justify-center relative ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {glow && (
        <span
          className="absolute inset-[-40%] rounded-full blur-xl opacity-50"
          style={{
            background:
              'radial-gradient(circle, rgba(228,205,156,0.55) 0%, rgba(201,163,95,0) 70%)',
          }}
        />
      )}
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className={`relative ${spin ? 'mark-spin-slow' : ''}`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E4CD9C" />
            <stop offset="55%" stopColor="#C9A35F" />
            <stop offset="100%" stopColor="#8C6A2E" />
          </linearGradient>
        </defs>
        <g fill={`url(#${gradientId})`}>
          {PETAL_ANGLES.map((angle) => (
            <g key={angle} transform={`translate(50,50) rotate(${angle})`}>
              <path d="M6,0 C13,-8 24,-8 32,0 C24,8 13,8 6,0 Z" />
            </g>
          ))}
        </g>
      </svg>
    </span>
  )
}
