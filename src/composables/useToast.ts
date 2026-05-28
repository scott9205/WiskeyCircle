import { useUiStore } from '@/stores/ui'

export function useToast() {
  const ui = useUiStore()

  return {
    success: (message: string, duration?: number) =>
      ui.pushToast({ type: 'success', message, duration }),
    error: (message: string, duration?: number) =>
      ui.pushToast({ type: 'error', message, duration }),
    info: (message: string, duration?: number) =>
      ui.pushToast({ type: 'info', message, duration }),
    warning: (message: string, duration?: number) =>
      ui.pushToast({ type: 'warning', message, duration }),
  }
}
