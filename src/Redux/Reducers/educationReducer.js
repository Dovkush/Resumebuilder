import * as actionTypes from "../actionTypes";
import initialstate from "../initialstate.json";
export default function educationReducer(state=initialstate.educationSection,action){
     switch(action.type){
         case actionTypes.SET_EDUCATION_DETAILS: return {
             ...action.payload,
         } 
         default: return state;
     }
}