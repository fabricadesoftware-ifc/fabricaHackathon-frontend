import { api } from "@/plugins/axios";


class DetailEditionService {
    async getAllTeams(idEdition) {
        const { data } = await api.get(`/rankings?edition_id=${idEdition}`);

        for (let c = 0; c < data.length; c++) {
            data[c] = {id: data[c].id, final_grade: data[c].final_grade, classification: data[c].classification, idTeam: data[c].team.id, name: data[c].team.name, photo_base64_code: data[c].team.photo_base64_team.photo_base64, category: data[c].team.category.id}
        };

        return data;
    };

    orderByWinningTeams(teams = []) {
        const winningTeams = teams.filter(team => team.classification === 1);
        return winningTeams;
    };
    orderBySalesTeams(indexCategory, teams = []) {
        const salesTeams = teams.filter(team => team.category === indexCategory);
        return salesTeams
    };
    orderByServicesTeams(indexCategory, teams = []) {
        const servicesTeams = teams.filter(team => team.category === indexCategory);
        return servicesTeams
    }
    orderByRentalsTeams(indexCategory, teams = []) {
        const rentalsTeams = teams.filter(team => team.category === indexCategory);
        return rentalsTeams
    }
    orderByUncategorized (categoriesUsed = [], teams = []) {
        const uncategorizedTeams = teams.filter(team => team.category !== categoriesUsed[0] || team.category !== categoriesUsed[1] || team.category !== categoriesUsed[2]);
        
        return uncategorizedTeams
    };
};

export default new DetailEditionService();