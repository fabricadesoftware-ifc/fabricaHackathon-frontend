import { defineStore } from 'pinia';
import { ref } from 'vue';
import courseService from '@/services/course';

export const useCourseStore = defineStore('course', () => {
    const courses = ref([]);
    const course = ref([]);
    const newCourse = ref([]);
    
    const getCourses = async () => {
        try {
            const data = await courseService.getCourses();
            courses.value = data;
        } catch(error) {
            console.error(error);
        }
    };

    const getCourse = async (id) => {
        try {
            const data = await courseService.getCourse(id);
            course.value = data;
        } catch(error) {
            console.error(error);
        }
    };

    const createCourse = async (course) => {
        try {
            const data = await courseService.createCourse(course);
            newCourse.value = data;
        } catch(error) {
            console.error(error);
        }
    };

    const updateCourse = async (course) => {
        try {
            await courseService.updateCourse(course);
            getCourse(course.id);
        } catch(error) {
            console.error(error);
        }
    };

    const deleteCourse = async (id) => {
        try {
            await courseService.deleteCourse(id);
            return true;
        } catch(error) {
            console.error(error);
        }
    };

    return {courses, course, newCourse, getCourses, getCourse, createCourse, updateCourse, deleteCourse};
});