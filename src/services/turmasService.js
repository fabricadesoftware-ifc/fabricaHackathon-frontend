import api from '@/plugins/axios';

class TurmaService {
    async getTurmas() {
        const { data } = await api.get('/api/turmas/');
        return data;
    }
    async getTurma(id) {
        const { data } = await api.get(`/api/turmas/${id}/`);
        return data;
    }
    async createTurma(turma) {
        const { data } = await api.post('/api/turmas/', turma);
        return data;
    }
    async updateTurma(turma) {
        const { data } = await api.patch('/api/turmas/', turma);
        return data;
    }
    async deleteTurma(id) {
        const { data } = await api.delete(`/api/turmas/${id}/`);
        return data;
    }
}

export default new TurmaService();