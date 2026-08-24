import React from 'react'

const paths = {
  arrow: 'M5 12h14M13 6l6 6-6 6',
  arrowUp: 'M12 19V5M6 11l6-6 6 6',
  menu: 'M3 6h18M3 12h18M3 18h18',
  close: 'M6 6l12 12M18 6L6 18',
  sun: 'M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',
  moon: 'M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z',
  mail: 'M3 6h18v12H3zM3 6l9 7 9-7',
  phone:
    'M6.6 10.8a15.9 15.9 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.25 1z',
  whatsapp:
    'M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z M8.5 8.3c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.7.8 1.8.1.2.1.4 0 .6-.2.3-.3.5-.5.7-.2.2-.4.4-.2.7.2.4.9 1.4 1.9 2.2 1.3 1 2.3 1.4 2.7 1.5.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1.3.1 1.7.8 2 1 .3.1.5.2.5.4 0 .2 0 1-.4 1.5-.4.6-1.7 1.1-2.4 1.1-.6 0-2.1-.2-4.1-1.6-2.4-1.7-3.8-3.8-4-4.1-.2-.3-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.2Z',
  pin: 'M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12ZM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  send: 'M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z',
  external: 'M14 4h6v6M20 4 10 14M6 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1',
}

export default function Icon({ name, size = 18, className = '', strokeWidth = 1.6 }) {
  const d = paths[name]
  if (!d) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
