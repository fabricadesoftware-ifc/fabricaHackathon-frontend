<script setup>
</script>

<template>
    <section>
        <div class="img">

        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    height: 100vh;
}

.img {
    width: 100%;
    height: 100%;
    background-image: url('../../public/imageRegister.png');
    background-size: cover; /* Faz com que a imagem preencha toda a área da div */
    background-position: center;
    background-repeat: no-repeat;

    border-radius: 9px;
    overflow: hidden;
}

</style>