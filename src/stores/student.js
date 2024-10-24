import { defineStore } from 'pinia';
import { ref } from 'vue';
import studentService from '@/services/student';

export const useStudentStore = defineStore('student', () => {
    const students = ref([]);
    const student = ref([]);
    const studentsClass = ref([]);
    const studentProfiles = ref([]);
    const newStudent = ref([]);

    const getStudents = async () => {
        try {
            const data = await studentService.getStudents();
            students.value = data;
        } catch (error) {
            console.error(error);
        }
    };

    const getStudent = async (id) => {
        try {
            const data = await studentService.getStudent(id);
            student.value = data;
        } catch (error) {
            console.error(error);
        }
    };

    const createStudent = async (student) => {
        try {
            const data = await studentService.createStudent(student);
            newStudent.value = data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateStudent = async (student) => {
        try {
            await studentService.updateStudent(student);
            getStudent(student.id);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteStudent = async (id) => {
        try {
            await studentService.deleteStudent(id);
            return true;
        } catch (error) {
            console.error(error);
        }
    };

    const getAvailableStudentsByClass = async (editionId, classId) => {
        try {
            const data = await studentService.getAvailableStudentsByClass(editionId, classId);
            studentsClass.value = data;
        } catch (error) {
            console.error(error);
        }
    };

    const getStudentProfile = async () => {
        try {
            const data = await studentService.getStudentProfile();
            studentProfiles.value = data;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        students,
        student,
        newStudent,
        studentsClass,
        studentProfiles,
        getStudents,
        getStudent,
        getStudentProfile,
        createStudent,
        updateStudent,
        deleteStudent,
        getAvailableStudentsByClass
    };
});
