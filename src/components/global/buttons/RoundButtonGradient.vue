<script setup>
</script>

<template>
    <button>
        <span>
            &rarr; 
        </span>
    </button>
</template>

<style scoped>
button {
    border: 0;
    background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    padding: 1.7rem;
}

button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    padding: 1.5px;
    background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(216, 216, 216, 0) 0%, #D8D8D8 100%);
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
}

span {
    color: white;
    font-size: 1.5rem;
}
</style>
