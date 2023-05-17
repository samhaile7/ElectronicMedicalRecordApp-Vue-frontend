import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRWcPMQS2Y6O1-thbt72oEYTvLQPbIoq0",
  authDomain: "emrauth-95284.firebaseapp.com",
  projectId: "emrauth-95284",
  storageBucket: "emrauth-95284.appspot.com",
  messagingSenderId: "408541018684",
  appId: "1:408541018684:web:c0ce8732a3e78b3b21a139"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// eslint-disable-next-line no-undef
axios.defaults.baseURL = 'http://localhost:8080';

const app = createApp(App)


app.use(router)

app.mount('#app')
