import React, { Component } from 'react';
import './SkateDice.css'

export default function SkateDice(props){
    return(
        <div className = 'tile margin-top-5'>
            {props.value}
        </div>
    );
}