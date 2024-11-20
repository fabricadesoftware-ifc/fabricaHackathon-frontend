<script setup>
import { ref, onMounted } from 'vue';
import { useTeamStore } from '@/stores/team';
import { useEditionStore } from '@/stores/edition';
import { useAuthStore } from '@/stores/auth';
import { useAvaliationStore } from '@/stores/avaliation';
import ArrowTopRight from 'vue-material-design-icons/ArrowTopRight.vue';
import router from '@/router';

const teamStore = useTeamStore();
const authStore = useAuthStore();
const editionStore = useEditionStore();
const avaliationStore = useAvaliationStore();
const currentTeam = ref(null);
const teamId = ref(router.currentRoute.value.params.id);

const avaliations = ref([]);

onMounted(async () => {
  await teamStore.getTeams();
  await teamStore.getTeam(teamId.value);
  await editionStore.getEditions();
  await editionStore.getEdition(router.currentRoute.value.params.edition);
  await avaliationStore.getAvaliations()
  currentTeam.value = teamStore.team;

  if (editionStore.edition?.criteria?.length) {
    avaliations.value = editionStore.edition.criteria.map((criterion) => ({
      grade: 0,
      avaliator: parseInt(authStore.data_user.user_id),
      team: teamId,
      criterion: criterion.id,
    }));
  } else {
    console.warn("Criteria não foi carregado corretamente.");
  }

});

const sendEvaluations = async () => {
  try {
    await avaliationStore.insertAllAvaliations(avaliations.value);
  } catch (error) {
    console.error("Erro ao enviar avaliações:", error);
  }
};
</script>

<template>
  <section>
    <div class="container">
      <div class="title">
        <h1>CRITÉRIOS</h1>
      </div>
      <div class="criterion" v-for="(item, index) in editionStore.edition.criteria" :key="item.id">
        <div class="title">
          <p>{{ item.description }}</p>
          <span>({{ (item.weight) * 100 }}%)</span>
        </div>
        <div class="input">
          <input type="number" class="inputCriterion" placeholder="Insira a Nota da Equipe"
            v-model.number="avaliations[index].grade" min="0" max="10" />
        </div>
      </div>
    </div>
    <button @click="sendEvaluations">
      <span>Enviar</span>
      <span class="roundSpan">
        <ArrowTopRight size="20" />
      </span>
    </button>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  background: radial-gradient(97.57% 210.75% at 0.9% 2.98%,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%);
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
  gap: .8rem;
}

.title>h1 {
  font-size: 3vw;
  font-weight: 250;
}

.title>p {
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

input[type="number"] {
  color: #fff;
  font-size: 13pt;
  letter-spacing: 1.5px;
}

input[type="number"]::placeholder {
  color: #fff;
}

span {
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  padding: .8rem 2rem;
  background-color: var(--background-color);
  border: 1px solid transparent;
  border-radius: 50px;
  position: relative;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  width: 140px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  padding: 1.5px;
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
  transition: background 0.3s ease, color 0.3s ease;
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

button:hover>.roundSpan {
  background: white !important;
  color: black !important;
}
</style>
