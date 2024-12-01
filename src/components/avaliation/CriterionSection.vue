<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { useToast } from 'vue-toastification'
import { useTeamStore } from '@/stores/team'
import { useEditionStore } from '@/stores/edition'
import { useAuthStore } from '@/stores/auth'
import { useAvaliationStore } from '@/stores/avaliation'
import router from '@/router'

const toast = useToast()
const teamStore = useTeamStore()
const authStore = useAuthStore()
const editionStore = useEditionStore()
const avaliationStore = useAvaliationStore()
const currentTeam = ref(null)
const teamId = ref(router.currentRoute.value.params.id)

const avaliations = ref([])

const gradeRules = ref([
  (v) => (v >= 0 && v <= 10) || 'Nota inválida',
  (v) => v !== '' || 'Campo obrigatório',
  (v) => v !== null || 'Campo obrigatório',
  (v) => v !== undefined || 'Campo obrigatório'
])

onBeforeMount(async () => {
  const existingAvaliations = await avaliationStore.getTeamAvaliationsByAvaliator(
    parseInt(authStore.data_user.user_id),
    teamId.value
  )
  if (existingAvaliations.length > 0) {
    toast.warning('Você já avaliou este projeto')
    router.push({
      name: 'evaluateEdition',
      params: {
        edition: router.currentRoute.value.params.edition
      }
    })
  }
})

onMounted(async () => {
  await teamStore.getTeam(teamId.value)
  currentTeam.value = teamStore.team
  await editionStore.getEdition(router.currentRoute.value.params.edition)

  if (editionStore.edition?.criteria?.length) {
    avaliations.value = editionStore.edition.criteria.map((criterion) => ({
      grade: 0,
      avaliator: parseInt(authStore.data_user.user_id),
      team: teamId,
      criterion: criterion.id
    }))
  }
})

const validateField = (rules, value) => {
  let errors = rules.map((rule) => {
    return rule(value)
  })
  if (errors.some((error) => error != true && error != undefined)) {
    return false
  }
  return true
}

const sendEvaluations = async () => {
  try {
    if (!avaliations.value.length) {
      toast.error('Não há avaliações para enviar.')
      return
    }

    const errors = avaliations.value.map((avaliation) => {
      const error = validateField(gradeRules.value, parseInt(avaliation.grade))
      return error
    })
    if (!errors.some((error) => error != true && error != undefined)) {
      const allAvaliationsExist = avaliations.value.every(
        (avaliation) => avaliation.grade !== undefined
      )
      if (!allAvaliationsExist) {
        toast.error('Avaliações incompletas. Por favor, preencha todos os campos e tente novamente')
        throw new Error('Avaliações incompletas.')
      }
      await avaliationStore.insertAllAvaliations(avaliations.value)
    }
    router.push({
      name: 'evaluateEdition',
      params: {
        edition: router.currentRoute.value.params.edition
      }
    })
  } catch (error) {
    console.error('Erro ao enviar avaliações:', error)
  }
}
</script>

<template>
  <section>
    <div class="container">
      <div class="title w-100 d-flex justify-space-between">
        <h1>CRITÉRIOS</h1>
        <h1>NOTAS</h1>
      </div>
      <v-form @submit.prevent="sendEvaluations" v-if="avaliations.length > 0">
        <div
          class="d-flex w-100 justify-space-between"
          v-for="(item, index) in editionStore.edition.criteria"
          :key="item.id"
        >
          <div class="title">
            <p>{{ item.description }}</p>
            <span>({{ item.weight * 100 }}%)</span>
          </div>
          <div class="input w-25">
            <v-text-field
              variant="outlined"
              placeholder="Insira a Nota da Equipe"
              type="number"
              v-model="avaliations[index].grade"
              :rules="gradeRules"
            >
              <template #label>{{ item.description }}</template>
            </v-text-field>
          </div>
        </div>
        <div class="w-100 d-flex justify-center">
          <v-btn
            type="submit"
            class="mx-6 d-flex py-6 text-h6 mt-16 bg-deep-orange-accent-4 text-white"
            variant="tonal"
            >Enviar Avaliações</v-btn
          >
        </div>
      </v-form>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, #121212 0%, #000000 100%);
  padding: 3rem 0;
}

.container {
  width: 80%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.criterion {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.title {
  color: #fff;
  font-size: 3rem;
  font-weight: 250;
  display: flex;
  align-items: baseline;
  gap: 0.8rem;
}

.title > h1 {
  font-size: 3vw;
  font-weight: 250;
}

.title > p {
  font-size: 2vw;
  font-weight: 250;
}

.title span {
  font-size: 1.5rem;
}

.inputCriterion {
  width: 100%;
  height: 2rem;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 1.5rem;
  background-color: transparent;
}

.inputCriterion:focus {
  background-color: var(--background-color);
  border: 0;
  outline: 0;
}

input[type='number'] {
  color: #fff;
  font-size: 13pt;
  letter-spacing: 1.5px;
}

input[type='number']::placeholder {
  color: #fff;
}

span {
  display: flex;
  justify-content: center;
  align-items: center;
}

.roundSpan {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  border-radius: 50%;
  font-size: 0.5rem;
  color: white;
  background: transparent;
  border: 1px solid transparent;
  position: absolute;
  top: 50%;
  right: 0.4rem;
  transform: translateY(-50%);
  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.roundSpan::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  padding: 1px;
  border: 1px solid white;
}

button:hover > .roundSpan {
  background: white !important;
  color: black !important;
}
</style>
