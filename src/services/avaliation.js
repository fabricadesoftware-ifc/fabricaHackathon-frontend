import { api } from '@/plugins/axios';
import { useToast } from 'vue-toastification';

const toast = useToast()

class AvaliationService {
    async getAvaliations() {
        try {
            const { data } = await api.get('/avaliations/');
            return data;
        }
        catch {
            toast.error("Impossível verificar as avaliações! Verique suas credenciais ou tente mais tarde.")
        }
    }


    async getAvaliation(id) {
        try {
            const { data } = await api.get(`/avaliations/${id}/`);
            return data;
        }
        catch {
            toast.error("Impossível verificar avaliação! Verique suas credenciais ou tente mais tarde.")
        }
        
    }


    async createAvaliation(avaliation) {
        try {
            const { data } = await api.post('/avaliations/', avaliation);
            toast.success("Avaliação Criada com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível criar avaliação! Verique suas credenciais, e se todos os campos foram preenchidos corretamente ou tente mais tarde.")
        }
        
    }


    async updateAvaliation(avaliation) {
        try {
            const { data } = await api.patch(`/avaliations/${avaliation.id}/`, avaliation);
            toast.info("Avaliação editada com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível editar avaliação! Verique suas credenciais, e se todos os campos foram editados corretamente ou tente mais tarde.")
        }
    }


    async deleteAvaliation(id) {
        try {
            const { data } = await api.delete(`/avaliations/${id}/`);
            toast.info("Avaliação deletada com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível deletar avaliação! Verique suas credenciais, e se ela realmente existe ou tente mais tarde.")
        }
    }
}

export default new AvaliationService();
