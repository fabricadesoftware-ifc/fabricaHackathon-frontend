<script setup>
import CardTopAvaliator from '@/components/avaliator/cards/CardTopAvaliator.vue';
import CardBottomAvaliator from '@/components/avaliator/cards/CardBottomAvaliator.vue';
</script>

<template>
  <section class="section-image">
    <div class="container-image">
      <div class="image">
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-image {
  width: 50%;
}

.container-image {
  padding: 20px 15px 10px 0px;
  height: 95%;
}

.image {
  background-image: url('@/assets/global/background-form.png');
  background-position: center;
  background-size: cover;
  border-radius: 40px;
  height: 100%;
}
</style>