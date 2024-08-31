<script setup>
import { FooterComp, HeaderComp } from '@/components';

</script>

<template>
    <main>
        <HeaderComp />
        <router-view />
        <FooterComp />
        
    </main>
</template>