<script setup lang="js">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import HeaderButton from '../button/HeaderButton.vue'
import Logout from 'vue-material-design-icons/Logout.vue'
import Home from 'vue-material-design-icons/Home.vue'
import ClipboardList from 'vue-material-design-icons/ClipboardList.vue'

const authStore = useAuthStore()

const items = ref([
  { title: 'Home', icon: Home, path: '/home' },
  { title: 'Avaliações', icon: ClipboardList, path: '/evaluate' }
])
</script>

<template>
  <!-- <Dropdown trigger="hover" class="drop">
    <template #trigger>
      <HeaderButton text="Menu" />
    </template>
<div class="dropLinks">
  <router-link to="/home" class="drop">
    <Home />
    Home
  </router-link>
  <router-link to="/evaluate" class="drop">
    <ClipboardList />
    Avaliar
  </router-link>
  <router-link to="/auth" class="drop" v-if="!authStore.isLogged">
    <Login />
    Login
  </router-link>
  <div v-if="authStore.isLogged">
    <button @click="authStore.logout" class="logout">
      <Logout />
      Logout
    </button>
  </div>

</div>
</Dropdown> -->
  <div class="text-center">
    <v-menu open-on-click>
      <template v-slot:activator="{ props }">
        <HeaderButton text="Menu" v-bind="props" />
      </template>

      <v-list class="bg-background">
        <v-list-item v-for="(item, index) in items" :key="index">
          <div>
            <router-link
              :to="item.path"
              class="text-decoration-none text-white d-flex align-center justify-left ga-3"
            >
              <component :is="item.icon" />
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
          </div>
        </v-list-item>
        <v-list-item class="w-100">
          <div
            class="text-decoration-none text-white d-flex align-center justify-left ga-3 cursor-pointer"
            v-if="authStore.isLogged"
            @click="authStore.logout"
          >
            <Logout />
            <v-list-item-title @click="authStore.logout"> Logout </v-list-item-title>
          </div>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style scoped></style>
