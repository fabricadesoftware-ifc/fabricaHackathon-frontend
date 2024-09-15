<script setup>
import { reactive, ref, onMounted, watch } from 'vue'
import { useTeamStore } from '@/stores/team'
import { useClassInfoStore } from '@/stores/classInfo'
import { useStudentStore } from '@/stores/student'
import { useCategoryStore } from '@/stores/category'
import GradientInput from '@/components/global/input/GradientInput.vue'
import GradientSelect from '@/components/global/input/GradientSelect.vue'
import OrangeButton from '@/components/global/button/OrangeButton.vue'
import ModalAddComp from '@/components/team/add/ModalAddComp.vue'
import router from '@/router'
import RoundButton from '@/components/global/button/RoundButton.vue'

const teamStore = useTeamStore()
const classInfoStore = useClassInfoStore()
const studentStore = useStudentStore()
const categoryStore = useCategoryStore()
const showModal = ref(false)
const members = ref([])

const dados = reactive({
  name: '',
  categoria: '',
  turma: '',
  students: [],
  leader: '',
  edition: router.currentRoute.value.params.edition
})

function addMember(data) {
  dados.students = data.students
  dados.turma = data.turma
  dados.leader = data.selectedLeader
}

watch(
  () => dados.turma,
  async (newTurmaId) => {
    if (newTurmaId) {
      await studentStore.getStudentsByClass(newTurmaId)
    }
  }
)

onMounted(async () => {
  await classInfoStore.getEditionClasses()
  await studentStore.getStudents()
  await categoryStore.getCategories()
})
</script>

<template>
  <ModalAddComp v-model:isOpen="showModal" v-model:team="members" @add-student="addMember" />

  <section>
    <router-link to="/home" class="logo">
      <img src="/public/logoHackaton.png" alt="teams" />
    </router-link>
    <div class="form">
      <h1 style="text-align: center" class="gradientOrange">Cadastrar Equipe</h1>
      <form @submit.prevent>
        <GradientInput v-model:text="dados.name" label="Nome da Equipe" />
        <GradientSelect label="Categoria" v-model:option="dados.categoria">
          <option disabled value="">Selecione uma categoria</option>
          <option
            v-for="category in categoryStore.categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </GradientSelect>

        <div class="select-with-button">
          <p class="integrantes">Integrantes:</p>
          <div class="listMembers">
            <div class="itemContainer">
              <div v-for="(item, index) in members" :key="item.id" class="itemMember">
                <p>{{ item.name }}</p>
                <p>{{ item.class_info.name }}</p>
              </div>
            </div>
            <span class="buttonLine">
              <RoundButton @click="showModal = true" class="roundButton">
                <template v-slot:default>+</template>
              </RoundButton>
            </span>
          </div>
        </div>
        <OrangeButton label="Enviar" @click="teamStore.createTeam(dados)" />
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

p.showData {
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 1000;
  background-color: white;
  padding: 10px;
}

section {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.logo {
  width: 20%;
  margin: 30px 0px 0px 30px;
}

.logo > img {
  width: 100%;
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

.select-with-button {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
}

.buttonLine {
  background-color: #1a1a1e;
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: end;
  height: 20%;
  padding: 1.5rem 0;
  overflow-x: visible;
}

.listMembers {
  width: 100%;
  display: flex;
  background-color: #1a1a1e;
  height: 25vh;
  border: 1px solid #535353;
  flex-direction: column;
  overflow-y: auto;
  border-radius: 9px;
  overflow-x: hidden;
}

.listMembers::-webkit-scrollbar {
  width: 0px;
}

.itemMember {
  display: grid;
  grid-template-columns: 2fr 0fr;
  align-items: center;
  padding: 0.5rem 0.5rem;
  border-bottom: 1px solid #535353;
}

.itemContainer {
  display: flex;
  flex-direction: column;
  color: white;
  height: 80%;
  overflow-y: auto;
  overflow-x: hidden;
}

.itemContainer::-webkit-scrollbar {
  width: 0px;
}
</style>
