import React from 'react';

//Styles
import '../css/StartGame.css';

const StartGame = props => (
  <button className='btn-start' onClick={() => props.click()}>
    {props.startGame ? 'Reset' : 'Start'}
  </button>
);

export default StartGame;
