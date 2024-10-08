<script setup>
import HeaderButton from '../button/HeaderButton.vue';
</script>

<template>
    <header>
        <div class="container">
            <div class="logoImg">
                <img src="/public/logoHackaton.png" alt="">
            </div>
            <div>
                <p>Avaliador</p>
            </div>
            <div>
                <HeaderButton text="Home" />
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
}

.container {
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 1rem;
}

.container div {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container div:first-child {
    justify-content: start;
}

.container div:last-child {
    justify-content: end;
}

.logoImg {
    width: 100%;
    display: flex;
    align-items: center;
}

img {
    width: 50%;
    background-color: #161617;
    border-radius: 27px;
    padding: .5rem;
}
</style>