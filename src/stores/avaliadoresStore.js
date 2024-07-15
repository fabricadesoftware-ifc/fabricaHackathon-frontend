import { defineStore } from 'pinia';
import { ref } from 'vue';
import avaliadorService from '@/services/avaliadoresService';

export const useAvaliadorStore = defineStore('avaliadores', () => {
    const avaliators = ref([]);
    const avaliator = ref({});
    const newAvaliator = ref({});

    const getAvaliators = async () => {
        try {
            const data = await avaliadorService.getAvaliadores();
            avaliators.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const getAvaliator = async (id) => {
        try {
            const data = await avaliadorService.getAvaliador(id);
            avaliator.value = data;

        } catch(error) {
            console.error(error);
        }
    };
    const createAvaliator = async (avaliator) => {
        try {
            const data = await avaliadorService.createAvaliador(avaliator);
            newAvaliator.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const updateAvaliator = async (updateAvaliator) => {
        try {
            await avaliadorService.updateAvaliador(updateAvaliator);
            getAvaliator(updateAvaliator.id);
        } catch(error) {
            console.error(error);
        }
    };
    const deleteAvaliator = async (id) => {
        try {
            await avaliadorService.deleteAvaliador(id);
            return true;
        } catch(error) {
            console.error(error);
        }
    };

    return {avaliators, avaliator, newAvaliator, getAvaliators, getAvaliator, createAvaliator, updateAvaliator, deleteAvaliator};
});