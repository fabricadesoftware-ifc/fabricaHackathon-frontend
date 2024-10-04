import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import { useStorage } from '@vueuse/core';
import { useRouter } from 'vue-router';
import authService from '@/services/auth';

export const useAuthStore = defineStore('auth', () => {
    const isLogged = useStorage('isLogged', false, sessionStorage);
    const token = useStorage('token', {}, sessionStorage);
    const user = reactive({
        email: '',
        password: ''
    });
    const router = useRouter();

    const createAuthentication = async(avaliator) => {
        try {
            const data = await authService.createAuthentication(avaliator);
            token.value = data;
            isLogged.value = true;
            console.log(token.value, isLogged.value);
            router.push('/');
        } catch(error) {
            console.error('Erro:', error);
        };
    };

    return { isLogged, token, user, createAuthentication };
});