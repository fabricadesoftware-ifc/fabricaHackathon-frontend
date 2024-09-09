<script setup>
import CardComp1 from '@/components/global/cards/CardComp1.vue';
import CardComp2 from '@/components/global/cards/CardComp2.vue';
</script>

<template>
    <section>
        <div class="img">
            <div class="position1">
                <CardComp2 />
            </div>
            <div class="position4">
                <CardComp1 />
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    height: 100vh;
}

.img {
    width: 100%;
    height: 100%;
    background-image: url('/public/imageRegister.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 9px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
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
