<template>
  <div class="container-spirals">
    <span></span>
    <span></span>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container-spirals {
    display: flex;
    column-gap: 10px;
}
span {
    position: absolute;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}

span::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    padding: 1.5px;
    background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(216, 216, 216, 0) 0%, #D8D8D8 100%);
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}
</style>