<script setup>
import HeaderButton from "../button/HeaderButton.vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <header>
    <div class="container">
      <router-link to="/home" class="logoImg">
        <img src="/public/logoHackaton.png" alt="" />
      </router-link>
      <div>
        <router-link to="/editions">Edições</router-link>
        <router-link :to="authStore.isLogged ? '/edition' : '/auth'"
          >Sou Avaliador</router-link
        >
      </div>
      <router-link to="/editions/:edition/teams/add">
        <HeaderButton text="Cadastrar-Se" />
      </router-link>
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
  padding: 0.5rem;
}

a {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  padding: 1rem;
}
</style>
