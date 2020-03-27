import React, { Component } from 'react'
import Footer from "./Footer";

import "./Content.css";

export default class Content extends Component {
    render() {
        return (
            <React.Fragment>
                
            <div className="header">
            <h2>h</h2>
          </div>
          
          <div className ="body">
          <h2 className="myheader">CSS Template using Flexbox</h2>
          <p>In this example, we have created a header, three equal columns and a footer. On smaller screens, the columns will stack on top of each other.</p>
          <p>Resize the browser window to see the responsive effect.</p>
          <p><strong>Note:</strong> Flexbox is not supported in Internet Explorer 10 eand earlier versions.</p>
          </div>
          
          <div className="first">
          <div className="firstrow">
            <div className="firstcolumn" style={{backgroundColor:"white"}}><div style={{backgroundColor:"white"}}className="innercol"></div>
            <div  style={{backgroundColor:"#aaa"}}>
            <p>The Description</p>
            <p>More description</p>
            </div>
            </div>
            <div className="firstcolumn" style={{backgroundColor:"white"}}></div>
            <div className="firstcolumn" style={{backgroundColor:"white"}}></div>
          </div>
          </div>
          
          <div className="second">
          <div className="row">
            <div className="column" style={{backgroundColor:"#aaa"}}>
 </div>
            <div className="column" style={{backgroundColor:"#aaa"}}></div>
            <div className="column" style={{backgroundColor:"#aaa"}}></div>
             <div className="column" style={{backgroundColor:"#aaa"}}></div>
          </div>
          </div>
          
          <div className="third">
          <div className="row">
            <div className="columnsecond" style={{backgroundColor:"#aaa"}}>Column</div>
            <div className="columnsecond" style={{backgroundColor:"#bbb"}}>Column</div>
            <div className="columnsecond" style={{backgroundColor:"#ccc"}}>Column</div>
             <div className="columnsecond" style={{backgroundColor:"#ddd"}}>Column</div>
          </div>
          </div>
          
          
          
          <div className="footer">
            <p><Footer/></p>
          </div>
          
            </React.Fragment>
        )
    }
}
