import { defineStore } from 'pinia'
import { ref } from 'vue'
import ProjectService from '@/services/project'
import { useImageStore } from './image'

export const useProjectStore = defineStore('project', () => {
  const projects = ref([])
  const project = ref([])
  const projectsByEdition = ref([])
  const imageStore = useImageStore()

  const getProjects = async () => {
    try {
      const data = await ProjectService.getProjects()
      projects.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const getProject = async (id) => {
    try {
      const data = await ProjectService.getProject(id)
      project.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const getProjectByEdition = async (editionId) => {
    try {
      const data = await ProjectService.getProjectByEdition(editionId)
      projectsByEdition.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const createProject = async (project) => {
    try {
      let newProject = {
        ...project,
        team_id: Number(project.team_id)
      }
      if (project.photo_file) {
        const formData = new FormData()
        formData.append('file', project.photo_file)
        formData.append('description', project.name)
        const image = await imageStore.postImage(formData)
        newProject.photo = image.attachment_key
      }
      const data = await ProjectService.createProject(newProject)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const updateProject = async (project) => {
    try {
      const data = await ProjectService.updateProject(project)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const deleteProject = async (id) => {
    try {
      const data = await ProjectService.deleteCategory(id)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    projects,
    project,
    projectsByEdition,
    getProjects,
    getProject,
    getProjectByEdition,
    createProject,
    updateProject,
    deleteProject
  }
})
