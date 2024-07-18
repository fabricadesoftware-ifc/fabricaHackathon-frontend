import api from '@/plugins/axios';

class SupporterService {
    async getSupporters() {
        const { data } = await api.get('/supporters/');
        return data;
    }
    async getSupporter(id) {
        const { data } = await api.get(`/supporters/${id}/`);
        return data;
    }
    async createSupporter(supporter) {
        const { data } = await api.post('/supporters/', supporter);
        return data;
    }
    async updateSupporter(supporter) {
        const { data } = await api.patch(`/supporters/${supporter.id}/`, supporter);
        return data;
    }
    async deleteSupporter(id) {
        const { data } = await api.delete(`/supporters/${id}/`);
        return data;
    }
}

export default new SupporterService();