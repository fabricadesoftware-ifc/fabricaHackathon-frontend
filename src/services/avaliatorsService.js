import api from '@/plugins/axios';

class AvaliatorService {
    async getAvaliators() {
        const { data } = await api.get('/avaliators/');
        return data;
    }
    async getAvaliator(id) {
        const { data } = await api.get(`/avaliators/${id}/`);
        return data;
    }
    async createAvaliator(avaliator) {
        const { data } = await api.post('/avaliators/', avaliator);
        return data;
    }
    async updateAvaliator(avaliator) {
        const { data } = await api.patch(`/avaliators/${avaliator.id}/`, avaliator);
        return data;
    }
    async deleteAvaliator(id) {
        const { data } = await api.delete(`/avaliators/${id}/`);
        return data;
    }
}

export default new AvaliatorService();