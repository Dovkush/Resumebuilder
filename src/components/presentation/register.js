import React,{useState,useEffect} from "react";
import { isLoaded } from 'react-redux-firebase'
import { connect } from "react-redux";
import * as authMiddleWare from "../../Redux/Reducers/authMiddleWare" 
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
  function Register(props) {
 
    let history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const handleEmail= (e)=>{
      setEmail(e.target.value);
      }
      const handlePassword=(e)=>{
        setPassword(e.target.value);
      }
   
  const onSubmit=()=>{
    
     props.signUp({email:email, password:password})
    
  }
   useEffect(()=>{
     if(props.auth.uid){
       history.push("/");
     }
   })
 
   return (
     <>
     {props.authMine.loading?<h4 style={{marginTop:'10%',height:'52vh'}}>Patiently Wait...we are resgistering you in</h4>:
       <> <div className="container med contact">
     <div className="section funnel-section">
         <div className="form-card">
        
             <h2 className="form-heading center">Enter your details</h2>
             <div className="form-section">
                 <div className="input-group full"><label>Email</label>
                     <div className="effect"><input type="text" name="email" value={email||''}  onChange={handleEmail}  /><span></span>
                     </div>
                 </div>

                 <div className="input-group full"><label>Password</label>
                     <div className="effect"><input  type="password" name="password"  value={password||''} onChange={handlePassword}/><span></span>
                     </div>
                 </div>
                 {props.authMine.error!==""?<div className="input-group full">
                         <span className="error-message" >{props.authMine.error}</span> 
                 </div> :<></>}
                 <div className="form-buttons">
                     <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Register</button>
                 </div>
                
             </div>
         </div>

     </div>
 </div>
 </>

     }
     </>
   )
    

  }
 


const mapStatetoProps=(store)=>{
    return {auth:store.firebase.auth,authMine: store.auth}
}
const mapDispatchtoProps=(dispatch)=>{
   return {
     signUp:(userData)=>{
       dispatch(authMiddleWare.signUp(userData));
     }
   }
}
  export default withRouter(connect(mapStatetoProps,mapDispatchtoProps)(Register));
//   {props.authMine.loading?<h4 style={{marginTop:'10%',height:'52vh'}}>Patiently Wait...we are resgistering you in</h4>:
//   <> <div className="container med contact">
//      <div className="section funnel-section">
//          <div className="form-card">
        
//              <h2 className="form-heading center">Enter your details</h2>
//              <div className="form-section">
//                  <div className="input-group full"><label>Email</label>
//                      <div className="effect"><input type="text" name="email" value={email||''}  onChange={handleEmail}  /><span></span>
//                      </div>
//                  </div>

//                  <div className="input-group full"><label>Password</label>
//                      <div className="effect"><input  type="password" name="password"  value={password||''} onChange={handlePassword}/><span></span>
//                      </div>
//                  </div>
//                  {props.authMine.error!==""?<div className="input-group full">
//                          <span className="error-message" >{props.authMine.error}</span> 
//                  </div> :<></>}
//                  <div className="form-buttons">
//                      <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Register</button>
//                  </div>
                
//              </div>
//          </div>

//      </div>
//  </div>
//  </>
// }