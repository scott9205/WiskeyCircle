import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Toast {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
  duration?: number
}

export const useUiStore = defineStore('ui', () => {
  const sidebarOpen = ref(false)
  const mobileMenuOpen = ref(false)
  const toasts = ref<Toast[]>([])

  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
  }

  function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }

  function pushToast(toast: Omit<Toast, 'id'>) {
    const id = crypto.randomUUID()
    const duration = toast.duration ?? 4000
    toasts.value.push({ ...toast, id })
    if (duration > 0) {
      window.setTimeout(() => dismissToast(id), duration)
    }
  }

  function dismissToast(id: string) {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  return {
    sidebarOpen,
    mobileMenuOpen,
    toasts,
    toggleSidebar,
    toggleMobileMenu,
    pushToast,
    dismissToast,
  }
})
