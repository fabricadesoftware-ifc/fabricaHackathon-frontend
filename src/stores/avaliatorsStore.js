import { defineStore } from 'pinia';
import { ref } from 'vue';
import avaliatorService from '@/services/avaliatorsService';

export const useAvaliadorStore = defineStore('avaliadores', () => {
    const avaliators = ref([]);
    const avaliator = ref({});
    const newAvaliator = ref({});

    const getAvaliators = async () => {
        try {
            const data = await avaliatorService.getAvaliators();
            avaliators.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const getAvaliator = async (id) => {
        try {
            const data = await avaliatorService.getAvaliator(id);
            avaliator.value = data;

        } catch(error) {
            console.error(error);
        }
    };
    const createAvaliator = async (avaliator) => {
        try {
            const data = await avaliatorService.createAvaliator(avaliator);
            newAvaliator.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const updateAvaliator = async (avaliator) => {
        try {
            await avaliatorService.updateAvaliator(avaliator);
            getAvaliator(avaliator.id);
        } catch(error) {
            console.error(error);
        }
    };
    const deleteAvaliator = async (id) => {
        try {
            await avaliatorService.deleteAvaliator(id);
            return true;
        } catch(error) {
            console.error(error);
        }
    };

    return {avaliators, avaliator, newAvaliator, getAvaliators, getAvaliator, createAvaliator, updateAvaliator, deleteAvaliator};
});