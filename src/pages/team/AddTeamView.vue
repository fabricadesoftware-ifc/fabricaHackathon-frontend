<script setup>
import ImageComp from '@/components/team/add/ImageComp.vue'
import FormComp from '@/components/team/add/FormComp.vue'
import { onMounted } from 'vue';
import { useTeamStore } from '@/stores/team';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const teamStore = useTeamStore()
const authStore = useAuthStore()
const toast = useToast()
const router = useRouter()

onMounted(async () => {
  const teamData = await teamStore.getTeamByStudent(router.currentRoute.value.params.edition)
  if (teamData[0] != null) {
    router.push('/editions/' + router.currentRoute.value.params.edition + '/teams/' + teamData[0].id)
    toast.warning('Você já possui um time cadastrado')
  }
  if (authStore.data_user.user_type !== 'student') {
    router.push({
      name: 'yearEdition', params: {
        edition: router.currentRoute.value.params.edition,
      }
    });
  }
});

</script>

<template>
  <main>
    <FormComp />
    <ImageComp />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  display: grid;
  grid-template-columns: 4.5fr 4fr;
}
</style>
