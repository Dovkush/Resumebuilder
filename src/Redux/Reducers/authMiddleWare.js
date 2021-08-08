import * as actionTypes from "../actionTypes";

export const signIn=(userData)=>{
      return async (dispatch,getState,{getFirebase ,getFirestore})=>{
             dispatch({type:actionTypes.SIGN_IN_REQUEST});
             const firebase =getFirebase();
             try{
                 console.log(userData);
                 let data=await firebase.auth().signInWithEmailAndPassword(userData.email,userData.password);
                  dispatch({type:actionTypes.SIGN_IN_SUCCESS});
             }catch(err){
                  console.log("err",err);
                 
                  setTimeout(()=>{
                      dispatch({type:actionTypes.REMOVE_ERROR});
                  },2000);
                  dispatch({type:actionTypes.SIGN_IN_FAILED,payload:"Invalid Email id or Password"})
             }
      }
}
export const signOut=()=>{
    return async (dispatch,getState,{getFirebase ,getFirestore})=>{
        const firebase =getFirebase();
        dispatch({type:actionTypes.SIGN_OUT});
        let data=await firebase.auth().signOut();
    }
}

export const signUp=(userData)=>{
   return async (dispatch,getState,{getFirebase ,getFirestore})=>{
       const firebase=getFirebase();
       const firestore=getFirestore();
       dispatch({type:actionTypes.SIGN_UP_REQUEST});
     try{
        let data=await firebase.auth().createUserWithEmailAndPassword(
            userData.email,
            userData.password
        );
        await firestore.collection("users").doc(data.user.uid).set({
            email:userData.email,
            resumeIds:[],
        })
        dispatch({type:actionTypes.SIGN_UP_SUCCESS});
     } catch(e){
         dispatch({type:actionTypes.SIGN_UP_FAILED,payload:"Can't create user with invalid credentials"});
         setTimeout(()=>{
            dispatch({type:actionTypes.REMOVE_ERROR})
        },2000);
     }

    }
}