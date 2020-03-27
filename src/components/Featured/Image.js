import React from "react";
import './Image.css';
import Mynavbar from "./Mynavbar";



const BackgroundImagePage = () => {
  return (
      <div className="bg">
      <Mynavbar/>
      <div className="centered">
      <div className="example" style={{textSize:"20px",color:"white"}}>Unforgettable Expirience<br/>
      <h2>A UNIQUE GATEWAY IS NOT A WORLD OF UNPARALLEL LUXERY</h2>
      
      <button type="button" className="btn btn-warning"><h4>Book Now</h4></button>
 {/* <a href="something" class="button4" style={{backgroundColor:"#ffcc00",fontSize: "30px"}}>Book Now</a>*/}
      </div>
      </div>
      </div>
  );
}

export default BackgroundImagePage;