<script setup>


defineProps({
    component: Object
})
</script>

<template>
    <div>
        <component :is="component" />
    </div>
</template>

<style scoped>
div {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  font-size: 1rem;
  background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);

  color: white;
}

div {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 20%;
  font-size: 1rem;
  background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
  color: white;
}

div::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20%;
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

div > span {
    display: flex;
    align-items: center;
    justify-content: center;
} 
</style>