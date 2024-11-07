import { api } from '@/plugins/axios';

class EditionService {
    async getEditions() {
        const { data } = await api.get('/editions/');
        return data;
    }
    async getEdition(id) {
        const { data } = await api.get(`/editions/${id}/`);
        return data;
    }
    async createEdition(edition) {
        const { data } = await api.post('/editions/', edition);
        return data;
    }
    async updateEdition(edition) {
        const { data } = await api.patch(`/editions/${edition.id}/`, edition);
        return data;
    }
    async deleteEdition(id) {
        const { data } = await api.delete(`/editions/${id}/`);
        return data;
    }
    async getAvaliatorEditions(id) {
        const { data } = await api.get(`/editions/avaliator/${id}/active/`);
        return data;
    }
}

export default new EditionService();
