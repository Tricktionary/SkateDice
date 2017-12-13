import React, { Component } from 'react';
import SkateDice from './SkateDice.js'
import {DICE1 , DICE2 , DICE3} from './DiceData.js'
import './App.css';

class DiceRoller extends Component{
    constructor(props){
        super(props);
        this.state = {
          dice1  : DICE1,
          dice2  : DICE2,
          dice3  : DICE3,
          values : Array(3).fill(null),
        };
      }
      
      handleClick(){
        let roll1 = this.state.dice1[Math.floor( Math.random() * this.state.dice1.length)];
        let roll2 = this.state.dice2[Math.floor( Math.random() * this.state.dice2.length)];
        let roll3 = this.state.dice3[Math.floor( Math.random() * this.state.dice3.length)];

        let newValues = [roll1,roll2,roll3];
        //console.log(newValues);
        this.setState({
          values : newValues,
        })
      }

      renderDice(i){
        return(
          <SkateDice value={this.state.values[i]}/>
        );
      }

      render() {   
        return (
          <div className="App">
            <h1>Skate Dice</h1>
            {this.renderDice(0)}
            {this.renderDice(1)}
            {this.renderDice(2)}
            <center>
              <button 
                className='btn waves-effect' 
                onClick = {() => this.handleClick()}>
                ROLL
              </button>
            </center>
          </div>

        );

    }
}
export default DiceRoller;