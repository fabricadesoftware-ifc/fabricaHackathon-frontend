<script setup>
import HeroDetailComp from '@/components/edition/HeroDetailComp.vue';
import NewSectionDetailComp from '@/components/edition/NewSectionDetailComp.vue';
import OnGoingSectionDetailComp from '@/components/edition/OnGoingSectionDetailComp.vue';
import router from '@/router';
import { useEditionStore } from '@/stores/edition';
import { computed, onMounted } from 'vue';

const editionStore = useEditionStore()

const isOngoingEdition = computed(() => {
  const now = new Date()
  if (editionStore.edition.finish_date < now) {
    return false
  } else {
    return true
  }
})

onMounted(async () => {
  await editionStore.getEdition(router.currentRoute.value.params.edition)
})

</script>

<template>
  <main>
    <HeroDetailComp />
    <NewSectionDetailComp v-if="!isOngoingEdition" />
    <OnGoingSectionDetailComp v-else />

  </main>
</template>

<style scoped></style>
