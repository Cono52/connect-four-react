import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Hole extends Component {
  render(){
    return (
      <div className="Hole"></div>
    )
  }
}



class Slat extends Component {
  render(){
    return (
      <div className="Slat">
        <Hole></Hole>
        <Hole></Hole>
        <Hole></Hole>
        <Hole></Hole>
        <Hole></Hole>
        <Hole></Hole>
      </div>
    )
  }
}


class Board extends Component {
  render(){
    return (
      <div className="Board">
        <Slat></Slat>
        <Slat></Slat>
        <Slat></Slat>
        <Slat></Slat>
        <Slat></Slat>
        <Slat></Slat>
        <Slat></Slat>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>C - 4</h2>
        </div>
        <div className="Game">
          <Board></Board>
        </div>
      </div>
    );
  }
}

export default App;
