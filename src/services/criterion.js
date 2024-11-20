import { api } from '@/plugins/axios';
import { useToast } from 'vue-toastification';

const toast = useToast()

class CriterionService {
    async getCriteria() {
        try {
            const { data } = await api.get('/criteria/');
            return data;
        }
        catch {
            toast.error("Impossível verificar critérios! Verique suas credenciais ou tente mais tarde.")
        }
    }


    async getCriterion(id) {
        try {
            const { data } = await api.get(`/criteria/${id}/`);
            return data;
        }
        catch {
            toast.error("Impossível verificar critério! Verique suas credenciais ou tente mais tarde.")
        }
    }

    
    async createCriterion(criterion) {
        try {
            const { data } = await api.post('/criteria/', criterion);
            toast.success("Critério criado com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível criar critério! Verique suas credenciais, e se todos os campos foram preenchidos corretamente ou tente mais tarde.")
        }
    }


    async updateCriterion(criterion) {
        try {
            const { data } = await api.patch(`/criteria/${criterion.id}/`, criterion);
            toast.info("Critério editado com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível editar critério! Verique suas credenciais, e se todos os campos foram editados corretamente ou tente mais tarde.")
        }
    }


    async deleteCriterion(id) {
        try {
            const { data } = await api.delete(`/criteria/${id}/`);
            toast.info("Critério deletado com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível deletar critério! Verique suas credenciais, e se ele realmente existe ou tente mais tarde.")
        }
    }
}

export default new CriterionService();