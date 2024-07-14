import { defineStore } from 'pinia';
import { ref } from 'vue';
import alunosService from '@/services/alunosService';

export const useAlunosStore = defineStore('alunos', () => {
    const alunos = ref([]);
    const aluno = ref([]);
    const newAluno = ref([]);

    const getAlunos = async () => {
        try {
            const data = await alunosService.getAlunos();
            alunos.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const getAluno = async (id) => {
        try {
            const data = await alunosService.getAluno(id);
            aluno.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const createAluno = async (aluno) => {
        try {
            const data = await alunosService.createAluno(aluno);
            newAluno.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const updateAluno = async (updateAluno) => {
        try {
            await alunosService.updateAluno(updateAluno);
            getAluno(updateAluno.id);
        } catch(error) {
            console.error(error);
        }
    };
    const deleteAluno = async (id) => {
        try {
            await alunosService.deleteAluno(id);
            return true;
        } catch(error) {
            console.error(error);
        }
    };

    return {alunos, aluno, newAluno, getAlunos, getAluno, createAluno, updateAluno, deleteAluno};
});