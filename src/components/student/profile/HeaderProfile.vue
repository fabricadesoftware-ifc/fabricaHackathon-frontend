<script setup>
import RoundButton from '@/components/global/button/RoundButton.vue';
import ArrowLeftBold from 'vue-material-design-icons/ArrowLeftBold.vue';

// Função para voltar uma página
const goBack = () => {
    window.history.back();  // Volta para a página anterior
};
</script>

<template>
    <header>
        <div class="container">
            <RoundButton @click="goBack" class="roundButton">
                <template v-slot:default>
                    <ArrowLeftBold />
                </template>
            </RoundButton>
            <img src="../../../../public/logoHackaton.png" alt="">
        </div>
    </header>
</template>

<style scoped>
header{
    width: 100%;
    margin: 20px auto;
}

.container{
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: auto;
    align-items: center;
    
}

span{
    display: flex;
    align-items: center;
    
}

img{
    width: 15%;
}
</style>
