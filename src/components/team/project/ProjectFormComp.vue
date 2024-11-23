<script setup>
import { onMounted, ref } from 'vue'
import { useTeamStore } from '@/stores/team'
import { useAuthStore } from '@/stores/auth'
import { useImageStore } from '@/stores/image'
import { useRoute } from 'vue-router'
import GradientInput from '@/components/global/input/GradientInput.vue'
import OrangeButton from '@/components/global/button/OrangeButton.vue'

const teamStore = useTeamStore()
const authStore = useAuthStore()
const imageStore = useImageStore()

const route = useRoute()

const currentTeam = ref(null)

function findTeamByStudentIdAndEdition(studentId, editionId) {
  return teamStore.teams.find(team =>
    team.edition === editionId && team.students.includes(studentId)
  )
}

const dados = ref({
  name: '',
  description: '',
  deploy_link: '',
  repository_link: '',
  project_photo_base64: ''
})

const updateProject = async () => {
  const newData = {
    id: dados.value.id,
    name: dados.value.name,
    description: dados.value.description,
    deploy_link: dados.value.deploy_link,
    repository_link: dados.value.repository_link,
    photo: dados.value.project_photo_base64
  }
  if (typeof dados.value.project_photo_base64 == `string` || typeof dados.value.project_photo_base64 == `number`) {
    newData.photo = null
  } else {
    const formData = new FormData()
    formData.append('photo', dados.value.project_photo_base64)
    console.log(formData.photo)
    const photo = await imageStore.postImage(formData)
    newData.photo = photo.id
  }
  await teamStore.updateProject(newData)
}

onMounted(async () => {
  const studentTeam = await teamStore.getTeamByStudent(route.params.edition)
  dados.value = studentTeam[0].project
  console.log(dados.value)

  const editionId = parseInt(route.params.edition)

  currentTeam.value = findTeamByStudentIdAndEdition(authStore.student_profile_data.id, editionId)

})

</script>

<template>
  <section>
    <router-link to="/home" class="logo">
      <img src="/public/logoHackaton.png" alt="teams" />
    </router-link>
    <div class="form d-flex justify-center align-center">
      <h1 style="text-align: center" class="gradientOrange">Projeto</h1>
      <form @submit.prevent>
        <GradientInput v-model:text="dados.name" label="Nome do Projeto" />
        <GradientInput v-model:text="dados.description" label="Descrição do Projeto" />
        <GradientInput v-model:text="dados.deploy_link" label="Deploy Link" />
        <GradientInput v-model:text="dados.repository_link" label="Repository Link" />
        <v-file-input v-model="dados.project_photo_base64" label="Imagem do Projeto" class="w-100" variant="outlined" />
        <OrangeButton label="Enviar" @click="updateProject" />
      </form>
    </div>
  </section>
</template>

<style scoped>
.position1 {
  grid-column: 2;
  align-self: center;
  justify-self: center;
}

section {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.logo {
  width: 100%;
  display: flex;
  justify-content: end;
}

.logo>img {
  margin: 50px 50px 0 0;
  width: 20%;
}

.form {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
