import { api } from "@/plugins/axios";

class AuthService {
    async createAuthentication(avaliator) {
        const { data } = await api.post('/token/', avaliator);
        return data;
    };
};

export default new AuthService();