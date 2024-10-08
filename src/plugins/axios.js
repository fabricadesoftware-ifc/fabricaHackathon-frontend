import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

export const api = axios.create({
    baseURL: 'http://localhost:8000/api/'
});

export function setupInterceptors() {
    const authStore = useAuthStore();

    api.interceptors.request.use((config) => {
        if (authStore.token?.access) {
            config.headers.Authorization = `Bearer ${authStore.token.access}`;
        }
        return config;
    });
}