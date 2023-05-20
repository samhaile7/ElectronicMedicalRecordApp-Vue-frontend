
<script>
import MasterPatientList from "./components/MasterPatientList.vue";
// import NavBarButtons from "./views/NavBarButtons.vue";



export default {
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },
  components: {
    MasterPatientList // Step 2
    ,
    
    
},
    methods: {
        logout() {         

     
    
        this.$auth0.logout({ logoutParams: { returnTo: window.location.origin } });
      },
   }
  }
</script>

<template>
 
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Electronic Health Record App" />

      <nav>
        
        
        <RouterLink v-bind:to="{name: 'register'}">Registration/Login</RouterLink> 
        <!-- <RouterLink v-bind:to="{name: 'login'}">Login</RouterLink>  -->
        <!-- <RouterLink v-bind:to="{name: 'feed'}">Feed</RouterLink>  -->
        
  <router-link to="/dashboard">Dashboard</router-link> |
  <router-link v-if="isAuthenticated" to="/userprofile">User Profile</router-link> |
  
      </nav>
      
        <router-view/>
    
      
    </div>
  </header>
 <master-patient-list />

 

  

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: red;
  padding: 4px;
  border-radius: 4px;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
