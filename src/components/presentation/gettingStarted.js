import React from 'react';
import {skinCodes} from '../../constants/typeCodes';


import uuid from 'react-uuid'
import * as actionTypes from "../../Redux/actionTypes";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
function GettingStarted(props) {
     let history = useHistory();
     console.log(props);
     const onChange = async (skinCd) => {
        if(props.id==null){
            let documnet={
              id:uuid(),
              skinCd:skinCd
            }
          props.setSkin(documnet);
        }else {
          props.updateSkin(skinCd)
        }
        props.history.push('/contact');
      }

      
        return (  
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={(value == 'demo-value'? 'selected fa fa-check' :'hide') } ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>
                                <button type="button" onClick={()=>onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    
}
  
function mapStoretoProps(store){
    return store.document
}
function mapDispatchtoProps(dispatch){
    return {
       setSkin:(document)=>{
           dispatch({type:actionTypes.SET_SKIN,payload:document})
       },
       updateSkin:(skinCd)=>{
           dispatch({type:actionTypes.UPDATE_SKIN,payload:skinCd})
       }
    } 
}
export default withRouter(connect(mapStoretoProps,mapDispatchtoProps)(GettingStarted));

