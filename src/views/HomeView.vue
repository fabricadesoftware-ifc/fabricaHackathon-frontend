<script setup>
import { onMounted } from 'vue';
import { useCriterionStore } from '@/stores/criteriaStore';

const useCriterion = useCriterionStore();
const newCriterion = {id: 1, description: 'This is description update', weight: 20.0}

onMounted(async() => {
    let response1 = useCriterion.deleteCriterion(newCriterion.id);
    // let response2 = await useCriterion.getCriterion(newCriterion.id);
})
</script>

<template>
    <div>Home</div>
</template>

<style scoped>
</style>
