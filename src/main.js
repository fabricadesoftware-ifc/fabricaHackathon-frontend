import './assets/main.css'

import { createApp } from 'vue'
import pinia from "./plugins/pinia";
import { setupInterceptors } from '@/plugins/axios';
import Toast, { POSITION } from "vue-toastification"
import "vue-toastification/dist/index.css"

import App from './App.vue'
import router from './router'

const app = createApp(App)

const options = {
    position: POSITION.TOP_LEFT
}

app.use(pinia)
app.use(router)
app.use(Toast, options)

app.mount('#app')

setupInterceptors();

