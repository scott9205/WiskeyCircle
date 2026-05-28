export interface Whisky {
  id: string
  name: string
  distillery: string
  region: WhiskyRegion
  type: WhiskyType
  age?: number
  abv: number
  description: string
  tastingNotes: TastingNotes
  imageUrl?: string
  averageRating: number
  ratingsCount: number
  price?: number
  currency?: string
}

export type WhiskyRegion =
  | 'speyside'
  | 'highland'
  | 'lowland'
  | 'islay'
  | 'campbeltown'
  | 'islands'
  | 'irish'
  | 'american'
  | 'japanese'
  | 'other'

export type WhiskyType =
  | 'single-malt'
  | 'blended'
  | 'bourbon'
  | 'rye'
  | 'irish'
  | 'japanese'

export interface TastingNotes {
  nose: string
  palate: string
  finish: string
}

export interface WhiskyReview {
  id: string
  whiskyId: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  notes: string
  createdAt: string
}
