<script setup>
import { useApoiadorStore } from '@/stores/apoiadoresStore';
import { onMounted } from 'vue';

const useApoiador = useApoiadorStore()
const newApoiador = {id: 1, empresa: 'LATAM', link: 'https://www.latamairlines.com/br/pt'};

onMounted(async () => {
    // let response1 = await useApoiador.updateApoiador(newApoiador);
    // let response2 = await useApoiador.deleteApoiador(8);

    console.log('Feito!', response2);
})
</script>

<template>
    <div>Home</div>
</template>

<style scoped>
</style>
