import {
    ON_GET_PATIENT_PROFILE_BY_ID,  
    ON_GET_PATIENT_PROFILE_BY_NAME,
    ON_GET_PATIENT_PROFILE_BY_CLINIC,
    ON_GET_CLINIC_SCHEDULE_BY_CLINICID
} from "../action/ViewPatientAction";
import * as _ from 'lodash'
const initialState = {

    patientProfile: [{}],
    clinicSchedule:[]
  

};
const ViewPatientReducer = function (state = initialState, action) {
    
    switch (action.type) {
    
        case ON_GET_PATIENT_PROFILE_BY_ID: {    
            // let localpatientProfile = _.cloneDeep(action.payload);  
            return {
                ...state,
                patientProfile: [...action.payload]
            }

        } 
        case ON_GET_PATIENT_PROFILE_BY_NAME:{
            return{
                ...state,
                patientProfile:[...action.payload]
            }
        }
        case ON_GET_PATIENT_PROFILE_BY_CLINIC:{
            return{
                ...state,
                patientProfile:[...action.payload]
            }
        }
        case ON_GET_CLINIC_SCHEDULE_BY_CLINICID:{      
            // console.log("clinic schedule in reducer:",action.payload);     
            return{
                ...state,
                clinicSchedule:{...action.payload}
            }
        }

        default: {

            return state;
        }
    }


};

export default ViewPatientReducer;
