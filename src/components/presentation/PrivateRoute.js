import React from 'react'
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { isLoaded, isEmpty } from "react-redux-firebase";
function PrivateRoute({component:Component,...remainingProps}) {
    // let Component=props.component;
    // let auth=props.auth;
    let auth=remainingProps.auth;
    return (
     
        <Route
        {...remainingProps}
        render={({ props }) =>
          isLoaded(auth) && !isEmpty(auth) ? (
            <Component {...props}/>
          ) : (
            <Redirect
              to="/login"
            />
          )
        }
      />
     
    )
}
const mapStatetoProps=(store)=>{
    console.log(store);
   return {auth:store.firebase.auth};
}
export default withRouter(connect(mapStatetoProps)(PrivateRoute));
