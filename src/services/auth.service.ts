import http from './api/http'
import { ENDPOINTS } from './api/endpoints'
import type { AuthTokens, LoginPayload, RegisterPayload, User } from '@/types/user'

export const authService = {
  async login(payload: LoginPayload): Promise<{ user: User; tokens: AuthTokens }> {
    const { data } = await http.post(ENDPOINTS.auth.login, payload)
    return data.data
  },

  async register(payload: RegisterPayload): Promise<{ user: User; tokens: AuthTokens }> {
    const { data } = await http.post(ENDPOINTS.auth.register, payload)
    return data.data
  },

  async logout(): Promise<void> {
    await http.post(ENDPOINTS.auth.logout)
  },

  async me(): Promise<User> {
    const { data } = await http.get(ENDPOINTS.auth.me)
    return data.data
  },

  async refresh(refreshToken: string): Promise<AuthTokens> {
    const { data } = await http.post(ENDPOINTS.auth.refresh, { refreshToken })
    return data.data
  },
}
