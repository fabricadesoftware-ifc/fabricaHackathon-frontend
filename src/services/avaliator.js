import { api } from '@/plugins/axios';
import { useToast } from 'vue-toastification';

const toast = useToast()

class AvaliatorService {

    async getAvaliators() {
        try {
            const { data } = await api.get('/avaliators/');
            return data;
        }
        catch {
            toast.error("Impossível verificar avaliadores! Verique suas credenciais ou tente mais tarde.")
        }
    }


    async getAvaliator(id) {
        try {
            const { data } = await api.get(`/avaliators/${id}/`);
            return data;
        }
        catch {
            toast.error("Impossível verificar avaliador! Verique suas credenciais ou tente mais tarde.")
        }
    }


    async createAvaliator(avaliator) {
        try {
            const { data } = await api.get('/avaliators/', avaliator);
            toast.success("Avaliador criado com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível criar avaliador! Verique suas credenciais, e se todos os campos foram preenchidos corretamente ou tente mais tarde.")
        }
    }


    async updateAvaliator(avaliator) {
        try {
            const { data } = await api.patch(`/avaliators/${avaliator.id}/`, avaliator);
            toast.info("Avaliador editado com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível editar avaliador! Verique suas credenciais, e se todos os campos foram editados corretamente ou tente mais tarde.")
        }
    }


    async deleteAvaliator(id) {
        try {
            const { data } = await api.delete(`/avaliators/${id}/`);
            toast.info("Avaliador deletado com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível deletar avaliador! Verique suas credenciais, e se ele realmente existe ou tente mais tarde.")
        }
    }
}

export default new AvaliatorService();