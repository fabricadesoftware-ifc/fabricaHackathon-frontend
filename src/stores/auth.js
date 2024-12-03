import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { useStudentStore } from './student'
import authService from '@/services/auth'
import VueJwtDecode from 'vue-jwt-decode'

export const useAuthStore = defineStore('auth', () => {
  const isLogged = useStorage('isLogged', false, sessionStorage)
  const token = useStorage('token', {}, sessionStorage)
  const data_user = useStorage('data_user', {}, sessionStorage)
  const student_profile_data = useStorage('student_profile', {}, sessionStorage)
  const resetPasswordToken = useStorage('resetPasswordToken', '', sessionStorage)
  const user = reactive({
    email: '',
    password: ''
  })

  const router = useRouter()

  const createAuthentication = async (avaliator) => {
    try {
      const studentsStore = useStudentStore()
      await studentsStore.getStudentProfile()

      const data = await authService.createAuthentication(avaliator)
      token.value = data

      const decodedToken = VueJwtDecode.decode(token.value.access)
      data_user.value = decodedToken

      if (data_user.value.student_profile_id) {
        const matchingProfile = studentsStore.studentProfiles.find(
          (profile) => profile.id === data_user.value.student_profile_id
        )
        if (matchingProfile) {
          student_profile_data.value = matchingProfile
        } else {
          console.warn('Perfil de estudante não encontrado')
        }
      } else {
        console.warn('Nenhum student_profile.id encontrado')
      }

      isLogged.value = true
      router.push('/home')
    } catch (error) {
      console.error('Erro:', error)
    }
  }

  const updateUser = async (user) => {
    try {
      const data = await authService.updateUser(user)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const logout = () => {
    isLogged.value = false
    token.value = {}
    data_user.value = {}
    student_profile_data.value = {}
    router.push('/auth')
  }

  const sendForgetPasswordEmail = async (email) => {
    try {
      const data = await authService.sendForgetPasswordEmail(email)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const verifyToken = async (token) => {
    try {
      const data = await authService.verifyToken(token)
      resetPasswordToken.value = token
      return data
    } catch (error) {
      console.error(error)
    }
  }

  const resetPassword = async (password) => {
    try {
      console.log(resetPasswordToken.value)
      const response = await authService.resetPassword({
        new_password: password,
        token: resetPasswordToken.value
      })
      return response
    } catch (error) {
      console.error(error)
    }
  }

  return {
    isLogged,
    token,
    user,
    data_user,
    student_profile_data,
    createAuthentication,
    updateUser,
    logout,
    sendForgetPasswordEmail,
    verifyToken,
    resetPassword
  }
})
