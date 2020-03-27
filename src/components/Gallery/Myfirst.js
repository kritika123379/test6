import React, { Component } from 'react'

export class Myfirst extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#aaa"}}>
            <div className="container" style={{backgroundColor:"lightgrey"}}>
           
            <div className="row">
              <div className="col-md-4">
                <div className="thumbnail">
                  <a href="/" target="_blank">
                    <img src="/images/img2.jpg" alt="Lights" style={{width:"100%"}}/>
                    <div className="caption" style={{backgroundColor:"white",padding:"5px"}}>
                      <h5 style={{paddingLeft:"70px"}}> THE GROUNDS</h5>
                    <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumbnail">
                  <a href="/" target="_blank">
                    <img src="/images/img1.jpg" alt="Nature" style={{width:"100%"}}/>
                    <div className="caption" style={{backgroundColor:"white",padding:"5px"}}>
                    <h5 style={{paddingLeft:"70px"}}>BEDROOMS</h5>
                      <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumbnail">
                  <a href="/" target="_blank">
                    <img src="/images/img3.jpg" alt="Fjords" style={{width:"100%"}}/>
                    <div className="caption" style={{backgroundColor:"white",padding:"5px"}}>
                        <h5 style={{paddingLeft:"70px"}}>DIY WEDDINGS</h5>
                      <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
            </div>
        )
    }
}

export default Myfirst
