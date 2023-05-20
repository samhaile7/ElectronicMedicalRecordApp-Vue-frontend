import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import PrimeVue from 'primevue/config';
import './assets/main.css'
import { createAuth0 } from '@auth0/auth0-vue';

// Import the functions you need from the SDKs you need


// Initialize Firebase

// eslint-disable-next-line no-undef
axios.defaults.baseURL = 'http://localhost:8080';

const app = createApp(App)





app.use(
  createAuth0({
    domain: "dev-5ukxxjed0tuizqj4.us.auth0.com",
    clientId: "kV5WP09LPTFmDV4LzpQBdZ0oHZItAriE",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
);



app.use(router)


app.use(PrimeVue);

app.mount('#app')


