import React, { Component } from 'react'
import Mynavbar from './Mynavbar'
import Image from "./Image";
import Mybackground from './Mybackground';
import Mycontent from './Mycontent';

export class Featured extends Component {
    render() {
        return (
            <div>
                <Image/>
                <Mycontent/>
            </div>
        )
    }
}

export default Featured
