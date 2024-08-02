import { defineStore } from 'pinia';
import { ref } from 'vue';
import editionService from '@/services/edition';

export const useEditionStore = defineStore('edition', () => {
    const editions = ref([]);
    const edition = ref([]);
    const newEdition = ref([]);

    const getEditions = async () => {
        try {
            const data = await editionService.getEditions();
            editions.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const getEdition = async (id) => {
        try {
            const data = await editionService.getEdition(id);
            edition.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const createEdition = async (edition) => {
        try {
            const data = await editionService.createEdition(edition);
            newEdition.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const updateEdition = async (edition) => {
        try {
            await editionService.updateEdition(edition);
            getEdition(edition.id);
        } catch(error) {
            console.error(error);
        }
    };
    const deleteEdition = async (id) => {
        try {
            await editionService.deleteEdition(id);
            return true;
        } catch(error) {
            console.error(error);
        }
    };

    return {editions, edition, newEdition, getEditions, getEdition, createEdition, updateEdition, deleteEdition};
});