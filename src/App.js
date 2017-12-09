import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SkateDice from './SkateDice.js'

class App extends Component {
  constructor(){
    super();
    this.State = {

    };
  }

  render() {
    return (
      <div className="App">
        <SkateDice/>
        <SkateDice/>
        <SkateDice/>
        <SkateDice/>
      </div>
    );
  }
}

export default App;
