<script setup>
// import HeaderButton from "../button/HeaderButton.vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
import DropDown from './DropDown.vue';
import DropDownStudent from "./DropDownStudent.vue";
</script>

<template>
  <header>
    <div class="container">
      <router-link to="/home" class="logoImg">
        <img src="/public/logoHackaton.png" alt="" />
      </router-link>
      <div>
        <router-link to="/editions" class="header">Edições</router-link>
      </div>
      <div v-if="authStore.data_user.user_type == 'student'">
        <DropDownStudent />
      </div>
      <div v-else>
        <DropDown />
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

.sperma {
  color: black;
  width: 100%;
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

span {
  display: flex;
  justify-content: center;
  align-items: center;

}

img {
  width: 50%;
  background-color: #161617;
  border-radius: 27px;
  padding: 0.5rem;
}

a.header {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  padding: 1rem;
}

.dropLinks {
  width: 150px;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  background-color: #161617;
}

a.drop {
  color: #ffffff;
  text-decoration: none;
  padding: 1rem 1rem;
  transition: 0.3s ease-in-out;
  display: flex;
  gap: .5rem;
}

a.logout {
  color: red;
  text-decoration: none;
  padding: 1rem 1rem;
  transition: 0.3s ease-in-out;
  display: flex;
  gap: .5rem;
}

a.drop:hover,
a.logout:hover {
  background-color: #1c1c1f;

}
</style>
