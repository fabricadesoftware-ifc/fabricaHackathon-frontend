<script setup>
import { useAuthStore } from '@/stores/auth';
import HeaderButton from '../button/HeaderButton.vue';
import Dropdown from 'v-dropdown'
import Logout from "vue-material-design-icons/Logout.vue"
import Account from "vue-material-design-icons/Account.vue"
import Home from "vue-material-design-icons/Home.vue"
import Login from "vue-material-design-icons/Login.vue"

const authStore = useAuthStore()

</script>

<template>
    <Dropdown trigger="hover">
        <template #trigger>
            <HeaderButton text="Menu" />
        </template>
        <div class="dropLinks">

            <router-link to="/home" class="drop">
                <Home />
                Home
            </router-link>

            <router-link to="/auth" class="login" v-if="!authStore.isLogged">
                <Login />
                Login
            </router-link>
            <div v-if="authStore.isLogged">
                <router-link to="/profile" class="drop">
                    <Account />
                    Perfil
                </router-link>
                <button @click="authStore.logout" class="logout">
                    <Logout />
                    Logout
                </button>
            </div>

        </div>
    </Dropdown>
</template>

<style scoped>
span {
    display: flex;
    justify-content: center;
    align-items: center;

}

img {
    width: 50%;
    background-color: #161617;
    border-radius: 27px;
    padding: 0.5rem;
}

a.header {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    padding: 1rem;
}

.dropLinks {
    width: 150px;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    background-color: #161617;
}

a.drop {
    color: #ffffff;
    text-decoration: none;
    padding: 1rem 1rem;
    transition: 0.3s ease-in-out;
    display: flex;
    gap: .5rem;
}

a.login {
    color: blue;
    text-decoration: none;
    padding: 1rem 1rem;
    transition: 0.3s ease-in-out;
    display: flex;
    gap: .5rem;
}

button.logout {
    color: red;
    text-decoration: none;
    padding: 1rem 1rem;
    transition: 0.3s ease-in-out;
    display: flex;
    gap: .5rem;
    background-color: transparent;
    border: 0;
    width: 100%;
    cursor: pointer;
}

a.drop:hover,
button.logout:hover,
a.login:hover {
    background-color: #1c1c1f;

}
</style>