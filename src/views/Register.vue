<template>
<div>
  <form @submit.prevent="register">
    <h2>Register</h2>
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
    <button type="submit">Register</button>
  </form>
</div>
</template>

<script>
export default {
  data() { 
  return { 
    email: '', 
    password: '', 
  }; 
},
methods: {
}}
</script>

<style>

</style>