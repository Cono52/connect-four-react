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

  constructor(props) {
    super(props)
    this.state = {
      piecesSoFar: 0,
      holes: new Array(this.props.depth).fill(0)
    }
  }

  dropPiece(){

    const pieces = this.state.piecesSoFar;
    const depth = this.state.holes.length;

    console.log("Drop a piece into a slat")
    if(pieces < depth ){
      this.setState({
        piecesSoFar: this.state.piecesSoFar+1
      })
    }
    console.log(this.state.piecesSoFar)
  }


  render(){

    let holes = [...Array(this.state.holes.length)].map((x, j) => 
      <Hole key={j}></Hole>
    )

    return (
      <div className="Slat" onClick={() => this.dropPiece()}>
        {holes}
      </div>
    )
  }
}


class Board extends Component {

  constructor() {
    super();
    this.state = {
      dimensions: { rows: 6, cols: 7 }
    };
  }

  handleClick() {
    console.log("Clicked Board")
  }

  render(){

    let slats = [...Array(this.state.dimensions.cols)].map((x, j) => 
      <Slat key={j} depth={this.state.dimensions.rows}></Slat>
    )

    return (
      <div className="Board" onClick={() => this.handleClick()}>
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
