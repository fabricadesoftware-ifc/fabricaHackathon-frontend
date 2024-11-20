import { api } from '@/plugins/axios';
import { useToast } from 'vue-toastification';

const toast = useToast()

class ClassInfoService {

    async getClassesInfo() {
        try {
            const { data } = await api.get('/classes/');
            return data;
        }
        catch {
            toast.error("Impossível verificar classes! Verique suas credenciais ou tente mais tarde.")
        }
    }


    async getEditionClasses(edition) {
        try {
            const { data } = await api.get('/classes?edition=' + edition);
            return data;
        }
        catch {
            toast.error("Impossível verificar classes! Verique suas credenciais ou tente mais tarde.")
        }
    }


    async getClassInfo(id) {
        try {
            const { data } = await api.get(`/classes/${id}/`);
            return data;
        }
        catch {
            toast.error("Impossível verificar classe! Verique suas credenciais ou tente mais tarde.")
        }
    }


    async createClassInfo(classInfo) {
        try {
            const { data } = await api.post('/classes/', classInfo);
            toast.success("Classe criada com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível criar classe! Verique suas credenciais, e se todos os campos foram preenchidos corretamente ou tente mais tarde.")
        }
    }


    async updateClassInfo(classInfo) {
        try {
            const { data } = await api.patch(`/classes/${classInfo.id}/`, classInfo);
            toast.info("Classe editada com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível editar classe! Verique suas credenciais, e se todos os campos foram editados corretamente ou tente mais tarde.")
        }
    }


    async deleteClassInfo(id) {
        try {
            const { data } = await api.delete(`/classes/${id}/`);
            toast.info("Classe deletada com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível deletar classe! Verique suas credenciais, e se ela realmente existe ou tente mais tarde.")
        }
    }
}

export default new ClassInfoService();