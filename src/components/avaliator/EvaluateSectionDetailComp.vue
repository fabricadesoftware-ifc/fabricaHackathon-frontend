<script setup>
import edition from '@/services/edition';
import student from '@/services/student';
import { useAuthStore } from '@/stores/auth';
import { useCategoryStore } from '@/stores/category';
import { useEditionStore } from '@/stores/edition';
import { useRankingStore } from '@/stores/ranking';
import { useStudentStore } from '@/stores/student';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const rankingStore = useRankingStore();
const categoryStore = useCategoryStore();
const editionStore = useEditionStore();
const studentStore = useStudentStore();
const authStore = useAuthStore();
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

const verifyEdition = computed(() => {
  const today = new Date();
  const start_date = new Date(editionStore.edition.start_date);
  const end_date = new Date(editionStore.edition.finish_date);
  const classes = editionStore?.edition?.involved_classes;
  let isUserClass = false
  if (classes && studentStore.student.class_info?.id) {
    isUserClass = classes.some((cl) => cl?.id === studentStore.student.class_info.id);
  }
  console.log('start_date', start_date);
  console.log('end_date', end_date);
  console.log('today', today);
  console.log('isUserClass', isUserClass);
  console.log('classes', classes);
  console.log('editionStore.edition.applications_accepted', editionStore.edition.applications_accepted);
  if (editionStore.edition.applications_accepted && start_date < today && end_date > today && classes.length > 0 && isUserClass) {
    return true;
  }
  return false;
});

const goToTeam = (id) => {
  router.push({ name: 'detailsProject', params: { id: id, edition: route.params.edition } });
};

onMounted(async () => {
  await rankingStore.getEditionRankings(route.params.edition);
  await categoryStore.getEditionCategories(route.params.edition);
  await editionStore.getEdition(route.params.edition);
  await studentStore.getStudentProfile(authStore.data_user.student_profile_id);

  rankings.value = rankingStore.rankings;
  categories.value = categoryStore.categories;
});

</script>

<template>
  <div>
    <h1 class="text-left my-12 mx-6 text-white">AVALIAR EQUIPES</h1>
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="rank in rankings" :key="rank.id">
        <v-card class="mx-4 rounded-xl">
          <v-img class="mt-0 card-image" :src="base64Format(rank.team.project.project_photo_base64_code)" cover></v-img>
          <div class="info position-absolute bottom-0 text-center d-flex flex-column align-center justify-center w-100">
            <v-card-title>{{ rank.team.name }}</v-card-title>
            <v-card-text>{{ rank.team.project.name }}</v-card-text>
            <div>
              <v-btn color="transparent" class="px-16" width="100vw" text
                @click="() => goToTeam(rank.team.id)">Avaliar</v-btn>
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
