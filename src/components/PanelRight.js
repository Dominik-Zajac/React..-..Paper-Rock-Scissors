import React from 'react';

//Styles
import '../css/PanelRight.css';

const PanelRight = () => {
  return (
    <div className='panel-right'>
      <h3 className='subtitle-left'>Statystyki:</h3>
      <p>
        Liczba gier: <span>0</span>
      </p>
      <p>
        Liczba wygranych: <span>0</span>
      </p>
      <p>
        Liczba przegranych: <span>0</span>
      </p>
      <p>
        Liczba remisów: <span>0</span>
      </p>
    </div>
  );
};

export default PanelRight;
