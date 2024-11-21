<script setup>
defineProps({
  label: String
})
</script>

<template>
  <v-btn class="text-center rounded-xl py-6 d-flex align-center justify-center">
    {{ label }}
  </v-btn>
</template>

<style scoped>
button {
  width: 350px;
  background: radial-gradient(147.74% 409.03% at -2.67% 59.14%, rgba(254, 92, 43, 0.37) 0%, #FE5C2B 100%);
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background: radial-gradient(147.74% 409.03% at -2.67% 59.14%, #FE5C2B 0%, rgba(254, 92, 43, 0.37) 50%);
  transition: opacity .4s ease-in-out;
  opacity: 0;
}

button:hover::before {
  opacity: 1;
}

button:hover {
  cursor: pointer;
}
</style>
