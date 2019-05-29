import React from 'react';

// Images
import PapierImage from '../images/papier.jpg';
import KamienImage from '../images/kamien.jpg';
import NozyczkiImage from '../images/nozyczki.jpg';

//Styles
import '../css/SelectMove.css';

const SelectMove = () => {
  return (
    <div className='select-container'>
      <h3 className='select-title'>Proszę, wybierz:</h3>
      <div className='row'>
        <img src={PapierImage} alt='Papier' />
        <img src={KamienImage} alt='Kamień' />
        <img src={NozyczkiImage} alt='Nożyczki' />
      </div>
    </div>
  );
};

export default SelectMove;
