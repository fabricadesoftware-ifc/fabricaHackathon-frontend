<script setup>
import { useTurmaStore } from '@/stores/turmasStore';
import { ref, onMounted } from 'vue';

const useTurma = useTurmaStore()
const createTurma = {nome: '2INFO3', curso: 1}
const data = ref(null);

onMounted(async () => {
    let response1 = await useTurma.createTurma(createTurma);
    let response2 = await useTurma.getTurmas();

    console.log('Feito!');
})
</script>

<template>
    <div>Home</div>
</template>

<style scoped>
</style>
