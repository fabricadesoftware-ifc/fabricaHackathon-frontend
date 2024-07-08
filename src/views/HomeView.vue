<script setup>
import { useCursoStore } from '@/stores/cursosStore';
import { ref, onMounted } from 'vue';

const useCurso = useCursoStore()
const newCurso = {id: 3, nome: 'Agropecuária', carga_horaria: 500, sigla: 'Agro', nivel_curso: 'tecn'};
const data = ref(null);

onMounted(async () => {
    let response1 = await useCurso.updateCurso(newCurso);
    // let response2 = await useCurso.deleteCurso(1);

    console.log('Feito!', response1);
})
</script>

<template>
    <div>Home</div>
</template>

<style scoped>
</style>
