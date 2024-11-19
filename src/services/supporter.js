import { api } from '@/plugins/axios';
import { useToast } from 'vue-toastification';

const toast = useToast()

class SupporterService {
    async getSupporters() {
        try {
            const { data } = await api.get('/supporters/');
            return data;
        }
        catch {
            toast.error("Impossível verificar apoiadores! Verique suas credenciais ou tente mais tarde.")
        }
    }


    async getSupporter(id) {
        try {
            const { data } = await api.get(`/supporters/${id}/`);
            return data;
        }
        catch {
            toast.error("Impossível verificar apoiador! Verique suas credenciais ou tente mais tarde.")
        }
    }


    async createSupporter(supporter) {
        try {
            const { data } = await api.post('/supporters/', supporter);
            toast.success("Apoiador criado com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível criar apoiador! Verique suas credenciais, e se todos os campos foram preenchidos corretamente ou tente mais tarde.")
        }
    }


    async updateSupporter(supporter) {
        try {
            const { data } = await api.patch(`/supporters/${supporter.id}/`, supporter);
            toast.info("Apoiador editado com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível editar apoiador! Verique suas credenciais, e se todos os campos foram editados corretamente ou tente mais tarde.")
        }
    }


    async deleteSupporter(id) {
        try {
            const { data } = await api.delete(`/supporters/${id}/`);
            toast.info("Apoiador deletado com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível deletar apoiador! Verique suas credenciais, e se ele realmente existe ou tente mais tarde.")
        }
    }
}

export default new SupporterService();