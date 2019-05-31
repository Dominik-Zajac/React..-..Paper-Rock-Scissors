import React, { Component } from 'react';
import SelectMove from './SelectMove';
import StartGame from './StartGame';
import PanelLeft from './PanelLeft';
import PanelRight from './PanelRight';
import '../css/App.css';

class App extends Component {
  state = {
    score: '',
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    playerChoice: '',
    computerChoice: '',
    startGame: false,
    roundOfGame: 0,
    winOfGame: ''
  };

  //Wybór ruchu gracza
  handleMove = (e, move) => {
    if (this.state.startGame === true) {
      if (this.state.numbers < this.state.roundOfGame) {
        const playerChoice = move;
        let numbers = this.state.numbers;
        numbers++;

        this.setState({
          playerChoice,
          numbers
        });

        this.checkResult();
        this.choiceComputer();
      } else {
        this.finalScore();
      }
    }
  };

  //Wyświetlenie wyniku końcowego
  finalScore() {
    if (this.state.wins === this.state.losses) {
      alert('Gra zakończona remisem');
    } else if (this.state.wins < this.state.losses) {
      alert('Przegrales z komputerem');
    } else {
      alert('Wygrales');
    }
  }

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
      let draws = this.state.draws;
      draws++;

      this.setState({
        score: 'Remis',
        draws,
        winOfGame: 'draw'
      });
    } else if (
      (player === 'papier' && computer === 'kamien') ||
      (player === 'kamien' && computer === 'nozyczki') ||
      (player === 'nozyczki' && computer === 'papier')
    ) {
      let wins = this.state.wins;
      wins++;

      this.setState({
        score: 'Wygrałeś',
        wins,
        winOfGame: 'win'
      });
    } else {
      let losses = this.state.losses;
      losses++;

      this.setState({
        score: 'Przegrałeś',
        losses,
        winOfGame: 'loss'
      });
    }
  }

  //Rozpoczęcie gry
  handleStart = () => {
    let roundOfGame = null;
    roundOfGame = prompt('Wpisz liczbe rund (min:2, max:20):');

    this.setState({
      roundOfGame
    });

    if (roundOfGame >= 2 && roundOfGame <= 20) {
      this.setState({
        startGame: true
      });
    } else {
      alert('Proszę wpisać odpowiednią liczbę rund!');
    }
  };

  render() {
    return (
      <div className='app'>
        <h1 className='title-game'>Papier kamień nożyczki</h1>
        <SelectMove click={this.handleMove} />
        <StartGame click={this.handleStart} />
        <div className='panels'>
          <PanelLeft state={this.state} />
          <PanelRight
            numbers={this.state.numbers}
            wins={this.state.wins}
            losses={this.state.losses}
            draws={this.state.draws}
          />
        </div>
      </div>
    );
  }
}

export default App;
