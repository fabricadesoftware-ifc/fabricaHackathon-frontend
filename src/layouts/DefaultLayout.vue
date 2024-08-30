<script setup>
import { HeaderComponent, FooterComponent } from '@/components';
</script>

<template>
    <main>
        <HeaderComponent />
        <router-view />
        <FooterComponent />
    </main>
</template>