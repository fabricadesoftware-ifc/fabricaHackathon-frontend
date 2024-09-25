<script setup>
defineProps({
    label: String
})
</script>

<template>
    <button>
        <span>{{ label }}</span>
    </button>
</template>

<style scoped>
button {
    width: 100%;
    background: radial-gradient(147.74% 409.03% at -2.67% 59.14%, rgba(254, 92, 43, 0.37) 0%, #FE5C2B 100%);
    border: none;
    color: white;
    padding: 1.2rem;
    border-radius: 52px;
    position: relative;
    overflow: hidden;
    text-align: center;
}

span {
    position: relative;
    z-index: 1;
    margin: auto;
    width: 0;
}

button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(147.74% 409.03% at -2.67% 59.14%, #FE5C2B 0%, rgba(254, 92, 43, 0.37) 50%);
    transition: opacity .4s ease-in-out;
    opacity: 0;
    border-radius: inherit;
}

button:hover::before {
    opacity: 1;
}

button:hover {
    cursor: pointer;
}
</style>