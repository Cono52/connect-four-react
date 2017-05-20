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
      playerTurn: 'Red'
    }
  }

  handleClick(slatID) {
    const boardCopy = this.state.boardState.map(function(arr) {
      return arr.slice();
    });
    if( boardCopy[slatID].indexOf(null) !== -1 ){
      let newSlat = boardCopy[slatID].reverse()
      newSlat[newSlat.indexOf(null)] = this.state.playerTurn
      newSlat.reverse()
      this.setState({
        playerTurn: (this.state.playerTurn === 'Red') ? 'Blue' : 'Red',
        boardState: boardCopy
      })
    }
  }

  render(){
    let winner = checkWinner(this.state.boardState)
    let winnerMessageStyle
    if(winner !== ""){
      winnerMessageStyle = "winnerMessage appear"
    }else {
      winnerMessageStyle = "winnerMessage"
    }
    let slats = [...Array(this.state.boardState.length)].map((x, i) => 
      <Slat 
          key={i}
          holes={this.state.boardState[i]}
          handleClick={() => this.handleClick(i)}
      ></Slat>
    )

    return (
      <div>
        <div className="Board">
          {slats}
        </div>
        <div className={winnerMessageStyle}>{winner}</div>
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
          <h2>Griderator</h2>
        </div>
        <div className="Game">
          <Board></Board>
        </div>
      </div>
    );
  }
}

function checkLine(a,b,c,d) {
    return ((a !== null) && (a === b) && (a === c) && (a === d));
}

function checkWinner(bs) {
    for (let c = 0; c < 7; c++)
        for (let r = 0; r < 4; r++)
            if (checkLine(bs[c][r], bs[c][r+1], bs[c][r+2], bs[c][r+3]))
                return bs[c][r] + ' wins!'

    for (let r = 0; r < 6; r++)
         for (let c = 0; c < 4; c++)
             if (checkLine(bs[c][r], bs[c+1][r], bs[c+2][r], bs[c+3][r]))
                 return bs[c][r] + ' wins!'

    for (let r = 0; r < 3; r++)
         for (let c = 0; c < 4; c++)
             if (checkLine(bs[c][r], bs[c+1][r+1], bs[c+2][r+2], bs[c+3][r+3]))
                 return bs[c][r] + ' wins!'

    for (let r = 0; r < 4; r++)
         for (let c = 3; c < 6; c++)
             if (checkLine(bs[c][r], bs[c-1][r+1], bs[c-2][r+2], bs[c-3][r+3]))
                 return bs[c][r] + ' wins!'

    return "";
}

export default App;
