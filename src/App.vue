<template>


    <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Electronic Health Record App" />

      <nav>
        
        
        <RouterLink v-bind:to="{name: 'register'}">Registration/Login</RouterLink>  -->
    <!-- <RouterLink v-bind:to="{name: 'login'}">Login</RouterLink>  -->
    <!-- <RouterLink v-bind:to="{name: 'feed'}">Feed</RouterLink>  -->

    <!-- <router-link to="/dashboard">Dashboard</router-link> |
  <router-link v-if="isAuthenticated" to="/userprofile">User Profile</router-link> |
  
      </nav>
      
        <router-view/>
    
      
    </div>
  </header> -->
    <master-patient-list  />
  

</template>

<script>
import MasterPatientList from './components/MasterPatientList.vue'

export default {
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated
    }
  },
  components: {
    MasterPatientList
  },
  methods: {
    logout() {
      this.$auth0.logout({ logoutParams: { returnTo: window.location.origin } })
    }
  }
}
</script>
<style scoped>




</style>
