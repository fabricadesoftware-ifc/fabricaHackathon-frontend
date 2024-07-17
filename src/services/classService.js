import api from '@/plugins/axios';

class ClassInfoService {
    async getClassesInfo() {
        const { data } = await api.get('/classes/');
        return data;
    }
    async getClassInfo(id) {
        const { data } = await api.get(`/classes/${id}/`);
        return data;
    }
    async createClassInfo(classInfo) {
        const { data } = await api.post('/classes/', classInfo);
        return data;
    }
    async updateClassInfo(classInfo) {
        const { data } = await api.patch(`/classes/${classInfo.id}/`, classInfo);
        return data;
    }
    async deleteClassInfo(id) {
        const { data } = await api.delete(`/classes/${id}/`);
        return data;
    }
}

export default new ClassInfoService();