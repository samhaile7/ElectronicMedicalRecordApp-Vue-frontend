import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'

// eslint-disable-next-line no-undef
axios.defaults.baseURL = 'http://localhost:8080';

const app = createApp(App)


app.use(router)

app.mount('#app')
