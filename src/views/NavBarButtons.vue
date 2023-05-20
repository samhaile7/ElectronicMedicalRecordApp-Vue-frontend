<template>
  <div class="nav-bar__buttons">
    <template v-if="!isAuthenticated">
      <Signup />
      <Login />
    </template>
    <template v-if="isAuthenticated">
      <Logout />
    </template>
  </div>
</template>

<script>

import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Signup from "../views/Signup.vue";

export default {
  components: { Login, Logout, Signup },
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },
};
</script>
