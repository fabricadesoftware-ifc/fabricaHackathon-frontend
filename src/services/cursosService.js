import api from '@/plugins/axios';

class CursoService {
    async getCursos() {
        const { data } = await api.get('/api/cursos/');
        return data;
    }
    async getCurso(id) {
        const { data } = await api.get(`/api/cursos/${id}/`);
        return data;
    }
    async createCurso(curso) {
        const { data } = await api.post('/api/cursos/', curso);
        return data;
    }
    async updateCurso(curso) {
        const { data } = await api.patch(`/api/cursos/${curso.id}/`, curso);
        return data;
    }
    async deleteCurso(id) {
        const { data } = await api.delete(`/api/cursos/${id}/`);
        return data;
    }
}

export default new CursoService();