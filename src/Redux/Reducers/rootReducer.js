import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import documentReducer from "./documnetReducer";
import educationReducer from "./educationReducer";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
let rootReducer = combineReducers({
    document: documentReducer,
    contact: contactReducer,
    education:educationReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth:authReducer,
})
export default rootReducer;