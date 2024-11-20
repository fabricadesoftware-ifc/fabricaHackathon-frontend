import { api } from '@/plugins/axios';
import { useToast } from 'vue-toastification';

const toast = useToast()

class EditionService {
    async getEditions() {
        try {
            const { data } = await api.get('/editions/');
            return data;
        }
        catch {
            toast.error("Impossível verificar edições! Verique suas credenciais ou tente mais tarde.")
        }
    }


    async getEdition(id) {
        try {
            const { data } = await api.get(`/editions/${id}/`);
            return data;
        }
        catch {
            toast.error("Impossível verificar edição! Verique suas credenciais ou tente mais tarde.")
        }
    }


    async createEdition(edition) {
        try {
            const { data } = await api.post('/editions/', edition);
            toast.success("Edição criada com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível criar edição! Verique suas credenciais, e se todos os campos foram preenchidos corretamente ou tente mais tarde.")
        }    
    }


    async updateEdition(edition) {
        try {
            const { data } = await api.patch(`/editions/${edition.id}/`, edition);
            toast.info("Edição editada com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível editar edição! Verique suas credenciais, e se todos os campos foram editados corretamente ou tente mais tarde.")
        }
    }


    async deleteEdition(id) {
        try {
            const { data } = await api.delete(`/editions/${id}/`);
            toast.info("Edição deletada com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível deletar edição! Verique suas credenciais, e se ela realmente existe ou tente mais tarde.")
        }    
    }


    async getAvaliatorEditions(id) {
        try {
            const { data } = await api.get(`/editions/avaliator/${id}/active/`);
            return data;
        }
        catch {
            toast.error("Impossível verificar edições! Verique suas credenciais ou tente mais tarde.")
        }
    }
}

export default new EditionService();
