<template>
  <div class="masterlist">

    <button v-on:click="listAllPatients()">Get master list</button>

    <h1>{{ placeholder }}</h1>
    <h1>Components to include </h1>
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
