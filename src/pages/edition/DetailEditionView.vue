<script setup>
import HeroDetailComp from '@/components/edition/HeroDetailComp.vue'
import NewSectionDetailComp from '@/components/edition/NewSectionDetailComp.vue'
import OnGoingSectionDetailComp from '@/components/edition/OnGoingSectionDetailComp.vue'
import { formattedDate, parseDate } from '@/composables/edition/editionUtils'
import router from '@/router'
import { useEditionStore } from '@/stores/edition'
import { computed, onMounted, ref } from 'vue'

const editionStore = useEditionStore()
const currentDate = ref(null)

const isOngoingEdition = computed(() => {
  if (!currentDate.value) return 'soon'

  const now = parseDate(formattedDate(currentDate.value))
  const start = parseDate(formattedDate(editionStore.edition.start_date))
  const finish = parseDate(formattedDate(editionStore.edition.finish_date))

  if (now < start) {
    return 'soon'
  } else if (now > finish) {
    return 'past'
  } else {
    return 'now'
  }
})

onMounted(async () => {
  await editionStore.getEdition(router.currentRoute.value.params.edition)
  currentDate.value = new Date()
})
</script>

<template>
  <main>
    <HeroDetailComp />
    <NewSectionDetailComp v-if="isOngoingEdition == 'past'" />
    <OnGoingSectionDetailComp v-if="isOngoingEdition == 'now'" />
    <div v-if="isOngoingEdition == 'soon'" class="text-center">
      <h1>EM BREVE</h1>
    </div>
  </main>
</template>

<style scoped></style>
