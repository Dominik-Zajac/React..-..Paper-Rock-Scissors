import React from 'react';

//Styles
import '../css/PanelRight.css';

const PanelRight = props => {
  return (
    <div className='panel-right'>
      <h3 className='subtitle-right'>Statystyki:</h3>
      <p>
        Liczba gier: <span>{props.numbers}</span>
      </p>
      <p>
        Liczba wygranych: <span>{props.wins}</span>
      </p>
      <p>
        Liczba przegranych: <span>{props.losses}</span>
      </p>
      <p>
        Liczba remisów: <span>{props.draws}</span>
      </p>
    </div>
  );
};

export default PanelRight;
