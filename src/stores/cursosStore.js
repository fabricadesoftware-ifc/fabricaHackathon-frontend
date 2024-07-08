import { defineStore } from 'pinia';
import { ref } from 'vue';
import cursosService from '@/services/cursosService';

export const useCursoStore = defineStore('cursos', () => {
    const cursos = ref([]);
    const curso = ref([]);
    const newCurso = ref([]);
    const updatedCurso = ref([]);
    
    const getCursos = async () => {
        try {
            const data = await cursosService.getCursos();
            cursos.value = data;
            console.log(cursos.value);
        } catch(error) {
            console.error(error);
        }
    };

    const getCurso = async (id) => {
        try {
            const data = await cursosService.getCurso(id);
            curso.value = data;
            console.log(curso.value);
        } catch(error) {
            console.error(error);
        }
    };

    const createCurso = async (curso) => {
        try {
            const data = cursosService.createCurso(curso);
            newCurso.value = data;
            console.log(newCurso.value);
        } catch(error) {
            console.error(error);
        }
    };

    const updateCurso = async (curso) => {
        try {
            const data = cursosService.updateCurso(curso);
            updatedCurso.value = data;
            console.log(updatedCurso.value);
        } catch(error) {
            console.error(error);
        }
    };

    const deleteCurso = async (id) => {
        try {
            const data = cursosService.deleteCurso(id);
            return true;
        } catch(error) {
            console.error(error);
        }
    };

    return {cursos, curso, newCurso, updatedCurso, getCursos, getCurso, createCurso, updateCurso, deleteCurso};
})