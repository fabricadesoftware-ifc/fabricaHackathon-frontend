import { api } from '@/plugins/axios'

class RankingService {
  async getRankings() {
    const { data } = await api.get('/rankings/')
    return data
  }
  async getRanking(id) {
    const { data } = await api.get(`/rankings/${id}/`)
    return data
  }
  async createRanking(ranking) {
    const { data } = await api.post('/rankings/', ranking)
    return data
  }
  async updateRanking(ranking) {
    const { data } = await api.patch(`/rankings/${ranking.id}/`, ranking)
    return data
  }
  async deleteRanking(id) {
    const { data } = await api.delete(`/rankings/${id}/`)
    return data
  }
  async getEditionRankings(editionId) {
    const { data } = await api.get(`/rankings/?edition_id=${editionId}`)
    return data
  }
}

export default new RankingService()
