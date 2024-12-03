<script setup>
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const authStore = useAuthStore()
const password = ref('')
const confirmPassword = ref('')
const toast = useToast()

const resetPassword = async () => {
  try {
    if (password.value !== confirmPassword.value) {
      toast.error('As senhas não coincidem')
      return
    }
    await authStore.resetPassword(password.value)
    toast.success('Senha alterada com sucesso')
    router.push('/auth')
  } catch (error) {
    toast.error('Erro ao alterar senha')
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
            <h3>Nova senha</h3>
          </v-card-title>
          <v-card-subtitle> Digite sua nova senha abaixo </v-card-subtitle>
          <v-card-text>
            <v-form class="d-flex flex-column align-center">
              <v-text-field
                v-model="password"
                label="Senha"
                outlined
                dense
                required
                class="w-100"
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                label="Confirme sua senha"
                outlined
                dense
                required
                class="w-100"
              ></v-text-field>
              <v-btn @click="resetPassword" color="deep-orange"> Enviar </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
