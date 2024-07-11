import api from '@/plugins/axios';

class TurmaService {
    async getTurmas() {
        const { data } = await api.get('/turmas/');
        return data;
    }
    async getTurma(id) {
        const { data } = await api.get(`/turmas/${id}/`);
        return data;
    }
    async createTurma(turma) {
        const { data } = await api.post('/turmas/', turma);
        return data;
    }
    async updateTurma(turma) {
        const { data } = await api.patch(`/turmas/${turma.id}/`, turma);
        return data;
    }
    async deleteTurma(id) {
        const { data } = await api.delete(`/turmas/${id}/`);
        return data;
    }
}

export default new TurmaService();