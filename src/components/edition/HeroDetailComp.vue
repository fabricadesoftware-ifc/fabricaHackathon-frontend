<script setup>
import RoundCardCode from '../global/card/RoundCardCode.vue';
import SquareCardBox from '../global/card/SquareCardBox.vue';
import SpiralCard from '../global/card/SpiralCard.vue';
import BallCard from '../global/card/BallCard.vue';
import CubeOutline from "vue-material-design-icons/CubeOutline.vue";
import ConsoleLine from "vue-material-design-icons/ConsoleLine.vue";
</script>

<template>
    <BallCard y="35%" x="5%" />
    <BallCard y="70%" x="95%" />
    <BallCard y="70%" x="50%" />
    <BallCard y="20%" x="80%" />
    <section>
        <div class="cards1">
            <span></span>
            <RoundCardCode />
        </div>
        <div class="text">
            <h1 class="gradient">EDIÇÃO DO HACKATHON 3INFO 2024</h1>
            <SpiralCard />
        </div>
        <div class="cards2">
            <SquareCardBox :component="ConsoleLine" />
            <span></span>
            <SquareCardBox :component="CubeOutline" />
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    height: 75vh;
}

.text {
    display: flex;
    justify-content: center;
    align-items: center;
}

.gradient {
    background: linear-gradient(85.58deg, rgba(254, 92, 43, 0.38) 8%, #FE5C2B 139.33%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 6rem;
    line-height: 1.3;
    font-weight: 400;
    text-align: center;
    width: 80%;
}

.cards1 {
    display: grid;
    grid-template-rows: 2fr 2fr 2fr;
    gap: 1rem;
}

.cards2 {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    gap: 1rem;
}

.cards1>*:nth-child(2) {
    margin-right: 10%;
}

.cards1>*:first-child {
    justify-self: end;
    align-self: end;
}

.cards1>*:last-child {
    justify-self: center;
}

.cards2>*:first-child {
    justify-self: center;
    align-self: center ;
}
</style>
