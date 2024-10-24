<script setup>
import ProjectFormComp from '@/components/team/project/ProjectFormComp.vue';
import ProjectImageComp from '@/components/team/project/ProjectImageComp.vue';
</script>

<template>
  <main>
      <ProjectImageComp />
      <ProjectFormComp />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 4.5fr;
}
</style>
