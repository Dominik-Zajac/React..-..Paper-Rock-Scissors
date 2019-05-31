import React from 'react';

//Styles
import '../css/PanelLeft.css';

const PanelLeft = props => {
  return (
    <div className='panel-left'>
      <h4 className='subtitle'>Wyniki gry</h4>
      <p>
        Twój wybór:{' '}
        <span className='player-choice choice'>{props.playerChoice}</span>
      </p>
      <p>
        Wybór komputera:{' '}
        <span className='computer-choice choice'>{props.computerChoice}</span>
      </p>
      <p className='score-title'>
        Wynik: <span>{props.score}</span>
      </p>
    </div>
  );
};

export default PanelLeft;
