import api from '@/plugins/axios';

class turmaService {
    async getTurmas() {
        const { data } = await api.get('/api/turmas/');
        return data;
    }

    async getTurma(id_turma) {
        const { data } = await api.get(`/api/turmas/${id_turma}`);
        return data;
    }

    async createTurma(turma) {
        const { data } = await api.post('/api/turmas/', turma);
        return data;
    }

    async deleteTurma(id) {
        const { data } = await api.delete('/api/turmas/', id);
        return data;
    }
}

export default new turmaService();