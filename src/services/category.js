import { api } from '@/plugins/axios';
import { useToast } from 'vue-toastification';

const toast = useToast()

class CategoryService {

    async getCategories() {
        try {
            const { data } = await api.get('/categories/');
            return data;
        }
        catch {
            toast.error("Impossível verificar categorias! Verique suas credenciais ou tente mais tarde.")
        }       
    }


    async getCategory(id) {
        try {
            const { data } = await api.get(`/categories/${id}/`);
            return data;
        }
        catch {
            toast.error("Impossível verificar categoria! Verique suas credenciais ou tente mais tarde.")
        }
    }


    async createCategory(category) {
        try {
            const { data } = await api.post('/categories/', category);
            toast.success("Categoria criada com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível criar categoria! Verique suas credenciais, e se todos os campos foram preenchidos corretamente ou tente mais tarde.")
        }
    }


    async updateCategory(category) {
        try {
            const { data } = await api.patch(`/categories/${category.id}/`, category);
            toast.info("Categoria editada com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível editar categoria! Verique suas credenciais, e se todos os campos foram editados corretamente ou tente mais tarde.")
        }
    }

    
    async deleteCategory(id) {
        try {
            const { data } = await api.delete(`/categories/${id}/`);
            toast.info("Categoria deletada com sucesso!")
            return data;
        }
        catch {
            toast.error("Impossível deletar categoria! Verique suas credenciais, e se ela realmente existe ou tente mais tarde.")
        }
    }
}

export default new CategoryService();