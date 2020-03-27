import React from 'react'
import Topstrip from "./Topstrip";
import Location from './Location';
import Bottom from './Bottom';
import "./Footer.css";

function Footer() {
    return (
        <div >
            <Topstrip/>
            <Location/>
            <Bottom/>
        </div>
    )
}

export default Footer
