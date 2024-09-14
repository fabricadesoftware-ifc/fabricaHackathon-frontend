<script setup>
import { reactive } from 'vue';
import CardEditionHome from '../global/cards/CardEditionHome.vue';

const info = reactive({
    title: "NÃO HÁ MANEIRA MELHOR DE APRENDER",
    description: "Você pode aprender muito mais do que imagina, participe do hackaton e veja o que pode aprender",
    route: '/',
    img: "https://www.portaldoholanda.com.br/sites/default/files/imagecache/portal2014_fotonoticiagrande/portaldoholanda-626973-imagem-foto-amazonas.jpg",
    year: "2024"
});
</script>

<template>
    <article class="cardsComp">
        <CardEditionHome :object="info" />
        <CardEditionHome :object="info" />
        <CardEditionHome :object="info" />
    </article>
</template>

<style scoped>
.cardsComp {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    height: 50vh;
}

.cardsComp>* {
    flex: 1;
    transition: flex-grow 0.3s ease-in-out;
}

.cardsComp>*:hover {
    flex-grow: 1.5;
}
</style>
