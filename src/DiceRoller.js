import React, { Component } from 'react';
import SkateDice from './SkateDice.js'
import {DICE1 , DICE2 , DICE3} from './DiceData.js'
import './App.css';

class DiceRoller extends Component{
    constructor(){
        super();
        this.state = {
          dice1   : DICE1,
          dice2   : DICE2,
          dice3   : DICE3,
          value1  : '',
          value2  : '',
          value3  : ''
        };
      }

      roll(){
        //Dice Arrays
        let diceRoll1  = this.state.dice1;     //Variation
        let diceRoll2  = this.state.dice2;     //Trick
        let diceRoll3  = this.state.dice3;     //# of Tries

        //New Value
        let newValue1 = diceRoll1[Math.floor(Math.random()*diceRoll1.length)];
        let newValue2 = diceRoll2[Math.floor(Math.random()*diceRoll2.length)];
        let newValue3 = diceRoll3[Math.floor(Math.random()*diceRoll3.length)];

        this.setState({
          value1 : newValue1,
          value2 : newValue2,
          value3 : newValue3,
        });
        console.log(this);
      }

      renderDice(){
        return(
          <div>
            <SkateDice value={this.state.dice1[this.state.value1]} />
            <SkateDice value={this.state.dice2[this.state.value2]} />
            <SkateDice value={this.state.dice3[this.state.value3]}/>
          </div>
        );
      }

      render() {   
        return (
          <div className="App">
            <h1>Skate Dice</h1>
            {this.renderDice()}
            <center>
              <button className="margin-top-50 btn waves-effect" onClick={this.roll.bind(this)}>REROLL</button>
            </center>
         </div>
        );

    }
}
export default DiceRoller;