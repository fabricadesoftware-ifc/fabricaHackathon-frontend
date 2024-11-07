import { ref } from "vue";
import { defineStore } from "pinia";
import { useCategoryStore } from "@/stores/category";
import DetailEditionService from '@/services/detailEdition';

export const useDetailEditionStore = defineStore('detailEdition', () => {
    const useCategory = useCategoryStore();
    const countTeams = ref(0);
    const categoriesUsed = [];
    const winningTeams = ref([]);
    const salesTeams = ref([]);
    const servicesTeam = ref([]);
    const rentalsTeams = ref([]);
    const uncategorizedTeams = ref([]);

    const getAllTeams = async(idEdition) => {
        const data = await DetailEditionService.getAllTeams(idEdition);
        countTeams.value = data.length;

        populateRefs(data);
    };

    const orderByWinningTeams = (teams = []) => {
        winningTeams.value = DetailEditionService.orderByWinningTeams(teams);
    };
    const orderBySalesTeams = (teams = []) => {
        const index = useCategory.getIdCategoryByName('Category 8');
        console.log(index);

        salesTeams.value = DetailEditionService.orderBySalesTeams(index, teams)
        categoriesUsed.push(index);
    };
    const orderByServicesTeams = (teams = []) => {
        const index = useCategory.getIdCategoryByName('Category 8');

        servicesTeam.value = DetailEditionService.orderByServicesTeams(index, teams);
        categoriesUsed.push(index);
    }
    const orderByRentalsTeams = (teams = []) => {
        const index = useCategory.getIdCategoryByName('Category 8');

        rentalsTeams.value = DetailEditionService.orderByRentalsTeams(index, teams);
        categoriesUsed.push(index);
    }
    const orderByUncategorized = (teams = []) => {
        uncategorizedTeams.value = DetailEditionService.orderByUncategorized(categoriesUsed, teams);
    }

    const populateRefs = (teams) => {
        orderByWinningTeams(teams)
        orderBySalesTeams(teams);
        orderByServicesTeams(teams);
        orderByRentalsTeams(teams);
        orderByUncategorized(teams);
    };

    return {
        countTeams,
        winningTeams,
        salesTeams,
        servicesTeam,
        rentalsTeams,
        uncategorizedTeams,
        getAllTeams,
        orderByWinningTeams,
        orderBySalesTeams,
        orderByServicesTeams,
        orderByRentalsTeams,
        orderByUncategorized
    };
});
