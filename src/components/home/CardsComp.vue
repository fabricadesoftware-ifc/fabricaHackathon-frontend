<script setup>
import { onMounted, ref } from "vue";
import { prepareEditions } from "@/composables/edition/editionUtils";
import { useEditionStore } from "@/stores/edition";
import { useClassInfoStore } from "@/stores/classInfo";
import CardEditionHome from "../global/card/CardEditionHome.vue";

const editionStore = useEditionStore();
const classesInfoStore = useClassInfoStore();
const formatEditions = ref([]);


onMounted(async () => {
  await editionStore.getEditions();
  await classesInfoStore.getClassesInfo();
  formatEditions.value = prepareEditions(editionStore.editions, classesInfoStore.classesInfo).slice(0, 3);
});

</script>

<template>
  <article class="cardsComp">
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

.cardsComp>* {
  flex: 1;
  transition: flex-grow 0.3s ease-in-out;
}

.cardsComp>*:hover {
  flex-grow: 1.5;
}
</style>
