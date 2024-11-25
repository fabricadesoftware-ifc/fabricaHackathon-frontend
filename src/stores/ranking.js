import { defineStore } from 'pinia'
import { ref } from 'vue'
import RankingService from '@/services/ranking'

export const useRankingStore = defineStore('ranking', () => {
  const rankings = ref([])
  const ranking = ref({})

  const getRankings = async () => {
    try {
      const data = await RankingService.getRankings()
      rankings.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const getEditionRankings = async (editionId) => {
    try {
      const data = await RankingService.getEditionRankings(editionId)
      rankings.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const getRanking = async (id) => {
    try {
      const data = await RankingService.getRanking(id)
      ranking.value = data
    } catch (error) {
      console.error(error)
    }
  }

  const createRanking = async (ranking) => {
    try {
      const data = await RankingService.createRanking(ranking)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const updateRanking = async (ranking) => {
    try {
      const data = await RankingService.updateRanking(ranking)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const deleteRanking = async (id) => {
    try {
      const data = await RankingService.deleteRanking(id)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    rankings,
    ranking,
    getRankings,
    getRanking,
    createRanking,
    updateRanking,
    deleteRanking,
    getEditionRankings
  }
})
