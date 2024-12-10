import type { LoginRequest, LoginResponse, User } from '@/entities/session/model/types'

const mockUser: User = {
  id: '1',
  email: 'user@example.com',
  name: 'John Doe'
}

const mockToken = 'mock-jwt-token'

export const mockAuthApi = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simple validation
    if (data.email === 'user@example.com' && data.password === 'password') {
      return {
        user: mockUser,
        token: mockToken
      }
    }

    throw new Error('Invalid credentials')
  },

  async logout(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500))
  },

  async getCurrentUser(): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return mockUser
  }
}
