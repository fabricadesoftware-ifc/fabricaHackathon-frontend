<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/stores/auth';
import Account from 'vue-material-design-icons/Account.vue';
import Github from 'vue-material-design-icons/Github.vue';
import Instagram from 'vue-material-design-icons/Instagram.vue';
import Linkedin from 'vue-material-design-icons/Linkedin.vue';
import Whatsapp from 'vue-material-design-icons/Whatsapp.vue';
import Pencil from 'vue-material-design-icons/Pencil.vue';
import EmailOutline from 'vue-material-design-icons/EmailOutline.vue';

const isEditable = ref(false);
const authStore = useAuthStore();

const studentProfileCopy = reactive({
    instagram: authStore.student_profile_data.instagram || '',
    linkedin: authStore.student_profile_data.linkedin || '',
    github: authStore.student_profile_data.github || '',
    whatsapp: authStore.student_profile_data.whatsapp || '',
});

const toggleEdit = () => {
    isEditable.value = !isEditable.value;
};
</script>

<template>
    <section>
        <div class="title">
            <div class="icon">
                <Account size="100%" />
            </div>
            <div class="info">
                <h1>{{ authStore.data_user.name }}</h1>
                <span class="desc">
                    <p>Matricula: {{ authStore.student_profile_data.registration }}</p>
                    <p>Curso: Informática</p>
                </span>
            </div>
        </div>
        <div class="data_info">
            <div class="data1">
                <h3>Personal Data</h3>
                <p>
                    <span>
                        <EmailOutline />
                        Email:
                    </span>
                    <span>{{ authStore?.data_user.email }}</span>
                </p>
                <p>
                    <span>
                        <Whatsapp style="color: green;" />
                        WhatsApp:
                    </span>
                    <span>{{ authStore?.student_profile_data.whatsapp }}</span>
                </p>
            </div>
            <div class="data2">
                <h3>Contact Informations</h3>
                <p>
                    <span>
                        <Instagram style="color: magenta;" />
                        Instagram:
                    </span>
                <div class="input">
                    <input type="text" :disabled="!isEditable" v-model="studentProfileCopy.instagram"
                        :class="{ editable: isEditable, nonEditable: !isEditable }">
                </div>
                </p>
                <p>
                    <span>
                        <Linkedin style="color: blue;" />
                        Linkedin:
                    </span>
                <div class="input">
                    <input type="text" :disabled="!isEditable" v-model="studentProfileCopy.linkedin"
                        :class="{ editable: isEditable, nonEditable: !isEditable }">
                </div>
                </p>
                <p>
                    <span>
                        <Github />
                        GitHub:
                    </span>
                <div class="input">
                    <input type="text" :disabled="!isEditable" v-model="studentProfileCopy.github"
                        :class="{ editable: isEditable, nonEditable: !isEditable }">
                </div>
                </p>

            </div>
        </div>
        <div class="button">
            <div class="widthButton">
                <button class="confirm" @click="toggleEdit">
                    <Pencil />
                </button>
                <button class="confirm" v-if="isEditable">Confirmar</button>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: #1A1A1E;
    width: 40%;
    margin: 10% auto;
    border: 1px solid #535353;
    border-radius: 9px;
    padding: 2rem;
}

span {
    display: flex;
    align-items: center;
}

.icon {
    width: 15%;
}

.desc{
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 10pt;
}

.info {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}


button.confirm {
    background-color: #1A1A1E;
    padding: .8rem;
    border-radius: 9px;
    color: white;
    border: 1px solid #535353;
    cursor: pointer;
    transition: .3s ease-in-out;
}

button.confirm:hover {
    background-color: #535353;
}

.title {
    color: white;
    display: flex;
    gap: 2rem;
    align-items: center;
}

.button {
    width: 100%;
    display: flex;
    justify-content: start;
    margin: 25px auto 0;
}

.widthButton {
    width: 25%;
    display: flex;
    gap: 1rem;
    justify-content: start;
}

.data_info {
    width: 100%;
    display: flex;
    margin: 10px auto;
    color: white;
    gap: 3rem;
}

.data2,
.data1 {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.data1>p {
    display: flex;
    gap: 1rem;
}

.data2>p {
    display: grid;
    grid-template-columns: .4fr 1fr;
    gap: 1rem;
}

p>span {
    display: flex;
    gap: 1rem;
}

input {
    background-color: transparent;
    color: white;
    border: 0;
    outline: none;
    width: 100%;
}

.input {
    width: 80%;
    display: flex;
    align-items: start;
    justify-content: start;
}

.editable {
    border-bottom: 2px solid #535353;
}
</style>
