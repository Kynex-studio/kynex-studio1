/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#080C16',
          900: '#0D1424',
          800: '#131C31',
          700: '#1B2740',
          line: 'rgba(247,244,235,0.09)',
        },
        ivory: {
          50: '#FBF9F4',
          100: '#F3EFE4',
          200: '#E7E1D1',
          text: '#F6F2E8',
        },
        ink: {
          900: '#11141C',
          700: '#2B2F3A',
          500: '#5B6273',
        },
        gold: {
          300: '#E4CD9C',
          400: '#D4B37B',
          500: '#C9A35F',
          600: '#A9813D',
          700: '#8C6A2E',
          soft: 'rgba(201,163,95,0.14)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1240px',
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(201,163,95,0.35), 0 8px 30px -8px rgba(201,163,95,0.25)',
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
