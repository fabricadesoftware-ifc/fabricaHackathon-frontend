<script setup>
import { useTeamStore } from '@/stores/team'
const teamsStore = useTeamStore()
import router from '@/router'

import BallCard from '@/components/global/card/BallCard.vue'
import SquareCardBox from '@/components/global/card/SquareCardBox.vue'
import RoundCardCode from '@/components/global/card/RoundCardCode.vue'

import ConsoleLine from 'vue-material-design-icons/ConsoleLine.vue'
import CubeOutline from 'vue-material-design-icons/CubeOutline.vue'
import { onMounted } from 'vue'

const base64Format = (photo) => {
  if (!photo) {
    return 'https://img.freepik.com/vetores-premium/geometrico-minimo-criativo-com-papel-de-parede-de-fundo-de-cor-branca-e-cinza-abstrato-de-formas-dinamicas_176697-503.jpg?semt=ais_hybrid'
  } else {
    return photo
  }
}

onMounted(async () => {
  await teamsStore.getTeam(router.currentRoute.value.params.id)
  console.log(teamsStore.team.photo_base64_code)
})
</script>

<template>
  <BallCard y="40%" x="10%" />
  <BallCard y="70%" x="55%" />
  <BallCard y="20%" x="95%" />
  <BallCard y="70%" x="90%" />

  <section
    :style="{ backgroundImage: `url(${base64Format(teamsStore?.team?.photo_base64_code)})` }"
  >
    <div class="allBlur">
      <div class="container">
        <div class="row1">
          <div class="alignRound">
            <RoundCardCode />
          </div>
        </div>
        <div class="row2">
          <div class="alignTitle">
            <h1 class="gradientGray">
              {{ teamsStore?.team?.name?.toUpperCase() }}
            </h1>
          </div>
        </div>
        <div class="row3">
          <div class="row3one">
            <SquareCardBox :component="ConsoleLine" />
          </div>
          <div></div>
          <div class="row3two">
            <SquareCardBox :component="CubeOutline" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
}

.allBlur {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}

.container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
}

.row1 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.row2 {
  display: flex;
}

.alignTitle {
  width: 50%;
  text-align: center;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-all;
}

.gradient-ball-container {
  margin-top: 1rem;
  position: absolute;
  margin: 11.5% 27.5%;
}

h1.gradientGray {
  background: radial-gradient(
    138.4% 305.91% at 0.9% 2.98%,
    #ffffff 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  font-size: 5vw;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 400;
}

.row3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.row3one {
  display: flex;
  justify-content: center;
  align-items: center;
}

.alignRound {
  margin-left: 25%;
}
</style>
