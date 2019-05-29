import React from 'react';

// Images
import PapierImage from '../images/papier.jpg';
import KamienImage from '../images/kamien.jpg';
import NozyczkiImage from '../images/nozyczki.jpg';

//Styles
import '../css/SelectMove.css';

const SelectMove = props => {
  return (
    <div className='select-container'>
      <h3 className='select-title'>Proszę, wybierz:</h3>
      <div className='row'>
        <img
          src={PapierImage}
          alt='Papier'
          onClick={() => props.click(null, 'papier')}
        />
        <img
          src={KamienImage}
          alt='Kamień'
          onClick={() => props.click(this, 'kamien')}
        />
        <img
          src={NozyczkiImage}
          alt='Nożyczki'
          onClick={() => props.click(null, 'nozyczki')}
        />
      </div>
    </div>
  );
};

export default SelectMove;
