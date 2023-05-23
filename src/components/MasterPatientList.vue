<template>
  <div class="masterlist">
    <button v-on:click="listAllPatients()">Get master list</button>
    

    <el-table v-if="showTable" :data="allPatients" height="250">
      <el-table-column prop="patientId" label="patientId" />
      <el-table-column prop="firstName" label="First" />
      <el-table-column prop="lastName" label="Last" />

      <el-table-column prop="birthDate" label="Birthday" />
    
        <el-table-column prop="pulseRate" label="Pulse (BPM)" />
        <el-table-column prop="respirationRate" label="Respiratory Rate (RR)" />
        <el-table-column prop="temperature" label="Temp(F)" />
        <el-table-column prop="partialThromboplastinTime" label="PTT" />
        <el-table-column prop="systolicBloodPressure" label="Systolic Pressure" />
        <el-table-column prop="diastolicBloodPressure" label="Diastolic Pressure" />
        <el-table-column prop="mobilityStatusId" label="mobilityStatusId" />
    
    </el-table>
  </div>
</template>

<script>
import PatientService from '../services/PatientService'

export default {
  data() {
    return {
      allPatients: [],
      showTable: false
    }
  },

  methods: {
    listAllPatients() {
      PatientService.listAllPatients()
        .then((response) => {
          if (response.status === 200) {
            this.allPatients = response.data
            this.showTable = true
          }
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style>
.masterlist {
  color: darkkhaki;
  background-color: lightyellow;
  border: 1px solid darkgoldenrod;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
}
</style>
