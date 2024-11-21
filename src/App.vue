<script setup>
import { useRouter } from 'vue-router';
import { useTheme } from 'vuetify'

const theme = useTheme()

const router = useRouter()
const routes = router.getRoutes()

</script>

<template>
  <div>
    <p>DevNav</p>
    <router-link v-for="route, index in routes" :to="route.path">
      {{ route.name }}
      <br>
    </router-link>
  </div>
  <RouterView />
</template>

<style scoped>
div {
  position: absolute;
  color: white;
  background-color: black;
  z-index: 999 !important;
  display: flex;
  gap: 1rem;
}

p {
  color: rgb(255, 50, 23);
}

a {
  color: white;
  text-decoration: none;
}
</style>
