<script setup>
</script>

<template>
    <button class="round-button">
        <slot>

        </slot>
    </button>
</template>


<style scoped>
.round-button {
    width: 3rem;
    height: 3rem;
    background-color: #1A1A1E;
    border: 1px solid #535353;
    border-radius: 50%;
    color: #535353;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color .5s;
}

.round-button:hover {
    background-color: #535353;
    color: #1A1A1E;
}

.round-button:active {
    background-color: #FE5C2B;
    color: #1A1A1E;
    scale: 0.9;
}
</style>
