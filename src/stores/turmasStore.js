import { defineStore } from 'pinia';
import { ref } from 'vue';
import turmasService from '@/services/turmasService';

export const useTurmaStore = defineStore('turma', () => {
    const turmas = ref([]);
    const turma = ref({});
    const novaTurma = ref({});

    const getTurmas = async () => {
        try {
            const data = await turmasService.getTurmas();
            turmas.value = data;
        } catch (error) {
            console.error(error);
        }
    };

    const getTurma = async (id) => {
        try {
            const data = await turmasService.getTurma(id);
            turma.value = data;
        } catch (error) {
            console.error(error);
        }
    };

    const createTurma = async (turma) => {
        try {
            const data = await turmasService.createTurma(turma);
            novaTurma.value = data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateTurma = async (turma) => {
        try {
            const data = await turmasService.updateTurma(turma);
            turma.value = data;
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTurma = async (id) => {
        try {
            await turmasService.deleteTurma(id);
            return true;
        } catch (error) {
            console.error(error);
        }
    };

    return {turmas, turma, novaTurma, getTurmas, getTurma, createTurma, updateTurma, deleteTurma};
})