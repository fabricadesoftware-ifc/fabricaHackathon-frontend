<script setup>
import { onMounted, ref } from "vue";
import { useEditionStore } from "@/stores/edition";
import CardEditionHome from "../global/cards/CardEditionHome.vue";

const editionStore = useEditionStore();
const formatEditions = ref([]);

function formatEditions2() {
  formatEditions.value = [];
  for (const item of editionStore.editions) {
    formatEditions.value.push({
      year: item.year,
      description: "Você pode aprender muito mais do que imagina, participe do hackaton e veja o que pode aprender",
      route: `editions/${item.id}/`,
      img: item.edition_photo_base64,
    });
  }

  formatEditions.value = formatEditions.value
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
}

onMounted(async () => {
  await editionStore.getEditions();
  formatEditions2();
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
