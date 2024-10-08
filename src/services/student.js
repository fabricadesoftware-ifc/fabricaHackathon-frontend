import { api } from '@/plugins/axios';

class StudentService {
    async getStudents() {
        const { data } = await api.get('/students/');
        return data;
    }
    async getStudent(id) {
        const { data } = await api.get(`/students/${id}/`);
        return data;
    }
    async getAvailableStudentsByClass(editionId, classId) {
        const { data } = await api.get(`/available-students/edition/${editionId}?class_info=${classId}`);
        return data;
    }
    async createStudent(student) {
        const { data } = await api.post('/students/', student);
        return data;
    }
    async updateStudent(student) {
        const { data } = await api.patch(`/students/${student.id}/`, student);
        return data;
    }
    async deleteStudent(id) {
        const { data } = await api.delete(`/students/${id}/`);
        return data;
    }
}

export default new StudentService();