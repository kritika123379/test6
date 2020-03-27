import React, { Component } from 'react'

export class Mycontent extends Component {
    render() {
        return (
            <div>
            <div className="container" style={{marginTop:"50px",textAlign:"center"}}>
            <h2 style={{textAlign:"center"}}>Welcome To The Alawara Mention</h2>
            <p>In this example, the navigation bar is hidden on small screens and replaced by a button in the top right corner (try to re-size this window).</p>
            <p>Only when the button is clicked, the navigation bar will be displayed.</p>
            <p>Tip: You can also remove the .navbar-expand-md className to ALWAYS hide navbar links and display the toggler button.</p>
          </div>
            </div>
        )
    }
}

export default Mycontent
