<script setup>
import { ref } from 'vue'
import FormAvaliator from '@/components/avaliator/form/FormAvaliator.vue'
import ImageComp from '@/components/team/add/ImageComp.vue'
</script>

<template>
  <main class="main-container">
    <FormAvaliator />
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
