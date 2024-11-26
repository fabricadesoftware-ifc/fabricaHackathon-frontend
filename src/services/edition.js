import { api } from '@/plugins/axios'
import { useToast } from 'vue-toastification'

const toast = useToast()

class EditionService {
  async getEditions() {
    const { data } = await api.get('/editions/')
    return data
  }

  async getEdition(id) {
    const { data } = await api.get(`/editions/${id}/`)
    return data
  }

  async createEdition(edition) {
    try {
      const { data } = await api.post('/editions/', edition)
      toast.success('Edição criada com sucesso!')
      return data
    } catch {
      toast.error(
        'Impossível criar edição! Verique suas credenciais, e se todos os campos foram preenchidos corretamente ou tente mais tarde.'
      )
    }
  }

  async updateEdition(edition) {
    const { data } = await api.patch(`/editions/${edition.id}/`, edition)
    toast.info('Edição editada com sucesso!')
    return data
  }

  async deleteEdition(id) {
    const { data } = await api.delete(`/editions/${id}/`)
    toast.info('Edição deletada com sucesso!')
    return data
  }

  async getAvaliatorEditions(id) {
    const { data } = await api.get(`/editions/avaliator/${id}/active/`)
    return data
  }
}

export default new EditionService()
