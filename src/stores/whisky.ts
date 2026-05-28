import { defineStore } from 'pinia'
import { ref } from 'vue'
import { whiskyService, type WhiskyFilters } from '@/services/whisky.service'
import type { Whisky } from '@/types/whisky'

export const useWhiskyStore = defineStore('whisky', () => {
  const list = ref<Whisky[]>([])
  const current = ref<Whisky | null>(null)
  const loading = ref(false)
  const total = ref(0)

  async function fetchList(filters: WhiskyFilters = {}) {
    loading.value = true
    try {
      const response = await whiskyService.list(filters)
      list.value = response.data
      total.value = response.meta.total
    } finally {
      loading.value = false
    }
  }

  async function fetchDetail(id: string) {
    loading.value = true
    try {
      current.value = await whiskyService.detail(id)
    } finally {
      loading.value = false
    }
  }

  return {
    list,
    current,
    loading,
    total,
    fetchList,
    fetchDetail,
  }
})
