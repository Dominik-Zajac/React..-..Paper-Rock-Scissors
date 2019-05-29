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

    this.choiceComputer();
  };

  //Wybór ruchu computera
  choiceComputer() {
    const possibleMoves = ['papier', 'kamien', 'nozyczki'];
    const computerChoice = possibleMoves[Math.floor(Math.random() * 3)];

    this.setState({
      computerChoice
    });
  }

  //Weryfikacja kto wygral
  checkResult() {
    const player = this.state.playerChoice;
    const computer = this.state.computerChoice;

    if (player === computer) {
      console.log('remis');
    } else if (
      (player === 'papier' && computer === 'kamien') ||
      (player === 'kamien' && computer === 'nozyczki') ||
      (player === 'nozyczki' && computer === 'papier')
    ) {
      console.log('wygrales');
    } else {
      console.log('Przegrales');
    }
  }

  //Rozpoczęcie gry
  handleStart = () => {
    if (!this.state.playerChoice) return alert('Wybierz dlon!');

    this.checkResult();
  };

  render() {
    return (
      <div className='app'>
        <h1 className='title-game'>Papier, kamień, nożyczki</h1>
        <SelectMove click={this.handleMove} />
        <StartGame click={this.handleStart} />
        <div className='panels'>
          <PanelLeft />
          <PanelRight />
        </div>
      </div>
    );
  }
}

export default App;
