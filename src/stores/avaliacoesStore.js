import { defineStore } from 'pinia';
import { ref } from 'vue';
import avaliacoesService from '@/services/avaliacoesService';

export const useAvaliacaoStore = defineStore('avaliacoes', () => {
    const avaliations = ref([]);
    const avaliation = ref([]);
    const newAvaliation = ref([]);

    const getAvaliacoes = async () => {
        try {
            const data = await avaliacoesService.getAvaliacoes();
            avaliations.value = data;
            console.log(avaliations.value);
        } catch(error) {
            console.error(error);
        }
    };
    const getAvaliacao = async (id) => {
        try {
            const data = await avaliacoesService.getAvaliacao(id);
            avaliation.value = data;
            console.log(avaliation.value);
        } catch(error) {
            console.error(error);
        }
    };
    const createAvaliacao = async (avaliacao) => {
        try {
            const data = await avaliacoesService.createAvaliacao(avaliacao);
            newAvaliation.value = data;
            console.log(newAvaliation.value);
        } catch(error) {
            console.error(error);
        }
    };
    const updateAvaliacao = async (avaliacao) => {
        try {
            await avaliacoesService.updateAvaliacao(avaliacao);
            getAvaliacao(avaliacao.id);
        } catch(error) {
            console.error(error);
        }
    };
    const deleteAvaliacao = async (id) => {
        try {
            await avaliacoesService.deleteAvaliacao(id);
            return true;
        } catch(error) {
            console.error(error);
        }
    };

    return {avaliations, avaliation, newAvaliation, getAvaliacoes, getAvaliacao, createAvaliacao, updateAvaliacao, deleteAvaliacao};
});