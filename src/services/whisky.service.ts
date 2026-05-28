import http from './api/http'
import { ENDPOINTS } from './api/endpoints'
import type { PaginatedResponse, PaginationParams } from '@/types/api'
import type { Whisky, WhiskyReview } from '@/types/whisky'

export interface WhiskyFilters extends PaginationParams {
  region?: string
  type?: string
  search?: string
}

export const whiskyService = {
  async list(params: WhiskyFilters = {}): Promise<PaginatedResponse<Whisky>> {
    const { data } = await http.get(ENDPOINTS.whiskies.list, { params })
    return data
  },

  async detail(id: string): Promise<Whisky> {
    const { data } = await http.get(ENDPOINTS.whiskies.detail(id))
    return data.data
  },

  async reviews(id: string, params: PaginationParams = {}): Promise<PaginatedResponse<WhiskyReview>> {
    const { data } = await http.get(ENDPOINTS.whiskies.reviews(id), { params })
    return data
  },
}
