import React, { Component } from 'react'
import Image from "./Image";
import "./Mynavbar.css";

export class  Mynavbar extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-md bg-primary navbar-primary">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav" >
                <li className="nav-item bg-primary" >
                <button className="w3-button w3-blue" > <a   className="nav-link" href="#">HOME</a></button>
                </li>
                <li className="nav-item">
                <button class="w3-button w3-blue"> <a className="nav-link" href="#">ABOUT</a></button>
                </li>
                <li className="nav-item">
                <button class="w3-button w3-blue"> <a className="nav-link" href="#">MANSION</a></button>
                </li>
                <li className="nav-item">
                <button class="w3-button w3-blue"> <a className="nav-link" href="#">FROG AND TOAD GROUNDS</a></button>
                </li>
                <li className="nav-item">
                <button class="w3-button w3-blue"> <a className="nav-link" href="#">OPTIONS</a></button>
                </li>
                
              </ul>
            </div>  
          </nav>
          <br/>
          
          <div >
          
        </div>


          

          
            </div>
        )
    }
}

export default Mynavbar
