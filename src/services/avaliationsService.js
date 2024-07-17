import api from '@/plugins/axios';

class AvaliationService {
    async getAvaliations() {
        const { data } = await api.get('/avaliations/');
        return data;
    }
    async getAvaliation(id) {
        const { data } = await api.get(`/avaliations/${id}/`);
        return data;
    }
    async createAvaliation(avaliation) {
        const { data } = await api.post('/avaliations/', avaliation);
        return data;
    }
    async updateAvaliation(avaliation) {
        const { data } = await api.patch(`/avaliations/${avaliation.id}/`, avaliation);
        return data;
    }
    async deleteAvaliation(id) {
        const { data } = await api.delete(`/avaliations/${id}/`);
        return data;
    }
}

export default new AvaliationService();