<template>
  <!-- Login form -->
  <button @click="login">Log in</button>

  <div> <button @click="logout">Log out</button></div>
</template>

<script>

export default {
  methods: {
    login() {
   

      this.$auth0.loginWithRedirect();
    },
    logout() {
        this.$auth0.logout({ logoutParams: { returnTo: window.location.origin } });
      }
  },
};
</script>
