<script setup>
import { useScreen } from '@/composables/layout/screen';
const { header } = useScreen();
</script>

<template>
    <component :is="header" />
</template>