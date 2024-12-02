<script setup>
import { onMounted, ref } from 'vue'
import { prepareEditions } from '@/composables/edition/editionUtils'
import { useEditionStore } from '@/stores/edition'
import { useClassInfoStore } from '@/stores/classInfo'
import CardEditionHome from '../global/card/CardEditionHome.vue'

const editionStore = useEditionStore()
const classesInfoStore = useClassInfoStore()
const formatEditions = ref([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  await editionStore.getEditions()
  await classesInfoStore.getClassesInfo()
  formatEditions.value = prepareEditions(editionStore.editions, classesInfoStore.classesInfo).slice(
    0,
    3
  )
  loading.value = false
})
</script>

<template>
  <article class="cardsComp">
    <v-container v-if="loading" class="d-flex align-center justify-center">
      <v-skeleton-loader type="card" v-for="i in 3" :key="i" class="w-100 h-100" />
    </v-container>
    <CardEditionHome v-for="edition in formatEditions" :key="edition.year" :object="edition" />
  </article>
</template>

<style scoped>
.cardsComp {
  width: 100%;
  display: flex;
  gap: 2rem;
  height: 50vh;
}

.cardsComp > * {
  flex: 1;
  transition: flex-grow 0.3s ease-in-out;
}

.cardsComp > *:hover {
  flex-grow: 1.5;
}
</style>
