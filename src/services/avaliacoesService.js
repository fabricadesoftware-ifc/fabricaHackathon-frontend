import api from '@/plugins/axios';

class AvaliacaoService {
    async getAvaliacoes() {
        const { data } = await api.get('/avaliacoes/');
        return data;
    }
    async getAvaliacao(id) {
        const { data } = await api.get(`/avaliacoes/${id}/`);
        return data;
    }
    async createAvaliacao(avaliacao) {
        const { data } = await api.post('/avaliacoes/', avaliacao);
        return data;
    }
    async updateAvaliacao(avaliacao) {
        const { data } = await api.patch(`/avaliacoes/${avaliacao.id}/`, avaliacao);
        return data;
    }
    async deleteAvaliacao(id) {
        const { data } = await api.delete(`/avaliacoes/${id}/`);
        return data;
    }
}

export default new AvaliacaoService();