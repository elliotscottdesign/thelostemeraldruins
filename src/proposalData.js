// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for this proposal.
// To spin up a new client proposal: drop their rendered deck pages into
// public/deck/, update the fields below, change ACCESS_CODE, and redeploy.
// ─────────────────────────────────────────────────────────────────────────

// Client types this on the entry screen to unlock the proposal.
export const ACCESS_CODE = 'EMERALD26'

export const PROPOSAL = {
  title: 'The Lost Emerald Ruins',
  tagline: 'Adventure Lies Within',
  client: 'Prepared by Wacky Works Ltd',
  version: 'V1',
}

const deck = (n) => `${import.meta.env.BASE_URL}deck/page-${String(n).padStart(2, '0')}.jpg`

// AI-render disclaimer that appears on the concept art.
export const RENDER_NOTE =
  'This is an AI render as concept art. The final hole will not have this level of detail.'

export const INTRO = {
  hero: deck(1),
  heading: 'The Lost Emerald Ruins',
  tagline: 'Adventure Lies Within',
  body: `Welcome to The Lost Emerald Ruins. An immersive adventure golf experience where ancient temple pathways, hidden traps and puzzle-like challenges combine to create a truly unforgettable journey.

Inspired by the mystery of forgotten jungle ruins, players will navigate a series of interactive holes featuring gravity-defying loops, balancing challenges, moving targets and skill-based obstacle games designed to test both precision and bravery.

Each section of the course feels like part of a lost expedition, encouraging guests to explore deeper into the ruins as they uncover secrets, conquer challenges and compete for the ultimate treasure: victory.

Combining cinematic theming with proven gameplay mechanics developed through years of experience in immersive golf design — Adventure Lies Within.`,
  gallery: [deck(2), deck(3)],
}

export const VENUE = {
  heading: 'Venue & Floor Plan',
  intro:
    'The new layout maps the full guest journey through the ruins — entrance, hole sequence, host desk and flow back to the bar.',
  plan: deck(4),
  gallery: [deck(3)],
}

export const HOLES = {
  heading: 'The Holes',
  intro:
    'Nine interactive holes, each a stage of the expedition — gravity-defying loops, balancing challenges, moving targets and skill-based obstacle games.',
  items: [
    { n: 1, img: deck(5) },
    { n: 2, img: deck(6) },
    { n: 3, img: deck(7) },
    { n: 4, img: deck(8) },
    { n: 5, img: deck(9) },
    { n: 6, img: deck(10) },
    { n: 7, img: deck(11) },
    { n: 8, img: deck(12) },
    { n: 9, img: deck(13) },
  ],
}

export const EXTRAS = {
  heading: 'The Extras',
  intro: 'The fittings and equipment that complete the experience around the course.',
  items: [
    {
      title: 'Host Desk',
      img: deck(14),
      caption: 'Welcome desk — timber structure and reed roof',
      detail: 'With club rack and shelves.',
    },
    {
      title: 'Themed Barrels',
      img: deck(15),
      caption: 'Stone pillar — painted liquid barrel',
      detail: 'Nine painted metal barrels finished to look like stone pillars.',
    },
    {
      title: 'Golf Equipment',
      img: deck(20),
      caption: 'Full playing kit, branded throughout',
      detail: '100 clubs, balls, branded scorecards, pencils and medals.',
    },
  ],
}

export const THEME = {
  heading: 'The Theme',
  intro:
    'Hand-painted murals, CNC detailing and a painted exterior tie the whole venue into the lost-ruins world — inside and out.',
  items: [
    { img: deck(16), caption: 'Interior wall murals — hand painted' },
    { img: deck(17), caption: 'Exterior front — hand painted and CNC' },
    { img: deck(19), caption: 'Themed environment' },
  ],
}

export const COSTS = {
  heading: 'Costs & Breakdown',
  intro: 'Full price breakdown. Every line can be cherry-picked — take the whole pack or only the pieces you need.',
  reference: deck(18),
  currency: '£',
  lineItems: [
    { item: '9 Holes & Hole Signs', amount: 65000, note: 'As per pack, painted' },
    { item: 'Host Desk', amount: 3000, note: 'With club rack and shelves' },
    { item: 'Golf Equipment', amount: 2500, note: '100 clubs, balls, branded scorecards, pencils, medals' },
    { item: 'Themed Barrels x9', amount: 2700, note: 'Painted metal barrels to look like stone pillars' },
    { item: 'Interior Wall Murals', amount: 4500, note: 'Approx — hand painting interior and exterior walls' },
    { item: 'Delivery & PP', amount: 3300, note: 'Approx — project manager attends for 2 days' },
  ],
  vatNote: 'All prices exclude VAT.',
  scopeNotes: [
    'Branding and exterior signage can be designed by Wacky Works Ltd.',
    'Painting the exterior of the property is included to tie the project together.',
    'Interior timber work, wall priming, ceiling & floor painting and electrics to be handled by the client.',
    "Install handled by the client's team, with supervision from a Wacky Works project manager.",
    'Every line item can be cherry-picked.',
  ],
}

export const TIMELINE = {
  heading: 'Timeline & Payment',
  intro: 'Four equal tranches of 25%. Dates are aligned with a summer opening.',
  tranches: [
    { n: 1, label: 'Design & deposit', pct: 25, amount: 20250, date: '29 May 2026' },
    { n: 2, label: 'Construction — stage 1', pct: 25, amount: 20250, date: '5 Jun 2026' },
    { n: 3, label: 'Construction — stage 2', pct: 25, amount: 20250, date: '12 Jun 2026' },
    { n: 4, label: 'Final amount on delivery', pct: 25, amount: 20250, date: '26 Jun 2026' },
  ],
  vatNote: 'Each tranche + VAT.',
  footnote: 'The tranche payment dates have been aligned with a summer opening.',
}

export const TABS = [
  { id: 'intro', label: 'Intro' },
  { id: 'venue', label: 'Venue & Floor Plan' },
  { id: 'holes', label: 'Holes' },
  { id: 'extras', label: 'Extras' },
  { id: 'theme', label: 'Theme' },
  { id: 'costs', label: 'Costs & Breakdown' },
  { id: 'timeline', label: 'Timeline' },
]
