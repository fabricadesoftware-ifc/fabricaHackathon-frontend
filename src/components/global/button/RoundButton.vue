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
    border-radius: 50%;
    color: #ffffff;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color .5s;
    background: radial-gradient(147.74% 409.03% at -2.67% 59.14%, rgba(254, 92, 43, 0.37) 0%, #FE5C2B 100%);
    border: none;
    color: white;
    text-align: center; 
}


.round-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(147.74% 409.03% at -2.67% 59.14%, #FE5C2B 0%, rgba(254, 92, 43, 0.37) 50%);
    transition: opacity .4s ease-in-out;
    opacity: 0;
    border-radius: inherit;
}

.round-buttonhover::before {
    opacity: 1;
}

.round-buttonhover {
    cursor: pointer;
}

.round-button:active {
    background-color: #FE5C2B;
    color: #1A1A1E;
    scale: 0.9;
}
</style>
