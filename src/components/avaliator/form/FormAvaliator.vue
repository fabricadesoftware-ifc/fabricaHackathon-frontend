<script setup>
import { useAuthStore } from '@/stores/auth';
import HeaderForm from '@/components/global/header/HeaderForm.vue';
import InputTextAvaliator from '@/components/avaliator/form/inputs/InputTextAvaliator.vue';
import InputPasswordAvaliator from '@/components/avaliator/form/inputs/InputPasswordAvaliator.vue';
import ButtonSubmitAvaliator from '@/components/avaliator/form/inputs/ButtonSubmitAvaliator.vue';

const useAuth = useAuthStore();
</script>

<template>
    <section class="section-avaliator">
        <HeaderForm />
        <form @submit.prevent="useAuth.createAuthentication(useAuth.user)">
            <div class="title-form">
                <h1>Login</h1>

                <InputTextAvaliator />
                <InputPasswordAvaliator />
                <ButtonSubmitAvaliator />
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
    font-family: 'Poppins', sans-serif;
}

.title-form > h1 {
  position: relative;
  font-size: 30px;  
  background: linear-gradient(180deg, #FE5C2B 0%, #98371A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 35px;
  text-align: center;
  right: 3px;
}
</style>