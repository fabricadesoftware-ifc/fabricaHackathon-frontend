import { defineStore } from 'pinia';
import turmasServices from '@/services/turmasServices';
import { ref } from 'vue';

export const useTurmaStore = defineStore('turma', () => {
    const turmas = ref([]);
    const turma = ref({});

    const getTurmas = async () => {
        try {
            const data = await turmasServices.getTurmas();
            turmas.value = data;
            console.log(turmas.value)
        } catch(error) {
            console.log(error);
        }
    }
    const getTurma = async (id) => {
        try {
            const data = await turmasServices.getTurma(id);
            turma.value = data;
            console.log(turma.value)
        } catch (error) {
            console.log(error)
        }
    }
    const createTurma = async (turma) => {
        try {
            const data = await turmasServices.createTurma(turma)
            console.log('Criou!', data)
        } catch(error) {
            console.log(error)
        }
    }

    const deleteTurma = async (id) => {
        try {
            const data = await turmasServices.deleteTurma(id)
            console.log('Deletou!', data)
        } catch (error) {
            console.log(error)
        }
    }

    return {getTurmas, getTurma, createTurma, deleteTurma}
})