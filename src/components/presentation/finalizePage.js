import React from "react";
import ResumePreview from './resumePreview'
import  jsPDF  from "jspdf";
import { connect } from "react-redux";
import html2canvas from 'html2canvas';
import { withRouter } from "react-router-dom";
import { useFirestore } from 'react-redux-firebase';

   function Finalize(props) {
    let educationSection= props.education;
    let contactSection=props.contact;
    let documentd=props.document
    let firestore=useFirestore();
  // console.log(document,contactSection,educationSection);
    const saveToDatabase= async()=>{
       let data=await firestore.collection("users").doc(props.auth.uid).get();
       let resumeIds=data.resumeIds;
       let newObj={eduacationSection:educationSection,contactSection:contactSection,document:documentd.id,skincd:documentd.skinCd}
       let newResumeIds={...resumeIds,[documentd.id]:newObj};
       await firestore.collection("users").doc(props.auth.uid).update({
         resumeIds:newResumeIds
       })
    }
     const downloadResume=()=> {
    
       const input = document.getElementById('resumePreview');
      // console.log(document)
       html2canvas(input)
         .then((canvas) => {
           const imgData = canvas.toDataURL('image/png');
           const pdf = new jsPDF("p", "mm", "a4");
           var width = pdf.internal.pageSize.getWidth();
           var height = pdf.internal.pageSize.getHeight();
           pdf.addImage(imgData, 'JPEG', 0, 0,width,height);
           // pdf.output('dataurlnewwindow');
           pdf.save("resume.pdf");
         }).catch(function(error){
           console.log(error)
         })
     }
    return (
     
      <div className="container full finalize-page" >
        
      <div className="funnel-section ">
          <div className="finalize-preview-card " id="resumePreview">
          <ResumePreview contactSection={contactSection} educationSection={educationSection} skinCd={props?.document?.skinCd}></ResumePreview> 
          </div>
          <div className="finalize-settings center">            

             
              <div className=" download-resume resume-options">
                <p className="no-margin"  >
                  Download Resume As PdF
                </p>
                    <a style={{cursor:'pointer'}}  onClick={downloadResume}  >download Resume</a>
             </div>
             <div className=" download-resume resume-options">
                <p className="no-margin"  >
                 Save to Database
                </p>
                    <a style={{cursor:'pointer'}}  onClick={saveToDatabase}  >Save to Database</a>
             </div>
    </div>
    </div>
    </div>
    )

    
}

function mapStoretoProps(store){
  console.log(store);
  return {document:store.document,contact:store.contact,education:store.education,auth:store.firebase.auth}
}

export default withRouter(connect(mapStoretoProps)(Finalize));
