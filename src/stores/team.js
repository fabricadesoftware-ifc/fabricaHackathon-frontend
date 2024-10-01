import { defineStore } from 'pinia';
import { ref } from 'vue';
import teamService from '@/services/team';

export const useTeamStore = defineStore('team', () => {
    const teams = ref([]);
    const team = ref({});
    const newTeam = ref([]);

    const getTeams = async () => {
        try {
            const data = await teamService.getTeams();
            teams.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const getTeam = async (id) => {
        try {
            const data = await teamService.getTeam(id);
            team.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const createTeam = async (team) => {
        try {
            const data = await teamService.createTeam(team);
            newTeam.value = data;
        } catch(error) {
            console.error(error);
        }
    };
    const updateTeam = async (team) => {
        try {
            await teamService.updateTeam(team);
            getTeam(team.id);
        } catch(error) {
            console.error(error);
        }
    };
    const deleteTeam = async (id) => {
        try {
            await teamService.deleteTeam(id);
            return true;
        } catch(error) {
            console.error(error);
        }
    };

    return {teams, team, newTeam, getTeams, getTeam, createTeam, updateTeam, deleteTeam};
});