import api from '@/plugins/axios';

class ApoiadorService {
    async getApoiadores() {
        const { data } = await api.get('/apoiadores/');
        return data;
    }
    async getApoiador(id) {
        const { data } = await api.get(`/apoiadores/${id}/`);
        return data;
    }
    async createApoiador(apoiador) {
        const { data } = await api.post('/apoiadores/', apoiador);
        return data;
    }
    async updateApoiadores(apoiador) {
        const { data } = await api.patch(`/apoiadores/${apoiador.id}/`, apoiador);
        return data;
    }
    async deleteApoiador(id) {
        const { data } = await api.delete(`/apoiadores/${id}/`);
        return data;
    }
}

export default new ApoiadorService();