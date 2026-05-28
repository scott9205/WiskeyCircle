export interface User {
  id: string
  name: string
  email: string
  avatarUrl?: string
  bio?: string
  joinedAt: string
  role: UserRole
}

export type UserRole = 'member' | 'curator' | 'admin'

export interface AuthTokens {
  accessToken: string
  refreshToken: string
  expiresAt: number
}

export interface LoginPayload {
  email: string
  password: string
  remember?: boolean
}

export interface RegisterPayload {
  name: string
  email: string
  password: string
}
