<script setup>
import { useCursoStore } from '@/stores/cursosStore';
import { ref, onMounted } from 'vue';

const useCurso = useCursoStore()
const newCurso = {id: 1, nome: 'Informática', carga_horaria: 100, sigla: 'Info', nivel_curso: 'tecn'};
const data = ref(null);

onMounted(async () => {
    let response1 = await useCurso.deleteCurso(1);
    // let response2 = await useCurso.deleteCurso(1);

    console.log('Feito!', response1);
})
</script>

<template>
    <div>Home</div>
</template>

<style scoped>
</style>
