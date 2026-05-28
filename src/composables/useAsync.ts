import { ref, type Ref } from 'vue'

export interface UseAsyncReturn<T, Args extends unknown[]> {
  data: Ref<T | null>
  error: Ref<unknown>
  loading: Ref<boolean>
  execute: (...args: Args) => Promise<T | null>
}

export function useAsync<T, Args extends unknown[] = []>(
  fn: (...args: Args) => Promise<T>,
): UseAsyncReturn<T, Args> {
  const data = ref<T | null>(null) as Ref<T | null>
  const error = ref<unknown>(null)
  const loading = ref(false)

  async function execute(...args: Args): Promise<T | null> {
    loading.value = true
    error.value = null
    try {
      const result = await fn(...args)
      data.value = result
      return result
    } catch (err) {
      error.value = err
      return null
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, execute }
}
