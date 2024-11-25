import { api } from '@/plugins/axios'
import { useToast } from 'vue-toastification'

const toast = useToast()

class StudentService {
  async getAvailableStudentsByClass(editionId, classId) {
    const { data } = await api.get(`/available-students/edition/${editionId}?class_info=${classId}`)
    return data
  }

  async getStudentProfile(id) {
    const { data } = await api.get(`/student-profiles/${id}`)
    return data
  }

  async createStudent(student) {
    try {
      const { data } = await api.post('/students/', student)
      toast.success('Estudante criado com sucesso!')
      return data
    } catch {
      toast.error(
        'Impossível criar estudante! Verique suas credenciais, e se todos os campos foram preenchidos corretamente ou tente mais tarde.'
      )
    }
  }

  async updateStudent(student) {
    try {
      const { data } = await api.patch(`/students/${student.id}/`, student)
      toast.info('Estudante editado com sucesso!')
      return data
    } catch {
      toast.error(
        'Impossível editar estudante! Verique suas credenciais, e se todos os campos foram editados corretamente ou tente mais tarde.'
      )
    }
  }

  async updateStudentProfile(student) {
    try {
      const { data } = await api.patch(`/student-profiles/${student.id}/`, student)
      toast.info('Dados do estudante editados com sucesso!')
      return data
    } catch {
      toast.error(
        'Impossível editar dados do estudante! Verique suas credenciais, e se todos os campos foram editados corretamente ou tente mais tarde.'
      )
    }
  }

  async deleteStudent(id) {
    try {
      const { data } = await api.delete(`/students/${id}/`)
      toast.info('Estudante deletado com sucesso!')
      return data
    } catch {
      toast.error(
        'Impossível deletar estudante! Verique suas credenciais, e se ele realmente existe ou tente mais tarde.'
      )
    }
  }
}

export default new StudentService()
