import { api } from "@/plugins/axios";


class DetailEditionService {
  async getAllTeams(idEdition) {
    const { data } = await api.get(`/rankings/edition/${idEdition}`);

    for (let c = 0; c < data.length; c++) {
      console.log(data[c].team.category)
      data[c] = { id: data[c].id, final_grade: data[c].final_grade, classification: data[c].classification, idTeam: data[c].team.id, name: data[c].team.name, photo_base64_code: data[c].team.photo_base64_team.photo_base64, category: data[c].team?.project?.category }
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
  orderByUncategorized(categoriesUsed = [], teams = []) {
    const uncategorizedTeams = teams.filter(team => team.category !== categoriesUsed[0] || team.category !== categoriesUsed[1] || team.category !== categoriesUsed[2]);

    return uncategorizedTeams
  };
};

export default new DetailEditionService();
    async orderByWinningTeams(id) {
        const { data } = await api.get(`/rankings?edition_id=${id}&classification=1`);
        return data;
    }
    async orderBySalesTeams(id) {
        const categories = await api.get('/categories/');
        let category = undefined;
        for (let c = 0; c < categories.data.length; c++) {
            if (categories.data[c].name === 'Sales') {
                category = categories.data[c].id;
            }
        }
        const { data } = await api.get(`/rankings?edition_id=${id}&category=${category}`);
    }
};

export default new DetailEditionService();
