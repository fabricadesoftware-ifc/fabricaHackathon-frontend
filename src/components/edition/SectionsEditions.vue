<script setup>
import { ref } from 'vue';
import CardEdition from '../global/cards/CardEdition.vue';

const anos = ref([
    "2024",
    "2022",
    "2021",
    "2020",
])

const editions = ref([
    {
        title: "NÃO HÁ MANEIRA MELHOR DE APRENDER",
        description: "Voce pode aprender muito mais do que imagina, participe do hackaton e veja o que pode aprender",
        route: '/',
        img: "",
        year: "2024"
    },
    {
        title: "NÃO HÁ MANEIRA MELHOR DE APRENDER",
        description: "Voce pode aprender muito mais do que imagina, participe do hackaton e veja o que pode aprender",
        route: '/',
        img: "",
        year: "2024"
    },
])

</script>

<template>
    <section>
        <div class="container">
            <article v-for="item in anos" :key="item">
                <h2>/{{ item }}</h2>
                <CardEdition v-for="object in editions" :key="object" />
            </article>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
    padding: 3rem 0;
}

.container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

h2 {
    font-size: 2rem;
    color: #FFFFFF;
    font-weight: 300;
}
</style>
