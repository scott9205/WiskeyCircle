export const APP_NAME = 'The Whisky Circle'
export const APP_TAGLINE = 'A community of taste'

export const NAV_LINKS = [
  { label: 'Home', to: { name: 'home' } },
  { label: 'Categories', to: { name: 'whiskies' } },
  { label: 'Our Stores', to: { name: 'about' } },
] as const

export const FOOTER_COLUMNS = [
  {
    heading: 'Explore',
    links: [
      { label: 'Our collection', href: '#' },
      { label: 'New arrivals', href: '#' },
      { label: 'Best sellers', href: '#' },
      { label: 'Limited editions', href: '#' },
    ],
  },
  {
    heading: 'Experience',
    links: [
      { label: 'Tasting events', href: '#' },
      { label: 'Whisky 101', href: '#' },
      { label: 'Distilleries', href: '#' },
      { label: 'Whisky stories', href: '#' },
    ],
  },
  {
    heading: 'Help',
    links: [
      { label: 'My account', href: '#' },
      { label: 'Order tracking', href: '#' },
      { label: 'Shipping & delivery', href: '#' },
      { label: 'Shipping info', href: '#' },
      { label: 'Returns', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Our brands', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
] as const

export const TRUST_FEATURES = [
  {
    title: '100% Authentic',
    description: 'Sourced from authorised global partners',
    icon: 'pack',
  },
  {
    title: 'Express delivery',
    description: 'Fast & secure delivery to your doorstep',
    icon: 'truck',
  },
  {
    title: 'Secure payments',
    description: 'Encrypted transactions for your safety',
    icon: 'shield',
  },
  {
    title: 'Expert curated',
    description: 'Handpicked by whisky specialists',
    icon: 'star',
  },
] as const

export const WHISKY_CATEGORIES = [
  { label: 'Single Malt Scotch', image: '/images/category-single-malt.jpg' },
  { label: 'Bourbon Whisky',     image: '/images/category-bourbon.jpg' },
  { label: 'Irish Whisky',       image: '/images/category-irish.jpg' },
  { label: 'Japanese Whiskey',   image: '/images/category-japanese.jpg' },
  { label: 'Limited Editions',   image: '/images/category-limited.jpg' },
] as const

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/thewhiskycircle',
  twitter: 'https://twitter.com/thewhiskycircle',
  facebook: 'https://facebook.com/thewhiskycircle',
} as const
