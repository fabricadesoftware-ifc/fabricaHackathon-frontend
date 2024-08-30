<script setup>
import { ref } from 'vue';
</script>


<template>
    <div class="main-container">
        <div class="container-auth">
            <div class="container-logo">
                <img src="@/assets/global/logo.png" alt="">
            </div>

            <div class="container-form">
                <form>
                    <h1 class="title-form">Login</h1>
                    <div class="inputContainer">
                        <label for="inputUser">Usuário</label>
                        <input type="text" id="inputUser">
                    </div>
                    <div class="inputContainer">
                        <label for="inputPassword">Senha</label>
                        <input type="text" id="inputPassword">
                    </div>
                </form>
            </div>
        </div>
        <div class="container-background">
            <img src="@/assets/global/background-form.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.main-container {
    display: flex;
    justify-content: space-between;
}

.container-auth {
    width: 100%;
}

.container-form {
    display: flex;
    justify-content: center;
    width: 100%;
}

.container-logo {
    padding: 40px 50px;
}

.title-form {
    font-family: 'Poppins', serif;
    text-align: center;
    background-image: linear-gradient(180deg, #FE5C2B 0%, #98371A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

form {
    width: 400px;
}
</style>