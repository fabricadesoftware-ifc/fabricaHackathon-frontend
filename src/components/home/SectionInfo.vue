<script setup>
import ShowInfo from './ShowInfo.vue';
import CardsComp from './CardsComp.vue';
</script>


<template>
    <section>
        <div class="container">
            <ShowInfo />
            <CardsComp />
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
    padding: 3rem 0;
    height: 100%;
}

.container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
}

</style>
