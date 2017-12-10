import React, { Component } from 'react';
import './App.css';
import DiceRoller from './DiceRoller.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DiceRoller/>
      </div>
    );
  }
}

export default App;
