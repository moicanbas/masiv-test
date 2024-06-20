
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import Vue3Toasity from 'vue3-toastify';

import 'vue3-toastify/dist/index.css';
import '@/index.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
