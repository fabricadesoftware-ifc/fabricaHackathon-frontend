<script setup>
import { ref } from 'vue';
import HeroAvaliation from '@/components/avaliation/HeroAvaliation.vue';
import CriterionSection from '@/components/avaliation/CriterionSection.vue';
import SecondTestCriterion from '@/components/avaliation/SecondTestCriterion.vue';
import OrangeButton from '@/components/global/button/OrangeButton.vue';
const rapaiz = ref(false)
</script>

<template>
  <HeroAvaliation />
  <OrangeButton :label="'Mudar Comp'" @click="rapaiz = !rapaiz" />
  <SecondTestCriterion v-if="rapaiz" />
  <CriterionSection v-else />
</template>

<style scoped></style>