<script setup>
import GradientInput from '../global/inputs/GradientInput.vue';
import GradientSelect from '../global/inputs/GradientSelect.vue';
import OrangeButton from '../global/buttons/OrangeButton.vue';
</script>
<template>
    <section>
        <router-link to="/" class="logo">
            <img src="../../public/logoHackaton.png" alt="teams">
        </router-link>
        <div class="form">
            <h1>Cadastro</h1>
            <form @submit.prevent>
                <GradientInput label="Nome da Equipe" />
                <GradientInput label="Turma" />
                <GradientSelect label="Equipe" />

                <div class="select-with-button">
                    <GradientSelect label="Integrante" />
                    <button class="round-button">+</button>
                </div>

                <OrangeButton label="Adicionar" class="buttonAdd" />
            </form>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.logo {
    width: 20%;
    margin: 30px 0px 0px 30px;
}

.logo>img {
    width: 100%;
}

.form {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin: auto;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

h1 {
    background: linear-gradient(90deg, #FE5C2B 0%, #98371A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 38px;
    font-weight: 500;
    text-align: center;
}

.select-with-button {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: end;
    gap: 1rem;
    width: 100%;
}

.round-button {
    width: 3rem;
    height: 3rem;
    background-color: #1A1A1E;
    border: 1px solid #535353;
    border-radius: 50%;
    color: #535353;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color .5s;
}

.round-button:hover {
    background-color: #535353;
    color: #1A1A1E;
}
</style>
