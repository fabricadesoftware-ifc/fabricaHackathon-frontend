<script setup>
import { reactive, onMounted, ref } from 'vue'
import { useTeamStore } from '@/stores/team'
import { useAuthStore } from '@/stores/auth'
import { useRoute } from 'vue-router'
import GradientInput from '@/components/global/input/GradientInput.vue'
import OrangeButton from '@/components/global/button/OrangeButton.vue'

const teamStore = useTeamStore()
const authStore = useAuthStore()

const route = useRoute()

const currentTeam = ref(null)

function findTeamByStudentIdAndEdition(studentId, editionId) {
    return teamStore.teams.find(team => 
        team.edition === editionId && team.students.includes(studentId)
    )
}

const dados = reactive({
    id: 0,  
    project_name: '',
    deploy_link: '',
    repository_link: '',
})

onMounted(async () => {
    await teamStore.getTeams()

    const editionId = parseInt(route.params.edition)

    currentTeam.value = findTeamByStudentIdAndEdition(authStore.student_profile_data.id, editionId)

    if (currentTeam.value) {
        dados.id = currentTeam.value.id
    }

    console.log(dados)  
})

</script>

<template>
    <section>
        <router-link to="/home" class="logo">
            <img src="/public/logoHackaton.png" alt="teams" />
        </router-link>
        <div class="form">
            <h1 style="text-align: center" class="gradientOrange">Cadastrar Projeto</h1>
            <form @submit.prevent>
                <GradientInput v-model:text="dados.project_name" label="Nome do Projeto" />
                <GradientInput v-model:text="dados.deploy_link" label="Deploy Link" />
                <GradientInput v-model:text="dados.repository_link" label="Repository Link" />

                <OrangeButton label="Enviar" @click="teamStore.updateTeam(dados)" />
            </form>
        </div>
    </section>
</template>

<style scoped>
.position1 {
    grid-column: 2;
    align-self: center;
    justify-self: center;
}

section {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.logo {
    width: 100%;
    display: flex;
    justify-content: end;
}

.logo>img {
    margin: 50px 50px 0 0;
    width: 20%;
}

.form {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: auto;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}
</style>
