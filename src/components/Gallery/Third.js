import React, { Component } from 'react'

export class Third extends Component {
    render() {
        return (
            <div>
            <div class="container">
            <h1 style={{color:"blue"}}> Gallery</h1>
            <div class="row">
              <div class="col-md-3">
                <div class="thumbnail">
                  <a href="/" target="_blank">
                    <img src="/images/img1.jpg" alt="Lights" style={{width:"100%"}}/>
                    <div class="caption">
                      <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3">
                <div class="thumbnail">
                  <a href="/" target="_blank">
                    <img src="/images/img1.jpg" alt="Nature" style={{width:"100%"}}/>
                    <div class="caption">
                      <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3">
                <div class="thumbnail">
                  <a href="/" target="_blank">
                    <img src="/images/img2.jpg" alt="Nature" style={{width:"100%"}}/>
                    <div class="caption">
                      <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-3">
                <div class="thumbnail">
                  <a href="/" target="_blank">
                    <img src="/images/img1.jpg" alt="Fjords" style={{width:"100%"}}/>
                    <div class="caption">
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

export default Third
