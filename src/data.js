// All copy & media here is placeholder — swap freely once real content lands.
// Stock imagery hot-linked from Unsplash (free to use). SmartImage falls back
// to a gradient if any URL 404s.

const img = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO = {
  poster: img('1600334129128-685c5582fd35', 2000),
  // Free stock loop (Pexels/Coverr). If it fails, the poster image shows.
  video:
    'https://videos.pexels.com/video-files/4098992/4098992-uhd_2560_1440_25fps.mp4',
};

export const MARQUEE = [
  'Deep Tissue',
  'Aromatherapy',
  'Hot Stone',
  'Lomi Lomi',
  'Prenatal',
  'Craniosacral',
  'Reflexology',
  'Sports Recovery',
];

export const SERVICES = [
  {
    id: '01',
    name: 'Deep Tissue',
    duration: '60 / 90 min',
    price: 'from $140',
    text: 'Slow, deliberate pressure that releases the deepest layers of tension held in muscle and fascia.',
    image: img('1544161515-4ab6ce6db874'),
  },
  {
    id: '02',
    name: 'Aromatherapy Ritual',
    duration: '75 min',
    price: 'from $160',
    text: 'A full-body treatment guided by botanical oils blended to your mood — grounding, uplifting, or restful.',
    image: img('1519823551278-64ac92734fb1'),
  },
  {
    id: '03',
    name: 'Hot Stone',
    duration: '90 min',
    price: 'from $185',
    text: 'Warm basalt stones melt through stubborn knots while long strokes carry the heat through the body.',
    image: img('1540555700478-4be289fbecef'),
  },
  {
    id: '04',
    name: 'Restorative Flow',
    duration: '60 min',
    price: 'from $130',
    text: 'A gentler, rhythmic session designed to quiet the nervous system and return you to your breath.',
    image: img('1512290923902-8a9f81dc236c'),
  },
];

export const EXPERIENCE = {
  image: img('1571019613454-1cb2f99b2d8b', 2200),
  steps: [
    { n: '01', title: 'Arrive', text: 'Tea, warmth, and a quiet moment to leave the city at the door.' },
    { n: '02', title: 'Attune', text: 'A short consultation to read the body and shape the session around it.' },
    { n: '03', title: 'Release', text: 'Hands-on work, unhurried, in a room built for stillness.' },
    { n: '04', title: 'Return', text: 'Time to settle before you step back out — no rushing the threshold.' },
  ],
};

export const GALLERY = [
  img('1600334089648-b0d9d3028eb2', 1000),
  img('1591343395082-e120087004b4', 1000),
  img('1620733723572-11c53f73a416', 1000),
  img('1515377905703-c4788e51af15', 1000),
];

export const TESTIMONIALS = [
  {
    quote:
      'I have never felt a room hold silence the way this one does. I left lighter than I arrived — in every sense.',
    name: 'Elena V.',
    detail: 'Member since 2023',
  },
  {
    quote:
      'The care is genuinely bespoke. They read what my body needed before I could put it into words.',
    name: 'Daniel R.',
    detail: 'Deep Tissue, monthly',
  },
  {
    quote:
      'An hour here undoes a week of screens and deadlines. It has become non-negotiable in my calendar.',
    name: 'Priya S.',
    detail: 'Aromatherapy Ritual',
  },
];

export const PRICING = [
  {
    name: 'The Single',
    price: '$140',
    unit: 'per session',
    features: ['60-minute treatment', 'Personal consultation', 'Botanical tea service', 'Access to the quiet room'],
    featured: false,
  },
  {
    name: 'The Ritual',
    price: '$480',
    unit: 'four sessions',
    features: ['Four 75-minute treatments', 'Priority booking', 'Complimentary aromatherapy upgrade', 'Take-home oil blend'],
    featured: true,
  },
  {
    name: 'The Membership',
    price: '$220',
    unit: 'per month',
    features: ['Two treatments monthly', 'Bring-a-guest pass', 'Member-only hours', '15% on all add-ons'],
    featured: false,
  },
];

export const NAV_LINKS = [
  { label: 'Overview', href: '#top' },
  { label: 'Prices & Services', href: '#services' },
  { label: 'Book', href: '#book' },
  { label: 'About', href: '#about' },
];
