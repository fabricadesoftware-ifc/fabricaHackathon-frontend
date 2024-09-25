<script setup>
import { defineModel } from 'vue';

defineProps({
    label: String,
    options: Array,
})

const model = defineModel("option")
</script>

<template>
    <div>
        <label for="">{{ label }}:</label>
        <select name="" id="" v-model="model" @change="$emit('changeLeader', $event.target.value)">
            <slot></slot>
        </select>
    </div>
</template>

<style scoped>
div {
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
}

select {
    background-color: #1A1A1E;
    padding: 1rem;
    border-radius: 9px;
    color: white;
    width: 100%;
    border: 1px solid #535353;

  
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}
</style>
