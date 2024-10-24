import { ref } from "vue";
import { defineStore } from "pinia";
import DetailEditionService from '@/services/detailEdition';

export const useDetailEditionStore = defineStore('detailEdition', () => {
    const editionId = ref('');
    const winningTeams = ref([]);
    const salesTeams = ref([]);
    const servicesTeam = ref([]);
    const rentalsTeams = ref([]);
    const uncategorizedTeams = ref([]);

    const orderByWinningTeams = async (idRanking) => {
        console.log(winningTeams.value);
        if (winningTeams.value.length > 0) {
            return winningTeams.value;
        }
        const data = await DetailEditionService.orderByWinningTeams(idRanking);
        winningTeams.value = data;
        return data;
    }
    const orderBySalesTeams = async (idRanking, nameCategory) => {
        if (salesTeams.value.length > 0) {
            return salesTeams.value;
        }
        const data = await DetailEditionService.orderBySalesTeams(idRanking, nameCategory);
        salesTeams.value = data;
        return data;
    }
    const orderByServicesTeams = async (idRanking, nameCategory) => {
        if (servicesTeam.value.length > 0) {
            return servicesTeam.value;
        }
        const data = await DetailEditionService.orderByServicesTeams(idRanking, nameCategory);
        servicesTeam.value = data;
        return data;
    }
    const orderByRentalsTeams = async (idRanking, nameCategory) => {
        if (rentalsTeams.value.length > 0) {
            return rentalsTeams.value;
        }
        const data = await DetailEditionService.orderByRentalsTeams(idRanking, nameCategory);
        rentalsTeams.value = data;
        return data;
    }
    const orderByUncategorized = async (idRanking) => {
        if (uncategorizedTeams.value.length > 0) {
            return uncategorizedTeams.value;
        }
        const data = await orderByWinningTeams(idRanking);
        uncategorizedTeams.value = data;
        return data;
    }

    const populateRefs = async() => {
        await orderByWinningTeams(editionId.value)
        await orderBySalesTeams(editionId.value, 'Category 8');
        await orderByServicesTeams(editionId.value, 'Category 8');
        await orderByRentalsTeams(editionId.value, 'Category 8');
        await orderByUncategorized(editionId.value);
    };

    return { editionId, winningTeams, salesTeams, servicesTeam, rentalsTeams, uncategorizedTeams, orderByWinningTeams, orderBySalesTeams, orderByServicesTeams, orderByRentalsTeams, orderByUncategorized, populateRefs };
});