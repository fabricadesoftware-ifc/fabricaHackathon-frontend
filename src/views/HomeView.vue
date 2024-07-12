<script setup>
import { useAvaliacaoStore } from '@/stores/avaliacoesStore';
import { onMounted } from 'vue';

const useAvaliacao = useAvaliacaoStore();
const newAvaliation = {avaliador: 1, equipe: 2, sigla: 1, nota: 10.0};

onMounted(async () => {
    let response1 = await useAvaliacao.createAvaliacao(newAvaliation);
    let response2 = await useAvaliacao.getAvaliacoes();

    console.log('Feito!', response1, response2);
});
</script>

<template>
    <div>Home</div>
</template>

<style scoped>
</style>
