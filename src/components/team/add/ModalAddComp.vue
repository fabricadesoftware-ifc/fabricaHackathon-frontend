<script setup>
</script>

<template>
    <main>
        <article>
            <slot>

            </slot>
        </article>
    </main>    
</template>

<style scoped>
main{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);  
    z-index: 10;
}

article {
    width: 50%;
    height: 70%;
    background-color: #131316;
    border-radius: 15px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
    border-radius: 10px;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    justify-content: space-between;
}
</style>