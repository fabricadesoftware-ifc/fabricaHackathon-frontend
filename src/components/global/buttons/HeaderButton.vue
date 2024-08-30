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
        <span>></span>
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
}

span {
    width: 53px;
    height: 53px;
    background: #fff;
    border-radius: 50%;
    margin-left: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
