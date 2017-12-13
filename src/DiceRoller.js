import React, { Component } from 'react';
import SkateDice from './SkateDice.js'
import {DICE1 , DICE2 , DICE3} from './DiceData.js'
import './App.css';

class DiceRoller extends Component{
    constructor(){
        super();
        this.State = {
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
        let diceRoll1  = this.State.dice1;     //Variation
        let diceRoll2  = this.State.dice2;     //Trick
        let diceRoll3  = this.State.dice3;     //# of Tries

       

        //New Value
        let newValue1 = diceRoll1[Math.floor(Math.random()*diceRoll1.length)];
        let newValue2 = diceRoll2[Math.floor(Math.random()*diceRoll2.length)];
        let newValue3 = diceRoll3[Math.floor(Math.random()*diceRoll3.length)];

        this.setState({
          value1 : newValue1,
          value2 : newValue2,
          value3 : newValue3,
        });
        console.log(newValue1);
        console.log(newValue2);
        console.log(newValue3);
        //console.log(this.State.value1);
        //console.log(this.State.value2);
        //console.log(this.State.value3);
        
        
      }

      renderDice(){
        return(
          <div>
            <SkateDice value={this.State.dice1[this.State.value1]} />
            <SkateDice value={this.State.dice2[this.State.value2]} />
            <SkateDice value={this.State.dice3[this.State.value3]}/>
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