import { defineStore } from 'pinia'
import imageService from '@/services/image'

export const useImageStore = defineStore('image', () => {
  const postImage = async (image) => {
    try {
      const data = await imageService.postImage(image)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    postImage
  }
})
