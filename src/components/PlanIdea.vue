<template>
  
  <ul>

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
    
      
    </div>
  </header>
    <p> <!--
        //Display Welcome! here is a list of patients: and their details
        //Display Master array list
        // display time
        //What would you like to do?
        // 1 update record (usa Patient dao to update record in database)
        // 2 Get mobility status
        // 3 discharge (are you sure?) then add a discharged
        // 4 add new patient (create new patient object, pass it to PAtient DAO interface to add to SQL table)
        // 5 view patient dashboard (uses patient DAo to show current list of patients)
            // enter name, last name etc.and add to constructor
            // print success! Patient created: you will find them on patient dashboard
        // 4 logger system with time functionality into a text file

    }

    private void run(){
        UserInterface userInterface = new UserInterface();
        userInterface.displayWelcomePage();
        userInterface.displayChoices();--></p>
    <li>login/logout</li>
    <li>Homepage</li>
    <li>Summary box</li>
    <li>Header (title + logo)</li>
    <li>Footer (Contact us, social media...)</li>
    <li>Calendar view</li>
    <li>Master patient list</li>
    <li>Patient row</li>
    <li>Provider dashboard header</li>
    <li>Patient note </li>
    <li>Patient info</li>    
    <li>New note entry (update/values/save)</li>
    
    </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>