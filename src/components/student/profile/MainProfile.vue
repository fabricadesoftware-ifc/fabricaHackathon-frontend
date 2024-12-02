<script setup>
import { ref, onMounted, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useStudentStore } from '@/stores/student'
import Github from 'vue-material-design-icons/Github.vue'
import Instagram from 'vue-material-design-icons/Instagram.vue'
import Linkedin from 'vue-material-design-icons/Linkedin.vue'
import Whatsapp from 'vue-material-design-icons/Whatsapp.vue'
import EmailOutline from 'vue-material-design-icons/EmailOutline.vue'

const isEditable = ref(false)
const authStore = useAuthStore()
const studentStore = useStudentStore()

const studentProfileCopy = computed(() => {
  return {
    id: studentStore?.student?.id,
    whatsapp: studentStore?.student?.whatsapp,
    instagram: studentStore?.student?.instagram,
    linkedin: studentStore?.student?.linkedin,
    github: studentStore?.student?.github
  }
})

const studentEmail = computed(() => {
  return {
    id: authStore.data_user.user_id,
    email: authStore.data_user.email
  }
})

const toggleEdit = () => {
  isEditable.value = !isEditable.value
}

async function saveProfile() {
  await authStore.updateUser(studentEmail.value)
  await studentStore.updateStudentProfile(studentProfileCopy.value)
  isEditable.value = !isEditable.value
}

onMounted(async () => {
  await studentStore.getStudentProfile(authStore.data_user.student_profile_id)
})
</script>

<template>
  <v-container class="d-flex align-center" height="500px">
    <v-row class="d-flex justify-center align-center">
      <v-card class="w-50 pa-6">
        <v-card-title class="mb-6">
          {{ authStore.data_user.name }}
        </v-card-title>
        <v-card-text>
          <v-row class="data_info">
            <v-col class="data1">
              <div class="d-flex ga-3 align-center">
                <span class="d-flex align-center ga-3">
                  <EmailOutline />
                </span>
                <div class="input">
                  <input
                    v-model="studentEmail.email"
                    :disabled="!isEditable"
                    class="editable pa-2"
                    type="email"
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div class="d-flex align-center ga-3">
                <span class="d-flex align-center ga-3">
                  <Whatsapp />
                </span>
                <div class="input">
                  <input
                    v-model="studentProfileCopy.whatsapp"
                    :disabled="!isEditable"
                    class="editable pa-2"
                    type="number"
                    placeholder="Whatsapp"
                  />
                </div>
              </div>
              <div class="d-flex align-center ga-3">
                <span class="d-flex align-center ga-3">
                  <Instagram />
                </span>
                <div class="input">
                  <input
                    v-model="studentProfileCopy.instagram"
                    :disabled="!isEditable"
                    class="editable pa-2"
                    type="text"
                    placeholder="Instagram"
                  />
                </div>
              </div>
            </v-col>
            <v-col class="data2">
              <div class="d-flex align-center ga-3">
                <span class="d-flex align-center ga-3">
                  <Linkedin />
                </span>
                <div class="input">
                  <input
                    v-model="studentProfileCopy.linkedin"
                    :disabled="!isEditable"
                    class="editable pa-2"
                    type="text"
                    placeholder="Linkedin"
                  />
                </div>
              </div>
              <div class="d-flex align-center ga-3">
                <span class="d-flex align-center ga-3">
                  <Github />
                </span>
                <div class="input">
                  <input
                    v-model="studentProfileCopy.github"
                    :disabled="!isEditable"
                    class="editable pa-2"
                    type="text"
                    placeholder="Github"
                  />
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn v-if="!isEditable" @click="toggleEdit" color="orange" type="flat">
            <v-icon>mdi-pencil</v-icon>
            Editar
          </v-btn>
          <v-btn v-if="isEditable" @click="saveProfile" color="orange">
            <v-icon>mdi-content-save</v-icon>
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>
