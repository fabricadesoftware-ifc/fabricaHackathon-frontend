<script setup>
import ImageComp from '@/components/team/add/ImageComp.vue'
import FormComp from '@/components/team/add/FormComp.vue';
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