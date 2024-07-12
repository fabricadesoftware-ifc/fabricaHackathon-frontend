import { defineStore } from 'pinia';
import { ref } from 'vue';
import apoiadoresService from '@/services/apoiadoresService';

export const useApoiadorStore = defineStore('apoiadores', () => {
    const apoiadores = ref([]);
    const apoiador = ref([]);
    const newApoiador = ref([]);

    const getApoiadores = async () => {
        try {
            const data = await apoiadoresService.getApoiadores();
            apoiadores.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const getApoiador = async (id) => {
        try {
            const data = await apoiadoresService.getApoiador(id);
            apoiador.value = data;
            console.log(apoiador.value);
        } catch(error) {
            console.error(error);
        }
    };
    const createApoiador = async (apoiador) => {
        try {
            const data = await apoiadoresService.createApoiador(apoiador);
            newApoiador.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const updateApoiador = async (apoiador) => {
        try {
            await apoiadoresService.updateApoiadores(apoiador);
            getApoiador(apoiador.id);
        } catch(error) {
            console.error(error);
        }
    };
    const deleteApoiador = async (id) => {
        try {
            await apoiadoresService.deleteApoiador(id);
            return true;
        } catch(error) {
            console.error(error);
        }
    };

    return {apoiadores, apoiador, newApoiador, getApoiadores, getApoiador, createApoiador, updateApoiador, deleteApoiador};
});