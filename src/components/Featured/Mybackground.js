import React, { Component } from 'react'
import "./Mybackground.css";

export class  Mybackground extends Component {
    render() {
        return (
            <React.Fragment>
                
            


        <header>
         
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
            <div className="container">
              <a className="navbar-brand" href="#">
                <strong>MDB</strong>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                  </li>
                </ul>
                <form className="form-inline">
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                  </div>
                </form>
              </div>
            </div>
          </nav>
      
          <div className="view" >
        
            <div className="mask rgba-gradient align-items-center">
             
              <div className="container">
               
                <div className="row">
                 
                  <div className="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft" data-wow-delay="0.3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5">Make purchases with our app </h1>
                    <hr className="hr-light"/>
                    <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                    dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                    iste.</h6>
                    <a className="btn btn-white">Download</a>
                    <a className="btn btn-outline-white">Learn more</a>
                  </div>
                  
                  <div className="col-md-6 col-xl-5 mt-xl-5 wow fadeInRight" data-wow-delay="0.3s">
                    <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt="" className="img-fluid"/>
                  </div>
                  
                </div>
               
              </div>
             
            </div>
           
          </div>
          
        </header>
        
        <main>
          <div className="container">
         
            <div className="row py-5">
              
              <div className="col-md-12 text-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            
            </div>
            
          </div>
        </main>
       

  



            </React.Fragment>
        )
    }
}

export default Mybackground
