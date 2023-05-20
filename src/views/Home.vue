<template>
   <div>   
  <form @submit.prevent="login">     
    <h2>Login</h2>     
    <input       
      type="email"       
      placeholder="Email address..."       
      v-model="email"     
    />     
    <input       
      type="password"       
      placeholder="password..."       
      v-model="password"     
    />     
    <button type="submit">
       Login
    </button>   
  </form> 
</div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {

   data() { 
  return { 
    email: '', 
    password: '', 
  }; 
},
methods: {
   login() {
   const auth = getAuth();
signInWithEmailAndPassword(auth, this.email, this.password)
  .then(() => {
    // Signed in userCredential
    alert('Successfully logged in');
        this.$router.push('/dashboard');
    // ...
  })
  .catch((error) => {
   alert(error.message);
  });

}}}

</script>

<style>

</style>