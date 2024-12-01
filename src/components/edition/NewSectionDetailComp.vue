<script setup>
import { useAuthStore } from '@/stores/auth'
import { useCategoryStore } from '@/stores/category'
import { useEditionStore } from '@/stores/edition'
import { useRankingStore } from '@/stores/ranking'
import { useStudentStore } from '@/stores/student'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const rankingStore = useRankingStore()
const categoryStore = useCategoryStore()
const editionStore = useEditionStore()
const studentStore = useStudentStore()
const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()

const rankings = ref([])
const categories = ref([])

const getCategoryProjects = (categoryId) => {
  return rankings.value
    .filter((rank) => rank.team.project.category === categoryId)
    .sort((a, b) => a.final_grade - b.final_grade)
}

const base64Format = (photo) => {
  if (!photo) {
    return 'https://www.portaldoholanda.com.br/sites/default/files/imagecache/portal2014_fotonoticiagrande/portaldoholanda-626973-imagem-foto-amazonas.jpg'
  } else {
    return `data:image/jpeg;base64,${photo}`
  }
}

const verifyEdition = computed(() => {
  const today = new Date()
  const start_date = new Date(editionStore.edition.start_date)
  const end_date = new Date(editionStore.edition.finish_date)
  const classes = editionStore?.edition?.involved_classes
  const isStudent = authStore.data_user.user_type === 'student'
  let isUserClass = false
  if (classes && studentStore.student.class_info?.id) {
    isUserClass = classes.some((cl) => cl?.id === studentStore.student.class_info.id)
  }
  if (
    editionStore.edition.applications_accepted &&
    start_date < today &&
    end_date > today &&
    classes.length > 0 &&
    isUserClass &&
    isStudent
  ) {
    return true
  }
  return false
})

const goToTeam = (id) => {
  router.push({ name: 'detailsProject', params: { id: id, edition: route.params.edition } })
}

onMounted(async () => {
  await rankingStore.getEditionRankings(route.params.edition)
  await categoryStore.getEditionCategories(route.params.edition)
  await editionStore.getEdition(route.params.edition)

  if (authStore.data_user.user_type === 'student') {
    await studentStore.getStudentProfile(authStore.data_user.student_profile_id)
  }

  rankings.value = rankingStore.rankings
  categories.value = categoryStore.categories
})
</script>

<template>
  <div>
    <div class="d-flex justify-center mt-16">
      <v-btn
        v-if="verifyEdition"
        color="red"
        class="mx-6 w-100 py-6 font-weight-bold text-h6 d-flex mt-16"
        @click="() => router.push({ name: 'addTeam', params: { edition: route.params.edition } })"
        variant="outlined"
        >Cadastrar Time</v-btn
      >
    </div>
    <h1 class="text-left my-12 mx-6 text-white">EQUIPES GANHADORAS</h1>
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="rank in rankings" :key="rank.id">
        <v-card class="mx-4 rounded-xl h-100">
          <v-img
            class="mt-0 card-image h-100"
            :src="base64Format(rank.team.project.project_photo_base64_code)"
            cover
          ></v-img>
          <div
            class="d-flex align-center justify-end text-center position-absolute top-0 right-0 pa-2"
            style="z-index: 999"
          >
            {{ rank.classification }}
            <v-icon
              class=""
              :color="
                rank.classification == 1
                  ? 'yellow'
                  : rank.classification == 2
                    ? 'white'
                    : rank.classification == 3
                      ? 'brown'
                      : 'grey'
              "
              >mdi-medal</v-icon
            >
          </div>
          <div
            class="info position-absolute bottom-0 text-center d-flex flex-column align-center justify-center w-100"
          >
            <v-card-title>{{ rank.team.name }}</v-card-title>
            <v-card-text>{{ rank.team.project.name }}</v-card-text>
            <div>
              <v-btn
                color="transparent"
                class="px-16"
                width="100vw"
                text
                @click="() => goToTeam(rank.team.id)"
                >Ver detalhes</v-btn
              >
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <div v-if="categories.length > 0">
    <h1 class="text-left my-12 mx-6 text-white">CATEGORIAS</h1>

    <div v-for="category in categories" :key="category.id">
      <h2 class="mt-16 mb-6 mx-6" v-if="getCategoryProjects(category.id).length > 0">
        {{ category.name }}
      </h2>
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
          v-for="(rank, index) in getCategoryProjects(category.id)"
          :key="rank.id"
        >
          <v-card class="mx-4 rounded-xl h-100">
            <v-img
              class="mt-0 card-image h-100"
              :src="base64Format(rank.team.project.project_photo_base64_code)"
              cover
            ></v-img>
            <div
              class="d-flex align-center justify-end text-center position-absolute top-0 right-0 pa-2"
              style="z-index: 999"
            >
              {{ index + 1 }}
              <v-icon
                class=""
                :color="
                  index + 1 == 1
                    ? 'yellow'
                    : index + 1 == 2
                      ? 'white'
                      : index + 1 == 3
                        ? 'brown'
                        : 'grey'
                "
                >mdi-medal</v-icon
              >
            </div>
            <div
              class="info position-absolute bottom-0 text-center d-flex flex-column align-center justify-center w-100"
            >
              <v-card-title>{{ rank.team.name }}</v-card-title>
              <v-card-text>{{ rank.team.project.name }}</v-card-text>
              <div>
                <v-btn
                  color="transparent"
                  class="px-16"
                  width="100vw"
                  text
                  @click="() => goToTeam(rank.team.id)"
                  >Ver detalhes</v-btn
                >
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.card-image {
  filter: brightness(50%);
}
</style>
