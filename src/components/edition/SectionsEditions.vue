<script setup>
import { ref, onMounted, computed } from 'vue'
import { useEditionStore } from '@/stores/edition'
import { useClassInfoStore } from '@/stores/classInfo'
import CardEdition from '../global/card/CardEdition.vue'
import ArrowTopRight from 'vue-material-design-icons/ArrowTopRight.vue'

import { prepareEditions } from '@/composables/edition/editionUtils'

const editionsStore = useEditionStore()
const classInfoStore = useClassInfoStore()

const years = ref([])
const editionsByYear = ref({})
const displayedYearsCount = ref(3)
const showMore = ref(false)

const populateEditionsByYear = (editions) => {
  editions.forEach((edition) => {
    const year = edition.year
    if (!editionsByYear.value[year]) {
      editionsByYear.value[year] = []
      years.value.push(year)
    }
    editionsByYear.value[year].push(edition)
  })

  years.value.sort((a, b) => b - a)
}

onMounted(async () => {
  await editionsStore.getEditions()
  await classInfoStore.getClassesInfo()

  const editions = prepareEditions(editionsStore.editions, classInfoStore.classesInfo)
  populateEditionsByYear(editions)
})

const filteredYears = computed(() => {
  return showMore.value ? years.value : years.value.slice(0, displayedYearsCount.value)
})

const toggleShowMore = () => {
  showMore.value = !showMore.value
}
</script>

<template>
  <section>
    <div class="container">
      <article v-for="year in filteredYears" :key="year">
        <h2>/{{ year }}</h2>
        <div class="cards">
          <CardEdition
            v-for="edition in editionsByYear[year]"
            :key="edition.title + edition.year"
            :object="edition"
          />
        </div>
      </article>
      <button @click="toggleShowMore">
        {{ showMore ? 'VER MENOS' : 'VER MAIS' }}
        <span class="roundSpan">
          <ArrowTopRight size="20" />
        </span>
      </button>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  background: radial-gradient(
    97.57% 210.75% at 0.9% 2.98%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 3rem 0;
}

.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

button {
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 50px;
  position: relative;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  width: 145px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  padding: 1.5px;
  background: linear-gradient(
    114.55deg,
    rgba(255, 255, 255, 0.9) 2.13%,
    rgba(255, 255, 255, 0) 98.14%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
}

.roundSpan {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  border-radius: 50%;
  font-size: 0.5rem;
  color: white;
  background: transparent;
  border: 1px solid transparent;
  position: absolute;
  top: 50%;
  right: 0.4rem;
  transform: translateY(-50%);
  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.roundSpan::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  padding: 1px;
  background: linear-gradient(
    114.55deg,
    rgba(255, 255, 255, 0.9) 2.13%,
    rgba(255, 255, 255, 0) 98.14%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
}

button:hover > .roundSpan {
  background: white !important;
  color: black !important;
}

article {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cards {
  display: flex;
  width: 100%;
  gap: 4rem;
  height: 60vh;
}

h2 {
  font-size: 2rem;
  color: #ffffff;
  font-weight: 400;
}

.arrow-top-right-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
