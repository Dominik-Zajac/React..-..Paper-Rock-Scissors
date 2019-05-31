import React from 'react';

//Styles
import '../css/PanelLeft.css';

const PanelLeft = props => {
  const { playerChoice, score, computerChoice, winOfGame } = props.state;
  return (
    <div className='panel-left'>
      <h4 className='subtitle'>Wyniki gry</h4>
      <p>
        Twój wybór: <span className='player-choice choice'>{playerChoice}</span>
      </p>
      <p>
        Wybór komputera:{' '}
        <span className='computer-choice choice'>{computerChoice}</span>
      </p>
      <p className='score-title'>
        Wynik: <span className={winOfGame}>{score}</span>
      </p>
    </div>
  );
};

export default PanelLeft;
