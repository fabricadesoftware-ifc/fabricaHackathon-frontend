<script setup>
import { useScreen } from '@/composables/screen';
const { header } = useScreen();
</script>

<template>
    <component :is="header" />
</template>