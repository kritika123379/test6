import React, { Component } from 'react'

export class Mysecond extends Component {
    render() {
        return (
            <div>
            <div class="gallery">
            <a target="_blank" href="img_5terre.jpg">
              <img src="/images/img1.jpg" alt="Cinque Terre" width="600" height="400"/>
            </a>
            <div class="desc">Add a description of the image here</div>
          </div>
          
          <div class="gallery">
            <a target="_blank" href="img_forest.jpg">
              <img src="/images/img1.jpg" alt="Forest" width="600" height="400"/>
            </a>
            <div class="desc">Add a description of the image here</div>
          </div>
          
          <div class="gallery">
            <a target="_blank" href="img_lights.jpg">
              <img src="/images/img1.jpg" alt="Northern Lights" width="600" height="400"/>
            </a>
            <div class="desc">Add a description of the image here</div>
          </div>
          
          <div class="gallery">
            <a target="_blank" href="img_mountains.jpg">
              <img src="/images/img1.jpg" alt="Mountains" width="600" height="400"/>
            </a>
            <div class="desc">Add a description of the image here</div>
          </div>
            </div>
        )
    }
}

export default Mysecond
