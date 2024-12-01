import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const API_URL = import.meta.env.VITE_API_URL

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'ngrok-skip-browser-warning': '69420'
  }
})

export function setupInterceptors() {
  const authStore = useAuthStore()

  api.interceptors.request.use((config) => {
    if (authStore.token?.access) {
      config.headers.Authorization = `Bearer ${authStore.token.access}`
    }
    return config
  })
}
