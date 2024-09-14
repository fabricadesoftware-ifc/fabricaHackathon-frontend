<script setup>
import RoundCardCode from '../global/cards/RoundCardCode.vue';
import SquareCardBox from '../global/cards/SquareCardBox.vue';
import BallCard from '../global/cards/BallCard.vue';

import CubeOutline from "vue-material-design-icons/CubeOutline.vue";
import ConsoleLine from "vue-material-design-icons/ConsoleLine.vue";

import { useScreen } from '@/composables/hero';
const { hero } = useScreen();

</script>

<template>
    <section>
        <BallCard y="50%" x="20%" />
        <BallCard y="70%" x="90%" />
        <BallCard y="75%" x="60%" />
        <BallCard y="20%" x="75%" />
        <div class="cards1">
            <RoundCardCode />
            <span></span>
            <SquareCardBox :component="CubeOutline" />
        </div>
        <div class="text">

            <component :is="hero" />
        </div>
        <div class="cards2">
            <span></span>
            <SquareCardBox :component="ConsoleLine" />
            <span></span>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 4fr 1.5fr;
    height: 75vh;
}

.text {
    display: flex;
    justify-content: center;
    /* Centraliza horizontalmente */
    align-items: center;
    /* Centraliza verticalmente */
    width: 100%;
    /* Garante que o div ocupe toda a largura disponível */
    height: 100%;
    /* Garante que o div ocupe toda a altura disponível */
}

.cards1 {
    display: grid;
    grid-template-rows: 2fr 2fr 2fr;
    gap: 1rem;
}

.cards2 {
    display: grid;
    grid-template-rows: 2fr 2fr 2fr;
    gap: 1rem;
}

.cards1>*:first-child {
    justify-self: end;
    align-self: end;
}

.cards1>*:last-child {
    justify-self: center;
}

.cards2>*:nth-child(2) {
    justify-self: center;
    margin-top: 15%;
}
</style>
