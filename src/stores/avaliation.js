import { defineStore } from 'pinia'
import { ref } from 'vue'
import avaliationService from '@/services/avaliation'

export const useAvaliationStore = defineStore('avaliation', () => {
  const avaliations = ref([])
  const avaliation = ref([])
  const newAvaliation = ref([])

  const getAvaliations = async () => {
    try {
      const data = await avaliationService.getAvaliations()
      avaliations.value = data
    } catch (error) {
      console.error(error)
    }
  }
  const getAvaliation = async (id) => {
    try {
      const data = await avaliationService.getAvaliation(id)
      avaliation.value = data
    } catch (error) {
      console.error(error)
    }
  }
  const createAvaliation = async (avaliation) => {
    try {
      const data = await avaliationService.createAvaliation(avaliation)
      newAvaliation.value = data
    } catch (error) {
      console.error(error)
    }
  }
  const updateAvaliation = async (avaliation) => {
    try {
      await avaliationService.updateAvaliation(avaliation)
      getAvaliation(avaliation.id)
    } catch (error) {
      console.error(error)
    }
  }
  const deleteAvaliation = async (id) => {
    try {
      await avaliationService.deleteAvaliation(id)
      return true
    } catch (error) {
      console.error(error)
    }
  }

  const insertAllAvaliations = async (data_avaliations) => {
    console.log(data_avaliations)
    try {
      for (const item of data_avaliations) {
        console.log(item + "item ai")
        const response = await avaliationService.createAvaliation(item)
        console.log(response)
      }
    } catch (error) {
      console.error(error)
    } finally {
      console.log('Inserting all avaliations')
    }
  }

  return {
    avaliations,
    avaliation,
    newAvaliation,
    getAvaliations,
    getAvaliation,
    createAvaliation,
    updateAvaliation,
    deleteAvaliation,
    insertAllAvaliations
  }
})
