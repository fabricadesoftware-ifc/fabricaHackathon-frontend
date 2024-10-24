import { api } from "@/plugins/axios";


class DetailEditionService {
    #idcategories = [];
    
    async orderByWinningTeams(id) {
        const { data } = await api.get(`/rankings?edition_id=${id}&classification=1`);
        return data;
    }
    async orderBySalesTeams(id, nameCategory) {
        const category = await this.getCategoryId(nameCategory);
        const { data } = await api.get(`/rankings?edition_id=${id}&category=${category}`);
        return data;
    }
    async orderByServicesTeams(id, nameCategory) {
        const category = await this.getCategoryId(nameCategory);
        const { data } = await api.get(`/rankings?edition_id=${id}&category=${category}`);
        return data;
    }
    async orderByRentalsTeams(id, nameCategory) {
        const category = await this.getCategoryId(nameCategory);
        const { data } = await api.get(`/rankings?edition_id=${id}&category=${category}`);
        return data;
    }
    async orderByUncategorized(id) {
        let { data } = await api.get(`/rankings?edition_id=${id}`);
        data = data.filter(team => {
            return(
            team.team.category != this.#idcategories[0] &&
            team.team.category != this.#idcategories[1] &&
            team.team.category != this.#idcategories[2]
            )
        });
        return data;
    }
    async getCategoryId(nameCategory) {
        const categories = await api.get('/categories/');
        let category = undefined;
        for (let c = 0; c < categories.data.length; c++) {
            if (categories.data[c].name === nameCategory) {
                category = categories.data[c].id;
            }
        }
        this.#idcategories.push(category);
        return category;
    }
};

export default new DetailEditionService();