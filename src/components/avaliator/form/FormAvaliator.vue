<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import GradientInput from '@/components/global/input/GradientInput.vue'
import OrangeButton from '@/components/global/button/OrangeButton.vue'

const authStore = useAuthStore()

const user = ref({
  email: '',
  password: ''
})
</script>

<template>
  <section>
    <router-link to="/home" class="logo">
      <img src="/public/logoHackaton.png" alt="teams" />
    </router-link>
    <div class="form">
      <h1 style="text-align: center" class="gradientOrange">Login</h1>
      <form @submit.prevent>
          <GradientInput v-model:text="user.email" label="Email" />
          <GradientInput v-model:text="user.password" label="Senha" />
          <OrangeButton label="Entrar" @click="authStore.createAuthentication(user)" />
      </form>
    </div>
  </section>
</template>

<style scoped>
.position1 {
    grid-column: 2;
    align-self: center;
    justify-self: center;
  }
  
  p.showData {
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 1000;
    background-color: white;
    padding: 10px;
  }
  
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .logo {
    width: 20%;
    margin: 30px 0px 0px 30px;
  }
  
  .logo > img {
    width: 100%;
  }
  
  .form {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: auto;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .select-with-button {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;
  }
  
  .buttonLine {
    background-color: #1a1a1e;
    position: relative;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: end;
    height: 20%;
    padding: 1.5rem 0;
    overflow-x: visible;
  }
  
  .listMembers {
    width: 100%;
    display: flex;
    background-color: #1a1a1e;
    height: 25vh;
    border: 1px solid #535353;
    flex-direction: column;
    overflow-y: auto;
    border-radius: 9px;
    overflow-x: hidden;
  }
  
  .listMembers::-webkit-scrollbar {
    width: 0px;
  }
  
  .itemMember {
    display: grid;
    grid-template-columns: 2fr 0fr;
    align-items: center;
    padding: 0.5rem 0.5rem;
    border-bottom: 1px solid #535353;
  }
  
  .itemContainer {
    display: flex;
    flex-direction: column;
    color: white;
    height: 80%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  
  .itemContainer::-webkit-scrollbar {
    width: 0px;
  }
</style>
