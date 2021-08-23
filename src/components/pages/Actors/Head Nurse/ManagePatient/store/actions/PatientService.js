import axios from 'axios';

const PATIENT_API_BASE_URL = "http://localhost:8080/wecare";

class PatientService {

  savePatient(patient) {
    return axios.post(PATIENT_API_BASE_URL + '/addPatient', patient);
  }

  getPatient() {
    return axios.get(PATIENT_API_BASE_URL + '/getPatient');
  }

  getClinicDays(data) {
    return axios.get(PATIENT_API_BASE_URL + '/getClinicDays/' + data);
  }
  getClinics() {
    return axios.get(PATIENT_API_BASE_URL + '/getClinics')
  }
  getPatientProfileDetailsById(id) {
    return axios.get(PATIENT_API_BASE_URL + '/getPatientProfile/' + id);
  }
  getPatientProfileDetailsByName(name) {
    return axios.get(PATIENT_API_BASE_URL + '/getPatientProfileByName/' + name);
  }
  getPatientProfileDetailsByClinic(clinicId) {
    return axios.get(PATIENT_API_BASE_URL + '/getPatientProfileDetailsByClinic/' + clinicId);
  }

}

export default new PatientService()