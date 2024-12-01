<script setup>
import { reactive, onMounted, computed } from 'vue'
import { useTeamStore } from '@/stores/team'
import { useProjectStore } from '@/stores/project'
import { useRoute } from 'vue-router'
import OrangeButton from '@/components/global/button/OrangeButton.vue'
import router from '@/router'
import { useToast } from 'vue-toastification'
import { useCategoryStore } from '@/stores/category'

const toast = useToast()

const teamStore = useTeamStore()
const projectStore = useProjectStore()
const categoryStore = useCategoryStore()

const route = useRoute()

const dataProject = reactive({
  name: '',
  description: '',
  deploy_link: '',
  repository_link: '',
  photo_file: null,
  team_id: null,
  category: null
})

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    dataProject.photo_file = file
  }
}

const createProject = async () => {
  const formData = new FormData()
  formData.append('name', dataProject.name)
  formData.append('description', dataProject.description)
  formData.append('deploy_link', dataProject.deploy_link)
  formData.append('repository_link', dataProject.repository_link)
  formData.append('category', dataProject.category)
  formData.append('team_id', Number(dataProject.team_id))

  if (dataProject.photo_file) {
    formData.append('photo_file', dataProject.photo_file)
  }

  await projectStore.createProject(formData)

  toast.success('Projeto adicionado com sucesso!')

  router.push({
    name: 'detailsProject',
    params: {
      edition: router.currentRoute.value.params.edition,
      id: dataProject.team_id
    }
  })
}

const categories = computed(() => {
  return categoryStore.categories.map((category) => {
    return {
      title: category.name,
      value: category.id
    }
  })
})

onMounted(async () => {
  const teamData = await teamStore.getTeamByStudent(route.params.edition)
  await categoryStore.getEditionCategories(route.params.edition)
  if (teamData[0].project != null) {
    router.push('/home')
    toast.warning('Você já possui um projeto cadastrado')
  } else {
    dataProject.team_id = teamData[0].id
  }
})
</script>

<template>
  <section>
    <router-link to="/home" class="logo">
      <img src="/public/logoHackaton.png" alt="teams" />
    </router-link>
    <div class="form d-flex justify-center align-center">
      <h1 style="text-align: center" class="gradientOrange">Projeto</h1>
      <form @submit.prevent="">
        <v-text-field variant="outlined" v-model="dataProject.name" label="Nome do Projeto" />
        <v-select
          v-model="dataProject.category"
          :items="categories"
          label="Categoria"
          variant="outlined"
        />
        <v-text-field variant="outlined" v-model="dataProject.deploy_link" label="Deploy Link" />
        <v-text-field
          variant="outlined"
          v-model="dataProject.repository_link"
          label="Repository Link"
        />
        <v-text-field
          variant="outlined"
          v-model="dataProject.description"
          label="Descrição do Projeto"
        />
        <div class="send">
          <v-file-input
            @change="handleFileChange"
            label="Imagem do Projeto"
            class="w-100 col-12 col-md-6"
            variant="outlined"
            :min-width="200"
          />
          <div class="a" style="width: 100%">
            <OrangeButton label="Enviar" @click="createProject(dataProject)" />
          </div>
        </div>
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

.logo > img {
  margin: 20px 50px 0 0;
  width: 25%;
}

.form {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.send {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 1rem;
}

.send .v-file-input,
.send .a {
  width: 100%;
}

.send .a {
  display: flex;
  justify-content: flex-start;
}
</style>
