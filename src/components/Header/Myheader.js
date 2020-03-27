import React, { Component } from 'react'

export class Myheader extends Component {
    render() {
        return (
            <div>
            <div className="w3-container w3-black" style={{padding:"20px"}}>
            <p>Welcome to me alawara Mension is a unique Gold Coast Estate</p>
            <span style={{ color: "white" ,position:"absolute",right:'110px'}}> <i className="fab fa-facebook fa-lg"></i></span>
             <span style={{ color: "white" ,position:"absolute",right:'80px'}}><i className="fab fa-twitter fa-lg"></i></span>
             <span style={{ color: "white" ,position:"absolute",right:'50px'}}><i className="fab fa-linkedin-in fa-lg"></i></span>
             <span style={{ color: "white" ,position:"absolute",right:' 20px'}}><i className="fas fa-camera fa-lg" ></i></span>
            
          </div>
          
          <div className="w3-row-padding w3-padding-24" style={{padding:""}}>
            <div className="w3-third">
              <h1>CompanyLogo</h1>
             
            </div>
          
            

            <div className="w3-third">
              
              <p><p ><span>
        <i className="fas fa-map-marker-alt"></i></span>Alawara Mension<br/>
        9 Alawara Dr,Tallai QLD 4213,Australia</p></p>
            </div>

          
            <div className="w3-third">
            
              <p><span><i className="fas fa-phone-volume"></i></span>           913564346673 <br/>info@Alawara.com<br/> 
             
             
             </p>
            </div>
          </div>
            </div>
        )
    }
}

export default Myheader
