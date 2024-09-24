<script setup>
import GradientBall from "../global/cards/GradientBall.vue";
import ButtonHeroOpen from "../global/buttons/ButtonHeroOpen.vue";
</script>

<template>
  <div class="openHero">
    <div class="row1">
      <p class="gradient">VEJA AS ULTIMAS</p>
    </div>
    <div class="row2">
      <span>
        <ButtonHeroOpen />
      </span>
      <p class="gradient">
        <i>EDIÇÕES</i>
        DO
      </p>
    </div>
    <div class="row3">
      <p class="gradient">HACKATON!</p>
      <div class="gradientBall">
        <GradientBall />
      </div>
    </div>
  </div>
</template>

<style scoped>
.openHero {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
}

.row1,
.row2,
.row3 {
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row2 {
  gap: 5rem;
}

.gradientBall {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
}

.row2 span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
}

.gradient {
  background: linear-gradient(85.58deg, rgba(254, 92, 43, 0.38) 8%, #fe5c2b 139.33%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 5vw;
  line-height: 1.2;
  font-weight: 400;
  text-align: center;
}

@media (max-width: 1200px) {
  .gradient {
    font-size: 6vw;
  }
}

@media (max-width: 768px) {
  .gradient {
    font-size: 8vw;
  }

  .row2 {
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .gradient {
    font-size: 10vw;
  }

  .row2 span {
    width: 30%;
  }
}
</style>
