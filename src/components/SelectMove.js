import React from 'react';

//Styles
import '../css/SelectMove.css';

const SelectMove = props => {
  return (
    <div className='select-container'>
      <h3 className='select-title'>Proszę, wybierz:</h3>
      <div className='row'>
        <div
          className='paper select'
          onClick={() => props.click(null, 'papier')}
        />
        <div
          className='rock select'
          onClick={() => props.click(this, 'kamien')}
        />
        <div
          className='scissors select'
          onClick={() => props.click(null, 'nozyczki')}
        />
      </div>
    </div>
  );
};

export default SelectMove;
