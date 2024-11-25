<script setup>
import { onMounted, computed } from 'vue';
import { useTeamStore } from '@/stores/team';
import { useStudentStore } from '@/stores/student';
import router from '@/router';
import RoundButtonGradient from '@/components/global/buttons/RoundButtonGradient.vue';
import Instagram from 'vue-material-design-icons/Instagram.vue';
import Github from 'vue-material-design-icons/Github.vue';
import Linkedin from 'vue-material-design-icons/Linkedin.vue';
import project from '@/services/project';

const teamsStore = useTeamStore();
const studentsStore = useStudentStore();

const base64Format = (photo) => {
  return `data:image/jpeg;base64,${photo}`;
};

const redirectToProject = (link) => {
  if (link) {
    window.open(link, '_blank');
  } else {
    window.open("https://google.com", '_blank');
  }
};

const redirectToSocialMedia = (socialMedia) => {
  window.open(socialMedia, '_blank');
};

const associateStudentsWithProfiles = computed(() => {
  const users = teamsStore.team?.students || [];
  const studentProfiles = studentsStore.studentProfiles || [];

  return users.map(user => {
    const profile = studentProfiles.find(profile => profile.user.id === user.id);
    return {
      ...user,
      studentProfile: profile || null,
    };
  });
});

onMounted(async () => {
  await studentsStore.getStudentProfile();
  await teamsStore.getTeam(router.currentRoute.value.params.id);
});
</script>

<template>
  <div class="pa-6 d-flex flex-column ga-6">
    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="6" class="d-flex justify-center">
        <v-img :src="base64Format(teamsStore?.team?.project?.project_photo_base64_code)"
          lazy-src="https://img.freepik.com/vetores-premium/geometrico-minimo-criativo-com-papel-de-parede-de-fundo-de-cor-branca-e-cinza-abstrato-de-formas-dinamicas_176697-503.jpg?semt=ais_hybrid">
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
            </div>
          </template>
        </v-img>
      </v-col>
      <v-col cols="12" lg="6" class="d-flex flex-column">
        <h1 class="">Projeto: {{ teamsStore?.team?.project?.name }}</h1>
        <div class="pb-6">
          <p>
            {{ teamsStore?.team?.project?.description }}
          </p>
        </div>

        <v-btn @click="() => redirectToProject(teamsStore?.team?.project?.repository_link)" variant="outlined"
          class="ma-6">Acessar Repositório</v-btn>
        <v-btn @click="() => redirectToProject(teamsStore?.team?.project?.presentation_link)" variant="outlined"
          class="ma-6">Apresentação</v-btn>
      </v-col>
    </v-row>

    <h2>Integrantes</h2>
    <v-row class="d-flex justify-center w-100">
      <v-col v-for="student in associateStudentsWithProfiles" :key="student.id" cols="" lg="3">
        <v-card class="pa-4 h-100 d-flex rounded" outlined variant="outlined">
          <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <v-avatar size="100">
                <v-icon size="100">mdi-account</v-icon>
              </v-avatar>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <h3>{{ student?.user?.name }}</h3>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-row class="d-flex justify-center">
                <v-col cols="4" class="d-flex justify-center">
                  <v-btn v-if="student.studentProfile?.github" class="rounded-xl"
                    @click="() => window.open(student.studentProfile?.github, '_blank')" icon="mdi-github"
                    variant="outlined" color="white">
                  </v-btn>
                </v-col>
                <v-col cols="4" class="d-flex justify-center">
                  <v-btn v-if="student.studentProfile?.linkedin"
                    @click="window.open(student.studentProfile?.linkedin, '_blank')" icon="mdi-linkedin"
                    variant="outlined" color="blue">
                  </v-btn>
                </v-col>
                <v-col cols="4" class="d-flex justify-center">
                  <v-btn v-if="student.studentProfile?.instagram"
                    @click="window.open(student.studentProfile?.instagram, '_blank')" icon="mdi-instagram"
                    variant="outlined" color="pink">
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
