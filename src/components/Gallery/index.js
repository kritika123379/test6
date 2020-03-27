import React, { Component } from 'react'
import Myfirst from "./Myfirst";
import "./Gallery.css";
import Mysecond from './Mysecond';
import Third from './Third';
import Myfourth from './Myfourth';

export class Gallery extends Component {
    render() {
        return (
            <div>
                <Myfirst/>
                <Third/>
                <Myfourth/>
            </div>
        )
    }
}

export default Gallery
