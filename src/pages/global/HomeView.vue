<script setup>
import { FooterComp, HeaderComp} from '@/components'
</script>

<template>
    <HeaderComp />
    <div class="fundo">
        
    <FooterComp />
</div>
</template>

<style scoped>
.fundo {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>
