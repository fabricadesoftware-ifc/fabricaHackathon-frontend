<script setup>
import { ref, onMounted } from 'vue';
import { useTurmaStore } from '@/stores/turmasStore';

const data = ref(null)
const turmaStore = useTurmaStore()

onMounted(async() => {
    // let response3 = turmaStore.deleteTurma(1)
    // let response2 = turmaStore.createTurma({nome: '2INFO2', curso: 1})
    let response = turmaStore.getTurmas();

    data.value = response;
})
</script>

<template>
    <div>Home</div>
</template>

<style scoped>
</style>
