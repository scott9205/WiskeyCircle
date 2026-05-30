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

import catSingleMalt from '@/assets/figma/cat-single-malt.png'
import catBourbon from '@/assets/figma/cat-bourbon.png'
import catIrish from '@/assets/figma/cat-irish.png'
import catJapanese from '@/assets/figma/cat-japanese.png'
import catLimited from '@/assets/figma/cat-limited.png'

export const WHISKY_CATEGORIES = [
  { label: 'Single\nMalt Scotch', image: catSingleMalt },
  { label: 'Bourbon\nWhisky',     image: catBourbon },
  { label: 'Irish\nWhisky',       image: catIrish },
  { label: 'Japanese\nWhiskey',   image: catJapanese },
  { label: 'Limited\nEditions',   image: catLimited },
] as const

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/thewhiskycircle',
  twitter: 'https://twitter.com/thewhiskycircle',
  facebook: 'https://facebook.com/thewhiskycircle',
} as const
