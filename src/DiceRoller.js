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
          values :Array(3).fill(null),
          pastTricks :Array(0).fill(null),
        };
      }
      
      handleClick(){
        let roll1 = this.state.dice1[Math.floor( Math.random() * this.state.dice1.length)];
        let roll2 = this.state.dice2[Math.floor( Math.random() * this.state.dice2.length)];
        let roll3 = this.state.dice3[Math.floor( Math.random() * this.state.dice3.length)];

        let newValues = [roll1,roll2,roll3];
        let trick = roll1 + ' ' + roll2 + ' ' + roll3 ;

        let trickLib = this.state.pastTricks.slice(0, this.state.pastTricks.length +1);
        trickLib[trickLib.length] = trick;

        this.setState({
          values : newValues,
          pastTricks : trickLib,
        })
      }

      renderDice(i){
        return(
          <SkateDice value={this.state.values[i]}/>
        );
      }

      renderOldTricks(i){
        const listItems = i.map((trick) =>
          <li>{trick}</li>
        );
        return(
          <ol>
            {listItems}
          </ol>
        );
      }
      render() {   
        const pastTricks = this.state.pastTricks;
        return (
          <div className="App">
            <h1>Skate Dice</h1>
            <p className="center">Created By: Andy Bui</p>
            <div className="row">
              <div className="col m6 s6">
                <h4>Dice</h4>
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
              <div className="col m6 s6">
                <h4 className="center">Past Tricks</h4>
                {this.renderOldTricks(pastTricks)}
              </div>
            </div>
             
          </div>

        );

    }
}
export default DiceRoller;