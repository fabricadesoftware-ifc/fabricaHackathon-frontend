import { api } from '@/plugins/axios';

class TeamService {
    async getTeams() {
        const { data } = await api.get('/teams/');
        return data;
    }
    async getTeam(id) {
        const { data } = await api.get(`/teams/${id}/`);
        return data;
    }
    async createTeam(team) {
        const { data } = await api.post('/teams/', team);
        return data;
    }
    async updateTeam(team) {
        const { data } = await api.patch(`/teams/${team.id}/`, team);
        return data;
    }
    async deleteTeam(id) {
        const { data } = await api.delete(`/teams/${id}/`);
        return data;
    }
}

export default new TeamService();