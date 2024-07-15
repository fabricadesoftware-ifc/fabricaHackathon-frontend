import api from '@/plugins/axios';

class AvaliadorService {
    async getAvaliadores() {
        const { data } = await api.get('/avaliadores/');
        return data;
    }
    async getAvaliador(id) {
        const { data } = await api.get(`/avaliadores/${id}/`);
        return data;
    }
    async createAvaliador(avaliador) {
        const { data } = await api.post('/avaliadores/', avaliador);
        return data;
    }
    async updateAvaliador(avaliador) {
        const { data } = await api.patch(`/avaliadores/${avaliador.id}/`, avaliador);
        return data;
    }
    async deleteAvaliador(id) {
        const { data } = await api.delete(`/avaliadores/${id}/`);
        return data;
    }
}

export default new AvaliadorService();