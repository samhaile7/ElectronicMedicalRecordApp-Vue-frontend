<template>
  <div class="masterlist">

    <button v-on:click="listAllPatients()">Get master list</button>
    <h1>{{ placeholder }}</h1>
    <h1>Components to include </h1>
  <ul>
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
  </div>
</template>

<script>
import PatientService from '../services/PatientService';




export default {
  data() {
    return {
      placeholder: 'No patients here'

    }
  },

  methods: {
    listAllPatients() {
      PatientService.listAllPatients().then((response) => {
        if (response.status === 200) {
          this.placeholder = response.data;
        }
      }).catch((err) => console.log(err));
    }
  }
}
</script>

<style>
.masterlist {

  border: 0.5rem;
  border-style: dashed;
  border-color: crimson;
}
</style>
