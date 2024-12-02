import { api } from '@/plugins/axios'
import { useToast } from 'vue-toastification'

const toast = useToast()

class AuthService {
  async createAuthentication(avaliator) {
    try {
      const { data } = await api.post('/token/', avaliator)
      toast.success('Credenciais adquiridas com sucesso.')
      return data
    } catch {
      toast.error('Erro com suas credenciais! Verifique-as ou tente novamente mais tarde.')
    }
  }

  async updateUser(user) {
    const { data } = await api.patch(`/users/${user.id}/`, user)
    return data
  }
}

export default new AuthService()
