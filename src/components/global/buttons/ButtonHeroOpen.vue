<script setup>
import ArrowRight from "vue-material-design-icons/ArrowRight.vue";
</script>

<template>
  <div class="mainButton">
    <div class="card">
      <div class="text">Acessar</div>
      <div class="codeBox">
        <div class="code">
          <ArrowRight />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainButton {
  width: 100%;
  border-radius: 50px;
  color: #ffffff;
  transition: 0.3s ease-in-out;
  position: relative;
}

.card {
  width: 160px;
  background: transparent;
  border: 1px solid #ffffff;
  height: 60px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1.5rem;
  gap: 0.5rem;
  position: relative;
  transition: background-color 0.3s ease-in-out;
}

.codeBox {
  position: relative;
  background-color: black;
  border-radius: 50%;
}

.code {
  width: 60px;
  height: 60px;
  background: radial-gradient(
    97.57% 210.75% at 0.9% 2.98%,
    rgba(255, 255, 255, 0.58) 30.49%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 50%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff;
  font-weight: 1000;
}

.text {
  width: 100%;
  display: flex;
  align-items: center;
}

span {
  display: flex;
  justify-content: center;
}

.card:hover {
  cursor: pointer;
  background-color: white;
  color: black;
}
</style>
