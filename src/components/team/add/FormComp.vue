<script setup>
import { reactive, ref, computed, onMounted, watch } from 'vue';
import { useTeamStore } from '@/stores/team';
import { useClassInfoStore } from '@/stores/classInfo';
import { useStudentStore } from '@/stores/student';
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue';
import GradientInput from '@/components/global/input/GradientInput.vue';
import GradientSelect from '@/components/global/input/GradientSelect.vue';
import OrangeButton from '@/components/global/buttons/OrangeButton.vue';
import ModalAddComp from '@/components/team/add/ModalAddComp.vue';
import router from '@/router';

const teamStore = useTeamStore();
const classInfoStore = useClassInfoStore();
const studentStore = useStudentStore();

const selectedItem = ref('');
const searchTerm = ref('');
const showModal = ref(false);
const selectedStudents = ref([]);

const dados = reactive({
    name: '',
    categoria: '',
    turma: '',
    students: [],
    edition: router.currentRoute.value.params.edition
});

function addMember() {
    if (!dados.students.includes(selectedItem.value) && selectedItem.value) {
        dados.students.push(selectedItem.value.id);
        selectedStudents.value.push(selectedItem.value);
    } else {
        alert('Este membro já foi adicionado ou nenhum membro foi selecionado.');
    }
}

const categories = ref([
    'Serviços',
    'Vendas',
    'Locação',
]);

watch(() => dados.turma, async (newTurmaId) => {
    if (newTurmaId) {
        await studentStore.getStudentsByClass(newTurmaId);
    }
});

const filteredStudents = computed(() => {
    const filtered = studentStore.studentsClass.filter(student =>
        student.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
    if (filtered.length === 0 && searchTerm.value) {
        return [{ id: null, name: 'Nenhum aluno encontrado' }];
    }
    return filtered;
});

function removeMember(index) {
    dados.students.splice(index, 1);
    selectedStudents.value.splice(index, 1);
}

onMounted(async () => {
    await classInfoStore.getClassesInfo();
    await studentStore.getStudents();
});

</script>

<template>
    <p class="showData">{{ dados }} + {{ selectedStudents }}</p>
    <ModalAddComp v-if="showModal" @close="showModal = false">
        <template v-slot:default>
            <div class="modalForm">
                <div class="inputs">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h1>Adicionar Equipe</h1>
                        <button @click="showModal = !showModal" class="round-button">X</button>
                    </div>
                    <GradientSelect label="Turma" v-model:option="dados.turma">
                        <option disabled value="">Selecione uma turma</option>
                        <option v-for="item in classInfoStore.classesInfo" :key="item.id" :value="item.id">
                            {{ item.name }}
                        </option>
                    </GradientSelect>

                    <div class="buttonAdd">
                        <GradientSelect label="Integrantes" v-model:option="selectedItem">
                            <option disabled value="">Selecione um Integrante:</option>
                            <option v-for="item in filteredStudents" :key="item.id" :value="item">
                                {{ item.name }}
                            </option>
                        </GradientSelect>
                        <button @click="addMember" class="round-button" style="margin-top: 20px;">+</button>
                    </div>

                    <div class="listMembers">
                        <div v-for="item in selectedStudents" :key="item" class="itemMember">
                            <p>{{ item.name }}</p>
                            <p>{{ item.classInfo.name }}</p>
                            <button class="round-button" @click="removeMember(item.index)">
                                <TrashCanOutline />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </ModalAddComp>

    <section>
        <router-link to="/home" class="logo">
            <img src="/public/logoHackaton.png" alt="teams">
        </router-link>
        <div class="form">
            <h1 style="text-align: center;">Cadastrar Equipe</h1>
            <form @submit.prevent>
                <GradientInput v-model:text="dados.name" label="Nome da Equipe" />

                <GradientSelect label="Categoria" v-model:option="dados.categoria">
                    <option disabled value="">Selecione uma categoria</option>
                    <option v-for="item in categories" :key="item" :value="item">
                        {{ item }}
                    </option>
                </GradientSelect>

                <div class="select-with-button">
                    <p>Integrantes:</p>
                    <button @click="showModal = !showModal" class="round-button">+</button>
                </div>
                <OrangeButton label="Enviar" class="buttonAdd" @click="teamStore.createTeam(dados)" />
            </form>
        </div>
    </section>
</template>

<style scoped>
.round-button>span {
    display: flex;
    justify-content: center;
    align-items: center;
}

.listMembers {
    width: 100%;
    display: flex;
    background-color: #1A1A1E;
    height: 180px;
    margin: 10px auto;
    border: 1px solid #535353;
    flex-direction: column;
    overflow-y: auto;
    border-radius: 9px;
}

.listMembers::-webkit-scrollbar {
    width: 0px;
}

.listMembers>div>button {
    justify-self: end;
}

.listMembers>div {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    align-items: center;
    padding: .5rem;
    border-bottom: 1px solid #535353;
    color: white;
}

.buttonAdd {
    display: grid;
    grid-template-columns: 90% 10%;
    gap: 1rem;
    width: 100%;
    margin: 0 auto;
    align-items: center;
}

.inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.buttons {
    display: flex;
    justify-content: space-around;
    width: 30%;
    gap: 3rem;
    margin: 0 70%;
}

.modalForm {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    justify-content: space-between;
    height: 100%;
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

.logo>img {
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

h1 {
    background: linear-gradient(90deg, #FE5C2B 0%, #98371A 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 35px;
    font-weight: 500;
}

.select-with-button {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: white;
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

.round-button:active {
    background-color: #FE5C2B;
    color: #1A1A1E;
    scale: 0.9;
}
</style>