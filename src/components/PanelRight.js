import React from 'react';

//Styles
import '../css/PanelRight.css';

const PanelRight = props => {
  const { numbers, wins, losses, draws } = props;
  return (
    <div className='panel-right'>
      <h3 className='subtitle-right'>Statystyki:</h3>
      <p>
        Liczba gier: <span>{numbers}</span>
      </p>
      <p>
        Liczba wygranych: <span>{wins}</span>
      </p>
      <p>
        Liczba przegranych: <span>{losses}</span>
      </p>
      <p>
        Liczba remisów: <span>{draws}</span>
      </p>
    </div>
  );
};

export default PanelRight;
