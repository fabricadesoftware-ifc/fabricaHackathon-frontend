import { api } from '@/plugins/axios'

class ImageService {
  async postImage(image) {
    try {
      const { data } = await api.post('/media/images/', image)
      return data
    } catch (error) {
      console.error(error)
    }
  }
}

export default new ImageService()
