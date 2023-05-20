<template>
  <!-- Login form -->
  <div></div>
</template>

<script>
import firebase from '@/firebase.js';

export default {
  methods: {
    login() {
      const email = 'example@example.com';
      const password = 'password';

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Login successful
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          // Handle login error
          console.error(error);
        });
    },
  },
};
</script>
