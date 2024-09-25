<script setup>
defineProps({
    text: String
})
</script>

<template>
    <div class="button-container">
        <button>
            {{ text }}
        </button>
        <router-link>></router-link>
    </div>
</template>

<style scoped>
.button-container {
    display: flex;
    align-items: center;
}

button {
    background: transparent;
    border: 2px solid #fff;
    padding: 1rem 2rem;
    border-radius: 27px;
    color: #fff;
    display: flex;
    align-items: center;
    position: relative;
    transition: .5s ease-in-out;
    cursor: pointer;
}

button:hover {
    background: #fff;
    color: #000;
}

a {
    text-decoration: none;
    width: 53px;
    height: 53px;
    background: #fff;
    border-radius: 50%;
    color: #000;
    margin-left: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s ease-in-out;
}

a:hover {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
}
</style>
