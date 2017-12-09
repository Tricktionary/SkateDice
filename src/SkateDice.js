import React, { Component } from 'react';
import './SkateDice.css'

class SkateDice extends Component{
    render(){
        return(
            <div
                onClick = {props.onClick} 
                className = "tile margin-top-10">
                {props.value}
            </div>
        );
    }
}

export default SkateDice;