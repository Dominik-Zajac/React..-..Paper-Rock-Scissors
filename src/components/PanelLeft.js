import React from 'react';

//Styles
import '../css/PanelLeft.css';

const PanelLeft = () => {
  return (
    <div className='panel-left'>
      <h4 className='subtitle'>Wyniki gry</h4>
      <p>
        Twój wybór: <span>...</span>
      </p>
      <p>
        Wybór komputera: <span>...</span>
      </p>
      <h4 className='score-title'>Wynik:</h4>
      <p>Remis</p>
    </div>
  );
};

export default PanelLeft;
