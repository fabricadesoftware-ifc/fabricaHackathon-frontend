<script setup>
import { ref } from "vue";
import CardEdition from "../global/card/CardEdition.vue";
import ArrowTopRight from "vue-material-design-icons/ArrowTopRight.vue";

const editions = ref([
    {
        title: "NÃO HÁ MANEIRA MELHOR DE APRENDER",
        description: "Você pode aprender muito mais do que imagina, participe do hackathon e veja o que pode aprender",
        route: "/",
        img: "https://www.portaldoholanda.com.br/sites/default/files/imagecache/portal2014_fotonoticiagrande/portaldoholanda-626973-imagem-foto-amazonas.jpg",
        year: "2024",
    },
    {
        title: "NÃO HÁ MANEIRA MELHOR DE APRENDER",
        description: "Você pode aprender muito mais do que imagina, participe do hackathon e veja o que pode aprender",
        route: "/",
        img: "https://www.portaldoholanda.com.br/sites/default/files/imagecache/portal2014_fotonoticiagrande/portaldoholanda-626973-imagem-foto-amazonas.jpg",
        year: "2024",
    },
    {
        title: "NÃO HÁ MANEIRA MELHOR DE APRENDER",
        description: "Você pode aprender muito mais do que imagina, participe do hackathon e veja o que pode aprender",
        route: "/",
        img: "https://www.portaldoholanda.com.br/sites/default/files/imagecache/portal2014_fotonoticiagrande/portaldoholanda-626973-imagem-foto-amazonas.jpg",
        year: "2024",
    },
]);
</script>

<template>
    <section>

        <div class="container">
            <h2 class="titleEdition">EQUIPES GANHADORAS</h2>
            <div class="editions">
                <CardEdition v-for="(object, index) in editions" :key="index" :object="object" />
            </div>
            <h2 class="titleEdition">VENDAS</h2>
            <div class="editions">
                <CardEdition v-for="(object, index) in editions" :key="index" :object="object" />
            </div>
        </div>
        <button>
            VER MAIS
            <span class="roundSpan">
                <ArrowTopRight size="20" />
            </span>
        </button>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
    padding: 3rem 0;
}

.container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

button {
    padding: 0.5rem 1rem;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 50px;
    position: relative;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    width: 135px;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto 0;
}

button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    padding: 1.5px;
    background: linear-gradient(114.55deg,
            rgba(255, 255, 255, 0.9) 2.13%,
            rgba(255, 255, 255, 0) 98.14%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}

.roundSpan {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
    border-radius: 50%;
    font-size: 0.5rem;
    color: white;
    background: transparent;
    border: 1px solid transparent;
    position: absolute;
    top: 50%;
    right: 0.4rem;
    transform: translateY(-50%);
    transition: background 0.3s ease, color 0.3s ease;
}

.roundSpan::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    padding: 1px;
    background: linear-gradient(114.55deg,
            rgba(255, 255, 255, 0.9) 2.13%,
            rgba(255, 255, 255, 0) 98.14%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}

button:hover>.roundSpan {
    background: white !important;
    color: black !important;
}

.editions {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.editions>* {
    width: 48%;
    height: 350px;
}

.titleEdition {
    color: white;
    font-weight: 400;
    font-size: 2rem;
}

.arrow-top-right-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
    .editions>* {
        width: 100%;
    }
}
</style>
