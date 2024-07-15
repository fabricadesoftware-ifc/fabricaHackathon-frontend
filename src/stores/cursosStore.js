import { defineStore } from 'pinia';
import { ref } from 'vue';
import cursosService from '@/services/cursosService';

export const useCursoStore = defineStore('cursos', () => {
    const cursos = ref([]);
    const curso = ref([]);
    const newCurso = ref([]);
    
    const getCursos = async () => {
        try {
            const data = await cursosService.getCursos();
            cursos.value = data;
        } catch(error) {
            console.error(error);
        }
    };

    const getCurso = async (id) => {
        try {
            const data = await cursosService.getCurso(id);
            curso.value = data;
        } catch(error) {
            console.error(error);
        }
    };

    const createCurso = async (curso) => {
        try {
            const data = await cursosService.createCurso(curso);
            newCurso.value = data;
        } catch(error) {
            console.error(error);
        }
    };

    const updateCurso = async (curso) => {
        try {
            const data = await cursosService.updateCurso(curso);
            curso.value = data;
        } catch(error) {
            console.error(error);
        }
    };

    const deleteCurso = async (id) => {
        try {
            await cursosService.deleteCurso(id);
            return true;
        } catch(error) {
            console.error(error);
        }
    };

    return {cursos, curso, newCurso, getCursos, getCurso, createCurso, updateCurso, deleteCurso};
})