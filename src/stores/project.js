import { defineStore } from 'pinia'
import { ref } from 'vue'
import projectService from '@/services/project'

export const useProjectStore = defineStore('project', () => {
  const projects = ref([])
  const project = ref([])
  const newProject = ref([])

  const getProjects = async () => {
    try {
      const data = await projectService.getProjects()
      projects.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const createProject = async (project) => {
    try {
      const data = await projectService.createProject(project)
      newProject.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const updateProject = async (project) => {
    try {
      await projectService.updateProject(project)
    } catch (error) {
      console.error(error)
    }
  }

  const deleteProject = async (id) => {
    try {
      await projectService.deleteProject(id)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    projects,
    project,
    newProject,
    createProject,
    updateProject,
    deleteProject,
    getProjects
  }
})
