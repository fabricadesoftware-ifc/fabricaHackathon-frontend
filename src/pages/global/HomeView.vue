<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
</script>

<template>
    <HeaderComp />
    <div class="fundo">
        
    <FooterComp colorFooter="radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);" />
</div>
</template>

<style scoped>
.fundo {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>
