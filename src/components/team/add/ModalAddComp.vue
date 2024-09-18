<script setup>
import { reactive, computed, watch } from 'vue';
import { useClassInfoStore } from '@/stores/classInfo';
import { useStudentStore } from '@/stores/student';
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue';
import GradientSelect from '@/components/global/input/GradientSelect.vue';
import RoundButton from '@/components/global/button/RoundButton.vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
    isOpen: Boolean,
    edition: String
});

const emit = defineEmits(["addStudent", "update:isOpen", "update:team"]);

const store = { classInfo: useClassInfoStore(), student: useStudentStore() };
const infoData = reactive({ selectedItem: '', searchTerm: '', selectedStudents: [], turma: '', students: [], selectedLeader: '' });

const addMember = () => {
    if (infoData.selectedItem) {
        infoData.students.push(infoData.selectedItem.id);
        infoData.selectedStudents.push(infoData.selectedItem);
        emit("addStudent", infoData);
        emit("update:team", infoData.selectedStudents);
        infoData.selectedItem = '';
    } else {
        alert('Nenhum membro foi selecionado.');
    }
};

const addLeader = (leader) => {
    infoData.selectedLeader = leader;
    emit("addStudent", infoData);
};

watch(() => infoData.turma, async (newTurmaId) => {
    if (newTurmaId) await store.student.getAvailableStudentsByClass(props.edition, newTurmaId);
});

const filteredStudents = computed(() => {
    const filtered = store.student.studentsClass.filter(s => s.name.toLowerCase().includes(infoData.searchTerm.toLowerCase()));
    const available = filtered.filter(s => !infoData.students.includes(s.id));
    return available;
});

const removeMember = (index) => {
    infoData.students.splice(index, 1);
    infoData.selectedStudents.splice(index, 1);
};

const closeModal = () => {
    emit("update:isOpen", false);
};
</script>

<template>
    <main v-if="isOpen" @click.self="closeModal">
        <article>
            <div class="modalForm">
                <div class="inputs">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h1 class="gradientOrange">Adicionar Equipe</h1>
                        <RoundButton @click="closeModal">
                            <template v-slot:default>x</template>
                        </RoundButton>
                    </div>
                    <GradientSelect label="Turma do Integrante" v-model:option="infoData.turma">
                        <option disabled value="">Selecione uma turma</option>
                        <option v-for="item in store.classInfo.classesInfo" :key="item.id" :value="item.id">{{ item.name
                            }}</option>
                    </GradientSelect>
                    <div class="buttonAdd">
                        <GradientSelect label="Integrante" v-model:option="infoData.selectedItem">
                            <option disabled value="" v-if="!filteredStudents.length">Nenhum aluno disponível encontrado na turma.</option>
                            <option disabled value="" v-else>Selecione um Integrante:</option>
                            <option v-for="item in filteredStudents" :key="item.id" :value="item">{{ item.name }}
                            </option>
                        </GradientSelect>
                        <div class="position1">
                            <RoundButton @click="addMember">
                                <template v-slot:default>+</template>
                            </RoundButton>
                        </div>
                    </div>
                    <GradientSelect label="Líder da Equipe" v-model:option="infoData.selectedLeader" @changeLeader="addLeader">
                        <option disabled value="">Selecione um líder:</option>
                        <option v-for="item in infoData.selectedStudents" :key="item.id" :value="item.id">{{ item.name }}
                        </option>
                    </GradientSelect>
                    <div class="listMembers">
                        <div v-for="(item, index) in infoData.selectedStudents" :key="item.id" class="itemMember">
                            <p>{{ item.name }}</p>
                            <p>{{ item.class_info.name }}</p>
                            <RoundButton @click="removeMember(index)">
                                <template v-slot:default>
                                    <div class="alignSpan">
                                        <TrashCanOutline />
                                    </div>
                                </template>
                            </RoundButton>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </main>
</template>

<style scoped>
main {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    z-index: 10;
}

article {
    width: 50%;
    background-color: #131316;
    border-radius: 15px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
    display: flex;
    padding: 1rem;
    flex-direction: column;
}

.listMembers {
    width: 100%;
    display: flex;
    background-color: #1A1A1E;
    height: 25vh;
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
    padding: .5rem .5rem;
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
    justify-content: space-between;
}

.position1 {
    grid-column: 2;
    padding-top: 1.3rem;
    display: flex;
    justify-content: end;
    width: 80%;
}

.inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.modalForm {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    justify-content: space-between;
    height: 100%;
}

.select-with-button {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: white;
}

.alignSpan>span {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>