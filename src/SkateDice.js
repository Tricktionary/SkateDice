import React, { Component } from 'react';
import './SkateDice.css'

class SkateDice extends Component{
    render(){
        return(
            <div className = "tile margin-top-10">
                {this.props.value}
            </div>
        );
    }
}

export default SkateDice;