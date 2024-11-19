import { api } from '@/plugins/axios';
import { useToast } from 'vue-toastification';

const toast = useToast()

class CourseService {


    async getCourses() {
        try {
            const { data } = await api.get('/courses/');
            return data;
        }
        catch {
            toast.error("Impossível verificar cursos! Verique suas credenciais ou tente mais tarde.")
        }
    }


    async getCourse(id) {
        try {
            const { data } = await api.get(`/courses/${id}/`);
            return data;
        }
        catch {
            toast.error("Impossível verificar curso! Verique suas credenciais ou tente mais tarde.")
        }
    }


    async createCourse(course) {
        try {
            const { data } = await api.post('/courses/', course);
            toast.success("Curso criado com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível criar curso! Verique suas credenciais, e se todos os campos foram preenchidos corretamente ou tente mais tarde.")
        }
    }

    
    async updateCourse(course) {
        try {
            const { data } = await api.patch(`/courses/${course.id}/`, course);
            toast.info("Curso editado com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível editar curso! Verique suas credenciais, e se todos os campos foram editados corretamente ou tente mais tarde.")
        }
    }

    
    async deleteCourse(id) {
        try {
            const { data } = await api.delete(`/courses/${id}/`);
            toast.info("Curso deletado com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível deletar curso! Verique suas credenciais, e se ele realmente existe ou tente mais tarde.")
        }
    }
}

export default new CourseService();