// ============================================================================
// Kynex — Projects
//
// To add a new project later, copy the Nova object below, edit its fields,
// and add it to the array. It will appear automatically in the "Work"
// grid — cards are laid out side by side and the grid grows on its own as
// you add more.
//
// Fields:
//   id      — unique slug, lowercase, no spaces (e.g. 'nova', 'atlas-app')
//   name    — project name shown on the card
//   year    — year the project shipped
//   tags    — short list of what the project involved (keep it to 2-3)
//   image   — path to a real screenshot/cover photo, e.g. '/images/work/nova.jpg'.
//             Put the image file in `public/images/work/`. Leave as `null`
//             to fall back to an abstract gradient cover instead.
//   link    — the live project URL, e.g. 'https://nova-cafe-gamma.vercel.app'.
//             Leave as `null` to hide the "visit site" button on that card.
//   cover   — two hex colors used for the abstract gradient cover ONLY
//             when `image` is null. Ignored once you add a real image.
//   ar / en — bilingual copy for that project (tagline + role)
// ============================================================================

export const projects = [
  {
    id: 'nova',
    name: 'Nova',
    year: '2026',
    tags: ['Web Design', 'Café'],
    image: '/images/work/nova.jpg',
    link: 'https://nova-cafe-gamma.vercel.app',
    cover: { from: '#C9A35F', to: '#1B2740' },
    ar: {
      tagline: 'موقع تعريفي لمقهى NOVA — القائمة والأجواء وحجز الطاولة في مكان واحد.',
      role: 'تصميم وتطوير الموقع',
    },
    en: {
      tagline: "A website for NOVA café — menu, atmosphere, and table booking in one place.",
      role: 'Website design & development',
    },
  },
]
