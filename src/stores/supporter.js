import { defineStore } from 'pinia';
import { ref } from 'vue';
import supporterService from '@/services/supporter';

export const useSupporterStore = defineStore('supporter', () => {
    const supporters = ref([]);
    const supporter = ref([]);
    const newSupporter = ref([]);

    const getSupporters = async () => {
        try {
            const data = await supporterService.getSupporters();
            supporters.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const getSupporter = async (id) => {
        try {
            const data = await supporterService.getSupporter(id);
            supporter.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const createSupporter = async (supporter) => {
        try {
            const data = await supporterService.createSupporter(supporter);
            newSupporter.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const updateSupporter = async (supporter) => {
        try {
            await supporterService.updateSupporter(supporter);
            getSupporter(supporter.id);
        } catch(error) {
            console.error(error);
        }
    };
    const deleteSupporter = async (id) => {
        try {
            await supporterService.deleteSupporter(id);
            return true;
        } catch(error) {
            console.error(error);
        }
    };

    return {supporters, supporter, newSupporter, getSupporters, getSupporter, createSupporter, updateSupporter, deleteSupporter};
});