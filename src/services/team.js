import { api } from '@/plugins/axios'
import { useToast } from 'vue-toastification'

const toast = useToast()

class TeamService {
  async getTeams() {
    const { data } = await api.get('/teams/')
    return data
  }

  async getTeam(id) {
    const { data } = await api.get(`/teams/${id}/`)
    return data
  }

  async createTeam(team) {
    try {
      console.log(team)
      const { data } = await api.post('/teams/', team)
      toast.success('Equipe criada com sucesso!')
      return data
    } catch (error) {
      toast.error(
        'Impossível criar equipe! Verique suas credenciais, e se todos os campos foram preenchidos corretamente ou tente mais tarde.'
      )
      console.log(error.response)
    }
  }

  async updateTeam(team) {
    try {
      const { data } = await api.patch(`/teams/${team.id}/`, team)
      toast.info('Equipe editada com sucesso!')
      return data
    } catch {
      toast.error(
        'Impossível editar equipe! Verique suas credenciais, e se todos os campos foram editados corretamente ou tente mais tarde.'
      )
    }
  }

  async updateProject(project) {
    try {
      const { data } = await api.patch(`/projects/${project.id}/`, project)
      toast.info('Projeto editado com sucesso!')
      return data
    } catch (e) {
      console.log(e.response.data)
      toast.error(
        'Impossível editar projeto! Verique suas credenciais, e se todos os campos foram editados corretamente ou tente mais tarde.'
      )
    }
  }

  async deleteTeam(id) {
    try {
      const { data } = await api.delete(`/teams/${id}/`)
      toast.info('Equipe deletada com sucesso!')
      return data
    } catch {
      toast.error(
        'Impossível deletar equipe! Verique suas credenciais, e se ela realmente existe ou tente mais tarde.'
      )
    }
  }

  async getTeamByStudent(student_id, edition_id) {
    const { data } = await api.get(`/teams/?student_id=${student_id}&edition_id=${edition_id}`)
    return data
  }

  async getTeamsByEdition(editionId) {
    const { data } = await api.get(`/teams/?edition_id=${editionId}`)
    return data
  }
}

export default new TeamService()
