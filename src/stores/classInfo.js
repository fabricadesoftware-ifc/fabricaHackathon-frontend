import { defineStore } from 'pinia';
import { ref } from 'vue';
import classInfoService from '@/services/classInfo';

export const useClassInfoStore = defineStore('classInfo', () => {
    const classesInfo = ref([]);
    const classInfo = ref({});
    const newClassInfo = ref({});

    const getClassesInfo = async () => {
        try {
            const data = await classInfoService.getClassesInfo();
            classesInfo.value = data;
        } catch (error) {
            console.error(error);
        }
    };

    const getClassInfo = async (id) => {
        try {
            const data = await classInfoService.getClassInfo(id);
            classInfo.value = data;
        } catch (error) {
            console.error(error);
        }
    };

    const createClassInfo = async (classInfo) => {
        try {
            const data = await classInfoService.createClassInfo(classInfo);
            newClassInfo.value = data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateClassInfo = async (classInfo) => {
        try {
            await classInfoService.updateClassInfo(classInfo);
            getClassInfo(classInfo.id);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteClassInfo = async (id) => {
        try {
            await classInfoService.deleteClassInfo(id);
            return true;
        } catch (error) {
            console.error(error);
        }
    };

    return {classesInfo, classInfo, newClassInfo, getClassesInfo, getClassInfo, createClassInfo, updateClassInfo, deleteClassInfo};
});