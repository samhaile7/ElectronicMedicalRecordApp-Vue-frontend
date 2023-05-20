import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import PrimeVue from 'primevue/config';
import './assets/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3whitsd2QKIxiRTo7emnvI4trEDLQSrs",
  authDomain: "test-d2021.firebaseapp.com",
  projectId: "test-d2021",
  storageBucket: "test-d2021.appspot.com",
  messagingSenderId: "880734501824",
  appId: "1:880734501824:web:2b3ebdb69592bf70c72625"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// eslint-disable-next-line no-undef
axios.defaults.baseURL = 'http://localhost:8080';

const app = createApp(App)


app.use(router)


app.use(PrimeVue);

app.mount('#app')


