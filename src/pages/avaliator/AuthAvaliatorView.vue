<script setup>
import { ref } from 'vue';
import FormAvaliator from '@/components/avaliator/form/FormAvaliator.vue';
import ImageAvaliator from '@/components/avaliator/image/ImageAvaliator.vue';
</script>

<template>
    <main class="main-container">
        <FormAvaliator />
        <ImageAvaliator />
    </main>
</template>

<style scoped>
.main-container {
    display: flex;
    height: 100vh;
}
</style>