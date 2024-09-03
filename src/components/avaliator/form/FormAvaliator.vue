<script setup>
import { ref } from 'vue';
import HeaderForm from '@/components/global/header/HeaderForm.vue';
</script>

<template>
    <section class="section-avaliator">
        <HeaderForm />
        <form>
            <div class="title-form">
                <h1>Login</h1>
            </div>

            <div class="container-input">
                <label for="input-1">Usuário</label>
                <input type="text" id="input-1" placeholder="Digite seu usuário">
            </div>
            <div class="container-input">
                <label for="input-2">Senha</label>
                <input type="password" id="input-2" placeholder="Digite sua senha">
            </div>
            <div class="container-submit">
                <button type="submit">Login</button>
            </div>
        </form>
    </section>
</template>

<style scoped>
.section-avaliator {
    display: flex;
    flex-direction: column;
    width: 50%;
}

form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
}

.title-form > h1 {
  font-size: 28px;  
  background: linear-gradient(180deg, #FE5C2B 0%, #98371A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;
}

form, label {
    font-family: 'Poppins', sans-serif;
}

label {
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

button[type='submit'] {
    width: 330px;
    height: 55px;
    font-size: 16px;
    margin-top: 30px;
    border: none;
    background: radial-gradient(147.74% 409.03% at -2.67% 59.14%, rgba(254, 92, 43, 0.37) 0%, #FE5C2B 100%);
    color: #FFFFFF;
    border-radius: 50px;
    cursor: pointer;
}

/* button[type='submit']:hover {
    background: radial-gradient(147.74% 409.03% at -2.67% 59.14%, rgba(250, 59, 1, 0.37) 0%, #FE5C2B 100%);;
} */
</style>