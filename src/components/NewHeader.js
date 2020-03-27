import React from 'react'
import "./Newheader.css";

function NewHeader() {
    return (
      <React.Fragment>
        <div style={{paddingBottom:"50px"}}>
        
      
      <div style={{paddingLeft:"20px",paddingTop:"40px"}}>
        <h1 className="logo" style={{paddingBottom:"30px"}}>CompanyLogo</h1>
        <p><p style={{ position:"absolute",top:"130px",right:"450px"}}><span>
        <i className="fas fa-map-marker-alt"></i></span>Alawara Mension<br/>
        9 Alawara Dr,Tallai QLD 4213,Australia</p></p>
        <p
         style={{ color: "black" ,position:"absolute",right:'150px',top:"130px"}}><span><i className="fas fa-phone-volume"></i></span>           913564346673 <br/>info@Alawara.com<br/> 
        
        
        </p>
      </div>
      
        </div>
        </React.Fragment>
    )
}

export default NewHeader
