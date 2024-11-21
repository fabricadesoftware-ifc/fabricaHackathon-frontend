import { api } from '@/plugins/axios'
import { useToast } from 'vue-toastification';

const toast = useToast()

class ProjectService {
  async getProjects() {
    try {
        const { data } = await api.get('/projects/')
        return data;
    }
    catch {
        toast.error("Impossível verificar projetos! Verique suas credenciais ou tente mais tarde.")
    }
  }


  async getProject(id) {
    try {
        const { data } = await api.get(`/projects/${id}/`)
        return data;
    }
    catch {
        toast.error("Impossível verificar projeto! Verique suas credenciais ou tente mais tarde.")
    }
  }

  async getProjectByEdition(editionId) {
    try {
        const { data } = await api.get(`/projects?edition_id=${editionId}`)
        return data;
    }
    catch {
        toast.error("Impossível verificar projetos! Verique suas credenciais ou tente mais tarde.")
    }
  }

  async createProject(project) {
    try {
        const { data } = await api.post('/projects/', project)
        toast.success("Projeto criado com sucesso!")
        return data;
    }
    catch {
        toast.error("Impossível criar projeto! Verique suas credenciais, e se todos os campos foram preenchidos corretamente ou tente mais tarde.")
    }
  }

  async updateProject(project) {
    try {
        const { data } = await api.patch(`/projects/${project.id}/`, project)
        toast.info("Projeto editado com sucesso!")
        return data;
    }
    catch {
        toast.error("Impossível editar projeto! Verique suas credenciais, e se todos os campos foram editados corretamente ou tente mais tarde.")
    }
  }

  async deleteProject(id) {
    try {
        const { data } = await api.delete(`/projects/${id}/`)
        toast.info("Projeto deletado com sucesso!")
        return data;
    }
    catch {
        toast.error("Impossível deletar projeto! Verique suas credenciais, e se ele realmente existe ou tente mais tarde.")
    }
  }
}

export default new ProjectService()