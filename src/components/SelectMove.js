import React from 'react';
import PapierImage from '../images/papier.jpg';
import KamienImage from '../images/kamien.jpg';
import NozyczkiImage from '../images/nozyczki.jpg';

const SelectMove = () => {
  return (
    <div>
      <h3 className='title-select'>Proszę, wybierz:</h3>
      <div className='row'>
        <img src={PapierImage} alt='Papier' />
        <img src={KamienImage} alt='Kamień' />
        <img src={NozyczkiImage} alt='Nożyczki' />
      </div>
    </div>
  );
};

export default SelectMove;
