<script setup>
import getImage from '@/composables/image'
import { useEditionStore } from '@/stores/edition'
import { useTeamStore } from '@/stores/team'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const editionStore = useEditionStore()
const teamStore = useTeamStore()
const route = useRoute()
const router = useRouter()

const teams = ref([])

const goToTeam = (id) => {
  router.push({ name: 'evaluateTeam', params: { id: id, edition: route.params.edition } })
}

onMounted(async () => {
  await editionStore.getEdition(route.params.edition)
  await teamStore.getTeamsByEdition(route.params.edition)
  teams.value = teamStore.teams
})
</script>

<template>
  <div>
    <h1 class="text-left my-12 mx-6 text-white">AVALIAR EQUIPES</h1>
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="team in teams" :key="team.id">
        <v-card class="mx-4 rounded-xl h-100">
          <v-img
            class="mt-0 card-image h-100"
            :src="getImage(team?.project?.photo?.url)"
            lazy-src="https://img.freepik.com/vetores-premium/geometrico-minimo-criativo-com-papel-de-parede-de-fundo-de-cor-branca-e-cinza-abstrato-de-formas-dinamicas_176697-503.jpg?semt=ais_hybrid"
            cover
          ></v-img>
          <div
            class="info position-absolute bottom-0 text-center d-flex flex-column align-center justify-center w-100"
          >
            <v-card-title>{{ team.name }}</v-card-title>
            <v-card-text>{{ team.project.name }}</v-card-text>
            <div>
              <v-btn
                color="transparent"
                class="px-16"
                width="100vw"
                text
                @click="() => goToTeam(team.id)"
                >AVALIAR</v-btn
              >
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.card-image {
  filter: brightness(50%);
}
</style>
