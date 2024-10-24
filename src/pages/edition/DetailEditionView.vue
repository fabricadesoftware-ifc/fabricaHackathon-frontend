<script setup>
import HeroDetailComp from '@/components/edition/HeroDetailComp.vue';
import SectionDetailComp from '@/components/edition/SectionDetailComp.vue';
import { onMounted } from 'vue';
import { useDetailEditionStore } from '@/stores/detailEdition';
import { useRoute } from 'vue-router';

const useDetailEdition = useDetailEditionStore();
const route = useRoute();

onMounted(async() => {
    useDetailEdition.editionId = route.params.edition;
    await useDetailEdition.populateRefs();
})

</script>

<template>
    <main>
        <HeroDetailComp />
        <SectionDetailComp />
    </main>
</template>

<style scoped></style>