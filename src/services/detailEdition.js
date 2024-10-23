import { api } from "@/plugins/axios";


class DetailEditionService {
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