import { api } from '@/shared/api/base'
import type { LoginRequest, LoginResponse, User } from '@/entities/session/model/types'

export const authApi = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth/login', data)
    return response.data
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout')
    localStorage.removeItem('token')
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get<User>('/auth/me')
    return response.data
  }
}
