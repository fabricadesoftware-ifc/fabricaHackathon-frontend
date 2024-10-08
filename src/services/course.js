import { api } from '@/plugins/axios';

class CourseService {
    async getCourses() {
        const { data } = await api.get('/courses/');
        return data;
    }
    async getCourse(id) {
        const { data } = await api.get(`/courses/${id}/`);
        return data;
    }
    async createCourse(course) {
        const { data } = await api.post('/courses/', course);
        return data;
    }
    async updateCourse(course) {
        const { data } = await api.patch(`/courses/${course.id}/`, course);
        return data;
    }
    async deleteCourse(id) {
        const { data } = await api.delete(`/courses/${id}/`);
        return data;
    }
}

export default new CourseService();