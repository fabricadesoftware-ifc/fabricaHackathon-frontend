<script setup>
import RoundCardCode from "../global/card/RoundCardCode.vue";
import SquareCardBox from "../global/card/SquareCardBox.vue";
import BallCard from "../global/card/BallCard.vue";

import CubeOutline from "vue-material-design-icons/CubeOutline.vue";
import ConsoleLine from "vue-material-design-icons/ConsoleLine.vue";

import { useScreen } from "@/composables/layout/hero";
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
      <SquareCardBox :component="CubeOutline" />
    </div>
    <div class="text">
      <component :is="hero" />
    </div>
    <div class="card2">
      <SquareCardBox :component="ConsoleLine" />
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
  align-items: center;
  width: 100%;
  height: 100%;
}

.cards1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 20%;
}

.card2 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cards1 > *:first-child {
  justify-self: end;
  align-self: end;
}
</style>
