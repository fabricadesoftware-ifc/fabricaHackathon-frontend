<script setup>
import { FooterComp, HeaderCompDefault} from '@/components';

</script>

<template>
    <main>
        <HeaderCompDefault />
        <router-view />
        <FooterComp />
    </main>
</template>