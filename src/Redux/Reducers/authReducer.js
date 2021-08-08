import initialState from "../initialstate.json";
import * as actionTypes from "../actionTypes";
export default function authReducer(state=initialState.auth,action){
      switch(action.type){
          case actionTypes.SIGN_IN_SUCCESS: return {
              error:"",
              loading:false,
          }
          case actionTypes.SIGN_IN_REQUEST: return {
              error:"",
              loading:true,
          }
          case actionTypes.SIGN_IN_FAILED: return {
              error:action.payload,
              laoding :false,
          }
          case actionTypes.REMOVE_ERROR: return {
              error:"",
              loading:false,
          }
          case actionTypes.SIGN_OUT: return {
              error:"",
              loading: false,
          }
          case actionTypes.SIGN_UP_REQUEST: return {
              error:"",
              loading:true,
          }
          case actionTypes.SIGN_UP_SUCCESS: return {
              error:"",
              loading:false,
          }
          case actionTypes.SIGN_UP_FAILED: return {
              error:action.payload,
              loading :false
          }
          default : return state;
      }
}