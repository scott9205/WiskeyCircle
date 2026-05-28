import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { authService } from '@/services/auth.service'
import type { AuthTokens, LoginPayload, RegisterPayload, User } from '@/types/user'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref<User | null>(null)
    const tokens = ref<AuthTokens | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)

    const isAuthenticated = computed(() => Boolean(tokens.value?.accessToken && user.value))
    const isAdmin = computed(() => user.value?.role === 'admin')

    function setSession(payload: { user: User; tokens: AuthTokens }) {
      user.value = payload.user
      tokens.value = payload.tokens
      localStorage.setItem('twc.accessToken', payload.tokens.accessToken)
    }

    function clearSession() {
      user.value = null
      tokens.value = null
      localStorage.removeItem('twc.accessToken')
    }

    async function login(payload: LoginPayload) {
      loading.value = true
      error.value = null
      try {
        const result = await authService.login(payload)
        setSession(result)
      } catch (err) {
        error.value = (err as { message?: string }).message ?? 'Unable to sign in'
        throw err
      } finally {
        loading.value = false
      }
    }

    async function register(payload: RegisterPayload) {
      loading.value = true
      error.value = null
      try {
        const result = await authService.register(payload)
        setSession(result)
      } catch (err) {
        error.value = (err as { message?: string }).message ?? 'Unable to register'
        throw err
      } finally {
        loading.value = false
      }
    }

    async function logout() {
      try {
        await authService.logout()
      } finally {
        clearSession()
      }
    }

    async function fetchMe() {
      if (!tokens.value?.accessToken) return
      try {
        user.value = await authService.me()
      } catch {
        clearSession()
      }
    }

    return {
      user,
      tokens,
      loading,
      error,
      isAuthenticated,
      isAdmin,
      login,
      register,
      logout,
      fetchMe,
      clearSession,
    }
  },
  {
    persist: {
      key: 'twc.auth',
      pick: ['user', 'tokens'],
    },
  },
)
