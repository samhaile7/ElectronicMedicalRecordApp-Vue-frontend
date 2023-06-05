<template>
  <Top />
 <router-view class = "routerview" />
</template>

<script>
import Top from './components/Top.vue'


export default {
  data() {
    return {
    }
  },
  components: {
    Top
    
},
  
    Asideethods: {
    logout() {
      this.$auth0.logout({ logoutParams: { returnTo: window.location.origin } })
    }
  }
}
</script>
<style scoped>
.routerview{
  margin-top: 100px;
}

</style>
