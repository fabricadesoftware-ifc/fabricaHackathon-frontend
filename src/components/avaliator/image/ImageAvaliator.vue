<script setup>
import CardTopAvaliator from '../cards/CardTopAvaliator.vue';
import CardBottomAvaliator from '../cards/CardBottomAvaliator.vue';
</script>

<template>
    <section>
        <div class="img">
            <div class="position1">
                <CardTopAvaliator />
            </div>
            <div class="position4">
                <CardBottomAvaliator />
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 1rem 0rem 1rem;
    height: 95vh;
}

.img {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/global/background-form.png');
    background-size: cover;
    /* Faz com que a imagem preencha toda a área da div */
    background-position: center;
    background-repeat: no-repeat;

    border-radius: 9px;
    overflow: hidden;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    /* Define as áreas do grid */
    position: relative;
}

.position1 {
    grid-column: 1;
    grid-row: 1;
    align-self: center;
    justify-self: center;
}

.position4 {
    grid-column: 2;
    grid-row: 2;
    align-self: center;
    justify-self: center;
}
</style>