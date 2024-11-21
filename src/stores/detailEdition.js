import { ref } from "vue";
import { defineStore } from "pinia";
import { useCategoryStore } from "@/stores/category";
import DetailEditionService from '@/services/detailEdition';
import edition from "@/services/edition";

export const useDetailEditionStore = defineStore('detailEdition', () => {
    const useCategory = useCategoryStore();
    const countTeams = ref(0);
    const allTeams = ref([])
    const teamsByCategories = ref([])
    const categoriesUsed = [];
    const winningTeams = ref([]);
    const salesTeams = ref([]);
    const servicesTeam = ref([]);
    const rentalsTeams = ref([]);
    const uncategorizedTeams = ref([]);

    const getAllTeams = async(idEdition) => {
        const data = await DetailEditionService.getAllTeams(idEdition);
        countTeams.value = data.length;
        allTeams.value = data
        populateRefs(data);
    };

    const getTeamsByCategory = async(edition_id, category) => {
        const data = await DetailEditionService.getTeamsByCategories(edition_id, category.id);
        const categoryTeams = {
            category: category.name,
            teams: data
        }
        teamsByCategories.value.push(categoryTeams)
    }

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
        allTeams,
        teamsByCategories,
        getAllTeams,
        getTeamsByCategory,
        orderByWinningTeams,
        orderBySalesTeams,
        orderByServicesTeams,
        orderByRentalsTeams,
        orderByUncategorized,
    };
});