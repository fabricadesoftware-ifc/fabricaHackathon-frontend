<script setup>
import LinksComp from "./LinksComp.vue";
</script>

<template>
  <footer>
    <div class="logo">
      <img src="/public/logoHackaton.png" alt="" />
    </div>
    <span>© Todos os direitos reservados</span>
    <LinksComp />
  </footer>
</template>

<style scoped>
footer {
  background: #131316;
  width: 100%;
  padding: 5rem 1rem 2rem 1rem;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

span {
  color: rgb(90, 90, 90);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

img {
  width: 40%;
  margin: 0 auto;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
