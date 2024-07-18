import api from '@/plugins/axios';

class CriterionService {
    async getCriteria() {
        const { data } = await api.get('/criteria/');
        return data;
    }
    async getCriterion(id) {
        const { data } = await api.get(`/criteria/${id}/`);
        return data;
    }
    async createCriterion(criterion) {
        const { data } = await api.post('/criteria/', criterion);
        return data;
    }
    async updateCriterion(criterion) {
        const { data } = await api.patch(`/criteria/${criterion.id}/`, criterion);
        return data;
    }
    async deleteCriterion(id) {
        const { data } = await api.delete(`/criteria/${id}/`);
        return data;
    }
}

export default new CriterionService();