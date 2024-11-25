<script setup>
import edition from '@/services/edition';
import { useCategoryStore } from '@/stores/category';
import { useRankingStore } from '@/stores/ranking';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const rankingStore = useRankingStore();
const categoryStore = useCategoryStore();
const route = useRoute();
const router = useRouter();

const rankings = ref([]);
const categories = ref([]);

const getCategoryProjects = (categoryId) => {
  return rankings.value.filter((rank) => rank.team.project.category === categoryId).sort((a, b) => a.final_grade - b.final_grade);
};

const base64Format = (photo) => {
  if (!photo) {
    return 'https://www.portaldoholanda.com.br/sites/default/files/imagecache/portal2014_fotonoticiagrande/portaldoholanda-626973-imagem-foto-amazonas.jpg';
  } else {
    return `data:image/jpeg;base64,${photo}`;
  }
};

const goToTeam = (id) => {
  router.push({ name: 'detailsProject', params: { id: id, edition: route.params.edition } });
};

onMounted(async () => {
  await rankingStore.getEditionRankings(route.params.edition);
  await categoryStore.getEditionCategories(route.params.edition);

  rankings.value = rankingStore.rankings;
  categories.value = categoryStore.categories;
});

</script>

<template>
  <div>

    <h1 class="text-left my-12 mx-6 text-white">EQUIPES GANHADORAS</h1>
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="rank in rankings" :key="rank.id">
        <v-card class="mx-4 rounded-xl">
          <v-img class="mt-0 card-image" :src="base64Format(rank.team.project.project_photo_base64_code)" cover></v-img>
          <div class="d-flex align-center justify-end text-center position-absolute top-0 right-0 pa-2"
            style="z-index: 999;">
            {{ rank.classification }}
            <v-icon class=""
              :color="rank.classification == 1 ? 'yellow' : rank.classification == 2 ? 'white' : rank.classification == 3 ? 'brown' : 'grey'">mdi-medal</v-icon>
          </div>
          <div class="info position-absolute bottom-0 text-center d-flex flex-column align-center justify-center w-100">
            <v-card-title>{{ rank.team.name }}</v-card-title>
            <v-card-text>{{ rank.team.project.name }}</v-card-text>
            <div>
              <v-btn color="transparent" class="px-16" width="100vw" text @click="() => goToTeam(rank.team.id)">Ver
                detalhes</v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <div v-if="categories.length > 0">
    <h1 class="text-left my-12 mx-6 text-white">CATEGORIAS</h1>

    <div v-for="category in categories" :key="category.id">
      <h2 class="mt-16 mb-6 mx-6" v-if="getCategoryProjects(category.id).length > 0">{{ category.name }}</h2>
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="rank, index in getCategoryProjects(category.id)" :key="rank.id">
          <v-card class="mx-4 rounded-xl">
            <v-img class="mt-0 card-image" :src="base64Format(rank.team.project.project_photo_base64_code)"
              cover></v-img>
            <div class="d-flex align-center justify-end text-center position-absolute top-0 right-0 pa-2"
              style="z-index: 999;">
              {{ index + 1 }}
              <v-icon class=""
                :color="index + 1 == 1 ? 'yellow' : index + 1 == 2 ? 'white' : index + 1 == 3 ? 'brown' : 'grey'">mdi-medal</v-icon>
            </div>
            <div
              class="info position-absolute bottom-0 text-center d-flex flex-column align-center justify-center w-100">
              <v-card-title>{{ rank.team.name }}</v-card-title>
              <v-card-text>{{ rank.team.project.name }}</v-card-text>
              <div>
                <v-btn color="transparent" class="px-16" width="100vw" text @click="() => goToTeam(rank.team.id)">Ver
                  detalhes</v-btn>
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
