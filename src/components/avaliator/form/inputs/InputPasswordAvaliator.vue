<script setup>
</script>

<template>
    <div class="container-input">
        <label for="input-2">Senha</label>
        <input type="password" id="input-2" placeholder="Digite sua senha">
    </div>
</template>

<style scoped>
label {
    font-family: 'Poppins', sans-serif;
    position: relative;
    left: 2px;
    bottom: 2px;
    display: block;
    color: #FFFFFF;
}

input {
    width: 300px;
    height: 45px;
    font-size: 18px;
    padding: 5px 5px 5px 20px;
    color: #716F6F;
    background: #1A1A1E;
    border: 1px solid #535353;
    border-radius: 8px;
    outline: none;
}

input:focus {
    border: 1px solid #bebdbd;
}

input::placeholder {
    font-size: 14px;
    font-weight: bold;
}

label[for='input-2'] {
    margin-top: 20px;
}
</style>