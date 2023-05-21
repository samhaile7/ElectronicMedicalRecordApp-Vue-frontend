<template>


    <h2 v-if="!isAuthenticated">You need to be logged in to see this!</h2>
    <button v-if="!isAuthenticated" @click="login">Log in here</button>
    <pre>
      <code>{{ user }}</code>
    

    </pre>

</template>


<script>
  export default {
    data: function () {
      return {
        user: this.$auth0.user,
        isAuthenticated: this.$auth0.isAuthenticated,
      };
    },
    methods: {
      login() {
        this.$auth0.loginWithRedirect();
      }
    }
  };
</script>