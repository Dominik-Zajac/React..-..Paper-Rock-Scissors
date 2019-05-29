import React, { Component } from 'react';
import SelectMove from './SelectMove';
import StartGame from './StartGame';
import PanelLeft from './PanelLeft';
import PanelRight from './PanelRight';
import '../css/App.css';

class App extends Component {
  state = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    playerChoice: '',
    computerChoice: ''
  };

  //Wybór ruchu gracza
  handleMove = (e, move) => {
    const playerChoice = move;
    this.setState({
      playerChoice
    });
  };

  render() {
    return (
      <div className='app'>
        <h1 className='title-game'>Papier, kamień, nożyczki</h1>
        <SelectMove click={this.handleMove} />
        <StartGame />
        <div className='panels'>
          <PanelLeft />
          <PanelRight />
        </div>
      </div>
    );
  }
}

export default App;
