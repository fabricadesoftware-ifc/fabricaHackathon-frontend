<script setup>
import ImageComp from '@/components/registerTeams/ImageComp.vue'
import FormComp from '@/components/registerTeams/FormComp.vue';
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
    grid-template-columns: 4fr 4fr;
}
</style>