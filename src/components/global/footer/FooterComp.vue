<script setup>
import SocialsComp from './SocialsComp.vue';
import LinksComp from './LinksComp.vue';
</script>


<template>
    <footer>
        <div class="logo">
            <img src="/public/logoHackaton.png" alt="">
        </div>
        <SocialsComp />
        <LinksComp />
    </footer>
</template>

<style scoped>
footer {
    background: #131316;
    width: 100%;
    padding: 1rem;
    height: 430px;
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;
}

img {
    width: 40%;
    margin: 0 auto;
}

.logo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

</style>
