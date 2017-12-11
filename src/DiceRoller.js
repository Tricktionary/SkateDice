import React, { Component } from 'react';
import SkateDice from './SkateDice.js'
import {DICE1 , DICE2 , DICE3} from './DiceData.js'
import './App.css';

class DiceRoller extends Component{
    constructor(){
        super();
        this.State = {
          dice1 : DICE1,
          dice2 : DICE2,
          dice3 : DICE3
        };
      }
      /*
        Renders The Dice
      */
      renderDice(input){
        const index = Math.floor(Math.random()*input.length); //Pulls The Index
        let value = input[index];                             //Value of the Die
        return(
          <SkateDice value={value} onClick = {this.rollDice(input)}/>
        );
      }
      /*
        Roll The Dice 
      */
      rollDice(input){
        console.log("LOL");
      }  
      render() {
        const diceRoll1 = this.State.dice1;     //Variation
        const diceRoll2 = this.State.dice2;     //Trick
        const diceRoll3 = this.State.dice3;     //# of Tries
        return (
          <div className="App">
            <h1>Skate Dice</h1>
            {this.renderDice(diceRoll1)}      
            {this.renderDice(diceRoll2)}
            {this.renderDice(diceRoll3)}  
            <center><button className="margin-top-50 btn wave-effect">REROLL</button></center>
         </div>
        );
    }
}
export default DiceRoller;