<template>
  <Top />
  <Navbar />
<RightSection/>
  <MasterPatientList />
  <Bottom />
</template>

<script>
import Top from './components/Top.vue'
import MasterPatientList from './components/MasterPatientList.vue'
import Navbar from './components/Navbar.vue'
import RightSection from './components/RightSection.vue'
import Bottom from './components/Bottom.vue'

export default {
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated
    }
  },
  components: {
    MasterPatientList,
    Navbar,
    RightSection,
    Top,
    Bottom
},
  
    Asideethods: {
    logout() {
      this.$auth0.logout({ logoutParams: { returnTo: window.location.origin } })
    }
  }
}
</script>
<style scoped></style>
