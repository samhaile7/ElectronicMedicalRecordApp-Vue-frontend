import axios from "axios";

export default {

    listAllPatients() {
        return axios.get(`/patients`)
    }
}