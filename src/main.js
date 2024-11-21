import './assets/main.css'

import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import pinia from './plugins/pinia'
import { setupInterceptors } from '@/plugins/axios'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import vuetify from './plugins/vuetify'

const options = {
  position: POSITION.TOP_LEFT
}

app.use(pinia)
app.use(router)
app.use(Toast, options)
app.use(vuetify)
app.mount('#app')

setupInterceptors()
