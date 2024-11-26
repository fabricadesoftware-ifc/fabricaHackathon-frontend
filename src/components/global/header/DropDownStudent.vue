<script setup>
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth';
import HeaderButton from '../button/HeaderButton.vue';
import Logout from "vue-material-design-icons/Logout.vue"
import Account from "vue-material-design-icons/Account.vue"
import Home from "vue-material-design-icons/Home.vue"
import CodeGreaterThan from "vue-material-design-icons/CodeGreaterThan.vue"
import AccountGroupOutline from "vue-material-design-icons/AccountGroupOutline.vue"
import { useEditionStore } from '@/stores/edition';

const authStore = useAuthStore()
const editionStore = useEditionStore()

const currentOpenEdition = ref(null)

const items = ref([
  { title: 'Home', icon: Home, path: '/home' },
  { title: 'Perfil', icon: Account, path: '/profile' },
])

onMounted(async () => {
})

</script>

<template>
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
