import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SkateDice from './SkateDice.js'
import {DICE1 , DICE2 , DICE3} from './DiceData.js'

class App extends Component {
  constructor(props){
    super(props);
    this.State = {
      dice1 : DICE1,
      dice2 : DICE2,
      dice3 : DICE3
    };
  }
  renderDice(input){
    return(
      <SkateDice/>
    );
  }
  render() {
    const index1 = Math.floor(Math.random()*7);
    const index2 = Math.floor(Math.random()*5);
    const index3 = Math.floor(Math.random()*6);
    const diceRoll1 = this.state.dice1;
    const diceRoll2 = this.state.dice2;
    const diceRoll3 = this.state.dice3;
    return (
      <div className="App">
        {this.renderDice(diceRoll1[index1])}
        {this.renderDice(diceRoll2[index2])}
        {this.renderDice(diceRoll3[index3])}  
      </div>
    );
  }
}

export default App;
