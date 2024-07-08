import api from '@/plugins/axios';

class CursoService {
    async getCursos() {
        const { data } = await api.get('/api/cursos/');
        return data;
    }
    async getCurso(id) {
        const { data } = await api.get(`/api/cursos/${id}`);
        return data;
    }
    async createCurso(turma) {
        const { data } = await api.post('/api/cursos/', turma);
        return data;
    }
    async updateCurso(turma) {
        const { data } = await api.patch('/api/cursos/', turma);
        return data;
    }
    async deleteCurso(id) {
        const { data } = await api.delete(`/api/cursos/${id}`);
        return data;
    }
}

export default new CursoService();