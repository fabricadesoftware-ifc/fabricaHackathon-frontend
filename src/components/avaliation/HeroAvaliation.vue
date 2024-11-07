<script setup>
import { ref, onMounted } from 'vue';
import { useTeamStore } from '@/stores/team';
import RoundCardCode from '../global/card/RoundCardCode.vue';
import SquareCardBox from '../global/card/SquareCardBox.vue';
import BallCard from '../global/card/BallCard.vue';

import CubeOutline from "vue-material-design-icons/CubeOutline.vue";
import ConsoleLine from "vue-material-design-icons/ConsoleLine.vue";
import router from '@/router';
// import GradientBall from '../global/card/GradientBall.vue';

const teamStore = useTeamStore();
const currentTeam = ref(null);

onMounted(async () => {
    await teamStore.getTeams();
    console.log(router.currentRoute.value.params.id);
    await teamStore.getTeam(router.currentRoute.value.params.id);
    currentTeam.value = teamStore.team
    console.log(currentTeam.value);
})
</script>


<template>
    <section>
        <BallCard y="50%" x="20%" />
        <BallCard y="70%" x="90%" />
        <BallCard y="70%" x="40%" />
        <BallCard y="20%" x="75%" />
        <div class="cards1">
            <RoundCardCode />
            <span></span>
            <SquareCardBox :component="CubeOutline" />
        </div>
        <div class="text">
            <h1 class="gradient">
                {{ (teamStore.team.name)?.toUpperCase() }}
            </h1>
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
    grid-template-columns: 1.5fr 3fr 1.5fr;
    height: 100vh;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.gradient {
    background: linear-gradient(85.58deg, rgba(254, 92, 43, 0.38) 8%, #FE5C2B 139.33%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 7rem;
    line-height: 1.3;
    font-weight: 400;
    text-align: center;
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
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
    margin-top: 15%
}
</style>
