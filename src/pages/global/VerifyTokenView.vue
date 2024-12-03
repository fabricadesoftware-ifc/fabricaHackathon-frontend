<script setup>
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const authStore = useAuthStore()

const token = ref('')
const toast = useToast()

const verifyToken = async () => {
  try {
    await authStore.verifyToken(token.value)
    router.push('/auth/reset-password')
  } catch (error) {
    toast.error('Token inválido')
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
            <h3>Verificar Token</h3>
          </v-card-title>
          <v-card-subtitle> Digite o código enviado para o seu e-mail </v-card-subtitle>
          <v-card-text>
            <v-form class="d-flex flex-column align-center">
              <v-text-field
                v-model="token"
                label="Token"
                outlined
                dense
                required
                class="w-100"
              ></v-text-field>
              <v-btn @click="verifyToken" color="deep-orange"> Verificar </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
