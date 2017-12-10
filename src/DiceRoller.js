import React, { Component } from 'react';
import SkateDice from './SkateDice.js'
import {DICE1 , DICE2 , DICE3} from './DiceData.js'

class DiceRoller extends Component{
    constructor(){
        super();
        this.State = {
          dice1 : DICE1,
          dice2 : DICE2,
          dice3 : DICE3
        };
      }
      renderDice(input){
        return(
          <SkateDice value={input} />
        );
      }
      
      render() {
        const index1 = Math.floor(Math.random()*7);
        const index2 = Math.floor(Math.random()*5);
        const index3 = Math.floor(Math.random()*6);
        const diceRoll1 = this.State.dice1;
        const diceRoll2 = this.State.dice2;
        const diceRoll3 = this.State.dice3;
        return (
          <div className="App">
            <h1>Skate Dice</h1>
            {this.renderDice(diceRoll1[index1])}
            {this.renderDice(diceRoll2[index2])}
            {this.renderDice(diceRoll3[index3])}  
         </div>
        );
    }
}
export default DiceRoller;