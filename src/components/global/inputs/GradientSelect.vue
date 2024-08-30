<script setup>
defineProps({
    label: String,
})
</script>

<template>
    <div>
        <label for="">{{ label }}:</label>
        <select name="" id="">
            <option value="">Teste</option>
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


    /* Configurando a borda com gradiente de esquerda para direita */
    /* border: 1px solid transparent;
    border-image-source: linear-gradient(90deg, #FFFFFF 0%, #999999 100%);
    border-image-slice: 1; */

    /* Remover as setas padrão no select em alguns navegadores */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    /* Adicionar um ícone de seta customizado (opcional) */
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1rem;
}
</style>