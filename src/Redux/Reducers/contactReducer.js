import * as actionTypes from "../actionTypes";
import initialstate from "../initialstate.json";

export default function contactReducer(state=initialstate.contactSection,action){
   switch(action.type){
       case actionTypes.SET_CONTACT_DETAILS : return {
           ...action.payload,
       }
       default : return state;  
   }
} 