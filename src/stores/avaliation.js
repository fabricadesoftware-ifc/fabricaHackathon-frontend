import { defineStore } from 'pinia';
import { ref } from 'vue';
import avaliationService from '@/services/avaliation';

export const useAvaliationStore = defineStore('avaliation', () => {
    const avaliations = ref([]);
    const avaliation = ref([]);
    const newAvaliation = ref([]);

    const getAvaliations = async () => {
        try {
            const data = await avaliationService.getAvaliations();
            avaliations.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const getAvaliation = async (id) => {
        try {
            const data = await avaliationService.getAvaliation(id);
            avaliation.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const createAvaliation = async (avaliation) => {
        try {
            const data = await avaliationService.createAvaliation(avaliation);
            newAvaliation.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const updateAvaliation = async (avaliation) => {
        try {
            await avaliationService.updateAvaliation(avaliation);
            getAvaliation(avaliation.id);
        } catch(error) {
            console.error(error);
        }
    };
    const deleteAvaliation = async (id) => {
        try {
            await avaliationService.deleteAvaliation(id);
            return true;
        } catch(error) {
            console.error(error);
        }
    };

    return {avaliations, avaliation, newAvaliation, getAvaliations, getAvaliation, createAvaliation, updateAvaliation, deleteAvaliation};
});