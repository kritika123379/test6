import React from 'react'

function Background() {
    return (
        <div>
        
    
        <div className="card bg-dark text-white" >
        <img src="./images/house2.jpg" className="card-img" alt="..."/>
        <div className="card-img-overlay">
          <h5 className="card-title">
          
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            
          </div>
        </nav>



          </h5>
          <div class="text-center" 
          style={{ position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"}}>
          
        

          <p className="card-text"><h1 className="h1">UNFORGETTABLE EXPERIENCE  </h1></p>
          <p className="card-text"><h1 className="h3">IS NOT A GATEWAY OF UNPARALLEL LUXERY</h1></p>
          <button type="button" class="btn btn-warning">Book Now</button>
          </div>


          

        </div>
      </div>
        </div>
    )
}

export default Background
