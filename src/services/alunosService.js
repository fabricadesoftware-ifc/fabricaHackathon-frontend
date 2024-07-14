import api from '@/plugins/axios';

class AlunoService {
    async getAlunos() {
        const { data } = await api.get('/alunos/');
        return data;
    }
    async getAluno(id) {
        const { data } = await api.get(`/alunos/${id}/`);
        return data;
    }
    async createAluno(aluno) {
        const { data } = await api.post('/alunos/', aluno);
        return data;
    }
    async updateAluno(aluno) {
        const { data } = await api.patch(`/alunos/${aluno.id}/`, aluno);
        return data;
    }
    async deleteAluno(id) {
        const { data } = await api.delete(`/alunos/${id}/`);
        return data;
    }
}

export default new AlunoService();