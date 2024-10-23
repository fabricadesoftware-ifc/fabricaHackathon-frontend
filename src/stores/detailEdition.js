import { defineStore } from "pinia";
import DetailEditionService from '@/services/detailEdition';
import { ref } from "vue";

export const useDetailEditionStore = defineStore('detailEdition', () => {
    const winningTeams = ref([]);
    const saleCategory = ref([]);
    const servicesCategory = ref([]);
    const rentalCategory = ref([]);

    const getTeamsByEdition = async (id) => {
        const data = await DetailEditionService.getTeamsByEdition(id);
    };
    const orderByWinningTeams = async (idRanking) => {
        
    }

    return { winningTeams, saleCategory, servicesCategory, rentalCategory, getTeamsByEdition };
});