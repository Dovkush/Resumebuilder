import React,{useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
import * as actionTypes from "../../Redux/actionTypes";
import {fieldCd, skinCodes}  from '../../constants/typeCodes';

import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ResumePreview from './resumePreview'
import { connect } from "react-redux";

function Contact(props) {
   let history = useHistory();
   /***here we have multiple input fields in form so we are keeping a single state which is an object 
and which will have all input states as key in this object */
   const [contact,setContact]= useState(props.contact);

/* single onChange handler for input fields which gets the current input field by 
       name(unique for every input ) and getting value from input value and then we set value for that 
       particular input in object*/
  const onchange=(event)=>{
        var key =event.target.name;
        var val =event.target.value;
        // this.setState({contactSection:update(this.state.contactSection,{$merge: {[key]:val}})});
        setContact({...contact,[key]:val})
    }
    console.log(props.document);
    const onSubmit= async()=>{
        
       props.setContactDetails(contact);
        history.push('/education');
    }

/*  returning us the value for key we passed to function from contact object*/
    const getFieldData=(key)=>{
        //if contact and key are not undefined returns value of key otherwise empty string 
        if(contact && contact[key]){
          return contact[key]
        }
        return "";
    }
    
    return (
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Personal Details</h2>
                    <div className="form-section">
                        <div className="input-group"><label>First Name</label>
                            <div className="effect"><input type="text" name={fieldCd.FirstName} value={getFieldData(fieldCd.FirstName)}  onChange={onchange}  /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Last Name</label>
                            <div className="effect"><input type="text" name={fieldCd.LastName}  value={getFieldData(fieldCd.LastName)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group full"><label>Professional Summary</label>
                            <div className="effect"><input type="text" name={fieldCd.ProfSummary}   value={getFieldData(fieldCd.ProfSummary)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Email</label>
                            <div className="effect"><input type="text"  name={fieldCd.Email}  value={getFieldData(fieldCd.Email)}  onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Phone</label>
                            <div className="effect"><input type="text"  name={fieldCd.Phone}   value={getFieldData(fieldCd.Phone)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Profession</label>
                            <div className="effect"><input type="text"  name={fieldCd.Profession}  value={getFieldData(fieldCd.Profession)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Street</label>
                            <div className="effect"><input type="text" name={fieldCd.Street}   value={getFieldData(fieldCd.Street)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>City</label>
                            <div className="effect"><input type="text" name={fieldCd.City}  value={getFieldData(fieldCd.City)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>State</label>
                            <div className="effect"><input type="text"   name={fieldCd.State}  value={getFieldData(fieldCd.State)}  onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>


                        <div className="input-group"><label>Country</label>
                            <div className="effect"><input type="text"  name={fieldCd.Country}  value={getFieldData(fieldCd.Country)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Pin Code</label>
                            <div className="effect"><input type="text" name={fieldCd.ZipCode}  value={getFieldData(fieldCd.ZipCode)}  onChange={onchange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="form-buttons">
                            <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                            <NavLink to='/getting-started'  className="center">Back</NavLink>
                        </div>
                    </div>

                </div>

                <div className="preview-card">
                    <ResumePreview contactSection={contact} skinCd={props?.document?.skinCd}></ResumePreview>
                </div>

            </div>
        </div>
    );
}

function mapStoretoProps(store){
    console.log(store);
   return {document:store.document,contact:store.contact};
}
function mapDispatchtoProps(dispatch){
    return {
        setContactDetails:(contact)=>{
             dispatch({type:actionTypes.SET_CONTACT_DETAILS,payload:contact});
        }
    }
}
export default withRouter(connect(mapStoretoProps,mapDispatchtoProps)(Contact));

