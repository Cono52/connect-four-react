import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



function Hole(props){
  return <div className="Hole"><div className={props.value}></div></div>
}

function Slat(props){
    return <div className="Slat" onClick={() => props.handleClick()}>
      {[...Array(props.holes.length)].map((x, j) => 
        <Hole key={j} value={props.holes[j]}></Hole>)}
      </div>
 }



class Board extends Component {

  constructor() {
    super();
    this.state = {
      boardState: new Array(7).fill(new Array(6).fill(null)),
      playerTurn: 'red'
    }
  }

  handleClick(slatID) {
    console.log(slatID)
    const boardCopy = this.state.boardState.map(function(arr) {
      return arr.slice();
    });
    if( boardCopy[slatID].indexOf(null) !== -1 ){
      let newSlat = boardCopy[slatID].reverse()
      newSlat[newSlat.indexOf(null)] = this.state.playerTurn
      newSlat.reverse()
      this.setState({
        playerTurn: (this.state.playerTurn === 'red') ? 'blue' : 'red',
        boardState: boardCopy
      })
    }else{
         console.log("slat full")
    }
    console.log(this.state.boardState)
  }

  render(){

    let slats = [...Array(this.state.boardState.length)].map((x, i) => 
      <Slat 
          key={i}
          holes={this.state.boardState[i]}
          handleClick={() => this.handleClick(i)}
      ></Slat>
    )

    return (
      <div className="Board">
        {slats}
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
          <h2>Griderator</h2> {/*<h2>C &#9829; J</h2>*/}
        </div>
        <div className="Game">
          <Board></Board>
        </div>
      </div>
    );
  }
}

export default App;
