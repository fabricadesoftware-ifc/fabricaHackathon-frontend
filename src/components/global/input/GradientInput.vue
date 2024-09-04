<script setup>
import { defineModel } from 'vue';
defineProps({
    label: String
})

const model = defineModel("text")
</script>

<template>
    <div>
        <label for="">{{ label }}:</label>
        <input type="text" name="" id="" v-model="model">
    </div>

</template>

<style scoped>
div {
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

input {
    background-color: #1A1A1E;
    padding: 1rem;
    border-radius: 9px;
    color: white;
    width: 100%;
    border: 1px solid #535353;

    /* border: 1px solid transparent;
    border-image-source: linear-gradient(90deg, #FFFFFF 0%, #999999 100%);
    border-image-slice: 1; */
}
</style>