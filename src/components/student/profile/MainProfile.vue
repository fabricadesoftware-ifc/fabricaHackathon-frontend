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
                <Account size="100%" style="color:  #fe5c2b;" />
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
                <h3>Dados Pessoais:</h3>
                <p>
                    <span>
                        <EmailOutline style="color:  #fe5c2b;" />
                        Email:
                    </span>
                    <span>{{ authStore?.data_user.email }}</span>
                </p>
                <p>
                    <span>
                        <Whatsapp style="color: #fe5c2b;" />
                        WhatsApp:
                    </span>
                <div class="input">
                    <input type="number" :disabled="!isEditable" v-model="studentProfileCopy.whatsapp"
                        :class="{ editable: isEditable, nonEditable: !isEditable }">
                </div>
                </p>
            </div>
            <div class="data2">
                <h3>Informações de Contato:</h3>
                <p>
                    <span>
                        <Instagram style="color: #fe5c2b;" />
                        Instagram:
                    </span>
                <div class="input">
                    <input type="text" :disabled="!isEditable" v-model="studentProfileCopy.instagram"
                        :class="{ editable: isEditable, nonEditable: !isEditable }">
                </div>
                </p>
                <p>
                    <span>
                        <Linkedin style="color: #fe5c2b;" />
                        Linkedin:
                    </span>
                <div class="input">
                    <input type="text" :disabled="!isEditable" v-model="studentProfileCopy.linkedin"
                        :class="{ editable: isEditable, nonEditable: !isEditable }">
                </div>
                </p>
                <p>
                    <span>
                        <Github style="color: #fe5c2b;" />
                        Github:
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
                    <Pencil style="color: #fe5c2b;" />
                </button>
                <button class="confirm" v-if="isEditable">Confirmar</button>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: #1A1A1E;
    margin: 10% auto 0;
    border: 1px solid #535353;
    border-radius: 9px;
    padding: 2rem;
    width: 90vw;
    max-width: 800px;
}

@media (min-width: 1440px) {
    section {
        width: 45vw;
    }

    .data_info {
        gap: 3rem;
    }

    .data2>p {
        grid-template-columns: .9fr 2fr;
    }
}

span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.icon {
    width: 15%;
}

.desc {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 10pt;
    text-align: left;
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
    gap: 1rem;
}

.data1 {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    text-align: left;
    width: 40%;
}


.data2 {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    text-align: left;
    width: 60%;
}

.data1>p,
.data2>p {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-align: left;
}

.data2>p {
    display: grid;
    grid-template-columns: 1.1fr 2fr;
    align-items: center;
    gap: 1rem;
    text-align: left;
}

p>span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

input {
    background-color: transparent;
    color: white;
    border: 0;
    outline: none;
    width: 100%;
    text-align: left;
}

input[type=number]::-webkit-inner-spin-button {
    appearance: none;
}

.input {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
}

.editable {
    border-bottom: 2px solid #535353;
}
</style>
