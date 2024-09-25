<script setup>
const props = defineProps(['label'])
</script>

<template>
  <div class="inputContainer">
    <label for="text-1">{{ props.label }}</label>
    <input type="text" id="text-1" />
  </div>
</template>

<style scoped>
.inputContainer {
  display: flex;
  flex-direction: column;
}

label {
  color: white;
}

input {
  width: 320px;
  height: 35px;
  color: white;
  border-radius: 8px;
  border: 1px solid white;
}
</style>
