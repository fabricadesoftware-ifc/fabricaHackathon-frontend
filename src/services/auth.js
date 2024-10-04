import { auth } from "@/plugins/axios";

class AuthService {
    async createAuthentication(avaliator) {
        const { data } = await auth.post('/token/', avaliator);
        return data;
    };
};

export default new AuthService();