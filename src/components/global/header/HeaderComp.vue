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
                <router-link to="/">Edições</router-link>
                <router-link to="/">Sou Avaliador</router-link>
            </div>
            <div>
                <HeaderButton text="Cadastrar-Se" />
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
}

.container {
    width: 90%;
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
    margin: 0 auto;
}

a {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    padding: 1rem;
}
</style>