import { defineStore } from 'pinia'
import { ref } from 'vue'
import teamService from '@/services/team'
import { useAuthStore } from './auth'

export const useTeamStore = defineStore('team', () => {
  const authStore = useAuthStore()
  const teams = ref([])
  const team = ref([])
  const newTeam = ref([])
  const teamsByEdition = ref([])

  const getTeams = async () => {
    try {
      const data = await teamService.getTeams()
      teams.value = data
    } catch (error) {
      console.error(error)
    }
  }
  const getTeam = async (id) => {
    try {
      const data = await teamService.getTeam(id)
      team.value = data
    } catch (error) {
      console.error(error)
    }
  }
  const createTeam = async (team) => {
    try {
      const data = await teamService.createTeam({
        ...team,
        edition: Number(team.edition)
      })
      newTeam.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const updateProject = async (project) => {
    try {
      console.log(project)
      await teamService.updateProject(project)
    } catch (error) {
      console.error(error)
    }
  }

  const updateTeam = async (team) => {
    try {
      console.log(team)
      await teamService.updateTeam(team)
      getTeam(team.id)
    } catch (error) {
      console.error(error)
    }
  }
  const deleteTeam = async (id) => {
    try {
      await teamService.deleteTeam(id)
      return true
    } catch (error) {
      console.error(error)
    }
  }

  const getTeamByStudent = async (edition_id) => {
    try {
      const student_id = authStore.data_user.student_profile_id
      const data = await teamService.getTeamByStudent(student_id, Number(edition_id))
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const getTeamsByEdition = async (editionId) => {
    try {
      const data = teams.value.filter((team) => team.editionId === editionId)
      teamsByEdition.value = data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    teams,
    team,
    newTeam,
    getTeams,
    getTeam,
    createTeam,
    updateTeam,
    deleteTeam,
    getTeamByStudent,
    updateProject,
    getTeamsByEdition
  }
})
