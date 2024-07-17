import { defineStore } from 'pinia';
import { ref } from 'vue';
import criterionService from '@/services/criteriaService';

export const useCriterionStore = defineStore('criteria', () => {
    const criteria = ref([]);
    const criterion = ref([]);
    const newCriterion = ref([]);

    const getCriteria = async () => {
        try {
            const data = await criterionService.getCriteria();
            criteria.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const getCriterion = async (id) => {
        try {
            const data = await criterionService.getCriterion(id);
            criterion.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const createCriterion = async (criterion) => {
        try {
            const data = await criterionService.createCriterion(criterion);
            newCriterion.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const updateCriterion = async (criterion) => {
        try {
            await criterionService.updateCriterion(criterion);
            getCriterion(criterion.id);
        } catch(error) {
            console.error(error);
        }
    };
    const deleteCriterion = async (id) => {
        try {
            await criterionService.deleteCriterion(id);
            return true;
        } catch(error) {
            console.error(error);
        }
    };

    return {criteria, criterion, newCriterion, getCriteria, getCriterion, createCriterion, updateCriterion, deleteCriterion};
});