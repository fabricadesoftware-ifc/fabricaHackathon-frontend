<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth';
import HeaderButton from '../button/HeaderButton.vue';
import Dropdown from 'v-dropdown'
import Logout from "vue-material-design-icons/Logout.vue"
import Account from "vue-material-design-icons/Account.vue"
import Home from "vue-material-design-icons/Home.vue"
import Login from "vue-material-design-icons/Login.vue"
import CodeGreaterThan from "vue-material-design-icons/CodeGreaterThan.vue"

const authStore = useAuthStore()

const items = ref([
  { title: 'Home', icon: Home, path: '/home' },
  { title: 'Projeto', icon: CodeGreaterThan, path: '/editions/1/project/add/' },
  { title: 'Perfil', icon: Account, path: '/profile' },
])

</script>

<template>
  <!-- <Dropdown trigger="hover">
        <template #trigger>
            <HeaderButton text="Menu" />
        </template>
<div class="dropLinks">

  <router-link to="/home" class="drop">
    <Home />
    Home
  </router-link>

  <router-link to="/auth" class="drop" v-if="!authStore.isLogged">
    <Login />
    Login
  </router-link>
  <div v-if="authStore.isLogged">
    <router-link to="/editions/1/project/add/" class="drop">
      <CodeGreaterThan />
      Projeto
    </router-link>
    <router-link to="/profile" class="drop">
      <Account />
      Perfil
    </router-link>
    <button @click="authStore.logout" class="logout">
      <Logout />
      Logout
    </button>
  </div>

</div>
</Dropdown> -->
  <v-menu open-on-click>
    <template v-slot:activator="{ props }">
      <HeaderButton text="Menu" v-bind="props" />
    </template>

    <v-list class="bg-background">
      <v-list-item v-for="(item, index) in items" :key="index">
        <div>
          <router-link :to="item.path" class="text-decoration-none text-white d-flex align-center justify-left ga-3">
            <component :is="item.icon" />
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </router-link>
        </div>
      </v-list-item>
      <v-list-item class="w-100">
        <div class="text-decoration-none text-white d-flex align-center justify-left ga-3 cursor-pointer"
          v-if="authStore.isLogged" @click="authStore.logout">
          <Logout />
          <v-list-item-title @click="authStore.logout">
            Logout
          </v-list-item-title>
        </div>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
