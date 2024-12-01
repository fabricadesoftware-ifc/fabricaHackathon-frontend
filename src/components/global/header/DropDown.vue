<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import HeaderButton from '../button/HeaderButton.vue'
import Home from 'vue-material-design-icons/Home.vue'
import Login from 'vue-material-design-icons/Login.vue'

const authStore = useAuthStore()
const items = ref([{ title: 'Home', icon: Home, path: '/home' }])
</script>

<template>
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
          <router-link
            to="/auth"
            class="text-decoration-none text-white d-flex align-center justify-left ga-3 cursor-pointer"
            v-if="!authStore.isLogged"
          >
            <Login />
            <v-list-item-title @click="authStore.logout"> Login </v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
