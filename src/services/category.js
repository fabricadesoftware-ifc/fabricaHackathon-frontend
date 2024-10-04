import { api } from '@/plugins/axios';

class CategoryService {
    async getCategories() {
        const { data } = await api.get('/categories/');
        return data;
    }
    async getCategory(id) {
        const { data } = await api.get(`/categories/${id}/`);
        return data;
    }
    async createCategory(category) {
        const { data } = await api.post('/categories/', category);
        return data;
    }
    async updateCategory(category) {
        const { data } = await api.patch(`/categories/${category.id}/`, category);
        return data;
    }
    async deleteCategory(id) {
        const { data } = await api.delete(`/categories/${id}/`);
        return data;
    }
}

export default new CategoryService();