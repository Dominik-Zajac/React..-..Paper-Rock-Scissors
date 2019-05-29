import React from 'react';

//Styles
import '../css/StartGame.css';

const StartGame = props => (
  <button className='btn-start' onClick={() => props.click()}>
    Start
  </button>
);

export default StartGame;
