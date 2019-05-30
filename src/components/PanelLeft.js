import React from 'react';

//Styles
import '../css/PanelLeft.css';

const PanelLeft = props => {
  return (
    <div className='panel-left'>
      <h4 className='subtitle'>Wyniki gry</h4>
      <p>
        Twój wybór: <span>{props.playerChoice}</span>
      </p>
      <p>
        Wybór komputera: <span>{props.computerChoice}</span>
      </p>
      <h4 className='score-title'>Wynik:</h4>
      <p>{props.score}</p>
    </div>
  );
};

export default PanelLeft;
