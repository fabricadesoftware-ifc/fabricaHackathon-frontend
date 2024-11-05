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
const teamId = router.currentRoute.value.params.id;

const avaliations = ref([]);

onMounted(async () => {
    await teamStore.getTeams();
    await teamStore.getTeam(teamId);
    await editionStore.getEditions();
    await editionStore.getEdition(router.currentRoute.value.params.edition);
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
</script>

<template>
    <section v-if="editionStore.edition && editionStore.edition.criteria && avaliations.length">
        <div class="container">
            <div class="criterion" v-for="(item, index) in editionStore.edition.criteria" :key="item">
                <div class="title">
                    <p>{{ (item.description)?.toUpperCase() }}</p>
                    <span>({{ (item.weight) * 100 }}%)</span>
                </div>
                <div class="input">
                    <label for="">Nota:</label>
                    <input type="number" class="inputCriterion" placeholder="Digite a nota" maxlength="2" max="10"
                        v-model="avaliations[index].grade">
                </div>
            </div>
        </div>
        <button @click="avaliationStore.insertAllAvaliations(avaliations)">
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
    padding: 3rem 5vw;

}

.container {
    width: 90%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 2rem
}

.criterion {
    display: grid;
    grid-template-columns: 30% 70%;
    width: 100%;
    align-items: center;
    gap: 2rem;
}

.title {
    color: #fff;
    display: flex;
    justify-content: start;
    align-items: baseline;
    gap: 1rem;
}

.title>p {
    margin-top: 25px;
    font-size: 2.5vw;
    font-weight: 250;
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

label {
    color: #fff;
    font-size: 1rem;
}

input[type="number"] {
    color: #fff;
    width: 100%;
}

input[type="number"]::placeholder {
    color: #fff;
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    appearance: textfield;
}

span {
    display: flex;
    justify-content: center;
    align-items: center;
}


button {
    padding: .5rem 2rem;
    background-color: var(--background-color);
    border: 1px solid transparent;
    border-radius: 50px;
    position: relative;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    width: 145px;
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
    border: 1px solid #fff;
}

button:hover>.roundSpan {
    background: white !important;
    color: black !important;
}

@media (max-width: 768px) {
    .title>p {
        font-size: 2rem;
    }

    .criterion {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .title>p {
        font-size: 1.5rem;
    }

    .inputCriterion {
        padding: 0.8rem;
        font-size: 1rem;
    }

    button {
        width: 120px;
        font-size: 0.9rem;
    }
}
</style>