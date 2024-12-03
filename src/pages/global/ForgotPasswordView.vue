<script setup>
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

const authStore = useAuthStore()

const email = ref('')

const sendEmail = async () => {
  try {
    await authStore.sendForgetPasswordEmail(email.value)
    router.push('/auth/verify-token')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="w-100 h-100">
    <v-row class="d-flex align-center justify-center w-100 ma-0">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            <h3>Redefinir Senha</h3>
          </v-card-title>
          <v-card-subtitle>
            Digite seu e-mail abaixo e enviaremos um código para redefinir sua senha
          </v-card-subtitle>
          <v-card-text>
            <v-form class="d-flex flex-column align-center">
              <v-text-field
                v-model="email"
                label="Email"
                outlined
                dense
                required
                class="w-100"
              ></v-text-field>
              <v-btn @click="sendEmail" color="deep-orange"> Enviar </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
html {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
