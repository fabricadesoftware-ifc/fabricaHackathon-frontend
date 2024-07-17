import { defineStore } from 'pinia';
import { ref } from 'vue';
import classService from '@/services/classService';

export const useClassInfoStore = defineStore('classes', () => {
    const classesInfo = ref([]);
    const classInfo = ref({});
    const newClassInfo = ref({});

    const getClassesInfo = async () => {
        try {
            const data = await classService.getClassesInfo();
            classesInfo.value = data;
        } catch (error) {
            console.error(error);
        }
    };

    const getClassInfo = async (id) => {
        try {
            const data = await classService.getClassInfo(id);
            classInfo.value = data;
        } catch (error) {
            console.error(error);
        }
    };

    const createClassInfo = async (classInfo) => {
        try {
            const data = await classService.createClassInfo(classInfo);
            newClassInfo.value = data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateClassInfo = async (classInfo) => {
        try {
            await classService.updateClassInfo(classInfo);
            getClassInfo(classInfo.id);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteClassInfo = async (id) => {
        try {
            await classService.deleteClassInfo(id);
            return true;
        } catch (error) {
            console.error(error);
        }
    };

    return {classesInfo, classInfo, newClassInfo, getClassesInfo, getClassInfo, createClassInfo, updateClassInfo, deleteClassInfo};
});