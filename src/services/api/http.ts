import axios, { AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios'
import type { ApiError } from '@/types/api'

const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('twc.accessToken')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

http.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ApiError>) => {
    const status = error.response?.status

    if (status === 401) {
      // Token expired or invalid — clear and redirect via auth store side-effect
      localStorage.removeItem('twc.accessToken')
      window.dispatchEvent(new CustomEvent('auth:logout'))
    }

    const normalized: ApiError = {
      status: status ?? 0,
      message: error.response?.data?.message ?? error.message ?? 'Network error',
      code: error.response?.data?.code,
      errors: error.response?.data?.errors,
    }

    return Promise.reject(normalized)
  },
)

export default http
