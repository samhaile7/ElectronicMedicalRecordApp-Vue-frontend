<template>
 <nav class = "top">
 

  
    <router-link  to="/dashboard" class="logo"> PrimeEHR </router-link>
    <router-link to="/dashboard"> Home </router-link>
    <router-link to="/login"> Login </router-link>
    <router-link to="/register"> Sign Up </router-link>
    <router-link to="/dashboard"> Patient List </router-link>


</nav> 
  
</template>

<script>
export default {

}
</script>

<style>
.top {
  color: rgb(255, 255, 255);
  background-color: rgb(18, 9, 59);
  border: 1px solid darkgoldenrod;
  border-radius: 8px;
 
  grid-area: header;
  display: flex;
  justify-content: space-between;
 

}
</style>